<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mx-4">
      <h2 class="text-2xl sm:text-2xl md:text-3xl text-gray-500">
        <NuxtLink :to="localePath({ name: 'case-studies' })" data-no-style>{{
          $t("case_studies.title")
        }}</NuxtLink>
      </h2>
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
        v-for="article in articles"
        :key="article.title"
        :to="
          localePath({
            name: 'case-studies-slug',
            params: { slug: article.slug },
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

const { locale } = useI18n();
const localePath = useLocalePath();

const {
  public: { LOCALES },
} = useRuntimeConfig();

const {
  data: articlesData,
  error,
  status,
} = await useArticle({
  routeName: "case-studies",
  articleType: "case-study",
});

const articles = computed(() => articlesData.value?.articles || []);
</script>
