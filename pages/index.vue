<template>
  <div>
    <div
      v-if="affiliate || affiliateCookie"
      class="py-4 max-w-7xl mx-auto px-6 mb-4 -mt-4 sm:-mt-10"
    >
      <p
        v-if="affiliateCookie"
        class="border-2 bg-white dark:bg-gray-900 border-red-500 dark:border-red-600 rounded-lg text-center p-4 shadow"
      >
        You accepted the affiliate deal, therefore you get a discount and
        {{ affiliate?.name || "the promoter" }} gets a reward.
        <a @click="undoAffiliate(affiliate)">Click here to undo this</a>.
      </p>
      <div
        v-else-if="affiliate.valid === true"
        class="border-2 bg-white dark:bg-gray-900 border-red-500 dark:border-red-600 rounded-lg text-center p-4 shadow"
      >
        <p class="mb-2">
          <span v-if="affiliate.name">
            You are here via {{ affiliate.name }}.
          </span>
          <span v-else-if="affiliate.slug">
            You are here via the affiliate code {{ affiliate.slug }}.
          </span>
          To give you the first month for free and give
          {{ affiliate.name || "the promoter" }} their reward, we ask you to
          place a cookie for 30 days.
        </p>

        <a @click="acceptAffiliate(affiliate)" class="button primary"
          >Accept affiliate deal</a
        >
      </div>

      <p
        v-else-if="affiliate.valid === false || affiliate.error"
        class="bg-red-500 dark:bg-red-600 text-white dark:text-white rounded-lg text-center p-4 shadow dark:shadow-none"
      >
        <span v-if="affiliate.error">{{ affiliate.error }}</span>
        <span v-else-if="affiliate.slug">
          It looks like your affiliate link {{ affiliate.slug }} is invalid.
        </span>
        <span v-else>It looks like your affiliate link is invalid.</span>

        <NuxtLink
          :href="
            DASHBOARD_URL + '/contact' + (theme === 'dark' ? '?theme=dark' : '')
          "
          target="_blank"
          class="text-white underline ml-1"
          >Contact us if you think this is a mistake.</NuxtLink
        >
      </p>
    </div>

    <div
      v-else-if="showAIBanner"
      class="py-4 max-w-7xl mx-auto px-6 mb-4 -mt-4 sm:-mt-10"
    >
      <p
        class="bg-red-400 text-white dark:bg-gray-900 border-red-500 dark:border-red-600 rounded-lg text-center p-4 shadow"
      >
        <SparklesIcon class="inline h-6 w-6 mr-2" />

        <NuxtLink href="/ai" class="underline text-white dark:text-red-600"
          >Use AI to chat with your analytics</NuxtLink
        >
        instead of clicking around for hours. Just launched.
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="text-center md:text-left flex-shrink basis-2/4 md:mr-8">
        <h1 class="text-3xl font-medium sm:text-4xl lg:text-4xl">
          <span class="leading-snug">
            The
            <span class="text-red-500 dark:text-red-600">privacy-first </span
            >Google Analytics alternative.
          </span>
        </h1>
        <p
          class="mt-4 text-base sm:text-lg md:mt-8 lg:text-xl md:leading-relaxed leading-relaxed"
        >
          <EuropeanFlag class="inline mr-2 w-8 rounded align-sub" />
          <span>
            EU-based & hosted. No cookies and a
            <span class="underline-curly text-red-500 dark:text-red-600"
              >direct&nbsp;yes</span
            >
            from your legal team.
          </span>
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
          class="max-w-xl flex flex-wrap mt-8 justify-center md:justify-start"
        >
          <div class="mt-4 sm:mr-4">
            <a
              @click="navigateToWelcome($router, 'click_signup_above_fold')"
              class="button large primary"
            >
              Start for free
            </a>
            <p class="mb-8 sm:mb-0 text-xs mt-2 text-center">
              <CheckIcon class="fill-green-500 w-4 inline align-text-top" />
              No credit card required
            </p>
          </div>
          <div class="sm:mt-4 ml-4">
            <ol class="text-left">
              <li class="flex mb-3">
                <PlusIcon
                  class="h-5 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
                />
                <p class="leading-relaxed ml-2 -indent-2.5 text-sm">
                  <span> Add website </span>
                </p>
              </li>
              <li class="flex my-3">
                <GoogleAnalyticsIcon
                  class="inline stroke-1 h-5 mr-3 stroke-red-500 dark:stroke-red-600 hover:group-hover:stroke-red-500"
                />
                <p class="leading-relaxed ml-2 -indent-2.5 text-sm">
                  <span> Import GA data </span>
                </p>
              </li>
              <li class="flex my-3">
                <PresentationChartBarIcon
                  class="h-5 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
                />
                <p class="leading-relaxed ml-2 -indent-2.5 text-sm">
                  <span> See stats instantly </span>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="mt-12 md:mt-0 z-10 mx-auto relative basis-2/4">
        <div
          class="absolute z-30 flex flex-col items-center justify-center w-full h-full"
        >
          <a
            @click="
              sendEventAndRedirect(
                $router,
                'click_demo_above_fold',
                {},
                DASHBOARD_URL + '/simpleanalytics.com?from=landing',
              )
            "
            class="group button large shadow-xl bg-white dark:bg-gray-800 hover:dark:bg-gray-900"
          >
            <span class="mx-2">See live demo</span>
            <Arrow class="h-5 w-5" />
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

    <div
      class="bg-gradient-to-t from-blue-100 dark:from-gray-700 py-4 relative overflow-hidden pb-28"
    >
      <div class="max-w-3xl px-6 mt-8 mx-auto text-center">
        <h3
          id="reasons"
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto -mt-4 mb-4 sm:mt-8 sm:mb-8 pt-8 font-medium"
        >
          Why Simple Analytics is the
          <span class="text-red-500 dark:text-red-600"
            >best Google Analytics</span
          >
          alternative?
        </h3>

        <h4 class="my-4 mb-8 text-xl text-center">
          Here are 6<span class="text-red-500 dark:text-red-600">+1</span>
          simple reasons that sum it up.
        </h4>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center">
        <div class="basis-2/4 mx-3 mb-8 md:mb-0">
          <Video
            class="ml-auto max-w-[500px]"
            :width="854"
            :height="480"
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
            <li class="flex my-3">
              <EyeSlashIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">1. </span>
                <span
                  >Privacy protection is
                  <span class="text-red-500 dark:text-red-600"
                    >our business model</span
                  >. We comply by design with all privacy policies. Including:
                  GDPR, PECR, CCPA and more.
                </span>
              </p>
            </li>
            <li class="flex my-3">
              <CursorArrowRaysIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">2. </span>
                <span
                  >Simple UI. We give you the insights you need in an
                  easy-to-use dashboard.
                </span>
              </p>
            </li>
            <li class="flex my-3">
              <AIChatIcon
                class="h-8 mr-3 shrink-0 stroke-0 fill-red-500 dark:fill-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">3. </span
                ><span>
                  <span class="text-red-500 dark:text-red-600"
                    >Chat with AI </span
                  >and
                  <span class="text-red-500 dark:text-red-600"
                    >your analytics</span
                  >
                  instead of digging through reports.</span
                >
              </p>
            </li>
            <li class="flex my-3">
              <FingerPrintIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">4. </span
                ><span
                  >We never, ever, ever store any
                  <span class="text-red-500 dark:text-red-600"
                    >personal data</span
                  >
                  about your visitors. No
                  <span class="text-red-500 dark:text-red-600"
                    >cookie banners</span
                  >.
                </span>
              </p>
            </li>
            <li class="flex my-3">
              <GlobeAmericasIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">5. </span
                ><span
                  >Our
                  <span class="text-red-500 dark:text-red-600"
                    >Goals-tracker</span
                  >
                  and
                  <span class="text-red-500 dark:text-red-600"
                    >Events Explorer</span
                  >
                  lets you keep track of your most important events and
                  conversion funnels.</span
                >
              </p>
            </li>
            <li class="flex my-3">
              <BoltIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">6. </span
                ><span
                  >Our
                  <span class="text-red-500 dark:text-red-600"
                    >lightweight script</span
                  >
                  increases your website speed.</span
                >
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
          title="DuckDuckGo"
          subtitle="Biggest privacy-friendly search engine"
          quote="Switching to Simple Analytics will still give you visibility into how visitors are using your website, but you'll also be respecting their right to privacy."
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
        subtitle="Community Manager Indie Hackers"
        :quote="`My focus has been on using ethical tools. I said bye to Google Analytics and hello to Simple Analytics. <span class='text-blue-600 dark:text-blue-700'>In 1-2 clicks</span> I can get all the information I need.`"
        iconclass="fill-blue-200 dark:fill-gray-700"
        image="https://assets.simpleanalytics.com/images/people/rosie.png"
        title="Rosie Sherry"
        subtitlelink="https://indiehackers.com/"
      />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
      >
        Simple.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        Simple Analytics is a simple Google Analytics alternative. One dashboard
        to instantly see how many visitors are coming to your website, where
        they come from and what they do once they're there. Without cookies.
        Without stalking. Still lightweight.
      </p>

      <div class="mt-4 mb-8" id="features">
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
          :class="active === seek.id ? 'primary' : ''"
          v-for="seek in videoSeeks"
          @click="jumpToTime(seek)"
          :key="seek.id"
        >
          <ArrowRightCircleIcon v-if="active === seek.id" class="w-4 mr-1" />
          <PlayIcon v-else class="w-4 mr-1" />
          {{ seek.label }}
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
              Simple Analytics presents
            </p>
            <p
              v-if="active"
              class="text-2xl md:text-4xl text-white dark:text-red-200 font-bold"
            >
              {{ activeLabel }}
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

      <Quote
        class="mt-8"
        :reverse="false"
        iconclass="fill-blue-200"
        :logo="FastCompanyLogo"
        quote="It's time to ditch Google Analytics."
        subtitle="Featured at Fast Company"
        logoclass="bg-blue-200 dark:bg-gray-500 rounded-full p-1 sm:p-4"
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
              class="max-w-full mx-auto w-[350px] h-[435px] rounded bg-red-100 animate-pulse"
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
                href="https://docs.simpleanalytics.com/import-google-analytics-data"
                target="_blank"
                ><span
                  ><span class="text-red-500 dark:text-red-600"
                    >Import your data from Google Analytics</span
                  ></span
                ><Arrow
              /></a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              <span>
                Use Google Tag Manager, WordPress,<br />or our many
                frontend</span
              >
              <a
                class="ml-1 underline group"
                href="https://docs.simpleanalytics.com/install-on-other-platforms#framework-plugins"
              >
                <span>framework plugins</span><Arrow />
              </a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              Export to your systems, Power BI,<br />Google Looker Studio, or
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
      <GoogleAnalyticsIcon
        class="inline stroke-1 h-20 mt-12 stroke-red-500 dark:stroke-red-600"
      />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mb-4 mt-4 sm:mb-8 font-medium text-red-500 dark:text-red-600"
      >
        Why you should switch from Google Analytics
      </h3>

      <div class="text-left leading-loose">
        <p class="my-4">
          Google is one of the world's largest data devouring machines, selling
          your website visitors' data for profit. From an ethical standpoint,
          organizations should aim to protect the privacy of their website
          visitors. Still,
          <span class="underline">85% of the websites</span> are using Google
          Analytics, but this is about to change for the better. The call for a
          Google Analytics alternative.
        </p>

        <p class="my-4">
          Privacy laws like the GDPR are put in place to preserve the privacy of
          internet users. Data protection agencies are cracking down on
          privacy-invasive services like Google Analytics. France (CNIL) &
          Austria (DSB) already stated that the use of Google Analytics violates
          GDPR law in their countries. More EU countries are expected to follow
          this example.
        </p>

        <p class="my-4">
          <span
            >Google Analytics is a complex web analytics tool that has been the
            default analytics tool, but this is changing, and Google also
            recognizes this. That's why they are about to change to a new
            version called</span
          >
          <a
            href="/blog/google-to-sunset-universal-analytics-in-2023"
            target="_blank"
            class="ml-1 group underline"
            ><span
              v-html="`GA4 that aims to be privacy-friendly but is not`"
            ></span
            ><Arrow
          /></a>
        </p>

        <p class="my-4">
          In addition, web browsers are limiting tracking mechanisms, and ad
          blockers are used to block Google Analytics, which makes their data
          less and less accurate.
        </p>

        <p class="my-4">
          The global business environment is changing towards privacy, and so
          should you!
        </p>

        <p class="my-4">
          Here is why Simple Analytics is the number one privacy-friendly
          <a
            href="/blog/why-simple-analytics-is-a-great-alternative-to-google-analytics"
            target="_blank"
            class="ml-1 mr-1 group underline"
            ><span>Google Analytics alternative</span><Arrow
          /></a>
          <span
            >We are trusted by 600+ paying customers to provide the insights
            they need while protecting the privacy of their website
            visitors</span
          >
        </p>

        <p class="my-4">
          <NuxtLink to="/signup" class="group underline"
            >Give us a try<Arrow
          /></NuxtLink>
        </p>
      </div>

      <Quote
        class="mt-12"
        image="https://assets.simpleanalytics.com/images/people/philippe.png"
        title="Philippe Lehoux"
        :subtitle="`CEO at Missive`"
        subtitlelink="https://missiveapp.com/blog/privacy-first-analytics"
      >
        <p class="text-xl leading-relaxed">
          <span
            >We traded a 'free', privacy-less, and complex analytic dashboard
            for a paid, privacy-first & simple one. We couldn't be happier.
            <span class="text-blue-600 dark:text-blue-700"
              >The best privacy-focused analytics suite that I've found.</span
            >
            We're proud to be able to tell our customers that we don't track
            them at all.</span
          >
        </p>
      </Quote>
    </div>

    <div class="max-w-3xl px-6 mx-auto text-center">
      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mb-4 mt-12 sm:mb-8 font-medium"
      >
        Event tracking without tracing individuals.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        <a
          class="underline group"
          href="https://docs.simpleanalytics.com/automated-events"
          target="_blank"
          >Auto-collect events<Arrow
        /></a>
        like downloads, outbound links, and email clicks. Check the performance
        of every button, click, and page visit you want.
      </p>

      <p>
        <a @click="scrollToSeekVideo('events')" class="button">
          <ChevronDoubleUpIcon class="w-3 inline-block" />
          <span class="mx-1"> See events in action</span>
          <ChevronDoubleUpIcon class="w-3 inline-block" />
        </a>
      </p>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mb-4 mt-20 sm:mb-8 font-medium"
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
            email report in
            <a href="https://docs.simpleanalytics.com/email-reports"
              >our documentation</a
            >.
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
                  <td>
                    {{ report.period === "month" ? "month" : "week" }}
                  </td>
                  <td class="hidden sm:table-cell">
                    {{ report.agoText }}
                  </td>
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

          <p class="flex mt-2">
            <input
              ref="emailReportEmailField"
              type="text"
              v-model="emailReportEmail"
              :placeholder="`E.g.: client{'@'}example.com`"
              class="appearance-none max-w-full rounded-sm w-72 mr-2 mt-2 pl-3 py-2 text-base focus:outline-none sm:text-normal bg-gray-50 text-gray-500 border border-gray-200 dark:border-0 dark:!bg-gray-800 dark:text-gray-300"
            />

            <select
              v-model="emailReportPeriod"
              class="appearance-none rounded-sm mr-2 mt-2 pl-3 pr-8 py-2 text-base focus:outline-none sm:text-normal bg-gray-50 text-gray-500 border border-gray-200 dark:border-0 dark:bg-gray-600 dark:text-gray-300 w-[150px]"
            >
              <option value="week">weekly</option>
              <option value="month">monthly</option>
            </select>

            <a @click="saveEmailReport" class="button flex-shrink-0 mt-2"
              >Add recipient</a
            >
          </p>
        </div>
      </div>

      <StartTrial />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mb-4 mt-20 sm:mb-8 font-medium"
      >
        Dark mode.
      </h3>
      <p class="my-4 sm:mb-8 leading-loose max-w-xl mx-auto">
        For those who keep
        <span class="line-through dark:text-gray-500">working</span>
        <span class="text-red-500 dark:text-red-600">coding</span> at night.
      </p>
    </div>

    <div
      class="w-full pt-8 pb-2 sm:pt-12 sm:pb-2 md:pt-16 md:pb-4 overflow-hidden"
    >
      <div class="w-2/3 mx-auto max-w-lg" :class="theme" data-carousel>
        <img
          @click="toggleTheme()"
          src="https://assets.simpleanalytics.com/images/homepage/homepage-light.png"
          alt="Simple Analytics homepage in light mode"
          class="relative transition rounded-lg shadow-md cursor-pointer"
          loading="lazy"
          style="aspect-ratio: 1024 / 561"
        />
        <img
          @click="toggleTheme()"
          src="https://assets.simpleanalytics.com/images/homepage/homepage-dark.png"
          alt="Simple Analytics homepage in dark mode"
          class="relative transition rounded-lg shadow-md cursor-pointer"
          loading="lazy"
          style="aspect-ratio: 1024 / 562"
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
          "<span
            >After switching from GA, I tried out another privacy-focused
            analytics solution but it turned out it was too minimal and didn't
            give me what I needed. I make decisions based on data. Luckily,
            Simple Analytics
            <span class="text-red-500 dark:text-red-600"
              >shows the exact metrics I need to know about in order to grow my
              business</span
            >, while also being respectful of the privacy of my visitors. AND it
            loads extremely quickly, making it SEO-friendly</span
          >"
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
            :width="200"
            :height="410"
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
            :width="200"
            :height="410"
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
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-lg mx-auto mb-4 mt-24 sm:mb-8 font-medium"
        >
          When you ask videographers to create something fun.
        </h3>

        <div class="flex flex-col sm:flex-row -mx-2">
          <div class="basis-2/4 mx-2">
            <Video
              :width="1440"
              :height="810"
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
              Why our founder is getting crazy on his tropical island.
            </p>
          </div>

          <div class="basis-2/4 mx-2 mt-6 sm:mt-0">
            <Video
              :width="854"
              :height="480"
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
            <p class="mt-3 text-xs">Is he getting paranoid?</p>
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
            "<span
              >This is great to keep track of all the products that I launch. I
              also
              <span class="text-blue-600 dark:text-blue-700"
                >use the API to send myself a bot message</span
              >
              each morning with rolling week stats and daily stats from the
              previous day</span
            >"
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
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mb-4 mt-12 sm:mb-8 font-medium text-center"
      >
        Simple pricing.
      </h3>
    </div>

    <Pricing />

    <div class="max-w-3xl px-6 mx-auto">
      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mb-4 mt-24 sm:mb-8 font-medium text-center"
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
          "<span
            >Excellent alternative for Google Analytics. Yes, you pay a small
            subscription, but you get a lot in return:
            <span class="text-red-500 dark:text-red-600">GDPR-proof</span> and
            <span class="text-red-500 dark:text-red-600">cookieless</span>
            analytics,
            <span class="text-red-500 dark:text-red-600">accurate</span>
            tracking and clear visuals.</span
          >"
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

    <div class="max-w-3xl px-6 mx-auto text-left">
      <h3
        id="why"
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mb-4 mt-16 sm:mb-8 pt-8 font-medium text-center"
      >
        Why Simple Analytics is the
        <span class="text-red-500 dark:text-red-600"
          >best Google Analytics</span
        >
        alternative?
      </h3>

      <div class="leading-loose max-w-lg mx-auto">
        <h4 class="my-4 text-2xl text-center">
          Here are 6 simple reasons that sum it up.
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

        <EyeSlashIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          1. Privacy protection is our business model.
        </h5>

        <div class="prose leading-loose">
          <p>
            Big tech companies have been collecting personal data for years to
            make a profit. Users get a "free" product, and big tech companies
            get paid by advertisers that want to buy your attention.
          </p>
          <ul>
            <li>
              While you use the "free" product, the tech companies gather
              creepily huge amounts of data to create a specific profile of your
              demographics, ethnicity, political preferences, interests,
              desires, likes, and dislikes.
            </li>
            <li>
              Big tech companies will sell that to the highest bidders as their
              business model. Without openly telling you.
            </li>
          </ul>
          <p>
            We despise such practices. Because Simple Analytics is a paid
            service, we are independent and have no bias or conflict of
            interest. No second agendas here.
          </p>
          <p>Our mission is simple:</p>
          <ul>
            <li>
              We give you the fastest, easiest, and most ethical insights about
              your website performance while upholding the highest privacy
              standards.
            </li>
            <li>
              To achieve this, Simple Analytics has an
              <a href="`${DASHBOARD_URL}/roadmap`">open roadmap</a> for you to
              see the next steps or request features. Furthermore, we operate
              <a href="`${DASHBOARD_URL}/open`">fully transparently</a> by
              sharing our metrics (including revenue, costs, number of
              customers, and traffic).
            </li>
          </ul>
        </div>

        <AIChatIcon class="mx-auto mt-12 h-12 fill-red-500 dark:fill-red-600" />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          2. Get insights with our AI without clicking through reports.
        </h5>

        <div class="prose leading-loose">
          <p>
            Dive into your website analytics effortlessly with our AI-driven
            technology. Say goodbye to the tedious task of navigating through
            multiple reports and charts. Our intuitive AI system simplifies your
            data analysis, offering you insightful, easy-to-understand reports
            with just a few clicks – or even none at all.
          </p>
          <p>
            Imagine having a conversation with your analytics. Ask a question,
            and our AI responds with precise, tailored insights. Need a quick
            update on your latest traffic trends or a comparison of this week's
            user engagement with the last? <a href="/ai">Just ask</a>.
          </p>
        </div>

        <KeyIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          3. Your data is encrypted.
        </h5>

        <div class="prose leading-loose">
          <p>
            We don't store any personal information and collect minimal amounts
            of data to protect your visitor's privacy, but that does not make
            your analytics data less important. That's why your data is always
            encrypted on our servers. Encrypted in transit and encrypted at
            rest.
          </p>
          <p>
            The drives storing your data contain nothing but encrypted lines of
            code. If anybody did manage to steal those drives, they'd be
            useless. The encryption key is stored outside the servers in a
            virtual vault that is protected by two-factor authentication.
          </p>
        </div>

        <FingerPrintIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          4. We never, ever, ever store any personal data about your visitors.
        </h5>

        <div class="prose leading-loose">
          <p>
            Some privacy-focused analytics tools use personally identifiable
            data and delete it after a day.
          </p>
          <p>For example:</p>
          <ul>
            <li>
              They collect a visitor's IP address, add a date, and turn it into
              a hash every time you have a page visit.
            </li>
            <li>
              These hashes connect page views together. Although this is
              definitely better than big tech trying to collect as much personal
              data as they can to sell to advertisers, it is not 100% waterproof
              and is a gray area.
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
            unique visitors without tracking IP addresses. We do this based on
            the browser's referrer, so no PII is stored. When you use Simple
            Analytics, it is
            <span class="text-red-500 dark:text-red-600"
              >therefore 100% guaranteed no personally identifiable information
              of your visitors is stored.</span
            >
            Because of this, zero consent is needed. Adiós annoying banners!
          </p>
          <p>
            Tip: some clients like to replace their cookie banners with "we're
            proud to protect your privacy" banners to gain a competitive
            advantage.
          </p>
        </div>

        <GlobeAmericasIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          5. We are an EU-based company with EU-based servers.
        </h5>

        <div class="prose leading-loose">
          <p>
            We do everything in our power to keep your data safe. We collect the
            bare minimum amount of data required to give you a full picture of
            your website's visitors, and besides the three points listed above,
            we even go a few steps further.
          </p>
          <ul>
            <li>
              Compared to other continents, the EU has been concerned with its
              citizens' privacy for a long time and provides diligent privacy
              regulations.
            </li>
            <li>
              Our servers are located in the Netherlands and our hosting
              provider is Dutch because this provides a secure physical
              location, great global network connectivity, and high legal
              standards for data processing (no cloud provider that needs to
              report to a foreign government).
            </li>
            <li>
              We choose to locate our business in the Netherlands because a
              privacy-conscious environment helps us uphold our high standards
              for ethics and privacy.
            </li>
          </ul>
        </div>

        <TableCellsIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          6. You own your data.
        </h5>
        <div class="prose leading-loose">
          <p>
            We care about your data. We care for your data. Yet, you own your
            data. We will never sell it. You are in control of your data, and
            you can download or delete it at any time.
          </p>
        </div>
      </div>

      <div class="py-12 text-center">
        <StartTrial />
      </div>
    </div>

    <EindePopup name="hide_exit_popup" class="-mb-48">
      <EindePopupPricing />
    </EindePopup>

    <div class="max-w-3xl -mb-20 px-6 mx-auto animated-background">
      <div class="flex items-center justify-center">
        <img
          src="https://assets.simpleanalytics.com/images/homepage/up-smaller.png"
          alt="Adriaan van Rossum and Iron Brands pointing up"
          style="aspect-ratio: 580 / 324"
          class="w-96"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DuckDuckGoLogo from "../components/logos/DuckDuckGo.vue";
