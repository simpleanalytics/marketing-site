<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-2xl sm:text-2xl md:text-3xl text-gray-500">
        <NuxtLink :to="localePath({ name: 'glossary' })" data-no-style>{{
          $t("glossary.title")
        }}</NuxtLink>
      </h2>
      <h1 class="mt-4 text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t(category.titleTranslation) }}
      </h1>
      <p class="mt-6 text-lg">
        {{ $t(category.descriptionTranslation) }}
      </p>
    </div>

    <p v-if="status === 'pending'" class="text-center">
      {{ $t("blog.loading_post") }}
    </p>
    <p
      v-else-if="error"
      class="bg-red-500 dark:bg-red-600 text-white dark:text-white rounded-lg text-center p-4 shadow dark:shadow-none"
    >
      {{ error }}
    </p>
    <div
      v-else-if="articles.length"
      class="mt-10 mb-20 grid gap-4 grid-cols-1 md:grid-cols-2"
    >
      <NuxtLink
        :to="
          localePath({
            name: 'glossary-category-key-terms',
            params: { category: route.params.category },
          })
        "
        class="group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 dark:focus-within:ring-red-600 flex flex-col rounded-lg shadow dark:shadow-none"
      >
        <h3 class="text-lg font-medium text-link-strong">
          {{ $t("glossary.key_terms_title") }} <Arrow />
        </h3>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">
          {{
            $t("glossary.key_terms_description", [
              route.params.category === "google-analytics"
                ? $t(`glossary.categories.googleanalytics.title`)
                : $t(`glossary.categories.analytics.title`),
            ])
          }}
        </p>
      </NuxtLink>
      <NuxtLink
        v-for="article in articles"
        :key="article.title"
        :to="
          localePath({
            name: 'glossary-category-slug',
            params: { category: article.articleType, slug: article.slug },
          })
        "
        class="group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 dark:focus-within:ring-red-600 flex flex-col rounded-lg shadow dark:shadow-none"
      >
        <h3 class="text-lg font-medium text-link-strong">
          <ClientOnly
            v-if="
              article.locale !== locale && getFlagUrl(article.locale, LOCALES)
            "
          >
            <img
              :src="getFlagUrl(article.locale, LOCALES)"
              class="h-4 align-baseline translate-y-px inline mr-1"
            />
          </ClientOnly>
          {{ article.title }} <Arrow />
        </h3>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">
          {{ article.excerpt }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import Arrow from "@/components/Arrow.vue";
import { categories } from "@/data/glossary";

const route = useRoute();
const { locale, getBrowserLocale } = useI18n();
const localePath = useLocalePath();
const {
  public: { LOCALES },
} = useRuntimeConfig();

const {
  data: articlesData,
  error,
  status,
} = await useArticle({
  routeName: "glossary-category",
  articleType: route.params.category,
});

const articles = computed(() => articlesData.value?.articles || []);

const category = computed(() => {
  const category = categories.find(
    (category) => category.category === route.params.category,
  );
  return category || {};
});
</script>
