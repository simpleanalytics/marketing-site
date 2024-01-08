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

    <div
      class="text-center mt-12"
      v-if="error || filteredSubscriptions.length === 0"
    >
      <p
        class="mx-auto rounded px-4 py-2 inline-block bg-red-300 dark:bg-red-900 dark:text-gray-300 text-gray-50"
      >
        {{ error || $t("general.errors.an_error_happened") }}
      </p>
    </div>

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
        <Slider :options="sliderOptions" @updateValue="handleSliderValue" />
      </div>

      <div
        class="isolate mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8"
      >
        <div
          v-for="(subscription, index) in filteredSubscriptions"
          :key="subscription.slug"
          :class="[
            subscription.featured
              ? 'ring-2 ring-green-500  dark:bg-gray-700'
              : 'ring-1 ring-gray-200 dark:ring-0 dark:bg-gray-700',
            'rounded-3xl p-8',
          ]"
        >
          <h3
            :id="subscription.slug"
            :class="[
              subscription.featured
                ? 'text-green-600'
                : 'text-gray-900 dark:text-gray-200',
              'text-lg font-semibold leading-8',
            ]"
          >
            {{ subscription.name }}
          </h3>
          <p class="mt-4 text-sm leading-6">
            {{
              subscription.description ||
              "All your essential business finances, taken care of."
            }}
          </p>
          <p
            class="mt-6 flex items-baseline gap-x-1"
            v-if="subscription.datapoints_graduated_pricing?.length"
          >
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
              >{{
                new Intl.NumberFormat($t("time.intl_locale"), {
                  style: "currency",
                  currency: currency.code,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(
                  calculateTotalPrice({
                    datapoints: sliderValue,
                    pricingTiers: subscription.datapoints_graduated_pricing,
                  }),
                )
              }}</span
            >
            <span class="text-sm font-semibold leading-6">{{
              frequency.priceSuffix
            }}</span>
          </p>
          <p
            v-else-if="subscription.slug === 'enterprise'"
            class="mt-6 flex items-baseline gap-x-1"
          >
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
              >Contact us</span
            >
          </p>
          <p v-else class="mt-6 flex items-baseline gap-x-1">
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
              >Free</span
            >
          </p>
          <a
            :href="subscription.href"
            :aria-describedby="subscription.slug"
            :class="[
              subscription.featured
                ? 'bg-green-500 dark:bg-green-600 text-white shadow-sm hover:bg-green-500'
                : 'text-green-500 dark:text-green-600 ring-2 ring-inset ring-green-500 dark:ring-green-600 hover:ring-green-300',
              'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600',
            ]"
          >
            <span v-if="subscription.slug === 'enterprise'">Contact sales</span>
            <span v-else-if="subscription.price">Start free trial</span>
            <span v-else>Start now</span>
          </a>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6">
            <li
              v-if="
                index !== 0 &&
                !filteredSubscriptions[index - 1]?.slug?.includes('free')
              "
              class="flex items-center gap-x-3 italic"
            >
              <ArrowLeftIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <span
                >Everyting from
                {{ filteredSubscriptions[index - 1]?.name }}</span
              >
            </li>

            <li
              class="flex gap-x-3"
              v-if="sliderValue && subscription.slug !== 'enterprise'"
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <span
                v-html="
                  $t('pricing.features.datapoints.number', [
                    formatDatapoints(sliderValue, $t('time.intl_locale')),
                  ])
                "
              ></span>
            </li>

            <li v-if="subscription.limit_users" class="flex gap-x-3">
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <span
                v-html="
                  $t(
                    subscription.limit_users === 1
                      ? 'pricing.features.users.one'
                      : 'pricing.features.users.number',
                    [subscription.limit_users],
                  )
                "
              ></span>
            </li>

            <li v-if="subscription.limit_websites" class="flex gap-x-3">
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <span
                v-html="
                  $t(
                    subscription.limit_websites === 1
                      ? 'pricing.features.websites.one'
                      : 'pricing.features.websites.number',
                    [subscription.limit_websites],
                  )
                "
              ></span>
            </li>

            <li
              v-for="feature in subscription.unique_features?.slice(
                0,
                index === 0 || planListExpanded
                  ? 100
                  : subscription.slug === 'enterprise'
                  ? 4
                  : index !== 0 &&
                    !filteredSubscriptions[index - 1]?.slug?.includes('free')
                  ? 1
                  : 2,
              )"
              :key="feature"
              class="flex gap-x-3"
            >
              <ExclamationTriangleIcon
                class="h-6 w-5 flex-none text-red-500 dark:text-red-600"
                aria-hidden="true"
                v-if="feature.feature?.includes('require')"
              />
              <QuestionMarkCircleIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
                v-else-if="subscription.slug === 'enterprise'"
              />
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
                v-else
              />

              <TooltipPopover
                :text="$t(`pricing.features.${feature.feature}.title`)"
                v-if="featureHasDescription(feature.feature)"
              >
                <span
                  v-if="feature.feature === 'badge_requirement'"
                  v-html="
                    $t('pricing.features.badge_requirement.description', [
                      `<a href='https://simpleanalytics.com/badges' target='_blank'>`,
                      `</a>`,
                    ])
                  "
                >
                </span>
                <span v-else>
                  {{ $t(`pricing.features.${feature.feature}.description`) }}
                </span>
              </TooltipPopover>
              <span v-else>
                {{ $t(`pricing.features.${feature.feature}.title`) }}
              </span>
            </li>

            <li
              v-if="subscription.unique_features.length > 5"
              class="flex gap-x-3"
            >
              <a
                @click="planListExpanded = !planListExpanded"
                class="flex items-center gap-x-3 text-gray-300 dark:text-gray-500"
              >
                <ArrowDownIcon
                  class="h-6 w-5 flex-none text-gray-300 dark:text-gray-500 transform transition-transform duration-500"
                  :class="{
                    'rotate-180': planListExpanded,
                  }"
                  aria-hidden="true"
                />

                <span v-if="planListExpanded">Show less</span>
                <span v-else>Show more</span>
              </a>
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

  <div class="sticky top-0 bg-green-200">sticky</div>

  <div class="isolate overflow-hidden" v-if="featuresOpen">
    <div class="relative">
      <div class="sticky top-0 border-2 border-red-400">Stickdy top</div>

      <div class="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8 border-2">
        <!-- Feature comparison (up to lg) -->
        <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
          <h2 id="mobile-comparison-heading" class="sr-only">
            Feature comparison
          </h2>

          <div class="mx-auto max-w-2xl space-y-16">
            <div
              v-for="(subscription, index) in filteredSubscriptions"
              :key="subscription.slug"
              class="border-t border-gray-900/10"
            >
              <div
                :class="[
                  subscription.featured
                    ? 'border-red-500 dark:border-red-600'
                    : 'border-transparent',
                  '-mt-px w-72 border-t-2 pt-10 md:w-80',
                ]"
              >
                <h3
                  :class="[
                    subscription.featured
                      ? 'text-red-500 dark:text-red-600'
                      : 'text-gray-900 dark:text-gray-200',
                    'text-sm font-semibold leading-6',
                  ]"
                >
                  {{ subscription.name }}
                </h3>
                <p class="mt-1 text-sm leading-6">
                  {{ subscription.description }}
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
                        subscription.featured
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
                          :key="feature.slug"
                          class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                        >
                          <dt
                            class="pr-4"
                            v-html="
                              $t(`pricing.features.${feature.slug}.title`)
                            "
                          ></dt>
                          <dd
                            class="flex items-center justify-end sm:justify-center sm:px-4"
                          >
                            <span
                              v-if="
                                ['string', 'number'].includes(
                                  typeof feature.subscriptions[index]?.value,
                                )
                              "
                              :class="
                                subscription.featured
                                  ? 'font-semibold text-red-500 dark:text-red-600'
                                  : 'text-gray-900 dark:text-gray-300'
                              "
                              >{{ feature.subscriptions[index]?.value }}</span
                            >
                            <template v-else>
                              <span
                                class="text-xs text-gray-400"
                                v-if="
                                  feature.subscriptions.every(
                                    ({ value }) => !value,
                                  )
                                "
                              >
                                {{ $t("pricing.features.enterprise_only") }}
                              </span>
                              <CheckIcon
                                v-else-if="
                                  feature.subscriptions[index]?.value === true
                                "
                                class="mx-auto h-5 w-5 text-red-500 dark:text-red-600"
                                aria-hidden="true"
                              />
                              <XMarkIcon
                                v-else
                                class="mx-auto h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span class="sr-only">{{
                                feature.subscriptions[index]?.value === true
                                  ? "Yes"
                                  : "No"
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
                        subscription.featured
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
        <section
          aria-labelledby="comparison-heading"
          class="hidden lg:block top-0"
        >
          <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

          <div
            class="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block"
          >
            <div
              v-for="subscription in showInPlanFeaturesSubscriptions"
              :key="subscription.slug"
              aria-hidden="true"
              class="-mt-px"
            >
              <div
                :class="[
                  subscription.featured
                    ? 'border-red-500 dark:border-red-600'
                    : 'border-transparent',
                  'border-t-2 pt-10',
                ]"
              >
                <p
                  :class="[
                    subscription.featured
                      ? 'text-red-500 dark:text-red-600'
                      : 'text-gray-900',
                    'text-sm font-semibold leading-6',
                  ]"
                >
                  {{ subscription.name }}
                </p>
                <p class="mt-1 text-sm leading-6">
                  {{ subscription.description }}
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
                      <th
                        v-for="subscription in showInPlanFeaturesSubscriptions"
                        :key="subscription.slug"
                        scope="col"
                      >
                        <span class="sr-only"
                          >{{ subscription.name }} subscription</span
                        >
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(feature, featureIdx) in section.features"
                      :key="feature.slug"
                    >
                      <th
                        scope="row"
                        class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900 dark:text-gray-200"
                      >
                        <span
                          v-html="$t(`pricing.features.${feature.slug}.title`)"
                        />
                        <div
                          v-if="featureIdx !== section.features.length - 1"
                          class="absolute inset-x-8 mt-3 h-px bg-gray-200 dark:bg-gray-600"
                        />
                      </th>
                      <td
                        v-for="(
                          subscription, index
                        ) in showInPlanFeaturesSubscriptions"
                        :key="subscription.slug"
                        class="relative w-1/4 px-4 py-0 text-center"
                      >
                        <span class="relative h-full w-full py-3">
                          <span
                            v-if="
                              ['string', 'number'].includes(
                                typeof feature.subscriptions[index]?.value,
                              )
                            "
                            :class="[
                              subscription.featured
                                ? 'font-semibold text-red-500 dark:text-red-600'
                                : 'text-gray-900 dark:text-gray-300',
                              'text-sm leading-6',
                            ]"
                            >{{ feature.subscriptions[index]?.value }}</span
                          >
                          <template v-else>
                            <span
                              class="text-xs text-gray-400"
                              v-if="
                                feature.subscriptions.every(
                                  ({ value }) => !value,
                                )
                              "
                            >
                              {{ $t("pricing.features.enterprise_only") }}
                            </span>
                            <CheckIcon
                              v-else-if="
                                feature.subscriptions[index]?.value === true
                              "
                              class="mx-auto h-5 w-5 text-red-500 dark:text-red-600"
                              aria-hidden="true"
                            />
                            <XMarkIcon
                              v-else
                              class="mx-auto h-5 w-5 text-gray-400 dark:text-gray-500"
                              aria-hidden="true"
                            />
                            <span class="sr-only">{{
                              feature.subscriptions[index]?.value === true
                                ? "Yes"
                                : "No"
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
                    v-for="subscription in showInPlanFeaturesSubscriptions"
                    :key="subscription.slug"
                    :class="[
                      subscription.featured
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
import { ref, computed } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import {
  CheckIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  ArrowDownIcon,
} from "@heroicons/vue/20/solid";
import {
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";

const { t } = useI18n();
const theme = useTheme();
const config = useRuntimeConfig();
const { MAIN_URL } = config.public;

const featuresOpen = ref(true);
const planListExpanded = ref(false);
const sliderValue = ref(0);
const currency = useState("currency");
const affiliate = useState("affiliate");

const handleSliderValue = (value) => {
  sliderValue.value = value;
};

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

const affiliateCookie = useCookie("affiliate", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});

const groups = [
  // Basics
  { group: "basics", limit: "users" },
  { group: "basics", limit: "websites" },
  { group: "basics", limit: "email_reports" },

  // Data
  { group: "data", limit: "look_back_days" },
  { group: "data", limit: "data_retention_days" },
  { group: "data", feature: "separated_data_storage" },

  // Events
  { group: "events", feature: "goals" },
  { group: "events", feature: "events" },
  { group: "events", feature: "automated_events" },
  { group: "events", feature: "metadata" },

  // APIs & integrations
  { group: "apis", feature: "admin_api" },
  { group: "apis", feature: "stats_api" },
  { group: "apis", feature: "export_api" },

  // Admin
  { group: "admin", feature: "multiple_teams" },
  { group: "admin", feature: "combined_invoicing" },
  { group: "admin", feature: "manual_invoicing" },
  { group: "admin", feature: "redlining_contracts" },
  { group: "admin", feature: "roles_based_access_control" },
  { group: "admin", feature: "uptime_sla" },

  // Features
  { group: "features", feature: "trendlines" },
  { group: "features", feature: "annotations" },
  { group: "features", feature: "custom_website_views" },
  { group: "features", feature: "block_ip_range" },
  { group: "features", feature: "bypass_via_dns_cname" },
  { group: "features", feature: "bypass_via_new_domain" },
  { group: "features", feature: "data_proxy" },

  // Support
  { group: "support", feature: "email_support" },
  { group: "support", feature: "community_support" },
  { group: "support", feature: "video_support" },
  { group: "support", feature: "legal_support" },

  // Requirements
  { group: "requirements", feature: "badge_requirement", description: true },
  {
    group: "requirements",
    feature: "public_dashboard_requirement",
    description: true,
  },
];

const featureHasDescription = (feature) => {
  const group = groups.find((group) => group.feature === feature);
  return group?.description ?? false;
};

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

const url = new URL("/api/utils/default-subscriptions", MAIN_URL).toString();

const { data, error } = await useFetch(url);

const calculateTotalPrice = ({ datapoints, pricingTiers }) => {
  let totalPriceCents = 0;
  let lastFixedPriceCents = 0;
  const multiplier = frequency?.value?.value === "monthly" ? 1 : 10;

  for (const subscription of pricingTiers) {
    if ("fixed_price_cents" in subscription) {
      lastFixedPriceCents = subscription.fixed_price_cents; // Store the last fixed price

      if (
        datapoints >= subscription.from &&
        (!subscription.to || datapoints <= subscription.to)
      ) {
        totalPriceCents += subscription.fixed_price_cents;
      }
    } else if ("unit_price_cents" in subscription) {
      if (datapoints > subscription.from) {
        totalPriceCents += lastFixedPriceCents; // Add the last fixed price

        const tierDatapoints = subscription.to
          ? Math.min(subscription.to, datapoints) - subscription.from
          : datapoints - subscription.from;
        const units = Math.ceil(tierDatapoints / subscription.unit_size);
        totalPriceCents += units * subscription.unit_price_cents;
      }
    }
  }

  return (totalPriceCents / 100) * multiplier;
};

const filteredSubscriptions = computed(() => {
  if (!data.value?.subscriptions) return [];

  const allFeatures = new Set();
  const addedFeatures = new Set();

  const list = data.value.subscriptions
    .filter((subscription) => {
      const months = frequency?.value?.value === "monthly" ? 1 : 12;
      const matchesInterval = subscription.billing_interval_months === months;
      const isFreePlan = subscription.plan_slug.includes("free");
      return matchesInterval || isFreePlan;
    })
    .map((subscription) => {
      for (const [feature, enabled] of Object.entries(subscription.features)) {
        if (enabled) addedFeatures.add(feature);
        allFeatures.add(feature);
      }

      const features = Object.entries(subscription.features)
        .map(([feature, value]) => {
          return {
            feature,
            value,
          };
        })
        .filter((feature) => feature.value)
        .sort((a, b) => {
          if (a.feature.includes("require")) return 1;
          if (b.feature.includes("require")) return -1;
          return 0;
        });

      return {
        name: subscription.plan_name,
        slug: subscription.plan_slug,
        datapoints_graduated_pricing: subscription.datapoints_graduated_pricing,
        featured: subscription.plan_slug.includes("team"),
        showInPlanFeatures: true,
        features,
        unique_features: features,
        limit_users: subscription.limit_users,
        limit_websites: subscription.limit_websites,
        limit_email_reports: subscription.limit_email_reports,
        limit_look_back_days: subscription.limit_look_back_days,
        limit_data_retention_days: subscription.limit_data_retention_days,
      };
    })
    // If a feature shows in the a plan, do not show it in the next plan
    .reduce((acc, subscription) => {
      const lastSubscription = acc.length ? acc[acc.length - 1] : null;

      if (lastSubscription) {
        subscription.unique_features = subscription.unique_features.filter(
          (feature) => {
            const existingFeature = lastSubscription.unique_features.find(
              (existingFeature) => existingFeature.feature === feature.feature,
            );
            return !existingFeature;
          },
        );
      }

      acc.push(subscription);

      return acc;
    }, []);

  // Add features to unique_features that are in allFeatures and not in addedFeatures

  const unique_features = [...allFeatures]
    .filter((feature) => !addedFeatures.has(feature))
    .map((feature) => {
      return {
        feature,
        value: true,
      };
    });

  // Add Enterprise
  list.push({
    name: "Enterprise",
    slug: "enterprise",
    href: "#",
    featured: false,
    showInPlanFeatures: false,
    unique_features,
  });

  return list;
});

const showInPlanFeaturesSubscriptions = computed(() => {
  return filteredSubscriptions.value.filter(
    (subscription) => subscription.showInPlanFeatures,
  );
});

const sections = computed(() => {
  // Iterate over all groups and find the feature in the subscriptions,
  // add an array called `subscriptions` with the value of the feature.
  for (const group of groups) {
    group.subscriptions = [];

    for (const subscription of filteredSubscriptions.value) {
      if (!subscription.showInPlanFeatures) continue;

      if (group.feature) {
        const feature = subscription.features.find(
          (feature) => feature.feature === group.feature,
        );

        if (feature) {
          group.subscriptions.push({
            type: "feature",
            value: feature.value,
            description: group.description,
          });
        }
      }

      if (group.limit) {
        const key = `limit_${group.limit}`;
        const limit = subscription[key];

        group.subscriptions.push({
          type: "limit",
          value: limit,
          description: group.description,
        });
      }
    }
  }

  // Group by group like this:
  // const sections = [
  // {
  //   name: "Catered for business",
  //   features: [
  //     {
  //       name: "Tax Savings",
  //       subscriptions: { Starter: true, Scale: true, Growth: true },
  //     },

  const sections = groups.reduce((acc, group) => {
    const section = acc.find((section) => section.name === group.group);
    if (section) {
      section.features.push({
        slug: group.feature || group.limit,
        subscriptions: group.subscriptions,
      });
    } else {
      acc.push({
        name: group.group,
        features: [
          {
            slug: group.feature || group.limit,
            subscriptions: group.subscriptions,
          },
        ],
      });
    }
    return acc;
  }, []);

  return sections;
});
</script>
