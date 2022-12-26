#! /bin/bash

set -Eeuo pipefail

bucket="sa-marketing-assets"

if [ -f .env ]; then
    export $(grep -v '^#' .env | sed 's/\r$//' | awk '/=/ {print $1}' )
else
  echo "🚀 Preparing deploy"
  echo "Can not find .env variables"
  exit 1
fi

if [[ -z ${BUNNY_CDN_ACCESS_KEY+x} || -z ${BUNNY_CDN_ACCOUNT_KEY+x} ]]; then
  echo "🚀 Preparing deploy"
  echo "Make sure BUNNY_CDN_ACCESS_KEY and BUNNY_CDN_ACCOUNT_KEY are defined in .env"
  exit 1
fi

read -r -p "🚀 Are you sure you want to deploy to production? [y/N] " prompt
if ! [[ $prompt == "y" ]]; then
  echo "Aborted by you. Next time, type 'y' to confirm."
  exit 0
fi

echo "🚀 Building"

rm -f app.zip \
  && DEPLOYING=true npm run build \
  && mkdir -p ./.output/server/data/ \
  && cp ./server/data/geolite-country.mmdb ./.output/server/data/geolite-country.mmdb \
  && cd ./.output/ \
  && zip -q -r ../app.zip . \
  && cd -

echo "🚀 Uploading server part via SSH"

current_date=$(date +"%Y-%m-%d")
scp -q -o LogLevel=QUIET app.zip "app@simpleanalytics.com:/home/app/apps/marketing-site/$current_date-app.zip"

echo "🚀  Minimize images"

if [ -f "node_modules/imageoptim-cli/dist/imageoptim" ]; then
  node_modules/imageoptim-cli/dist/imageoptim '.output/public/**/*.png' '.output/public/**/*.jpg' '.output/public/**/*.jpeg'
else
  echo "Install imageoptim-cli with 'npm install'"
  exit 1
fi

echo "🚀 Uploading to BunnyCDN..."

find .output/public -type f ! -iname ".DS_Store" -print0 | while read -r -d $'\0' localfile
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

echo "🚀 Flushing files on BunnyCDN..."

find .output/public -type f ! -iname ".DS_Store" -print0 | while read -r -d $'\0' localfile
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

echo "🚀 Deploy new version of the app"
ssh app@simpleanalytics.com "cd /home/app/apps/marketing-site/ && unzip -qq -o $current_date-app.zip && sudo /bin/systemctl restart marketing-site.service && /bin/systemctl status marketing-site.service && date"
