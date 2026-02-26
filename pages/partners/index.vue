<template>
  <div>
    <!-- Hero Section -->
    <div class="text-center px-6">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        Simple Analytics Partners
      </h1>
      <p class="mt-4 text-lg max-w-3xl mx-auto">
        Join our partner program and earn recurring commissions while helping
        businesses adopt privacy-first analytics.
      </p>
      <div class="mt-8">
        <span class="text-3xl font-bold text-red-500 dark:text-red-600">
          30% recurring commission*
        </span>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          *up to $225 per month per new customer
        </p>
      </div>

      <!-- CTA Buttons -->
      <div
        class="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a href="https://dashboard.simpleanalytics.com/contact" class="button">
          Become a Partner
        </a>
        <a
          href="https://cal.com/ironbrands/partner-program-intro"
          class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          <VideoCameraIcon class="w-5 h-5 mr-2" />
          Have questions? Book a call
        </a>
      </div>
    </div>

    <!-- Share Privacy-First Analytics Section -->
    <div class="max-w-4xl mx-auto px-6 mt-16">
      <div class="text-center">
        <h2 class="text-3xl font-medium mb-6">
          Help convert more businesses to privacy-first analytics
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          You convert more businesses to privacy-first analytics, we share our
          revenue with you. Making the web a better place for everyone.
        </p>
      </div>
    </div>

    <!-- Our Top Partners Section -->
    <div
      class="max-w-5xl mx-auto px-6 mt-16"
      v-if="featuredPartners.length >= 3"
    >
      <h3 class="text-2xl font-medium text-center mb-8">
        Our featured partners
      </h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="partner in featuredPartners"
          :key="partner.slug"
          class="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 text-center"
        >
          <div class="h-20 mb-4 flex items-center justify-center">
            <img
              v-if="partner.logo"
              :src="partner.logo.url"
              :alt="partner.logo.alt"
              class="max-h-full max-w-full object-contain"
            />
            <div
              v-else
              class="h-full w-full bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center"
            >
              <span class="text-gray-500 text-sm">{{ partner.name }}</span>
            </div>
          </div>
          <h4 class="font-medium mb-2">{{ partner.name }}</h4>
          <p
            v-if="partner.intro"
            class="text-sm text-gray-600 dark:text-gray-400 mb-3"
            v-html="partner.intro"
          />
          <a
            :href="`${partner.websiteUrl}${partner.websiteUrl.includes('?') ? '&' : '?'}utm_source=simpleanalytics.com`"
            target="_blank"
            rel="noopener"
            class="text-sm text-red-500 dark:text-red-600 hover:underline"
          >
            Visit website
          </a>
        </div>
      </div>
      <div class="text-center mt-6">
        <a
          href="#all-partners"
          class="text-sm text-gray-600 dark:text-gray-400 underline"
        >
          View all partners
        </a>
      </div>
    </div>

    <!-- How to Enroll Section -->
    <div class="max-w-4xl mx-auto px-6 mt-20">
      <h2 class="text-3xl font-medium text-center mb-12">
        How to enroll in the partner program
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div
            class="w-16 h-16 bg-red-500 dark:bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-white text-2xl font-bold">1</span>
          </div>
          <h3 class="text-xl font-medium mb-3">Create a partner account</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Contact us to sign up for our partner program and get your unique
            referral link.
          </p>
        </div>
        <div class="text-center">
          <div
            class="w-16 h-16 bg-red-500 dark:bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-white text-2xl font-bold">2</span>
          </div>
          <h3 class="text-xl font-medium mb-3">Refer Simple Analytics</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Share your referral link with clients and contacts who need
            privacy-first analytics.
          </p>
        </div>
        <div class="text-center">
          <div
            class="w-16 h-16 bg-red-500 dark:bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-white text-2xl font-bold">3</span>
          </div>
          <h3 class="text-xl font-medium mb-3">Earn recurring commissions</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Get 30% recurring commission for your referred customers.
          </p>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="max-w-4xl mx-auto px-6 mt-20">
      <h2 class="text-3xl font-medium text-center mb-12">
        Frequently asked questions
      </h2>
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-medium mb-3">What is the commission rate?</h3>
          <p class="text-gray-600 dark:text-gray-400">
            We offer a 30% recurring commission. This means that you will earn
            30% of the monthly subscription fee for as long as the customer
            remains a customer. We have a limit of $225 per month per new
            customer. This means that for a customer that pays $750 or more per
            month, you will earn $225 per month.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-medium mb-3">
            How and when will I get paid?
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            We send payments through wire transfer or PayPal. Payments are made
            quarterly if your commission is more than $100. You can request a
            payment at any time when it's more than $100.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-medium mb-3">
            What are the requirements to become a partner?
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            We only do business with companies that run an ethical business.
            Apart from that, we don't want partners to use ad-networks (like
            Google or Meta) to promote Simple Analytics. Running paid campaigns
            is not allowed.
            <a
              href="https://dashboard.simpleanalytics.com/contact"
              class="text-red-500 dark:text-red-600 hover:underline"
            >
              Apply now
            </a>
          </p>
        </div>
      </div>
    </div>

    <!-- All Partners Section -->
    <div
      id="all-partners"
      class="max-w-6xl mx-auto px-6 mt-20"
      v-if="partners.length > 0"
    >
      <h2 class="text-3xl font-medium text-center mb-12">All partners</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="partner in partners"
          :key="partner.slug"
          class="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 text-center"
        >
          <div class="h-16 mb-3 flex items-center justify-center">
            <img
              v-if="partner.logo"
              :src="partner.logo.url"
              :alt="partner.logo.alt"
              class="max-h-full max-w-full object-contain"
            />
            <div
              v-else
              class="h-full w-full bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center"
            >
              <span class="text-gray-500 text-xs">{{ partner.name }}</span>
            </div>
          </div>
          <h4 class="font-medium text-sm mb-2">{{ partner.name }}</h4>
          <p
            v-if="partner.intro"
            class="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2"
            v-html="partner.intro"
          />
          <a
            :href="`${partner.websiteUrl}${partner.websiteUrl.includes('?') ? '&' : '?'}utm_source=simpleanalytics.com`"
            target="_blank"
            rel="noopener"
            class="text-xs text-red-500 dark:text-red-600 hover:underline"
          >
            Visit website
          </a>
        </div>
      </div>
    </div>

    <!-- Join Partner Program Banner -->
    <div class="max-w-4xl mx-auto px-6 mt-20 mb-16">
      <div
        class="bg-red-500 dark:bg-red-600 rounded-lg p-8 text-center text-white"
      >
        <h2 class="text-2xl font-medium mb-4">
          Join the partner program today
        </h2>
        <a
          href="https://dashboard.simpleanalytics.com/contact"
          class="inline-block bg-white text-red-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Become a Partner
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VideoCameraIcon } from "@heroicons/vue/24/outline";

definePageMeta({
  title: "Partners",
  description:
    "Discover our trusted partners and explore partnership opportunities with Simple Analytics",
});

useSeoMeta({
  title: "Partners - Simple Analytics",
  ogTitle: "Partners - Simple Analytics",
  description:
    "Discover our trusted partners and explore partnership opportunities with Simple Analytics",
  ogDescription:
    "Discover our trusted partners and explore partnership opportunities with Simple Analytics",
});

// Fetch partners data from our new API endpoint
const { data: partnersData } = await useFetch("/api/partners");

const partners = computed(() => partnersData.value?.partners || []);
const featuredPartners = computed(() => partnersData.value?.featured || []);

onMounted(() => {
  if (import.meta.client && window.sa_event) sa_event("visit_partners");
});
</script>
