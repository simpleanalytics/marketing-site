import { defineNuxtConfig } from "nuxt/config";

const isProduction = process.env.NODE_ENV === "production";

const env = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: isProduction
    ? "https://www.simpleanalytics.com"
    : "http://localhost:3005",
  MAIN_URL: isProduction
    ? "https://simpleanalytics.com"
    : "http://localhost:3000",
  CDN_URL:
    process.env.DEPLOYING === "true"
      ? "https://www-cdn.simpleanalytics.com/"
      : undefined,
  BLOG_URL: isProduction
    ? "https://blogold.simpleanalytics.com"
    : "http://localhost:4001",
};

// https://nuxt.com/docs/migration/configuration/#nuxtconfig
export default defineNuxtConfig({
  runtimeConfig: {
    // Private keys are only available on the server
    deploying: process.env.DEPLOYING === "true",

    // Public keys that are exposed to the client
    public: env,
  },
  experimental: {
    treeshakeClientOnly: true,
  },
  nitro: {
    timing: false,
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
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    // baseUrl: env.BASE_URL,
    locales: [
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
    ],
    strategy: "prefix",
    defaultLocale: "en",
    langDir: "locales",
    customRoutes: "config",
    pages: {
      pricing: {
        nl: "/prijzen",
      },
      video: {
        nl: "/video",
      },
      "blog/[slug]": {
        // params need to be put back here as you would with Nuxt Dynamic Routes
        // https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes
        nl: "/blog/[slug]",
      },
      "blog/index": {
        nl: "/blog",
      },
    },
    detectBrowserLanguage: {
      alwaysRedirect: true,
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
});
