<template>
  <Article
    name="google-analytics-countries-slug"
    :slug="route.params.slug"
    articleType="google-analytics-countries"
  />
</template>

<script setup>
import Article from "@/components/Article.vue";

const route = useRoute();
</script>
