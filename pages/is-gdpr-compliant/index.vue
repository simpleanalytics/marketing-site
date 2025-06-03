<template>
  <div class="max-w-5xl mx-auto px-4">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("gdpr_compliance.title") }}
      </h1>
      <p class="mt-8 text-lg text-gray-600 dark:text-gray-400">
        {{ $t("gdpr_compliance.description") }}
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="article in articles"
        :key="article.id"
        class="border rounded-lg p-6 hover:shadow-lg transition-shadow"
      >
        <NuxtLink
          :to="
            localePath({
              name: 'is-gdpr-compliant-slug',
              params: { slug: article.slug },
            })
          "
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
const { t } = useI18n();
const localePath = useLocalePath();

const {
  data: articlesData,
  error,
  status,
} = await useArticle({
  routeName: "is-gdpr-compliant-slug",
  articleType: "gdpr-compliance",
});

const articles = computed(() => articlesData.value?.articles || []);

useHead({
  title: t("gdpr_compliance.title"),
  description: t("gdpr_compliance.description"),
});
</script>
