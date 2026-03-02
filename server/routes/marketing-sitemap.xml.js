import { stringify as qsStringify } from "qs";
import routes from "~/router";
import { categories } from "~/data/glossary";

// Article types that should use `nonUniqueSlug` in URLs
const articleTypesUsingNonUniqueSlug = new Set(["gdpr-compliance"]);

const BASE_URL = "https://www.simpleanalytics.com";

export default defineEventHandler(async (event) => {
  const { strapiToken } = useRuntimeConfig();

  const staticPageRoutes = [];
  const dynamicPageRoutes = [];

  // Add base path
  staticPageRoutes.push({ loc: BASE_URL });

  // Process routes from router.ts
  for (const [key, path] of Object.entries(routes)) {
    if (!key.includes("slug") && !key.includes("category")) {
      // Static routes
      staticPageRoutes.push({ loc: `${BASE_URL}${path}` });
    } else {
      // Dynamic routes (with [slug] or [category])
      dynamicPageRoutes.push(key);
    }
  }

  event.node.res.setHeader("Content-Type", "application/xml");

  // Get articles and compute sitemap paths
  const articles = await getAllData(strapiToken, "articles");
  const articleSitemap = computeSitemapPaths(
    articles,
    dynamicPageRoutes,
    false,
  );

  // Get key-terms and compute sitemap paths
  const keyTerms = await getAllData(strapiToken, "key-terms");
  const keyTermsSitemap = computeSitemapPaths(
    keyTerms,
    dynamicPageRoutes,
    true,
  );

  const allRoutes = [
    ...staticPageRoutes,
    ...articleSitemap,
    ...keyTermsSitemap,
  ];

  return generateSitemapXml(allRoutes);
});

// Computing sitemap paths for the provided pages
const computeSitemapPaths = (
  pages,
  dynamicPageRoutes,
  isPathKeyTerms = false,
) => {
  const sitemapPaths = [];
  const pageRoutesToMatch = {};

  // For key-terms, map categories to their route pattern
  if (isPathKeyTerms) {
    for (const { category } of categories) {
      pageRoutesToMatch[category] =
        routes["glossary/[category]/key-terms/[slug]"];
    }
  } else {
    // For dynamic routes, map article types to their route patterns
    for (const route of dynamicPageRoutes) {
      let urlParts = route.split("/");
      urlParts = urlParts.slice(0, urlParts.length - 1);
      if (urlParts.length > 1 && !urlParts.includes("resources")) {
        urlParts = urlParts.slice(1);
      }
      let articleType = urlParts.join("-");
      if (articleType === "case-studies") articleType = "case-study";
      if (articleType === "guides") articleType = "guide";
      if (articleType === "is-gdpr-compliant") articleType = "gdpr-compliance";
      pageRoutesToMatch[articleType] = routes[route];
    }
  }

  // Iterate pages and create sitemap entries
  for (const value of pages) {
    if (!value.attributes.articleType) continue;
    if (!Object.keys(pageRoutesToMatch).includes(value.attributes.articleType))
      continue;

    const routePattern = pageRoutesToMatch[value.attributes.articleType];

    const useNonUniqueSlug = articleTypesUsingNonUniqueSlug.has(
      value.attributes.articleType,
    );
    const slugToUse = useNonUniqueSlug
      ? value.attributes.nonUniqueSlug || value.attributes.slug
      : value.attributes.slug;

    const url = `${BASE_URL}${routePattern}`
      .replace(/\[slug\]/g, slugToUse)
      .replace(/\[category\]/g, value.attributes.articleType);

    sitemapPaths.push({
      loc: url,
      updatedAt: value.attributes?.updatedAt,
    });
  }

  return sitemapPaths;
};

// Fetching data for all pages
const getAllData = async (strapiToken, type = "articles") => {
  let allResponses = [];
  let response;
  let page = 1;

  do {
    response = await fetchDataFromStrapi(
      strapiToken,
      type === "articles" ? "articles" : "key-terms",
      page,
    );
    if (response.data) allResponses = [...allResponses, ...response.data];
    page++;
  } while (response.meta.pagination.pageCount >= page);

  return allResponses;
};

const fetchDataFromStrapi = async (
  strapiToken,
  pathSearchValue = "articles",
  currentPageIndex = 1,
) => {
  const url = new URL(
    `/api/${pathSearchValue}`,
    "https://cms.simpleanalytics.com",
  );

  const baseFields = [
    "id",
    "title",
    "locale",
    "slug",
    "publishedAt",
    "updatedAt",
    "articleType",
  ];
  const fields =
    pathSearchValue === "articles"
      ? [...baseFields, "nonUniqueSlug"]
      : baseFields;

  const params = {
    fields: fields,
    drafts: false,
    sort: "publishedAt:desc",
    locale: "en",
    pagination: {
      pageSize: "500",
    },
    publicationState: "live",
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
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const { loc, updatedAt } of routes) {
    xml += `  <url>\n    <loc>${loc}</loc>\n`;

    if (updatedAt) {
      const date = new Date(updatedAt);
      const lastmod = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
    }

    xml += `  </url>\n`;
  }

  xml += "</urlset>";
  return xml;
};
