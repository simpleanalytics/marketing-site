<template>
  <div class="bg-blue-50 dark:bg-gray-800">
    <Html
      lang="en-US"
      :class="{ dark: theme === 'dark', 'scroll-smooth': true }"
    >
      <Head>
        <link
          rel="preconnect"
          href="https://assets.simpleanalytics.com/"
          crossorigin
        />
        <link
          rel="preconnect"
          href="https://scripts.simpleanalyticscdn.com/"
          crossorigin
        />
        <link rel="dns-prefetch" href="https://assets.simpleanalytics.com/" />
        <link rel="dns-prefetch" href="https://docs.simpleanalytics.com/" />
        <link
          rel="dns-prefetch"
          href="https://scripts.simpleanalyticscdn.com/"
        />
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          itemprop="image"
          content="https://assets.simpleanalytics.com/social-media/dark-chart.png"
        />
        <meta
          property="og:image"
          content="https://assets.simpleanalytics.com/social-media/dark-chart.png"
        />
        <meta name="twitter:url" content="https://simpleanalytics.com" />
        <meta name="twitter:title" content="{{ route.meta.title }}" />
        <meta
          name="twitter:description"
          content="{{ route.meta.description }}"
        />
        <meta
          name="twitter:image"
          content="https://assets.simpleanalytics.com/social-media/dark-chart.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SimpleAnalytic" />
        <meta name="twitter:creator" content="@SimpleAnalytic" />
        <meta name="twitter:image:alt" content="{{ defaultDescription }}" />
      </Head>
    </Html>

    <div
      class="text-gray-300 bg-gradient-to-b from-blue-100 dark:from-gray-900 relative"
    >
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
                    <span
                      class="sm:hidden lg:block ml-3 text-xl sm:text-2xl text-gray-500 dark:text-gray-400"
                      >Simple Analytics</span
                    >
                  </NuxtLink>
                  <MoonSun class="scale-75 ml-1 mt-1 mr-auto" />
                  <!-- <a @click="toggleTheme()" class="mt-1 mr-auto">
                    <SunIcon
                      class="h-7 p-1 ml-1 stroke-gray-400"
                      v-if="theme === 'dark'"
                    />
                    <MoonIcon class="h-6 p-1 ml-1 stroke-red-500" v-else />
                  </a> -->
                  <div
                    class="flex items-center md:hidden"
                    style="margin-right: 4px"
                  >
                    <PopoverButton
                      class="bg-red-50 dark:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover-hover:hover:text-gray-500 hover-hover:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-100"
                    >
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon
                        class="h-6 w-6 stroke-red-500 dark:stroke-gray-400"
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
                    class="font-medium text-gray-500 hover-hover:hover:text-gray-600"
                    >{{ $t(item.translation) }}</NuxtLink
                  >
                  <Popover class="relative z-20" v-slot="{ open }" v-else>
                    <PopoverButton
                      :class="[
                        open ? 'text-gray-600' : '',
                        'group  inline-flex items-center text-base font-medium text-gray-500 hover-hover:hover:text-gray-600',
                      ]"
                    >
                      <span>{{ $t("nav.resources") }}</span>
                      <ChevronDownIcon
                        :class="[
                          open ? 'text-gray-600' : 'text-gray-500',
                          'ml-2 h-5 w-5 hover-hover:group-hover:text-gray-600',
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
                        <div class="shadow-lg overflow-hidden">
                          <div
                            class="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8"
                          >
                            <a
                              v-for="item in resources"
                              :key="item.name"
                              :href="item.href"
                              class="-m-3 p-3 rounded flex items-start hover-hover:hover:bg-blue-100 dark:hover-hover:hover:bg-gray-900 transition ease-in-out duration-150"
                            >
                              <component
                                :is="item.icon"
                                class="flex-shrink-0 h-6 w-6 text-red-500"
                                aria-hidden="true"
                              />
                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  {{ $t(item.name) }}
                                </p>
                                <p class="mt-1 text-sm">
                                  {{ $t(item.description) }}
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
                                {{ $t("home.recent_blog_posts") }}
                                <span
                                  v-if="i18n.locale.value !== 'en'"
                                  class="lowercase text-gray-400 dark:text-gray-400"
                                >
                                  {{ $t("home.in_english") }}
                                </span>
                              </h3>
                              <p v-if="pending" class="mt-5 text-sm">
                                {{ $t("home.loading_posts") }}...
                              </p>
                              <p
                                v-else-if="!recentPosts?.length"
                                class="mt-5 text-sm"
                              >
                                {{ $t("home.did_not_find_any_posts") }}...
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
                                    class="font-medium hover-hover:hover:text-gray-900 dark:hover-hover:hover:text-gray-500 transition ease-in-out duration-150"
                                  >
                                    <span
                                      v-if="
                                        new Date(post.created) >
                                        Date.now() - 1555200000 // 18 days
                                      "
                                      class="inline-block text-sm bg-red-500 dark:bg-red-600 px-1 text-white rounded-md align-text-top mr-1"
                                      >{{ $t("home.new") }}</span
                                    >
                                    {{ post.title }}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="mt-5 text-sm">
                              <a
                                href="https://blog.simpleanalytics.com"
                                class="font-medium text-red-500 hover-hover:hover:text-red-500 transition ease-in-out duration-150"
                              >
                                {{ $t("home.view_all_posts") }}
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
                  :href="
                    'https://simpleanalytics.com/welcome' +
                    (theme === 'dark' ? '?theme=dark' : '')
                  "
                  class="font-medium text-gray-500 dark:text-gray-400 mx-3 dark:hover-hover:hover:text-gray-600"
                >
                  {{ $t("nav.signup") }}
                </a>
                <a
                  :href="
                    'https://simpleanalytics.com/login' +
                    (theme === 'dark' ? '?theme=dark' : '')
                  "
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
                class="rounded-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <SimpleAnalyticsIcon class="h-8 w-auto" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="bg-white dark:bg-gray-500 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover-hover:hover:text-gray-500 hover-hover:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-100"
                    >
                      <span class="sr-only">Close menu</span>
                      <XIcon
                        class="h-6 w-6 stroke-gray-100"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <NuxtLink
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover-hover:hover:text-gray-900 hover-hover:hover:bg-gray-50"
                    >{{ $t(item.translation) }}</NuxtLink
                  >
                </div>
                <a
                  href="/login"
                  class="block w-full px-5 py-3 text-center font-medium text-red-500 bg-gray-50 hover-hover:hover:bg-gray-100 dark:bg-gray-500 dark:text-gray-100"
                >
                  {{ $t("nav.login") }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <main class="container mt-8 mx-auto max-w-7xl px-4 sm:mt-16">
          <slot name="hero" />
        </main>
      </div>
    </div>

    <main>
      <slot></slot>
    </main>

    <footer class="bg-blue-100 dark:bg-gray-800">
      <div
        class="bg-gradient-to-t from-gray-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 text-left lg:text-left"
      >
        <div
          class="container px-3 sm:px-6 pt-10 pb-4 md:pt-12 md:pb-10 mx-auto"
        >
          <p
            class="text-center -mt-4 mb-8 flex justify-center items-center text-sm"
            v-if="i18n.locale.value !== 'en'"
          >
            {{ $t("home.most_of_resources_are_english") }}
          </p>
          <div class="grid lg:grid-cols-4 lg:grid-rows-3 md:grid-cols-2">
            <div class="mb-10 lg:mb-0 lg:row-span-2">
              <h5
                class="uppercase font-bold text-gray-600 dark:text-gray-400 px-3 mb-2 tracking-wide"
              >
                {{ $t("home.footer.privacy") }}
              </h5>

              <ul class="list-none mb-0">
                <li>
                  <a
                    href="https://docs.simpleanalytics.com/what-we-collect"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <FingerPrintIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.what_we_collect") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://simpleanalytics.com/no-tracking"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <EyeOffIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.we_dont_track_you") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://simpleanalytics.com/privacy-policy"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <ScaleIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.privacy_policy") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://simpleanalytics.com/cookie-statement"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <BookOpenIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.cookie_statement") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    :href="
                      i18n.locale.value === 'nl'
                        ? 'https://simpleanalytics.com/algemene-voorwaarden'
                        : 'https://simpleanalytics.com/terms-of-service'
                    "
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <NewspaperIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.tos") }}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mb-10 lg:mb-0 lg:row-span-2">
              <h5
                class="uppercase font-bold text-gray-600 dark:text-gray-400 px-3 mb-2 tracking-wide"
              >
                {{ $t("home.footer.learn") }}
              </h5>

              <ul class="list-none mb-0">
                <li>
                  <a
                    href="https://docs.simpleanalytics.com/"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <SupportIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.documentation") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.simpleanalytics.com/"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <BookOpenIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.blog") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://simpleanalytics.com/roadmap"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <LocationMarkerIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.roadmap") }}</span>
                  </a>
                </li>
                <li>
                  <NuxtLink
                    href="/pricing"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <CreditCardIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.pricing") }}</span>
                  </NuxtLink>
                </li>
                <li>
                  <a
                    href="https://status.simpleanalytics.com/"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <ClipboardCheckIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.status") }}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mb-10 lg:mb-0 lg:row-span-2">
              <h5
                class="uppercase font-bold text-gray-600 dark:text-gray-400 px-3 mb-2 tracking-wide"
              >
                {{ $t("home.footer.comparisons") }}
              </h5>

              <ul class="list-none mb-0">
                <li>
                  <a
                    href="https://blog.simpleanalytics.com/why-simple-analytics-is-a-great-alternative-to-google-analytics"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <GoogleAnalyticsIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>Google Analytics</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.simpleanalytics.com/why-simple-analytics-is-a-great-alternative-to-matomo"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <MatomoIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>Matomo</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.simpleanalytics.com/why-simple-analytics-is-a-great-alternative-to-plausible"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <PlausibleIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>Plausible</span>
                  </a>
                </li>
                <li v-if="false">
                  <a
                    href="#!"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <FathomIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>Fathom</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.simpleanalytics.com/why-simple-analytics-is-a-great-alternative-to-cloudflare-web-analytics"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded hover-hover:hover:text-red-500 group"
                  >
                    <CloudflareIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover-hover:group-hover:stroke-red-500 dark:hover-hover:group-hover:stroke-gray-400"
                    />
                    <span>Cloudflare</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mb-10 lg:mb-0 lg:row-span-3 max-w-[400px]">
              <h5
                class="uppercase font-bold text-gray-600 dark:text-gray-400 px-3 mb-2 tracking-wide"
              >
                {{ $t("home.recent_blog_posts") }}
              </h5>

              <p
                v-if="pending"
                class="text-gray-600 dark:text-gray-400 py-3 px-3 block text-left"
              >
                {{ $t("home.loading_posts") }}...
              </p>
              <p
                v-else-if="!recentPosts?.length"
                class="text-gray-600 dark:text-gray-400 py-3 px-3 block text-left"
                v-html="
                  $t('home.could_not_connect', [
                    `<a
                      class='underline text-gray-600 dark:text-gray-400'
                      href='https://blog.simpleanalytics.com/'
                      target='_blank'>`,
                    `</a>`,
                  ])
                "
              ></p>
              <ul class="list-none flex flex-col space-y-2 -mb-2.5 mt-0" v-else>
                <li
                  v-for="(post, index) in recentPosts.slice(0, 5)"
                  :key="post.url"
                >
                  <a
                    :href="post.url"
                    target="_blank"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 items-center dark:hover-hover:hover:bg-gray-600 dark:hover-hover:hover:text-gray-300 rounded-md block group text-left"
                  >
                    <span
                      v-if="labelAgo(post.created)"
                      class="inline-block text-sm bg-red-500 dark:bg-red-600 px-1 text-white rounded-md align-text-top mr-1"
                      >{{ labelAgo(post.created) }}</span
                    >
                    <span
                      class="hover-hover:group-hover:text-red-500 dark:hover-hover:group-hover:text-gray-300"
                    >
                      {{ post.title?.split(" ").slice(0, -1).join(" ") }}
                      <span class="whitespace-nowrap">
                        {{ post.title?.split(" ").pop() }}
                        <Arrow
                          class="ml-0 fill-gray-800 hover-hover:group-hover:fill-red-500 dark:fill-gray-400 dark:hover-hover:group-hover:fill-gray-300"
                        />
                      </span>
                    </span>
                    <img
                      v-if="index === 0 && (post.image_no_text || post.image)"
                      class="rounded-lg shadow-md mt-1 mb-1 dark:brightness-90"
                      :src="post.image_no_text || post.image"
                      loading="lazy"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div
              class="lg:col-span-3 md:col-span-2 text-center flex items-center justify-center lg:justify-start"
            >
              <p class="mt-auto inline-flex items-center">
                <SimpleAnalyticsIcon class="h-5 w-auto sm:h-5 inline mr-2" />
                <span class="mt-0.5"
                  >Simple Analytics<span class="ml-3 mr-0">&middot;</span
                  ><a
                    class="text-gray-600 dark:text-gray-500 py-2 px-3 hover-hover:hover:text-red-500 dark:hover-hover:hover:text-gray-300 italic"
                    href="https://simpleanalytics.com/contact#details"
                  >
                    {{ $t("home.footer.company_details") }}</a
                  ></span
                >
                <span class="mx-2">&middot;</span>
                <MoonSun class="ml-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
  FingerPrintIcon,
  EyeOffIcon,
  CreditCardIcon,
  BookOpenIcon,
  LocationMarkerIcon,
  ClipboardCheckIcon,
  NewspaperIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import BackgroundShapes from "../components/images/BackgroundShapes.vue";
import SimpleAnalyticsIcon from "../components/images/SimpleAnalyticsIcon.vue";

import CloudflareIcon from "../components/icons/Cloudflare.vue";
import FathomIcon from "../components/icons/Fathom.vue";
import GoogleAnalyticsIcon from "../components/icons/GoogleAnalytics.vue";
import MatomoIcon from "../components/icons/Matomo.vue";
import PlausibleIcon from "../components/icons/Plausible.vue";

import ArrowLink from "../components/ArrowLink.vue";
import MoonSun from "../components/MoonSun.vue";
import ms from "../utils/ms";

import { useI18n } from "vue-i18n";
const i18n = useI18n();
const { t } = i18n;

const resources = [
  {
    name: "nav.resources_dropdown.docs.title",
    description: "nav.resources_dropdown.docs.description",
    href: "https://docs.simpleanalytics.com",
    icon: AcademicCapIcon,
  },
  {
    name: "nav.resources_dropdown.privacy.title",
    description: "nav.resources_dropdown.privacy.description",
    href: "https://docs.simpleanalytics.com/what-we-collect",
    icon: ScaleIcon,
  },
  {
    name: "nav.resources_dropdown.api.title",
    description: "nav.resources_dropdown.api.description",
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
    : `${route.meta.title} - Simple Analytics`,
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

const { pending, data: recentPostsAll } = useLazyFetch(
  "https://blog.simpleanalytics.com/recent-posts.json"
);

const recentPosts = computed(() => {
  if (Array.isArray(recentPostsAll.value))
    return recentPostsAll.value.slice(0, 3);
  return [];
});

const year = new Date().getFullYear();

const labelAgo = (date) => {
  if (!date || new Date(date) < Date.now() - ms.week * 11) return;

  const ago = Date.now() - new Date(date);
  if (ago > ms.day * 10)
    return t("time.short.ago.weeks", [Math.round(ago / ms.week)]);
  if (ago < ms.minute) return t("time.now");
  if (ago < ms.hour)
    return t("time.short.ago.minutes", [Math.round(ago / ms.minute)]);
  if (ago < ms.day)
    return t("time.short.ago.hours", [Math.round(ago / ms.hour)]);
  return t("time.short.ago.days", [Math.round(ago / ms.day)]);
};
</script>
