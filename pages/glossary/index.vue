<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mx-4">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("glossary.overview") }}
      </h1>
      <p class="mt-8 text-lg">
        {{ $t("glossary.overview_description") }}
      </p>
    </div>

    <div class="mt-10 mb-20 grid gap-4 grid-cols-1 md:grid-cols-2">
      <NuxtLink
        v-for="action in actions"
        :key="action.title"
        :to="
          localePath({
            name: 'glossary-category',
            params: { category: action.category },
          })
        "
        class="group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 dark:focus-within:ring-red-600 flex flex-col rounded-lg shadow dark:shadow-none"
      >
        <div :class="action.iconBackground" class="rounded-lg w-12 inline-flex">
          <span class="inline-flex p-3">
            <svg
              v-if="action.iconSlug === 'google-analytics'"
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              viewBox="0 0 2196 2431"
              class="h-6 w-6"
              :class="action.iconFill || ''"
              aria-hidden="true"
            >
              <path
                d="M2196 2127a302 302 0 0 1-338 301 310 310 0 0 1-264-314V316A310 310 0 0 1 1859 2a302 302 0 0 1 337 302v1823z"
                fill="#F9AB00"
              />
              <path
                d="M301 1829a301 301 0 1 1 0 602 301 301 0 0 1 0-602zm792-913a310 310 0 0 0-293 317v809c1 219 97 352 239 381a302 302 0 0 0 361-297v-907a302 302 0 0 0-307-303z"
                fill="#E37400"
              />
            </svg>
            <ComputerDesktopIcon
              v-else
              class="h-6 w-6"
              :class="action.iconForeground || ''"
              aria-hidden="true"
            />
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
import {
  ChartBarSquareIcon,
  ComputerDesktopIcon,
} from "@heroicons/vue/24/outline";

import GoogleAnalyticsIcon from "@/components/icons/GoogleAnalytics.vue";
import Arrow from "@/components/Arrow.vue";
import { categories } from "@/data/glossary";

const localePath = useLocalePath();

const actions = categories;
</script>