import FastCompanyLogo from "../components/logos/FastCompany.vue";

import EuropeanFlag from "../components/logos/EuropeanFlag.vue";
import GoogleAnalyticsIcon from "../components/icons/GoogleAnalytics.vue";
import AIChatIcon from "../components/icons/AIChat.vue";
import DataConnections from "../components/images/DataConnections.vue";
import BackgroundChart from "../components/images/BackgroundChart.vue";

import Arrow from "../components/Arrow.vue";
import Quote from "../components/Quote.vue";
import Video from "../components/Video.vue";
import StartTrial from "../components/StartTrial.vue";
import Logos from "../components/Logos.vue";
import Pricing from "../components/Pricing.vue";
import FAQ from "../components/FAQ.vue";

import {
  CheckIcon,
  PlayIcon,
  ArrowRightCircleIcon,
} from "@heroicons/vue/24/solid";

import {
  ShieldCheckIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  MoonIcon,
  SunIcon,
  XCircleIcon,
  EyeSlashIcon,
  FingerPrintIcon,
  KeyIcon,
  GlobeAmericasIcon,
  TableCellsIcon,
  PlusIcon,
  PresentationChartBarIcon,
  CursorArrowRaysIcon,
  BoltIcon,
  SparklesIcon,
} from "@heroicons/vue/24/outline";

