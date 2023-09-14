<template>
    <Article
      name="case-study-slug"
      :slug="route.params.slug"
      :articleType="route.params.section"
    />
  </template>
  
  <script setup>
  import Article from "@/components/Article.vue";
  
  const route = useRoute();
  </script>
  
