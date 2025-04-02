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
  const { BASE_URL } = config.public;
  const { url } = nuxtApp.ssrContext;

  const { pathname } = new URL(url, BASE_URL);
  for (const redirect of redirects) {
    if (pathname === redirect.from) {
      return navigateTo(redirect.to, { redirectCode: redirect.redirectCode });
    }
  }
});