definePageMeta({
  title: "The privacy-first Google Analytics alternative",
  description:
    "Simple Analytics is the privacy-first Google Analytics alternative that is 100% GDPR compliant. Give us a try!",
});

const previewVideoLight = ref(null);
const previewVideoDark = ref(null);
const seekVideoLight = ref(null);
const seekVideoDark = ref(null);
const seekVideoInstruction = ref(null);

const videoSeeksLight = [
  { id: "overview", label: "Website overview", start: 0, end: 3 },
  { id: "key_stats", label: "Key stats", start: 3, end: 15 },
  { id: "date_picker", label: "Date picker", start: 15, end: 24 },
  { id: "page_views", label: "Page views", start: 24, end: 33 },
  { id: "segment", label: "Segmenting", start: 33, end: 51 },
  { id: "utm_sources", label: "UTM sources", start: 51, end: 69 },
  { id: "countries", label: "Countries", start: 69, end: 78 },
  { id: "search", label: "Search", start: 78, end: 102 },
  { id: "tweet_viewer", label: "Tweet viewer", start: 102, end: 117 },
  { id: "events", label: "Events", start: 117, end: 128 },
  { id: "conversion", label: "Conversion", start: 128, end: Infinity },
];

const videoSeeksDark = [
  { id: "overview", label: "Website overview", start: 0, end: 3 },
  { id: "key_stats", label: "Key stats", start: 3, end: 14 },
  { id: "date_picker", label: "Date picker", start: 14, end: 26 },
  { id: "page_views", label: "Page views", start: 26, end: 33 },
  { id: "segment", label: "Segmenting", start: 33, end: 52 },
  { id: "utm_sources", label: "UTM sources", start: 52, end: 67 },
  { id: "countries", label: "Countries", start: 67, end: 79 },
  { id: "search", label: "Search", start: 79, end: 101 },
  { id: "tweet_viewer", label: "Tweet viewer", start: 101, end: 115 },
  { id: "events", label: "Events", start: 115, end: 131 },
  { id: "conversion", label: "Conversion", start: 131, end: Infinity },
];

