<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-2xl sm:text-2xl md:text-3xl text-gray-500">
        <NuxtLink to="/glossaries" data-no-style>Glossary</NuxtLink>
      </h2>
      <h1 class="mt-4 text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ category.title }}
      </h1>
      <p class="mt-6 text-lg">
        {{ category.description }}
      </p>
    </div>

    <p v-if="status === 'pending'" class="text-center">Loading...</p>
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
        :to="`/glossary/${route.params.category}/key-terms`"
        class="group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 dark:focus-within:ring-red-600 flex flex-col rounded-lg shadow dark:shadow-none"
      >
        <h3 class="text-lg font-medium text-link-strong">
          Key terms <Arrow />
        </h3>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">
          A list of key terms for
          {{
            route.params.category === "google-analytics"
              ? "Google Analytics"
              : "Web Analytics"
          }}.
        </p>
      </NuxtLink>
      <NuxtLink
        v-for="article in articles"
        :key="article.title"
        :to="`/glossary/${article.articleType}/${article.slug}`"
        class="group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 dark:focus-within:ring-red-600 flex flex-col rounded-lg shadow dark:shadow-none"
      >
        <h3 class="text-lg font-medium text-link-strong">
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
