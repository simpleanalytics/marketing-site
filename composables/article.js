import { useI18n } from "#i18n";

export const useArticle = async ({
  routeName,
  type = "articles",
  slug,
  nonUniqueSlug,
  articleType,
  keys: extraKeys = [],
  drafts = false,
  limit = 1000,
}) => {
  const route = useRoute();
  const { locale } = useI18n();
  const localePath = useLocalePath();

  const {
    public: { BASE_URL },
  } = useRuntimeConfig();

  const isAdmin = useAdmin();
  const showDrafts = isAdmin.value || drafts;

  const url = new URL("/api/cms", BASE_URL);
  url.searchParams.set(
    "path",
    type === "key-terms" ? "/key-terms" : "/articles"
  );
  if (slug) url.searchParams.set("filters[slug][$eq]", slug);
  if (nonUniqueSlug)
    url.searchParams.set("filters[nonUniqueSlug][$eq]", nonUniqueSlug);
  if (articleType)
    url.searchParams.set("filters[articleType][$eq]", articleType);
  if (showDrafts) url.searchParams.set("drafts", showDrafts);

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

  const {
    data: articles,
    pending,
    error,
  } = await useFetch(url.toString(), {
    key: `${routeName}-${articleType}-${slug}-${limit}-${locale.value}-${showDrafts}`,
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

  const languages = articles?.value?.[0]?.languages;
  if (languages && slug) {
    if (!localePath)
      throw new Error("localePath is not defined in article composable");

    if (slug !== languages[locale.value].slug) {
      const path = localePath({
        name: routeName,
        params: { slug: languages[locale.value].slug },
      });
      navigateTo(path, { redirectCode: 308 }); // 308 Permanent Redirect
    }

    route.meta.nuxtI18n = languages;
  }

  return {
    article,
    articles,
    pending,
    error,
  };
};
