<template>
<Article
    name="resources-analytics-review-slug"
    :slug="route.params.slug"
    :articleType="route.params.section"
    :drafts="true"
  />  
</template>

<script setup>
import Article from "@/components/Article.vue";

const route = useRoute();
</script>