const emailReports = ref([
  {
    id: 0,
    email: "adriaanvanrossum@simpleanalytics.com",
    period: "week",
    agoText: "a day ago",
  },
  {
    id: 1,
    email: "ironbrands@simpleanalytics.com",
    period: "month",
    agoText: "6 days ago",
  },
]);

const emailReportEmailField = ref();
const emailReportEmail = ref();
const emailReportPeriod = ref("week");
const emailReportError = ref();

const active = ref(null);
const lastUpdate = ref(Date.now());
const showClickSeekButton = ref(true);
const paused = ref(false);
const timer = ref(null);
const currentHash = ref(null);

const tColorsRed = [`<span class='text-red-500 dark:text-red-600'>`, `</span>`];
const tColorsBlue = [
  `<span class='text-blue-600 dark:text-blue-700'>`,
  `</span>`,
];

const activeLabel = computed(() => {
  if (!active.value) return "";
  const found = videoSeeks.value?.find(({ id }) => id === active.value);
  return found?.label || "";
});

const config = useRuntimeConfig();
const { DASHBOARD_URL, NODE_ENV } = config.public;

const affiliate = useState("affiliate");

const removeEmailReport = (report) => {
  const periodText = report.period === "week" ? "weekly" : "monthly";
  const message = `Are you sure to disable ${periodText} email reports for ${report.email}?`;
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
      emailReportError.value = "Fill in a valid email address";
    }, 200);
  }

  emailReports.value.push({
    id: Math.random() * 100,
    email: emailReportEmail.value,
    period: emailReportPeriod.value,
    agoText: "never",
  });

  emailReportEmail.value = "";
};

