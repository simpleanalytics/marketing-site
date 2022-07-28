<template>
  <a @click="to && router.push({ path: to })" :target="target">
    <slot />
  </a>
</template>

<script setup>
// We can not use <NuxtLink> with headlessui:
// - https://headlessui.com/react/menu#integrating-with-next-js

const props = defineProps(["to", "target"]);

const router = useRouter();
</script>
