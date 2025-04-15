<template>
  <div class="max-w-6xl mx-auto">
    <div class="max-w-4xl text-center mx-auto">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("press.mediaKit.title") }}
      </h1>
      <p class="mt-8 text-lg">
        {{ $t("press.mediaKit.description") }}
      </p>
    </div>

    <div class="max-w-4xl px-6 mx-auto mt-12">
      <h2 class="text-2xl font-medium mb-6">
        {{ $t("press.mediaKit.logo.title") }}
      </h2>
      <p class="mb-6">{{ $t("press.mediaKit.logo.description") }}</p>
      <p class="mb-6">{{ $t("press.mediaKit.logo.downloadInstructions") }}</p>

      <h3 class="text-xl font-medium mb-4">
        {{ $t("press.mediaKit.logo.ratio1to1") }}
      </h3>
      <div class="press-images ratio1to1">
        <div v-for="(logo, index) in logos1to1" :key="index" class="mb-8">
          <p class="mb-2">{{ logo.name }}</p>
          <div
            class="bg-gray-100"
            style="
              background-image: url(&quot;https://assets.simpleanalytics.com/press/background-raster-light.svg&quot;);
              background-repeat: repeat;
            "
          >
            <img
              loading="lazy"
              :src="logo.preview"
              :alt="logo.name"
              class="w-full"
            />
          </div>
          <p class="mt-2 flex flex-wrap gap-2">
            <a
              v-for="(format, fIndex) in logo.formats"
              :key="fIndex"
              :href="format.url"
              class="mr-2 text-blue-600 hover:text-blue-800 flex items-center"
              download
            >
              <ArrowDownTrayIcon class="w-4 h-4 mr-1" />
              {{ format.type }}
            </a>
          </p>
        </div>
      </div>

      <h3 class="text-xl font-medium mb-4 mt-8">
        {{ $t("press.mediaKit.logo.ratio3to2") }}
      </h3>
      <div class="press-images ratio3to2">
        <div v-for="(logo, index) in logos3to2" :key="index" class="mb-8">
          <p class="mb-2">{{ logo.name }}</p>
          <div
            class="bg-gray-100"
            style="
              background-image: url(&quot;https://assets.simpleanalytics.com/press/background-raster-light.svg&quot;);
              background-repeat: repeat;
            "
          >
            <img
              loading="lazy"
              :src="logo.preview"
              :alt="logo.name"
              class="w-full"
            />
          </div>
          <p class="mt-2 flex flex-wrap gap-2">
            <a
              v-for="(format, fIndex) in logo.formats"
              :key="fIndex"
              :href="format.url"
              class="mr-2 text-blue-600 hover:text-blue-800 flex items-center"
              download
            >
              <ArrowDownTrayIcon class="w-4 h-4 mr-1" />
              {{ format.type }}
            </a>
          </p>
        </div>
      </div>

      <h3 class="text-xl font-medium mb-4 mt-8">
        {{ $t("press.mediaKit.logo.wide") }}
      </h3>
      <div class="press-images wide">
        <div v-for="(logo, index) in logosWide" :key="index" class="mb-8">
          <p class="mb-2">{{ logo.name }}</p>
          <div
            :class="['bg-gray-100', { 'bg-gray-800': logo.dark }]"
            style="
              background-image: url(&quot;https://assets.simpleanalytics.com/press/background-raster-light.svg&quot;);
              background-repeat: repeat;
            "
          >
            <img
              loading="lazy"
              :src="logo.preview"
              :alt="logo.name"
              class="w-full"
            />
          </div>
          <p class="mt-2 flex flex-wrap gap-2">
            <a
              v-for="(format, fIndex) in logo.formats"
              :key="fIndex"
              :href="format.url"
              class="mr-2 text-blue-600 hover:text-blue-800 flex items-center"
              download
            >
              <ArrowDownTrayIcon class="w-4 h-4 mr-1" />
              {{ format.type }}
            </a>
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-medium mb-6 mt-12">
        {{ $t("press.mediaKit.screenshots.title") }} (16:9)
      </h2>
      <p class="mb-6">{{ $t("press.mediaKit.screenshots.description") }}</p>

      <div class="flex items-center mb-6 justify-center">
        <p class="mr-2 cursor-pointer" @click="showDarkMode = false">
          {{ $t("press.mediaKit.screenshots.modes.light") }}
        </p>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="showDarkMode" class="sr-only peer" />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
        </label>
        <p class="ml-2 cursor-pointer" @click="showDarkMode = true">
          {{ $t("press.mediaKit.screenshots.modes.dark") }}
        </p>
      </div>
    </div>

    <div class="press-images">
      <div v-for="(screenshot, index) in screenshots" :key="index" class="mb-8">
        <p class="mb-2">{{ screenshot.name }}</p>
        <div class="relative">
          <img
            loading="lazy"
            :src="showDarkMode ? screenshot.dark : screenshot.light"
            :alt="`${screenshot.name} (${showDarkMode ? 'dark' : 'light'} mode)`"
            class="w-full rounded-lg shadow-md"
          />
          <div class="flex mt-2 lowercase">
            <a
              :href="screenshot.light"
              class="mr-4 text-blue-600 hover:text-blue-800 flex items-center"
              download
            >
              <ArrowDownTrayIcon class="w-4 h-4 mr-1" />
              {{ $t("press.mediaKit.screenshots.modes.light") }}
            </a>
            <a
              :href="screenshot.dark"
              class="text-blue-600 hover:text-blue-800 flex items-center"
              download
            >
              <ArrowDownTrayIcon class="w-4 h-4 mr-1" />
              {{ $t("press.mediaKit.screenshots.modes.dark") }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-medium mb-6 mt-12">
        {{ $t("press.mediaKit.mockups.title") }}
      </h2>
      <p class="mb-6">{{ $t("press.mediaKit.mockups.description") }}</p>
    </div>

    <div class="press-images">
      <div v-for="(mockup, index) in mockups" :key="index" class="mb-8">
        <p class="mb-2">{{ mockup.name }}</p>
        <a :href="mockup.url" target="_blank">
          <img
            loading="lazy"
            :src="mockup.preview"
            :alt="mockup.name"
            class="w-full rounded-lg shadow-md"
          />
        </a>
        <div class="flex mt-2">
          <a
            :href="mockup.url"
            class="text-blue-600 hover:text-blue-800 flex items-center lowercase"
            download
          >
            <ArrowDownTrayIcon class="w-4 h-4 mr-1" />
            {{ $t("press.mediaKit.mockups.download") }}
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-4xl px-6 mx-auto mt-12">
      <h2 class="text-2xl font-medium mb-6 mt-12">
        {{ $t("press.mediaKit.font.title") }}
      </h2>
      <p class="mb-6" v-html="$t('press.mediaKit.font.description')"></p>

      <a
        href="https://assets.simpleanalytics.com/press/fonts/space-grotesk.pdf"
        class="inline-block"
      >
        <img
          loading="lazy"
          src="https://assets.simpleanalytics.com/press/fonts/space-grotesk-pdf-preview.png"
          :alt="$t('press.mediaKit.font.previewAlt')"
          class="rounded-lg shadow-md h-[200px]"
        />
      </a>

      <h2 class="text-2xl font-medium mb-6 mt-12">
        {{ $t("press.mediaKit.badges.title") }}
      </h2>
      <p class="mb-6" v-html="$t('press.mediaKit.badges.description')"></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { t } = useI18n();
const showDarkMode = ref(false);
import { ArrowDownTrayIcon } from "@heroicons/vue/24/solid";

const logos1to1 = [
  {
    name: "Logo 400x400px round",
    preview:
      "https://assets.simpleanalytics.com/press/logo-ratio-1-1/round.svg",
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/round.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/round.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/round@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/round@3x.png",
      },
    ],
  },
  {
    name: "Logo 400x400px rounded",
    preview:
      "https://assets.simpleanalytics.com/press/logo-ratio-1-1/rounded.svg",
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/rounded.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/rounded.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/rounded@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/rounded@3x.png",
      },
    ],
  },
  {
    name: "Logo 400x400px square",
    preview:
      "https://assets.simpleanalytics.com/press/logo-ratio-1-1/square.svg",
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/square.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/square.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/square@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-1-1/square@3x.png",
      },
    ],
  },
];

