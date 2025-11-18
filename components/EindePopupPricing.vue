<template>
  <div
    class="bg-gradient-to-b from-[#477ae1] dark:from-[#355ed5] to-[#003399] dark:to-[#233a7c] min-h-full"
  >
    <div class="px-6 py-4 flex-grow flex flex-col">
      <div class="flex items-center gap-2 mb-3">
        <EuropeRoundStars
          class="w-12 h-12 sm:w-16 sm:h-16 rounded-full text-[#233a7c] flex-shrink-0"
        />
        <svg
          viewBox="0 0 400 400"
          class="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
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

      <h2 class="text-xl sm:text-2xl font-semibold text-white mb-3">
        {{ $t("popups.europe.title") }}
      </h2>

      <ul class="space-y-1.5 mb-4 text-sm sm:text-base">
        <li class="text-white">{{ $t("popups.europe.step_1") }}</li>
        <li class="text-white">{{ $t("popups.europe.step_2") }}</li>
        <li class="text-white">{{ $t("popups.europe.step_3") }}</li>
      </ul>

      <a
        @click="navigateToWelcome($router, 'click_signup_exit_popup')"
        class="inline-block px-6 py-2 border-2 border-white text-sm sm:text-base font-medium rounded-full text-white hover:bg-white hover:text-[#003399] transition-colors text-center"
      >
        {{ $t("popups.europe.button") }}
      </a>
    </div>
  </div>
</template>

<script setup>
import EuropeRoundStars from "./icons/EuropeRoundStars.vue";
</script>
