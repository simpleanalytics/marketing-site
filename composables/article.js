export const useArticle = async ({ routeName, slug, filter = "slug" }) => {
  const route = useRoute();
  const { locale } = useI18n();
  const localePath = useLocalePath();

  const {
    public: { BASE_URL },
  } = useRuntimeConfig();

  const url = new URL("/api/cms", BASE_URL);
  url.searchParams.set("path", "/articles");
  url.searchParams.set("locale", "all");
  url.searchParams.set(`filters[${filter}][$eq]`, slug);
  url.searchParams.set("populate[0]", "localizations");
  url.searchParams.set("pagination[pageSize]", "100");

  const keys = [
    "title",
    "excerpt",
    "locale",
    "slug",
    "contentHtml",
    "languages",
  ];

  if (filter !== "slug") keys.push(filter);

  const {
    data: articles,
    pending,
    error,
  } = await useFetch(url.toString(), {
    key: `${routeName}-${slug}-${locale.value}`,
    transform: ({ data }) =>
      transformer({
        data,
        locale: locale.value,
        keys,
      }),
  });

  const article = computed(() => {
    if (!articles?.value?.[0]) return;
    return articles.value[0];
  });

  if (articles?.value && filter === "slug") {
    const lanuages = articles?.value?.[0]?.languages || {};

    if (slug !== lanuages[locale.value].slug) {
      const path = localePath({
        name: routeName,
        params: { slug: lanuages[locale.value].slug },
      });
      navigateTo(path, { redirectCode: 308 }); // 308 Permanent Redirect
    }

    route.meta.nuxtI18n = articles?.value?.[0]?.languages;
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
