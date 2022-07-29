<template>
  <div>
    <div class="max-w-5xl mx-auto text-center">
      <h1
        class="text-4xl md:leading-normal font-medium sm:text-5xl md:text-6xl mx-4 lg:mx-10"
      >
        <span v-if="post?.title">{{ post.title }}</span>
        <span v-else-if="pending">{{ $t("blog.loading_post") }}</span>
      </h1>

      <p class="mt-6" v-if="!article">
        {{ $t("blog.article_not_found") }}
      </p>

      <p class="mt-6" v-if="post?.date">
        {{
          $t("blog.published_on_by", [
            new Intl.DateTimeFormat($t("time.intl_locale"), {
              month: "short",
              year: "numeric",
              day: "numeric",
            }).format(new Date(post.date)),
            post.author,
          ])
        }}
      </p>
    </div>

    <div
      class="max-w-3xl px-6 mx-auto mt-8 prose prose-lg prose-ul:list-disc prose-img:rounded-lg prose-video:rounded-lg prose-headings:text-gray-600 prose-headings:font-semibold dark:prose-strong:text-gray-500 prose-code:after:content-[''] prose-code:before:content-[''] prose-code:font-normal prose-code:bg-blue-100 dark:prose-code:bg-gray-700 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-gray-600 dark:prose-code:text-gray-300 prose-li:my-1 prose-headings:mb-4"
      v-html="article || ''"
    ></div>

    <div class="max-w-3xl px-6 mx-auto mt-8" v-if="post?.article">
      <a @click="scrollToTop" class="inline-flex items-center group">
        <UploadIcon
          class="h-5 mr-1 inline dark:hover-hover:group-hover:fill-red-700 hover-hover:group-hover:fill-red-600"
        />
        <span>{{ $t("blog.back_to_top") }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { UploadIcon } from "@heroicons/vue/solid";
import { createError } from "h3";
import { useI18n } from "vue-i18n";
import { replaceInlineImages } from "~~/utils/blog";

const i18n = useI18n();
const { t } = i18n;

const route = useRoute();

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://www.simpleanalytics.com"
    : "http://localhost:3005";

const MAIN_URL =
  process.env.NODE_ENV === "production"
    ? "https://simpleanalytics.com"
    : "http://localhost:3000";

const { pending, data: post } = await useAsyncData(
  `blog-${route.params.slug}`,
  () => $fetch("/api/blog-post?slug=" + route.params.slug)
);

const defaultDescription =
  "A blog post by Simple Analytics, the privacy-first Google Analytics alternative that is 100% GDPR compliant.";

const lang = post?.value?.lang || "en";
const langRegion = lang + "-" + lang === "en" ? "US" : lang.toUpperCase();

const generateParams = new URLSearchParams({
  url: `https://www.simpleanalytics.com/blog/${route.params.slug}`,
  title: post?.value?.title,
  "author-slug": post?.value?.author_slug,
});

const defaultParams = new URLSearchParams({
  title: t("blog.article_not_found"),
});

const image =
  post?.value?.image ||
  post?.value?.image_no_text ||
  (post?.value?.title
    ? `${MAIN_URL}/generate-image.png?${generateParams}`
    : `${MAIN_URL}/generate-image?${defaultParams}`);

const meta = [
  {
    name: "description",
    content: post?.value?.excerpt?.trim() || defaultDescription,
  },
  {
    name: "language",
    content: lang.toUpperCase(),
  },
  {
    ["http-equiv"]: "content-language",
    content: langRegion,
  },
  {
    ["http-equiv"]: "content-language",
    content: langRegion,
  },
  {
    itemprop: "image",
    content: image,
  },
  {
    name: "twitter:image",
    content: image,
  },
  {
    property: "og:image",
    content: image,
  },
];

if (post?.value?.created)
  meta.push({
    itemprop: "datePublished",
    content: post?.value?.created,
  });

if (post?.value?.author)
  meta.push({
    name: "author",
    content: post?.value?.author,
  });

const link = [
  {
    rel: "alternate",
    hreflang: lang,
    href: `${BASE_URL}/blog/${route.params.slug}`,
  },
  {
    property: "image",
    href: image,
  },
];

useHead({
  title: post?.value?.title,
  meta,
  link,
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

if (!post?.value?.article && process.server) {
  throw createError({
    statusCode: 404,
    statusMessage: t("blog.article_not_found"),
  });
}

const article = computed(() => {
  if (!post?.value?.article) return null;

  return replaceInlineImages(post.value.article)
    .replace(/preload="auto"/g, 'preload="auto" controls="controls"')
    .replace(/class="split"/g, 'class="flex space-x-8"');
});
</script>
