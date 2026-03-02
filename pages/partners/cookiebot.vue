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
      <!-- Pre-header -->
      <p
        class="inline-block text-sm font-medium text-red-500 dark:text-red-600 mb-8 px-4 py-2 border border-red-500 dark:border-red-600 rounded-full bg-red-50 dark:bg-red-900/20"
      >
        Exclusive offer for Cookiebot CMP users
      </p>

      <!-- Main headline -->
      <h1
        class="max-w-5xl mx-auto leading-tight md:leading-tight text-4xl font-medium sm:text-5xl md:text-6xl mb-6"
      >
        Recover website insights lost to consent banners
      </h1>

      <!-- Subheader -->
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed sm:leading-relaxed mb-8"
      >
        Understand your visitors, even when cookies are declined, while staying
        privacy-compliant. Recover visibility on your lost traffic, starting at
        only
        <span class="relative inline-block"
          ><span
            class="absolute inset-0 bg-red-500 dark:bg-red-600 h-[3px] top-1/2 transform -translate-y-1/2 -rotate-12"
          ></span
          >{{ formattedOriginalPrice }}</span
        >
        {{ formattedDiscountedPrice }}/month.
      </p>
    </div>

    <div class="mt-6 text-center">
      <a class="button primary" @click="handleSignupClick">
        Claim your 50% discount
        <ArrowRightIcon class="ml-2 w-4 h-4 stroke-2" />
      </a>
    </div>

    <Brands
      class="mt-12 mb-8 flex flex-wrap justify-center items-center space-x-7"
    />

    <!-- Benefits Section -->
    <div class="max-w-4xl mx-auto px-6 mt-16 mb-16">
      <h2 class="text-2xl sm:text-3xl font-medium text-center mb-12">
        Simple, privacy-first website analytics
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Benefit 1 -->
        <div class="text-center">
          <EyeIcon
            class="w-12 h-12 mx-auto mb-4 stroke-red-500 dark:stroke-red-600"
          />
          <p class="text-base leading-relaxed">
            Understand visitor behavior even when cookies are declined
          </p>
        </div>

        <!-- Benefit 2 -->
        <div class="text-center">
          <ShieldCheckIcon
            class="w-12 h-12 mx-auto mb-4 stroke-red-500 dark:stroke-red-600"
          />
          <p class="text-base leading-relaxed">
            Improve marketing performance, stay GDPR compliant
          </p>
        </div>

        <!-- Benefit 3 -->
        <div class="text-center">
          <CogIcon
            class="w-12 h-12 mx-auto mb-4 stroke-red-500 dark:stroke-red-600"
          />
          <p class="text-base leading-relaxed">
            Easy setup, no complex dashboards, no learning curve
          </p>
        </div>
      </div>
    </div>

    <!-- Dashboard Screenshots with Overlay Button -->
    <div class="relative w-full max-w-4xl mx-auto">
      <img
        src="https://assets.simpleanalytics.com/press/screenshots/dashboard-light-chart.png"
        alt="Simple Analytics Dashboard"
        class="w-full rounded-lg shadow-xl dark:hidden"
        width="2400"
        height="1350"
        style="aspect-ratio: 2400 / 1350"
      />
      <img
        src="https://assets.simpleanalytics.com/press/screenshots/dashboard-dark-chart.png"
        alt="Simple Analytics Dashboard"
        class="w-full rounded-lg shadow-xl dark:block hidden"
        width="2400"
        height="1350"
        style="aspect-ratio: 2400 / 1350"
      />

      <!-- Overlay Demo Button -->
      <div class="absolute inset-0 flex items-center justify-center">
        <button
          @click="handleDemoClick"
          class="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2 dark:bg-red-600 dark:hover:bg-red-700"
        >
          View live demo
        </button>
      </div>
    </div>

    <ClientOnly>
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <BackgroundChart
          class="fill-blue-50 stroke-blue-500 dark:fill-gray-800"
        />
      </div>
    </ClientOnly>
  </section>

  <section
    class="bg-gradient-to-t from-blue-100 dark:from-gray-700 py-4 relative overflow-hidden pb-20"
  >
    <div class="max-w-7xl mx-auto mt-20">
      <!-- Discount Timeline -->
      <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-medium text-center mb-4">
          Get detailed website insights while staying GDPR-compliant
        </h2>

        <p class="text-center mb-8">
          <span
            class="inline-block text-lg text-red-500 dark:text-red-600 font-medium px-4 py-2 border border-red-500 dark:border-red-600 rounded-full bg-red-50 dark:bg-red-900/20"
          >
            Exclusive Cookiebot CMP Partner Offer
          </span>
        </p>

        <p class="text-center text-gray-600 dark:text-gray-400 mb-8">
          Create a new account and choose a plan within 2 weeks to get 50% off
          for 3 months. Or choose a plan within 1 month to get 25% off for 3
          months.
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
                Sign up
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
                2 weeks after sign up
              </div>
            </div>

            <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
              <div
                class="w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
              ></div>
              <div
                class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
              >
                1 month after
              </div>
            </div>
          </div>

          <!-- Colored sections below timeline -->
          <div class="mt-4 flex gap-4">
            <!-- 50% discount section (first half of timeline) -->
            <div class="flex-1">
              <div
                class="ml-1 h-2 bg-red-500 dark:bg-red-600 rounded-full"
              ></div>
              <div class="text-center mt-4">
                <div class="text-xl font-bold text-red-500 dark:text-red-600">
                  50% off for 3 months
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  (select a plan within 2 weeks)
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
                  25% off for 3 months
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  (select a plan within 4 weeks)
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Supporting text -->
        <p
          class="text-center text-gray-600 dark:text-gray-400 mt-12 max-w-lg mx-auto"
        >
          Start a free trial, choose any plan, and get instant value within the
          first 3 months. Available for a limited time. Claim your discount now.
        </p>
      </div>

      <!-- Sign Up Button -->
      <div class="text-center mt-10 mb-10">
        <a class="button large primary" @click="handleSignupClick">
          Unlock 50% Off - Start Trial
        </a>
      </div>

      <!-- Cookie Notice -->
      <div class="text-center pb-12">
        <p
          class="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed"
        >
          By clicking the button above, we will set a 30-day cookie to track
          this special offer. No personal data is collected during this process.
        </p>
      </div>
    </div>

    <ClientOnly>
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <BackgroundChart
          class="fill-blue-50 stroke-red-500 dark:fill-gray-800"
        />
      </div>
    </ClientOnly>
  </section>

  <div>
    <!-- Partnership Value Section -->
    <div class="max-w-4xl mx-auto px-6 mt-20">
      <h2 class="text-2xl sm:text-3xl font-medium text-center mb-4">
        Why add SimpleAnalytics to Cookiebot CMP?
      </h2>
      <p class="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">
        Simple Analytics adds visibility to the traffic that would otherwise
        disappear.
      </p>

      <div class="grid md:grid-cols-2 gap-8 items-start">
        <!-- Cookiebot Column -->
        <div class="text-center">
          <div class="h-16 flex items-center justify-center mb-6">
            <CookiebotIcon class="h-16 w-auto" />
          </div>
          <p class="text-base leading-relaxed">
            Maintain consent coverage, Cookiebot continues to manage consent.
          </p>
        </div>

        <!-- SimpleAnalytics Column -->
        <div class="text-center">
          <div class="h-16 flex items-center justify-center mb-6">
            <SimpleAnalyticsTextIcon
              class="h-16 w-auto fill-gray-100 dark:fill-gray-700"
            />
          </div>
          <p class="text-base leading-relaxed">
            Get a more complete picture of your traffic, reveal user behavior,
            events, and conversion funnels for visitors who declined cookies.
            Since no personal data is stored, you remain GDPR compliant.
          </p>
        </div>
      </div>
    </div>

    <!-- Hebban Case Study Section -->
    <div class="max-w-4xl mx-auto px-6 mt-20">
      <p class="text-xl text-center leading-relaxed mb-8">
        <strong>Want proof of value?</strong> Find out how Hebban recovered a
        20% data gap from rejected cookies, turning limited views into a
        clearer, compliant understanding of their audience.
      </p>

      <div class="bg-gray-50 dark:bg-gray-700 rounded-xl px-8 py-6">
        <h3 class="text-lg font-medium text-center mb-6">
          The numbers don't lie
        </h3>

        <img
          src="https://assets.simpleanalytics.com/images/partners/hebban-use-case-light.jpg"
          alt="Hebban Case Study"
          class="w-full rounded-lg mx-auto mb-4 shadow-xl"
          width="1053"
          height="480"
          loading="lazy"
          style="aspect-ratio: 1053 / 480"
        />

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="text-center">
            <div class="text-xl text-gray-600 dark:text-gray-400">
              Google Analytics: 1.6M pageviews
            </div>
          </div>
          <div class="text-center">
            <div class="text-xl text-red-500 dark:text-red-600">
              Simple Analytics: 2.03M pageviews
            </div>
          </div>
        </div>

        <div class="text-center mb-6">
          <div class="text-xl font-bold text-red-500 dark:text-red-600">
            Difference: +431,468 pageviews (20% data gap)
          </div>
        </div>

        <p class="text-center text-gray-600 dark:text-gray-400 leading-relaxed">
          Simple Analytics doesn't use cookies or trackers, so it doesn't
          require consent to collect data. This means you can track all
          visitors, even those who decline cookies or use ad-blockers.
        </p>
      </div>
    </div>

    <!-- Final CTA Section -->
    <div class="max-w-4xl mx-auto px-6 mt-20 mb-16 text-center">
      <h2 class="text-2xl sm:text-3xl font-medium mb-4">
        Ready to see what you've been missing?
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Gain insights from all visitors, reduce blind spots while staying
        privacy-compliant, and unlock exclusive savings: 50% off for 3 months,
        starting at
        <span class="relative inline-block"
          ><span
            class="absolute inset-0 bg-red-500 dark:bg-red-600 h-[3px] top-1/2 transform -translate-y-1/2 -rotate-12"
          ></span
          >{{ formattedOriginalPrice }}</span
        >
        {{ formattedDiscountedPrice }}/month.
      </p>

      <!-- Live Demo Section -->
      <div class="mb-8">
        <h3 class="text-xl font-medium mb-4">
          See it in action:
          <a @click="handleDemoClick" class="underline"> Try the live demo </a>
        </h3>
      </div>

      <div class="relative">
        <img
          src="https://assets.simpleanalytics.com/press/screenshots/dashboard-light-chart.png"
          alt="Simple Analytics Dashboard"
          class="w-full rounded-lg shadow-xl dark:hidden"
          width="2400"
          height="1350"
          style="aspect-ratio: 2400 / 1350"
        />
        <img
          src="https://assets.simpleanalytics.com/press/screenshots/dashboard-dark-chart.png"
          alt="Simple Analytics Dashboard"
          class="w-full rounded-lg shadow-xl dark:block hidden"
          width="2400"
          height="1350"
          style="aspect-ratio: 2400 / 1350"
        />

        <!-- Overlay Demo Button -->
        <div class="absolute inset-0 flex items-center justify-center">
          <button
            @click="handleDemoClick"
            class="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2 dark:bg-red-600 dark:hover:bg-red-700"
          >
            View live demo
          </button>
        </div>
      </div>

      <!-- Final CTA Button -->
      <a class="mt-10 button large primary" @click="handleSignupClick">
        Claim your discount today
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import SimpleAnalyticsIcon from "~/components/images/SimpleAnalyticsIcon.vue";
import CookiebotIcon from "~/components/images/CookiebotIcon.vue";
import BackgroundChart from "~/components/images/BackgroundChart.vue";
import SimpleAnalyticsTextIcon from "~/components/images/SimpleAnalyticsTextIcon.vue";

import {
  ArrowRightIcon,
  EyeIcon,
  ShieldCheckIcon,
  CogIcon,
} from "@heroicons/vue/24/outline";

const currency = useCurrency();

const formattedOriginalPrice = computed(() =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
  }).format(15),
);

const formattedDiscountedPrice = computed(() =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
  }).format(7.5),
);

useHead({
  title: "Simple Analytics for Cookiebot Users",
  meta: [
    {
      name: "description",
      content:
        "Special offer for Cookiebot users switching to Simple Analytics: up to 50% off for 3 months. Privacy-first analytics without cookie banners.",
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

// Function to handle demo button click and set cookie
const handleDemoClick = () => {
  // Set the cookie value
  partnerCookie.value = "cookiebot";

  // Redirect to live demo with tracking parameters
  window.open(
    "https://dashboard.simpleanalytics.com/simpleanalytics.com?utm_source=cookiebot&utm_medium=partner&utm_campaign=landing_page_demo",
    "_blank",
  );
};
</script>
