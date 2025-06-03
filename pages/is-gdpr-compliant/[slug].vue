<template>
  <Article
    name="is-gdpr-compliant-slug"
    :slug="route.params.slug"
    articleType="gdpr-compliance"
    :keys="['reviews']"
  />
</template>

<script setup>
import Article from "@/components/Article.vue";

const route = useRoute();
</script>
