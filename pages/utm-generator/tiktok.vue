<template>
  <div>
    <div class="flex flex-col items-center m-auto">
      <div class="w-60 lg:w-96">
        <img src="https://cms-assets.simpleanalytics.com/small_tiktok_e421894672.png" alt="tiktok logo" class="bg-[#8a7c84] block object-cover object-center text-center text-gray-900 w-full" loading="lazy">
      </div>

      <h1 class="font-medium p-4 lg:p-8 text-center text-4xl sm:text-5xl md:text-6xl">
        {{ $t("utm_generator.tiktok.title") }}.
      </h1>
    </div>

    <div class="mx-auto px-6 max-w-3xl">
      <p class="mb-4 leading-loose text-md text-center">
        {{ $t("utm_generator.tiktok.intro") }}
      </p>
    </div>

    <GeneratorForm :channel="`tiktok`" />

    <div class="px-6 max-w-3xl mb-16 mt-10 mx-auto">
      <p class="leading-loose text-center text-md">
        {{ $t("utm_generator.disclaimer") }}
      </p>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-6">
      <article 
        class="mt-4 prose prose-headings:leading-normal prose-p:leading-loose prose-td:align-middle prose-tr:border-gray-600 prose-tr:border-b-2 ml-auto mr-auto"
        v-html="$t('utm_generator.tiktok.html')"
      >
      </article>
    </div>
  </div>
</template>

<script setup>
import GeneratorForm from "@/components/GeneratorForm.vue";

definePageMeta({
  title: "UTM generator for TikTok",
  description: "Simple Analytics UTM generator for TikTok",
});
</script>