import { defineNuxtConfig } from "nuxt/config";
import pages from "./router";

const isProduction = process.env.NODE_ENV === "production";

const seconds = {
  hour: 3600,
  day: 3600 * 24,
};

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

const prerender = [
  "/",
  "/nl",
  "/de",
  "/es",
  "/fr",
  "/it",
  // "/pricing",
  // "/nl/prijzen",
  // "/es/precios",
  // "/de/preise",
  // "/it/prezzi",
  // "/fr/tarifs",
  "/ai",
  "/resources",
  "/glossaries",
  "/utm-builder",
  "/google-analytics-is-illegal-in-these-countries",
  "/blog/why-simple-analytics-is-a-great-alternative-to-google-analytics",
  "/blog/why-simple-analytics-is-a-great-alternative-to-matomo",
  "/blog/why-simple-analytics-is-a-great-alternative-to-plausible",
  "/blog/why-simple-analytics-is-a-great-alternative-to-cloudflare-web-analytics",
].reduce((acc, route) => {
  acc[route] = { prerender: true };
  return acc;
}, {});

const BASE_URL = isProduction
  ? "https://www.simpleanalytics.com"
  : "http://localhost:3005";

const env = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL,
  DASHBOARD_URL: isProduction
    ? "https://dashboard.simpleanalytics.com"
    : "http://localhost:3000",
  LOCALES: locales.map(({ code, flag }) => ({ code, flag })),
};

const privateKeys = {
  strapiToken: process.env.STRAPI_TOKEN,
  trelloPersonalKey: process.env.TRELLO_PERSONAL_KEY,
  trelloPersonalToken: process.env.TRELLO_PERSONAL_TOKEN,
  cmsUrl: process.env.CMS_URL || "https://cms.simpleanalytics.com",
};

// https://nuxt.com/docs/migration/configuration/#nuxtconfig
export default defineNuxtConfig({
  runtimeConfig: {
    // Private keys are only available on the server
    ...privateKeys,

    // Public keys that are exposed to the client
    public: env,
  },

  routeRules: isProduction
    ? {
        ...prerender,
        "/blog": { swr: seconds.hour },
        "/nl/blog": { swr: seconds.hour },
        "/de/blog": { swr: seconds.hour },
        "/es/blog": { swr: seconds.hour },
        "/fr/blog": { swr: seconds.hour },
        "/it/blog": { swr: seconds.hour },
        "/blog/**": { swr: seconds.day },
        "/nl/blog/**": { swr: seconds.day },
        "/de/blog/**": { swr: seconds.day },
        "/es/blog/**": { swr: seconds.day },
        "/fr/blog/**": { swr: seconds.day },
        "/it/blog/**": { swr: seconds.day },
      }
    : {},

  experimental: {
    treeshakeClientOnly: true,
    writeEarlyHints: false,
  },

  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  site: {
    url: "https://simpleanalytics.com",
    name: "Simple Analytics",
  },

  build: {
    postcss: {
      plugins: {
        "postcss-hover-media-feature": {},
      },
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-schema-org",
    "nuxt-security",
    "@nuxt/scripts",
  ],

  tailwindcss: {
    viewer: false,
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
    baseUrl: BASE_URL,
    locales,
    strategy: "prefix_except_default",
    defaultLocale: "en",
    langDir: "locales",
    customRoutes: "config",
    pages,
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      fallbackLocale: "en",
      redirectOn: "root",
      cookieKey: "locale",
      cookieSecure: false,
    },
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
  },

  nitro: {
    timing: false,
  },

  vite: {
    optimizeDeps: {
      exclude: ["pinia"],
    },
  },

  vue: {
    runtimeCompiler: true,
  },

  security: {
    headers: {
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginResourcePolicy: false,
      referrerPolicy: "unsafe-url",
    },
    corsHandler: false,
  },

  compatibilityDate: "2024-11-07",
});