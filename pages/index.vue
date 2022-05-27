<template>
  <NuxtLayout name="default">
    <template #hero>
      <p>country: {{ country }}</p>
      <div
        class="max-w-7xl mx-auto px-4 sm:px-2 flex flex-col md:flex-row items-center"
      >
        <div class="text-center md:text-left flex-shrink basis-2/4 md:mr-8">
          <h1 class="text-3xl font-medium sm:text-4xl lg:text-4xl">
            <span class="leading-snug" v-html="$t('home.title')"></span>
          </h1>
          <p
            class="mt-4 text-base sm:text-lg md:mt-8 lg:text-xl md:leading-relaxed leading-relaxed"
          >
            <EuropeanFlag class="inline mr-2 w-8 rounded align-sub" />EU-based
            &amp; hosted. No cookies and<br class="hidden sm:block" />
            a
            <span class="underline-curly text-red-500 dark:text-red-600"
              >direct yes</span
            >
            from your compliance team.
          </p>

          <div
            class="flex items-center justify-center md:justify-start mt-10 sm:mt-12 max-w-full"
          >
            <Logos
              :limit="4"
              class="flex-wrap sm:flex-nowrap"
              tooltipclass="md:justify-start justify-center basis-1/4"
            />
          </div>

          <div
            class="max-w-lg flex flex-wrap mt-8 justify-center sm:justify-start"
          >
            <div class="mt-4 sm:mr-4">
              <a
                :href="'https://simpleanalytics.com/welcome?theme=' + theme"
                class="button large primary"
              >
                {{ $t("home.start_trial_now") }}
              </a>
              <p class="mb-8 sm:mb-0 text-xs mt-2 text-center">
                <CheckIcon class="fill-green-500 w-4 inline align-text-top" />
                {{ $t("home.no_creditcard") }}
              </p>
            </div>
            <div class="hidden sm:block sm:mt-4">
              <a
                :href="
                  'https://simpleanalytics.com/simpleanalytics.com?theme=' +
                  theme
                "
                class="button large group"
              >
                {{ $t("home.see_live_demo") }} <Arrow class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div class="z-10 mx-auto relative basis-2/4">
          <div
            class="absolute z-50 flex flex-col items-center justify-center w-full h-full"
          >
            <a
              @click="scrollToSeekVideo('seek.overview')"
              class="group button large primary shadow-xl bg-white dark:bg-gray-800"
            >
              <ChevronDoubleDownIcon class="w-3 inline-block" />
              <span class="mx-2">See feature video below</span>
              <ChevronDoubleDownIcon class="w-3 inline-block" />
            </a>
            <NuxtLink
              :href="
                'https://simpleanalytics.com/simpleanalytics.com?theme=' + theme
              "
              target="_blank"
              class="mt-4 button tiny shadow-md bg-white dark:bg-gray-800 group"
            >
              <span class="">Play with live demo</span>
              <Arrow class="h-5 w-5" />
            </NuxtLink>
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
              class="shadow-xl shadow-gray-400/20 rounded-md bg-blue-100 -z-10 dark:hidden"
              preload="none"
              width="1440"
              height="1130"
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
              width="1440"
              height="1130"
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
      </div>

      <!-- <div class="mt-10 flex justify-center">
        <a
          class="inline-flex flex-col sm:flex-row items-center"
          href="https://www.capterra.com/p/248710/Simple-Analytics/#about"
          target="_blank"
        >
          <CapterraLogo class="h-10 mr-4" />
          <p class="mt-2 sm:mt-0">based on 5+ reviews</p></a
        >
      </div> -->
    </template>

    <div class="max-w-3xl px-6 mx-auto text-center">
      <!-- 
      <div class="max-w-2xl -mt-4 sm:-mt-24 z-10 mx-auto relative" style="">
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
            @click="scrollToSeekVideo('seek.overview')"
            class="mt-4 button tiny shadow-md bg-white dark:bg-gray-800"
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
            width="1440"
            height="1130"
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
            width="1440"
            height="1130"
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
      -->
    </div>

    <div
      class="bg-gradient-to-t from-blue-100 dark:from-gray-700 py-4 relative overflow-hidden pb-28"
    >
      <div class="max-w-3xl px-6 mt-8 mx-auto text-center">
        <h3
          id="reasons"
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto -mt-4 mb-4 sm:mt-8 sm:mb-8 pt-8 font-medium"
        >
          Why is Simple Analytics the
          <span class="text-red-500 dark:text-red-600">most privacy-first</span>
          analytics?
        </h3>

        <h4 class="my-4 mb-8 text-xl text-center">
          There are 5<span class="text-red-500 dark:text-red-600">+1</span>
          simple reasons that sum it up.
        </h4>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center">
        <div class="basis-2/4 mx-3 mb-8 md:mb-0">
          <Video
            class="ml-auto max-w-[500px]"
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
        </div>
        <div class="basis-2/4 mx-3">
          <ol class="text-left z-20 relative max-w-[400px]">
            <li class="flex items-center my-4">
              <EyeOffIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed">
                1. Privacy protection is
                <span class="text-red-500 dark:text-red-600"
                  >our business model</span
                >. We comply by design with all privacy policies. Including:
                GDPR, PECR, CCPA and more.
              </p>
            </li>
            <li class="flex items-center my-4">
              <KeyIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed">
                2. Your data is always
                <span class="text-red-500 dark:text-red-600">encrypted</span>.
              </p>
            </li>
            <li class="flex items-center my-4">
              <FingerPrintIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed">
                3. We never, ever, ever store any
                <span class="text-red-500 dark:text-red-600"
                  >personal data</span
                >
                about visitors. No
                <span class="text-red-500 dark:text-red-600"
                  >cookies banners</span
                >.
              </p>
            </li>
            <li class="flex items-center my-4">
              <GlobeIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed">
                4. We are an
                <span class="text-red-500 dark:text-red-600"
                  >EU-based company</span
                >
                with EU-based servers.
              </p>
            </li>
            <li class="flex items-center my-4">
              <TableIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed">
                5. You own
                <span class="text-red-500 dark:text-red-600">your data</span>.
                We don't
                <span class="text-red-500 dark:text-red-600">sell</span> any
                visitor data,
                <a
                  class="underline group"
                  href="https://docs.simpleanalytics.com/what-we-collect"
                  target="_blank"
                  >see what we collect<Arrow />
                </a>
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div class="max-w-3xl px-6 mt-8 mx-auto text-center relative z-20">
        <a
          @click="scrollToHash('why')"
          class="mt-4 button tiny shadow-md bg-white dark:bg-gray-800"
        >
          <ChevronDoubleDownIcon class="w-3 inline-block" />
          <span class="mx-1">Read detailed reasons</span>
          <ChevronDoubleDownIcon class="w-3 inline-block" />
        </a>

        <Quote
          class="mt-4"
          :logo="DuckDuckGoLogo"
          :title="$t('testimonials.duckduckgo.name')"
          :subtitle="$t('testimonials.duckduckgo.role')"
          :quote="$t('testimonials.duckduckgo.quote')"
          subtitlelink="https://duckduckgo.com/"
        />
      </div>

      <ClientOnly>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <BackgroundChart
            class="fill-blue-50 stroke-blue-500 dark:fill-gray-800"
          />
        </div>
      </ClientOnly>
    </div>

    <div class="max-w-3xl px-6 mx-auto text-center">
      <Quote
        class="mt-4"
        :reverse="true"
        iconclass="fill-blue-200 dark:fill-gray-800"
        image="https://assets.simpleanalytics.com/images/people/rosie.png"
        title="Rosie Sherry"
        subtitle="Community Manager Indie Hackers"
        subtitlelink="https://indiehackers.com/"
      >
        <p class="text-xl leading-relaxed">
          "My focus has been on using ethical tools. I said bye to Google
          Analytics and hello to Simple Analytics.
          <span class="text-blue-600 dark:text-blue-700">In 1-2 clicks</span> I
          can get all the information I need."
        </p>
      </Quote>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
      >
        Simple.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        One dashboard to instantly see how many visitors are coming to your
        website. Where they come from. And what they do once they're there.
        Without cookies. Without stalking. Still lightweight.
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

      <StartTrial />

      <div class="max-w-3xl px-6 mx-auto text-center">
        <h3
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
        >
          The most privacy-friendly analytics online.
        </h3>
      </div>
      <ul class="mx-auto max-w-max text-left z-20 relative">
        <li class="flex items-center my-4">
          <ShieldCheckIcon
            class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
          />
          <p class="leading-relaxed">
            We <span class="text-red-500 dark:text-red-600">comply</span> by
            design with all privacy<br />policies - GDPR, PECR, CCPA and more.
          </p>
        </li>
        <li class="flex items-center my-4">
          <ShieldCheckIcon
            class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
          />
          <p class="leading-relaxed">
            We
            <span class="text-red-500 dark:text-red-600">never track</span>
            anyone,
            <ArrowLink
              href="https://simpleanalytics.com/our-promise"
              text="we promise"
            />
          </p>
        </li>
        <li class="flex items-center my-4">
          <ShieldCheckIcon
            class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
          />
          <p class="leading-relaxed">
            We don't
            <span class="text-red-500 dark:text-red-600">sell</span> any visitor
            data,<br /><a
              class="underline"
              href="https://docs.simpleanalytics.com/what-we-collect"
              target="_blank"
              >see what we collect<Arrow />
            </a>
          </p>
        </li>
        <li class="flex items-center my-4">
          <ShieldCheckIcon
            class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
          />
          <p class="leading-relaxed">
            No
            <span class="text-red-500 dark:text-red-600">cookie banner</span>
            required
          </p>
        </li>
      </ul>

      <Quote
        class="mt-8"
        :reverse="false"
        iconclass="fill-blue-200"
        :logo="FastCompanyLogo"
        logoclass="bg-blue-200 dark:bg-gray-500 rounded-full p-1 sm:p-4"
        subtitle="Featured at Fast Company"
        quote="It's time to ditch Google Analytics."
        subtitlelink="https://www.fastcompany.com/90300072/its-time-to-ditch-google-analytics"
      />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-20 sm:mb-8 font-medium"
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

        <ul class="mx-auto max-w-max text-left mt-12 sm:mt-0 relative z-20">
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              <a
                class="underline group"
                href="https://simpleanalytics.com/our-promise"
                target="_blank"
                >Import your data from Google Analytics<Arrow class=""
              /></a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              Use Google Tag Manager, WordPress,<br />or our many frontend
              <a
                class="underline group"
                href="https://docs.simpleanalytics.com/script"
                >framework plugins<Arrow />
              </a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              Export to your own systems, Power BI,<br />Google Data Studio, or
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

    <div class="max-w-3xl px-6 mx-auto text-center">
      <Quote
        class="mt-12"
        image="https://assets.simpleanalytics.com/images/people/philippe.png"
        title="Philippe Lehoux"
        subtitle="CEO at Missive"
        subtitlelink="https://missiveapp.com/blog/privacy-first-analytics"
      >
        <p class="text-xl leading-relaxed">
          "We traded a 'free', privacy-less, and complex analytic dashboard to a
          paid, privacy-first &amp; simple one. We couldn't be happier.
          <span class="text-red-500 dark:text-red-600"
            >The best privacy-focused analytics suite that I've found.</span
          >
          We're proud to be able to tell our customers that we don't track them
          at all."
        </p>
      </Quote>
    </div>

    <div class="max-w-3xl px-6 mx-auto text-center">
      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium"
      >
        Event tracking without tracing individuals.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        <a
          class="underline group"
          href="https://docs.simpleanalytics.com/automated-events"
          target="_blank"
          >Auto collect events<Arrow class=""
        /></a>
        like downloads, outbound links, and email clicks. Check the performance
        of every button, click and page visit you want.
      </p>

      <p>
        <a @click="scrollToSeekVideo('seek.events')" class="button">
          <ChevronDoubleUpIcon class="w-3 inline-block" />
          <span class="mx-1"> See events in action</span>
          <ChevronDoubleUpIcon class="w-3 inline-block" />
        </a>
      </p>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-20 sm:mb-8 font-medium"
      >
        Automate reports.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        Save time while keeping others in the loop of your results. Schedule
        your reports to be shared automatically at any time you want.
      </p>

      <div class="mt-8 mb-12">
        <div
          class="p-4 -m-8 scale-[0.8] text-left border-0 rounded-lg bg-blue-100 dark:bg-gray-700 dark:shadow-none shadow-md rotate-1"
        >
          <h4 class="text-lg">Email reports</h4>

          <p class="mt-2">
            Send yourself and others an email report of simpleanalytics.com. You
            can add as many email addresses as you like. See an example of an
            email report in our documentation.
          </p>

          <div class="my-4">
            <table class="w-full max-w-full" v-if="emailReports.length">
              <thead>
                <tr>
                  <th class="font-normal">Recipient</th>
                  <th class="font-normal">Period</th>
                  <th class="font-normal hidden sm:table-cell">Last emailed</th>
                  <th class="font-normal"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="report of emailReports" :key="report.id">
                  <td class="truncate max-w-[100px] md:max-w-full pr-2">
                    {{ report.email }}
                  </td>
                  <td>{{ report.period }}</td>
                  <td class="hidden sm:table-cell">{{ report.ago }}</td>
                  <td>
                    <a
                      class="ml-2 button tiny"
                      @click="removeEmailReport(report)"
                    >
                      <span class="hidden sm:inline">Remove</span>
                      <XCircleIcon class="stroke-red-600 h-6 w-6 sm:hidden" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            class="inline-block border border-red-500 text-red-500 dark:text-red-600 rounded-sm py-2 px-3 mb-2 dark:border-red-600"
            v-if="emailReportError"
          >
            {{ emailReportError }}
          </p>

          <p>
            <input
              ref="emailReportEmailField"
              type="text"
              v-model="emailReportEmail"
              placeholder="E.g.: client@example.com"
              class="appearance-none max-w-full rounded-sm w-72 mr-2 mt-2 pl-3 py-2 text-base focus:outline-none sm:text-normal bg-gray-50 text-gray-500 border border-gray-200 dark:border-0 dark:bg-gray-600 dark:text-gray-300"
            />

            <select
              v-model="emailReportPeriod"
              class="appearance-none rounded-sm mr-2 mt-2 pl-3 pr-8 py-2 text-base focus:outline-none sm:text-normal bg-gray-50 text-gray-500 border border-gray-200 dark:border-0 dark:bg-gray-600 dark:text-gray-300"
            >
              <option value="week">Weekly</option>
              <option value="month">Monthly</option>
            </select>

            <a @click="saveEmailReport" class="mt-2 button">Add recipient</a>
          </p>
        </div>
      </div>

      <StartTrial />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-20 sm:mb-8 font-medium"
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
          src="https://assets.simpleanalytics.com/images/homepage/homepage-light.png"
          class="relative transition rounded-lg shadow-md cursor-pointer"
        />
        <img
          @click="toggleTheme()"
          src="https://assets.simpleanalytics.com/images/homepage/homepage-dark.png"
          class="relative transition rounded-lg shadow-md cursor-pointer"
        />
      </div>
    </div>

    <div class="max-w-3xl px-6 mx-auto text-center">
      <p class="mt-4 mb-8 text-sm">
        <a @click="toggleTheme()" class="mt-1 button tiny">
          <span class="ml-2">Toggle dark mode</span>
          <SunIcon class="h-6 p-1 ml-1 stroke-red-600 hidden dark:block" />
          <MoonIcon class="h-6 p-1 ml-1 stroke-red-500 dark:hidden" />
        </a>
      </p>

      <Quote
        class="mt-4"
        image="https://assets.simpleanalytics.com/images/people/hannah.png"
        title="Hannah Wright"
        subtitle="Founder SaaS Design"
        subtitlelink="https://www.saasdesign.io/"
      >
        <p class="text-base leading-relaxed">
          "After switching from GA, I tried out another privacy-focused
          analytics solution but it turned out it was too minimal and didn't
          give me what I needed. I make decisions based on data. Luckily, Simple
          Analytics
          <span class="text-red-500 dark:text-red-600"
            >shows the exact metrics I need to know about in order to grow my
            business</span
          >, while also being respectful of the privacy of my visitors. AND it
          loads extremely quickly, making it SEO-friendly"
        </p>
      </Quote>

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
    </div>

    <section
      class="bg-gradient-to-t from-blue-100 dark:from-gray-700 py-4 relative overflow-hidden pb-32"
    >
      <div class="max-w-3xl px-6 mx-auto text-center">
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

        <Quote
          class="mt-20 z-20"
          :reverse="true"
          iconclass="fill-blue-200 dark:fill-gray-800"
          image="https://assets.simpleanalytics.com/images/people/evan.png"
          title="Evan Frawley"
          subtitle="Software engineer"
          subtitlelink="https://evan.gg/blog/simple-analytics-is-great"
        >
          <p class="text-xl leading-relaxed">
            "This is great to keep track of all the products that I launch. I
            also
            <span class="text-blue-600 dark:text-blue-700"
              >use the API to send myself a bot message</span
            >
            each morning with rolling week stats and daily stats from the
            previous day"
          </p>
        </Quote>
      </div>

      <ClientOnly>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <BackgroundChart
            class="fill-blue-50 stroke-blue-500 dark:fill-gray-800"
          />
        </div>
      </ClientOnly>
    </section>

    <div class="max-w-3xl px-6 mx-auto">
      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium text-center"
      >
        Simple pricing.
      </h3>

      <Pricing />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium text-center"
      >
        Frequently Asked Questions.
      </h3>

      <FAQ />

      <div class="mt-12 text-center">
        <StartTrial />
      </div>

      <Quote
        class="mt-20"
        image="https://assets.simpleanalytics.com/images/people/stefaan.png"
        title="Stefaan Oyen"
        subtitle="Marketeer"
        subtitlelink="https://stefaanoyen.be/"
      >
        <p class="text-xl leading-relaxed">
          "Excellent alternative for Google Analytics. Yes, you pay a small
          subscription, but you get a lot in return:
          <span class="text-red-500 dark:text-red-600">GDPR-proof</span> and
          <span class="text-red-500 dark:text-red-600">cookieless</span>
          analytics,
          <span class="text-red-500 dark:text-red-600">accurate</span> tracking
          and clear visuals."
        </p>
      </Quote>
    </div>

    <section
      class="bg-gradient-to-t from-red-50 dark:from-gray-700 mt-12 w-full relative overflow-hidden pb-32"
    >
      <div class="max-w-3xl mb-20 px-6 mx-auto text-center z-20 relative">
        <h3
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mt-2 mb-4 sm:mt-16 sm:mb-20 font-medium text-center"
        >
          Trusted by more than 600
          <span class="text-red-500 dark:text-red-600">governments</span>,
          <span class="text-red-500 dark:text-red-600">NGOs</span>, and small to
          mid-sized
          <span class="text-red-500 dark:text-red-600">enterprises</span>.
        </h3>

        <Logos
          class="mt-6 sm:mt-10 max-w-[80%] sm:max-w-none mx-auto"
          imageclass="max-w-[150px]"
        />
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

    <div class="max-w-3xl px-6 mx-auto text-center">
      <h3
        id="why"
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mt-4 mb-4 sm:mt-16 sm:mb-8 pt-8 font-medium text-center"
      >
        Why is Simple Analytics
        <span class="text-red-500 dark:text-red-600"
          >the most
          <br class="hidden sm:block" />
          privacy-first</span
        >
        analytics?
      </h3>

      <div class="leading-loose max-w-lg mx-auto">
        <h4 class="my-4 text-2xl text-center">
          There are 5 simple reasons that sum it up.
        </h4>

        <p class="text-center" v-if="currentHash === 'why'">
          <a
            @click="scrollToHash('reasons')"
            class="mt-4 button tiny shadow-md bg-white dark:bg-gray-800"
          >
            <ChevronDoubleUpIcon class="w-3 inline-block" />
            <span class="mx-1">Go back</span>
            <ChevronDoubleUpIcon class="w-3 inline-block" />
          </a>
        </p>

        <EyeOffIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          1. Privacy protection is our business model.
        </h5>

        <p>
          Big tech companies have been collecting personal data for years to
          make a profit. Users get a "free" product, and big tech companies get
          paid by advertisers that want to buy your attention.
        </p>

        <ul class="list-disc ml-8 my-4">
          <li>
            While you use the "free" product, the tech companies gather creepily
            huge amounts of data to create a specific profile of your
            demographics, ethnicity, political preferences, interests, desires,
            likes, and dislikes.
          </li>
          <li>
            Big tech companies will sell that to the highest bidders as their
            business model. Without openly telling you.
          </li>
        </ul>

        <p>
          We disgust such practices. Because Simple Analytics is a paid service,
          we are independent and have no bias or conflict of interest. No second
          agendas here.
        </p>

        <p class="mt-4">Our mission is simple:</p>

        <ul class="list-disc ml-8 my-4">
          <li>
            We give you the fastest, easiest, and most ethical insights about
            your website performance while upholding the highest privacy
            standards.
          </li>
          <li>
            To achieve this, Simple Analytics has an
            <a href="https://simpleanalytics.com/roadmap">open roadmap</a> for
            you to see the next steps or request features. Also, we operate
            <a href="https://simpleanalytics.com/open">fully transparently</a>
            by sharing our metrics (including revenue, costs, amount of
            customers, and traffic).
          </li>
        </ul>

        <KeyIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          2. Your data is always encrypted.
        </h5>

        <p>
          We don't store any personal information and collect minimal amounts of
          data to protect your visitor's privacy, but that does not make your
          analytics data less important. That's why your data is always
          encrypted on our servers. The drives storing your data contain nothing
          but encrypted lines of code. If anybody did manage to steal those
          drives, they'd be useless.
        </p>

        <FingerPrintIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          3. We never, ever, ever store any personal data about visitors.
        </h5>
        <p>
          Some privacy-focused analytics use personally identifiable data and
          delete it after a day. For example:
        </p>

        <ul class="list-disc ml-8 my-4">
          <li>
            They collect a visitor's IP address, add a date, and turn it intoa
            hashevery time you have a page visit.
          </li>
          <li>
            These hashes connect page views together. Although this is
            definitely better than big tech trying to collect as much personal
            data as they can to sell to advertisers, it is not 100% waterproof
            and is a grey area.
          </li>
          <li>
            The hashes expire only once per day, so for less than 24 hours,
            <em
              >there is still personally identifiable information stored about
              your visitors.</em
            >
            Privacy policies like the GDPR explain you must have visitors
            consent to store personally identifiable information (PII).
          </li>
        </ul>

        <p>
          Simple Analytics never compromises privacy. That's why we only use
          unique visitorswithout tracking IP addresses. We do this based on the
          browser's referrer, so no PII is stored. When you use Simple
          Analytics, it is therefore
          <em class="text-red-500 dark:text-red-600"
            >100% guaranteed no personally identifiable information of any of
            your visitors is stored.</em
          >
          Because of this, zero consent is needed. Adiós annoying banners!
        </p>

        <p class="mt-4">
          Tip: some clients like to replace their cookie banners with "we're
          proud to protect your privacy" banners to gain a competitive
          advantage.
        </p>

        <GlobeIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          4. We are an EU-based company<br class="hidden sm:block" />
          with EU-based servers.
        </h5>

        <p>
          We do everything in our power to keep your data safe. We collect the
          bare minimum amount of data required to give you a full picture of
          your website's visitors, and besides the three points listed above, we
          even go a few steps further.
        </p>

        <ul class="list-disc ml-8 my-4">
          <li>
            Compared to other continents, the EU has been concerned with its
            citizens' privacy for a long time and provides diligent privacy
            regulations.
          </li>
          <li>
            Our servers are located in the Netherlands and our hosting provider
            is Dutch because this provides asecure physical location, great
            global network connectivity, and high legal standards for data
            processing (no cloud provider that needs to report to a foreign
            government).
          </li>
          <li>
            We choose to locate our business in the Netherlands because a
            privacy-conscious environment helps us uphold our high standards for
            ethics and privacy.
          </li>
        </ul>

        <TableIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          5. You own your data.
        </h5>
        <p>
          We care about your data. We care for your data. Yet, you own your
          data. We will never sell it. You are in control of your data, and you
          can download or delete it at any time.
        </p>
      </div>

      <div class="py-12 text-center">
        <StartTrial />
      </div>
    </div>

    <div class="max-w-3xl px-6 mx-auto animated-background">
      <div class="flex items-center justify-center">
        <img
          src="https://assets.simpleanalytics.com/images/homepage/up-smaller.png"
          alt=""
          class="w-96"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import DuckDuckGoLogo from "../components/logos/DuckDuckGo.vue";
