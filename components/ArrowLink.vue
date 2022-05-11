<template>
  <a :href="href" target="_blank" class="group underline">
    <span v-if="text">{{ text }}<Arrow /></span>
    <slot v-else></slot>
  </a>
</template>

<script setup>
import Arrow from "./Arrow.vue";

const props = defineProps(["href", "text"]);
</script>
