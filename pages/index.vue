<template>
  <NuxtLayout name="default">
    <template #hero>
      <div class="text-center">
        <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
          <span class="leading-snug" v-html="$t('home.title')"></span>
        </h1>
        <p
          class="mt-4 max-w-md mx-auto text-base sm:text-lg md:mt-8 md:text-xl md:max-w-3xl"
        >
          {{ $t("home.subtitle") }}
        </p>

        <div class="flex items-center justify-center mt-6 sm:mt-10">
          <HavasMediaLogo class="h-14 mt-0 m-4 sm:m-8" />
          <GovScotLogo class="h-16 mt-1 m-4 sm:m-8" />
          <GovUKLogo class="h-16 mt-0 m-4 sm:m-8" />
          <HyundaiLogo class="h-14 mt-0 m-4 sm:m-8" />
        </div>

        <div class="mt-5 max-w-lg mx-auto sm:flex sm:justify-center md:mt-4">
          <div>
            <a
              :href="'https://simpleanalytics.com/welcome?theme=' + theme"
              class="button large primary"
            >
              {{ $t("home.start_trial_now") }}
            </a>
            <p class="mb-8 sm:mb-0 text-xs mt-2">
              <CheckIcon class="fill-green-500 w-4 inline align-text-top" />
              {{ $t("home.no_creditcard") }}
            </p>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              :href="
                'https://simpleanalytics.com/simpleanalytics.com?theme=' + theme
              "
              class="button large"
            >
              {{ $t("home.see_live_demo") }}
            </a>
          </div>
        </div>
      </div>
    </template>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <div class="max-w-2xl -mt-4 sm:-mt-14 z-10 mx-auto relative" style="">
        <div
          class="absolute z-50 flex flex-col items-center justify-center w-full h-full"
        >
          <NuxtLink
            :href="
              'https://simpleanalytics.com/simpleanalytics.com?theme=' + theme
            "
            class="button large primary shadow-xl bg-white dark:bg-gray-800"
          >
            {{ $t("home.go_to_live_demo") }}
          </NuxtLink>
          <a
            @click="scrollToSeekVideo()"
            class="mt-4 button tiny shadow-xl bg-white dark:bg-gray-800"
          >
            <ChevronDoubleDownIcon class="w-3 inline-block" />
            <span class="mx-1">See full video</span>
            <ChevronDoubleDownIcon class="w-3 inline-block" />
          </a>
        </div>

        <div
          class="dark:shadow-none shadow-sm shadow-gray-200 rounded-md"
          style="aspect-ratio: 1400 / 1014"
        >
          <video
            ref="previewVideoLight"
            loop=""
            muted=""
            playsinline=""
            crossorigin="anonymous"
            class="shadow-lg shadow-gray-200 rounded-md bg-blue-100 -z-10 dark:hidden"
            preload="none"
            width="1440px"
            height="1130px"
            style="aspect-ratio: 1440 / 1130"
            data-poster-webp="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/poster.webp"
            data-poster-png="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/poster.png"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/video.webm"
              type="video/webm"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/video.ogg"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/video.wmv"
              type="video/wmv"
            />
          </video>
          <video
            ref="previewVideoDark"
            loop=""
            muted=""
            playsinline=""
            crossorigin="anonymous"
            class="rounded-md bg-gray-900 shadow-gray-700/40 shadow-2xl -z-10 hidden dark:block"
            preload="none"
            width="1440px"
            height="1130px"
            style="aspect-ratio: 1440 / 1130"
            data-poster-webp="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/poster.webp"
            data-poster-png="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/poster.png"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/video.webm"
              type="video/webm"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/video.ogg"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/video.wmv"
              type="video/wmv"
            />
          </video>
        </div>
      </div>

      <Quote
        class="mt-4"
        :logo="DuckDuckGoLogo"
        :title="$t('testimonials.duckduckgo.name')"
        :subtitle="$t('testimonials.duckduckgo.role')"
        :quote="$t('testimonials.duckduckgo.quote')"
      />
    </div>

    <div
      class="bg-gradient-to-t from-blue-100 dark:from-gray-700 py-4 relative overflow-hidden pb-28"
    >
      <div class="max-w-3xl px-4 mx-auto text-center">
        <h3
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
        >
          The most privacy-friendly analytics online.
        </h3>
      </div>
      <ul class="mx-auto max-w-max text-left">
        <li class="flex items-center my-4">
          <ShieldCheckIcon
            class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
          />
          <p>
            We <span class="text-red-500 dark:text-red-600">comply</span> by
            design with all privacy<br />policies - GDPR, PECR, CCPA and more.
          </p>
        </li>
        <li class="flex items-center my-4">
          <ShieldCheckIcon
            class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
          />
          <p>
            We
            <span class="text-red-500 dark:text-red-600">never track</span>
            anyone,
            <a
              class="text-red-500 dark:text-red-600 underline"
              href="https://simpleanalytics.com/our-promise"
              target="_blank"
              >we promise<ArrowSmRightIcon class="inline ml-1 w-4 fill-red-500"
            /></a>
          </p>
        </li>
        <li class="flex items-center my-4">
          <ShieldCheckIcon
            class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
          />
          <p>
            We don’t
            <span class="text-red-500 dark:text-red-600">store</span> or
            <span class="text-red-500 dark:text-red-600">sell</span> any visitor
            data
          </p>
        </li>
        <li class="flex items-center my-4">
          <ShieldCheckIcon
            class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
          />
          <p>
            No
            <span class="text-red-500 dark:text-red-600">cookie banner</span>
            required
          </p>
        </li>
      </ul>

      <ClientOnly>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <BackgroundChart
            class="fill-blue-50 stroke-blue-500 dark:fill-gray-800"
          />
        </div>
      </ClientOnly>
    </div>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <Quote
        class="mt-4"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=707b9c33066bf8808c934c8ab394dff6"
        title="Manager X"
        subtitle="Company x"
        quote="We're proud to be able to tell our customers that we don't track them at
      all."
      />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
      >
        Simple.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        One dashboard to instantly see how many visitors are coming to your
        website. Where they come from. And what they do once they're there.
        Without cookies. Without stalking.
      </p>

      <div class="mt-4 mb-8">
        <div>
          <p
            ref="seekVideoInstruction"
            class="mb-4 p-1 pt-8 px-2 mx-auto inline-flex rounded-full text-sm text-gray-400 motion-safe:animate-bounce"
            :class="showClickSeekButton ? 'visible' : 'invisible'"
          >
            <ChevronDoubleDownIcon class="w-3 inline-block" />
            <span class="mx-1">See it for yourself, click a button</span>
            <ChevronDoubleDownIcon class="w-3 inline-block" />
          </p>
        </div>
        <a
          class="button tiny m-1"
          :class="active === seek.translation ? 'primary' : ''"
          v-for="seek in videoSeeks"
          @click="jumpToTime(seek)"
          :key="seek.translation"
        >
          <ArrowCircleRightIcon
            v-if="active === seek.translation"
            class="w-4 mr-1"
          />
          <PlayIcon v-else class="w-4 mr-1" />
          {{ $t(seek.translation) }}
        </a>
      </div>
      <div
        class="dark:shadow-none my-8 mb-12 shadow-sm shadow-gray-200 rounded-md"
      >
        <div
          class="dark:shadow-none shadow-lg shadow-gray-200 rounded-md relative"
        >
          <div
            :class="paused && active ? 'opacity-100' : 'opacity-0'"
            class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-red-500 dark:from-red-900 to-red-400 dark:to-red-700 rounded-md flex flex-col items-center justify-center transition-opacity pointer-events-none"
          >
            <p class="text-lg md:text-2xl text-red-100 dark:text-red-400 mb-4">
              {{ $t("seek.presents") }}
            </p>
            <p
              v-if="active"
              class="text-2xl md:text-4xl text-white dark:text-red-200 font-bold"
            >
              {{ $t(active) }}
            </p>
          </div>

          <video
            ref="seekVideoLight"
            loop=""
            muted=""
            playsinline=""
            crossorigin="anonymous"
            class="rounded-md bg-blue-100 dark:hidden"
            preload="none"
            width="1440"
            height="1130px"
            style="aspect-ratio: 1440 / 1130"
            data-poster-webp="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/poster.webp"
            data-poster-png="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/poster.png"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/video.webm"
              type="video/webm"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/video.ogg"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/video.wmv"
              type="video/wmv"
            />
            <p>
              Your browser doesn't support HTML5 video. Here is a
              <a
                href="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-light/video.mp4"
                target="_blank"
                rel="noopener"
                >link to the video</a
              >
              instead.
            </p>
          </video>
          <div
            class="rounded-xl shadow-gray-700/40 shadow-2xl dark:border-2 border-gray-900 overflow-hidden"
          >
            <video
              ref="seekVideoDark"
              loop=""
              muted=""
              playsinline=""
              crossorigin="anonymous"
              class="bg-gray-500 hidden dark:block"
              preload="none"
              width="1440"
              height="1130px"
              style="aspect-ratio: 1440 / 1130"
              data-poster-webp="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/poster.webp"
              data-poster-png="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/poster.png"
            >
              <source
                src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/video.mp4"
                type="video/mp4"
              />
              <source
                src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/video.webm"
                type="video/webm"
              />
              <source
                src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/video.ogg"
                type="video/ogg"
              />
              <source
                src="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/video.wmv"
                type="video/wmv"
              />
              <p>
                Your browser doesn't support HTML5 video. Here is a
                <a
                  href="https://assets.simpleanalytics.com/videos/2022-05-05-dashboard-dark/video.mp4"
                  target="_blank"
                  rel="noopener"
                  >link to the video</a
                >
                instead.
              </p>
            </video>
          </div>
        </div>
      </div>

      <div>
        <p>
          <a
            :href="'https://simpleanalytics.com/welcome?theme=' + theme"
            class="button primary"
            >Start free trial now</a
          >
        </p>
        <p class="mb-8 sm:mb-0 text-xs mt-4">
          <span class="block sm:inline my-2">
            <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
            Free 14-day trial
          </span>
          <span class="block sm:inline my-2">
            <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
            No credit card required
          </span>
          <span class="block sm:inline my-2">
            <CheckIcon class="fill-green-500 ml-2 w-4 inline align-text-top" />
            Cancel anytime
          </span>
        </p>
      </div>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-24 sm:mb-8 font-medium"
      >
        Connect
        <span class="text-red-500 dark:text-red-600">your data</span> with your
        unique workflow.
      </h3>
    </div>

    <section
      class="bg-gradient-to-t from-red-50 dark:from-gray-700 mt-12 w-full relative overflow-hidden pb-32"
    >
      <div class="block md:flex md:items-center max-w-3xl mx-auto px-8 sm:px-0">
        <ClientOnly>
          <DataConnections class="max-w-full mx-auto w-[350px]" />

          <template #fallback>
            <div
              class="max-w-full mx-auto w-[350px] h-[290px] rounded bg-gray-200 animate-pulse"
            ></div>
          </template>
        </ClientOnly>

        <ul class="mx-auto max-w-max text-left mt-12 sm:mt-0">
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              <a
                class="text-red-500 dark:text-red-600 underline"
                href="https://simpleanalytics.com/our-promise"
                target="_blank"
                >Import your data from Google Analytics
                <ArrowSmRightIcon class="inline ml-1 w-4 fill-red-500"
              /></a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              Use Google Tag Manager, CloudFlare,<br />or our many frontend
              <a
                class="text-red-500 dark:text-red-600 underline"
                href="https://docs.simpleanalytics.com/script"
                >framework plugins
                <ArrowSmRightIcon class="inline ml-1 w-4 fill-red-500"
              /></a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              Export to your own systems or
              <span class="text-red-500 dark:text-red-600">data lakes</span>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              Export as
              <span class="text-red-500 dark:text-red-600">raw data</span> or
              aggregated
            </p>
          </li>
        </ul>
      </div>

      <ClientOnly>
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-x-[-1]"
        >
          <BackgroundChart
            class="fill-blue-50 stroke-red-500 dark:stroke-red-600 dark:fill-gray-800"
          />
        </div>
      </ClientOnly>
    </section>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <Quote
        class="mt-4"
        :logo="DuckDuckGoLogo"
        title="Anonymous Owner"
        subtitle="..."
        quote="After switching from GA, I tried out another privacy-focused analytics
      solution but it turned out it was too minimal and didn't give me what I
      needed. I make decisions based on data. Luckily, Simple Analytics shows
      the exact metrics I need to know about in order to grow my business, while
      also being respectful of the privacy of my visitors. AND it loads
      extremely quickly, making it SEO-friendly"
      />
    </div>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium"
      >
        Event tracking without tracing individuals.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        Compare multiple campaigns by their UTM codes. Check the performance of
        every button, click and page visit you want.
      </p>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        This feature is currently available in beta and is expected to be
        released later this year.
      </p>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium"
      >
        Easily collaborate with your team or clients.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        Create users. Grant access to the sites you want them to see. Analyze
        together.
      </p>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium"
      >
        Dark mode.
      </h3>
      <p class="my-4 sm:mb-8 leading-loose max-w-xl mx-auto">
        For those who keep
        <span class="line-through dark:text-gray-500">working</span>
        <span class="text-red-500 dark:text-red-600"> coding </span> at night.
      </p>
    </div>

    <div
      class="w-full pt-8 pb-2 sm:pt-12 sm:pb-2 md:pt-16 md:pb-4 overflow-hidden"
    >
      <div class="w-2/3 mx-auto max-w-lg" :class="theme" data-carousel>
        <img
          @click="toggleTheme()"
          src="https://simpleanalyticsassets.b-cdn.net/images/homepage/homepage-light.png"
          class="relative transition rounded-lg shadow-md cursor-pointer"
        />
        <img
          @click="toggleTheme()"
          src="https://simpleanalyticsassets.b-cdn.net/images/homepage/homepage-dark.png"
          class="relative transition rounded-lg shadow-md cursor-pointer"
        />
      </div>
    </div>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <p class="mt-4 mb-8 text-sm">
        <a @click="toggleTheme()" class="mt-1 button tiny">
          <span class="ml-2">Toggle dark mode</span>
          <SunIcon class="h-6 p-1 ml-1 stroke-red-600 hidden dark:block" />
          <MoonIcon class="h-6 p-1 ml-1 stroke-red-500 dark:hidden" />
        </a>
      </p>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium"
      >
        Automate reports.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        Save time while keeping others in the loop of your results. Schedule
        your reports to be shared automatically at any time you want.
      </p>

      <div
        class="md:flex items-center justify-center mt-2 mb-4 sm:mt-12 sm:mb-8"
      >
        <div class="md:order-2 mx-auto max-w-max text-left mt-12 sm:mt-0">
          <h3
            class="text-2xl sm:text-4xl text-center md:text-left leading-normal sm:leading-normal font-medium"
          >
            Take it mobile.
          </h3>
          <ul>
            <li class="flex items-center my-6">
              <ShieldCheckIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p>
                <span class="text-red-500 dark:text-red-600">Keep an eye</span>
                on your dashboard<br class="block sm:hidden" />
                via your iPhone
              </p>
            </li>
            <li class="flex items-center my-6">
              <ShieldCheckIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p>
                Add
                <span class="text-red-500 dark:text-red-600">widgets</span> to
                your home screen
              </p>
            </li>
            <li class="flex items-center my-6">
              <ShieldCheckIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p>
                <span class="text-red-500 dark:text-red-600">Block visits</span>
                from yourself
              </p>
            </li>
            <li class="flex items-center my-6">
              <ShieldCheckIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p>
                See
                <span class="text-red-500 dark:text-red-600">spikes</span> as
                they happen
              </p>
            </li>
          </ul>
        </div>

        <div class="md:order-1 max-w-max mx-auto">
          <Video
            width="200"
            height="410"
            color="#71c8ea"
            poster="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-light/poster.png"
            poster-webp="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-light/poster.webp"
            poster-png="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-light/poster.png"
            :autoplay="true"
            class="dark:hidden"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-light/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-light/video.webm"
              type="video/webm"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-light/video.ogg"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-light/video.wmv"
              type="video/wmv"
            />
          </Video>

          <Video
            width="200"
            height="410"
            poster="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-dark/poster.png"
            poster-webp="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-dark/poster.webp"
            poster-png="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-dark/poster.png"
            :autoplay="true"
            class="hidden dark:block"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-dark/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-dark/video.webm"
              type="video/webm"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-dark/video.ogg"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-05-06-iphone-widgets-dark/video.wmv"
              type="video/wmv"
            />
          </Video>
        </div>
      </div>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-lg mx-auto mt-2 mb-4 sm:mt-24 sm:mb-8 font-medium"
      >
        When you ask videographers to create something fun.
      </h3>

      <div class="flex flex-col sm:flex-row -mx-2">
        <div class="basis-2/4 mx-2">
          <Video
            width="1440"
            height="810"
            color="#71c8ea"
            poster="https://assets.simpleanalytics.com/videos/2022-03-39-tropical-analytics/video.png"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-39-tropical-analytics/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-39-tropical-analytics/video.webm"
              type="video/webm"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-39-tropical-analytics/video.ogg"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-39-tropical-analytics/video.wmv"
              type="video/wmv"
            />
          </Video>

          <p class="mt-3 text-xs">
            Why our founder getting crazy on his tropical island.
          </p>
        </div>

        <div class="basis-2/4 mx-2 mt-6 sm:mt-0">
          <Video
            width="854"
            height="480"
            color="#5d3828"
            poster="https://assets.simpleanalytics.com/videos/promo/v2/promo.jpg"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/promo/v2/promo.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/promo/v2/promo.ogv"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/promo/v2/promo.webm"
              type="video/webm"
            />
            <track
              label="English"
              kind="subtitles"
              srclang="en"
              src="https://assets.simpleanalytics.com/videos/promo/v2/promo.vtt"
              default=""
            />
          </Video>
          <p class="mt-3 text-xs">Is he getting paronoid?</p>
        </div>
      </div>

      <p class="py-20"></p>
    </div>
  </NuxtLayout>
