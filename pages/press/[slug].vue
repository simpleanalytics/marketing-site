<template>
  <div>
    <PressMention :slug="slug" />
  </div>
</template>

<script setup>
import PressMention from "../components/PressMention.vue";

const { slug } = useRoute().params;
</script>
