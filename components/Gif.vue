<template>
  <div data-gif>
    <div
      class="relative rounded-xl w-[480px] max-w-full mx-auto overflow-hidden not-prose"
      :style="style"
      ref="container"
    >
      <img
        v-if="poster"
        :src="poster"
        class="absolute my-0 mx-auto w-full"
        :class="playing ? 'invisible' : ''"
        :style="ratio"
      />
      <img
        v-if="src && (playing || loaded || !poster)"
        :src="src"
        class="my-0 mx-auto w-full"
        :style="ratio"
      />
      <PlayCircleIcon
        v-if="!playing && poster"
        class="pointer-events-none stroke-gray-200 absolute p-1 rounded-full bg-gray-800 w-20 h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <GifIcon
        class="stroke-gray-200 dark:stroke-gray-800 absolute w-8 h-8 top-2 right-2"
      />
    </div>
  </div>
</template>

<script setup>
import { PlayCircleIcon, GifIcon } from "@heroicons/vue/24/outline";

const playing = ref(false);
const loaded = ref(false);
const container = ref(null);

const props = defineProps(["width", "height", "poster", "background", "src"]);

const ratio =
  props.width && props.height
    ? `aspect-ratio: ${props.width} / ${props.height}`
    : "";
const style = props.background
  ? `background-color: #${props.background} !important;${ratio}`
  : ratio;

watch(
  () => playing.value,
  (value) => {
    loaded.value = true;
  },
);

onMounted(() => {
  if (!container.value) return;

  // Detect hover support
  const isHoverSupported = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  if (isHoverSupported) {
    container.value.addEventListener("mouseenter", () => {
      playing.value = true;
    });
    container.value.addEventListener("mouseleave", () => {
      playing.value = false;
    });
  } else {
    container.value.addEventListener("click", () => {
      playing.value = !playing.value;
    });
  }
});
</script>
