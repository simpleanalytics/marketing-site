<template>
  <div
    class="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg flex flex-col items-center justify-center"
  >
    <div class="flex items-center justify-center">
      <GovUK class="w-8 h-8 dark:!fill-gray-200" />
      <span class="mx-6 text-gray-800 dark:text-gray-200"
        >The UK Government chose Simple Analytics</span
      >
      <a
        class="button no-underline"
        @click="navigateToWelcome($router, 'click_signup_gov_uk')"
        >Join them</a
      >
    </div>
  </div>
</template>

<script setup>
import GovUK from "@/components/logos/GovUK.vue";

const router = useRouter();
</script>
