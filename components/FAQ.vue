<template>
  <div class="flex flex-col flex-wrap sm:flex-row -mt-8 -mx-6">
    <div class="basis-1/2">
      <DocumentTextIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.data_usage.title") }}
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        {{ $t("pricing_faq.data_usage.description") }}
      </p>

      <ChartBarIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.metrics.title") }}
      </p>
      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="
          $t('pricing_faq.metrics.description', [
            `<a href='https://docs.simpleanalytics.com/what-we-collect'>`,
            `</a>`,
          ])
        "
      ></p>

      <GiftIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.free_plan.title") }}
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        {{ $t("pricing_faq.free_plan.description") }}
      </p>

      <ClockIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.free_trial.title") }}
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        {{ $t("pricing_faq.free_trial.description") }}
      </p>

      <ShieldCheckIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.gdpr.title") }}
      </p>
      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="
          $t('pricing_faq.gdpr.description', [
            `<a href='https://docs.simpleanalytics.com/compliance'>`,
            `</a>`,
          ])
        "
      ></p>

      <NoSymbolIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.cancel.title") }}
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        {{ $t("pricing_faq.cancel.description") }}
      </p>
    </div>
    <div class="basis-1/2">
      <ArrowTrendingUpIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.traffic_change.title") }}
      </p>
      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="$t('pricing_faq.traffic_change.description_1')"
      ></p>

      <AverageChart
        class="mx-6 max-w-full rounded-lg dark:border-none bg-red-50 dark:bg-gray-700"
      />

      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="$t('pricing_faq.traffic_change.description_2')"
      ></p>

      <CalendarDaysIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.yearly_plans.title") }}
      </p>
      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="$t('pricing_faq.yearly_plans.description')"
      ></p>

      <ClockIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.history.title") }}
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        {{ $t("pricing_faq.history.description") }}
      </p>

      <ChartBarSquareIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.unlimited_pageviews.title") }}
      </p>
      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="
          $t('pricing_faq.unlimited_pageviews.description', [
            `<a href='https://dashboard.simpleanalytics.com/contact'>`,
            `</a>`,
          ])
        "
      ></p>

      <CreditCardIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        {{ $t("pricing_faq.payment_methods.title") }}
      </p>
      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="
          $t('pricing_faq.payment_methods.description', [
            ...tBorderRed,
            currency?.sign,
          ])
        "
      ></p>
    </div>
  </div>
</template>

<script setup>
import {
  ShieldCheckIcon,
  NoSymbolIcon,
  CreditCardIcon,
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  ChartBarIcon,
  GiftIcon,
  ClockIcon,
  ChartBarSquareIcon,
} from "@heroicons/vue/24/outline";

import AverageChart from "./images/AverageChart.vue";

const currency = useCurrency();

const tBorderRed = [
  `<span class='border border-red-400 dark:border-red-600 text-red-400 dark:text-red-600 rounded-full text-sm py-1 px-2'>`,
  `</span>`,
];
</script>
