<template>
  <Html
    lang="en-US"
    :class="{
      'scroll-smooth': true,
      'min-h-full': true,
    }"
  />
  <div class="bg-blue-50 dark:bg-gray-800 flex flex-col min-h-screen">
    <div class="text-center mt-20 mb-20">
      <h1 v-if="error.statusMessage">{{ error.statusMessage }}</h1>
      <h1 v-else-if="error.statusCode == 404">Oops, page not found</h1>
      <h1 v-else>Oops, an error occurred</h1>
      <NuxtLink to="/">Go to the home page</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["error"]);

console.log(props.error);
</script>
