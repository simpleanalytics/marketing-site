<template>
  <p>
    <NuxtLink :to="welcomeUrl" class="button primary">{{
      $t("start_trial.button")
    }}</NuxtLink>
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

const mainAppUrl =
  process.env.NODE_ENV === "production"
    ? "https://simpleanalytics.com"
    : "http://localhost:3000";

const theme = useTheme();
const currency = useState("currency");
const affiliate = useState("affiliate");

const welcomeUrl = computed(() => {
  const params = new URLSearchParams();
  if (currency?.value?.code) params.set("currency", currency.value.code);
  if (affiliate?.value?.slug) params.set("affiliate", affiliate?.value?.slug);
  if (theme.value === "dark") params.set("theme", "dark");
  return `${mainAppUrl}/welcome?${params}`;
});
</script>