const autoplay = () => {
  const agent = window?.navigator?.userAgent;
  if (agent)
    return !/bot|crawl|android|webos|iphone|mobile|opera mini/i.test(agent);

  const type = navigator?.connection?.effectiveType;
  if (type) return !["2g", "slow-2g"].includes(type);

  if (!agent) return false;
  return true;
};

const theme = useTheme();

// Initiate video seeks
const videoSeeks = ref(
  theme.value === "dark" ? videoSeeksDark : videoSeeksLight,
);

// Update video seeks when theme changes
watch(theme, (newTheme) => {
  videoSeeks.value = newTheme === "dark" ? videoSeeksDark : videoSeeksLight;

  if (!autoplay()) return;

  if (theme.value === "dark") {
    previewVideoLight.value?.pause();
    previewVideoDark.value?.play();
    seekVideoLight.value?.pause();
    seekVideoDark.value?.play();
  } else {
    previewVideoLight.value?.play();
    previewVideoDark.value?.pause();
    seekVideoLight.value?.play();
    seekVideoDark.value?.pause();
  }
});

const themeCookie = useCookie("theme", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});

const affiliateCookie = useCookie("affiliate", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
  maxAge: 2592000, // 30 days in seconds
});

const toggleTheme = () => {
  if (theme.value === "light") theme.value = "dark";
  else theme.value = "light";

  themeCookie.value = theme.value;
};

