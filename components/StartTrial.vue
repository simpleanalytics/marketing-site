<template>
  <p>
    <a
      :href="
        'https://simpleanalytics.com/welcome' +
        (theme === 'dark' ? '?theme=dark' : '')
      "
      class="button primary"
      >{{ $t("start_trial.button") }}</a
    >
  </p>
  <p class="mb-8 sm:mb-0 text-xs mt-4">
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      {{ $t("start_trial.free_trial") }}
    </span>
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      {{ $t("start_trial.no_credit_card") }}
    </span>
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      {{ $t("start_trial.cancel_anytime") }}
    </span>
  </p>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/solid";

const theme = useTheme();
</script>
