<template>
  <div
    data-video
    class="not-prose group relative dark:shadow-gray-600/10 shadow-lg rounded-lg overflow-hidden max-h-[30rem]"
    :class="
      brightness && brightness < 80 ? 'dark:border dark:border-gray-600' : ''
    "
    :style="style"
  >
    <div
      v-if="!showControls"
      class="absolute z-20 top-0 bottom-0 right-0 left-0 flex justify-center items-center transition"
      :class="playing ? 'opacity-0 hover:group-hover:opacity-100' : ''"
      @click="showControls ? () => {} : toggle()"
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
          class="mx-auto w-24 drop-shadow-lg scale-125 cursor-pointer"
          :class="props.fillColor"
        />
        <PlayIcon
          v-else
          @click="play()"
          class="mx-auto w-24 drop-shadow-lg transition hover:group-hover:scale-125 cursor-pointer"
          :class="`${props.fillColor} hover:group-hover:${props.fillColor} dark:hover:group-hover:${props.fillColor}`"
        />
      </div>
      <div class="grow basis-1/2"></div>
    </div>
    <video
      ref="video"
      loop
      :poster="poster"
      class="relative z-10 max-h-[30rem]"
      :preload="poster ? 'none' : 'auto'"
      playsinline
      :muted="autoPlay()"
      :width="width > 0 ? width : 'auto'"
      :height="height > 0 ? height : 'auto'"
      :style="ratio"
      crossorigin="anonymous"
      :controls="showControls"
    >
      <slot />
    </video>
  </div>
</template>

<script setup>
import { PlayIcon, PauseIcon } from "@heroicons/vue/24/solid";
import { ArrowsPointingOutIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  poster: {
    type: String,
    default: "",
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: "",
  },
  brightness: {
    type: Number,
    default: 100,
  },
  showControls: {
    type: Boolean,
    default: false,
  },
  fillColor: {
    type: String,
    default: "fill-red-500",
  },
});

const playing = ref(false);
const video = ref();

const ratio =
  props.width && props.height
    ? `aspect-ratio: ${props.width} / ${props.height}`
    : "";
const style = props.background
  ? `background-color: #${props.background} !important;${ratio}`
  : ratio;

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

  const hasSpeed = import.meta.client && navigator?.connection?.effectiveType;
  const isSlow = hasSpeed ? ["2g", "slow-2g"].includes(hasSpeed) : false;
  if (isSlow) return false;

  let agent;

  if (import.meta.client) {
    agent = window?.navigator?.userAgent;
  } else if (import.meta.server) {
    const headers = useRequestHeaders();
    agent = headers?.["user-agent"];
  }

  if (!agent) return false;

  return !/bot|crawl|android|webos|iphone|mobile|opera mini/i.test(agent);
};

const toggle = () => {
  if (playing.value) {
    pause();
  } else {
    play();
  }
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
