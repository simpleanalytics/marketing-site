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

const LOCALE_PAGES = {
  pricing: {
    en: "/pricing",
    nl: "/prijzen",
    es: "/precios",
    de: "/preise",
    it: "/prezzi",
    fr: "/tarifs",
  },
  video: {
    en: "/video",
    nl: "/video",
    es: "/video",
    de: "/video",
    it: "/video",
    fr: "/video",
  },
  "blog/index": {
    en: "/blog",
    nl: "/blog",
    es: "/blog",
    de: "/blog",
    it: "/blog",
    fr: "/blog",
  },
  "blog/[slug]": {
    // params need to be put back here as you would with Nuxt Dynamic Routes
    // https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes
    en: "/blog/[slug]",
    nl: "/blog/[slug]",
    es: "/blog/[slug]",
    de: "/blog/[slug]",
    it: "/blog/[slug]",
    fr: "/blog/[slug]",
  },
  "press/index": {
    en: "/press",
    nl: "/pers",
    es: "/prensa",
    de: "/presse",
    it: "/stampa",
    fr: "/presse",
  },
  "glossary/index": {
    en: "/glossaries",
    nl: "/begrippenlijsten",
    es: "/glosarios",
    de: "/glossare",
    it: "/glossari",
    fr: "/glossaires",
  },
  "glossary/analytics/index": {
    en: "/glossary/analytics",
    nl: "/begrippenlijst/analytics",
    es: "/glosario/analytics",
    de: "/glossar/analytics",
    it: "/glossario/analytics",
    fr: "/glossaire/analytics",
  },
  "glossary/google-analytics/index": {
    en: "/glossary/google-analytics",
    nl: "/begrippenlijst/google-analytics",
    es: "/glosario/google-analytics",
    de: "/glossar/google-analytics",
    it: "/glossario/google-analytics",
    fr: "/glossaire/google-analytics",
  },
  "glossary/analytics/[slug]": {
    en: "/glossary/analytics/[slug]",
    nl: "/begrippenlijst/analytics/[slug]",
    es: "/glosario/analytics/[slug]",
    de: "/glossar/analytics/[slug]",
    it: "/glossario/analytics/[slug]",
    fr: "/glossaire/analytics/[slug]",
  },
  "glossary/google-analytics/[slug]": {
    en: "/glossary/google-analytics/[slug]",
    nl: "/begrippenlijst/google-analytics/[slug]",
    es: "/glosario/google-analytics/[slug]",
    de: "/glossar/google-analytics/[slug]",
    it: "/glossario/google-analytics/[slug]",
    fr: "/glossaire/google-analytics/[slug]",
  },
  "glossary/analytics/key-terms/index": {
    en: "/glossary/analytics/key-terms",
    nl: "/begrippenlijst/analytics/kernbegrippen",
    es: "/glosario/analytics/terminos-clave",
    de: "/glossar/analytics/schlusselbegriffe",
    it: "/glossario/analytics/termini-chiave",
    fr: "/glossaire/analytics/termes-cles",
  },
  "glossary/google-analytics/key-terms/index": {
    en: "/glossary/google-analytics/key-terms",
    nl: "/begrippenlijst/google-analytics/kernbegrippen",
    es: "/glosario/google-analytics/terminos-clave",
    de: "/glossar/google-analytics/schlusselbegriffe",
    it: "/glossario/google-analytics/termini-chiave",
    fr: "/glossaire/google-analytics/termes-cles",
  },
  "glossary/analytics/key-terms/[slug]": {
    en: "/glossary/analytics/key-term/[slug]",
    nl: "/begrippenlijst/analytics/kernbegrip/[slug]",
    es: "/glosario/analytics/termino-clave/[slug]",
    de: "/glossar/analytics/schlusselbegriff/[slug]",
    it: "/glossario/analytics/termine-chiave/[slug]",
    fr: "/glossaire/analytics/terme-cle/[slug]",
  },
  "glossary/google-analytics/key-terms/[slug]": {
    en: "/glossary/google-analytics/key-term/[slug]",
    nl: "/begrippenlijst/google-analytics/kernbegrip/[slug]",
    es: "/glosario/google-analytics/termino-clave/[slug]",
    de: "/glossar/google-analytics/schlusselbegriff/[slug]",
    it: "/glossario/google-analytics/termine-chiave/[slug]",
    fr: "/glossaire/google-analytics/terme-cle/[slug]",
  },
  "google-analytics-countries/index": {
    en: "/google-analytics-is-illegal-in-these-countries",
    nl: "/google-analytics-verboden-in-deze-landen",
    es: "/google-analytics-prohibido-en-estos-paises",
    de: "/google-analytics-in-diesen-landern-verboten",
    it: "/google-analytics-vietato-in-questi-paesi",
    fr: "/google-analytics-interdit-dans-ces-pays",
  },
  "google-analytics-countries/[slug]": {
    en: "/google-analytics-illegal/[slug]",
    nl: "/google-analytics-verboden/[slug]",
    es: "/google-analytics-paises/[slug]",
    de: "/google-analytics-lander/[slug]",
    it: "/google-analytics-paesi/[slug]",
    fr: "/google-analytics-pays/[slug]",
  },
  "resources/index": {
    en: "/resources",
    nl: "/bronnen",
    es: "/recursos",
    de: "/ressourcen",
    it: "/risorse",
    fr: "/ressources",
  },
  "resources/comparisons/index": {
    en: "/resources/comparisons",
    nl: "/bronnen/vergelijkingen",
    es: "/recursos/comparaciones",
    de: "/ressourcen/vergleiche",
    it: "/risorse/confronti",
    fr: "/ressources/comparaisons",
  },
  "resources/comparisons/[slug]": {
    en: "/resources/comparions/[slug]",
    nl: "/bronnen/vergelijkingen/[slug]",
    es: "/recursos/comparaciones/[slug]",
    de: "/ressourcen/vergleiche/[slug]",
    it: "/risorse/confronti/[slug]",
    fr: "/ressources/comparaisons/[slug]",
  },
  "resources/analytics-review/index": {
    en: "/resources/analytics-review",
    nl: "/bronnen/analyse-beoordeling",
    es: "/recursos/revisiones-de-analiticas",
    de: "/ressourcen/analysebewertung",
    it: "/risorse/recensione-analitica",
    fr: "/ressources/avis-analytiques",
  },
  "resources/analytics-review/[slug]": {
    en: "/resources/analytics-review/[slug]",
    nl: "/bronnen/analyse-beoordeling/[slug]",
    es: "/recursos/revisiones-de-analiticas/[slug]",
    de: "/ressourcen/analysebewertung/[slug]",
    it: "/risorse/recensione-analitica/[slug]",
    fr: "/ressources/avis-analytiques/[slug]",
  },
  "resources/analytics-pricing/index": {
    en: "/resources/analytics-pricing",
    nl: "/bronnen/analyse-prijzen",
    es: "/recursos/precios-de-analiticas",
    de: "/ressourcen/analysepreise",
    it: "/risorse/prezzo-analitico",
    fr: "/ressources/prix-analytiques",
  },
  "resources/analytics-pricing/[slug]": {
    en: "/resources/analytics-pricing/[slug]",
    nl: "/bronnen/analyse-prijzen/[slug]",
    es: "/recursos/precios-de-analiticas/[slug]",
    de: "/ressourcen/analysepreise/[slug]",
    it: "/risorse/prezzo-analitico/[slug]",
    fr: "/ressources/prix-analytiques/[slug]",
  },
  "resources/alternatives/index": {
    en: "/resources/alternatives",
    nl: "/bronnen/alternatieven",
    es: "/recursos/alternativas",
    de: "/ressourcen/alternativen",
    it: "/risorse/alternative",
    fr: "/ressources/alternatives",
  },
  "resources/alternatives/[slug]": {
    en: "/resources/alternatives/[slug]",
    nl: "/bronnen/alternatieven/[slug]",
    es: "/recursos/alternativas/[slug]",
    de: "/ressourcen/alternativen/[slug]",
    it: "/risorse/alternative/[slug]",
    fr: "/ressources/alternatives/[slug]",
  },
  "utm-builder/index": {
    en: "/utm-builder",
    nl: "/utm-builder",
    es: "/constructor-de-utm",
    de: "/utm-generator",
    it: "/generatore-utm",
    fr: "/constructeur-utm",
  },
  "utm-builder/[slug]": {
    en: "/utm-builder/[slug]",
    nl: "/utm-builder/[slug]",
    es: "/constructor-de-utm/[slug]",
    de: "/utm-generator/[slug]",
    it: "/generatore-utm/[slug]",
    fr: "/constructeur-utm/[slug]",
  },
};

