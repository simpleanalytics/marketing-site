<template>
  <div>
    <div
      v-if="showThankYouMessage"
      class="max-w-2xl px-6 mx-auto mb-8 py-4 bg-green-200 dark:bg-green-900 rounded-lg text-center"
    >
      <p class="text-green-800 dark:text-green-100 leading-relaxed">
        {{ $t("hiring.thank_you_message") }}
      </p>
    </div>

    <div
      v-if="isApplicationClosed"
      class="max-w-2xl px-6 mx-auto mb-8 py-4 bg-red-200 dark:bg-red-900 rounded-lg text-center"
    >
      <p class="text-red-800 dark:text-red-100 leading-relaxed">
        {{ $t("hiring.applications_closed") }}
      </p>
    </div>

    <div class="text-center px-6">
      <h1
        class="text-2xl font-medium sm:text-2xl md:text-4xl"
        v-html="$t('hiring.title', tColorsRed)"
      ></h1>

      <p class="mt-4 text-sm" v-html="$t('hiring.description')" />
    </div>

    <div class="max-w-3xl px-6 mx-auto mt-8">
      <Video
        class="mx-auto max-w-[800px]"
        :width="854"
        :height="480"
        color="#5d3828"
        poster="https://assets.simpleanalytics.com/videos/2025-04-09-developer-recruitment/video.png"
      >
        <source
          src="https://assets.simpleanalytics.com/videos/2025-05-20-developer-recruitment/video.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.simpleanalytics.com/videos/2025-05-20-developer-recruitment/video.mov"
          type="video/mov"
        />
        <source
          src="https://assets.simpleanalytics.com/videos/2025-05-20-developer-recruitment/video.ogv"
          type="video/ogg"
        />
        <source
          src="https://assets.simpleanalytics.com/videos/2025-05-20-developer-recruitment/video.webm"
          type="video/webm"
        />
        <source
          src="https://assets.simpleanalytics.com/videos/2025-05-20-developer-recruitment/video.wmv"
          type="video/wmv"
        />
      </Video>
    </div>

    <div
      class="mx-auto pl-8 md:pl-0 mt-6 flex flex-col md:flex-row justify-center gap-2 md:gap-12 text-sm md:text-md"
    >
      <!-- First column -->
      <ul class="space-y-2 list-disc list-inside">
        <li>
          <span v-html="$t('hiring.bullets.role', tColorsRed)" />
        </li>
        <li>
          <span v-html="$t('hiring.bullets.code', tColorsRed)" />
        </li>
        <li>
          <span v-html="$t('hiring.bullets.remote', tColorsRed)" />
        </li>
        <li>
          <span v-html="$t('hiring.bullets.team', substackLink)" />
        </li>
        <li>
          <span v-html="$t('hiring.bullets.privacy', tColorsRed)" />
        </li>
        <li>
          <span v-html="$t('hiring.bullets.support', tColorsRed)" />
        </li>
      </ul>

      <!-- Second column -->
      <ul class="space-y-2 list-disc list-inside">
        <li>
          <span v-html="$t('hiring.bullets.salary', tColorsRed)" />
        </li>
        <li>
          <span v-html="$t('hiring.bullets.macbook', tColorsRed)" />
        </li>
        <li>
          <span v-html="$t('hiring.bullets.fulltime', tColorsRed)" />
        </li>
        <li>
          <span v-html="$t('hiring.bullets.ai_tools', tColorsRed)" />
        </li>
        <li>
          <span v-html="$t('hiring.bullets.communication')" />
        </li>
        <li>
          <div class="inline-flex items-center gap-2">
            <span v-html="$t('hiring.bullets.no_cables')" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              class="fill-current text-red-500 dark:text-red-600"
            >
              <path
                d="M6.623 18.244l-2.285.728c-.63.194-.936-.751-.303-.954l2.284-.727c.635-.198.931.753.304.953zm-.291-1.718l-3.47-1c-.641-.183-.352-1.15.277-.961l3.471 1c.642.185.351 1.147-.278.961zm13.331 2.446l-2.285-.728c-.63-.201-.329-1.15.303-.953l2.284.727c.633.203.326 1.151-.302.954zm1.476-3.446l-3.471 1c-.632.185-.915-.777-.277-.961l3.471-1c.635-.185.913.779.277.961zm-4.639-3.526c-.551 0-1-.448-1-1s.449-1 1-1c.552 0 1 .448 1 1s-.448 1-1 1zm2-1c0-1.105-.896-2-2-2-1.103 0-2 .895-2 2 0 1.104.897 2 2 2 1.104 0 2-.896 2-2zm-11 1c-.551 0-1-.448-1-1s.449-1 1-1c.552 0 1 .448 1 1s-.448 1-1 1zm2-1c0-1.105-.896-2-2-2s-2 .895-2 2c0 1.104.896 2 2 2s2-.896 2-2zm5.956 7.35c-.547 1.215-2.47 1.831-3.456.543-.987 1.289-2.91.671-3.456-.543-.271-.6.64-1.014.912-.41.336.746 2.034 1.301 2.044-.797v-.504c-.615-.218-1.061-.798-1.061-1.313 0-.646.699-.936 1.561-.936.863 0 1.562.29 1.562.936 0 .515-.446 1.095-1.062 1.313v.504c.009 2.12 1.713 1.533 2.044.797.271-.602 1.184-.192.912.41zm-3.456 4.65c-7.093 0-11-3.351-11-9.435 0-3.774 1.563-8.027 4.419-12.072 1.746 1.658 2.505 2.723 3.958 4.91 2.418-.609 3.786-.361 5.251-.004 1.431-2.167 2.219-3.304 3.944-4.914 2.825 4.032 4.428 8.385 4.428 12.08 0 6.084-3.906 9.435-11 9.435zm6.728-23c-2.082 1.814-3.081 3.044-4.546 5.261-1.289-.316-3.281-.274-4.363 0-1.402-2.11-2.405-3.344-4.546-5.261-3.069 4.042-5.273 8.939-5.273 13.565 0 5.759 3.397 10.435 12 10.435 8.604 0 12-4.676 12-10.435 0-4.578-2.207-9.502-5.272-13.565z"
              />
            </svg>
          </div>
        </li>
      </ul>
    </div>

    <div class="mt-8 max-w-3xl px-6 mx-auto">
      <div class="mx-auto max-w-xl bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
        <p class="text-md font-medium text-gray-800 dark:text-gray-100">
          Record a video of yourself:
        </p>
        <p class="mt-2 text-md">"{{ $t("hiring.instructions") }}"</p>
      </div>

      <div class="py-12 text-center">
        <a
          :href="isApplicationClosed ? '#' : 'https://tally.so/r/nrVBko'"
          class="button"
          :class="{ 'opacity-50 cursor-not-allowed': isApplicationClosed }"
          @click.prevent="isApplicationClosed ? null : null"
        >
          {{ $t("hiring.apply_button") }}
        </a>
        <p class="mt-4 text-sm">
          {{
            isApplicationClosed
              ? $t("hiring.applications_closed_short")
              : $t("hiring.apply_until")
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Video from "../components/Video.vue";
import { computed } from "vue";

definePageMeta({
  title: "Come work for Simple Analytics",
  description:
    "We're hiring a full-stack developer. Come work with Simple Analytics.",
});

const route = useRoute();
const showThankYouMessage = computed(() => route.query.thanks !== undefined);

const isApplicationClosed = computed(() => {
  const currentDate = new Date();
  const applicationDeadline = new Date("2025-06-01T23:59:59");
  return currentDate > applicationDeadline;
});

const tColorsRed = [`<span class='text-red-500 dark:text-red-600'>`, `</span>`];
const substackLink = [
  `<a href="https://1millionarr.substack.com/p/i-want-to-be-a-manager" class="underline" target="_blank">`,
  `</a>`,
];
</script>