import FastCompanyLogo from "../components/logos/FastCompany.vue";
import CapterraLogo from "../components/logos/Capterra.vue";

import EuropeanFlag from "../components/logos/EuropeanFlag.vue";
import DataConnections from "../components/images/DataConnections.vue";
import ListIcon from "../components/images/ListIcon.vue";
import BackgroundChart from "../components/images/BackgroundChart.vue";

import Arrow from "../components/Arrow.vue";
import ArrowLink from "../components/ArrowLink.vue";
import Quote from "../components/Quote.vue";
import Video from "../components/Video.vue";
import StartTrial from "../components/StartTrial.vue";
import Logos from "../components/Logos.vue";
import Pricing from "../components/Pricing.vue";
import FAQ from "../components/FAQ.vue";

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
  ChevronDoubleUpIcon,
  ArrowsExpandIcon,
  MoonIcon,
  SunIcon,
  XCircleIcon,
  EyeOffIcon,
  FingerPrintIcon,
  KeyIcon,
  GlobeIcon,
  TableIcon,
} from "@heroicons/vue/outline";

definePageMeta({
  title: "Simple Analytics - The privacy-first Google Analytics alternative",
  layout: false,
});

const previewVideoLight = ref(null);
const previewVideoDark = ref(null);
const seekVideoLight = ref(null);
const seekVideoDark = ref(null);

