<template>
  <div class="sm:flex sm:flex-col sm:align-center">
    <p v-if="affiliateCookie" class="text-center mt-8 sm:-mb-6">
      {{ $t("pricing.affiliate_description", [14]) }}
    </p>

    <p class="text-center mt-8 sm:-mb-6 max-w-3xl leading-loose mx-auto">
      Fair pricing: pay per datapoint (pageview or event). Don't worry about
      traffic spikes, we use the average usage of the last 3 months. Free trial,
      no credit card needed.
    </p>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mt-16 flex justify-center">
        <RadioGroup
          v-model="frequency"
          class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 dark:ring-0 ring-inset ring-gray-200 dark:bg-gray-700"
        >
          <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
          <RadioGroupOption
            as="template"
            v-for="option in frequencies"
            :key="option.value"
            :value="option"
            v-slot="{ checked }"
          >
            <div
              :class="[
                checked
                  ? 'bg-red-500 dark:bg-red-600 text-white'
                  : 'text-gray-500 dark:text-gray-300',
                'cursor-pointer rounded-full px-2.5 py-1',
              ]"
            >
              <span>{{ option.label }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>
      </div>

      <div
        class="border dark:border-none bg-gray-50 dark:bg-gray-700 rounded-xl max-w-3xl mx-auto pt-5 pb-2 px-4 mt-8"
      >
        <p class="text-center">
          Select the expected monthly datapoints (pageviews + events)
        </p>
        <Slider :options="sliderOptions" />
      </div>

      <div
        class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4"
      >
        <div
          v-for="tier in tiers2"
          :key="tier.id"
          :class="[
            tier.mostPopular
              ? 'ring-2 ring-red-500  dark:bg-gray-700'
              : 'ring-1 ring-gray-200 dark:ring-0 dark:bg-gray-700',
            'rounded-3xl p-8',
          ]"
        >
          <h3
            :id="tier.id"
            :class="[
              tier.mostPopular
                ? 'text-red-600'
                : 'text-gray-900 dark:text-gray-200',
              'text-lg font-semibold leading-8',
            ]"
          >
            {{ tier.name }}
          </h3>
          <p class="mt-4 text-sm leading-6">
            {{ tier.description }}
          </p>
          <p class="mt-6 flex items-baseline gap-x-1" v-if="tier.price">
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
              >{{ tier.price[frequency.value] }}</span
            >
            <span class="text-sm font-semibold leading-6">{{
              frequency.priceSuffix
            }}</span>
          </p>
          <p v-else class="mt-6 flex items-baseline gap-x-1">
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
              >Free</span
            >
          </p>
          <a
            :href="tier.href"
            :aria-describedby="tier.id"
            :class="[
              tier.mostPopular
                ? 'bg-red-500 dark:bg-red-600 text-white shadow-sm hover:bg-red-500'
                : 'text-red-500 dark:text-red-600 ring-2 ring-inset ring-red-300 dark:ring-red-600 hover:ring-red-300',
              'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600',
            ]"
          >
            <span v-if="tier.price">Buy plan</span>
            <span v-if="tier.id === 'tier-enterprise'">Contact sales</span>
            <span v-else>Get plan</span>
          </a>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6">
            <li
              v-for="feature in tier.features"
              :key="feature"
              class="flex gap-x-3"
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-red-500 dark:text-red-600"
                aria-hidden="true"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <p class="text-center mt-20">
    <a @click="featuresOpen = !featuresOpen" class="button" v-if="featuresOpen">
      <MinusIcon class="h-5 w-5 mr-2" aria-hidden="true" />
      Hide all plan features
    </a>
    <a @click="featuresOpen = !featuresOpen" class="button" v-else>
      <PlusIcon class="h-5 w-5 mr-2" aria-hidden="true" />
      Show all plan features
    </a>
  </p>

  <div class="isolate overflow-hidden" v-if="featuresOpen">
    <div class="relative">
      <div class="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8">
        <!-- Feature comparison (up to lg) -->
        <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
          <h2 id="mobile-comparison-heading" class="sr-only">
            Feature comparison
          </h2>

          <div class="mx-auto max-w-2xl space-y-16">
            <div
              v-for="tier in tiers"
              :key="tier.id"
              class="border-t border-gray-900/10"
            >
              <div
                :class="[
                  tier.featured
                    ? 'border-red-500 dark:border-red-600'
                    : 'border-transparent',
                  '-mt-px w-72 border-t-2 pt-10 md:w-80',
                ]"
              >
                <h3
                  :class="[
                    tier.featured
                      ? 'text-red-500 dark:text-red-600'
                      : 'text-gray-900 dark:text-gray-200',
                    'text-sm font-semibold leading-6',
                  ]"
                >
                  {{ tier.name }}
                </h3>
                <p class="mt-1 text-sm leading-6">
                  {{ tier.description }}
                </p>
              </div>

              <div class="mt-10 space-y-10">
                <div v-for="section in sections" :key="section.name">
                  <h4 class="text-sm font-semibold leading-6 text-gray-900">
                    {{ section.name }}
                  </h4>
                  <div class="relative mt-6">
                    <!-- Fake card background -->
                    <div
                      aria-hidden="true"
                      class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white dark:bg-gray-700 shadow-sm sm:block"
                    />

                    <div
                      :class="[
                        tier.featured
                          ? 'ring-2 ring-red-500 dark:ring-red-600'
                          : 'ring-1 ring-gray-900/10',
                        'relative rounded-lg bg-white dark:bg-gray-700 shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0',
                      ]"
                    >
                      <dl
                        class="divide-y divide-gray-200 dark:divide-gray-600 text-sm leading-6"
                      >
                        <div
                          v-for="feature in section.features"
                          :key="feature.name"
                          class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                        >
                          <dt class="pr-4">
                            {{ feature.name }}
                          </dt>
                          <dd
                            class="flex items-center justify-end sm:justify-center sm:px-4"
                          >
                            <span
                              v-if="
                                typeof feature.tiers[tier.name] === 'string'
                              "
                              :class="
                                tier.featured
                                  ? 'font-semibold text-red-500 dark:text-red-600'
                                  : 'text-gray-900 dark:text-gray-300'
                              "
                              >{{ feature.tiers[tier.name] }}</span
                            >
                            <template v-else>
                              <CheckIcon
                                v-if="feature.tiers[tier.name] === true"
                                class="mx-auto h-5 w-5 text-red-500 dark:text-red-600"
                                aria-hidden="true"
                              />
                              <XMarkIcon
                                v-else
                                class="mx-auto h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span class="sr-only">{{
                                feature.tiers[tier.name] === true ? "Yes" : "No"
                              }}</span>
                            </template>
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <!-- Fake card border -->
                    <div
                      aria-hidden="true"
                      :class="[
                        tier.featured
                          ? 'ring-2 ring-red-500 dark:ring-red-600'
                          : 'ring-1 ring-gray-900/10',
                        'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                      ]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Feature comparison (lg+) -->
        <section aria-labelledby="comparison-heading" class="hidden lg:block">
          <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

          <div
            class="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block"
          >
            <div
              v-for="tier in tiers"
              :key="tier.id"
              aria-hidden="true"
              class="-mt-px"
            >
              <div
                :class="[
                  tier.featured
                    ? 'border-red-500 dark:border-red-600'
                    : 'border-transparent',
                  'border-t-2 pt-10',
                ]"
              >
                <p
                  :class="[
                    tier.featured
                      ? 'text-red-500 dark:text-red-600'
                      : 'text-gray-900',
                    'text-sm font-semibold leading-6',
                  ]"
                >
                  {{ tier.name }}
                </p>
                <p class="mt-1 text-sm leading-6">
                  {{ tier.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="-mt-6 space-y-16">
            <div v-for="section in sections" :key="section.name">
              <h3
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400"
              >
                {{ section.name }}
              </h3>
              <div class="relative -mx-8 mt-10">
                <!-- Fake card backgrounds -->
                <div
                  class="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                  aria-hidden="true"
                >
                  <div
                    class="h-full w-full rounded-lg bg-white dark:bg-gray-700 shadow-sm"
                  />
                  <div
                    class="h-full w-full rounded-lg bg-white dark:bg-gray-700 shadow-sm"
                  />
                  <div
                    class="h-full w-full rounded-lg bg-white dark:bg-gray-700 shadow-sm"
                  />
                </div>

                <table
                  class="relative w-full border-separate border-spacing-x-8"
                >
                  <thead>
                    <tr class="text-left">
                      <th scope="col">
                        <span class="sr-only">Feature</span>
                      </th>
                      <th v-for="tier in tiers" :key="tier.id" scope="col">
                        <span class="sr-only">{{ tier.name }} tier</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(feature, featureIdx) in section.features"
                      :key="feature.name"
                    >
                      <th
                        scope="row"
                        class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900 dark:text-gray-200"
                      >
                        {{ feature.name }}
                        <div
                          v-if="featureIdx !== section.features.length - 1"
                          class="absolute inset-x-8 mt-3 h-px bg-gray-200 dark:bg-gray-600"
                        />
                      </th>
                      <td
                        v-for="tier in tiers"
                        :key="tier.id"
                        class="relative w-1/4 px-4 py-0 text-center"
                      >
                        <span class="relative h-full w-full py-3">
                          <span
                            v-if="typeof feature.tiers[tier.name] === 'string'"
                            :class="[
                              tier.featured
                                ? 'font-semibold text-red-500 dark:text-red-600'
                                : 'text-gray-900 dark:text-gray-300',
                              'text-sm leading-6',
                            ]"
                            >{{ feature.tiers[tier.name] }}</span
                          >
                          <template v-else>
                            <CheckIcon
                              v-if="feature.tiers[tier.name] === true"
                              class="mx-auto h-5 w-5 text-red-500 dark:text-red-600"
                              aria-hidden="true"
                            />
                            <XMarkIcon
                              v-else
                              class="mx-auto h-5 w-5 text-gray-400 dark:text-gray-500"
                              aria-hidden="true"
                            />
                            <span class="sr-only">{{
                              feature.tiers[tier.name] === true ? "Yes" : "No"
                            }}</span>
                          </template>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- Fake card borders -->
                <div
                  class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                  aria-hidden="true"
                >
                  <div
                    v-for="tier in tiers"
                    :key="tier.id"
                    :class="[
                      tier.featured
                        ? 'ring-2 ring-red-500 dark:ring-red-600'
                        : 'ring-1 ring-gray-900/10',
                      'rounded-lg',
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import {
  CheckIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/vue/20/solid";

const { t } = useI18n();

const featuresOpen = ref(false);
const monthly = ref(false);
const currency = useState("currency");
const affiliate = useState("affiliate");
const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    featured: false,
    description: "All your essential business finances, taken care of.",
    price: { monthly: "$15", annually: "$144" },
    mainFeatures: [
      "Basic invoicing",
      "Easy to use accounting",
      "Mutli-accounts",
    ],
  },
  {
    name: "Scale",
    id: "tier-scale",
    href: "#",
    featured: true,
    description: "The best financial services for your thriving business.",
    price: { monthly: "$60", annually: "$576" },
    mainFeatures: [
      "Advanced invoicing",
      "Easy to use accounting",
      "Mutli-accounts",
      "Tax planning toolkit",
      "VAT & VATMOSS filing",
      "Free bank transfers",
    ],
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: "#",
    featured: false,
    description: "Convenient features to take your business to the next level.",
    price: { monthly: "$30", annually: "$288" },
    mainFeatures: [
      "Basic invoicing",
      "Easy to use accounting",
      "Mutli-accounts",
      "Tax planning toolkit",
    ],
  },
];
const sections = [
  {
    name: "Catered for business",
    features: [
      {
        name: "Tax Savings",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Easy to use accounting",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Multi-accounts",
        tiers: {
          Starter: "3 accounts",
          Scale: "Unlimited accounts",
          Growth: "7 accounts",
        },
      },
      {
        name: "Invoicing",
        tiers: {
          Starter: "3 invoices",
          Scale: "Unlimited invoices",
          Growth: "10 invoices",
        },
      },
      {
        name: "Exclusive offers",
        tiers: { Starter: false, Scale: true, Growth: true },
      },
      {
        name: "6 months free advisor",
        tiers: { Starter: false, Scale: true, Growth: true },
      },
      {
        name: "Mobile and web access",
        tiers: { Starter: false, Scale: true, Growth: false },
      },
    ],
  },
  {
    name: "Other perks",
    features: [
      {
        name: "24/7 customer support",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Instant notifications",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Budgeting tools",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Digital receipts",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Pots to separate money",
        tiers: { Starter: false, Scale: true, Growth: true },
      },
      {
        name: "Free bank transfers",
        tiers: { Starter: false, Scale: true, Growth: false },
      },
      {
        name: "Business debit card",
        tiers: { Starter: false, Scale: true, Growth: false },
      },
    ],
  },
];

