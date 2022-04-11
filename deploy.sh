#! /bin/bash

set -eu

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

npm run build && cp ./ecosystem.config.js ./.output/server/ && zip -r app.zip .output/server

if [ -f "node_modules/imageoptim-cli/dist/imageoptim" ]; then
  node_modules/imageoptim-cli/dist/imageoptim '.output/public/**/*.png' '.output/public/**/*.jpg' '.output/public/**/*.jpeg'
else
  echo "Install imageoptim-cli with 'npm install'"
  exit 1
fi

echo "Uploading to BunnyCDN..."

find .output/public -type f ! -iname ".DS_Store" -print0 | while read -d $'\0' localfile
do
  cdnfilename="${localfile/\.output\/public\//}"
  put_response=$(curl \
    --request PUT \
    --url "https://storage.bunnycdn.com/sa-marketing-assets/$cdnfilename" \
    --header "AccessKey: $BUNNY_CDN_ACCESS_KEY" \
    -F "file=@$localfile" \
    -o - \
    -s \
    -w "%{stdout} %{http_code}"
  )

  if ! [[ $put_response = *201 ]]; then
    echo "Failed to update $cdnfilename, got http code: $put_response"
    exit 1
  fi
done

echo "Flushing files on BunnyCDN..."

find .output/public -type f ! -iname ".DS_Store" -print0 | while read -d $'\0' localfile
do
  flush_response=$(curl \
    --request POST \
    --header "AccessKey: $BUNNY_CDN_ACCOUNT_KEY" \
    --url 'https://api.bunny.net/purge?url=https://sa-marketing-assets.b-cdn.net/favicon.ico' \
    -o - \
    -s \
    -w "%{stdout} %{http_code}"
  )

  if ! [[ $flush_response = *200 ]]; then
    echo "Failed to flush $cdnfilename, got http code: $flush_response"
    exit 1
  fi
done

echo "Done!"

# https://panel.bunny.net/api/purge/?url=https%3A%2F%2Fmarketing-assets.b-cdn.net%2Fpalettte.app.json&log=true
