<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="to">
    <slot />
  </NuxtLink>
</template>