</template>

<script setup>
import HavasMediaLogo from "../components/logos/HavasMedia.vue";
import GovScotLogo from "../components/logos/GovScot.vue";
import GovUKLogo from "../components/logos/GovUK.vue";
import HyundaiLogo from "../components/logos/Hyundai.vue";
import DuckDuckGoLogo from "../components/logos/DuckDuckGo.vue";
import Quote from "../components/Quote.vue";
import DataConnections from "../components/images/DataConnections.vue";
import ListIcon from "../components/images/ListIcon.vue";
import BackgroundChart from "../components/images/BackgroundChart.vue";
import Video from "../components/Video.vue";

import {
  ArrowSmRightIcon,
  CheckIcon,
  PlayIcon,
  PauseIcon,
  ArrowCircleRightIcon,
} from "@heroicons/vue/solid";

import {
  ShieldCheckIcon,
  ChevronDoubleDownIcon,
  ArrowsExpandIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/vue/outline";

definePageMeta({
  title: "Simple Analytics - The privacy-first Google Analytics alternative",
  layout: false,
});

const previewVideoLight = ref(null);
const previewVideoDark = ref(null);
const seekVideoLight = ref(null);
const seekVideoDark = ref(null);

const videoSeeksLight = [
  { translation: "seek.overview", start: 0, end: 3 },
  { translation: "seek.key_stats", start: 3, end: 15 },
  { translation: "seek.date_picker", start: 15, end: 24 },
  { translation: "seek.page_views", start: 24, end: 33 },
  { translation: "seek.segment", start: 33, end: 51 },
  { translation: "seek.utm_sources", start: 51, end: 69 },
  { translation: "seek.countries", start: 69, end: 78 },
  { translation: "seek.search", start: 78, end: 102 },
  { translation: "seek.tweet_viewer", start: 102, end: 117 },
  { translation: "seek.events", start: 117, end: 128 },
  { translation: "seek.conversion", start: 128, end: Infinity },
];

const videoSeeksDark = [
  { translation: "seek.overview", start: 0, end: 3 },
  { translation: "seek.key_stats", start: 3, end: 14 },
  { translation: "seek.date_picker", start: 14, end: 26 },
  { translation: "seek.page_views", start: 26, end: 33 },
  { translation: "seek.segment", start: 33, end: 52 },
  { translation: "seek.utm_sources", start: 52, end: 67 },
  { translation: "seek.countries", start: 67, end: 79 },
  { translation: "seek.search", start: 79, end: 101 },
  { translation: "seek.tweet_viewer", start: 101, end: 115 },
  { translation: "seek.events", start: 115, end: 131 },
  { translation: "seek.conversion", start: 131, end: Infinity },
];

const theme = useTheme();

const videoSeeks = ref(
  theme.value === "dark" ? videoSeeksDark : videoSeeksLight
);

const themeCookie = useCookie("theme", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});

