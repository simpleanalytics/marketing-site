import { defineNuxtConfig } from "nuxt";

const cdnURL = "https://www-cdn.simpleanalytics.com";

const preload = [
  {
    rel: "preload",
    href: `${cdnURL}/fonts/space-grotesk/regular.woff2`,
    as: "font",
    crossorigin: "anonymous",
  },
  {
    rel: "preload",
    href: `${cdnURL}/fonts/space-grotesk/medium.woff2`,
    as: "font",
    crossorigin: "anonymous",
  },
];

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
    cdnURL: cdnURL + "/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  meta: {
    link: process.env.NODE_ENV === "production" ? preload : [],
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
