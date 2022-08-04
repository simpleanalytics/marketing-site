import { defineNuxtConfig } from "nuxt";

const cdnURL =
  process.env.DEPLOYING === "true"
    ? "https://www-cdn.simpleanalytics.com/"
    : null;

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  nitro: {
    timing: false,
  },
  build: {
    transpile: ["@heroicons/vue"],
    publicPath: "",
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
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: ["@intlify/nuxt3"],
  compilerOptions: {
    isCustomElement: (tag) => {
      return tag.startsWith("Nuxt");
    },
  },
  intlify: {
    vueI18n: {
      locale: "en",
      fallbackLocale: "en",
      formatFallbackMessages: true,
    },
    localeDir: "locales",
  },
});