const acceptAffiliate = ({ slug } = {}) => {
  affiliateCookie.value = slug;
  history?.replaceState?.({}, "", "/");
};
const undoAffiliate = ({ slug } = {}) => {
  affiliateCookie.value = null;
  history?.replaceState?.({}, "", `/?referral=${slug}`);
};

const checkWebpFeature = (feature, callback) => {
  if (!import.meta.client) return callback(false);

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
};

const jumpToTime = ({ start, id }) => {
  if (theme.value === "dark") {
    seekVideoDark.value.currentTime = start;
    seekVideoDark.value.pause();
    seekVideoLight.value.pause();
  } else {
    seekVideoLight.value.currentTime = start;
    seekVideoLight.value.pause();
    seekVideoDark.value.pause();
  }

  paused.value = true;
  active.value = id;
  lastUpdate.value = Date.now();
  showClickSeekButton.value = false;

  if (timer.value) clearInterval(timer.value);

  timer.value = setTimeout(() => {
    paused.value = false;
    if (theme.value === "dark") {
      seekVideoDark.value.play();
    } else {
      seekVideoLight.value.play();
    }
  }, 1500);
};

const scrollToSeekVideo = (seekId) => {
  seekVideoInstruction.value.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  if (seekId) {
    const found = videoSeeks.value?.find(({ id }) => seekId === id);
    if (found) jumpToTime(found);
  }
};

