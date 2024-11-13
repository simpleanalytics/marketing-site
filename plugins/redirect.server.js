const HTTP_CODES = {
  permanent: 308,
  temporary: 307,
};

const redirects = [
  {
    from: "/signup/add-your-colleagues",
    to: "/signup",
    redirectCode: HTTP_CODES.temporary,
  },
  {
    from: "/signup/get-to-know-each-other",
    to: "/signup",
    redirectCode: HTTP_CODES.temporary,
  },
];

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const { BASE_URL, LOCALES } = config.public;
  const { event, url } = nuxtApp.ssrContext;
  const { pathname, search } = new URL(url, BASE_URL);
  const localeCookie = useCookie("locale");
  const acceptLanguage =
    event.node?.req?.headers?.["accept-language"]?.split(/[^a-z]/)[0];
  const language = localeCookie.value || acceptLanguage;
  const isValidLocale = LOCALES.find((locale) => locale.code === language);

  if (pathname === "/" && isValidLocale && language !== "en") {
    const url = `/${language}${search || ""}`;
    return navigateTo(url, { redirectCode: 307 }); // Temp redirect
  }

  for (const redirect of redirects) {
    if (pathname === redirect.from) {
      return navigateTo(redirect.to, { redirectCode: redirect.redirectCode });
    }
  }
});
