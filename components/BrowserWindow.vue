<template>
  <div
    ref="browserWindow"
    class="bg-gray-50 dark:bg-gray-900 max-w-5xl mx-auto rounded md:rounded-xl lg:rounded-2xl overflow-hidden shadow-xl"
  >
    <!-- SVG with Tailwind classes and dark mode variants -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="none"
      :viewBox="`0 0 ${browserWidth} 82`"
      class="bg-gray-200 dark:bg-gray-700"
    >
      <!-- Top left circles with Tailwind colors and dark mode variants -->
      <circle
        class="fill-[#F2B119] dark:fill-[#DAA520]"
        cx="95.5"
        cy="43.5"
        r="11.5"
      />
      <circle
        class="fill-[#23AC7E] dark:fill-[#20B2AA]"
        cx="137.5"
        cy="43.5"
        r="11.5"
      />
      <circle
        class="fill-[#EB3D56] dark:fill-[#CD5C5C]"
        cx="53.5"
        cy="43.5"
        r="11.5"
      />

      <!-- Other SVG elements with responsive and dark mode styles -->
      <rect
        :width="842 - reduceBy"
        height="36"
        x="298"
        y="25"
        class="fill-white dark:fill-gray-900"
        rx="18"
      />

      <!-- Hamburger manu -->
      <rect
        width="40"
        height="6"
        :x="1166 - reduceBy"
        y="25"
        class="fill-white dark:fill-gray-900"
        rx="3"
      />
      <rect
        width="40"
        height="6"
        :x="1166 - reduceBy"
        y="55"
        class="fill-white dark:fill-gray-900"
        rx="3"
      />
      <rect
        width="40"
        height="6"
        :x="1166 - reduceBy"
        y="40"
        class="fill-white dark:fill-gray-900"
        rx="3"
      />

      <circle cx="259" cy="43" r="18" class="fill-white dark:fill-gray-900" />
      <circle cx="201" cy="43" r="18" class="fill-white dark:fill-gray-900" />

      <!-- Arrows -->
      <path
        class="fill-gray-300 dark:fill-gray-500"
        d="M199.8 41h10.4a1.8 1.8 0 0 1 0 3.5h-10.7a1 1 0 0 0-.7 1.7l4.3 4A1.6 1.6 0 0 1 202 53h-.2c-.5 0-1-.2-1.3-.5l-8-8a2 2 0 0 1 0-3l8-8a1.9 1.9 0 0 1 3.1 1.7v.2c0 .4-.3.8-.6 1l-3.5 3.6c-.5.3-.3 1 .3 1ZM261.3 45h-10.6a1.8 1.8 0 0 1 0-3.5h10.8a1 1 0 0 0 .7-1.7l-4.3-4A1.6 1.6 0 0 1 259 33h.2c.5 0 1 .2 1.3.5l8 8c.9.9.9 2.1 0 3l-8 8a1.9 1.9 0 0 1-3.1-1.7v-.2c0-.4.3-.8.6-1l3.5-3.6c.5-.3.3-1-.3-1Z"
      />

      <!-- Search icon -->
      <path
        class="fill-gray-300 dark:fill-gray-500"
        fill-rule="evenodd"
        d="M1121.9 45.7a7.5 7.5 0 1 0-2.2 2.2l4 4a1.5 1.5 0 1 0 2.2-2.2l-4-4Zm-3.1-7.3a4.5 4.5 0 1 1-6.4 6.4 4.5 4.5 0 0 1 6.4-6.4Z"
        clip-rule="evenodd"
        :transform="`translate(-${reduceBy}, 0)`"
      />
    </svg>
    <div class="min-h-[200px] md:min-h-[500px] flex flex-col">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const browserWidth = ref(1234);
const browserWindow = ref();

const reduceBy = computed(() => {
  return 1234 - browserWidth.value;
});

// set width to 700px on mobile
onMounted(() => {
  const element = browserWindow.value;
  // detect element changeing size
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { width } = entry.contentRect;
      if (width < 700) {
        browserWidth.value = 700;
      } else {
        browserWidth.value = 1234;
      }
    }
  });

  resizeObserver.observe(element);
});
</script>
