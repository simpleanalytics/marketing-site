# Instructions for coding agents

This repository contains the public marketing site of Simple Analytics. It is built with Nuxt 3 and uses Tailwind CSS, Pinia, and i18n. When editing code in this project, please follow these guidelines:

## Style and conventions

- Use Vue 3 with `<script setup>` where possible and keep the coding style consistent with existing components.
- Keep files formatted with Prettier. Run `npm run prettier` from the project root before committing any changes.
- Use existing utility functions and composables (such as `useArticle`) when loading content rather than creating custom fetch logic.
- Translations live under the `locales/` directory. When adding or changing text in the UI, make sure to update the translation files accordingly.
- Icons come from the Heroicons library unless otherwise noted.

## Testing

Run `npm run test` to run the tests.

## Local development

- Install dependencies with `npm install` if not already installed.
- Run `npm run dev` to start the dev server on http://localhost:3005.
- Nuxt requires `server/data/geolite-country.mmdb` for certain features. See README for instructions.

## Formatting

- Run `npm run prettier` before committing changes and make sure it succeeds.
