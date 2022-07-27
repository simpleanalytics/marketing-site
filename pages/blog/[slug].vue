<template>
  <div>
    <div class="max-w-5xl mx-auto text-center">
      <h1
        class="text-4xl md:leading-normal font-medium sm:text-5xl md:text-6xl mx-4 lg:mx-10"
      >
        <span v-if="post?.title">{{ post?.title }}</span>
        <span v-else>Not found.</span>
      </h1>

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
      class="max-w-3xl px-6 mx-auto mt-8 prose prose-lg prose-ul:list-disc prose-img:rounded-lg prose-headings:text-gray-600 prose-headings:font-semibold dark:prose-strong:text-gray-500"
      v-html="post?.article || ''"
    ></div>

    <div class="max-w-3xl px-6 mx-auto mt-8">
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

const route = useRoute();
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://www.simpleanalytics.com"
    : "http://localhost:3005";

const { data: post } = await useLazyAsyncData(`blog-${route.params.slug}`, () =>
  $fetch("/api/blog-post?slug=" + route.params.slug)
);

const defaultDescription =
  "A blog post by Simple Analytics, the privacy-first Google Analytics alternative that is 100% GDPR compliant.";

useHead({
  title: post?.value?.title,
  meta: [
    {
      name: "description",
      content: post?.value?.excerpt || defaultDescription,
    },
  ],
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
