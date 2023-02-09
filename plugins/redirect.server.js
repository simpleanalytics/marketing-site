export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const { BASE_URL } = config.public;
  const { event, url } = nuxtApp.ssrContext;
  const { pathname } = new URL(url, BASE_URL);
  const localeCookie = useCookie("locale");
  const acceptLanguage = event.node?.req?.headers?.["accept-language"]
    ?.split(",")[0]
    .split("-")[0];
  const language = localeCookie.value || acceptLanguage;

  if (pathname === "/" && language && language !== "en") {
    const url = `/${language}`;
    return navigateTo(url, { redirectCode: 307 }); // Temp redirect
  }
});
