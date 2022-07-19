<template>
  <NuxtLayout name="default">
    <template #hero>
      <div class="text-center">
        <h1
          class="text-2xl font-medium sm:text-2xl md:text-4xl pt-8"
          v-html="$t('home.why_most_privacy.title', tColorsRed)"
        ></h1>
      </div>
    </template>

    <div class="max-w-3xl px-6 mx-auto -mt-6 md:-mt-14">
      <Video
        class="mx-auto max-w-[800px]"
        width="854"
        height="480"
        color="#5d3828"
        poster="https://assets.simpleanalytics.com/videos/promo/v2/promo.jpg"
      >
        <source
          src="https://assets.simpleanalytics.com/videos/promo/v2/promo.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.simpleanalytics.com/videos/promo/v2/promo.ogv"
          type="video/ogg"
        />
        <source
          src="https://assets.simpleanalytics.com/videos/promo/v2/promo.webm"
          type="video/webm"
        />
        <track
          label="English"
          kind="subtitles"
          srclang="en"
          src="https://assets.simpleanalytics.com/videos/promo/v2/promo.vtt"
          default=""
        />
      </Video>

      <div class="py-12 text-center">
        <StartTrial />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import Video from "../components/Video.vue";

definePageMeta({
  title: "Video",
  layout: false,
});

const tColorsRed = [`<span class='text-red-500 dark:text-red-600'>`, `</span>`];
</script>
