<template>
  <div>
    <div class="max-w-5xl pt-4 px-4 mx-auto">
      <div class="text-center mb-8">
        <slot name="pretitle"></slot>

        <slot name="title">
          <h1
            class="mt-4 text-4xl font-medium sm:text-5xl md:text-6xl md:leading-normal sm:leading-normal"
            v-if="!props.hideTitle"
          >
            <span v-if="article?.question">{{ article.question }}</span>
            <span v-else-if="article?.title">{{ article.title }}</span>
            <span v-else-if="error?.statusCode === 429">
              {{ $t("general.httpcodes.429.title") }}
            </span>
            <p v-else-if="error?.statusMessage" class="my-4 mb-8">
              {{ error?.statusMessage }}.
            </p>
            <span v-else-if="error">{{
              $t("general.errors.an_error_happened")
            }}</span>
            <span v-else>{{ $t("blog.article_not_found") }}</span>
          </h1>
        </slot>

        <!-- Show published date with avatar -->
        <div
          class="flex items-center justify-center mt-4"
          v-if="
            article &&
            article.authorSlug &&
            article.publishedAt &&
            !props.hideAuthor
          "
        >
          <div class="flex items-center">
            <Avatar :slug="article.authorSlug" />
            <div class="ml-2" v-if="article.publishedAt">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{
                  showEditedBy
                    ? $t("blog.published_and_edited_on_by", [
                        format(article.publishedAt),
                        format(article.updatedAt),
                        getAuthorFromSlug(article.authorSlug)?.name,
                      ])
                    : $t("blog.published_on_by", [
                        format(article.publishedAt),
                        getAuthorFromSlug(article.authorSlug)?.name,
                      ])
                }}
              </p>
            </div>
          </div>
        </div>

        <p v-if="error?.statusCode === 429" class="my-4 mb-8">
          {{ $t("general.httpcodes.429.description") }}
        </p>
        <p v-else-if="error" class="my-4 mb-8">
          {{ $t("general.errors.something_went_wrong") }}
        </p>

        <div
          v-if="!article?.publishedAt && !error && article?.slug"
          class="my-4 mb-8 flex"
        >
          <span
            class="flex items-center mx-auto bg-orange-200 dark:bg-orange-900 dark:text-orange-100 rounded-xl text-lg py-3 px-5"
          >
            {{ $t("blog.draft_warning") }}
          </span>
        </div>

        <div v-if="isAdmin" class="mt-4 flex">
          <div
            class="flex items-center mx-auto bg-orange-200 dark:bg-orange-900 rounded-xl text-sm py-2 px-2"
          >
            <EyeSlashIcon
              class="w-6 h-6 ml-1 mr-2 stroke-orange-600 dark:stroke-gray-700"
            />
            <div class="space-x-2">
              <NuxtLink
                v-if="article?.id"
                class="text-orange-500 dark:text-orange-200 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-lg underline"
                :to="`https://cms.simpleanalytics.com/admin/content-manager/collection-types/api::article.article/${article.id}?plugins[i18n][locale]=${article.locale}`"
                target="_blank"
                >Edit in CMS</NuxtLink
              >
              <NuxtLink
                v-if="article?.sourceDocumentUrl"
                class="text-orange-500 dark:text-orange-200 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-lg underline"
                :to="article.sourceDocumentUrl"
                target="_blank"
                >{{ getHostname(article.sourceDocumentUrl) }}</NuxtLink
              >
              <NuxtLink
                v-if="image"
                class="text-orange-500 dark:text-orange-200 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-lg underline"
                :to="image"
                target="_blank"
                >Social image</NuxtLink
              >
              <NuxtLink
                v-if="article"
                class="text-orange-500 dark:text-orange-200 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-lg underline"
                :to="`https://simpleanalytics.com/simpleanalytics.com/${article.locale}/blog/${article.slug}`"
                target="_blank"
                >Stats</NuxtLink
              >
            </div>
            <XCircleIcon
              @click="isAdmin = false"
              class="w-6 h-6 ml-1 stroke-orange-600 dark:stroke-gray-700 hover:stroke-orange-200 dark:hover:stroke-white cursor-pointer"
            />
          </div>
        </div>

        <p
          v-if="
            article &&
            article.slug &&
            article.locale !== 'en' &&
            article.automaticTranslated !== false &&
            !error
          "
          class="inline-block mt-6 px-4 py-2 rounded-lg bg-[#ffd9cb] dark:bg-[#592b1b]"
        >
          <template v-if="translationParts.length === 3">
            {{ translationParts[0] }}
            <NuxtLink
              class="dark:text-gray-300 text-gray-700 underline"
              :to="toEnglish"
            >
              {{ translationParts[1] }}</NuxtLink
            >{{ translationParts[2] }}
          </template>
          <template v-else>
            {{ $t("blog.automatic_translated_switch_to_english") }}
          </template>
        </p>
        <p
          v-else-if="
            article && article.locale !== locale && locale !== 'en' && !error
          "
          class="inline-block mt-6 px-4 py-2 rounded-lg bg-[#ffd9cb] dark:bg-[#592b1b]"
        >
          {{ $t("blog.content_not_translated") }}
        </p>

        <!-- Show buttons where needed -->
        <p v-if="error?.statusCode === 429" class="mt-6">
          <a class="button" href="?">
            {{ $t("blog.reload_page") }}
          </a>
        </p>
        <p v-else-if="article && !article.contentHtml" class="mt-6">
          <NuxtLink
            class="button"
            v-if="getTypeFromArticleName() === 'glossary'"
            :to="localePath({ name: 'glossary' })"
          >
            {{ $t("glossary.overview") }}
          </NuxtLink>
          <NuxtLink
            class="button"
            v-else-if="getTypeFromArticleName() === 'resources'"
            :to="localePath({ name: 'resources' })"
          >
            {{ $t("resources.overview") }}
          </NuxtLink>
          <NuxtLink
            class="button"
            v-else-if="getTypeFromArticleName() === 'utm-builder'"
            :to="localePath({ name: 'utm-builder' })"
          >
            {{ $t("utm_builder.overview") }}
          </NuxtLink>
        </p>
      </div>
    </div>

    <div class="max-w-3xl pb-4 px-4 mx-auto" v-if="article">
      <HtmlBlock :html="article.contentHtml" :articleId="article.id" />
    </div>
    <div class="max-w-3xl pb-4 px-4 mx-auto" v-else>
      <div class="text-center">
        <h2 class="text-2xl font-bold">
          <NuxtLink class="button" :to="localePath({ name: 'blog' })">
            {{ $t("blog.go_to_overview") }}
          </NuxtLink>
        </h2>
      </div>
    </div>

    <MovingGradient
      class="max-w-6xl mt-10 mx-auto text-center"
      v-if="article && article.showCallToActions !== false"
    >
      <h2
        class="text-xl md:text-3xl font-bold leading-loose md:leading-loose text-white dark:text-gray-100"
      >
        {{
          article.ctaTitle && article.ctaDescription
            ? article.ctaTitle
            : $t(`ctas.import_ga.title`)
        }}
      </h2>
      <p
        class="md:text-xl leading-loose md:leading-loose max-w-3xl mx-auto text-white dark:text-gray-200"
      >
        {{
          article.ctaTitle && article.ctaDescription
            ? article.ctaDescription
            : $t(`ctas.import_ga.description`)
        }}
      </p>
      <a
        @click="
          navigateToWelcome($router, 'click_big_banner_cta', {
            title:
              article.ctaTitle && article.ctaDescription
                ? article.ctaTitle
                : $t(`ctas.import_ga.title`),
            description:
              article.ctaTitle && article.ctaDescription
                ? article.ctaDescription
                : $t(`ctas.import_ga.description`),
            button: article.ctaButton || $t(`ctas.import_ga.button`),
          })
        "
        class="button white-bg mt-5"
        >{{ article.ctaButton || $t(`ctas.import_ga.button`) }}</a
      >
    </MovingGradient>

    <EindePopup name="hide_subscribe_popup">
      <EindePopupPricing />
    </EindePopup>
  </div>
