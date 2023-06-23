<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mx-4">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("utm_builder.overview") }}
      </h1>
      <p class="mt-8 text-lg">
        {{ $t("utm_builder.overview_description") }}
      </p>
    </div>

    <div class="mt-10 mb-20 grid gap-4 grid-cols-1 md:grid-cols-2">
      <NuxtLink
        v-for="action in actions"
        :key="action.title"
        :to="
          localePath({
            name: action.section,
          })
        "
        class="group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 dark:focus-within:ring-red-600 flex flex-col rounded-lg shadow dark:shadow-none"
      >
        <div :class="action.iconBackground" class="rounded-lg w-12 inline-flex">
          <span class="inline-flex p-3">
            <GoogleLogo v-if="action.type === 'google'" class="h-6 w-6" />
            <GoogleSheetLogo
              v-else-if="action.type === 'google-spreadsheet'"
              class="h-6 w-6"
            />

            <TwitterLogo
              v-else-if="action.type === 'twitter'"
              class="h-6 w-6"
            />

            <FacebookLogo
              v-else-if="action.type === 'facebook'"
              class="h-6 w-6"
            />

            <TikTokLogo v-else-if="action.type === 'tiktok'" class="h-6 w-6" />

            <SpreadSheetLogo v-else class="h-6 w-6" />
          </span>
        </div>
        <div class="mt-4">
          <h3 class="text-lg font-medium text-link">
            {{ $t(action.titleTranslation) }} <Arrow />
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            {{ $t(action.descriptionTranslation) }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import GoogleLogo from "@/components/logos/Google.vue";
import FacebookLogo from "@/components/logos/Facebook.vue";
import GoogleSheetLogo from "@/components/logos/GoogleSheet.vue";
import SpreadSheetLogo from "@/components/logos/SpreadSheet.vue";
import TikTokLogo from "@/components/logos/TikTop.vue";
import TwitterLogo from "@/components/logos/Twitter.vue";
import Arrow from "@/components/Arrow.vue";
import { types } from "@/data/utmBuilders.js";

definePageMeta({
  title: "UTM builder",
  description: "Simple Analytics UTM builder",
});

const localePath = useLocalePath();

const actions = types;
</script>
