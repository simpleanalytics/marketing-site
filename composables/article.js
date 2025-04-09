export const useArticle = async ({
  routeName,
  type = "articles",
  slug,
  useLocale = false,
  nonUniqueSlug,
  articleType,
  keys: extraKeys = [],
  drafts = false,
  limit = 1000,
  page = ref(1),
  pick = undefined,
}) => {
  const { locale } = useI18n();
  const localePath = useLocalePath();
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
      ...(useLocale && { locale: locale.value }),
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
      locale: locale.value,
      keys: keys.value,
      limit,
    });

    if (!transformedData?.length && !response.meta) {
      setResponseStatus(event, 404);
    }

    let languages = {};

    try {
      languages = transformedData?.[0]?.languages;
      if (languages && slug) {
        if (typeof localePath !== "function")
          throw new Error("localePath is not defined in article composable");

        if (slug !== languages[locale.value].slug) {
          const path = localePath({
            name: routeName,
            params: { slug: languages[locale.value].slug },
          });
          navigateTo(path, { redirectCode: 307 }); // 308 Permanent Redirect
        }
      }
    } catch (error) {
      console.error(error);
    }

    return {
      article: transformedData?.[0],
      articles: transformedData,
      meta: response.meta,
      languages,
    };
  };

  const key = [
    routeName,
    articleType,
    slug,
    limit,
    page.value,
    locale.value,
    showDrafts,
  ]
    .filter(Boolean)
    .join("_");

  return useAsyncData(key, fetchArticles, { pick });
};
