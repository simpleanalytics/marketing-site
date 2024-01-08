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
            : 'hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-gray-300 dark:hover:text-gray-700'
        "
        @click="monthly = true"
      >
        {{ $t("pricing.monthly_billing") }}
      </button>
      <button
        type="button"
        class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium whitespace-nowrap sm:w-auto sm:px-8"
        :class="
          monthly
            ? 'hover:bg-gray-100 dark:hover:bg-gray-400 dark:text-gray-300 dark:hover:text-gray-700'
            : 'bg-white dark:bg-gray-600 dark:text-gray-300'
        "
        @click="monthly = false"
      >
        {{ $t("pricing.yearly_billing") }}
      </button>
    </div>
  </div>

  <p v-if="affiliateCookie" class="text-center mt-8 sm:-mb-6">
    {{ $t("pricing.affiliate_description", [14]) }}
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
        <h2 class="text-lg leading-6 font-medium">{{ $t(tier.name) }}.</h2>
        <p class="mt-4 text-sm text-gray-500 leading-relaxed">
          {{ $t(tier.description) }}
        </p>
        <p class="mt-2" v-if="tier.name.includes('enterprise')">
          <span
            class="text-4xl font-extrabold text-gray-600 dark:text-gray-300"
          >
            {{ $t("pricing.contact") }}
          </span>
        </p>
        <p class="mt-2" v-else>
          <span class="text-base text-gray-300 block">
            <span v-if="tier.from">{{ $t("pricing.from") }}</span>
            <span v-else>&nbsp;</span></span
          >
          <span class="text-4xl font-extrabold text-gray-600 dark:text-gray-300"
            >{{ currency?.sign
            }}{{ monthly ? tier.priceMonthly : tier.priceYearly
            }}<span v-if="tier.from">+</span></span
          >
          {{ " " }}
          <span class="text-base font-medium text-gray-500"
            >/{{ $t("pricing.per_month") }}
          </span>
          <span class="block text-gray-300 mt-2" v-if="!tier.from"
            >{{ currency?.sign
            }}{{ monthly ? tier.priceMonthly * 12 : tier.priceYearly * 12 }}
            {{ $t("pricing.yearly") }}
          </span>
          <span class="block text-gray-300 mt-2" v-else>{{
            $t("pricing.depending_on_usage")
          }}</span>
        </p>
        <a
          v-if="tier.name.includes('enterprise')"
          @click="clickEnterprise()"
          class="mt-4 block w-full button"
        >
          {{ $t("pricing.contact_us") }}
        </a>
        <a
          v-else
          @click="
            goToWelcome({
              plan: tier.slug,
              interval: monthly ? 'monthly' : 'yearly',
              currency: currency?.code,
            })
          "
          class="mt-4 block w-full button"
          >{{ $t("pricing.buy") }} {{ $t(tier.name) }}</a
        >
      </div>
      <div class="pt-6 pb-8 px-6">
        <p class="text-xs font-medium tracking-wide uppercase">
          <span>{{ $t("pricing.what_is_included") }}</span>
        </p>

        <p
          class="mt-6 mb-7 text-sm text-gray-400 leading-relaxed"
          v-if="tier.includedIntro"
        >
          {{ $t(tier.includedIntro[0], [$t(tier.includedIntro[1])]) }}
        </p>
        <ul role="list" class="mt-6 space-y-4">
          <li
            class="flex space-x-3 text-sm text-gray-500"
            v-if="tier.includedFeatures.datapoints"
          >
            <CheckIcon
              class="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span
              v-html="
                $t('pricing.features.datapoints', [
                  new Intl.NumberFormat($t('time.intl_locale')).format(
                    tier.includedFeatures.datapoints,
                  ) + (tier.amountsAreMinimum ? '+' : ''),
                ])
              "
            ></span>
          </li>
          <li
            class="flex space-x-3 text-sm text-gray-500"
            v-if="tier.includedFeatures.users"
          >
            <CheckIcon
              class="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span
              v-html="
                $t('pricing.features.users', [
                  new Intl.NumberFormat($t('time.intl_locale')).format(
                    tier.includedFeatures.users,
                  ) + (tier.amountsAreMinimum ? '+' : ''),
                ])
              "
            ></span>
          </li>
          <li
            class="flex space-x-3 text-sm text-gray-500"
            v-if="tier.includedFeatures.websites"
          >
            <CheckIcon
              class="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span
              v-html="
                $t('pricing.features.websites', [
                  new Intl.NumberFormat($t('time.intl_locale')).format(
                    tier.includedFeatures.websites,
                  ) + (tier.amountsAreMinimum ? '+' : ''),
                ])
              "
            ></span>
          </li>
          <li
            class="flex space-x-3 text-sm text-gray-500"
            v-if="tier.includedFeatures.events"
          >
            <CheckIcon
              class="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span v-html="$t('pricing.features.events')"></span>
          </li>
          <li
            class="flex space-x-3 text-sm text-gray-500"
            v-if="tier.includedFeatures.ai"
          >
            <CheckIcon
              class="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span
              v-if="tier.includedFeatures.ai === 'one_month'"
              v-html="$t('pricing.features.ai_one_month')"
            ></span>
            <span
              v-else-if="tier.includedFeatures.ai === 'unlimited'"
              v-html="$t('pricing.features.ai_unlimited')"
            ></span>
            <span v-else v-html="$t('pricing.features.ai_limited')"></span>
          </li>
          <li
            class="flex space-x-3 text-sm text-gray-500"
            v-if="tier.includedFeatures.aggregated_export"
          >
            <CheckIcon
              class="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span v-html="$t('pricing.features.aggregated_export')"></span>
          </li>
          <li
            class="flex space-x-3 text-sm text-gray-500"
            v-if="tier.includedFeatures.raw_level_export"
          >
            <CheckIcon
              class="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span v-html="$t('pricing.features.raw_level_export')"></span>
          </li>
          <li
            class="flex space-x-3 text-sm text-gray-500"
            v-if="tier.includedFeatures.prio_email_support"
          >
            <CheckIcon
              class="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span v-html="$t('pricing.features.prio_email_support')"></span>
          </li>
          <li
            class="flex space-x-3 text-sm text-gray-500"
            v-if="tier.includedFeatures.maxCompanySize"
          >
            <NoSymbolIcon
              class="flex-shrink-0 h-5 w-5 text-red-500"
              aria-hidden="true"
            />
            <span
              v-html="
                $t('pricing.features.max_company_size', [
                  new Intl.NumberFormat($t('time.intl_locale')).format(
                    tier.includedFeatures.maxCompanySize,
                  ),
                ])
              "
            ></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon, NoSymbolIcon } from "@heroicons/vue/24/solid";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const monthly = ref(false);
