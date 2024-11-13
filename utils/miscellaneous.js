export const sendEventAndRedirect = (router, event, metadata, url) => {
  if (!url) throw new Error("No URL to redirect to");
  if (!metadata) metadata = {};

  const theme = useTheme();

  metadata = {
    ...metadata,
    app: "marketing_site",
    theme: theme.value,
  };

  if (typeof window.sa_event === "function" && window.sa_loaded && event) {
    window.sa_event(event, metadata);
  }

  if (/^https?:\/\//.test(url)) return window.location.assign(url);
  return router.push(url);
};

export const navigateToWelcome = (router, event, metadata) => {
  if (!metadata) metadata = {};
  return sendEventAndRedirect(router, event, metadata, "/signup");
};

export const getFlagUrl = (locale, availableLocales) => {
  const url = "https://assets.simpleanalytics.com/images/flags/";

  if (locale === "en" && process.client) {
    const found = navigator?.languages.find((lang) => lang.startsWith("en-"));
    if (found) {
      const [, region] = found.split("-");
      return `${url}${region.toUpperCase()}.svg`;
    }
  }

  const found = availableLocales.find((lang) => lang.code === locale);
  if (found) {
    return `${url}${found.flag.toUpperCase()}.svg`;
  }
};

export const launchedAi = ({ NODE_ENV }) =>
  NODE_ENV === "development" || new Date() > new Date("2023-12-05");

export const formatDatapoints = (value, locale) => {
  if (value >= 1_000_000) return `${value / 1_000_000}M`;
  if (value >= 10_000) return `${(value / 10_000) * 10}k`;
  const formatter = new Intl.NumberFormat(locale);
  return formatter.format(value);
};

export const userCount = 18500;
