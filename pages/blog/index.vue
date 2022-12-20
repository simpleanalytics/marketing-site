<template>
  <div class="mb-20">
    <div class="text-center mx-4">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("blog.title") }}.
      </h1>
      <p class="mt-8 text-lg">
        {{ $t("blog.description") }}
      </p>
    </div>

    <div class="max-w-7xl px-6 mx-auto mt-8">
      <p v-if="pending" class="mt-5 text-lg text-center">
        {{ $t("home.loading_posts") }}...
      </p>
      <p v-else-if="!recentPosts?.length" class="mt-5 text-lg text-center">
        {{ $t("home.did_not_find_any_posts") }}.
      </p>
      <div v-else role="list" class="justify-center block sm:flex-wrap sm:flex">
        <article
          v-for="post in recentPostsWithSubscribe"
          :key="post.url"
          :title="post.excerpt"
          class="flex w-full p-6 sm:w-1/2 lg:w-1/3"
        >
          <div
            v-if="post.subscribe"
            class="flex w-full flex-col shadow-xl overflow-hidden rounded-lg bg-blue-100 dark:bg-gray-700 text-center"
          >
            <SubscribeForm />
          </div>
          <div
            v-else
            class="flex w-full flex-col shadow-xl overflow-hidden rounded-lg bg-blue-100 dark:bg-gray-700"
          >
            <div>
              <NuxtLink :to="localePath(post.path)">
                <img
                  v-if="post.cover"
                  :src="post.cover"
                  :alt="post.title"
                  style="aspect-ratio: 1200/628"
                  class="object-cover object-center w-full"
                  loading="lazy"
                />
                <div
                  v-else
                  class="bg-gray-200 dark:bg-gray-600 bg-gradient-to-b from-gray-100 dark:from-gray-500"
                  style="aspect-ratio: 1200/628"
                ></div>
              </NuxtLink>
            </div>
            <div class="px-6 py-4 mt-2 flex-grow flex flex-col">
              <h2 class="text-2xl font-semibold">
                <NuxtLink
                  :to="localePath(post.path)"
                  class="dark:text-gray-300 text-gray-600"
                >
                  {{ post.title }}
                </NuxtLink>
              </h2>
              <NuxtLink
                :to="localePath(post.path)"
                class="block mt-3 mb-8 leading-relaxed text-md text-gray-700 dark:text-gray-300"
              >
                {{
                  post.excerpt?.length > 200
                    ? post.excerpt.substring(0, 200) + "..."
                    : [".", "?", "!"].includes(post.excerpt.trim().slice(-1))
                    ? post.excerpt
                    : post.excerpt + "."
                }}
              </NuxtLink>

              <div
                v-if="post.created"
                class="flex items-center mt-auto text-sm dark:text-gray-500 text-gray-500"
              >
                <img
                  v-if="post.avatar"
                  :src="post.avatar"
                  :alt="`Image of ${post.author}`"
                  class="rounded-full w-8 h-8 bg-gray-300 mr-2"
                />
                <div
                  v-else
                  class="rounded-full w-8 h-8 bg-gray-300 dark:bg-gray-600 mr-2"
                ></div>

                <span>
                  <span v-if="post.name && post.name !== 'Simple Analytics'"
                    >{{ post.name }},</span
                  >
                  {{
                    new Intl.DateTimeFormat($t("time.intl_locale"), {
                      month: "short",
                      year: "numeric",
                      day: "numeric",
                    }).format(new Date(post.created))
                  }}
                </span>

                <span
                  v-if="
                    new Date(post.created) > Date.now() - 1555200000 // 18 days
                  "
                  class="text-sm whitespace-nowrap mx-2 font-normal bg-red-500 dark:bg-red-600 px-1 text-blue-100 dark:text-gray-700 rounded-md align-text-bottom"
                  >{{ labelAgo($t, post.created) }}</span
                >

                <div class="ml-auto">
                  <SimpleAnalyticsIcon
                    class="dark:fill-gray-500 fill-gray-300 w-auto h-3 sm:h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="flex w-full sm:w-1/2 lg:w-1/3"></article>
        <article class="flex w-full sm:w-1/2 lg:w-1/3"></article>
      </div>
    </div>
  </div>
</template>

<script setup>
import SimpleAnalyticsIcon from "~/components/images/SimpleAnalyticsIcon.vue";
import SubscribeForm from "~/components/SubscribeForm.vue";

import { getPathFromBlogUrl, labelAgo, getAuthorFromSlug } from "~/utils/blog";

const config = useRuntimeConfig();
const { BLOG_URL } = config.public;

const { pending, data: recentPostsAll } = useLazyFetch(
  `${BLOG_URL}/recent-posts.json`
);

const recentPosts = computed(() => {
  if (!Array.isArray(recentPostsAll.value)) return [];

  return recentPostsAll.value.map((post) => {
    const path = getPathFromBlogUrl(post.url);
    const image = post.image_no_text || post.image;

    const { avatar, name } = getAuthorFromSlug(post.author_slug) || {};

    return {
      ...post,
      name,
      avatar,
      path,
      cover: image?.startsWith("/") ? `${BLOG_URL}${image}` : image,
    };
  });
});

const recentPostsWithSubscribe = computed(() => {
  const posts = [...recentPosts.value];

  posts.splice(1, 0, { subscribe: true });

  return posts;
});

definePageMeta({
  title: "Blog of Simple Analytics",
  description:
    "Follow our journey to fight for privacy against Google Analytics and learn what is happening in the privacy landscape.",
});
</script>
