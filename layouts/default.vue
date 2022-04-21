<template>
  <div class="bg-blue-50">
    <Html lang="en-US" :class="{ dark: darkMode }">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff4f64" />
        <meta name="apple-mobile-web-app-title" content="Simple Analytics" />
        <meta name="application-name" content="Simple Analytics" />
        <meta name="msapplication-TileColor" content="#ff4f64" />
        <meta name="theme-color" content="#eef9ff" />
      </Head>
    </Html>

    <div class="text-gray-300 bg-blue-100 relative">
      <BackgroundShapes
        class="hidden sm:block absolute w-1/3 bottom-0 right-0"
        aria-hidden="true"
      />

      <div class="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              class="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div
                class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <NuxtLink to="/" class="flex items-center">
                    <img
                      class="h-5 w-auto sm:h-6"
                      src="https://assets.simpleanalytics.com/images/logos/logo-no-padding.svg"
                      alt=""
                    />
                    <span
                      class="sm:hidden lg:block ml-3 text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
                      >Simple Analytics</span
                    >
                  </NuxtLink>
                  <div
                    class="flex items-center md:hidden"
                    style="margin-right: 4px"
                  >
                    <PopoverButton
                      class="bg-red-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    >
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon
                        class="h-6 w-6 stroke-red-500"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10 md:mt-2">
                <div v-for="item in navigation" :key="item.name">
                  <NuxtLink
                    v-if="!item.popover"
                    :to="item.href"
                    class="font-medium text-gray-500 hover:text-gray-900"
                    >{{ $t(item.translation) }}</NuxtLink
                  >
                  <Popover class="relative z-20" v-slot="{ open }" v-else>
                    <PopoverButton
                      :class="[
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group  inline-flex items-center text-base font-medium hover:text-gray-900',
                      ]"
                    >
                      <span>{{ $t("nav.resources") }}</span>
                      <ChevronDownIcon
                        :class="[
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500',
                        ]"
                        aria-hidden="true"
                      />
                    </PopoverButton>

                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0 translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 translate-y-1"
                    >
                      <PopoverPanel
                        class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                      >
                        <div
                          class="shadow-lg ring-1 ring-blue-500 ring-opacity-30 overflow-hidden"
                        >
                          <div
                            class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                          >
                            <a
                              v-for="item in resources"
                              :key="item.name"
                              :href="item.href"
                              class="-m-3 p-3 rounded flex items-start hover:bg-blue-100 transition ease-in-out duration-150"
                            >
                              <component
                                :is="item.icon"
                                class="flex-shrink-0 h-6 w-6 text-red-500"
                                aria-hidden="true"
                              />
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  {{ item.name }}
                                </p>
                                <p class="mt-1 text-sm text-gray-500">
                                  {{ item.description }}
                                </p>
                              </div>
                            </a>
                          </div>
                          <div class="px-5 py-5 bg-blue-100 sm:px-8 sm:py-8">
                            <div>
                              <h3
                                class="text-sm tracking-wide font-medium text-gray-500 uppercase"
                              >
                                Recent blog posts
                              </h3>
                              <p v-if="pending" class="mt-5 text-sm">
                                Loading posts...
                              </p>
                              <p
                                v-else-if="!recentPosts?.length"
                                class="mt-5 text-sm"
                              >
                                Didn't find any posts...
                              </p>
                              <ul v-else role="list" class="mt-4 space-y-4">
                                <li
                                  v-for="post in recentPosts"
                                  :key="post.url"
                                  class="text-base truncate"
                                  :title="post.excerpt"
                                >
                                  <a
                                    :href="post.url"
                                    class="font-medium text-gray-600 hover:text-gray-900 transition ease-in-out duration-150"
                                  >
                                    {{ post.title }}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="mt-5 text-sm">
                              <a
                                href="https://blog.simpleanalytics.com"
                                class="font-medium text-red-500 hover:text-red-500 transition ease-in-out duration-150"
                              >
                                View all blog posts
                                <span aria-hidden="true">&rarr;</span></a
                              >
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </transition>
                  </Popover>
                </div>

                <LangSwitcher />
              </div>
              <div
                class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
              >
                <a
                  href="https://simpleanalytics.com/welcome"
                  class="font-medium text-gray-500 hover:text-gray-900 mx-3"
                >
                  {{ $t("nav.signup") }}
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 border-2 border-red-500 text-base font-medium rounded-full text-red-500 bg-white hover:bg-gray-50"
                >
                  {{ $t("nav.login") }}
                </a>
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div
                class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://assets.simpleanalytics.com/images/logos/logo-no-padding.svg"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    >
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <NuxtLink
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >{{ $t(item.translation) }}</NuxtLink
                  >
                </div>
                <a
                  href="/login"
                  class="block w-full px-5 py-3 text-center font-medium text-red-500 bg-gray-50 hover:bg-gray-100"
                >
                  {{ $t("nav.login") }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <main class="container mt-8 mx-auto max-w-7xl px-4 sm:mt-24">
          <slot name="hero" />
        </main>
      </div>
    </div>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  MenuIcon,
  XIcon,
  BookmarkAltIcon,
  CalendarIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  TerminalIcon,
  ScaleIcon,
  SupportIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import BackgroundShapes from "../components/images/BackgroundShapes.vue";

const resources = [
  {
    name: "Documentation",
    description: "Learn what is possible within Simple Analytics.",
    href: "https://docs.simpleanalytics.com",
    icon: AcademicCapIcon,
  },
  {
    name: "Privacy and how we handle your data",
    description: "Understand how we take your privacy seriously.",
    href: "https://docs.simpleanalytics.com/what-we-collect",
    icon: ScaleIcon,
  },
  {
    name: "API & integrations",
    description: "Find out how to integrate us with your current workflow.",
    href: "https://docs.simpleanalytics.com/api",
    icon: TerminalIcon,
  },
];

const defaultDescription =
  "Simple Analytics is the privacy-first Google Analytics alternative that is 100% GDPR compliant.";

const navigation = [
  { translation: "nav.pricing", href: "/pricing" },
  { translation: "nav.resources", href: "#", popover: true },
  { translation: "nav.blog", href: "https://blog.simpleanalytics.com" },
  { translation: "nav.contact", href: "https://simpleanalytics.com/contact" },
];

const route = useRoute();

useHead({
  title: route.meta.title?.includes("Simple Analytics")
    ? route.meta.title
    : `${route.meta.title} | Simple Analytics`,
  meta: [
    {
      name: "description",
      content: route.meta.description || defaultDescription,
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
});

const darkMode = ref(false);
const open = ref(false);

const { pending, data: recentPosts } = useLazyFetch(
  "https://blog.simpleanalytics.com/recent-posts.json"
);
</script>

<style scoped>
.sa-background-1 {
  background-image: url("https://assets.simpleanalytics.com/images/background-shapes.svg");
  background-position: bottom right;
  background-size: 200%;
  background-repeat: no-repeat;
}
</style>
