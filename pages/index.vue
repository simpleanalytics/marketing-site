<template>
  <NuxtLayout name="default">
    <template #hero>
      <div class="text-center">
        <h1 class="text-4xl font-medium text-gray-600 sm:text-5xl md:text-6xl">
          <span class="leading-snug" v-html="$t('home.title')"></span>
        </h1>
        <p
          class="mt-4 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl"
        >
          {{ $t("home.subtitle") }}
        </p>

        <div class="flex items-center justify-center mt-6 sm:mt-10">
          <HavasMediaLogo class="h-14 mt-0 m-4 sm:m-8" />
          <GovScotLogo class="h-16 mt-1 m-4 sm:m-8" />
          <GovUKLogo class="h-16 mt-0 m-4 sm:m-8" />
          <HyundaiLogo class="h-14 mt-0 m-4 sm:m-8" />
        </div>

        <div class="mt-5 max-w-lg mx-auto sm:flex sm:justify-center md:mt-4">
          <div>
            <a href="#" class="button large primary">
              {{ $t("home.start_trial_now") }}
            </a>
            <p class="mb-8 sm:mb-0 text-xs text-gray-500 mt-2">
              <CheckIcon class="fill-green-500 w-4 inline align-text-top" />
              {{ $t("home.no_creditcard") }}
            </p>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a href="#" class="button large">
              {{ $t("home.see_live_demo") }}
            </a>
          </div>
        </div>
      </div>
    </template>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <div class="max-w-2xl -mt-4 sm:-mt-14 z-10 mx-auto relative" style="">
        <div class="absolute flex items-center justify-center w-full h-full">
          <NuxtLink href="#" class="button large shadow-xl">
            {{ $t("home.go_to_live_demo") }}
          </NuxtLink>
        </div>

        <div class="shadow-sm shadow-gray-200 rounded-md">
          <video
            ref="previewVideo"
            loop=""
            muted=""
            playsinline=""
            crossorigin="anonymous"
            class="shadow-lg shadow-gray-200 rounded-md"
            preload="none"
            poster="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.webp"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.webm"
              type="video/webm"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.ogg"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.wmv"
              type="video/wmv"
            />
            <p>
              Your browser doesn't support HTML5 video. Here is a
              <a
                href="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.mp4"
                target="_blank"
                rel="noopener"
                >link to the video</a
              >
              instead.
            </p>
          </video>
        </div>
      </div>

      <Quote
        class="mt-4"
        :logo="DuckDuckGoLogo"
        :title="$t('testimonials.duckduckgo.name')"
        :subtitle="$t('testimonials.duckduckgo.role')"
        :quote="$t('testimonials.duckduckgo.quote')"
      />
    </div>

    <div
      class="bg-gradient-to-t from-blue-100 py-4 relative overflow-hidden pb-28"
    >
      <div class="max-w-3xl px-4 mx-auto text-center">
        <h3
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto text-gray-600 mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
        >
          The most privacy-friendly analytics online.
        </h3>
      </div>
      <ul class="mx-auto max-w-max text-left">
        <li class="flex items-center my-4">
          <ShieldCheckIcon class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500" />
          <p>
            We <span class="text-red-500">comply</span> by design with all
            privacy<br />policies - GDPR, PECR, CCPA and more.
          </p>
        </li>
        <li class="flex items-center my-4">
          <ShieldCheckIcon class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500" />
          <p>
            We <span class="text-red-500">never track</span> anyone,
            <a
              class="text-red-500 underline"
              href="https://simpleanalytics.com/our-promise"
              target="_blank"
              >we promise<ArrowSmRightIcon class="inline ml-1 w-4 fill-red-500"
            /></a>
          </p>
        </li>
        <li class="flex items-center my-4">
          <ShieldCheckIcon class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500" />
          <p>
            We don’t <span class="text-red-500">store</span> or
            <span class="text-red-500">sell</span> any visitor data
          </p>
        </li>
        <li class="flex items-center my-4">
          <ShieldCheckIcon class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500" />
          <p>No <span class="text-red-500">cookie banner</span> required</p>
        </li>
      </ul>

      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <BackgroundChart class="fill-blue-50 stroke-blue-500" />
      </div>
    </div>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <Quote
        class="mt-4"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=707b9c33066bf8808c934c8ab394dff6"
        title="Manager X"
        subtitle="Company x"
        quote="We're proud to be able to tell our customers that we don't track them at
      all."
      />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto text-gray-600 mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
      >
        Simple.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        One dashboard to instantly see how many visitors are coming to your
        website. Where they come from. And what they do once they're there.
        Without cookies. Without stalking.
      </p>

      <div class="mt-12 mb-8">
        <div>
          <p
            class="mb-4 p-1 px-2 mx-auto inline-flex rounded-full text-xs text-sm text-gray-400 motion-safe:animate-bounce"
            :class="showClickSeekButton ? 'visible' : 'invisible'"
          >
            <ChevronDoubleDownIcon class="w-3 inline-block" />
            <span class="mx-1">See it for yourself, click a button</span>
            <ChevronDoubleDownIcon class="w-3 inline-block" />
          </p>
        </div>
        <a
          class="button tiny m-1"
          :class="active === seek.translation ? 'primary' : ''"
          v-for="seek in videoSeeks"
          @click="jumpToTime(seek)"
          :key="seek.translation"
        >
          <PauseIcon v-if="active === seek.translation" class="w-4 mr-1" />
          <PlayIcon v-else class="w-4 mr-1" />
          {{ $t(seek.translation) }}
        </a>
      </div>
      <div class="my-8 mb-12 shadow-sm shadow-gray-200 rounded-md">
        <div class="shadow-lg shadow-gray-200 rounded-md relative">
          <div
            :class="paused && active ? 'opacity-100' : 'opacity-0'"
            class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-red-500 to-red-400 rounded-md flex flex-col items-center justify-center transition-opacity pointer-events-none"
          >
            <p class="text-lg md:text-2xl text-white text-red-100 mb-4">
              {{ $t("seek.presents") }}
            </p>
            <p v-if="active" class="text-2xl md:text-4xl text-white font-bold">
              {{ $t(active) }}
            </p>
          </div>
          <video
            ref="seekVideo"
            loop=""
            muted=""
            class="rounded-md"
            playsinline=""
            crossorigin="anonymous"
            preload="none"
            poster="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.webp"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.webm"
              type="video/webm"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.ogg"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.wmv"
              type="video/wmv"
            />
            <p>
              Your browser doesn't support HTML5 video. Here is a
              <a
                href="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.mp4"
                target="_blank"
                rel="noopener"
                >link to the video</a
              >
              instead.
            </p>
          </video>
        </div>
      </div>

      <div>
        <p><a href="#" class="button primary">Start free trial now</a></p>
        <p class="mb-8 sm:mb-0 text-xs text-gray-500 mt-4">
          <span class="block sm:inline my-2">
            <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
            Free 14-day trial
          </span>
          <span class="block sm:inline my-2">
            <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
            No credit card required
          </span>
          <span class="block sm:inline my-2">
            <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
            Cancel anytime
          </span>
        </p>
      </div>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto text-gray-600 mt-2 mb-4 sm:mt-24 sm:mb-8 font-medium"
      >
        Connect <span class="text-red-500">your data</span> with your unique
        workflow.
      </h3>
    </div>

    <section
      class="bg-gradient-to-t from-red-50 mt-12 w-full relative overflow-hidden pb-32"
    >
      <div class="block md:flex md:items-center max-w-3xl mx-auto px-8 sm:px-0">
        <DataConnections class="max-w-full mx-auto w-[350px]" />

        <ul class="mx-auto max-w-max text-left mt-12 sm:mt-0">
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500"
            />
            <p>
              <a
                class="text-red-500 underline"
                href="https://simpleanalytics.com/our-promise"
                target="_blank"
                >Import your data from Google Analytics
                <ArrowSmRightIcon class="inline ml-1 w-4 fill-red-500"
              /></a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500"
            />
            <p>
              Use Google Tag Manager, CloudFlare,<br />or our many frontend
              <a
                class="text-red-500 underline"
                href="https://docs.simpleanalytics.com/script"
                >framework plugins
                <ArrowSmRightIcon class="inline ml-1 w-4 fill-red-500"
              /></a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500"
            />
            <p>
              Export to your own systems or
              <span class="text-red-500">data lakes</span>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500"
            />
            <p>
              Export as <span class="text-red-500">raw data</span> or aggregated
            </p>
          </li>
        </ul>
      </div>

      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-x-[-1]"
      >
        <BackgroundChart class="fill-blue-50 stroke-red-500" />
      </div>
    </section>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <Quote
        class="mt-4"
        :logo="DuckDuckGoLogo"
        title="Anonymous Owner"
        subtitle="..."
        quote="After switching from GA, I tried out another privacy-focused analytics
      solution but it turned out it was too minimal and didn't give me what I
      needed. I make decisions based on data. Luckily, Simple Analytics shows
      the exact metrics I need to know about in order to grow my business, while
      also being respectful of the privacy of my visitors. AND it loads
      extremely quickly, making it SEO-friendly"
      />
    </div>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto text-gray-600 mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium"
      >
        Event tracking without tracing individuals.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        Compare multiple campaigns by their UTM codes. Check the performance of
        every button, click and page visit you want.
      </p>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        This feature is currently available in beta and is expected to be
        released later this year.
      </p>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto text-gray-600 mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium"
      >
        Easily collaborate with your team or clients.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        Create users. Grant access to the sites you want them to see. Analyze
        together.
      </p>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto text-gray-600 mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium"
      >
        Automate reports.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        Save time while keeping others in the loop of your results. Schedule
        your reports to be shared automatically at any time you want.
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
import HavasMediaLogo from "../components/logos/HavasMedia.vue";
import GovScotLogo from "../components/logos/GovScot.vue";
import GovUKLogo from "../components/logos/GovUK.vue";
import HyundaiLogo from "../components/logos/Hyundai.vue";
import DuckDuckGoLogo from "../components/logos/DuckDuckGo.vue";
import Quote from "../components/Quote.vue";
import DataConnections from "../components/images/DataConnections.vue";
import ListIcon from "../components/images/ListIcon.vue";
import BackgroundChart from "../components/images/BackgroundChart.vue";

