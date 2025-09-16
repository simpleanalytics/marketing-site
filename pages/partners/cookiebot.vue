<template>
  <div class="max-w-7xl mx-auto px-6">
    <!-- Two Logos Section -->
    <div
      class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 py-12"
    >
      <div class="flex items-center">
        <SimpleAnalyticsIcon class="h-12 w-auto" />
        <span class="ml-3 text-xl font-medium text-gray-500 dark:text-gray-400">
          Simple Analytics
        </span>
      </div>
      <div class="text-2xl text-gray-400">+</div>
      <div class="flex items-center">
        <CookiebotIcon class="h-12 w-auto" />
      </div>
    </div>

    <!-- Marketing Text -->
    <div class="text-center py-12">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl mb-6">
        <span class="text-red-500 dark:text-red-600">Simple Analytics</span> for
        Cookiebot users
      </h1>
      <p
        class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
      >
        {{ $t("partners.cookiebot.subtitle") }}
      </p>
    </div>

    <!-- Discount Offers -->
    <div
      class="bg-gradient-to-t from-blue-100 dark:from-gray-700 rounded-lg p-8 mb-12"
    >
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-medium text-center mb-8">
          {{ $t("partners.cookiebot.special_offer_title") }}
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- 2 Week Offer -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-red-500 dark:border-red-600"
          >
            <div class="text-center">
              <div
                class="text-3xl font-bold text-red-500 dark:text-red-600 mb-2"
              >
                {{ $t("partners.cookiebot.offer_50_percent") }}
              </div>
              <div class="text-lg font-medium mb-2">
                {{ $t("partners.cookiebot.for_3_months") }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ $t("partners.cookiebot.sign_up_within_2_weeks") }}
              </div>
            </div>
          </div>

          <!-- 1 Month Offer -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-600"
          >
            <div class="text-center">
              <div
                class="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-2"
              >
                {{ $t("partners.cookiebot.offer_25_percent") }}
              </div>
              <div class="text-lg font-medium mb-2">
                {{ $t("partners.cookiebot.for_3_months") }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ $t("partners.cookiebot.sign_up_within_1_month") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sign Up Button -->
    <div class="text-center py-8">
      <a class="button large primary" @click="handleSignupClick">
        {{ $t("partners.cookiebot.start_trial_button") }}
      </a>
    </div>

    <!-- Cookie Notice -->
    <div class="text-center pb-12">
      <p class="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
        {{ $t("partners.cookiebot.cookie_notice") }}
      </p>
    </div>
  </div>
</template>

<script setup>
import SimpleAnalyticsIcon from "~/components/images/SimpleAnalyticsIcon.vue";
import CookiebotIcon from "~/components/images/CookiebotIcon.vue";

definePageMeta({
  title: "Simple Analytics for Cookiebot Users",
  description:
    "Special offer for Cookiebot users switching to Simple Analytics - up to 50% off for 3 months. Privacy-first analytics without cookie banners.",
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
