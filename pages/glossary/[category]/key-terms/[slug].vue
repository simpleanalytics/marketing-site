<template>
  <Article
    name="glossary-category-key-terms-slug"
    type="key-terms"
    :slug="route.params.slug"
    :articleType="route.params.category"
    :keys="['reviews']"
  >
    <template #pretitle>
      <h2 class="text-2xl sm:text-2xl md:text-3xl text-gray-500">
        <NuxtLink
          :to="`/glossary/${route.params.category}/key-terms`"
          data-no-style
          >{{ category.title }} Key terms
        </NuxtLink>
      </h2>
    </template>
  </Article>
</template>

<script setup>
import { categories } from "@/data/glossary";
import Article from "@/components/Article.vue";

const route = useRoute();

const category = computed(() => {
  const category = categories.find(
    (category) => category.category === route.params.category,
  );
  return category || {};
});
</script>
