<template>
  <div class="px-4 mx-auto max-w-3xl">
    <div class="text-center mx-4">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        Countries where Google Analytics is declared illegal
      </h1>
      <p class="mt-8 text-lg">
        In some countries, Google Analytics is declared illegal. This is because
        Google Analytics is not GDPR-compliant. In these countries, you can use
        Simple Analytics instead. We are GDPR-compliant, and we don't use
        cookies.
      </p>

      <SwitchGroup as="div" class="flex items-center justify-center mt-6">
        <SwitchLabel as="p" class="mr-3">
          <span>Simple Analytics</span>
        </SwitchLabel>
        <Switch
          v-model="isGoogleAnalytics"
          :class="[
            isGoogleAnalytics
              ? 'bg-red-500 dark:bg-red-600 focus:ring-red-500 dark:focus:ring-red-600'
              : 'bg-gray-200 dark:bg-gray-600 focus:ring-green-500 dark:focus:ring-green-600',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-700',
          ]"
        >
          <span
            aria-hidden="true"
            :class="[
              isGoogleAnalytics ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-300 shadow ring-0 transition duration-200 ease-in-out',
            ]"
          />
        </Switch>
        <SwitchLabel as="p" class="ml-3">
          <span>Google Analytics</span>
        </SwitchLabel>
      </SwitchGroup>

      <p class="mt-6" :class="isGoogleAnalytics ? '' : 'invisible'">
        Click on a country to learn more.
      </p>
    </div>
  </div>

  <Map
    class="mt-6 mb-6"
    :allGreen="!isGoogleAnalytics"
    @click:country="clickedCountry"
    :countries="countries"
  />

  <ul class="flex flex-wrap items-center justify-center mx-2 mb-10">
    <li class="inline-flex mx-2 my-2" v-for="item of legend" :key="item.class">
      <div
        :class="item.class"
        class="w-6 h-6 rounded-full mr-2 flex-none"
      ></div>
      {{ item.label }}
    </li>
  </ul>

  <div class="px-4 mx-auto max-w-4xl" v-if="countries.length">
    <div class="flex flex-wrap items-center justify-center mx-2 mt-6">
      <NuxtLink
        v-for="country in countries"
        :key="country.code"
        :to="country.link"
        class="inline-flex mx-2 my-2 group"
      >
        <div
          :class="country.class"
          class="w-6 h-6 rounded-full mr-2 flex-none"
        ></div>
        <p class="group-hover:underline">{{ country.name }}</p>
      </NuxtLink>
    </div>
  </div>

  <p v-if="status === 'pending'" class="text-center">Loading...</p>
</template>

<script setup>
import {
  Switch,
  SwitchGroup,
  SwitchLabel,
  provideUseId,
} from "@headlessui/vue";
import Map from "@/components/Map.vue";
import { COUNTRIES } from "~/utils/consts";

// Fix for hydration errors based on wrong IDs
// See https://github.com/tailwindlabs/headlessui/issues/2913
provideUseId(() => useId());

const router = useRouter();

const isGoogleAnalytics = ref(true);

const { data: articlesData, status } = await useArticle({
  routeName: "google-analytics-countries",
  articleType: "google-analytics-countries",
});

const articles = computed(() => articlesData.value?.articles || []);

const classes = {
  yes: "bg-red-500 fill-red-500 hover:fill-red-600 stroke-white dark:stroke-gray-800 hover:stroke-red-600",
  no: "bg-green-500 fill-green-500 hover:fill-green-600 stroke-white dark:stroke-gray-800 hover:stroke-green-600",
  maybe:
    "bg-yellow-500 fill-yellow-500 hover:fill-yellow-600 stroke-white dark:stroke-gray-800 hover:stroke-yellow-600",
  unknown:
    "bg-gray-300 dark:bg-gray-500 fill-gray-300 hover:fill-gray-400 stroke-white dark:stroke-gray-800 hover:stroke-gray-400",
};

const legend = [
  { class: "bg-red-500", label: "Forbidden" },
  { class: "bg-green-500", label: "Legal" },
  { class: "bg-yellow-500", label: "Pending cases" },
  { class: "bg-gray-300 dark:bg-gray-500", label: "Not researched" },
];

const fixedCountries = [
  {
    link: "/blog/france-rules-google-analytics-to-be-in-conflict-with-gdpr-ruling",
    code: "fr",
    class: classes.yes,
  },
  {
    link: "/blog/denmark-declares-google-analytics-unlawful",
    code: "dk",
    class: classes.yes,
  },
  {
    link: "/blog/hungarian-dpa-to-rule-against-google-analytics-according-to-gdprtoday",
    code: "hu",
    class: classes.yes,
  },
  {
    link: "/blog/italy-declares-google-analytics-illegal",
    code: "it",
    class: classes.yes,
  },
  {
    link: "/blog/finland-is-latest-eu-country-to-crack-down-on-google-analytics",
    code: "fi",
    class: classes.yes,
  },
  {
    link: "/blog/norway-takes-a-stance-against-google-analytics",
    code: "no",
    class: classes.yes,
  },
  {
    link: "/blog/sweden-declares-google-analytics-illegal",
    code: "se",
    class: classes.yes,
  },
];

const countriesList = computed(() => {
  if (!articles?.value?.length) return fixedCountries;

  const fixedCountryCodes = fixedCountries.map(({ code }) => code);

  const databaseCountries = articles.value
    .map((country) => ({
      link: `/google-analytics-illegal/${country.slug}`,
      code: country.metadata?.country_code,
      class:
        country.metadata?.illegal === "yes"
          ? classes.yes
          : country.metadata?.illegal === "no"
            ? classes.no
            : country.metadata?.illegal === "maybe"
              ? classes.maybe
              : classes.unknown,
    }))
    .filter(({ code }) => !fixedCountryCodes.includes(code));

  return [...fixedCountries, ...databaseCountries];
});

const countries = computed(() => {
  const list = countriesList.value.map((country) => {
    const code = country?.code?.toUpperCase();
    country.name = code ? COUNTRIES[code] : code;
    return country;
  });

  // sort list by country code
  list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return list;
});

const clickedCountry = ({ code }) => {
  if (!code) return;
  if (!countries?.value?.length) return;
  const found = countries.value.find(
    (country) =>
      country.code &&
      code &&
      country.code?.toLowerCase() === code.toLowerCase(),
  );
  if (!found) return;
  router.push(found.link);
};
</script>
