<template>
  <p>
    <a
      @click="navigateToWelcome($router, 'click_signup_start_trial')"
      class="button primary"
      >{{ props.buttonText || $t("start_now.button") }}</a
    >
  </p>
  <p class="mb-8 sm:mb-0 text-xs mt-4">
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      {{ $t("start_now.free_forever") }}
    </span>
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      {{ $t("start_now.no_credit_card") }}
    </span>
    <span class="block sm:inline my-2">
      <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
      {{ $t("start_now.cancel_anytime") }}
    </span>
  </p>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/24/solid";

const router = useRouter();
const props = defineProps(["buttonText"]);
</script>
