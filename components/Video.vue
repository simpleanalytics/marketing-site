<template>
  <div
    class="not-prose group relative dark:shadow-gray-600/10 shadow-lg rounded-lg overflow-hidden"
    :class="
      brightness && brightness < 80 ? 'dark:border dark:border-gray-600' : ''
    "
    :style="`aspect-ratio: ${width} / ${height}`"
  >
    <div
      class="absolute z-20 top-0 bottom-0 right-0 left-0 flex justify-center items-center transition"
      :class="playing ? 'opacity-0 hover:group-hover:opacity-100' : ''"
    >
      <div class="grow basis-1/2">
        <ArrowsPointingOutIcon
          @click="playFullScreen()"
          class="mx-auto w-16 stroke-white dark:stroke-gray-200 drop-shadow-lg opacity-0 hover:group-hover:opacity-100 transition cursor-pointer"
        />
      </div>
      <div class="grow-0">
        <PauseIcon
          v-if="playing"
          @click="pause()"
          class="mx-auto w-24 fill-white dark:fill-gray-200 drop-shadow-lg scale-125 cursor-pointer"
        />
        <PlayIcon
          v-else
          @click="play()"
          class="mx-auto w-24 fill-white/95 dark:fill-gray-200/95 hover:group-hover:fill-white dark:hover:group-hover:fill-gray-200 drop-shadow-lg transition hover:group-hover:scale-125 cursor-pointer"
        />
      </div>
      <div class="grow basis-1/2"></div>
    </div>
    <video
      ref="video"
      loop
      :poster="poster"
      class="relative z-10"
      :preload="poster ? 'none' : 'auto'"
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
  ArrowSmallRightIcon,
  CheckIcon,
  PlayIcon,
  PauseIcon,
  ArrowRightCircleIcon,
} from "@heroicons/vue/24/solid";

import {
  ShieldCheckIcon,
  ChevronDoubleDownIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/vue/24/outline";

import ArrowsExpandIcon from "./images/ArrowsExpandIcon";

const props = defineProps([
  "width",
  "height",
  "poster",
  "color",
  "autoplay",
  "brightness",
]);

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

  const hasSpeed = process.client && navigator?.connection?.effectiveType;
  const isSlow = hasSpeed ? ["2g", "slow-2g"].includes(hasSpeed) : false;
  if (isSlow) return false;

  let agent;

  if (process.client) {
    agent = window?.navigator?.userAgent;
  } else if (process.server) {
    const headers = useRequestHeaders();
    agent = headers?.["user-agent"];
  }

  if (!agent) return false;

  return !/bot|crawl|android|webos|iphone|mobile|opera mini/i.test(agent);
};

onMounted(() => {
  video.value?.addEventListener("playing", () => (playing.value = true));
  video.value?.addEventListener("ended", () => (playing.value = false));
  video.value?.addEventListener("pause", () => (playing.value = false));

  if (autoPlay()) {
    setTimeout(() => {
      if (video?.value) video.value.play();
    }, 1000);
  }
});
</script>
