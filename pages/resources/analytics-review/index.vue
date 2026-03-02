<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mx-4">
      <h2 class="text-2xl sm:text-2xl md:text-3xl text-gray-500">
        <NuxtLink to="/resources" data-no-style>Resources</NuxtLink>
      </h2>
      <h1 class="mt-4 text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ section.title }}
      </h1>
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
        v-for="article in articles"
        :key="article.title"
        :to="`/resources/analytics-review/${article.slug}`"
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
import { sections } from "@/data/resources";

const section = computed(() => {
  const section = sections.find(
    (section) => section.type === "analytics-review",
  );
  return section || {};
});

const {
  data: articlesData,
  error,
  status,
} = await useArticle({
  routeName: "resources-analytics-review",
  articleType: "resources-analytics-review",
});

const articles = computed(() => articlesData.value?.articles || []);
</script>
