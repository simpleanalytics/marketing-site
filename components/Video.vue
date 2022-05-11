<template>
  <div
    class="group relative dark:shadow-gray-600/10 shadow-lg rounded-lg overflow-hidden"
    :style="`aspect-ratio: ${width} / ${height}`"
  >
    <div
      class="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center transition"
      :class="playing ? 'opacity-0 hover-hover:group-hover:opacity-100' : ''"
    >
      <div class="basis-1/3 flex justify-center">
        <ArrowsExpandIcon
          @click="playFullScreen()"
          class="w-12 fill-white dark:fill-gray-200 scale-125 drop-shadow-lg opacity-0 hover-hover:group-hover:opacity-100 transition cursor-pointer"
        />
      </div>
      <div class="basis-1/3">
        <PauseIcon
          v-if="playing"
          @click="pause()"
          class="w-24 fill-white dark:fill-gray-200 drop-shadow-lg scale-125 cursor-pointer"
        />
        <PlayIcon
          v-else
          @click="play()"
          class="w-24 fill-white/95 dark:fill-gray-200/95 hover-hover:group-hover:fill-white dark:hover-hover:group-hover:fill-gray-200 drop-shadow-lg transition hover-hover:group-hover:scale-125 cursor-pointer"
        />
      </div>
      <div class="basis-1/3"></div>
    </div>
    <video
      ref="video"
      loop
      :poster="poster"
      crossorigin="anonymous"
      preload="none"
      playsinline
      :muted="autoPlay()"
      :width="width"
      :height="height"
      :style="`aspect-ratio: ${width} / ${height}`"
    >
      <slot />
    </video>
  </div>
</template>

<script setup>
import {
  ArrowSmRightIcon,
  CheckIcon,
  PlayIcon,
  PauseIcon,
  ArrowCircleRightIcon,
} from "@heroicons/vue/solid";

import { ShieldCheckIcon, ChevronDoubleDownIcon } from "@heroicons/vue/outline";
import ArrowsExpandIcon from "./images/ArrowsExpandIcon";

const props = defineProps(["width", "height", "poster", "color", "autoplay"]);

const playing = ref(false);
const video = ref();

const play = () => {
  video.value.muted = false;
  video.value.play();
};
const pause = () => {
  video.value.pause();
};

const playFullScreen = () => {
  if (video.value.requestFullscreen) {
    video.value.requestFullscreen();
  } else if (video.value.mozRequestFullScreen) {
    video.value.mozRequestFullScreen();
  } else if (video.value.webkitRequestFullscreen) {
    video.value.webkitRequestFullscreen();
  } else if (video.value.msRequestFullscreen) {
    video.value.msRequestFullscreen();
  }

  video.value.muted = false;

  video.value.play();
};

const autoPlay = () => {
  if (!props.autoplay) return false;

  let agent;

  if (process.client) {
    agent = window?.navigator?.userAgent;
  } else if (process.server) {
    const nuxtApp = useNuxtApp();
    agent = nuxtApp.ssrContext?.req?.headers?.["user-agent"];
  }

  if (agent)
    return !/bot|crawl|android|webos|iphone|mobile|opera mini/i.test(agent);

  if (process.client) {
    const type = navigator?.connection?.effectiveType;
    if (type) return !["2g", "slow-2g"].includes(type);
  }

  if (!agent) return false;
  return true;
};

onMounted(() => {
  video.value?.addEventListener("playing", () => (playing.value = true));
  video.value?.addEventListener("ended", () => (playing.value = false));
  video.value?.addEventListener("pause", () => (playing.value = false));

  if (autoPlay()) {
    setTimeout(() => {
      video.value.play();
    }, 1000);
  }
});
</script>
