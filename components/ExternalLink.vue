<template>
  <a :href="href" :target="target">
    <slot />
  </a>
</template>

<script setup>
// We can not use <NuxtLink> with headlessui:
// - https://headlessui.com/react/menu#integrating-with-next-js

defineProps(["href", "target"]);

const router = useRouter();
</script>
