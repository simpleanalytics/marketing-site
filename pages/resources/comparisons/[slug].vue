<template>
  <Article
    name="resources-comparisons-slug"
    :slug="route.params.slug"
    :articleType="route.params.comparisons"
    :keys="['reviews']"
  />
</template>

<script setup>
import Article from "@/components/Article.vue";

const route = useRoute();
</script>
