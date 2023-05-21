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
          <figure class="flex w-full flex-col shadow-xl overflow-hidden rounded-lg bg-blue-100 dark:bg-gray-700 relative">
            <NuxtLink :to="`/utm-generator/${generator.name.split(' ').join('-')}`" class="flex">
              <img :src="generator.imgSrc" :alt="`${generator.name} logo`" class="aspect-[16/9] block bg-white object-contain object-center w-full text-center text-gray-900" loading="lazy">
            </NuxtLink>

            <div class="px-6 py-8 flex-grow flex flex-col">
              <NuxtLink :to="`/utm-generator/${generator.name.split(' ').join('-')}`">
                <figcaption class="capitalize font-semibold text-center dark:text-gray-300 text-gray-600 text-2xl">{{ generator.name.split(' ').join('-') }}</figcaption>
              </NuxtLink>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  title: "UTM generator",
  description: "Simple Analytics UTM generator",
});

/** utm generator objects */
const utmGeneratorChannels = ref([
  {
    name: 'facebook',
    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
  },
  {
    name: 'google',
    imgSrc: 'https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg'
  },
  {
    name: 'google sheets',
    imgSrc: 'https://lh3.googleusercontent.com/yCF7mTvXRF_EhDf7Kun5_-LMYTbD2IL-stx_D97EzpACfhpGjY_Frx8NZw63rSn2dME0v8-Im49Mh16htvPAGmEOMhiTxDZzo6rB7MY'
  },
  {
    name: 'spreadsheets',
    imgSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/41a7dbf8-a0bb-48c2-8810-a0e9795b1b01/d7ujj9x-5ca3523c-c089-4743-b4f9-eb5b9517bbb5.png',
  },
  {
    name: 'tiktok',
    imgSrc: 'https://cms-assets.simpleanalytics.com/small_tiktok_e421894672.png'
  }
]);
</script>