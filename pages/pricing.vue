<template>
  <NuxtLayout name="default">
    <template #hero>
      <div class="text-center">
        <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">Pricing</h1>
      </div>
    </template>

    <div class="max-w-3xl px-6 mx-auto">
      <Pricing />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mt-2 mb-4 sm:mt-32 sm:mb-8 font-medium text-center"
      >
        Frequently Asked Questions.
      </h3>

      <FAQ />

      <div class="py-12 text-center">
        <StartTrial />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import Pricing from "../components/Pricing.vue";
import FAQ from "../components/FAQ.vue";

definePageMeta({
  title: "Pricing",
  layout: false,
});
</script>