</template>

<script setup>
const props = defineProps([
  "type",
  "name",
  "slug",
  "nonUniqueSlug",
  "articleType",
  "drafts",
  "hideTitle",
  "hideAuthor",
  "hideSeoMeta",
]);

import { categories } from "@/data/glossary";
import MovingGradient from "@/components/MovingGradient.vue";
import Avatar from "@/components/Avatar.vue";
import HtmlBlock from "@/components/HtmlBlock.vue";
import { EyeSlashIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import EindePopup from "@/components/EindePopup.vue";
import EindePopupPricing from "@/components/EindePopupPricing.vue";

const event = useRequestEvent();
const config = useRuntimeConfig();
const { BASE_PRODUCTION_URL, DASHBOARD_URL } = config.public;

const route = useRoute();
const { t, locale } = useI18n();
const localePath = useLocalePath();

const isAdmin = useAdmin();

const keys = [
  "contentHtml",
  "languages",
  "question",
  "content",
  "coverImageWithText",
  "coverImageWithoutText",
  "inlineMedia",
];

if (props.type === "article") {
  keys.push("canonicalUrl");
}

const { data } = await useArticle({
  keys,
  page: props.page,
  routeName: props.name,
  slug: props.slug,
  nonUniqueSlug: props.nonUniqueSlug,
  articleType: props.articleType,
  type: props.type,
  drafts: props.drafts,
  useLocale: props.useLocale,
  pick: ["article"],
});

const { article, languages, error } = data.value;

const setI18nParams = useSetI18nParams();
setI18nParams(languages);

if (!article && import.meta.server) {
  setResponseStatus(event, 404, "Page Not Found");
}

if (error?.value?.statusCode === 429) {
  setResponseStatus(event, 429, "Too Many Requests");
}

const translationParts = t("blog.automatic_translated_switch_to_english", [
  "---",
  "---",
]).split("---");

const toEnglish = localePath({ name: props.name, params: route.params }, "en");

const generateParams = new URLSearchParams({
  url: `${BASE_PRODUCTION_URL}/${localePath({
    name: props.name,
    params: route.params,
  })}`,
  title: article?.title,
  "author-slug": article?.authorSlug,
});

const format = (date) => {
  if (!date) return null;
  return new Intl.DateTimeFormat(t("time.intl_locale"), {
    month: "short",
    year: "numeric",
    day: "numeric",
  }).format(new Date(date));
};

const showEditedBy = computed(() => {
  if (!article?.publishedAt || !article?.updatedAt) return false;
  const week = 604800000; // 1 week
  const diff = new Date(article?.publishedAt) - new Date(article?.updatedAt);
  return Math.abs(diff) > week;
});

const getHostname = (link) => {
  if (!link) return;
  const url = new URL(link);
  if (url.hostname === "docs.google.com") return "Google Docs";
  if (url.hostname === "notion.so") return "Notion";
  return url.hostname;
};

const image = computed(
  () =>
    article?.cover?.large ||
    article?.cover?.original ||
    article?.cover?.medium ||
    article?.cover?.small ||
    (article?.title
      ? `${DASHBOARD_URL}/generate-image.png?${generateParams}`
      : null),
);

if (article?.canonicalUrl) {
  useHead({
    link: [
      {
        rel: "canonical",
        href: article?.canonicalUrl,
      },
    ],
  });
}

if (!props.hideSeoMeta) {
  useSeoMeta({
    title: () => article?.title,
    ogTitle: () => article?.title,
    description: () => article?.excerpt,
    ogDescription: () => article?.excerpt,
    ogImage: image,
    twitterCard: "summary_large_image",
    robots() {
      if (article?.title && !article?.publishedAt) {
        return "noindex";
      }
      return null;
    },
  });
}

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
          ({ category }) => category === route.params.category,
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
          name: article?.question || article?.title,
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
    [{ name: "Home", item: localePath({ name: "index" }) }],
  ),
};

// We got this error in the Google Search Console:
// Either "name" or "item.name" should be specified (in "itemListElement")
// Items with this issue are invalid. Invalid items are not eligible for Google Search's rich results
// https://developers.google.com/search/docs/appearance/structured-data/breadcrumb#list-item
const isBreadcrumbComplete =
  !!breadcrumb.itemListElement[breadcrumb.itemListElement.length - 1]?.name;

const schemas = article?.question
  ? [
      defineWebPage({ "@type": "FAQPage" }),
      defineQuestion({
        name: article?.question,
        acceptedAnswer: article?.content,
      }),
    ]
  : [];

if (isBreadcrumbComplete) schemas.push(defineBreadcrumb(breadcrumb));

if (schemas.length) useSchemaOrg(schemas);

const getTypeFromArticleName = () => {
  if (props.name.includes("resources")) return "resources";
  else if (props.name.includes("utm-builder")) return "utm-builder";
  else return "glossary";
};
</script>
