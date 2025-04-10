<template>
  <div
    class="bg-gradient-to-b from-[#477ae1] dark:from-[#355ed5] to-[#003399] dark:to-[#233a7c] dark:bg-gray-600 min-h-full"
  >
    <div class="px-6 flex-grow flex flex-col min-h-full">
      <div class="mt-4">
        <EuropeRoundStars
          class="inline-block my-2 w-20 h-20 rounded-full text-[#233a7c]"
          style="margin-right: -1.2rem"
        />
        <svg
          viewBox="0 0 400 400"
          class="inline-block my-2 w-20 h-20 rounded-full"
          style="margin-right: -1.2rem"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="200"
            cy="200"
            r="200"
            class="fill-red-500 dark:fill-red-600"
          />
          <path d="M132.414 201.448H100V298.69H132.414V201.448Z" fill="white" />
          <path
            d="M210.206 143.103H177.793V298.69H210.206V143.103Z"
            fill="white"
          />
          <path d="M288 88H255.586V298.69H288V88Z" fill="white" />
        </svg>
      </div>

      <h2 class="mt-4 text-2xl font-semibold text-white dark:text-white">
        {{ $t("popups.europe.title") }}
      </h2>

      <p class="mt-4 leading-relaxed text-white dark:text-white">
        {{ $t("popups.europe.step_1") }}
      </p>
      <p class="leading-relaxed text-white dark:text-white">
        {{ $t("popups.europe.step_2") }}
      </p>
      <p class="leading-relaxed mb-4 text-white dark:text-white">
        {{ $t("popups.europe.step_3") }}
      </p>

      <p class="mb-6">
        <a
          @click="navigateToWelcome($router, 'click_signup_exit_popup')"
          class="inline-flex items-center justify-center px-4 py-2 border-2 border-white dark:border-white text-base font-medium rounded-full text-white dark:text-white dark:hover:text-white hover:text-white hover:border-white dark:hover:border-white text-center"
          >{{ $t("popups.europe.button") }}</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import EuropeRoundStars from "./icons/EuropeRoundStars.vue";
</script>
