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

  <p v-if="affiliateCookie" class="text-center mt-8 sm:-mb-6">
    You get the first month + 14 days for free because you're using an affiliate
    link.
  </p>

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
        <p class="mt-4 text-sm text-gray-500 leading-relaxed">
          {{ tier.description }}
        </p>
        <p class="mt-2">
          <span class="text-base text-gray-300 block">
            <span v-if="tier.from">from</span>
            <span v-else>&nbsp;</span></span
          >
          <span class="text-4xl font-extrabold text-gray-600 dark:text-gray-300"
            >{{ currency?.sign
            }}{{ monthly ? tier.priceMonthly : tier.priceYearly }}</span
          >
          {{ " " }}
          <span class="text-base font-medium text-gray-500">/mo</span>
          <span class="block text-gray-300 mt-2" v-if="!tier.from"
            >{{ currency?.sign
            }}{{
              monthly ? tier.priceMonthly * 12 : tier.priceYearly * 12
            }}
            yearly</span
          >
          <span class="block text-gray-300 mt-2" v-else>&nbsp;</span>
        </p>
        <a
          v-if="tier.name === 'Enterprise'"
          href="https://simpleanalytics.com/contact"
          class="mt-4 block w-full button"
          >Contact us</a
        >
        <a
          v-else
          :href="`https://simpleanalytics.com/welcome?currency=${
            currency?.code
          }&plan=${tier.name.toLowerCase()}&interval=${
            monthly ? 'monthly' : 'yearly'
          }`"
          class="mt-4 block w-full button"
          >Buy {{ tier.name }}</a
        >
      </div>
      <div class="pt-6 pb-8 px-6">
        <p class="text-xs font-medium tracking-wide uppercase">
          <span>What's included</span>
        </p>

        <p
          class="mt-6 mb-7 text-sm text-gray-400 leading-relaxed"
          v-if="tier.includedIntro"
        >
          {{ tier.includedIntro }}
        </p>
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
            <span class="text-sm text-gray-500" v-html="feature"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/solid";

const monthly = ref(false);
const currency = useState("currency");

const tiers = [
  {
    name: "Starter",
    priceMonthly: 19,
    priceYearly: 9,
    description: "Everything you need to get you started.",
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
    priceMonthly: 59,
    priceYearly: 49,
    description: "Work together on growing your business.",
    includedIntro: "Everything from the Starter plan, plus:",
    includedFeatures: [
      "<strong>1 million</strong> datapoints",
      "<strong>10</strong> users",
      "<strong>100</strong> websites",
      "<strong>raw level</strong> export",
    ],
  },
  {
    name: "Enterprise",
    priceMonthly: 99,
    priceYearly: 99,
    from: true,
    description: "Get everything needed to grow your business.",
    includedIntro: "Everything from the Business plan, plus:",
    includedFeatures: [
      "<strong>1+ million</strong> datapoints",
      "<strong>10+</strong> users",
      "<strong>1000</strong> websites",
      "<strong>prio</strong> support email",
    ],
  },
];

const affiliateCookie = useCookie("affiliate", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});
</script>
