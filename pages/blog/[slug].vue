<template>
  <Article
    name="blog-slug"
    :slug="route.params.slug"
    articleType="blog"
    :drafts="true"
  />
</template>

<script setup>
import Article from "@/components/Article.vue";

const route = useRoute();
</script>
