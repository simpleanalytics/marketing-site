import { stringify as qsStringify } from "qs";

export default defineEventHandler(async (event) => {
  try {
    const { strapiToken } = useRuntimeConfig();

    const cmsUrl = new URL(`/api/articles`, "https://cms.simpleanalytics.com");
    const strapiParams = {
      fields: ["title", "slug", "content", "publishedAt"],
      locale: "en",
      sort: "publishedAt:desc",
      filters: {
        articleType: {
          $eq: "blog",
        },
      },
      publicationState: "live",
    };
    cmsUrl.search = qsStringify(strapiParams, { encodeValuesOnly: true });

    const { data } = await $fetch(cmsUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${strapiToken}`,
      },
    });

    const articles = data.map(({ attributes }) => {
      delete attributes.slug;
      return {
        ...attributes,
        url: `https://www.simpleanalytics.com/blog/${attributes.slug}`,
      };
    });

    return { ok: true, blogs: articles };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});