const toggleTheme = () => {
  if (theme.value === "light") theme.value = "dark";
  else theme.value = "light";

  themeCookie.value = theme.value;
};
</script>

<script>
function checkWebpFeature(feature, callback) {
  const images = {
    lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    alpha:
      "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    animation:
      "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
  };
  const img = new Image();
  img.onload = () => {
    const result = img.width > 0 && img.height > 0;
    callback(result);
  };
  img.onerror = () => {
    callback(false);
  };
  img.src = "data:image/webp;base64," + images[feature];
}

export default {
  data: () => {
    return {
      active: null,
      lastUpdate: Date.now(),
      showClickSeekButton: true,
      paused: false,
      timer: null,
    };
  },
  methods: {
    jumpToTime({ start, translation }) {
      if (this.theme === "dark") {
        this.$refs.seekVideoDark.currentTime = start;
        this.$refs.seekVideoDark.pause();
        this.$refs.seekVideoLight.pause();
      } else {
        this.$refs.seekVideoLight.currentTime = start;
        this.$refs.seekVideoLight.pause();
        this.$refs.seekVideoDark.pause();
      }

      this.paused = true;
      this.active = translation;
      this.lastUpdate = Date.now();
      this.showClickSeekButton = false;

      if (this.timer) clearInterval(this.timer);

      this.timer = setTimeout(() => {
        this.paused = false;
        if (this.theme === "dark") {
          this.$refs.seekVideoDark.play();
        } else {
          this.$refs.seekVideoLight.play();
        }
      }, 1500);
    },
    autoplay() {
      const agent = window?.navigator?.userAgent;
      if (agent)
        return !/bot|crawl|android|webos|iphone|mobile|opera mini/i.test(agent);

      const type = navigator?.connection?.effectiveType;
      if (type) return !["2g", "slow-2g"].includes(type);

      if (!agent) return false;
      return true;
    },
    scrollToSeekVideo() {
      this?.$refs?.seekVideoInstruction.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
  watch: {
    theme() {
      if (!this.autoplay()) return;

      if (this.theme === "dark") {
        this?.$refs?.previewVideoLight.pause();
        this?.$refs?.previewVideoDark.play();
        this?.$refs?.seekVideoLight.pause();
        this?.$refs?.seekVideoDark.play();
      } else {
        this?.$refs?.previewVideoLight.play();
        this?.$refs?.previewVideoDark.pause();
        this?.$refs?.seekVideoLight.play();
        this?.$refs?.seekVideoDark.pause();
      }
    },
  },
  mounted() {
    if (!process.client) return;

    const timeUpdate = ({ target }) => {
      const { currentTime } = target;

      let found = null;

      for (const seek of this.videoSeeks) {
        if (currentTime > seek.start && currentTime < seek.end)
          found = seek.translation;
      }

      if (Date.now() - this.lastUpdate > 2000) this.active = found;
    };

    this?.$refs?.seekVideoLight?.addEventListener("timeupdate", timeUpdate);
    this?.$refs?.seekVideoDark?.addEventListener("timeupdate", timeUpdate);

    if (this.autoplay()) {
      setTimeout(() => {
        if (this.theme === "dark") {
          this?.$refs?.previewVideoDark.play();
          this?.$refs?.seekVideoDark.play();
        } else {
          this?.$refs?.previewVideoLight.play();
          this?.$refs?.seekVideoLight.play();
        }
      }, 1000);
    }

    checkWebpFeature("lossy", (hasSupport) => {
      console.log("support", hasSupport);
      document
        .querySelectorAll("[data-poster-webp][data-poster-png]")
        .forEach((element) => {
          element.poster = hasSupport
            ? element.dataset.posterWebp
            : element.dataset.posterPng;
        });
    });
  },
};
</script>
