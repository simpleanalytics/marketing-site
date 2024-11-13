<template>
  <div class="bg-red-100 dark:bg-gray-600 min-h-full">
    <div class="px-6 flex-grow flex flex-col min-h-full">
      <div class="mt-4">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block my-2 w-20 h-20 rounded-full"
          style="margin-right: -1.2rem"
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
        <img
          src="https://assets.simpleanalytics.com/images/people/iron.jpg"
          class="inline-block my-2 w-20 h-20 rounded-full"
          style="margin-left: -1.2rem"
        />
      </div>

      <h2 class="mt-4 text-2xl font-semibold">
        {{ $t("popups.exitpopup.title") }}
      </h2>

      <p class="mt-4 leading-relaxed">
        {{ $t("popups.exitpopup.step_1") }}
      </p>
      <p class="leading-relaxed">
        {{ $t("popups.exitpopup.step_2") }}
      </p>
      <p class="leading-relaxed mb-4">
        {{ $t("popups.exitpopup.step_3") }}
      </p>

      <p class="mb-6">
        <a
          @click="navigateToWelcome($router, 'click_signup_exit_popup')"
          class="button"
          >{{ $t("popups.exitpopup.button") }}</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
</script>