const scrollToHash = (hash) => {
  if (!import.meta.client) return;

  window.location.hash = hash;
  currentHash.value = hash;
};

const launched = launchedAi({ NODE_ENV });

const showAIBanner = computed(() => {
  const now = new Date();
  const end = new Date("2024-01-01");
  if (now < end && launched) return true;
  return false;
});

onMounted(() => {
  emailReportEmailField.value?.addEventListener("focus", () => {
    emailReportError.value = "";
  });

  if (import.meta.client && window.sa_event) sa_event("visit_landing");

  if (!import.meta.client) return;

  const timeUpdate = ({ target }) => {
    const { currentTime } = target;

    let found = null;

    for (const seek of videoSeeks.value || []) {
      if (currentTime > seek.start && currentTime < seek.end) found = seek.id;
    }

    if (Date.now() - lastUpdate.value > 2000) active.value = found;
  };

  seekVideoLight.value?.addEventListener("timeupdate", timeUpdate);
  seekVideoDark.value?.addEventListener("timeupdate", timeUpdate);

  if (autoplay()) {
    setTimeout(() => {
      if (theme.value === "dark") {
        previewVideoDark.value?.play();
        seekVideoDark.value?.play();
      } else {
        previewVideoLight.value?.play();
        seekVideoLight.value?.play();
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
});
</script>
