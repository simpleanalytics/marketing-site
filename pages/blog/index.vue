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

    <div v-if="isAdmin" class="mt-4 flex">
      <div
        class="flex items-center mx-auto bg-orange-200 dark:bg-orange-900 rounded-xl text-sm py-2 px-2"
      >
        <EyeSlashIcon
          class="w-6 h-6 ml-1 mr-2 stroke-orange-600 dark:stroke-gray-700"
        />
        <div class="space-x-2">
          <NuxtLink
            class="text-orange-500 dark:text-orange-700 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-lg underline"
            :to="`https://cms.simpleanalytics.com/admin/content-manager/collection-types/api::article.article?page=1&pageSize=50&sort=updatedAt:DESC&plugins[i18n][locale]=${locale}&filters[$and][0][articleType][$eq]=blog`"
            target="_blank"
            >Go to CMS</NuxtLink
          >
        </div>
        <XCircleIcon
          @click="isAdmin = false"
          class="w-6 h-6 ml-1 stroke-orange-600 dark:stroke-gray-700 hover:stroke-white dark:hover:stroke-white cursor-pointer"
        />
      </div>
    </div>

    <div class="max-w-7xl px-6 mx-auto mt-8">
      <p v-if="status === 'pending'" class="mt-5 text-lg text-center">
        {{ $t("home.loading_posts") }}...
      </p>
      <p v-else-if="!articles?.length" class="mt-5 text-lg text-center">
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
            class="flex w-full flex-col shadow-xl overflow-hidden rounded-lg bg-blue-100 dark:bg-gray-700 relative"
          >
            <div>
              <NuxtLink
                :to="
                  localePath({
                    name: 'blog-slug',
                    params: { slug: post.slug },
                  })
                "
                :rel="post.publishedAt ? '' : 'nofollow'"
              >
                <div
                  v-if="!post.publishedAt"
                  class="absolute flex justify-center items-center top-4 -rotate-45 -left-9 w-36 h-10 text-xl shadow-xl bg-yellow-300 text-gray-800"
                >
                  <span>Draft</span>
                </div>
                <img
                  v-if="post.cover?.small"
                  :src="post.cover.small"
                  :alt="post.cover?.alt || post.cover?.caption || post.title"
                  :style="
                    'display: block; aspect-ratio: 1200/628; ' +
                    (post.cover.averageColorHex
                      ? `background-color: #${post.cover.averageColorHex};`
                      : '')
                  "
                  class="object-cover object-center w-full text-center"
                  :class="post.cover.isDark ? 'text-gray-300' : 'text-gray-900'"
                  loading="lazy"
                />
                <img
                  v-else-if="post.title"
                  :src="`https://simpleanalytics.com/generate-image.png?title=${encodeURIComponent(
                    post.title,
                  )}&url=${encodeURIComponent(
                    BASE_PRODUCTION_URL +
                      localePath({
                        name: 'blog-slug',
                        params: { slug: post.slug },
                      }),
                  )}&author-slug=${post.authorSlug}`"
                  :alt="post.title"
                  style="aspect-ratio: 1200/628"
                  class="object-cover object-center w-full text-center"
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
                  :to="
                    localePath({
                      name: 'blog-slug',
                      params: { slug: post.slug },
                    })
                  "
                  :rel="post.publishedAt ? '' : 'nofollow'"
                  class="dark:text-gray-300 text-gray-600"
                >
                  {{ post.title }}
                </NuxtLink>
              </h2>
              <NuxtLink
                v-if="post.excerpt"
                :to="
                  localePath({
                    name: 'blog-slug',
                    params: { slug: post.slug },
                  })
                "
                :rel="post.publishedAt ? '' : 'nofollow'"
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
                v-if="post.publishedAt"
                class="flex items-center mt-auto text-sm dark:text-gray-500 text-gray-500"
              >
                <Avatar :slug="post.authorSlug" class="mr-2" />

                <span>
                  <span v-if="post.name && post.name !== 'Simple Analytics'"
                    >{{ post.name }},</span
                  >
                  {{
                    new Intl.DateTimeFormat($t("time.intl_locale"), {
                      month: "short",
                      year: "numeric",
                      day: "numeric",
                    }).format(new Date(post.publishedAt))
                  }}
                </span>

                <span
                  v-if="
                    new Date(post.publishedAt) > Date.now() - 1555200000 // 18 days
                  "
                  class="text-sm whitespace-nowrap mx-2 font-normal bg-red-500 dark:bg-red-600 px-1 text-blue-100 dark:text-gray-700 rounded-md align-text-bottom"
                  >{{ labelAgo($t, post.publishedAt) }}</span
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
      <div
        v-if="articles?.length > 0"
        class="mt-12 flex justify-center items-center space-x-4"
      >
        <NuxtLink
          v-if="currentPage > 1"
          :to="
            localePath({
              query: currentPage === 2 ? {} : { page: currentPage - 1 },
            })
          "
          class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Previous
        </NuxtLink>
        <span class="text-sm text-gray-700 dark:text-gray-300">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        <NuxtLink
          v-if="currentPage < totalPages"
          :to="localePath({ query: { page: currentPage + 1 } })"
          class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Next
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import SimpleAnalyticsIcon from "~/components/images/SimpleAnalyticsIcon.vue";
import SubscribeForm from "~/components/SubscribeForm.vue";
import Avatar from "~/components/Avatar.vue";
import { EyeSlashIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import { labelAgo } from "~/utils/blog";

const i18n = useI18n();
const { locale } = i18n;
const localePath = useLocalePath();
const config = useRuntimeConfig();
const { BASE_PRODUCTION_URL } = config.public;
const route = useRoute();
const page = computed(() => Number(route.query.page) || 1);

const isAdmin = useAdmin();
const POSTS_PER_PAGE = 8; // 9 - 1 because one card is newsletter subscribe

const { data: articleData, status } = await useArticle({
  useLocale: true,
  routeName: "blog-slug",
  articleType: "blog",
  keys: ["coverImageWithText", "coverImageWithoutText"],
  limit: POSTS_PER_PAGE,
  page,
  watch: [page],
});

const articles = computed(() => articleData.value?.articles || []);
const meta = computed(() => articleData.value?.meta);

const recentPostsWithSubscribe = computed(() => {
  const posts = [...articles.value];
  if (posts.length > 1) posts.splice(1, 0, { subscribe: true });
  return posts;
});

const currentPage = computed(() => Number(route.query.page) || 1);
const totalPages = computed(() => meta.value?.pagination?.pageCount || 1);

definePageMeta({
  title: "Blog of Simple Analytics",
  description:
    "Follow our journey to fight for privacy against Google Analytics and learn what is happening in the privacy landscape.",
});
</script>