const BASE_URL = isProduction
  ? "https://www.simpleanalytics.com"
  : "http://localhost:3005";

const env = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL,
  MAIN_URL: isProduction
    ? "https://simpleanalytics.com"
    : "http://localhost:3000",
  CDN_URL: "https://www-cdn.simpleanalytics.com",
  LOCALES: locales,
  LOCALE_PAGES: LOCALE_PAGES,
};

const privateKeys = {
  strapiToken: process.env.STRAPI_TOKEN,
  trelloPersonalKey: process.env.TRELLO_PERSONAL_KEY,
  trelloPersonalToken: process.env.TRELLO_PERSONAL_TOKEN,
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
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-schema-org",
    "nuxt-simple-sitemap",
  ],
  site: {
    url: BASE_URL,
    name: "Simple Analytics",
  },
  sitemap: {
    sitemapName: "sitemap.xml",
    xslTips: false,
    credits: false,
    sitemaps: {
      marketing: {
        dynamicUrlsApiEndpoint: "server/api/_sitemap-urls.js",
      },
      index: [
        { sitemap: "https://simpleanalytics.com/dashboard-sitemap.xml" },
        { sitemap: "https://docs.simpleanalytics.com/sitemap.xml" },
      ],
    },
    xslColumns: [
      { label: "URL", width: "50%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
      { label: "Hreflangs", select: "count(xhtml)", width: "25%" },
    ],
  },
  schemaOrg: { host: BASE_URL },
  i18n: {
    baseUrl: BASE_URL,
    locales,
    strategy: "prefix_except_default",
    defaultLocale: "en",
    langDir: "locales",
    customRoutes: "config",
    dynamicRouteParams: true,
    pages: LOCALE_PAGES,
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      fallbackLocale: "en",
      redirectOn: "root",
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
  vue: {
    runtimeCompiler: true,
  },
});
