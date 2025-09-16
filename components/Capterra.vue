<template>
  <Tooltip
    :text="$t('pricing.reviews.capterra.tooltip', [rating])"
    class="group flex-shrink-0 border-2 border-transparent hover:border-yellow-500 dark:hover:border-transparent dark:hover:bg-yellow-500/20 rounded-md"
  >
    <NuxtLink
      to="https://www.capterra.com/p/248710/Simple-Analytics/"
      target="_blank"
      rel="nofollow"
      class="px-2 py-1 block"
    >
      <div class="text-yellow-500 dark:text-yellow-400">
        <StarIcon class="inline h-5 w-5" />
        <StarIcon class="inline h-5 w-5" />
        <StarIcon class="inline h-5 w-5" />
        <StarIcon class="inline h-5 w-5" />
        <StarIcon class="inline h-5 w-5" />
      </div>
      <p class="text-xs sm:text-sm">
        {{ $t("pricing.reviews.capterra.users_count", [userCount]) }}
      </p>
    </NuxtLink>
  </Tooltip>
</template>

<script setup>
import { StarIcon } from "@heroicons/vue/20/solid";
import Tooltip from "~/components/Tooltip.vue";
import { userCount } from "~/utils/miscellaneous";

const rating = 4.8;
</script>
