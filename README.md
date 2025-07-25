# Simple Analytics marketing site

We use:

- [Tailwindcss 3](https://tailwindcss.com/docs/utility-first)
- [Nuxt.js 3](https://v3.nuxtjs.org)

## Setup

1. Make sure to install the dependencies

```bash
npm install
```

2. Download the geolite-country.mmdb [here](https://assets.simpleanalytics.com/files/2025-07-07-geolite-country.mmdb) and copy it to `server/data/geolite-country.mmdb`

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Deploy

We automatically deploy from the `main` branch to production. We build a Docker image and push this to the GitHub registry. Via SSH we run a deploy command on the server which pulls in the latest image and restarts the app.

## Dev Q&A

### How can we retrieve possible subcategories for resources from Strapi?

We use article type for that. You can add one to the hardcoded list in Strapi for the new alternative pages.

### Currently, for the glossary, we are using static categories directly from the data/glossary file. Is there a similar composable function available, like useArticle?

Yes, you can just use that useArticle for the new pages as well. Everything that looks like a blog page should use `useArticle` ([composables/article.js](composables/article.js))

For the glossary, I hardcoded the two categories. If they don’t change often, that’s the way to go. We don’t use Strapi for the structure of the data. Just to store articles and stuff.

### How do we utilize the localePath function to redirect between pages? Could you provide some guidance on this?

You can give it a name that is basically the path of the file in the file explorer. For `pages/glossary/index.vue` it’s `glossary` for `pages/glossary/[category]/index.vue` it’s `glossary-catagory` with `params` set to `{category: ...}`

### Is there a method to connect to the production or staging Strapi CMS, allowing us to have all the content readily available? This would greatly assist in testing.

Ask Adriaan for a read-only token you can use with production data. The API is live at [cms.simpleanalytics.com/api](https://cms.simpleanalytics.com/api).

### Is there a library for the icons that are being used?

We use [heroicons.com](https://heroicons.com), [iconmonstr.com](https://iconmonstr.com), and other sources for icons. Heroicons comes with a library so they are usualy best, but they don’t have all icons. Icon Monstr is nice for missing icons and otherwise I just search on the web of create one in Figma based on a png of the web. Make sure to get the line width right and use outlines for lines instead of stroke width.

### Translations

The translations of the interface is done via the [locales/en.json](locales/en.json), [locales/de.json](locales/de.json), ... files for English for example. The translations of the articles are done in Strapi and consumed in the Nuxt app via the [server/api/cms.js](server/api/cms.js) file.

You can translate the routes in [nuxt.config.ts](nuxt.config.ts), we use ChatGPT for translations. You can use this prompt to translate from English to all other languages:

````
Return 5 JSON structures with 2 spaces of indenting and translate the values informaly in German, Spanish from Spain, French, Italian, and Dutch. Do not translate the keys of the JSON. It's for an online product called Simple Analytics. A privacy-first Google Analytics alternative. Keep it informal. The following input is JSON in English.

Return 5 files, one for every language:

```
"popups": {
  "exitpopup": {
    "title": "Did you know it's really simple?",
    "button": "Try Simple Analytics for free"
  }
},
```
````

You can copy the results to the [locales/en.json](locales/en.json), [locales/de.json](locales/de.json), ... files.

## Preview

<kbd><img alt="Screenshot" src="https://github.com/user-attachments/assets/0f9c00be-f146-40bf-9cda-cf4b3b24dc71"></kbd>
