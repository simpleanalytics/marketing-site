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
        <strong>{{ affiliate?.name || "the promoter" }}</strong> gets a reward.
        <a @click="undoAffiliate(affiliate)">Click here to undo this</a>.
      </p>
      <div
        v-else-if="affiliate.valid === true"
        class="border-2 bg-white dark:bg-gray-900 border-red-500 dark:border-red-600 rounded-lg text-center p-4 shadow"
      >
        <p class="mb-2">
          <span v-if="affiliate.name"
            >You are here via <strong>{{ affiliate.name }}</strong
            >.</span
          >
          <span v-else-if="affiliate.slug">
            You are here via the affiliate code
            <strong>{{ affiliate.slug }}</strong
            >.
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
          It looks like your affiliate link
          <strong>"{{ affiliate.slug }}"</strong> is invalid.
        </span>
        <span v-else>It looks like your affiliate link is invalid.</span>

        <NuxtLink
          :href="
            MAIN_URL + '/contact' + (theme === 'dark' ? '?theme=dark' : '')
          "
          target="_blank"
          class="text-white underline ml-1"
          >Contact us</NuxtLink
        >
        if you think this is a mistake.
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="text-center md:text-left flex-shrink basis-2/4 md:mr-8">
        <h1 class="text-3xl font-medium sm:text-4xl lg:text-4xl">
          <span
            class="leading-snug"
            v-html="
              $t('home.title', [
                `<span class='text-red-500 dark:text-red-600'>`,
                `</span>`,
              ])
            "
          ></span>
        </h1>
        <p
          class="mt-4 text-base sm:text-lg md:mt-8 lg:text-xl md:leading-relaxed leading-relaxed"
        >
          <EuropeanFlag class="inline mr-2 w-8 rounded align-sub" />
          <span
            v-html="
              $t('home.subtitle', [
                `<span class='underline-curly text-red-500 dark:text-red-600'>`,
                `</span>`,
              ])
            "
          ></span>
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
              @click="navigateToWelcome('click_signup_above_fold')"
              class="button large primary"
            >
              {{ $t("home.start_trial_now") }}
            </a>
            <p class="mb-8 sm:mb-0 text-xs mt-2 text-center">
              <CheckIcon class="fill-green-500 w-4 inline align-text-top" />
              {{ $t("home.no_creditcard") }}
            </p>
          </div>
          <div class="sm:mt-4 ml-4">
            <ol class="text-left">
              <li class="flex mb-3">
                <PlusIcon
                  class="h-5 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
                />
                <p class="leading-relaxed ml-2 -indent-2.5 text-sm">
                  <span>
                    {{ $t("home.featured_options.add_website") }}
                  </span>
                </p>
              </li>
              <li class="flex my-3">
                <GoogleAnalyticsIcon
                  class="inline stroke-1 h-5 mr-3 stroke-red-500 dark:stroke-red-600 hover:group-hover:stroke-red-500"
                />
                <p class="leading-relaxed ml-2 -indent-2.5 text-sm">
                  <span>
                    {{ $t("home.featured_options.import_ga") }}
                  </span>
                </p>
              </li>
              <li class="flex my-3">
                <PresentationChartBarIcon
                  class="h-5 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
                />
                <p class="leading-relaxed ml-2 -indent-2.5 text-sm">
                  <span>
                    {{ $t("home.featured_options.see_stats") }}
                  </span>
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
                'click_demo_above_fold',
                {},
                MAIN_URL + '/simpleanalytics.com?from=landing',
              )
            "
            class="group button large shadow-xl bg-white dark:bg-gray-800 hover:dark:bg-gray-900"
          >
            <span class="mx-2">{{ $t("home.see_live_demo") }}</span>
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
      v-if="locale && !['en', 'nl', 'it'].includes(locale)"
      class="mx-auto text-center mt-20"
    >
      <p
        class="inline-block px-4 py-2 rounded-lg bg-[#ffd9cb] dark:bg-[#592b1b]"
      >
        <template v-if="translationParts.length === 3">
          {{ translationParts[0] }}
          <NuxtLink
            class="dark:text-gray-300 text-gray-700 underline"
            :to="localePath({ name: 'index' }, 'en')"
          >
            {{ translationParts[1] }}</NuxtLink
          >{{ translationParts[2] }}
        </template>
        <template v-else>
          {{ $t("home.automatic_translated_switch_to_english") }}
        </template>
      </p>
    </div>

    <div
      class="bg-gradient-to-t from-blue-100 dark:from-gray-700 py-4 relative overflow-hidden pb-28"
    >
      <div class="max-w-3xl px-6 mt-8 mx-auto text-center">
        <h3
          id="reasons"
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto -mt-4 mb-4 sm:mt-8 sm:mb-8 pt-8 font-medium"
          v-html="$t('home.why_most_privacy.title', tColorsRed)"
        ></h3>

        <h4
          class="my-4 mb-8 text-xl text-center"
          v-html="
            $t('home.why_most_privacy.x_reasons', [
              `5<span class='text-red-500 dark:text-red-600'>+1</span>`,
            ])
          "
        ></h4>
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
            <li class="flex my-3">
              <EyeSlashIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">1. </span
                ><span
                  v-html="$t('home.why_most_privacy.reason_1', tColorsRed)"
                ></span>
              </p>
            </li>
            <li class="flex my-3">
              <CursorArrowRaysIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">2. </span
                ><span
                  v-html="$t('home.why_most_privacy.reason_2', tColorsRed)"
                ></span>
              </p>
            </li>
            <li class="flex my-3">
              <FingerPrintIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">3. </span
                ><span
                  v-html="$t('home.why_most_privacy.reason_3', tColorsRed)"
                ></span>
              </p>
            </li>
            <li class="flex my-3">
              <GlobeAmericasIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">4. </span
                ><span
                  v-html="$t('home.why_most_privacy.reason_4', tColorsRed)"
                ></span>
              </p>
            </li>
            <li class="flex my-3">
              <BoltIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p class="leading-relaxed ml-4 -indent-2.5 mt-1">
                <span class="inline-block w-2.5">5. </span
                ><span
                  v-html="$t('home.why_most_privacy.reason_5', tColorsRed)"
                ></span>
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
          <span class="mx-1">{{
            $t("home.why_most_privacy.read_detailed_reasons")
          }}</span>
          <ChevronDoubleDownIcon class="w-3 inline-block" />
        </a>

        <Quote
          class="mt-4"
          :logo="DuckDuckGoLogo"
          :title="$t('testimonials.duckduckgo.name')"
          :subtitle="$t('testimonials.duckduckgo.role')"
          :quote="$t('testimonials.duckduckgo.quote', tColorsBlue)"
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
        :subtitle="$t('testimonials.rosie.role')"
        :quote="$t('testimonials.rosie.quote', tColorsBlue)"
        iconclass="fill-blue-200 dark:fill-gray-700"
        image="https://assets.simpleanalytics.com/images/people/rosie.png"
        title="Rosie Sherry"
        subtitlelink="https://indiehackers.com/"
      />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
      >
        {{ $t("home.simple_title") }}.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        {{ $t("home.simple_description") }}
      </p>

      <div class="mt-4 mb-8" id="features">
        <div>
          <p
            ref="seekVideoInstruction"
            class="mb-4 p-1 pt-8 px-2 mx-auto inline-flex rounded-full text-sm text-gray-400 motion-safe:animate-bounce"
            :class="showClickSeekButton ? 'visible' : 'invisible'"
          >
            <ChevronDoubleDownIcon class="w-3 inline-block" />
            <span class="mx-1">{{ $t("home.see_if_for_yourself") }}</span>
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
          <ArrowRightCircleIcon
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

      <Quote
        class="mt-8"
        :reverse="false"
        iconclass="fill-blue-200"
        :logo="FastCompanyLogo"
        :quote="$t('testimonials.fastcompany.quote', tColorsBlue)"
        :subtitle="$t('testimonials.fastcompany.role')"
        logoclass="bg-blue-200 dark:bg-gray-500 rounded-full p-1 sm:p-4"
        subtitlelink="https://www.fastcompany.com/90300072/its-time-to-ditch-google-analytics"
      />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-20 sm:mb-8 font-medium"
        v-html="$t('home.connect.title', tColorsRed)"
      ></h3>
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
                  v-html="$t('home.connect.import_data', tColorsRed)"
                ></span
                ><Arrow class=""
              /></a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p>
              <span v-html="$t('home.connect.use_gtm')"></span>
              <a
                class="ml-1 underline group"
                href="https://docs.simpleanalytics.com/install-on-other-platforms#framework-plugins"
              >
                <span v-html="$t('home.connect.framework_plugins')"></span
                ><Arrow />
              </a>
            </p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p v-html="$t('home.connect.export_to', tColorsRed)"></p>
          </li>
          <li class="flex items-center my-6">
            <ShieldCheckIcon
              class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
            />
            <p v-html="$t('home.connect.export_as', tColorsRed)"></p>
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
        {{ $t("home.why_switch_from_ga.title") }}
      </h3>

      <div class="text-left leading-loose">
        <p
          class="my-4"
          v-html="
            $t('home.why_switch_from_ga.paragraph_1', [
              `<span class='underline'>`,
              `</span>`,
            ])
          "
        ></p>

        <p class="my-4" v-html="$t('home.why_switch_from_ga.paragraph_2')"></p>

        <p class="my-4">
          <span v-html="$t('home.why_switch_from_ga.paragraph_3')"></span>
          <a
            href="/blog/google-to-sunset-universal-analytics-in-2023"
            target="_blank"
            class="ml-1 group underline"
            ><span
              v-html="$t('home.why_switch_from_ga.paragraph_3_link')"
            ></span
            ><Arrow
          /></a>
        </p>

        <p class="my-4" v-html="$t('home.why_switch_from_ga.paragraph_4')"></p>

        <p class="my-4" v-html="$t('home.why_switch_from_ga.paragraph_5')"></p>

        <p class="my-4">
          <span v-html="$t('home.why_switch_from_ga.paragraph_6_1')"></span>
          <a
            href="/blog/why-simple-analytics-is-a-great-alternative-to-google-analytics"
            target="_blank"
            class="ml-1 mr-1 group underline"
            ><span
              v-html="$t('home.why_switch_from_ga.paragraph_6_link')"
            ></span
            ><Arrow
          /></a>
          <span v-html="$t('home.why_switch_from_ga.paragraph_6_2')"></span>
        </p>

        <p class="my-4">
          <a
            :href="
              MAIN_URL + '/welcome' + (theme === 'dark' ? '?theme=dark' : '')
            "
            class="group underline"
            >{{ $t("home.why_switch_from_ga.try_us_button") }}<Arrow
          /></a>
        </p>
      </div>

      <Quote
        class="mt-12"
        image="https://assets.simpleanalytics.com/images/people/philippe.png"
        title="Philippe Lehoux"
        :subtitle="$t('testimonials.missive.role')"
        subtitlelink="https://missiveapp.com/blog/privacy-first-analytics"
      >
        <p class="text-xl leading-relaxed">
          "<span v-html="$t('testimonials.missive.quote', tColorsBlue)"></span>"
        </p>
      </Quote>
    </div>

    <div class="max-w-3xl px-6 mx-auto text-center">
      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mb-4 mt-12 sm:mb-8 font-medium"
      >
        {{ $t("home.events.title") }}.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        <a
          class="underline group"
          href="https://docs.simpleanalytics.com/automated-events"
          target="_blank"
          >{{ $t("home.events.auto_collect_link") }}<Arrow
        /></a>
        {{ $t("home.events.auto_collect_description") }}
      </p>

      <p>
        <a @click="scrollToSeekVideo('seek.events')" class="button">
          <ChevronDoubleUpIcon class="w-3 inline-block" />
          <span class="mx-1">
            {{ $t("home.events.see_events_in_action") }}</span
          >
          <ChevronDoubleUpIcon class="w-3 inline-block" />
        </a>
      </p>

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mb-4 mt-20 sm:mb-8 font-medium"
      >
        {{ $t("home.reports.title") }}.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        {{ $t("home.reports.description") }}
      </p>

      <div class="mt-8 mb-12">
        <div
          class="p-4 -m-8 scale-[0.8] text-left border-0 rounded-lg bg-blue-100 dark:bg-gray-700 dark:shadow-none shadow-md rotate-1"
        >
          <h4 class="text-lg">{{ $t("home.reports.email_reports") }}</h4>

          <p
            class="mt-2"
            v-html="
              $t('home.reports.instructions', [
                `<a href='https://docs.simpleanalytics.com/email-reports'>`,
                `</a>`,
              ])
            "
          ></p>

          <div class="my-4">
            <table class="w-full max-w-full" v-if="emailReports.length">
              <thead>
                <tr>
                  <th class="font-normal">
                    {{ $t("home.reports.recipient") }}
                  </th>
                  <th class="font-normal">{{ $t("home.reports.period") }}</th>
                  <th class="font-normal hidden sm:table-cell">
                    {{ $t("home.reports.last_emailed") }}
                  </th>
                  <th class="font-normal"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="report of emailReports" :key="report.id">
                  <td class="truncate max-w-[100px] md:max-w-full pr-2">
                    {{ report.email }}
                  </td>
                  <td>
                    {{
                      report.period === "month"
                        ? $t("home.reports.month")
                        : $t("home.reports.week")
                    }}
                  </td>
                  <td class="hidden sm:table-cell">
                    {{ $t(report.agoTranslation) }}
                  </td>
                  <td>
                    <a
                      class="ml-2 button tiny"
                      @click="removeEmailReport(report)"
                    >
                      <span class="hidden sm:inline">{{
                        $t("home.reports.remove")
                      }}</span>
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
              :placeholder="$t('home.reports.email_placeholder')"
              class="appearance-none max-w-full rounded-sm w-72 mr-2 mt-2 pl-3 py-2 text-base focus:outline-none sm:text-normal bg-gray-50 text-gray-500 border border-gray-200 dark:border-0 dark:bg-gray-600 dark:text-gray-300"
            />

            <select
              v-model="emailReportPeriod"
              class="appearance-none rounded-sm mr-2 mt-2 pl-3 pr-8 py-2 text-base focus:outline-none sm:text-normal bg-gray-50 text-gray-500 border border-gray-200 dark:border-0 dark:bg-gray-600 dark:text-gray-300"
            >
              <option value="week">{{ $t("home.reports.weekly") }}</option>
              <option value="month">{{ $t("home.reports.monthly") }}</option>
            </select>

            <a @click="saveEmailReport" class="mt-2 button">{{
              $t("home.reports.add_recipient")
            }}</a>
          </p>
        </div>
      </div>

      <StartTrial />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-md mx-auto mb-4 mt-20 sm:mb-8 font-medium"
      >
        {{ $t("home.dark_mode.title") }}.
      </h3>
      <p
        class="my-4 sm:mb-8 leading-loose max-w-xl mx-auto"
        v-html="
          $t('home.dark_mode.description', [
            `<span class='line-through dark:text-gray-500'>`,
            `</span>`,
            `<span class='text-red-500 dark:text-red-600'>`,
            `</span>`,
          ])
        "
      ></p>
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
          <span class="ml-2">{{ $t("home.dark_mode.toggle_button") }}</span>
          <SunIcon class="h-6 p-1 ml-1 stroke-red-600 hidden dark:block" />
          <MoonIcon class="h-6 p-1 ml-1 stroke-red-500 dark:hidden" />
        </a>
      </p>

      <Quote
        class="mt-4"
        image="https://assets.simpleanalytics.com/images/people/hannah.png"
        title="Hannah Wright"
        :subtitle="$t('testimonials.hannah.role')"
        subtitlelink="https://www.saasdesign.io/"
      >
        <p class="text-base leading-relaxed">
          "<span v-html="$t('testimonials.hannah.quote', tColorsRed)"></span>"
        </p>
      </Quote>

      <div
        class="md:flex items-center justify-center mt-2 mb-4 sm:mt-12 sm:mb-8"
      >
        <div class="md:order-2 mx-auto max-w-max text-left mt-12 sm:mt-0">
          <h3
            class="text-2xl sm:text-4xl text-center md:text-left leading-normal sm:leading-normal font-medium"
          >
            {{ $t("home.mobile.title") }}.
          </h3>
          <ul>
            <li class="flex items-center my-6">
              <ShieldCheckIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p
                v-html="
                  $t('home.mobile.point_1', [
                    ...tColorsRed,
                    `<br class='block sm:hidden' /> `,
                  ])
                "
              ></p>
            </li>
            <li class="flex items-center my-6">
              <ShieldCheckIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p
                v-html="
                  $t('home.mobile.point_2', [
                    ...tColorsRed,
                    `<br class='block sm:hidden' /> `,
                  ])
                "
              ></p>
            </li>
            <li class="flex items-center my-6">
              <ShieldCheckIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p
                v-html="
                  $t('home.mobile.point_3', [
                    ...tColorsRed,
                    `<br class='block sm:hidden' /> `,
                  ])
                "
              ></p>
            </li>
            <li class="flex items-center my-6">
              <ShieldCheckIcon
                class="h-8 mr-3 shrink-0 stroke-1 stroke-red-500 dark:stroke-red-600"
              />
              <p
                v-html="
                  $t('home.mobile.point_4', [
                    ...tColorsRed,
                    `<br class='block sm:hidden' /> `,
                  ])
                "
              ></p>
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
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal max-w-lg mx-auto mb-4 mt-24 sm:mb-8 font-medium"
        >
          {{ $t("home.videos.title") }}.
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
              {{ $t("home.videos.tropical_caption") }}
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
            <p class="mt-3 text-xs">{{ $t("home.videos.paranoid_caption") }}</p>
          </div>
        </div>

        <Quote
          class="mt-20 z-20"
          :reverse="true"
          iconclass="fill-blue-200 dark:fill-gray-800"
          image="https://assets.simpleanalytics.com/images/people/evan.png"
          title="Evan Frawley"
          :subtitle="$t('testimonials.evan.role', tColorsBlue)"
          subtitlelink="https://evan.gg/blog/simple-analytics-is-great"
        >
          <p class="text-xl leading-relaxed">
            "<span v-html="$t('testimonials.evan.quote', tColorsBlue)"></span>"
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
        {{ $t("pricing.title") }}.
      </h3>

      <Pricing />

      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mb-4 mt-24 sm:mb-8 font-medium text-center"
      >
        {{ $t("pricing_faq.title") }}.
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
          "<span v-html="$t('testimonials.stefaan.quote', tColorsRed)"></span>"
        </p>
      </Quote>
    </div>

    <section
      class="bg-gradient-to-t from-red-50 dark:from-gray-700 mt-12 w-full relative overflow-hidden pb-32"
    >
      <div class="max-w-3xl mb-20 px-6 mx-auto text-center z-20 relative">
        <h3
          class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mt-2 mb-4 sm:mt-16 sm:mb-20 font-medium text-center"
          v-html="$t('testimonials.trusted_by', tColorsRed)"
        ></h3>

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
        v-html="$t('home.why_most_privacy.title', tColorsRed)"
      ></h3>

      <div class="leading-loose max-w-lg mx-auto">
        <h4
          class="my-4 text-2xl text-center"
          v-html="$t('home.why_most_privacy.x_reasons', [`5`])"
        ></h4>

        <p class="text-center" v-if="currentHash === 'why'">
          <a
            @click="scrollToHash('reasons')"
            class="mt-4 button tiny shadow-md bg-white dark:bg-gray-800"
          >
            <ChevronDoubleUpIcon class="w-3 inline-block" />
            <span class="mx-1">{{ $t("home.go_back") }}</span>
            <ChevronDoubleUpIcon class="w-3 inline-block" />
          </a>
        </p>

        <EyeSlashIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          1. {{ $t("home.why_most_privacy.business_model.title") }}
        </h5>

        <div
          class="prose leading-loose"
          v-html="
            $t('home.why_most_privacy.business_model.html', [
              `<a href='${MAIN_URL}/roadmap'>`,
              `</a>`,
              `<a href='${MAIN_URL}/open'>`,
              `</a>`,
            ])
          "
        ></div>

        <KeyIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          2. {{ $t("home.why_most_privacy.encrypted.title") }}
        </h5>

        <div
          class="prose leading-loose"
          v-html="$t('home.why_most_privacy.encrypted.html')"
        ></div>

        <FingerPrintIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          3. {{ $t("home.why_most_privacy.personal_data.title") }}
        </h5>

        <div
          class="prose leading-loose"
          v-html="$t('home.why_most_privacy.personal_data.html', tColorsRed)"
        ></div>

        <GlobeAmericasIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          4. {{ $t("home.why_most_privacy.eu_based.title") }}
        </h5>

        <div
          class="prose leading-loose"
          v-html="$t('home.why_most_privacy.eu_based.html')"
        ></div>

        <TableCellsIcon
          class="mx-auto stroke-1 mt-12 h-12 stroke-red-500 dark:stroke-red-600"
        />

        <h5
          class="mt-2 mb-4 text-xl leading-loose text-center text-red-500 dark:text-red-600 max-w-md mx-auto"
        >
          5. {{ $t("home.why_most_privacy.own_data.title") }}
        </h5>
        <div
          class="prose leading-loose"
          v-html="$t('home.why_most_privacy.own_data.html')"
        ></div>
      </div>

      <div class="py-12 text-center">
        <StartTrial />
      </div>
    </div>

    <p v-if="locale === 'fr'" class="text-center leading-loose">
      Merci à
      <NuxtLink to="https://www.linkedin.com/in/fredericthu"
        >Frédéric Thu</NuxtLink
      >
      d'avoir corrigé la traduction française.
    </p>

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
import DataConnections from "../components/images/DataConnections.vue";
import BackgroundChart from "../components/images/BackgroundChart.vue";

