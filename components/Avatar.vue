<template>
  <div>
    <img
      v-if="avatar"
      :src="avatar"
      :alt="`Image of ${name}`"
      class="rounded-full w-8 h-8 bg-gray-300 mr-2"
    />
    <div
      v-else
      class="rounded-full w-8 h-8 bg-gray-300 dark:bg-gray-600 mr-2"
    ></div>
  </div>
</template>

<script setup>
import { getAuthorFromSlug } from "~/utils/blog";

const props = defineProps(["slug"]);

const { name, avatar } = props.slug ? getAuthorFromSlug(props.slug) : {};
</script>
