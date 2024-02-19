# syntax = docker/dockerfile:1

ARG NODE_VERSION=20.11.1

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

# Make sure nuxi will be installed
ENV NODE_ENV=development

RUN apt-get update && apt-get install -y \
  jpegoptim \
  pngquant

WORKDIR /src

# Build
FROM base as build

COPY package*.json .

RUN npm install

COPY . .

# Set correct environment after installing dependencies
ENV NODE_ENV=production

RUN npm run build

# Clean up images
RUN find /src/.output/public -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -exec jpegoptim --max=70 -f --strip-all {} \;
RUN find /src/.output/public -type f -iname '*.png' -exec pngquant --quality=50-70 --strip --skip-if-larger --ext .png --force {} \;

RUN npm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

ADD https://assets.simpleanalytics.com/files/2022-05-17-geolite-country.mmdb /src/server/data/geolite-country.mmdb

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
