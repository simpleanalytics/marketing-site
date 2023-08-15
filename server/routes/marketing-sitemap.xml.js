import { stringify as qsStringify } from "qs";
import localePages from "~/router";
import { categories } from "~/data/glossary";

export default defineEventHandler(async (event) => {
  const {
    strapiToken,
    public: { LOCALES },
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
      alternatives: initalPathAlternatives,
    });
  });

  /*
    getting local_pages from environment and checking if only static paths i.e paths without slug or category are present
    if so then creating a new entry for the sitemap and an alternatives array used as entry for xhtml:link
    otherwise adding that route to dynamicroutes for later use
  */
  for (const path of Object.keys(localePages)) {
    if (!path.includes("slug") && !path.includes("category")) {
      const alternatives = [];
      const transformedURLs = Object.keys(localePages[path]).map((language) => {
        let url = `https://www.simpleanalytics.com`;
        if (language === "en") url = `${url}${localePages[path][language]}`;
        else url = `${url}/${language}${localePages[path][language]}`;
        alternatives.push({
          hreflang: language,
          href: url,
        });

        return url;
      });

      for (const url of transformedURLs) {
        staticPageRoutes.push({
          loc: url,
          alternatives: alternatives,
        });
      }
    } else {
      dynamicPageRoutes.push(path);
    }
  }

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
    localePages,
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
    localePages,
    true
  );

  const routes = [...staticPageRoutes, ...articleSitemap, ...keyTermsSitemap];

  const xml = generateSitemapXml(routes);

  return xml;
});

// computing sitemap paths for the provided pages
const computeSitemapPaths = (
  pages,
  dynamicPageRoutes,
  localePages,
  isPathKeyTerms = false
) => {
  const sitemapPaths = [];

  const pageRoutesToMatch = {};

  // for key-terms directly adding the key to be analytics and google-analytics
  if (isPathKeyTerms) {
    for (const { category } of categories) {
      pageRoutesToMatch[category] =
        localePages["glossary/[category]/key-terms/[slug]"];
    }
  } else {
    /* 
      for dynamic routes, iterating and adding keys in the format: analytics,
      which is used to directly access the localePages values
    */
    for (const route of dynamicPageRoutes) {
      let url = route.split("/");
      url = url.slice(0, url.length - 1);
      if (url.length > 1 && !url.includes("resources")) {
        url = url.slice(1);
      }
      url = url.join("-");
      pageRoutesToMatch[url] = localePages[route];
    }
  }

  /* 
    once we have valid keys then, iterating on the pages getting the keys, adding a valid sitemap entry and an alternatives array used as entry for xhtml:link
  */
  for (const value of pages) {
    if (!value.attributes.articleType) continue;

    if (!Object.keys(pageRoutesToMatch).includes(value.attributes.articleType))
      continue;

    const page = pageRoutesToMatch[value.attributes.articleType];

    let alternatives = [];

    let transformedURLs = Object.keys(page).map((language) => {
      let url = `https://www.simpleanalytics.com`;
      if (language !== "en") url = `${url}/${language}${page[language]}`;
      else url = `${url}${page[language]}`;

      url = url
        .replace(/\[slug\]/g, value.attributes.slug)
        .replace(/\[category\]/g, value.attributes.articleType);
      alternatives.push({
        hreflang: language,
        href: url,
        updatedAt: value.attributes?.updatedAt,
      });

      return url;
    });

    /* 
      if localizations exists for the current value then iterating and replacing the urls with the translated ones.
    */
    if (value.attributes?.localizations?.data?.length > 0) {
      for (const data of value.attributes.localizations.data) {
        if (data?.attributes?.locale) {
          const localeOfUrlToBeReplaced = `/${data.attributes.locale}/`;

          transformedURLs = transformedURLs.map((url) => {
            if (url.includes(localeOfUrlToBeReplaced)) {
              url = url.replace(value.attributes.slug, data.attributes.slug);
            }
            return url;
          });

          alternatives = alternatives.map((alt) => {
            if (alt.hreflang === data.attributes.locale) {
              alt.href = alt.href.replace(
                value.attributes.slug,
                data.attributes.slug
              );
              alt.updatedAt = data.attributes?.updatedAt;
            }

            return alt;
          });
        }
      }
    }

    for (const url of transformedURLs) {
      sitemapPaths.push({
        loc: url,
        updatedAt: value.attributes?.updatedAt,
        alternatives: alternatives,
      });
    }
  }

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
    "updatedAt",
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

const generateSitemapXml = (routes) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
  xml +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  for (const { loc, updatedAt, alternatives } of routes) {
    xml += `  <url>\n    <loc>${loc}</loc>\n`;

    if (updatedAt) {
      // format lastmod as 2005-01-01
      const date = new Date(updatedAt);
      const lastmod = `${date.getFullYear()}-${(
        "0" +
        (date.getMonth() + 1)
      ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
    }

    for (const alternative of alternatives) {
      xml += `    <xhtml:link rel="alternate" hreflang="${alternative.hreflang}" href="${alternative.href}"/>\n`;
    }

    xml += `  </url>\n`;
  }

  xml += "</urlset>";
  return xml;
};
