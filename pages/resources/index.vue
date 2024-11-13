<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mx-4">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("resources.overview") }}
      </h1>
      <p class="mt-8 text-lg">
        {{ $t("resources.overview_description") }}
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
            <ComputerDesktopIcon
              v-if="action.iconSlug === 'alternatives'"
              class="h-6 w-6"
              :class="action.iconForeground || ''"
              aria-hidden="true"
            />
            <QueueListIcon
              v-else-if="action.iconSlug === 'analytics-review'"
              class="h-6 w-6"
              :class="action.iconForeground || ''"
              aria-hidden="true"
            />
            <ScaleIcon
              v-else-if="action.iconSlug === 'comparisons'"
              class="h-6 w-6"
              :class="action.iconForeground || ''"
              aria-hidden="true"
            />
            <BanknotesIcon
              v-else
              class="h-6 w-6"
              :class="action.iconForeground || ''"
              aria-hidden="true"
            />
          </span>
        </div>
        <div class="mt-4">
          <h3 class="text-lg font-medium text-link-strong">
            {{ $t(action.titleTranslation) }} <Arrow />
          </h3>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import {
  ComputerDesktopIcon,
  QueueListIcon,
  BanknotesIcon,
  ScaleIcon,
} from "@heroicons/vue/24/outline";
import Arrow from "@/components/Arrow.vue";
import { sections } from "@/data/resources";

const localePath = useLocalePath();

const actions = sections;
</script>
