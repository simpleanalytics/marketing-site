<template>
  <div class="sm:flex sm:flex-col sm:align-center">
    <p v-if="affiliateCookie" class="my-6 text-center">
      {{ $t("pricing.affiliate_description", [14]) }}
    </p>

    <div
      v-if="isBlackFridayPeriod"
      class="max-w-3xl mx-auto px-6 mb-6 mt-8 py-3 bg-green-50 dark:bg-gray-700 border border-green-300 dark:border-gray-600 rounded-lg"
    >
      <p
        class="text-center text-gray-900 dark:text-gray-100 text-xs sm:text-sm max-w-[410px] mx-auto"
      >
        <span class="font-semibold">We don't do Black Friday.</span>
        Don't buy us if you need a discount. Just a fair price for everyone.
      </p>
    </div>

    <Brands />

    <div class="mt-6 mx-auto flex space-x-2 items-center justify-center">
      <div class="flex flex-wrap -space-x-3">
        <div
          v-for="(avatar, index) in avatars.slice(0, 15)"
          :key="avatar"
          :style="{ zIndex: avatars.length - index }"
          :class="{ 'hidden sm:block': index >= 7 }"
        >
          <NuxtLink
            :to="`https://x.com/${avatar.handle}`"
            target="_blank"
            :title="`@${avatar.handle} (${avatar.followers > 1000 ? $t('pricing.followers.count_k', [Math.floor(avatar.followers / 1000)]) : $t('pricing.followers.count', [avatar.followers])})`"
          >
            <Tooltip
              :text="`@${avatar.handle}`"
              class="group ring-2 ring-white dark:ring-gray-800 rounded-full"
              :rounded="true"
            >
              <img
                :src="`/avatars/${avatar.image}`"
                :alt="$t('pricing.accessibility.avatar', [avatar.handle])"
                rel="nofollow"
                class="h-10 w-10"
              />
            </Tooltip>
          </NuxtLink>
        </div>
      </div>

      <Capterra />
    </div>

    <div
      class="mt-6 text-center"
      v-if="error || filteredSubscriptions.length === 0"
    >
      <p
        class="mx-auto rounded px-4 py-2 inline-block bg-red-300 dark:bg-red-900 dark:text-gray-300 text-gray-50"
      >
        {{ error || $t("general.errors.an_error_happened") }}
      </p>
    </div>
  </div>

  <div
    class="mt-8 p-0 sm:py-0 border-b dark:border-b-2 sm:border-none border-gray-200 dark:border-gray-800 bg-gray-50 sm:bg-transparent dark:bg-gray-700 sm:dark:bg-transparent max-w-3xl mx-auto z-20 top-0 w-full sm:relative -translate-y-px"
  >
    <div
      class="flex flex-col md:flex-row justify-center items-center px-6 sm:border border-gray-200 dark:border-none dark:bg-gray-700 rounded-2xl"
    >
      <div class="px-2 order-2 sm:order-0 py-2 flex-grow sm:mr-8">
        <p class="text-center text-sm sm:text-sm mt-1 mb-2">
          {{ $t("pricing.slider.select_pageviews") }}
        </p>
        <Slider
          :options="sliderOptions"
          :sliderIndexInitial="sliderIndexInitial"
          :addInfinityStep="true"
          @updateValue="handleSliderValue"
        />
      </div>
      <div
        class="flex justify-center sm:order-3 relative sm:max-w-fit mt-5 sm:-mt-1"
      >
        <RadioGroup
          v-model="frequency"
          class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 dark:ring-0 ring-inset ring-gray-200 dark:bg-gray-800"
        >
          <RadioGroupLabel class="sr-only">{{
            $t("pricing.payment_frequency.label")
          }}</RadioGroupLabel>
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
        <div
          class="absolute flex rounded-full bg-green-500 dark:bg-green-600 top-0 right-0 mt-1 mr-1 translate-x-1/2 -translate-y-2/3"
        >
          <span
            class="block py-1 px-2 text-[10px] leading-none font-semibold text-white dark:text-white"
            >{{ $t("pricing.payment_frequency.discount") }}</span
          >
        </div>
      </div>
    </div>
  </div>

  <div>
    <div
      class="sm:mx-auto max-w-7xl sm:px-8 pt-8 pb-8 mx-6 sm:flex sm:flex-col sm:align-center"
    >
      <div
        class="isolate mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8"
      >
        <div
          v-for="(subscription, index) in filteredSubscriptions"
          :key="subscription.slug"
          :class="[
            subscription.featured
              ? 'ring-2 ring-green-500  dark:bg-gray-700'
              : 'ring-1 ring-gray-200 dark:ring-0 dark:bg-gray-700',
            'rounded-3xl p-8 relative',
          ]"
        >
          <div
            v-if="subscription.featured"
            class="absolute left-1/2 -translate-x-1/2 top-0 transform -translate-y-1/2 bg-green-500 px-3 py-1 rounded-full text-white text-sm font-semibold"
          >
            {{ $t("pricing.plan_labels.recommended") }}
          </div>

          <div
            v-if="subscription.featured"
            class="hidden sm:block absolute right-0 top-0 translate-x-[150px] -translate-y-8 transform"
          >
            <BlameOurMarketeerForThis class="stroke-gray-300 h-6" />
          </div>

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
          <p
            class="mt-2 text-sm leading-6 lg:min-h-[72px]"
            v-if="
              subscription.translation_key || subscription.slug === 'enterprise'
            "
          >
            {{
              $t(
                `pricing.plans.${subscription.translation_key || subscription.slug}.description`,
              )
            }}
          </p>
          <p
            v-if="subscription.slug.includes('free')"
            class="mt-6 flex items-baseline gap-x-1"
          >
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
              >{{ $t("pricing.plan_labels.free") }}</span
            >
          </p>
          <p
            class="mt-6 flex items-baseline gap-x-1"
            v-else-if="
              subscription.datapoints_graduated_pricing &&
              sliderValue !== Infinity
            "
          >
            <!-- Price -->
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
              >{{
                new Intl.NumberFormat($t("time.intl_locale"), {
                  style: "currency",
                  currency: currency.code,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(
                  subscription.datapoints_graduated_pricing
                    ? calculateTotalPrice({
                        datapoints: sliderValue,
                        pricingTiers: subscription.datapoints_graduated_pricing,
                      })
                    : 0,
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
            <span class="text-sm font-semibold leading-6">&nbsp;</span>
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
              >Custom</span
            >
            <span class="text-sm font-semibold leading-6">&nbsp;</span>
          </p>
          <p
            v-else-if="sliderValue === Infinity"
            class="mt-6 flex items-baseline gap-x-1"
          >
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
              >{{ $t("pricing.contact_us") }}</span
            >
          </p>
          <NuxtLink
            @click="
              subscription.slug === 'enterprise' || sliderValue === Infinity
                ? clickEnterprise()
                : goToWelcome({ plan: subscription.slug })
            "
            :class="[
              subscription.featured
                ? 'bg-green-500 dark:bg-green-600 text-white shadow-sm hover:bg-green-500'
                : 'text-green-500 dark:text-green-600 ring-2 ring-inset ring-green-500 dark:ring-green-600 hover:ring-green-300',
              'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600',
            ]"
          >
            <span v-if="subscription.slug.includes('free')">{{
              $t("pricing.buttons.start_free")
            }}</span>
            <span
              v-else-if="
                subscription.slug === 'enterprise' || sliderValue === Infinity
              "
              class="flex items-center justify-center gap-x-2"
            >
              <CalendarDaysIcon
                class="h-5 w-5 flex-none text-current"
                aria-hidden="true"
              />
              {{ $t("pricing.buttons.book_call") }}
            </span>
            <span v-else>{{ $t("pricing.buttons.start_free") }}</span>
          </NuxtLink>
          <ul role="list" class="mt-4 space-y-3 text-sm leading-6">
            <li
              v-if="
                index !== 0 &&
                !filteredSubscriptions[index - 1]?.slug?.includes('free')
              "
              class="flex items-center gap-x-3 italic text-gray-400 dark:text-gray-500"
            >
              <ArrowLeftIcon class="h-6 w-5 flex-none" aria-hidden="true" />
              <span>{{
                $t("pricing.everything_from", [
                  filteredSubscriptions[index - 1]?.name,
                ])
              }}</span>
            </li>

            <!-- Placeholder for plans without everything from -->
            <li v-else>
              <span>&nbsp;</span>
            </li>

            <li
              v-if="typeof subscription.limit_users === 'number'"
              class="flex gap-x-3 items-center"
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />

              <div>
                <span
                  class=""
                  v-html="
                    $t(
                      subscription.limit_users === 1
                        ? 'pricing.features.users.one'
                        : 'pricing.features.users.number',
                      [subscription.limit_users],
                    )
                  "
                ></span>

                <span
                  v-if="subscription.price_per_user"
                  class="absolute inline-flex translate-y-[3px]"
                >
                  <div
                    class="flex rounded-full bg-green-500 dark:bg-green-600 ml-2"
                  >
                    <span
                      class="block py-1 px-2 text-[11px] leading-none font-semibold text-white dark:text-white"
                    >
                      +{{
                        new Intl.NumberFormat($t("time.intl_locale"), {
                          style: "currency",
                          currency: currency.code,
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                        }).format(subscription.price_per_user / 100)
                      }}/{{ $t("pricing.features.users.per_user") }}
                    </span>
                  </div>
                </span>
              </div>
            </li>
            <li v-else class="flex gap-x-3">
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <span>{{ $t("pricing.features.users.custom") }}</span>
            </li>

            <li
              v-if="
                (typeof subscription.limit_websites === 'number' &&
                  subscription.limit_websites !== 0) ||
                subscription.limit_websites === null
              "
              class="flex gap-x-3"
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <span
                v-html="
                  $t(
                    subscription.limit_websites === 1
                      ? 'pricing.features.websites.one'
                      : subscription.limit_websites === null
                        ? 'pricing.features.websites.unlimited'
                        : 'pricing.features.websites.number',
                    [subscription.limit_websites],
                  )
                "
              ></span>
            </li>
            <li v-else class="flex gap-x-3">
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <span>{{ $t("pricing.features.websites.custom") }}</span>
            </li>

            <li v-if="subscription.slug === 'enterprise'" class="flex gap-x-3">
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <span>{{ $t("pricing.features.datapoints.custom") }}</span>
            </li>

            <li
              v-if="subscription.slug === 'free-monthly'"
              class="flex gap-x-3"
            >
              <ExclamationTriangleIcon
                class="h-6 w-5 flex-none text-red-500 dark:text-red-600"
                aria-hidden="true"
              />
              <TooltipPopover
                :text="$t('pricing.features.limited_lookback.title')"
                key="free"
              >
                <span
                  v-html="$t('pricing.features.limited_lookback.description')"
                >
                </span>
              </TooltipPopover>
            </li>
            <li
              class="flex gap-x-3"
              v-else-if="
                typeof subscription.limit_data_retention_days === 'number'
              "
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <span
                v-html="
                  $t('pricing.features.data_retention_days.number', [
                    formatDays(subscription.limit_data_retention_days),
                  ])
                "
              ></span>
            </li>

            <li
              v-for="feature in subscription.highlighted_features"
              :key="feature"
              class="flex gap-x-3"
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
              />
              <TooltipPopover
                :text="$t(`pricing.features.${feature}.title`)"
                :key="feature"
                v-if="featureHasDescription(feature)"
              >
                <span
                  v-if="feature === 'community_support'"
                  v-html="
                    $t('pricing.features.community_support.description', [
                      `<a href='https://community.simpleanalytics.com/' target='_blank'>`,
                      `</a>`,
                    ])
                  "
                >
                </span>
                <span v-else>
                  {{ $t(`pricing.features.${feature}.description`) }}
                </span>
              </TooltipPopover>
              <span v-else-if="feature !== 'data_retention_days'">{{
                $t(`pricing.features.${feature}.title`)
              }}</span>
            </li>

            <li
              v-for="feature in subscription.slug === 'enterprise'
                ? subscription.unique_features
                    .filter(
                      (feature) =>
                        planListExpanded ||
                        !featureIsHiddenInPlan(feature.feature),
                    )
                    .sort((a, b) => {
                      if (featureIsHiddenInPlan(a.feature)) return 1;
                      if (featureIsHiddenInPlan(b.feature)) return -1;
                      return 0;
                    })
                : subscription.unique_features
                    ?.filter(
                      (f) =>
                        !subscription.highlighted_features?.includes(f.feature),
                    )
                    ?.slice(
                      0,
                      planListExpanded
                        ? subscription.unique_features.length
                        : 0,
                    )"
              :key="feature.feature"
              class="flex gap-x-3"
            >
              <ExclamationTriangleIcon
                class="h-6 w-5 flex-none text-red-500 dark:text-red-600"
                aria-hidden="true"
                v-if="feature.feature?.includes('require')"
              />
              <CheckIcon
                class="h-6 w-5 flex-none text-green-500 dark:text-green-600"
                aria-hidden="true"
                v-else
              />

              <TooltipPopover
                :text="$t(`pricing.features.${feature.feature}.title`)"
                :key="feature.feature"
                v-if="featureHasDescription(feature.feature)"
              >
                <span
                  v-if="feature.feature === 'community_support'"
                  v-html="
                    $t('pricing.features.community_support.description', [
                      `<a href='https://community.simpleanalytics.com/' target='_blank'>`,
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
              v-if="
                !subscription.slug.includes('free') &&
                subscription.unique_features?.filter(
                  (f) =>
                    !subscription.highlighted_features?.includes(f.feature),
                )?.length > 0
              "
              class="flex gap-x-3"
            >
              <NuxtLink
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

                <span v-if="planListExpanded">{{
                  $t("pricing.features_list.show_less")
                }}</span>
                <span v-else>{{ $t("pricing.features_list.show_more") }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <p class="text-center mt-20">
    <NuxtLink
      @click="featuresOpen = !featuresOpen"
      class="button"
      v-if="featuresOpen"
    >
      <MinusIcon class="h-5 w-5 mr-2" aria-hidden="true" />
      {{ $t("pricing.features_list.hide_all") }}
    </NuxtLink>
    <NuxtLink @click="featuresOpen = !featuresOpen" class="button" v-else>
      <PlusIcon class="h-5 w-5 mr-2" aria-hidden="true" />
      {{ $t("pricing.features_list.show_all") }}
    </NuxtLink>
  </p>

  <!-- Wrap the sticky header and related content with .relative -->
  <div v-if="featuresOpen" class="relative">
    <div
      class="sticky hidden lg:block top-0 z-50 mt-10 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-600"
    >
      <div class="mx-auto max-w-7xl px-6 py-8 sm:pb-8 sm:bt-8 lg:px-8">
        <h2 id="comparison-heading" class="sr-only">
          {{ $t("pricing.accessibility.feature_comparison") }}
        </h2>

        <div class="grid grid-cols-4 gap-x-8 before:block">
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
                'text-center px-4',
              ]"
            >
              <p
                :class="[
                  subscription.featured
                    ? 'text-red-500 dark:text-red-600'
                    : 'text-gray-900',
                  'text-xl font-semibold leading-6',
                ]"
              >
                {{ $t(`pricing.plans.${subscription.translation_key}.title`) }}
              </p>
              <p class="mt-1 text-sm leading-6">
                {{
                  $t(
                    `pricing.plans.${subscription.translation_key}.description`,
                  )
                }}
              </p>

              <NuxtLink
                class="button mt-6 block text-sm font-semibold leading-6"
                :to="localePath({ name: 'signup' })"
              >
                {{ $t("pricing.buttons.start_now") }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="isolate overflow-hidden">
      <div class="relative">
        <div class="mx-auto max-w-7xl px-6 py-8 sm:pb-16 sm:bt-4 lg:px-8">
          <!-- Feature comparison (up to lg) -->
          <section
            aria-labelledby="mobile-comparison-heading"
            class="lg:hidden"
          >
            <h2 id="mobile-comparison-heading" class="sr-only">
              {{ $t("pricing.accessibility.mobile_comparison") }}
            </h2>

            <div class="mx-auto max-w-2xl space-y-16">
              <div
                v-for="(subscription, index) in showInPlanFeaturesSubscriptions"
                :key="subscription.slug"
              >
                <div
                  :class="[
                    subscription.featured
                      ? 'border-red-500 dark:border-red-600'
                      : 'border-transparent',
                    '-mt-px w-72 border-t-2 pt-10 md:w-80',
                  ]"
                >
                  <h3 class="text-lg font-semibold leading-6">
                    {{
                      $t(`pricing.plans.${subscription.translation_key}.title`)
                    }}
                  </h3>
                  <p class="mt-4 -mb-6 text-sm leading-6">
                    {{
                      $t(
                        `pricing.plans.${subscription.translation_key}.description`,
                      )
                    }}
                  </p>
                </div>

                <div class="mt-10 space-y-10">
                  <div v-for="section in sections" :key="section.name">
                    <h4
                      class="text-sm font-semibold leading-6 text-gray-900"
                      v-if="section.name !== 'basics'"
                    >
                      {{ $t(`pricing.sections.${section.name}.title`) }}
                    </h4>
                    <p
                      class="mt-2 text-sm leading-6 text-gray-900"
                      v-if="section.name !== 'basics'"
                    >
                      {{ $t(`pricing.sections.${section.name}.description`) }}
                    </p>

                    <div class="relative mt-4">
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
                                <svg
                                  v-if="
                                    feature.subscriptions[index]?.value ===
                                      null ||
                                    (feature.subscriptions[index]?.value ===
                                      undefined &&
                                      feature.subscriptions[index]?.type ===
                                        'limit')
                                  "
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  class="mx-auto h-5 w-5 fill-red-500 dark:fill-red-600"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M18.571 6c-2.853 0-4.608 2.164-6.571 4.201-1.963-2.037-3.718-4.201-6.571-4.201-3.197 0-5.429 2.455-5.429 6s2.232 6 5.429 6c2.854 0 4.608-2.164 6.571-4.201 1.963 2.037 3.718 4.201 6.571 4.201 3.197 0 5.429-2.455 5.429-6s-2.232-6-5.429-6zm-13.142 10c-2.114 0-3.479-1.578-3.479-4s1.366-4 3.479-4c2.311 0 3.719 2.05 5.365 4-1.647 1.95-3.055 4-5.365 4zm13.142 0c-2.311 0-3.719-2.05-5.365-4 1.646-1.95 3.054-4 5.365-4 2.114 0 3.479 1.578 3.479 4s-1.365 4-3.479 4z"
                                  />
                                </svg>
                                <span
                                  class="text-xs text-gray-400"
                                  v-else-if="
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
                                    ? $t(
                                        "pricing.accessibility.feature_value.yes",
                                      )
                                    : $t(
                                        "pricing.accessibility.feature_value.no",
                                      )
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
            <div class="-mt-6 space-y-16">
              <div v-for="section in sections" :key="section.name">
                <h3
                  class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400"
                  v-if="section.name !== 'basics'"
                >
                  {{ $t(`pricing.sections.${section.name}.title`) }}
                </h3>
                <p
                  class="mt-2 text-sm leading-6 text-gray-900"
                  v-if="section.name !== 'basics'"
                >
                  {{ $t(`pricing.sections.${section.name}.description`) }}
                </p>

                <div class="relative -mx-8 mt-6">
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
                            v-html="
                              $t(`pricing.features.${feature.slug}.title`)
                            "
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
                            >
                              <span v-if="/_days$/.test(feature.slug)">
                                {{
                                  formatDays(
                                    feature.subscriptions[index]?.value,
                                  )
                                }}
                              </span>
                              <span v-else>
                                {{ feature.subscriptions[index]?.value }}
                              </span>
                            </span>
                            <template v-else>
                              <svg
                                v-if="
                                  feature.subscriptions[index]?.value ===
                                    null ||
                                  (feature.subscriptions[index]?.value ===
                                    undefined &&
                                    feature.subscriptions[index]?.type ===
                                      'limit')
                                "
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                class="mx-auto h-5 w-5 fill-red-500 dark:fill-red-600"
                                aria-hidden="true"
                              >
                                <path
                                  d="M18.571 6c-2.853 0-4.608 2.164-6.571 4.201-1.963-2.037-3.718-4.201-6.571-4.201-3.197 0-5.429 2.455-5.429 6s2.232 6 5.429 6c2.854 0 4.608-2.164 6.571-4.201 1.963 2.037 3.718 4.201 6.571 4.201 3.197 0 5.429-2.455 5.429-6s-2.232-6-5.429-6zm-13.142 10c-2.114 0-3.479-1.578-3.479-4s1.366-4 3.479-4c2.311 0 3.719 2.05 5.365 4-1.647 1.95-3.055 4-5.365 4zm13.142 0c-2.311 0-3.719-2.05-5.365-4 1.646-1.95 3.054-4 5.365-4 2.114 0 3.479 1.578 3.479 4s-1.365 4-3.479 4z"
                                />
                              </svg>
                              <span
                                class="text-xs text-gray-400"
                                v-else-if="
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
                                feature.subscriptions[index]?.value === null ||
                                (typeof feature.subscriptions[index]?.value ===
                                  "undefined" &&
                                  feature.subscriptions[index]?.type ===
                                    "limit")
                                  ? "Unlimited"
                                  : feature.subscriptions.every(
                                        ({ value }) => !value,
                                      )
                                    ? ""
                                    : feature.subscriptions[index]?.value ===
                                        true
                                      ? $t(
                                          "pricing.accessibility.feature_value.yes",
                                        )
                                      : $t(
                                          "pricing.accessibility.feature_value.no",
                                        )
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
  CalendarDateRangeIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";
import BlameOurMarketeerForThis from "./handwritten/BlameOurMarketeerForThis.vue";

const theme = useTheme();
const config = useRuntimeConfig();
const { DASHBOARD_URL } = config.public;
const { t } = useI18n();
const localePath = useLocalePath();
const isBlackFridayPeriod = useIsBlackFridayPeriod();

const featuresOpen = ref(false);
const planListExpanded = ref(false);
const sliderValue = ref(0);
const currency = useCurrency();
const router = useRouter();

const handleSliderValue = (value) => {
  sliderValue.value = value;
};

const sliderOptions = ref(["20000", "100000", "250000", "500000", "1000000"]);

const sliderIndexInitial = computed(() => {
  return sliderOptions.value.findIndex((option) => option == 20000);
});

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
  { group: "apis", feature: "stats_api" },
  { group: "apis", feature: "admin_api" },
  { group: "apis", feature: "export_api" },

  // Admin
  { group: "admin", feature: "roles_based_access_control" },
  { group: "admin", feature: "manual_invoicing" },
  { group: "admin", feature: "redlining_contracts" },
  { group: "admin", feature: "uptime_sla" },
  { group: "admin", feature: "multiple_teams", hideInPlan: true },
  { group: "admin", feature: "combined_invoicing", hideInPlan: true },

  // Features
  { group: "features", feature: "trendlines" },
  { group: "features", feature: "annotations" },
  { group: "features", feature: "growth_indicators" },
  { group: "features", feature: "exact_numbers" },
  { group: "features", feature: "alert_missing_script" },
  { group: "features", feature: "advanced_robot_blocking" },
  { group: "features", feature: "disable_watermark" },
  { group: "features", feature: "custom_website_views" },
  { group: "features", feature: "block_ip_range" },
  { group: "features", feature: "bypass_via_dns_cname" },
  { group: "features", feature: "data_proxy" },
  { group: "features", feature: "bypass_via_new_domain" },

  // Support
  { group: "support", feature: "community_support", description: true },
  { group: "support", feature: "email_support" },
  { group: "support", feature: "video_support" },
  { group: "support", feature: "priority_support" },
  { group: "support", feature: "legal_support", hideInPlan: true },
];

const featureHasDescription = (feature) => {
  const group = groups.find((group) => group.feature === feature);
  return group?.description ?? false;
};

const featureIsHiddenInPlan = (feature) => {
  const group = groups.find((group) => group.feature === feature);
  return group?.hideInPlan ?? false;
};

const clickEnterprise = () => {
  const url = `https://cal.com/ironbrands/demo-simple-analytics`;

  // Send event before redirecting to contact page
  if (window.sa_event && window.sa_loaded) {
    window.sa_event("click_enterprise", () => {
      window.location.href = url;
    });
  } else {
    window.location.href = url;
  }
};

const goToWelcome = ({ plan }) => {
  // plan can be starter-monthly, business-yealy, etc
  const interval = /monthly/.test(plan)
    ? "monthly"
    : /yearly/.test(plan)
      ? "yearly"
      : null;

  // Send event before redirecting to welcome page
  if (window.sa_event && window.sa_loaded) {
    window.sa_event("click_buy", {
      currency: currency?.value?.code,
      plan,
      interval,
    });
  }

  const path = localePath({ name: "signup" });
  router.push(path);
};

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const frequency = ref(frequencies[0]);

const url = new URL(
  "/api/utils/default-subscriptions",
  DASHBOARD_URL,
).toString();

const { data, error: fetchError } = await useFetch(url);

const error = computed(() => {
  if (
    fetchError.value instanceof Error &&
    fetchError.value.message.includes("no response")
  ) {
    if (process.env.NODE_ENV === "development")
      return t("pricing.developer.start_dashboard");
    else return t("pricing.developer.fetch_error");
  }
  return fetchError.value;
});

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

      const slug = subscription.plan_slug;
      const translation_key = slug.includes("free")
        ? "free"
        : slug.includes("team")
          ? "team"
          : slug.includes("enterprise")
            ? "enterprise"
            : slug.includes("simple")
              ? "simple"
              : slug.includes("starter")
                ? "starter"
                : slug.includes("business")
                  ? "business"
                  : slug;

      if (!translation_key) {
        console.error("No translation key for", slug);
      }

      return {
        name: subscription.plan_name,
        slug,
        translation_key,
        datapoints_graduated_pricing: subscription.datapoints_graduated_pricing,
        users_graduated_pricing: subscription.users_graduated_pricing,
        featured: subscription.plan_slug.includes("team"),
        showInPlanFeatures: true,
        features,
        unique_features: features,
        trial_days: subscription.trial_days,
        limit_users: subscription.limit_users,
        limit_websites: subscription.limit_websites,
        limit_email_reports: subscription.limit_email_reports,
        limit_look_back_days: subscription.limit_look_back_days,
        limit_data_retention_days: subscription.limit_data_retention_days,
        highlighted_features: subscription.highlighted_features,
        price_per_user: subscription.users_graduated_pricing.find(
          (price) => price.unit_price_cents,
        )?.unit_price_cents,
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

        group.subscriptions.push({
          type: "feature",
          value: feature?.value ?? false,
          description: group.description,
        });
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
  //   {
  //     name: "Catered for business",
  //     features: [
  //       {
  //         name: "Tax Savings",
  //         subscriptions: { Starter: true, Scale: true, Growth: true },
  //       },

  const sections2 = groups.reduce((acc, group) => {
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

  return sections2;
});

const formatDays = (days) => {
  if (days === 1096) return t("time.years", [3]);
  if (days === 1826) return t("time.years", [5]);
  return t("time.days", [days]);
};

const avatars = [
  { image: "levelsio.jpg", handle: "levelsio", followers: 560000 },
  { image: "damengchen.jpg", handle: "damengchen", followers: 74400 },
  { image: "marckohlbrugge.jpg", handle: "marckohlbrugge", followers: 62400 },
  { image: "vjeux.jpg", handle: "vjeux", followers: 56100 },
  { image: "daniel_nguyenx.jpg", handle: "daniel_nguyenx", followers: 47000 },
  { image: "rosiesherry.jpg", handle: "rosiesherry", followers: 25300 },
  { image: "jamesivings.jpg", handle: "jamesivings", followers: 21600 },
  { image: "hainingmax.png", handle: "hainingmax", followers: 12100 },
  { image: "alexstyl.jpg", handle: "alexstyl", followers: 11500 },
  { image: "forgebitz.jpg", handle: "forgebitz", followers: 10100 },
  { image: "erwin_ai.jpg", handle: "erwin_ai", followers: 9893 },
  { image: "imgyf.jpg", handle: "imgyf", followers: 9644 },
  { image: "petecodes.jpg", handle: "petecodes", followers: 9371 },
  { image: "jelmerdeboer.jpg", handle: "jelmerdeboer", followers: 7634 },
  { image: "rikschennink.jpg", handle: "rikschennink", followers: 7396 },
  { image: "roscokalis.jpg", handle: "roscokalis", followers: 5570 },
  { image: "jamespotterdev.jpg", handle: "jamespotterdev", followers: 5223 },
  { image: "ashleyrudland.jpg", handle: "ashleyrudland", followers: 5004 },
  { image: "razvanilin.jpg", handle: "razvanilin", followers: 3387 },
  { image: "jakeduth.png", handle: "jakeduth", followers: 2091 },
  { image: "fabiensnauwaert.jpg", handle: "fabiensnauwaert", followers: 2065 },
  { image: "amritnagi.jpg", handle: "amritnagi", followers: 375 },
].sort((a, b) => b.followers - a.followers);
</script>
