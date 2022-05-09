<template>
  <div class="bg-blue-50 dark:bg-gray-800">
    <Html lang="en-US" :class="{ dark: theme === 'dark' }">
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

    <div class="text-gray-300 bg-blue-100 dark:bg-gray-900 relative">
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
                    <SimpleAnalyticsIcon class="h-5 w-auto sm:h-6" />
                    <span class="sm:hidden lg:block ml-3 text-xl sm:text-2xl"
                      >Simple Analytics</span
                    >
                  </NuxtLink>
                  <a @click="toggleTheme()" class="mt-1">
                    <SunIcon
                      class="h-7 p-1 ml-1 stroke-gray-400"
                      v-if="theme === 'dark'"
                    />
                    <MoonIcon class="h-6 p-1 ml-1 stroke-red-500" v-else />
                  </a>
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
              <div class="hidden md:flex md:space-x-6 md:mt-2">
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
                          open ? '' : 'text-gray-400',
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
                          class="shadow-lg ring-1 ring-blue-500 ring-opacity-30 dark:ring-0 overflow-hidden"
                        >
                          <div
                            class="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8"
                          >
                            <a
                              v-for="item in resources"
                              :key="item.name"
                              :href="item.href"
                              class="-m-3 p-3 rounded flex items-start hover:bg-blue-100 dark:hover:bg-gray-900 transition ease-in-out duration-150"
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
                                <p class="mt-1 text-sm">
                                  {{ item.description }}
                                </p>
                              </div>
                            </a>
                          </div>
                          <div
                            class="px-5 py-5 bg-blue-100 dark:bg-gray-700 sm:px-8 sm:py-8"
                          >
                            <div>
                              <h3
                                class="text-sm tracking-wide font-medium uppercase"
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
                                    class="font-medium hover:text-gray-900 dark:hover:text-gray-500 transition ease-in-out duration-150"
                                  >
                                    <span
                                      v-if="
                                        new Date(post.created) >
                                        Date.now() - 1555200000 // 18 days
                                      "
                                      class="inline-block text-sm bg-red-500 dark:bg-red-600 px-1 text-white rounded-md align-text-top mr-1"
                                      >new</span
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
                  :href="'https://simpleanalytics.com/welcome?theme=' + theme"
                  class="font-medium hover:text-gray-900 mx-3"
                >
                  {{ $t("nav.signup") }}
                </a>
                <a
                  :href="'https://simpleanalytics.com/login?theme=' + theme"
                  class="inline-flex items-center px-4 py-2 button"
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
                class="rounded-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <SimpleAnalyticsIcon class="h-8 w-auto" />
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
  MoonIcon,
  SunIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import BackgroundShapes from "../components/images/BackgroundShapes.vue";
import SimpleAnalyticsIcon from "../components/images/SimpleAnalyticsIcon.vue";

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

const theme = useTheme();
const open = ref(false);

const themeCookie = useCookie("theme", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});

if (process.client) {
  if (!themeCookie.value) themeCookie.value = theme.value;

  window
    .matchMedia?.("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const mode = event.matches ? "dark" : "light";
      theme.value = mode;
      themeCookie.value = mode;
    });
}

const toggleTheme = () => {
  if (theme.value === "light") theme.value = "dark";
  else theme.value = "light";

  themeCookie.value = theme.value;
};

const { pending, data: recentPosts } = useLazyFetch(
  "https://blog.simpleanalytics.com/recent-posts.json"
);
</script>