// const affiliate = ref();

const affiliate = useAffiliate("schaap");
const country = useState("country");

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

const emailReports = ref([
  {
    id: 1,
    email: "adriaan@simpleanalytics.com",
    period: "week",
    ago: "a day ago",
  },
  {
    id: 2,
    email: "iron@simpleanalytics.com",
    period: "month",
    ago: "6 days ago",
  },
]);

const emailReportEmailField = ref();
const emailReportEmail = ref("");
const emailReportPeriod = ref("week");
const emailReportError = ref("");

const removeEmailReport = (report) => {
  const message = `Are you sure to disable ${report.period}ly email reports for ${report.email}?`;
  const confirmed = window.confirm(message);
  if (!confirmed) return;
  const userIndex = emailReports.value.indexOf(report.id);
  emailReports.value.splice(userIndex, 1);
};

const saveEmailReport = () => {
  emailReportError.value = "";

  if (
    !emailReportEmail.value ||
    !emailReportEmail.value.includes(".") ||
    !emailReportEmail.value.includes("@")
  ) {
    return setTimeout(() => {
      emailReportError.value = "Fill in a value email address";
    }, 200);
  }

  emailReports.value.push({
    id: Math.random() * 100,
    email: emailReportEmail.value,
    period: emailReportPeriod.value,
    ago: "never",
  });

  emailReportEmail.value = "";
};

onMounted(() => {
  emailReportEmailField?.value?.addEventListener("focus", () => {
    emailReportError.value = "";
  });
});

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
      currentHash: null,
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
    scrollToSeekVideo(seek) {
      this?.$refs?.seekVideoInstruction.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      if (seek) {
        const found = this.videoSeeks.find(
          ({ translation }) => seek === translation
        );
        if (found) this.jumpToTime(found);
      }
    },
    scrollToHash(hash) {
      if (!process.client) return;

      window.location.hash = hash;
      this.currentHash = hash;
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
