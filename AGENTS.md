# Instructions for Codex agents

This repository contains the public marketing site of Simple Analytics. It is built with Nuxt 3 and uses Tailwind CSS, Pinia, and i18n. When editing code in this project, please follow these guidelines:

## Style and conventions

- Use Vue 3 with `<script setup>` where possible and keep the coding style consistent with existing components.
- Keep files formatted with Prettier. Run `npm run prettier` from the project root before committing any changes.
- Use existing utility functions and composables (such as `useArticle`) when loading content rather than creating custom fetch logic.
- Translations live under the `locales/` directory. When adding or changing text in the UI, make sure to update the translation files accordingly.
- Icons come from the Heroicons library unless otherwise noted.

## Testing

There are no unit tests, but formatting must pass. Run the command below to verify formatting:

```bash
npm run prettier
```

Only commit your changes after this command succeeds.
