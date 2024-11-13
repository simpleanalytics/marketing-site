<template>
  <div class="-mt-28 flex lg:items-center flex-grow">
    <div class="flex flex-grow max-w-7xl mx-auto">
      <div class="w-1/2 mr-12 hidden lg:block">
        <NuxtLink
          :to="localePath({ name: 'index' })"
          class="items-center inline-flex mb-4"
        >
          <SimpleAnalyticsIcon class="h-5 w-auto sm:h-6" />
          <span
            class="sm:hidden lg:block ml-3 text-xl sm:text-2xl text-gray-500 dark:text-gray-400"
          >
            Simple Analytics
          </span>
        </NuxtLink>

        <TestimonialMini
          class="mb-4"
          image="https://assets.simpleanalytics.com/images/people/philippe.png"
          title="Philippe Lehoux"
          iconclass="fill-blue-200 dark:fill-gray-700"
          :subtitle="$t('testimonials.missive.role')"
          :quote="$t('testimonials.missive.quote_short', tColorsBlue)"
          subtitlelink="https://missiveapp.com/blog/privacy-first-analytics"
        />

        <ul class="mt-6 space-y-4">
          <li class="flex items-center">
            <ChartBarIcon
              class="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400"
            />
            <span>Straightforward dashboard to get the insights you need</span>
          </li>
          <li class="flex items-center">
            <ShieldCheckIcon
              class="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400"
            />
            <span>GDPR-Compliant 'out-of-the-box'</span>
          </li>
          <li class="flex items-center">
            <NoSymbolIcon
              class="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400"
            />
            <span>No cookie banner required</span>
          </li>
          <li class="flex items-center">
            <SparklesIcon
              class="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400"
            />
            <span>Start for free (forever). No credit card required</span>
          </li>
        </ul>

        <div class="mt-4 mb-0 flex flex-wrap items-center space-x-7">
          <Tooltip text="Mollie" class="group">
            <NuxtLink href="https://www.mollie.com/" target="_blank">
              <LogosMollie class="h-5 my-3" />
            </NuxtLink>
          </Tooltip>
          <Tooltip text="Bloomberg" class="group">
            <NuxtLink href="https://www.bloomberg.com/" target="_blank">
              <LogosBloomberg class="h-6 my-3 translate-y-[20%]" />
            </NuxtLink>
          </Tooltip>
          <Tooltip text="Michelin" class="group">
            <NuxtLink href="https://www.michelin.com/" target="_blank">
              <LogosMichelin class="h-8 my-3" />
            </NuxtLink>
          </Tooltip>
          <Tooltip text="Hyundai" class="group">
            <NuxtLink href="https://www.hyundai.com/" target="_blank">
              <LogosHyundai class="h-8 my-3" />
            </NuxtLink>
          </Tooltip>
          <Tooltip text="GOV.UK" class="group">
            <NuxtLink href="https://www.gov.uk/" target="_blank">
              <LogosGovUK class="h-9 my-3" />
            </NuxtLink>
          </Tooltip>
          <Tooltip text="Polkadot" class="group">
            <NuxtLink href="https://polkadot.network/" target="_blank">
              <LogosPolkadot class="h-6 my-3" />
            </NuxtLink>
          </Tooltip>
        </div>
      </div>

      <div class="lg:w-1/2 lg:ml-12 mx-4 lg:mx-0">
        <NuxtLink
          :to="localePath({ name: 'index' })"
          class="items-center inline-flex mb-4 lg:hidden"
        >
          <SimpleAnalyticsIcon class="h-5 w-auto sm:h-6" />
          <span
            class="sm:hidden lg:block ml-3 text-xl sm:text-2xl text-gray-500 dark:text-gray-400"
          >
            Simple Analytics
          </span>
        </NuxtLink>

        <SignupStep1 class="w-full" @next="next" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SignupStep1 from "~/components/SignupStep1.vue";
import {
  ChartBarIcon,
  NoSymbolIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/vue/24/outline";
import TestimonialMini from "~/components/TestimonialMini.vue";
import SimpleAnalyticsIcon from "~/components/images/SimpleAnalyticsIcon.vue";
const tColorsBlue = [
  `<span class='text-blue-600 dark:text-blue-700'>`,
  `</span>`,
];

const router = useRouter();
const localePath = useLocalePath();

const next = () => {
  router.push("/signup/get-to-know-each-other");
};
</script>
