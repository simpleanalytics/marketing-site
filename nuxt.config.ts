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
    name: "Alemán",
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
    name: "Francés",
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
  BLOG_URL: isProduction
    ? "https://blogold.simpleanalytics.com"
    : "http://localhost:4001",
  LOCALES: locales,
};

const privateKeys = {
  deploying: process.env.DEPLOYING === "true",
  strapiToken: process.env.STRAPI_TOKEN,
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
  build: {
    transpile: ["@heroicons/vue"],
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
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-runtime-compiler"],
  i18n: {
    baseUrl: BASE_URL,
    locales,
    strategy: "prefix",
    defaultLocale: "en",
    langDir: "locales",
    customRoutes: "config",
    pages: {
      pricing: {
        nl: "/prijzen",
        es: "/precios",
        de: "/preise",
        it: "/prezzi",
        fr: "/tarifs",
      },
      video: {
        nl: "/video",
        es: "/video",
        de: "/video",
        it: "/video",
        fr: "/video",
      },
      "blog/[slug]": {
        // params need to be put back here as you would with Nuxt Dynamic Routes
        // https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes
        nl: "/artikel/[slug]",
        es: "/articulo/[slug]",
        de: "/artikel/[slug]",
        it: "/articolo/[slug]",
        fr: "/article/[slug]",
      },
      "blog/index": {
        nl: "/blog",
        es: "/blog",
        de: "/blog",
        it: "/blog",
        fr: "/blog",
      },
      "glossary/index": {
        nl: "/begrippenlijsten",
        es: "/glosarios",
        de: "/glossare",
        it: "/glossari",
        fr: "/glossaires",
      },
      "glossary/[category]/index": {
        // params need to be put back here as you would with Nuxt Dynamic Routes
        // https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes
        nl: "/begrippenlijst/[category]",
        es: "/glosario/[category]",
        de: "/glossar/[category]",
        it: "/glossario/[category]",
        fr: "/glossaire/[category]",
      },
      "glossary/[category]/[slug]": {
        // params need to be put back here as you would with Nuxt Dynamic Routes
        // https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes
        nl: "/glossary/[category]/[slug]",
        es: "/glosario/[category]/[slug]",
        de: "/glossar/[category]/[slug]",
        it: "/glossario/[category]/[slug]",
        fr: "/glossaire/[category]/[slug]",
      },
      "google-analytics-countries/index": {
        nl: "/google-analytics-verboden-in-deze-landen",
        es: "/google-analytics-prohibido-en-estos-paises",
        de: "/google-analytics-in-diesen-landern-verboten",
        it: "/google-analytics-vietato-in-questi-paesi",
        fr: "/google-analytics-interdit-dans-ces-pays",
      },
      "google-analytics-countries/[slug]": {
        // params need to be put back here as you would with Nuxt Dynamic Routes
        // https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes
        nl: "/google-analytics-verboden/[slug]",
        es: "/google-analytics-paises/[slug]",
        de: "/google-analytics-lander/[slug]",
        it: "/google-analytics-paesi/[slug]",
        fr: "/google-analytics-pays/[slug]",
      },
    },
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: "en",
      redirectOn: "no prefix",
      useCookie: true,
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
