<template>
  <div>
    <div class="text-center">
      <h1
        class="text-2xl font-medium sm:text-2xl md:text-4xl"
        v-html="$t('home.why_most_privacy.title', tColorsRed)"
      ></h1>
    </div>

    <div class="max-w-3xl px-6 mx-auto mt-12">
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
  </div>
</template>

<script setup>
import Video from "../components/Video.vue";

definePageMeta({
  title: "Video",
  description:
    "Our non-serious video where we explain why Simple Analytics is the most privacy-first analytics.",
});

const tColorsRed = [`<span class='text-red-500 dark:text-red-600'>`, `</span>`];
</script>
