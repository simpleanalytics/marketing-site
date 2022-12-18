import { defineNuxtConfig } from "nuxt/config";

const baseUrl = process.env.BASE_URL || "https://www.simpleanalytics.com";

const cdnURL =
  process.env.DEPLOYING === "true"
    ? "https://www-cdn.simpleanalytics.com/"
    : undefined;

// https://nuxt.com/docs/migration/configuration/#nuxtconfig
export default defineNuxtConfig({
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
    cdnURL,
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    baseUrl,
    locales: [
      { code: "en", iso: "en-US", file: "en.json" },
      { code: "nl", iso: "nl-NL", file: "nl.json" },
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    langDir: "locales/",
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: "",
      redirectOn: "root",
      useCookie: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: "i18n_redirected",
      cookieSecure: false,
    },
    vueI18n: {
      legacy: false,
    },
  },
});
