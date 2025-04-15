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
    language: "en",
    file: "en.json",
    name: "English",
    flag: "US",
    isCatchallLocale: true,
  },
  {
    code: "nl",
    language: "nl",
    file: "nl.json",
    name: "Nederlands",
    flag: "NL",
  },
  {
    code: "de",
    language: "de",
    file: "de.json",
    name: "Deutsch",
    flag: "DE",
  },
  {
    code: "es",
    language: "es",
    file: "es.json",
    name: "Español",
    flag: "ES",
  },
  {
    code: "fr",
    language: "fr",
    file: "fr.json",
    name: "Français",
    flag: "FR",
  },
  {
    code: "it",
    language: "it",
    file: "it.json",
    name: "Italiano",
    flag: "IT",
  },
];

const prerenderPages = [
  // "/",
  // "/nl",
  // "/de",
  // "/es",
  // "/fr",
  // "/it",
  // "/ai",
  // "/resources",
  // "/glossaries",
  // "/utm-builder",
  // "/google-analytics-is-illegal-in-these-countries",
];

const blogPages = [
  // "/blog/why-simple-analytics-is-a-great-alternative-to-google-analytics",
  // "/blog/why-simple-analytics-is-a-great-alternative-to-matomo",
  // "/blog/why-simple-analytics-is-a-great-alternative-to-plausible",
  // "/blog/why-simple-analytics-is-a-great-alternative-to-cloudflare-web-analytics",
];

const stopCachingOfBlogPagesUntil = "2025-02-10";
const includeBlogPages = new Date() > new Date(stopCachingOfBlogPagesUntil);

const prerender = [
  ...prerenderPages,
  ...(includeBlogPages ? blogPages : []),
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
  BASE_PRODUCTION_URL: "https://www.simpleanalytics.com",
  DASHBOARD_URL: isProduction
    ? "https://dashboard.simpleanalytics.com"
    : "http://localhost:3000",
  LOCALES: locales.map(({ code, flag }) => ({
    code,
    flag,
  })),
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
      script: [
        {
          innerHTML: `
            window.chatwootSettings = {
              position: "right",
              type: "expanded_bubble",
              launcherTitle: "Chat with us",
              darkMode: "auto",
              baseDomain: "simpleanalytics.com"
            };
            (function (d, t) {
              var BASE_URL = "https://chat.simpleanalytics.com";
              var g = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
              g.src = BASE_URL + "/packs/js/sdk.js";
              g.defer = true;
              g.async = true;
              s.parentNode.insertBefore(g, s);
              g.onload = function () {
                window.chatwootSDK.run({
                  websiteToken: "awihp9DgbCtM5xG1WVKS8okv",
                  baseUrl: BASE_URL,
                });
                window.addEventListener("chatwoot:ready", function () {
                  document.querySelector('button.woot--close')?.addEventListener('click', () => {
                    sa_event('chatwoot_click_close');
                  });
                  document.querySelector('button.woot-widget-bubble')?.addEventListener('click', () => {
                    sa_event('chatwoot_click_open');
                  });
                });
                window.addEventListener('chatwoot:on-message', () => {
                  sa_event('chatwoot_message');
                })
              };
            })(document, "script");
          `,
        },
      ],
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
    baseUrl: "https://www.simpleanalytics.com",
    locales,
    strategy: "prefix_except_default",
    defaultLocale: "en",
    langDir: "locales",
    customRoutes: "config",
    pages,
    bundle: {
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
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
