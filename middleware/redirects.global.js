const HTTP_CODES = {
  permanent: 308,
  temporary: 307,
};

const redirects = [
  {
    type: "regex",
    from: /^\/glossary\/?$/i,
    to: "/glossaries",
  },
  {
    type: "regex",
    from: /^\/(?:case-?study|use-?cases|use-?case)(\/|$)/i,
    to: "/case-studies$1",
  },
  { type: "regex", from: /^\/case-study(\/|$)/i, to: "/case-studies$1" },
  {
    type: "regex",
    from: /^\/glossary\/analytics\/key-term\/key-term-1(\/|$)/i,
    to: "/glossary/analytics/key-term/conversion-funnel$1",
  },
  {
    type: "regex",
    from: /^\/sitemap.xml$/i,
    to: "/sitemap_index.xml",
  },
  {
    type: "regex",
    from: /^\/practical-privacy-tips-for-your-business\/?$/i,
    to: "/blog/practical-privacy-tips-for-your-business$1",
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
    type: "regex",
    from: /^\/utm-generator/i,
    to: "/utm-builder",
  },
  {
    type: "exact",
    from: "/stop-using-google-analytics-if-you-care-about-your-page-rank",
    to: "/google-analytics-performance-impact-using-google-lighthouse",
  },
  {
    type: "exact",
    from: "/google-analytics-hurts-your-search-ranking",
    to: "/google-analytics-performance-impact-using-google-lighthouse",
  },
  {
    type: "exact",
    from: "/what-is-wrong-with-developers",
    to: "/why-simple-analytics-is-my-first-successful-project",
  },
  {
    type: "exact",
    from: "/why-you-should-reconsider-using-google-analytics",
    to: "/why-its-time-to-move-away-from-google-analytics",
  },
  {
    type: "exact",
    from: "/denmark-bans-all-google-products",
    to: "/denmark-bans-google-workspace-for-municipalities",
  },
  {
    type: "replace",
    from: "/google-analytics-countries",
    to: "/google-analytics-is-illegal-in-these-countries",
  },
  {
    type: "exact",
    from: "/denmark-bans-all-google-products",
    to: "/denmark-bans-google-workspace-for-municipalities",
  },
  {
    type: "exact",
    from: "/why-you-should-reconsider-using-google-analytics",
    to: "/why-its-time-to-move-away-from-google-analytics",
  },
  {
    type: "exact",
    from: "/google-analytics-hurts-your-search-ranking",
    to: "/google-penalizes-you-for-using-google-analytics",
  },
  {
    type: "replace",
    from: "/resources/comparions",
    to: "/resources/comparisons",
  },
  {
    type: "exact",
    from: "/stop-using-google-analytics-if-you-care-about-your-page-rank",
    to: "/google-penalizes-you-for-using-google-analytics",
  },
];

export default defineNuxtRouteMiddleware(
  ({ path, query, hash, redirectCode }) => {
    const options = { redirectCode: redirectCode || HTTP_CODES.permanent };

    for (const redirect of redirects) {
      if (redirect.type === "exact" && path === redirect.from) {
        console.info("=> redirecting", path, "to", redirect.to);
        return navigateTo({ path: redirect.to, query, hash }, options);
      } else if (redirect.type === "replace" && path.includes(redirect.from)) {
        const nextPath = path.replace(redirect.from, redirect.to);
        console.info("=> redirecting", path, "to", nextPath);
        return navigateTo({ path: nextPath, query, hash }, options);
      } else if (redirect.type === "regex" && redirect.from.test(path)) {
        const nextPath = path.replace(redirect.from, redirect.to);
        console.info(`=> redirecting (${redirect.from})`, path, "to", nextPath);
        return navigateTo({ path: nextPath, query, hash }, options);
      }
    }

    if (path.slice(0, 2) === "//") {
      while (path.slice(0, 2) === "//") {
        path = path.slice(1);
      }
      return navigateTo({ path, query, hash }, options);
    }
  },
);
