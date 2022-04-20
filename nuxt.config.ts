import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  nitro: {
    // preset: "node-server",
    timing: false,
  },
  build: {
    transpile: ["@heroicons/vue"],
    publicPath: "",
  },
  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    cdnURL: "https://www-cdn.simpleanalytics.com/",
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
      locale: "nl",
      fallbackLocale: "en",
      formatFallbackMessages: true,
      locales: [{ code: "en" }, { code: "nl" }],
    },
    localeDir: "locales",
  },
});
