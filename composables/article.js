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
}) => {
  const route = useRoute();
  const { locale } = useI18n();
  const localePath = useLocalePath();
  const event = useRequestEvent();

  const {
    public: { BASE_URL },
  } = useRuntimeConfig();

  const isAdmin = useAdmin();
  const showDrafts = isAdmin.value || drafts;

  const url = new URL("/api/cms", BASE_URL);
  if (event?.node?.req?.headers?.["user-agent"])
    url.searchParams.set("userAgent", event.node.req.headers["user-agent"]);
  if (event?.node?.req?.url)
    url.searchParams.set("userPath", event.node.req.url);
  url.searchParams.set(
    "path",
    type === "key-terms" ? "/key-terms" : "/articles",
  );
  if (slug) url.searchParams.set("filters[slug][$eq]", slug);
  if (nonUniqueSlug)
    url.searchParams.set("filters[nonUniqueSlug][$eq]", nonUniqueSlug);
  if (articleType)
    url.searchParams.set("filters[articleType][$eq]", articleType);
  if (showDrafts) url.searchParams.set("drafts", showDrafts);
  if (limit) url.searchParams.set("pagination[pageSize]", limit);
  if (useLocale) url.searchParams.set("locale", locale.value);

  const keys = [
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
    "ctaTitle",
    "ctaDescription",
    "ctaButton",
    "tables",
    "reviews",
    "doFollowLinks",
  ];

  if (nonUniqueSlug) {
    keys.push("nonUniqueSlug");
  }

  if (showDrafts) {
    keys.push("sourceDocumentUrl");
  }

  if (type === "key-terms") {
    keys.push("showCallToActions");
  } else {
    keys.push("showIndex");
    keys.push("showCallToActions");
  }

  if (articleType) keys.push("articleType");

  url.searchParams.set("fields", keys.join(","));

  const key = [routeName, articleType, slug, limit, locale.value, showDrafts]
    .filter(Boolean)
    .join("_");

  const {
    data: articles,
    pending,
    error,
  } = await useFetch(url.toString(), {
    key,
    transform: ({ data }) =>
      transformer({
        data,
        locale: locale.value,
        keys,
        limit,
      }),
  });

  const article = computed(() => {
    if (!articles?.value?.[0]) return {};

    return {
      showCallToActions: true,
      ...articles.value[0],
    };
  });

  try {
    const languages = articles?.value?.[0]?.languages;
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

      route.meta.nuxtI18n = languages;
    }
  } catch (error) {
    console.error(error);
  }

  return {
    article,
    articles,
    pending,
    error,
  };
};
