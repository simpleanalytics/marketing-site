<template>
  <Article
    name="case-studies-slug"
    :slug="route.params.slug"
    :articleType="route.params.section"
    :keys="['reviews']"
  />
</template>

<script setup>
import Article from "@/components/Article.vue";

const route = useRoute();
</script>
