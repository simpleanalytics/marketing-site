<template>
  <p>
    <a
      :href="'https://simpleanalytics.com/welcome?theme=' + theme"
      class="button primary"
      >Start free trial now</a
    >
  </p>
  <p class="mb-8 sm:mb-0 text-xs mt-4">
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      Free 14-day trial
    </span>
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      No credit card required
    </span>
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      Cancel anytime
    </span>
  </p>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/solid";

const theme = useTheme();
</script>
