<template>
  <div class="max-w-5xl mx-auto px-4">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        GDPR Compliance
      </h1>
      <p class="mt-8 text-lg text-gray-600 dark:text-gray-400">
        Learn about GDPR compliance and data protection requirements.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="article in articles"
        :key="article.id"
        class="border rounded-lg p-6 hover:shadow-lg transition-shadow"
      >
        <NuxtLink
          :to="`/is-gdpr-compliant/${article.nonUniqueSlug}`"
          class="block"
        >
          <h3 class="text-xl font-semibold mb-2">{{ article.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ article.excerpt }}</p>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup>
const { data: articlesData } = await useArticle({
  routeName: "is-gdpr-compliant-slug",
  articleType: "gdpr-compliance",
  keys: ["nonUniqueSlug"],
});

const articles = computed(() => articlesData.value?.articles || []);

useHead({
  title: "GDPR Compliance",
  description: "Learn about GDPR compliance and data protection requirements.",
});
</script>
