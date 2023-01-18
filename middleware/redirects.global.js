const redirects = [
  {
    type: "replace",
    from: "/google-analytics-countries",
    to: "/google-analytics-is-illegal-in-these-countries",
  },
  {
    type: "regex",
    from: /\/en\/glossary\/?$/i,
    to: "/en/glossaries",
  },
  {
    type: "regex",
    from: /\/nl\/glossary\/?$/i,
    to: "/nl/begrippenlijst",
  },
];

const options = { redirectCode: 308 }; // 308 Permanent Redirect

export default defineNuxtRouteMiddleware(({ path, query, hash }) => {
  for (const redirect of redirects) {
    if (redirect.type === "replace" && path.includes(redirect.from)) {
      const nextPath = path.replace(redirect.from, redirect.to);
      return navigateTo({ path: nextPath, query, hash }, options);
    } else if (redirect.type === "regex" && redirect.from.test(path)) {
      const nextPath = path.replace(redirect.from, redirect.to);
      return navigateTo({ path: nextPath, query, hash }, options);
    }
  }
});
