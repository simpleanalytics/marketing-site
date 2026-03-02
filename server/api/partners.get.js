import { stringify as qsStringify } from "qs";

export default defineEventHandler(async (event) => {
  try {
    const { strapiToken, cmsUrl } = useRuntimeConfig();

    const apiUrl = new URL(`/api/partners`, cmsUrl);
    const strapiParams = {
      fields: [
        "partnerName",
        "partnerSlug",
        "countryCode",
        "websiteUrl",
        "introMarkdown",
        "isFeatured",
        "displayOrder",
      ],
      locale: "en",
      sort: "displayOrder:asc,partnerName:asc",
      populate: {
        logo: {
          fields: ["name", "alternativeText", "url", "width", "height"],
        },
      },
      publicationState: "live",
    };
    apiUrl.search = qsStringify(strapiParams, { encodeValuesOnly: true });

    const { data } = await $fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${strapiToken}`,
      },
    });

    const partners = data.map(({ attributes }) => {
      // Process introMarkdown: replace newlines with <br />
      const processedIntro = attributes.introMarkdown
        ? attributes.introMarkdown.replace(/\n/g, "<br />")
        : "";

      return {
        name: attributes.partnerName,
        slug: attributes.partnerSlug,
        countryCode: attributes.countryCode,
        websiteUrl: attributes.websiteUrl,
        intro: processedIntro,
        isFeatured: attributes.isFeatured,
        displayOrder: attributes.displayOrder,
        logo: attributes.logo?.data
          ? {
              url: attributes.logo.data.attributes.url,
              alt:
                attributes.logo.data.attributes.alternativeText ||
                attributes.partnerName,
              width: attributes.logo.data.attributes.width,
              height: attributes.logo.data.attributes.height,
            }
          : null,
      };
    });

    return {
      ok: true,
      partners,
      featured: partners.filter((partner) => partner.isFeatured),
      total: partners.length,
    };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});
