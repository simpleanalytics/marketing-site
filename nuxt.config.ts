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
    cdnURL: "https://www-cdn.simpleanalytics.com/",
  },
  modules: ["@nuxtjs/tailwindcss"],
  compilerOptions: {
    isCustomElement: (tag) => {
      return tag.startsWith("Nuxt");
    },
  },
});
