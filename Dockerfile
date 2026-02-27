# syntax = docker/dockerfile:1

ARG NODE_VERSION=24

FROM node:${NODE_VERSION}-slim AS base

ARG PORT=3000

# Make sure nuxi will be installed
ENV NODE_ENV=development

RUN corepack enable

RUN apt-get update && apt-get install -y \
  jpegoptim \
  pngquant

WORKDIR /src

# Build
FROM base AS build

COPY package.json pnpm-lock.yaml .npmrc .

RUN pnpm install --frozen-lockfile

COPY . .

# Set correct environment after installing dependencies
ENV NODE_ENV=production

RUN pnpm run build

# Clean up images
RUN find /src/.output/public -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -exec jpegoptim --max=70 -f --strip-all {} \;
RUN find /src/.output/public -type f -iname '*.png' -exec pngquant --quality=50-70 --strip --skip-if-larger --ext .png --force {} \;

RUN pnpm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

ADD https://assets.simpleanalytics.com/files/2025-07-07-geolite-country.mmdb /src/server/data/geolite-country.mmdb

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
