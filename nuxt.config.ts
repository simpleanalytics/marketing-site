import { defineNuxtConfig } from "nuxt/config";
import pages from "./router";

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
  experimental: {
    treeshakeClientOnly: true,
  },
  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
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
    "nuxt-schema-org",
    "nuxt-security",
  ],
  schemaOrg: { host: BASE_URL },
  i18n: {
    vueI18n: "./i18n.config.ts",
    baseUrl: BASE_URL,
    locales,
    strategy: "prefix_except_default",
    defaultLocale: "en",
    langDir: "locales",
    customRoutes: "config",
    dynamicRouteParams: true,
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
  vue: {
    runtimeCompiler: true,
  },
  security: {
    headers: {
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginResourcePolicy: false,
    },
    rateLimiter: {
      tokensPerInterval: 80,
      interval: "minute",
      throwError: true,
    },
    corsHandler: false,
  },
});
