<template>
  <a @click="clickHandler">
    <slot />
  </a>
</template>

<script setup>
// We can not use <NuxtLink> with headlessui:
// - https://headlessui.com/react/menu#integrating-with-next-js

const props = defineProps(["href", "target"]);

const router = useRouter();

const clickHandler = () => {
  if (props.href?.startsWith("/")) router.push({ path: props.href });
  else if (props.target) window.open(props.href, props.target);
  else window.location.href = props.href;
};
</script>
