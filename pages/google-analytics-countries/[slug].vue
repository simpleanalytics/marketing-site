<template>
  <Article
    name="google-analytics-countries-slug"
    :slug="route.params.slug"
    articleType="google-analytics-countries"
    :keys="['reviews']"
  />
</template>

<script setup>
import Article from "@/components/Article.vue";

const route = useRoute();
</script>
