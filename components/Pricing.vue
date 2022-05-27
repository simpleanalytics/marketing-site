<template>
  <div class="sm:flex sm:flex-col sm:align-center">
    <div
      class="relative self-center mt-6 bg-gray-200 dark:bg-gray-700 rounded-lg p-0.5 flex sm:mt-8"
    >
      <button
        type="button"
        class="relative w-1/2 border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium whitespace-nowrap sm:w-auto sm:px-8"
        :class="
          monthly
            ? 'bg-white dark:bg-gray-600 dark:text-gray-300'
            : 'hover-hover:hover:bg-gray-100 dark:hover-hover:hover:bg-gray-400 dark:text-gray-300 dark:hover-hover:hover:text-gray-700'
        "
        @click="monthly = true"
      >
        Monthly billing
      </button>
      <button
        type="button"
        class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium whitespace-nowrap sm:w-auto sm:px-8"
        :class="
          monthly
            ? 'hover-hover:hover:bg-gray-100 dark:hover-hover:hover:bg-gray-400 dark:text-gray-300 dark:hover-hover:hover:text-gray-700'
            : 'bg-white dark:bg-gray-600 dark:text-gray-300'
        "
        @click="monthly = false"
      >
        Yearly billing
      </button>
    </div>
  </div>

  <div
    class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 md:grid-cols-3"
  >
    <div
      v-for="tier in tiers"
      :key="tier.name"
      class="border border-gray-200 dark:border-0 dark:bg-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-800"
    >
      <div class="p-6">
        <h2 class="text-lg leading-6 font-medium">{{ tier.name }}.</h2>
        <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
        <p class="mt-8">
          <span class="text-4xl font-extrabold text-gray-600 dark:text-gray-300"
            >{{ currency?.sign
            }}{{ monthly ? tier.priceMonthly : tier.priceYearly }}</span
          >
          {{ " " }}
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a :href="tier.href" class="mt-8 block w-full button"
          >Buy {{ tier.name }}</a
        >
      </div>
      <div class="pt-6 pb-8 px-6">
        <h3 class="text-xs font-medium tracking-wide uppercase">
          What's included
        </h3>
        <ul role="list" class="mt-6 space-y-4">
          <li
            v-for="feature in tier.includedFeatures"
            :key="feature"
            class="flex space-x-3"
          >
            <CheckIcon
              class="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span class="text-sm text-gray-500">{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/solid";

const monthly = ref(true);
const currency = useCurrency();

const tiers = [
  {
    name: "Starter",
    href: "#",
    priceMonthly: 19,
    priceYearly: 9,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "100,000 datapoints",
      "1 user",
      "10 websites",
      "events",
      "aggregated export",
      "support email",
    ],
  },
  {
    name: "Business",
    href: "#",
    priceMonthly: 59,
    priceYearly: 49,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "1 million datapoints",
      "10 users",
      "100 websites",
      "events",
      "raw level export",
      "support email",
    ],
  },
  {
    name: "Enterprise",
    href: "#",
    priceMonthly: 199,
    priceYearly: 199,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "1+ million datapoints",
      "10+ users",
      "1000 websites",
      "events",
      "raw level export",
      "prio support email",
    ],
  },
];
</script>
