<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-[#eef9ff] overflow-hidden">
    <div
      class="sa-background hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
      aria-hidden="true"
    ></div>

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
                <a href="/" class="flex items-center">
                  <SimpleAnalyticsIcon class="h-5 w-auto sm:h-6" />
                  <span
                    class="sm:hidden lg:block ml-3 text-xl sm:text-2xl text-gray-600"
                    >Simple Analytics</span
                  >
                </a>
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
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="font-medium text-gray-500 hover:text-gray-900"
                >{{ item.name }}</a
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
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
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

      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div class="text-center">
          <h1
            class="text-4xl font-medium text-gray-600 sm:text-5xl md:text-6xl"
          >
            <span class="leading-snug"
              >The <span class="text-red-500">privacy-first</span></span
            >
            {{ " " }}
            <span class="block leading-snug"
              >Google Analytics alternative.</span
            >
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            For organizations that care about their user's privacy
          </p>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Trusted by Governments, NGOs, and Small to Mid-sized Enterprises.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-full shadowXX">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border-2 border-red-500 text-base font-medium rounded-full text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10 hover:border-red-600"
              >
                Start trial now
              </a>
            </div>
            <div class="mt-3 rounded-full shadowXX sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border-2 border-red-500 text-base font-medium rounded-full text-red-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                See live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import SimpleAnalyticsIcon from "./images/SimpleAnalyticsIcon.vue";

const navigation = [
  { name: "Pricing", href: "#" },
  { name: "Sign up", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>

<style scoped>
.sa-background {
  background-image: url("https://assets.simpleanalytics.com/images/background-shapes.svg");
  background-position: center -150px;
  background-size: 200%;
  background-repeat: no-repeat;
}
</style>
