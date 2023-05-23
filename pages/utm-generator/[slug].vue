<template>
  <div>
    <div class="flex flex-col items-center m-auto">
      <div class="w-60 lg:w-96">
        <div class="flex justify-center items-center h-80 w-full">
          <component :is="currentChannelImage" class="max-h-full max-w-full"/>
        </div>
      </div>

      <h1 class="font-medium p-4 lg:p-8 text-center text-4xl sm:text-5xl md:text-6xl">
        {{ $t(`utm_generator.${slug}.title`) }}.
      </h1>
    </div>

    <div class="mx-auto px-6 max-w-3xl">
      <p class="mb-4 leading-loose text-md text-center">
        {{ $t(`utm_generator.${slug}.intro`) }}
      </p>
    </div>

    <GeneratorForm :channel="slug" />

    <div class="px-6 max-w-3xl mb-16 mt-10 mx-auto">
      <p class="leading-loose text-center text-md">
        {{ $t("utm_generator.disclaimer") }}
      </p>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-6">
      <article 
        class="mt-4 prose prose-headings:leading-normal prose-p:leading-loose prose-td:align-middle prose-tr:border-gray-600 prose-tr:border-b-2 ml-auto mr-auto" 
        v-html="$t(`utm_generator.${slug}.html`)"
      >
      </article>
    </div>
  </div>
</template>

<script setup>
import Facebook from '@/components/logos/Facebook.vue';
import Google from '@/components/logos/Google.vue';
import GoogleSheets from '@/components/logos/GoogleSheets.vue';
import Excel from '@/components/logos/Excel.vue';
import Tiktok from '@/components/logos/Tiktok.vue';
import GeneratorForm from "@/components/GeneratorForm.vue";


/** get utm generator channel from route */
const route = useRoute();
const { slug } = route.params;


/** utm generator objects */
const utmGeneratorChannels = [
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
];

const currentChannelImage = computed(() => {
  let channelExists = utmGeneratorChannels.find(channel => channel.name === slug.toLowerCase());

  if (channelExists) return channelExists.imageComponent;
  else return null;
}); 


/** top page properties  */
definePageMeta({
  title: `UTM generator`,
  description: `Simple Analytics UTM generator`,
});
</script>