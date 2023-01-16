<template>
  <div class="px-4 mx-auto max-w-3xl">
    <div class="text-center mx-4">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("ga_countries.overview") }}
      </h1>
      <p class="mt-8 text-lg">
        {{ $t("ga_countries.overview_description") }}
      </p>

      <ul class="flex flex-wrap items-center justify-center mx-2 mt-6">
        <li
          class="inline-flex mx-2 my-2"
          v-for="item of legend"
          :key="item.class"
        >
          <div
            :class="item.class"
            class="w-6 h-6 rounded-full mr-2 flex-none"
          ></div>
          {{ $t(`ga_countries.labels.${item.translation}`) }}
        </li>
      </ul>
    </div>
  </div>

  <Map
    class="mt-6 mb-6"
    @click:country="clickedCountry"
    :countries="countries"
  />

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
  ChartBarSquareIcon,
  ComputerDesktopIcon,
} from "@heroicons/vue/24/outline";

import GoogleAnalyticsIcon from "@/components/icons/GoogleAnalytics.vue";
import Arrow from "@/components/Arrow.vue";
import Map from "@/components/Map.vue";
import { categories } from "@/data/glossary";
import transformer from "@/utils/transformer";

const router = useRouter();
const localePath = useLocalePath();
const route = useRoute();
const { t, locale } = useI18n();

const {
  public: { BASE_URL },
} = useRuntimeConfig();

const url = new URL("/api/cms", BASE_URL);
url.searchParams.set("path", "/articles");
url.searchParams.set("locale", "all");
url.searchParams.set("filters[articleType][$eq]", "google-analytics-countries");
url.searchParams.set("populate[0]", "localizations");
url.searchParams.set("pagination[pageSize]", "100");

const { data, pending, error } = await useFetch(url.toString(), {
  key: `articles-locale-${locale.value}`,
  transform: ({ data }) =>
    transformer({
      data,
      locale: locale.value,
      keys: ["slug", "locale", "metadata"],
    }),
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
  { class: "bg-yellow-500", translation: "likely_to_be_forbidden" },
  { class: "bg-gray-300 dark:bg-gray-500", translation: "not_researched" },
];

const fixedCountries = [
  {
    link:
      locale.value === "nl"
        ? localePath(
            `/blog/frankrijk-oordeelt-dat-google-analytics-in-strijd-is-met-gdpr-uitspraak`
          )
        : locale.value === "fr"
        ? localePath(
            `/blog/la-france-juge-que-google-analytics-est-en-contradiction-avec-le-reglement-rgpd`
          )
        : localePath(
            `/blog/france-rules-google-analytics-to-be-in-conflict-with-gdpr-ruling`
          ),
    locale: "fr",
    code: "fr",
    class: classes.yes,
  },
  {
    link: localePath(`/blog/denmark-declares-google-analytics-unlawful`),
    locale: "en",
    code: "dk",
    class: classes.yes,
  },
  {
    link: localePath(
      `/blog/hungarian-dpa-to-rule-against-google-analytics-according-to-gdprtoday`
    ),
    locale: "en",
    code: "hu",
    class: classes.yes,
  },
  {
    link: localePath(`/blog/italy-declares-google-analytics-illegal`),
    locale: "en",
    code: "it",
    class: classes.yes,
  },
];

const countriesList = computed(() => {
  if (!data?.value?.length) return fixedCountries;

  const databaseCountries = data.value.map((country) => ({
    link: localePath(`/google-analytics-countries/${country.slug}`),
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
  }));

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
      country.code && code && country.code?.toLowerCase() === code.toLowerCase()
  );
  if (!found) return;
  router.push({ path: found.link });
};
</script>