const logos3to2 = [
  {
    name: "White on red",
    preview:
      "https://assets.simpleanalytics.com/press/logo-ratio-3-2/white-on-red.svg",
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/white-on-red.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/white-on-red.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/white-on-red@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/white-on-red@3x.png",
      },
    ],
  },
  {
    name: "Red on transparent",
    preview:
      "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-transparent.svg",
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-transparent.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-transparent.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-transparent@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-transparent@3x.png",
      },
    ],
  },
  {
    name: "Red on white",
    preview:
      "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-white.svg",
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-white.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-white.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-white@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-ratio-3-2/red-on-white@3x.png",
      },
    ],
  },
];

const logosWide = [
  {
    name: "Wide logo light",
    preview: "https://assets.simpleanalytics.com/press/logo-wide/light.svg",
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-wide/light.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/light.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/light@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/light@3x.png",
      },
    ],
  },
  {
    name: "Wide logo dark",
    preview: "https://assets.simpleanalytics.com/press/logo-wide/dark.svg",
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-wide/dark.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/dark.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/dark@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/dark@3x.png",
      },
    ],
  },
  {
    name: "Wide logo transparent light",
    preview:
      "https://assets.simpleanalytics.com/press/logo-wide/transparent-light.svg",
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-wide/transparent-light.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/transparent-light.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/transparent-light@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/transparent-light@3x.png",
      },
    ],
  },
  {
    name: "Wide logo transparent dark",
    preview:
      "https://assets.simpleanalytics.com/press/logo-wide/transparent-dark.svg",
    dark: true,
    formats: [
      {
        type: "svg",
        url: "https://assets.simpleanalytics.com/press/logo-wide/transparent-dark.svg",
      },
      {
        type: "png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/transparent-dark.png",
      },
      {
        type: "@2x.png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/transparent-dark@2x.png",
      },
      {
        type: "@3x.png",
        url: "https://assets.simpleanalytics.com/press/logo-wide/transparent-dark@3x.png",
      },
    ],
  },
];

