<template>
  <div>
    <div class="max-w-5xl pt-4 px-4 mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-2xl sm:text-2xl md:text-3xl text-gray-500">
          <NuxtLink
            :to="
              localePath({
                name: 'glossary-category',
                params: { category: $route.params.category },
              })
            "
            data-no-style
            >{{ $t(category.titleTranslation) }}
            {{ $t("glossary.title") }}
          </NuxtLink>
        </h2>
        <h1
          class="mt-4 text-4xl font-medium sm:text-5xl md:text-6xl md:leading-normal sm:leading-normal"
        >
          {{ article.title }}
        </h1>
      </div>
    </div>

    <div class="max-w-3xl pb-4 px-4 mx-auto">
      <HtmlBlock :html="article.contentHtml" />
    </div>

    <SubscribePopup />
  </div>
</template>

<script setup>
import transformer from "@/utils/transformer";
import { categories } from "@/data/glossary";
import SubscribePopup from "@/components/SubscribePopup.vue";
import HtmlBlock from "@/components/HtmlBlock.vue";

const route = useRoute();
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const {
  public: { BASE_URL },
} = useRuntimeConfig();

const url = new URL("/api/cms", BASE_URL);
url.searchParams.set("path", "/articles");
url.searchParams.set("locale", "all");
url.searchParams.set("filters[slug][$eq]", route.params.slug);
url.searchParams.set("populate[0]", "localizations");
url.searchParams.set("pagination[pageSize]", "100");

const {
  data: articles,
  pending,
  error,
} = await useFetch(url.toString(), {
  key: `glossary-${route.params.slug}-${locale.value}`,
  transform: ({ data }) => {
    return transformer({
      data,
      locale: locale.value,
      keys: ["title", "excerpt", "locale", "slug", "contentHtml", "languages"],
    });
  },
});

const article = computed(() => {
  if (!articles.value[0]) return;
  return articles.value[0];
});

const category = computed(() => {
  const category = categories.find(
    (category) => category.category === route.params.category
  );
  return category || {};
});

if (articles?.value?.[0]?.languages) {
  route.meta.nuxtI18n = articles?.value?.[0]?.languages;
}
</script>