import {
  ArrowSmRightIcon,
  CheckIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/vue/solid";

import { ShieldCheckIcon, ChevronDoubleDownIcon } from "@heroicons/vue/outline";

definePageMeta({
  title: "Simple Analytics - The privacy-first Google Analytics alternative",
  layout: false,
});

const seekVideo = ref(null);
const previewVideo = ref(null);

const videoSeeks = [
  { translation: "seek.visitors", start: 5, end: 11 },
  { translation: "seek.date_picker", start: 11, end: 15 },
  { translation: "seek.utm_sources", start: 19.25, end: 22.4 },
  { translation: "seek.pagination", start: 22.4, end: 27 },
];
</script>

<script>
export default {
  data: () => {
    return {
      active: null,
      lastUpdate: Date.now(),
      showClickSeekButton: true,
      paused: false,
      timer: null,
    };
  },
  methods: {
    jumpToTime({ start, translation }) {
      this.$refs.seekVideo.currentTime = start;
      this.$refs.seekVideo.pause();
      this.paused = true;
      this.active = translation;
      this.lastUpdate = Date.now();
      this.showClickSeekButton = false;

      if (this.timer) clearInterval(this.timer);

      this.timer = setTimeout(() => {
        this.paused = false;
        this.$refs.seekVideo.play();
      }, 1500);
    },
    isMobile() {
      const agent = window?.navigator?.userAgent;
      if (!agent) return false;
      return /android|webos|iphone|mobile|opera mini/i.test(agent);
    },
  },
  mounted() {
    this?.$refs?.seekVideo?.addEventListener("timeupdate", ({ target }) => {
      const { currentTime } = target;

      let found = null;

      for (const seek of this.videoSeeks) {
        if (currentTime > seek.start && currentTime < seek.end)
          found = seek.translation;
      }

      if (Date.now() - this.lastUpdate > 2000) this.active = found;
    });

    if (!this.isMobile()) {
      this?.$refs?.previewVideo.play();
      this?.$refs?.seekVideo.play();
    }
  },
};
</script>
