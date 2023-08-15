const redirects = [
  {
    type: "regex",
    from: /^\/en\/glossary\/?$/i,
    to: "/en/glossaries",
  },
  {
    type: "regex",
    from: /^\/glossary\/?$/i,
    to: "/glossaries",
  },
  {
    type: "regex",
    from: /^\/nl\/glossary\/?$/i,
    to: "/nl/begrippenlijst",
  },
  {
    type: "regex",
    from: /^\/glossary\/analytics\/key-term\/key-term-1\/?$/i,
    to: "/glossary/analytics/key-term/conversion-funnel",
  },
  {
    type: "regex",
    from: /^\/sitemap.xml$/i,
    to: "/sitemap_index.xml",
  },
  {
    type: "regex",
    from: /^\/practical-privacy-tips-for-your-business\/?$/i,
    to: "/blog/practical-privacy-tips-for-your-business",
  },
  {
    type: "regex",
    from: /^\/google-analytics-illegal\/is-google-analytics-illegal-in-finland$/i,
    to: "/blog/finland-is-latest-eu-country-to-crack-down-on-google-analytics",
  },
  {
    type: "regex",
    from: /^\/google-analytics-illegal\/is-google-analytics-illegal-in-norway$/i,
    to: "/blog/norway-takes-a-stance-against-google-analytics",
  },
  {
    type: "replace",
    from: "/stop-using-google-analytics-if-you-care-about-your-page-rank",
    to: "/google-analytics-performance-impact-using-google-lighthouse",
  },
  {
    type: "replace",
    from: "/google-analytics-hurts-your-search-ranking",
    to: "/google-analytics-performance-impact-using-google-lighthouse",
  },
  {
    type: "replace",
    from: "/what-is-wrong-with-developers",
    to: "/why-simple-analytics-is-my-first-successful-project",
  },
  {
    type: "replace",
    from: "/why-you-should-reconsider-using-google-analytics",
    to: "/why-its-time-to-move-away-from-google-analytics",
  },
  {
    type: "replace",
    from: "/denmark-bans-all-google-products",
    to: "/denmark-bans-google-workspace-for-municipalities",
  },
  {
    type: "replace",
    from: "/google-analytics-countries",
    to: "/google-analytics-is-illegal-in-these-countries",
  },
  {
    type: "replace",
    from: "/denmark-bans-all-google-products",
    to: "/denmark-bans-google-workspace-for-municipalities",
  },
  {
    type: "replace",
    from: "/why-you-should-reconsider-using-google-analytics",
    to: "/why-its-time-to-move-away-from-google-analytics",
  },
  {
    type: "replace",
    from: "/google-analytics-hurts-your-search-ranking",
    to: "/google-penalizes-you-for-using-google-analytics",
  },
  {
    type: "replace",
    from: "/resources/comparions",
    to: "/resources/comparisons",
  },
  {
    type: "replace",
    from: "/stop-using-google-analytics-if-you-care-about-your-page-rank",
    to: "/google-penalizes-you-for-using-google-analytics",
  },
];

const HTTP_CODES = {
  permanent: 308,
  temporary: 307,
};

const options = { redirectCode: HTTP_CODES.permanent };

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

  if (path.slice(0, 2) === "//") {
    while (path.slice(0, 2) === "//") {
      path = path.slice(1);
    }
    return navigateTo({ path, query, hash }, options);
  }
});
