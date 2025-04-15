#!/bin/sh

# Copy the pre-existing files to the mounted volume
rm -rf /mnt/marketing_site_public/*
cp -r /src/.output/public/* /mnt/marketing_site_public/

# Execute the original entrypoint command
node --max-old-space-size=2400 node .output/server/index.mjs
