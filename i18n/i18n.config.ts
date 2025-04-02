export default defineI18nConfig(() => ({
  globalInjection: true,
  legacy: false,
  locale: "en",
  fallbackLocale: {
    be: ["nl"],
    default: ["en"],
  },
}));
