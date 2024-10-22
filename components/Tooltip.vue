<template>
  <div ref="popoverbutton" class="relative inline-block">
    <div>
      <div ref="slot" :class="rounded ? 'rounded-full overflow-hidden' : ''">
        <slot>Trigger tooltip</slot>
      </div>

      <div
        :class="
          open ? '-translate-y-[120%] opacity-100' : 'translate-y-0 opacity-0'
        "
        class="absolute z-20 w-max top-0 left-1/2 transition-all ease-in-out duration-300 transform -translate-x-1/2 bg-gray-600 text-white py-1 px-2 rounded-lg text-sm pointer-events-none"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});

const open = ref(false);
const popoverbutton = ref();
const slot = ref();
const timer = ref();
const lastOpened = ref();
const minimalTimeOpen = 200;

onMounted(() => {
  const hasMouse = matchMedia("(hover: hover)").matches;

  if (hasMouse) {
    slot.value?.addEventListener("mouseenter", () => {
      lastOpened.value = Date.now();
      clearTimeout(timer.value);
      open.value = true;
    });
    slot.value?.addEventListener("mouseleave", () => {
      const elapsedTime = Date.now() - lastOpened.value;
      const remainingTime = Math.max(0, minimalTimeOpen - elapsedTime);
      timer.value = setTimeout(() => {
        open.value = false;
      }, remainingTime);
    });
  }
});
</script>
