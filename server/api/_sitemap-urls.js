import { stringify as qsStringify } from "qs";

export default defineEventHandler(async (event) => {
  const {
    strapiToken,
    public: { LOCALE_PAGES },
  } = useRuntimeConfig();

  const staticPageRoutes = [],
    dynamicPageRoutes = [];

  Object.keys(LOCALE_PAGES).forEach((path) => {
    if (path.indexOf("slug") === -1 && path.indexOf("category") == -1) {
      Object.keys(LOCALE_PAGES[path]).forEach((language) => {
        if (language !== "en")
          staticPageRoutes.push({
            loc: `https://wwww.simpleanalytics.com/${language}${LOCALE_PAGES[path][language]}`,
            lastmod: new Date(),
          });
      });
    } else dynamicPageRoutes.push(path);
  });

  event.res.setHeader("Content-Type", "application/xml");

  let articleSitemap = [];
  const articles = await getAllData(strapiToken, "articles");
  articleSitemap = computeSitemapPaths(
    articles,
    dynamicPageRoutes,
    LOCALE_PAGES,
    false
  );

  let keyTermsSitemap = [];
  const keyTerms = await getAllData(strapiToken, "key-terms");

  keyTermsSitemap = computeSitemapPaths(
    keyTerms,
    dynamicPageRoutes,
    LOCALE_PAGES,
    true
  );

  return [...staticPageRoutes, ...articleSitemap, ...keyTermsSitemap];
});

const computeSitemapPaths = (
  pages,
  dynamicPageRoutes,
  LOCALE_PAGES,
  isPathKeyTerms = false
) => {
  const sitemapPaths = [];

  const pageRoutesToMatch = {};

  if (isPathKeyTerms) {
    pageRoutesToMatch["analytics"] =
      LOCALE_PAGES["glossary/analytics/key-terms/[slug]"];
    pageRoutesToMatch["google-analytics"] =
      LOCALE_PAGES["glossary/google-analytics/key-terms/[slug]"];
  } else {
    dynamicPageRoutes.forEach((route) => {
      let url = route.split("/");
      url = url.slice(0, url.length - 1);
      if (url.length > 1 && url.indexOf("resources") === -1) {
        url = url.slice(1);
      }
      url = url.join("-");
      pageRoutesToMatch[url] = LOCALE_PAGES[route];
    });
  }

  pages.forEach((value) => {
    if (value.attributes.articleType) {
      if (
        Object.keys(pageRoutesToMatch).indexOf(value.attributes.articleType) >
        -1
      ) {
        const page = pageRoutesToMatch[value.attributes.articleType];

        Object.keys(page).forEach((language) => {
          let url = `https://www.simpleanalytics.com`;
          if (language !== "en") url = `${url}/${language}${page[language]}`;
          else url = `${url}${page[language]}`;

          url = url.replace(/\[slug\]/g, value.attributes.slug);
          sitemapPaths.push({
            loc: url,
            lastmod: new Date(),
          });
        });
      }
    }
  });

  return sitemapPaths;
};

const getAllData = async (strapiToken, type = "articles") => {
  let allResponses = [],
    response;
  let page = 1;

  do {
    response = await fetchDataFromStrapi(
      strapiToken,
      type === "articles" ? "articles" : "key-terms",
      page
    );
    if (response.data) allResponses = [...allResponses, ...response.data];

    page++;
  } while (response.meta.pagination.pageCount >= page);

  return allResponses;
};

const fetchDataFromStrapi = async (
  strapiToken,
  pathSearchValue = "articles",
  currentPageIndex = 1
) => {
  const url = new URL(
    `/api/${pathSearchValue}`,
    "https://cms.simpleanalytics.com"
  );

  let params = {
    fields: ["title", "slug", "publishedAt", "locale", "articleType"],
    sort: "publishedAt:desc",
  };

  if (currentPageIndex > 1) {
    params["pagination[page]"] = currentPageIndex;
  }

  url.search = qsStringify(params, { encodeValuesOnly: true });

  const response = await $fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${strapiToken}`,
    },
  });

  return response;
};
