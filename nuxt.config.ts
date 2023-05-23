import { defineNuxtConfig } from "nuxt/config";

const isProduction = process.env.NODE_ENV === "production";

const locales = [
  {
    code: "en",
    iso: "en-US",
    file: "en.json",
    name: "English",
    flag: "US",
  },
  {
    code: "nl",
    iso: "nl-NL",
    file: "nl.json",
    name: "Nederlands",
    flag: "NL",
  },
  {
    code: "de",
    iso: "de-DE",
    file: "de.json",
    name: "Deutsch",
    flag: "DE",
  },
  {
    code: "es",
    iso: "es-ES",
    file: "es.json",
    name: "Español",
    flag: "ES",
  },
  {
    code: "fr",
    iso: "fr-FR",
    file: "fr.json",
    name: "Français",
    flag: "FR",
  },
  {
    code: "it",
    iso: "it-IT",
    file: "it.json",
    name: "Italiano",
    flag: "IT",
  },
];

const BASE_URL = isProduction
  ? "https://www.simpleanalytics.com"
  : "http://localhost:3005";

const env = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL,
  MAIN_URL: isProduction
    ? "https://simpleanalytics.com"
    : "http://localhost:3000",
  CDN_URL:
    process.env.DEPLOYING === "true"
      ? "https://www-cdn.simpleanalytics.com"
      : undefined,
  LOCALES: locales,
};

const privateKeys = {
  deploying: process.env.DEPLOYING === "true",
  strapiToken: process.env.STRAPI_TOKEN,
  trelloPersonalKey: process.env.TRELLO_PERSONAL_KEY,
  trelloPersonalToken: process.env.TRELLO_PERSONAL_TOKEN,
};

// https://nuxt.com/docs/migration/configuration/#nuxtconfig
export default defineNuxtConfig({
  runtimeConfig: {
    // Private keys are only available on the server
    ...privateKeys,

    // Public keys that are exposed to the client
    public: env,
  },
  experimental: {
    treeshakeClientOnly: true,
  },
  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    cdnURL: env.CDN_URL,
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-hover-media-feature": {},
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-runtime-compiler",
    "nuxt-schema-org",
  ],
  schemaOrg: { host: BASE_URL },
  i18n: {
    baseUrl: BASE_URL,
    locales,
    strategy: "prefix_except_default",
    defaultLocale: "en",
    langDir: "locales",
    customRoutes: "config",
    dynamicRouteParams: true,
    pages: {
      pricing: {
        en: "/pricing",
        nl: "/prijzen",
        es: "/precios",
        de: "/preise",
        it: "/prezzi",
        fr: "/tarifs",
      },
      video: {
        en: "/video",
        nl: "/video",
        es: "/video",
        de: "/video",
        it: "/video",
        fr: "/video",
      },
      "blog/index": {
        en: "/blog",
        nl: "/blog",
        es: "/blog",
        de: "/blog",
        it: "/blog",
        fr: "/blog",
      },
      "blog/[slug]": {
        // params need to be put back here as you would with Nuxt Dynamic Routes
        // https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes
        en: "/blog/[slug]",
        nl: "/blog/[slug]",
        es: "/blog/[slug]",
        de: "/blog/[slug]",
        it: "/blog/[slug]",
        fr: "/blog/[slug]",
      },
      "glossary/index": {
        en: "/glossaries",
        nl: "/begrippenlijsten",
        es: "/glosarios",
        de: "/glossare",
        it: "/glossari",
        fr: "/glossaires",
      },
      "glossary/[category]/index": {
        en: "/glossary/[category]",
        nl: "/begrippenlijst/[category]",
        es: "/glosario/[category]",
        de: "/glossar/[category]",
        it: "/glossario/[category]",
        fr: "/glossaire/[category]",
      },
      "glossary/[category]/[slug]": {
        en: "/glossary/[category]/[slug]",
        nl: "/begrippenlijst/[category]/[slug]",
        es: "/glosario/[category]/[slug]",
        de: "/glossar/[category]/[slug]",
        it: "/glossario/[category]/[slug]",
        fr: "/glossaire/[category]/[slug]",
      },
      "glossary/[category]/key-terms/index": {
        en: "/glossary/[category]/key-terms",
        nl: "/begrippenlijst/[category]/kernbegrippen",
        es: "/glosario/[category]/terminos-clave",
        de: "/glossar/[category]/schlusselbegriffe",
        it: "/glossario/[category]/termini-chiave",
        fr: "/glossaire/[category]/termes-cles",
      },
      "glossary/[category]/key-terms/[slug]": {
        en: "/glossary/[category]/key-term/[slug]",
        nl: "/begrippenlijst/[category]/kernbegrip/[slug]",
        es: "/glosario/[category]/termino-clave/[slug]",
        de: "/glossar/[category]/schlusselbegriff/[slug]",
        it: "/glossario/[category]/termine-chiave/[slug]",
        fr: "/glossaire/[category]/terme-cle/[slug]",
      },
      "google-analytics-countries/index": {
        en: "/google-analytics-is-illegal-in-these-countries",
        nl: "/google-analytics-verboden-in-deze-landen",
        es: "/google-analytics-prohibido-en-estos-paises",
        de: "/google-analytics-in-diesen-landern-verboten",
        it: "/google-analytics-vietato-in-questi-paesi",
        fr: "/google-analytics-interdit-dans-ces-pays",
      },
      "google-analytics-countries/[slug]": {
        en: "/google-analytics-illegal/[slug]",
        nl: "/google-analytics-verboden/[slug]",
        es: "/google-analytics-paises/[slug]",
        de: "/google-analytics-lander/[slug]",
        it: "/google-analytics-paesi/[slug]",
        fr: "/google-analytics-pays/[slug]",
      },
      "utm-generator/index": {
        en: "/utm-generator",
        nl: "/utm-generatoren",
        es: "/Generadores-de-UTM",
        de: "/utm-generatoren",
        it: "/generatori-di-utm",
        fr: "/generateurs-utm",
      },
      "utm-generator/[slug]": {
        en: "/utm-generator/[slug]",
        nl: "/utm-generatoren/[slug]",
        es: "/Generadores-de-UTM/[slug]",
        de: "/utm-generatoren/[slug]",
        it: "/generatori-di-utm/[slug]",
        fr: "/generateurs-utm/[slug]",
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      fallbackLocale: "en",
      redirectOn: "root",
      cookieKey: "locale",
      cookieSecure: false,
    },
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: {
        be: ["nl"],
        default: ["en"],
      },
    },
  },
  nitro: {
    timing: false,
  },
});