const screenshots = [
  {
    name: "Dashboard Chart",
    light:
      "https://assets.simpleanalytics.com/press/screenshots/dashboard-light-chart.png",
    dark: "https://assets.simpleanalytics.com/press/screenshots/dashboard-dark-chart.png",
  },
  {
    name: "Dashboard Top Lists",
    light:
      "https://assets.simpleanalytics.com/press/screenshots/dashboard-light-top-lists.png",
    dark: "https://assets.simpleanalytics.com/press/screenshots/dashboard-dark-top-lists.png",
  },
  {
    name: "Dashboard AI",
    light:
      "https://assets.simpleanalytics.com/press/screenshots/dashboard-light-ai.png",
    dark: "https://assets.simpleanalytics.com/press/screenshots/dashboard-dark-ai.png",
  },
  {
    name: "Dashboard Goals",
    light:
      "https://assets.simpleanalytics.com/press/screenshots/dashboard-light-goals.png",
    dark: "https://assets.simpleanalytics.com/press/screenshots/dashboard-dark-goals.png",
  },
  {
    name: "Dashboard Events Explorer",
    light:
      "https://assets.simpleanalytics.com/press/screenshots/dashboard-light-events-explorer.png",
    dark: "https://assets.simpleanalytics.com/press/screenshots/dashboard-dark-events-explorer.png",
  },
];

const mockups = [
  {
    name: "Dashboard MacBook Air",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/dashboard-macbook-air.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/dashboard-macbook-air.jpg",
  },
  {
    name: "Dashboard iPad",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/dashboard-ipad.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/dashboard-ipad.jpg",
  },
  {
    name: "Dashboard iPhone",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/dashboard-iphone.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/dashboard-iphone.jpg",
  },
  {
    name: "Homepage iMac",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/homepage-imac.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/homepage-imac.jpg",
  },
  {
    name: "Weekly update iPhone",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/weekly-updates-iphone.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/weekly-updates-iphone.jpg",
  },
  {
    name: "Homepage video MacBook",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/homepage-video-macbook.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/homepage-video-macbook.jpg",
  },
  {
    name: "Open Startup iPad",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/open-startup-ipad.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/open-startup-ipad.jpg",
  },
  {
    name: "Open Startup Samsung Laptop",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/password-login-samsung-laptop.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/password-login-samsung-laptop.jpg",
  },
  {
    name: "Open Startup MacBook",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/open-startup-macbook-dark-desk.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/open-startup-macbook-dark-desk.jpg",
  },
  {
    name: "Open Startup MacBook",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/open-startup-macbook-dark-library.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/open-startup-macbook-dark-library.jpg",
  },
  {
    name: "Open Startup MacBook",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/open-startup-macbook.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/open-startup-macbook.jpg",
  },
  {
    name: "Pageviews right now iPhone",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/page-views-right-now-iphone.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/page-views-right-now-iphone.jpg",
  },
  {
    name: "Referrer Spam iPad",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/referrer-spam-ipad.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/referrer-spam-ipad.jpg",
  },
  {
    name: "Referrer Spam MacBook",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/referrer-spam-macbook.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/referrer-spam-macbook.jpg",
  },
  {
    name: "Docs on Sessions iMac",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/uniques-imac.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/uniques-imac.jpg",
  },
  {
    name: "Website Settings Tablet",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/website-settings-tablet.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/website-settings-tablet.jpg",
  },
  {
    name: "Websites Overview Macbook",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/websites-macbook-library.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/websites-macbook-library.jpg",
  },
  {
    name: "Badges iPad",
    preview:
      "https://assets.simpleanalytics.com/press/screenshots/badges-ipad.jpg",
    url: "https://assets.simpleanalytics.com/press/screenshots/badges-ipad.jpg",
  },
];

definePageMeta({
  title: "Media Kit - Simple Analytics",
  description:
    "Download Simple Analytics logos, screenshots, and other media assets for press and media usage.",
});
</script>

<style>
.press-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.press-images.wide {
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}

.press-images.ratio1to1 {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.press-images.ratio3to2 {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

@media (max-width: 640px) {
  .press-images {
    grid-template-columns: 1fr;
  }

  .press-images.wide {
    grid-template-columns: 1fr;
  }
}
</style>
