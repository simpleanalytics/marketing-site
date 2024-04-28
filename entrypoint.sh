#!/bin/sh

# Copy the pre-existing files to the mounted volume
cp -r /src/.output/public/* /mnt/marketing_site_public/

# Execute the original entrypoint command
node .output/server/index.mjs
