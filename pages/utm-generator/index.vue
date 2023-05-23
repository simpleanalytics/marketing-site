<template>
  <section>
    <div class="text-center">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("utm_generator.title") }}.
      </h1>
    </div>

    <div class="max-w-7xl mx-auto mt-8 lg:mt-16 sm:px-6">
      <div class="justify-center block sm:flex sm:flex-wrap">
        <div v-for="generator in utmGeneratorChannels" class="flex p-6 w-full sm:w-1/2 lg:w-1/3">
          <div class="flex w-full flex-col shadow-xl overflow-hidden rounded-lg bg-blue-100 dark:bg-gray-700 relative">
            <NuxtLink :to="`/utm-generator/${generator.name}`" :class="`flex h-80 p-4 shadow-md bg-${generator.name}`">
              <div class="flex h-full justify-center items-center w-full">
                <component :is="generator.imageComponent" class="max-h-full max-w-full"/>
              </div>
            </NuxtLink>

            <div class="mt-auto px-6 py-8">
              <NuxtLink :to="`/utm-generator/${generator.name}`">
                <h3 class="capitalize font-semibold text-center dark:text-gray-300 text-gray-600 text-2xl">{{ generator.name.split("-").join(" ") }}</h3>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Facebook from '@/components/logos/Facebook.vue';
import Google from '@/components/logos/Google.vue';
import GoogleSheets from '@/components/logos/GoogleSheets.vue';
import Excel from '@/components/logos/Excel.vue';
import Tiktok from '@/components/logos/Tiktok.vue';


/** utm generator objects */
const utmGeneratorChannels = ref([
  {
    name: 'facebook',
    imageComponent: Facebook
  },
  {
    name: 'google',
    imageComponent: Google
  },
  {
    name: 'google-sheets',
    imageComponent: GoogleSheets
  },
  {
    name: 'spreadsheets',
    imageComponent: Excel
  },
  {
    name: 'tiktok',
    imageComponent: Tiktok
  }
]);


/** top page layout */
definePageMeta({
  title: "UTM generator",
  description: "Simple Analytics UTM generator",
});
</script>

<style>
.bg-facebook {
  @apply bg-[#add8e6]
}

.bg-google {
  @apply bg-[#f4b300ec]
}

.bg-google-sheets {
  @apply bg-[#e6f5ea]
}

.bg-spreadsheets {
  @apply bg-[#90ee90]
}

.bg-tiktok {
  @apply bg-[#aaaaaa]
}
</style>