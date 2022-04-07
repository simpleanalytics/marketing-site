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
                      class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    >
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  class="font-medium text-gray-500 hover:text-gray-900"
                  >{{ item.name }}</NuxtLink
                >
              </div>
              <div
                class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
              >
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 border-2 border-red-500 text-base font-medium rounded-full text-red-500 bg-white hover:bg-gray-50"
                >
                  Log in
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
                    >{{ item.name }}</NuxtLink
                  >
                </div>
                <a
                  href="/login"
                  class="block w-full px-5 py-3 text-center font-medium text-red-500 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
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

    <main class="max-w-3xl mx-auto px-4 text-center">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import BackgroundShapes from "../components/images/BackgroundShapes.vue";

const defaultDescription =
  "Simple Analytics is the privacy-first Google Analytics alternative that is 100% GDPR compliant.";

const navigation = [
  { name: "Pricing", href: "/pricing" },
  { name: "Sign up", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const route = useRoute();

// This should be renamed to `useHead` in the future.
useMeta({
  title: computed(() => `${route.meta.title} | Simple Analytics`),
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
</script>

<style scoped>
.sa-background-1 {
  background-image: url("https://assets.simpleanalytics.com/images/background-shapes.svg");
  background-position: bottom right;
  background-size: 200%;
  background-repeat: no-repeat;
}
</style>