const sliderOptions = ref([
  "1000",
  "2500",
  "5000",
  "7500",
  "10000",
  "15000",
  "20000",
  "30000",
  "50000",
  "100000",
  "250000",
  "500000",
  "750000",
  "1000000",
  "2000000",
  "3000000",
  "4000000",
  "5000000",
  "6000000",
  "7000000",
  "8000000",
  "9000000",
  "10000000",
]);

// const tiers = [
//   {
//     slug: "starter",
//     name: "pricing.plans.starter.title",
//     priceMonthly: 19,
//     priceYearly: 9,
//     description: "pricing.plans.starter.description",
//     includedFeatures: {
//       datapoints: 100000,
//       users: 1,
//       websites: 10,
//       ai: "one_month",
//       events: true,
//       aggregated_export: true,
//       email_support: true,
//     },
//   },
//   {
//     slug: "business",
//     name: "pricing.plans.business.title",
//     priceMonthly: 59,
//     priceYearly: 49,
//     description: "pricing.plans.business.description",
//     includedIntro: [
//       "pricing.everything_plus",
//       "pricing.plans.starter.title",
//     ],
//     includedFeatures: {
//       datapoints: 1000000,
//       users: 10,
//       websites: 100,
//       ai: "unlimited",
//       raw_level_export: true,
//     },
//   },
//   {
//     slug: "enterprise",
//     name: "pricing.plans.enterprise.title",
//     from: true,
//     description: "pricing.plans.enterprise.description",
//     includedIntro: [
//       "pricing.everything_plus",
//       "pricing.plans.business.title",
//     ],
//     amountsAreMinimum: true,
//     includedFeatures: {
//       datapoints: 1000000,
//       users: 10,
//       websites: 100,
//       prio_email_support: true,
//     },
//   },
// ];

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

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const frequency = ref(frequencies[0]);

const tiers2 = [
  {
    name: "Free",
    id: "tier-hobby",
    href: "#",
    description: "The essentials to provide your best work for clients.",
    features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
    mostPopular: false,
  },
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$30", annually: "$288" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$60", annually: "$576" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "https://simpleanalytics.com/contact",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    mostPopular: false,
  },
];
</script>
