<template>
  <NuxtLayout>
    <div>
      <h1 v-if="error.statusCode === 404">Oops, page not found</h1>
      <h1 v-else>Oops, an error occurred</h1>
      <NuxtLink to="/">Go to the home page</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  props: ["error"],
};
</script>
