<template>
  <div class="flex flex-col flex-grow">
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

      <p class="mt-6 flex items-center justify-center" v-if="post?.date">
        <span class="mr-1"
          >{{
            $t("blog.published_on_by", [
              new Intl.DateTimeFormat($t("time.intl_locale"), {
                month: "short",
                year: "numeric",
                day: "numeric",
              }).format(new Date(post.date)),
            ])
          }}
        </span>

        <img
          v-if="post.avatar"
          :src="post.avatar"
          :alt="`Image of ${post.author}`"
          onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='"
          class="rounded-full w-8 h-8 bg-gray-300 ml-1 mr-2"
        />

        <span>{{ post.author }}</span>
      </p>
    </div>

    <div
      class="max-w-3xl px-6 mx-auto mt-8 prose prose-lg prose-ul:list-disc prose-img:rounded-lg prose-video:rounded-lg prose-headings:text-gray-600 prose-headings:font-semibold dark:prose-strong:text-gray-500 prose-code:after:content-[''] prose-code:before:content-[''] prose-code:font-normal prose-code:bg-blue-100 dark:prose-code:bg-gray-700 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-gray-600 dark:prose-code:text-gray-300 prose-li:my-1 prose-headings:mb-4"
      v-html="article || ''"
    ></div>

    <div
      class="max-w-3xl px-6 pt-10 mx-auto text-center mt-auto"
      v-if="post?.article"
    >
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
import { replaceInlineImages } from "~/utils/blog";
import { useHead } from "#imports";

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

const lang = computed(() => post?.value?.lang || "en");
const langRegion = computed(() =>
  lang.value + "-" + lang.value === "en" ? "US" : lang.value.toUpperCase()
);

const generateParams = new URLSearchParams({
  url: `https://www.simpleanalytics.com/blog/${route.params.slug}`,
  title: post?.value?.title,
  "author-slug": post?.value?.author_slug,
});

const defaultParams = new URLSearchParams({
  title: t("blog.article_not_found"),
});

const image = computed(
  () =>
    post?.value?.image ||
    post?.value?.image_no_text ||
    (post?.value?.title
      ? `${MAIN_URL}/generate-image.png?${generateParams}`
      : `${MAIN_URL}/generate-image?${defaultParams}`)
);

const description = computed(() => post?.value?.excerpt?.trim());

const meta = [
  {
    name: "description",
    content: description,
  },
  {
    name: "language",
    content: computed(() => lang?.value.toUpperCase()),
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
    name: "twitter:image:alt",
    content: description,
  },
  {
    property: "og:image",
    content: image,
  },
];

if (post?.value?.created)
  meta.push({
    itemprop: "datePublished",
    content: computed(() => post?.value?.created),
  });

if (post?.value?.author)
  meta.push({
    name: "author",
    content: computed(() => post?.value?.author),
  });

const link = [
  {
    rel: "alternate",
    hreflang: lang,
    href: computed(() => `${BASE_URL}/blog/${route.params.slug}`),
  },
  {
    property: "image",
    href: image,
  },
];

useHead({
  title: computed(() => post?.value?.title),
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

const svgUp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 inline dark:hover-hover:group-hover:fill-red-700 hover-hover:group-hover:fill-red-600"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`;

const article = computed(() => {
  if (!post?.value?.article) return null;

  return replaceInlineImages(post.value.article)
    .replace(/preload="auto"/g, 'preload="auto" controls="controls"')
    .replace(/&#8617;/g, svgUp)
    .replace(/class="split"/g, 'class="flex space-x-8"');
});

if (process.client) {
  onMounted(() => {
    setTimeout(() => {
      const gifs = document.querySelectorAll("div.gif");
      if (!gifs.length) return;
      gifs.forEach((gif) => {
        gif.addEventListener("mouseenter", () => {
          gif.querySelector("details").open = true;
        });
        gif.addEventListener("mouseleave", () => {
          gif.querySelector("details").open = false;
        });
      });
    }, 250);
  });
}
</script>
