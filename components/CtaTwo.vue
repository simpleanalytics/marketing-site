<template>
  <div
    class="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg flex flex-col items-center justify-center"
  >
    <div class="flex items-center justify-center">
      <Michelin class="w-12 h-12 dark:fill-gray-200" />
      <span class="mx-6 text-gray-800 dark:text-gray-200"
        >Michelin choose Simple Analytics</span
      >
      <NuxtLink class="button no-underline" :to="{ name: 'index' }"
        >Join them</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import Michelin from "@/components/logos/Michelin.vue";
</script>
