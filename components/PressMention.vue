<template>
  <div>
    <div class="max-w-4xl px-6 mx-auto mt-12 text-center">
      <h1 class="text-2xl font-medium sm:text-2xl md:text-4xl">
        {{ mention.name }}
      </h1>
      <p class="mt-4 text-lg">
        {{ format(mention.date) }}
      </p>
      <p class="mt-4 text-lg leading-loose">{{ mention.description }}</p>
      <NuxtLink to="/press" class="mt-4 block">
        <span class="inline-block mr-1">←</span> To all press mentions
      </NuxtLink>
    </div>

    <div class="max-w-3xl px-6 mx-auto mt-10">
      <p
        v-if="mention.video && mention.locale !== locale && locale === 'en'"
        class="mx-auto text-center block mb-6 px-4 py-2 rounded-lg bg-[#ffd9cb] dark:bg-[#592b1b]"
      >
        Video is in Dutch. Read the translated version below.
      </p>

      <Video
        v-if="mention.video"
        class="mx-auto max-w-[800px]"
        :width="854"
        :height="480"
        :color="'#5d3828'"
        :poster="mention.video.poster"
        :showControls="true"
      >
        <source
          v-if="mention.video.mp4"
          :src="mention.video.mp4"
          type="video/mp4"
        />
        <track
          v-if="mention.video.subtitles.en"
          :src="mention.video.subtitles.en"
          kind="subtitles"
          srclang="en"
          label="English"
        />
        <track
          v-if="mention.video.subtitles.nl"
          :src="mention.video.subtitles.nl"
          kind="subtitles"
          srclang="nl"
          label="Dutch"
        />
      </Video>

      <div v-else class="mb-8">
        <img
          :src="mention.image"
          :alt="mention.name"
          class="w-full rounded-lg shadow-md"
        />
      </div>

      <div class="mt-8">
        <p v-if="mention.hosts" class="text-lg">
          <strong>{{ mention.hosts.length > 1 ? "Hosts" : "Host" }}:</strong>
          {{ mention.hosts.join(", ") }}
        </p>
        <p v-if="mention.url" class="text-lg">
          <a :href="mention.url" target="_blank" rel="noopener noreferrer">{{
            mention.url
          }}</a>
        </p>
      </div>

      <div v-if="mention.audio">
        <h2 class="mt-8 text-2xl font-medium">Listen</h2>
        <audio controls class="w-full mt-4">
          <source :src="mention.audio" type="audio/mpeg" />
          {{ $t("common.browser_not_support_audio") }}
        </audio>
      </div>

      <div class="mt-8 leading-loose prose prose-headings:font-medium">
        <slot></slot>
      </div>

      <div class="py-12 text-center">
        <StartTrial />
      </div>
    </div>
  </div>
</template>

<script setup>
import { pressMentions } from "~/data/press";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const { slug } = defineProps(["slug"]);

const format = (date) => {
  if (!date) return null;
  return new Intl.DateTimeFormat(t("time.intl_locale"), {
    month: "short",
    year: "numeric",
    day: "numeric",
  }).format(new Date(date));
};

const mention = pressMentions.find((mention) => mention.slug === slug);

if (!mention)
  throw createError({
    statusCode: 404,
    message: "Press mention not found",
  });
</script>
