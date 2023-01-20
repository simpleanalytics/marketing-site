export const useArticle = async ({
  routeName,
  type,
  slug,
  articleType,
  keys: extraKeys = [],
}) => {
  const route = useRoute();
  const { locale } = useI18n();
  const localePath = useLocalePath();

  const {
    public: { BASE_URL },
  } = useRuntimeConfig();

  const url = new URL("/api/cms", BASE_URL);
  url.searchParams.set(
    "path",
    type === "key-terms" ? "/key-terms" : "/articles"
  );
  url.searchParams.set("locale", "all");
  if (slug) url.searchParams.set(`filters[slug][$eq]`, slug);
  if (articleType)
    url.searchParams.set(`filters[articleType][$eq]`, articleType);
  url.searchParams.set("populate[0]", "localizations");
  url.searchParams.set("pagination[pageSize]", "100");

  const keys = [
    ...extraKeys,
    "title",
    "excerpt",
    "locale",
    "slug",
    "automaticTranslated",
  ];

  if (articleType) keys.push("articleType");

  const {
    data: articles,
    pending,
    error,
  } = await useFetch(url.toString(), {
    key: `${routeName}-${articleType}-${slug}-${locale.value}`,
    transform: ({ data }) =>
      transformer({
        data,
        locale: locale.value,
        keys,
      }),
  });

  const article = computed(() => {
    if (!articles?.value?.[0]) return {};
    return articles.value[0];
  });

  const languages = articles?.value?.[0]?.languages;
  if (languages && slug) {
    if (slug !== languages[locale.value].slug) {
      const path = localePath({
        name: routeName,
        params: { slug: languages[locale.value].slug },
      });
      navigateTo(path, { redirectCode: 308 }); // 308 Permanent Redirect
    }

    route.meta.nuxtI18n = languages;
  }

  const localeHead = useLocaleHead({
    identifierAttribute: "id",
    addSeoAttributes: true,
  });

  useHead({
    link: localeHead.value.link,
    meta: localeHead.value.meta,
  });

  return {
    article,
    articles,
    pending,
    error,
  };
};
