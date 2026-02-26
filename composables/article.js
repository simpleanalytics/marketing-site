export const useArticle = async ({
  routeName,
  type = "articles",
  slug,
  nonUniqueSlug,
  articleType,
  keys: extraKeys = [],
  drafts = false,
  limit = 1000,
  page = ref(1),
  pick = undefined,
  watch = [],
}) => {
  const event = useRequestEvent();

  const {
    public: { BASE_URL },
  } = useRuntimeConfig();

  const isAdmin = useAdmin();
  const showDrafts = isAdmin.value || drafts;
  const isArticle = type === "articles";

  const keys = computed(() => {
    const baseKeys = [
      ...extraKeys,
      "id",
      "title",
      "excerpt",
      "locale",
      "slug",
      "authorSlug",
      "automaticTranslated",
      "publishedAt",
      "updatedAt",
    ];

    if (isArticle)
      baseKeys.push("ctaTitle", "ctaDescription", "ctaButton", "doFollowLinks");
    if (nonUniqueSlug) baseKeys.push("nonUniqueSlug");
    if (showDrafts) baseKeys.push("sourceDocumentUrl");
    if (type === "key-terms") {
      // baseKeys.push("showCallToActions");
    } else {
      baseKeys.push("showIndex", "showCallToActions");
    }
    if (articleType) baseKeys.push("articleType");

    return baseKeys;
  });

  const query = computed(() => {
    const params = {
      path: type === "key-terms" ? "/key-terms" : "/articles",
      ...(event?.node?.req?.headers?.["user-agent"] && {
        userAgent: event.node.req.headers["user-agent"],
      }),
      ...(event?.node?.req?.url && { userPath: event.node.req.url }),
      ...(slug && { "filters[slug][$eq]": slug }),
      ...(nonUniqueSlug && { "filters[nonUniqueSlug][$eq]": nonUniqueSlug }),
      ...(articleType && { "filters[articleType][$eq]": articleType }),
      ...(showDrafts && { drafts: showDrafts }),
      ...(limit && { "pagination[pageSize]": limit }),
      ...(page.value && { "pagination[page]": page.value }),
      locale: "en",
      fields: keys.value.join(","),
    };

    return params;
  });

  const fetchArticles = async () => {
    const url = new URL("/api/cms", BASE_URL);

    Object.entries(query.value).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    const response = await $fetch(url.toString());

    if (response?.error) {
      const error = response.error.message || response.error;
      console.error(error);
      throw new Error(error);
    }

    const transformedData = transformer({
      data: response.data,
      locale: "en",
      keys: keys.value,
      limit,
    });

    if (!transformedData?.length && !response.meta) {
      setResponseStatus(event, 404);
    }

    let languages = {};

    return {
      article: transformedData?.[0],
      articles: transformedData,
      meta: response.meta,
      languages,
    };
  };

  const key = [routeName, articleType, slug, limit, page.value, showDrafts]
    .filter(Boolean)
    .join("_");

  return useAsyncData(key, fetchArticles, { pick, watch });
};
