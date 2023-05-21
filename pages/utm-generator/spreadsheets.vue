<template>
  <div>
    <div class="flex flex-col items-center m-auto">
      <div class="w-60 lg:w-96">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/41a7dbf8-a0bb-48c2-8810-a0e9795b1b01/d7ujj9x-5ca3523c-c089-4743-b4f9-eb5b9517bbb5.png" alt="spreadsheets logo" class="block object-cover object-center text-center text-gray-900 w-full" loading="lazy">
      </div>

      <h1 class="font-medium p-4 lg:p-8 text-center text-4xl sm:text-5xl md:text-6xl">
        {{ $t("utm_generator.spreadsheets.title") }}.
      </h1>
    </div>

    <div class="mx-auto px-6 max-w-3xl">
      <p class="mb-4 leading-loose text-md text-center">
        {{ $t("utm_generator.spreadsheets.intro") }}
      </p>
    </div>

    <GeneratorForm :channel="`spreadsheets`" />

    <div class="px-6 max-w-3xl mb-16 mt-10 mx-auto">
      <p class="leading-loose text-center text-md">
        {{ $t("utm_generator.disclaimer") }}
      </p>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-6">
      <article 
        class="mt-4 prose prose-headings:leading-normal prose-p:leading-loose prose-td:align-middle prose-tr:border-gray-600 prose-tr:border-b-2 ml-auto mr-auto"
        v-html="$t('utm_generator.spreadsheets.html')"
      >
      </article>
    </div>
  </div>
</template>

<script setup>
import GeneratorForm from "@/components/GeneratorForm.vue";

definePageMeta({
  title: "UTM generator for Spreadsheets",
  description: "Simple Analytics UTM generator for Spreadsheets",
});
</script>