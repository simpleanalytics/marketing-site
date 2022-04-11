#! /bin/bash

set -eu

bucket="sa-marketing-assets"

echo "=> Preparing deploy"

if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | sed 's/\r$//' | awk '/=/ {print $1}' )
else
  echo "Can not find .env variables"
  exit 1
fi

if [[ -z ${BUNNY_CDN_ACCESS_KEY+x} || -z ${BUNNY_CDN_ACCOUNT_KEY+x} ]]; then
  echo "Make sure BUNNY_CDN_ACCESS_KEY and BUNNY_CDN_ACCOUNT_KEY are defined in .env"
  exit 1
fi

echo "=> Building"

npm run build && cp ./ecosystem.config.js ./.output/server/ && cd ./.output/server/ && zip -r ../../app.zip . && cd -

echo "=> Uploading server via SSH"

current_date=$(date +"%Y-%m-%d")
scp -q -o LogLevel=QUIET app.zip "app@simpleanalytics.com:/home/app/apps/marketing-site/$current_date-app.zip"

echo "=> Minimize images"

if [ -f "node_modules/imageoptim-cli/dist/imageoptim" ]; then
  node_modules/imageoptim-cli/dist/imageoptim '.output/public/**/*.png' '.output/public/**/*.jpg' '.output/public/**/*.jpeg'
else
  echo "Install imageoptim-cli with 'npm install'"
  exit 1
fi

echo "=> Uploading to BunnyCDN..."

find .output/public -type f ! -iname ".DS_Store" -print0 | while read -d $'\0' localfile
do
  cdnfilename="${localfile/\.output\/public\//}"

  put_response=$(curl \
    --request PUT \
    --url "https://storage.bunnycdn.com/$bucket/$cdnfilename" \
    --header "AccessKey: $BUNNY_CDN_ACCESS_KEY" \
    --upload-file "$localfile" \
    --output - \
    --silent \
    -w "%{stdout} %{http_code}"
  )

  if ! [[ $put_response = *201* ]]; then
    echo "Failed to update $cdnfilename, got http code: $put_response"
    exit 1
  fi
done

echo "=> Flushing files on BunnyCDN..."

find .output/public -type f ! -iname ".DS_Store" -print0 | while read -d $'\0' localfile
do
  cdnfilename="${localfile/\.output\/public\//}"
  flush_response=$(curl \
    --request POST \
    --header "AccessKey: $BUNNY_CDN_ACCOUNT_KEY" \
    --url "https://api.bunny.net/purge?url=https://$bucket.b-cdn.net/$cdnfilename" \
    --output - \
    --silent \
    -w "%{stdout} %{http_code}"
  )

  if ! [[ $flush_response = *200 ]]; then
    echo "Failed to flush $cdnfilename, got http code: $flush_response"
    exit 1
  fi
done

echo "=> To deploy the Node.js app, run this command on the server"
echo "cd /home/app/apps/marketing-site/ && unzip -o $current_date-app.zip && sudo service marketing-site restart && service marketing-site status"