const currency = useState("currency");
const affiliate = useState("affiliate");

const tiers = [
  {
    slug: "starter",
    name: "pricing.plans.starter.title",
    priceMonthly: 19,
    priceYearly: 9,
    description: "pricing.plans.starter.description",
    includedFeatures: {
      datapoints: 100000,
      users: 1,
      websites: 10,
      maxCompanySize: 10,
      ai: "one_month",
      events: true,
      aggregated_export: true,
      email_support: true,
    },
  },
  {
    slug: "business",
    name: "pricing.plans.business.title",
    priceMonthly: 59,
    priceYearly: 49,
    description: "pricing.plans.business.description",
    includedIntro: ["pricing.everything_plus", "pricing.plans.starter.title"],
    includedFeatures: {
      datapoints: 1000000,
      users: 10,
      websites: 100,
      maxCompanySize: 50,
      ai: "unlimited",
      raw_level_export: true,
    },
  },
  {
    slug: "enterprise",
    name: "pricing.plans.enterprise.title",
    from: true,
    description: "pricing.plans.enterprise.description",
    includedIntro: ["pricing.everything_plus", "pricing.plans.business.title"],
    amountsAreMinimum: true,
    includedFeatures: {
      datapoints: 1000000,
      users: 10,
      websites: 100,
      prio_email_support: true,
    },
  },
];

const affiliateCookie = useCookie("affiliate", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});

const theme = useTheme();

const config = useRuntimeConfig();
const { MAIN_URL } = config.public;

const clickEnterprise = () => {
  const params = new URLSearchParams();
  if (theme.value === "dark") params.set("theme", "dark");
  const url = `${MAIN_URL}/contact?${params}`;

  // Send event before redirecting to contact page
  if (window.sa_event && window.sa_loaded) {
    window.sa_event("click_enterprise", () => {
      window.location.href = url;
    });
  } else {
    window.location.href = url;
  }
};

const goToWelcome = ({ plan, interval }) => {
  const params = new URLSearchParams();
  if (currency?.value?.code) params.set("currency", currency.value.code);
  if (affiliate?.value?.slug) params.set("affiliate", affiliate?.value?.slug);
  if (plan) params.set("plan", plan);
  if (interval) params.set("interval", interval);
  if (theme.value === "dark") params.set("theme", "dark");

  const url = `${MAIN_URL}/welcome?${params}`;

  // Send event before redirecting to welcome page
  if (window.sa_event && window.sa_loaded) {
    window.sa_event(
      "click_buy",
      { currency: currency?.value?.code, plan, interval },
      () => {
        window.location.href = url;
      },
    );
  } else {
    window.location.href = url;
  }
};
</script>
