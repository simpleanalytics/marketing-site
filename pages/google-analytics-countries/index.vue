<template>
  <div class="px-4 mx-auto max-w-3xl">
    <div class="text-center mx-4">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("ga_countries.overview") }}
      </h1>
      <p class="mt-8 text-lg">
        {{ $t("ga_countries.overview_description") }}
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
        {{ $t("ga_countries.click_country_to_learn_more") }}
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
      {{ $t(`ga_countries.labels.${item.translation}`) }}
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
</template>

<script setup>
import {
  Switch,
  SwitchGroup,
  SwitchLabel,
  provideUseId,
} from "@headlessui/vue";
import Map from "@/components/Map.vue";

// Fix for hydration errors based on wrong IDs
// See https://github.com/tailwindlabs/headlessui/issues/2913
provideUseId(() => useId());

const router = useRouter();
const localePath = useLocalePath();
const { t } = useI18n();

const isGoogleAnalytics = ref(true);

const { articles } = await useArticle({
  routeName: "google-analytics-countries-slug",
  articleType: "google-analytics-countries",
  keys: ["metadata"],
});

const classes = {
  yes: "bg-red-500 fill-red-500 hover:fill-red-600 stroke-white dark:stroke-gray-800 hover:stroke-red-600",
  no: "bg-green-500 fill-green-500 hover:fill-green-600 stroke-white dark:stroke-gray-800 hover:stroke-green-600",
  maybe:
    "bg-yellow-500 fill-yellow-500 hover:fill-yellow-600 stroke-white dark:stroke-gray-800 hover:stroke-yellow-600",
  unknown:
    "bg-gray-300 dark:bg-gray-500 fill-gray-300 hover:fill-gray-400 stroke-white dark:stroke-gray-800 hover:stroke-gray-400",
};

const legend = [
  { class: "bg-red-500", translation: "forbidden" },
  { class: "bg-green-500", translation: "legal" },
  { class: "bg-yellow-500", translation: "pending_cases" },
  { class: "bg-gray-300 dark:bg-gray-500", translation: "not_researched" },
];

const fixedCountries = [
  {
    link: localePath({
      name: "blog-slug",
      params: {
        slug: "france-rules-google-analytics-to-be-in-conflict-with-gdpr-ruling",
      },
    }),
    locale: "fr",
    code: "fr",
    class: classes.yes,
  },
  {
    link: localePath({
      name: "blog-slug",
      params: { slug: "denmark-declares-google-analytics-unlawful" },
    }),
    locale: "en",
    code: "dk",
    class: classes.yes,
  },
  {
    link: localePath({
      name: "blog-slug",
      params: {
        slug: "hungarian-dpa-to-rule-against-google-analytics-according-to-gdprtoday",
      },
    }),
    locale: "en",
    code: "hu",
    class: classes.yes,
  },
  {
    link: localePath({
      name: "blog-slug",
      params: { slug: "italy-declares-google-analytics-illegal" },
    }),
    locale: "en",
    code: "it",
    class: classes.yes,
  },
  {
    link: localePath({
      name: "blog-slug",
      params: {
        slug: "finland-is-latest-eu-country-to-crack-down-on-google-analytics",
      },
    }),
    locale: "en",
    code: "fi",
    class: classes.yes,
  },
  {
    link: localePath({
      name: "blog-slug",
      params: { slug: "norway-takes-a-stance-against-google-analytics" },
    }),
    locale: "en",
    code: "no",
    class: classes.yes,
  },
  {
    link: localePath({
      name: "blog-slug",
      params: { slug: "sweden-declares-google-analytics-illegal" },
    }),
    locale: "en",
    code: "se",
    class: classes.yes,
  },
];

const countriesList = computed(() => {
  if (!articles?.value?.length) return fixedCountries;

  const fixedCountryCodes = fixedCountries.map(({ code }) => code);

  const databaseCountries = articles.value
    .map((country) => ({
      link: localePath({
        name: "google-analytics-countries-slug",
        params: { slug: country.slug },
      }),
      locale: country.locale,
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
    country.name = code ? t(`countries.${code}`) : code;
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
