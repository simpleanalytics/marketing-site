<template>
  <div>
    <Html
      lang="en-US"
      :class="{
        'scroll-smooth': true,
        'min-h-full': true,
      }"
    />
    <div class="bg-blue-50 dark:bg-gray-800 flex flex-col min-h-screen">
      <div class="text-center mt-20 mb-20">
        <h1 v-if="error.statusMessage">
          {{ $t("error.status_message", [error.statusMessage]) }}
        </h1>
        <h1 v-else-if="error.statusCode == 404">{{ $t("error.not_found") }}</h1>
        <h1 v-else>{{ $t("error.generic") }}</h1>
        <NuxtLink to="/" class="button mt-4">{{
          $t("error.go_home")
        }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { isProxy, toRaw } from "vue";

const props = defineProps(["error"]);

const error = isProxy(props.error) ? toRaw(props.error) : props.error;

if (["404", 404].includes(error?.statusCode) && error.statusMessage)
  console.error("Error from Nuxt:", error.statusMessage);
else console.warn("Error from Nuxt:", error);

onMounted(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList.add("dark");
});
</script>
