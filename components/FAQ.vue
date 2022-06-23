<template>
  <div class="flex flex-col flex-wrap sm:flex-row -mt-8 -mx-6">
    <div class="basis-1/2">
      <ShieldExclamationIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        Will I be charged when my trial expires?
      </p>
      <p class="my-4 leading-loose mx-6">
        No. After your trial expires, your plan downgrades automatically to the
        basic free version. Upgrade whenever you want to the plan that fits your
        needs.
        <!-- Prices start from as little as {{ currency?.sign }}1,- per month. -->
      </p>

      <BanIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        Can I cancel anytime?
      </p>
      <p class="my-4 leading-loose mx-6">
        Yes. You can cancel your subscription at any moment. You will still have
        access to your account and data until the end of the period you paid
        for.
      </p>

      <CreditCardIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        What payment methods do you accept?
      </p>
      <p class="my-4 leading-loose mx-6">
        We accept Credit Card, Debit Card, Bitcoin
        <span
          class="border border-red-400 dark:border-red-600 text-red-400 dark:text-red-600 rounded-full text-sm py-1 px-2"
          >+10% & yearly</span
        >, Apple Pay, and Google Pay as payment methods for all our paid plans.
        You can pay in Euros, US Dollars or British Pounds. Bills from
        {{ currency?.sign }}500 can be paid via bank transfers and cost an
        additional
        <span
          class="border border-red-400 dark:border-red-600 text-red-400 dark:text-red-600 rounded-full text-sm py-1 px-2"
          >10%</span
        >
        in banking and service fees.
      </p>
    </div>
    <div class="basis-1/2">
      <TrendingUpIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        What will happen to my charges when my traffic grows / declines?
      </p>
      <p class="my-4 leading-loose mx-6">
        You only pay for what you actually need. This means that if your plan's
        page view limit is exceeded, you will be charged for overages. Simple
        Analytics automatically calculates your price based on your average
        amount of page views (first looking back one month, then the average of
        the previous three months).
      </p>

      <AverageChart
        class="mx-6 rounded-lg dark:border-none bg-red-50 dark:bg-gray-700"
      />

      <p class="my-4 leading-loose mx-6">
        So, if you had an increase in traffic during the last three months, you
        pay only a little more next month. Likewise, you automatically pay a
        little less when your average amount of page views decreased during the
        last months.
      </p>

      <p class="my-4 leading-loose mx-6">
        Need more help? Please send us your question(s) via
        <a href="https://simpleanalytics.com/contact">our support page</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import {
  ShieldExclamationIcon,
  BanIcon,
  CreditCardIcon,
  TrendingUpIcon,
  MailOpenIcon,
} from "@heroicons/vue/outline";

import AverageChart from "./images/AverageChart.vue";

const currency = useState("currency");
</script>
