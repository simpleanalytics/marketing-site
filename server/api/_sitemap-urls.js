import { stringify as qsStringify } from "qs";

export default defineEventHandler(async (event) => {
  const {
    strapiToken,
    public: { LOCALE_PAGES, LOCALES },
  } = useRuntimeConfig();

  const staticPageRoutes = [],
    dynamicPageRoutes = [];

  /*
   adding base path with alernatives
  */
  let initalPathAlternatives = [];
  const intitalPaths = LOCALES.map((locale) => {
    let url = `https://www.simpleanalytics.com`;
    if (locale?.code !== "en") url = `${url}/${locale.code}`;

    initalPathAlternatives.push({
      hreflang: locale?.code,
      href: url,
    });

    return url;
  });

  intitalPaths.forEach((path) => {
    staticPageRoutes.push({
      loc: path,
      lastmod: new Date(),
      alternatives: initalPathAlternatives,
    });
  });

  /*
    getting local_pages from environment and checking if only static paths i.e paths without slug or category are present
    if so then creating a new entry for the sitemap and an alternatives array used as entry for xhtml:link
    otherwise adding that route to dynamicroutes for later use
  */
  Object.keys(LOCALE_PAGES).forEach((path) => {
    if (path.indexOf("slug") === -1 && path.indexOf("category") == -1) {
      let alternatives = [];
      const transformedURLs = Object.keys(LOCALE_PAGES[path]).map(
        (language) => {
          let url = `https://www.simpleanalytics.com`;
          if (language === "en") url = `${url}${LOCALE_PAGES[path][language]}`;
          else url = `${url}/${language}${LOCALE_PAGES[path][language]}`;
          alternatives.push({
            hreflang: language,
            href: url,
          });
          if (language !== "en") {
            return url;
          }
        }
      );

      transformedURLs.forEach((url) => {
        staticPageRoutes.push({
          loc: url,
          lastmod: new Date(),
          alternatives: alternatives,
        });
      });
    } else dynamicPageRoutes.push(path);
  });

  event.node.res.setHeader("Content-Type", "application/xml");

  /*
   getting data for articles endpoint
   and computing the sitemap paths
  */
  let articleSitemap = [];
  const articles = await getAllData(strapiToken, "articles");
  articleSitemap = computeSitemapPaths(
    articles,
    dynamicPageRoutes,
    LOCALE_PAGES,
    false
  );

  /*
   getting data for key-terms endpoint
   and computing the sitemap paths
  */
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

// computing sitemap paths for the provided pages
const computeSitemapPaths = (
  pages,
  dynamicPageRoutes,
  LOCALE_PAGES,
  isPathKeyTerms = false
) => {
  const sitemapPaths = [];

  const pageRoutesToMatch = {};

  // for key-terms directly adding the key to be analytics and google-analytics
  if (isPathKeyTerms) {
    pageRoutesToMatch["analytics"] =
      LOCALE_PAGES["glossary/analytics/key-terms/[slug]"];
    pageRoutesToMatch["google-analytics"] =
      LOCALE_PAGES["glossary/google-analytics/key-terms/[slug]"];
  } else {
    /* 
        for dynamic routes, iterating and adding keys in the format: analytics,
        which is used to directly access the LOCALE_PAGES values
    */
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

  /* 
    once we have valid keys then, iterating on the pages getting the keys, adding a valid sitemap entry and an alternatives array used as entry for xhtml:link
  */
  pages.forEach((value) => {
    if (value.attributes.articleType) {
      if (
        Object.keys(pageRoutesToMatch).indexOf(value.attributes.articleType) >
        -1
      ) {
        const page = pageRoutesToMatch[value.attributes.articleType];
        let alternatives = [];
        let transformedURLs = Object.keys(page).map((language) => {
          let url = `https://www.simpleanalytics.com`;
          if (language !== "en") url = `${url}/${language}${page[language]}`;
          else url = `${url}${page[language]}`;

          url = url.replace(/\[slug\]/g, value.attributes.slug);
          alternatives.push({
            hreflang: language,
            href: url,
          });

          return url;
        });

        /* 
          if localizations exists for the current value then iterating and replacing the urls with the translated ones.
        */
        if (value.attributes?.localizations?.data?.length > 0) {
          value.attributes.localizations.data.forEach((data) => {
            if (data?.attributes?.locale) {
              const localeOfUrlToBeReplaced = `/${data.attributes.locale}/`;

              transformedURLs = transformedURLs.map((url) => {
                if (url.indexOf(localeOfUrlToBeReplaced) > -1) {
                  url = url.replace(
                    value.attributes.slug,
                    data.attributes.slug
                  );
                }
                return url;
              });

              alternatives = alternatives.map((alt) => {
                if (alt.hreflang === data.attributes.locale) {
                  alt.href = alt.href.replace(
                    value.attributes.slug,
                    data.attributes.slug
                  );
                }

                return alt;
              });
            }
          });
        }

        transformedURLs.forEach((url) => {
          sitemapPaths.push({
            loc: url,
            lastmod: new Date(),
            alternatives: alternatives,
          });
        });
      }
    }
  });

  return sitemapPaths;
};

// fetching data for all pages and returning
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

  const fields = [
    "id",
    "title",
    "locale",
    "slug",
    "publishedAt",
    "articleType",
  ];

  let params = {
    fields: fields,
    drafts: false,
    sort: "publishedAt:desc",
    locale: "en",
    populate: {
      localizations: {
        fields: fields,
      },
    },
    pagination: {
      pageSize: "500",
    },
    publicationState: "live", // to fetch only live content
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
