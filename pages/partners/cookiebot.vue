<template>
  <section
    class="bg-gradient-to-t from-blue-100 dark:from-gray-700 py-4 relative overflow-hidden pb-10"
  >
    <!-- Two Logos Section -->
    <div
      class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8"
    >
      <div class="flex items-center">
        <SimpleAnalyticsIcon class="h-12 w-auto" />
      </div>
      <div class="text-5xl text-gray-400">+</div>
      <div class="flex items-center">
        <CookiebotIcon class="h-12 w-auto" />
      </div>
    </div>

    <!-- Marketing Text -->
    <div class="text-center relative pt-6">
      <h1
        class="text-4xl font-medium sm:text-5xl md:text-6xl mb-6"
        v-html="
          $t('partners.cookiebot.main_title', [
            `<span class='text-red-500 dark:text-red-600'>${$t('partners.cookiebot.discount')}</span>`,
          ])
        "
      ></h1>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed sm:leading-relaxed"
      >
        {{ $t("partners.cookiebot.subtitle") }}
      </p>
    </div>

    <div class="mt-6 text-center">
      <a class="button primary" @click="handleSignupClick">
        {{ $t("partners.cookiebot.claim_discount_button") }}
        <ArrowRightIcon class="ml-2 w-4 h-4 stroke-2" />
      </a>
    </div>

    <Brands
      class="mt-12 mb-8 flex flex-wrap justify-center items-center space-x-7"
    />

    <img
      src="https://assets.simpleanalytics.com/press/screenshots/dashboard-light-chart.png"
      alt="Cookiebot"
      class="w-full max-w-4xl mx-auto rounded-lg shadow-xl dark:hidden"
      width="2400"
      height="1350"
      style="aspect-ratio: 2400 / 1350"
    />
    <img
      src="https://assets.simpleanalytics.com/press/screenshots/dashboard-dark-chart.png"
      alt="Cookiebot"
      class="w-full max-w-4xl mx-auto rounded-lg shadow-xl dark:block hidden"
      width="2400"
      height="1350"
      style="aspect-ratio: 2400 / 1350"
    />

    <ClientOnly>
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <BackgroundChart
          class="fill-blue-50 stroke-blue-500 dark:fill-gray-800"
        />
      </div>
    </ClientOnly>
  </section>

  <div class="max-w-7xl mx-auto mt-20">
    <!-- Discount Timeline -->
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-medium text-center mb-8">
        {{ $t("partners.cookiebot.special_offer_title") }}
      </h2>

      <p class="text-center text-gray-600 dark:text-gray-400 mb-8">
        {{
          $t(
            "partners.cookiebot.special_offer_description",
            [2, 50, 3, 1, 25, 3],
          )
        }}
      </p>

      <!-- Timeline container -->
      <div class="relative mt-28 max-w-xl mx-auto">
        <!-- Main timeline line -->
        <div class="h-2 bg-gray-300 dark:bg-gray-600 rounded-full relative">
          <!-- Timeline markers -->
          <div class="absolute left-0 top-1/2 transform -translate-y-1/2">
            <div
              class="w-4 h-4 bg-red-500 dark:bg-red-600 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
            ></div>
            <div
              class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
            >
              {{ $t("partners.cookiebot.timeline_sign_up") }}
            </div>
          </div>

          <!-- Middle marker (2 weeks after sign up) -->
          <div
            class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div
              class="w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
            ></div>
            <div
              class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
            >
              {{ $t("partners.cookiebot.timeline_two_weeks_after") }}
            </div>
          </div>

          <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div
              class="w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
            ></div>
            <div
              class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
            >
              {{ $t("partners.cookiebot.timeline_one_month") }}
            </div>
          </div>
        </div>

        <!-- Colored sections below timeline -->
        <div class="mt-4 flex gap-4">
          <!-- 50% discount section (first half of timeline) -->
          <div class="flex-1">
            <div class="ml-1 h-2 bg-red-500 dark:bg-red-600 rounded-full"></div>
            <div class="text-center mt-4">
              <div class="text-xl font-bold text-red-500 dark:text-red-600">
                {{ $t("partners.cookiebot.offer_x_percent_full", [50, 3]) }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {{ $t("partners.cookiebot.select_plan_x_weeks", [2]) }}
              </div>
            </div>
          </div>

          <!-- 25% discount section (second half of timeline) -->
          <div class="flex-1">
            <div
              class="mr-1 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"
            ></div>
            <div class="text-center mt-4">
              <div class="text-xl font-bold text-blue-500 dark:text-blue-400">
                {{ $t("partners.cookiebot.offer_x_percent_full", [25, 3]) }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {{ $t("partners.cookiebot.select_plan_x_weeks", [4]) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sign Up Button -->
    <div class="text-center mt-20 mb-10">
      <a class="button large primary" @click="handleSignupClick">
        {{ $t("partners.cookiebot.start_trial_button") }}
      </a>
    </div>

    <!-- Cookie Notice -->
    <div class="text-center pb-12">
      <p
        class="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed"
      >
        {{ $t("partners.cookiebot.cookie_notice") }}
      </p>
    </div>

    <div class="max-w-[1600px] mx-auto px-6 flex flex-row">
      <Quote
        class="basis-1/2 pr-2"
        image="https://assets.simpleanalytics.com/images/people/philippe.png"
        title="Philippe Lehoux"
        :subtitle="$t('testimonials.missive.role')"
        subtitlelink="https://missiveapp.com/blog/privacy-first-analytics"
      >
        <p class="text-xl leading-relaxed">
          "<span v-html="$t('testimonials.missive.quote', tColorsBlue)"></span>"
        </p>
      </Quote>

      <Quote
        class="basis-1/2 pl-2"
        :logo="DuckDuckGoLogo"
        :title="$t('testimonials.duckduckgo.name')"
        :subtitle="$t('testimonials.duckduckgo.role')"
        :quote="$t('testimonials.duckduckgo.quote', tColorsBlue)"
        subtitlelink="https://duckduckgo.com/"
      />
    </div>
  </div>
</template>

<script setup>
import SimpleAnalyticsIcon from "~/components/images/SimpleAnalyticsIcon.vue";
import CookiebotIcon from "~/components/images/CookiebotIcon.vue";
import BackgroundChart from "~/components/images/BackgroundChart.vue";
import DuckDuckGoLogo from "~/components/logos/DuckDuckGo.vue";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const { t } = useI18n();

useHead({
  title: t("partners.cookiebot.page_title"),
  meta: [
    {
      name: "description",
      content: t("partners.cookiebot.page_description"),
    },
  ],
});

const router = useRouter();

// Cookie configuration with security settings
const partnerCookie = useCookie("partner", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
  maxAge: 2592000, // 30 days in seconds
  httpOnly: false, // Allow client-side access if needed
  default: () => null,
});

// Function to handle signup button click and set cookie
const handleSignupClick = () => {
  // Set the cookie value
  partnerCookie.value = "cookiebot";

  // Then proceed with the normal signup navigation
  navigateToWelcome(router, "click_signup_cookiebot");
};
</script>
