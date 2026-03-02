<template>
  <p>
    <a
      @click="navigateToWelcome($router, 'click_signup_start_trial')"
      class="button primary"
      >{{ props.buttonText || "Start for free now" }}</a
    >
  </p>
  <p class="mb-8 sm:mb-0 text-xs mt-4">
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      Free forever
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
import { CheckIcon } from "@heroicons/vue/24/solid";

const props = defineProps(["buttonText"]);
</script>