import Arrow from "../components/Arrow.vue";
import Quote from "../components/Quote.vue";
import Video from "../components/Video.vue";
import StartTrial from "../components/StartTrial.vue";
import Logos from "../components/Logos.vue";
import Pricing from "../components/Pricing.vue";
import FAQ from "../components/FAQ.vue";

import { useI18n } from "vue-i18n";
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
} from "@heroicons/vue/24/outline";

const { t, locale } = useI18n();
const localePath = useLocalePath();

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
    id: 0,
    email: "adriaanvanrossum@simpleanalytics.com",
    period: "week",
    agoTranslation: "home.reports.a_day_ago",
  },
  {
    id: 1,
    email: "ironbrands@simpleanalytics.com",
    period: "month",
    agoTranslation: "home.reports.six_days_ago",
  },
]);

const emailReportEmailField = ref();
const emailReportEmail = ref("");
const emailReportPeriod = ref("week");
const emailReportError = ref("");

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

const translationParts = t("home.automatic_translated_switch_to_english", [
  "---",
  "---",
]).split("---");

const config = useRuntimeConfig();
const { MAIN_URL } = config.public;

const affiliate = useState("affiliate");

const removeEmailReport = (report) => {
  const message = t("home.reports.confirm", [
    report.period === "week"
      ? t("home.reports.weekly")
      : t("home.reports.monthly"),
    report.email,
  ]);
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
      emailReportError.value = t("home.reports.invalid_email");
    }, 200);
  }

  emailReports.value.push({
    id: Math.random() * 100,
    email: emailReportEmail.value,
    period: emailReportPeriod.value,
    agoTranslation: "home.reports.never",
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
  if (!process.client) return callback(false);

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

const jumpToTime = ({ start, translation }) => {
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
  active.value = translation;
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

const scrollToSeekVideo = (seek) => {
  seekVideoInstruction.value.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  if (seek) {
    const found = videoSeeks.value?.find(
      ({ translation }) => seek === translation,
    );
    if (found) jumpToTime(found);
  }
};

const scrollToHash = (hash) => {
  if (!process.client) return;

  window.location.hash = hash;
  currentHash.value = hash;
};

onMounted(() => {
  emailReportEmailField.value?.addEventListener("focus", () => {
    emailReportError.value = "";
  });

  if (process.client && window.sa_event) sa_event("visit_landing");

  if (!process.client) return;

  const timeUpdate = ({ target }) => {
    const { currentTime } = target;

    let found = null;

    for (const seek of videoSeeks.value || []) {
      if (currentTime > seek.start && currentTime < seek.end)
        found = seek.translation;
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
