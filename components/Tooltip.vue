<template>
  <div ref="popoverbutton" class="relative inline-block">
    <div>
      <div><slot>Trigger tooltip</slot></div>

      <div
        :class="
          open ? '-translate-y-[120%] opacity-100' : 'translate-y-0 opacity-0'
        "
        class="absolute z-10 w-max top-0 left-1/2 transition-all ease-in-out duration-300 transform -translate-x-1/2 bg-gray-600 text-white py-1 px-2 rounded-lg text-sm"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["text"]);

const open = ref(false);
const popoverbutton = ref();

onMounted(() => {
  const hasMouse = matchMedia("(hover: hover)").matches;

  if (hasMouse) {
    popoverbutton.value?.addEventListener(
      "mouseenter",
      () => (open.value = true),
    );
    popoverbutton.value?.addEventListener(
      "mouseleave",
      () => (open.value = false),
    );
  }
});
</script>
