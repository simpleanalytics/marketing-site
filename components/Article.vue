<template>
  <div>
    <div class="max-w-5xl pt-4 px-4 mx-auto">
      <div class="text-center mb-8">
        <slot name="pretitle"></slot>

        <slot name="title">
          <h1
            class="mt-4 text-4xl font-medium sm:text-5xl md:text-6xl md:leading-normal sm:leading-normal"
          >
            <span v-if="article?.question">{{ article.question }}</span>
            <span v-else-if="article?.title">{{ article.title }}</span>
            <span v-else>{{ $t("blog.article_not_found") }}</span>
          </h1>
        </slot>

        <p
          v-if="
            article.slug &&
            article.locale !== 'en' &&
            article.automaticTranslated !== false
          "
          class="inline-block mt-6 px-4 py-2 rounded-lg bg-[#ffd9cb] dark:bg-[#592b1b]"
        >
          <template v-if="parts.length === 3">
            {{ parts[0] }}
            <NuxtLink
              class="dark:text-gray-300 text-gray-700 underline"
              :to="toEnglish"
            >
              {{ parts[1] }}
            </NuxtLink>
            {{ parts[2] }}
          </template>
          <template v-else>
            {{ $t("blog.automatic_translated_switch_to_english") }}
          </template>
        </p>
        <p
          v-else-if="article.locale !== locale && locale !== 'en'"
          class="inline-block mt-6 px-4 py-2 rounded-lg bg-[#ffd9cb] dark:bg-[#592b1b]"
        >
          {{ $t("blog.content_not_translated") }}
        </p>
        <p v-else-if="!article.contentHtml" class="mt-6">
          <NuxtLink class="button" :to="{ name: 'glossary' }"
            >{{ $t("glossary.overview") }}
          </NuxtLink>
        </p>
      </div>
    </div>

    <div class="max-w-3xl pb-4 px-4 mx-auto" v-if="article.contentHtml">
      <HtmlBlock :html="article.contentHtml" />
    </div>

    <SubscribePopup />
  </div>
</template>

<script setup>
const props = defineProps(["type", "name", "slug", "articleType"]);

import { categories } from "@/data/glossary";
import SubscribePopup from "@/components/SubscribePopup.vue";
import HtmlBlock from "@/components/HtmlBlock.vue";

const route = useRoute();
const { t, locale } = useI18n();
const localePath = useLocalePath();

const { article } = await useArticle({
  keys: ["contentHtml", "languages", "question", "content"],
  routeName: props.name,
  slug: props.slug,
  articleType: props.articleType,
  type: props.type,
});

if (!article?.value && process.server) {
  setResponseStatus(404, "Page Not Found");
}

const parts = t("blog.automatic_translated_switch_to_english", [
  "---",
  "---",
]).split("---");

const toEnglish = localePath({ name: props.name, params: route.params }, "en");

const routeParts = props.name
  .replace(/key\-terms/, "keyterms")
  .replace(/google\-analytics\-countries/, "googleanalyticscountries")
  .split("-");

const breadcrumb = {
  itemListElement: routeParts.reduce(
    (acc, part) => {
      const page =
        part === "keyterms"
          ? "key-terms"
          : part === "googleanalytics"
          ? "google-analytics"
          : part;
      const sliced = routeParts.slice(0, routeParts.indexOf(part) + 1);
      const pathName = sliced
        .join("-")
        .replace(/keyterms/, "key-terms")
        .replace(/googleanalyticscountries/, "google-analytics-countries");

      const localeRoute = { name: pathName, params: {} };

      if (route.params.category)
        localeRoute.params.category = route.params.category;
      if (part === "slug" && route.params.slug)
        localeRoute.params.slug = route.params.slug;

      if (page === "category") {
        const category = categories.find(
          ({ category }) => category === route.params.category
        );
        acc.push({
          name: category?.titleTranslation
            ? t(category.titleTranslation)
            : route.params.category,
          item: localePath(localeRoute),
        });
      } else if (page === "glossary") {
        acc.push({
          name: t("glossary.title"),
          item: localePath(localeRoute),
        });
      } else if (page === "googleanalyticscountries") {
        acc.push({
          name: t("ga_countries.overview"),
          item: localePath(localeRoute),
        });
      } else if (page === "slug") {
        acc.push({
          name: article?.value.question || article?.value.title,
          item: localePath(localeRoute),
        });
      } else if (page === "key-terms") {
        acc.push({
          name: t("glossary.key_terms_title"),
          item: localePath(localeRoute),
        });
      } else {
        acc.push({ name: page, item: localePath(localeRoute) });
      }

      return acc;
    },
    [{ name: "Home", item: localePath({ name: "index" }) }]
  ),
};

if (article?.value?.question) {
  useSchemaOrg([
    defineWebPage({ "@type": "FAQPage" }),
    defineQuestion({
      name: article.value.question,
      acceptedAnswer: article.value.content,
    }),
    defineBreadcrumb(breadcrumb),
  ]);
} else {
  useSchemaOrg([defineBreadcrumb(breadcrumb)]);
}
</script>
