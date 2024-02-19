<template>
  <div class="bg-blue-50 dark:bg-gray-800 flex flex-col min-h-screen">
    <!-- Begin of what is in viewport -->
    <div class="flex flex-col min-h-screen">
      <Html
        :lang="localeHead.htmlAttrs.lang"
        :dir="localeHead.htmlAttrs.dir"
        :class="{
          dark: theme === 'dark',
          'scroll-smooth': true,
          'min-h-full': true,
        }"
      >
        <Head>
          <Link rel="dns-prefetch" href="https://assets.simpleanalytics.com/" />
          <Link
            rel="dns-prefetch"
            href="https://scripts.simpleanalyticscdn.com/"
          />
          <Link
            rel="preconnect"
            href="https://assets.simpleanalytics.com/"
            crossorigin
          />
          <Link
            rel="preconnect"
            href="https://scripts.simpleanalyticscdn.com/"
            crossorigin
          />

          <!-- Icons -->
          <Link
            rel="apple-touch-icon-precomposed"
            sizes="180x180"
            :href="BASE_URL + '/apple-touch-icon-180x180.png'"
          />
          <Link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            :href="BASE_URL + '/apple-touch-icon-152x152.png'"
          />
          <Link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            :href="BASE_URL + '/apple-touch-icon-120x120.png'"
          />
          <Link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            :href="BASE_URL + '/apple-touch-icon-114x114.png'"
          />
          <Link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            :href="BASE_URL + '/apple-touch-icon-76x76.png'"
          />
          <Link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            :href="BASE_URL + '/apple-touch-icon-72x72.png'"
          />
          <Link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            :href="BASE_URL + '/apple-touch-icon-60x60.png'"
          />
          <Link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            :href="BASE_URL + '/apple-touch-icon-57x57.png'"
          />
          <Link
            rel="icon"
            type="image/png"
            sizes="196x196"
            :href="BASE_URL + '/favicon-196x196.png?v=2'"
          />
          <Link
            rel="icon"
            type="image/png"
            sizes="128x128"
            :href="BASE_URL + '/favicon-128x128.png?v=2'"
          />
          <Link
            rel="icon"
            type="image/png"
            sizes="96x96"
            :href="BASE_URL + '/favicon-96x96.png?v=2'"
          />
          <Link
            rel="icon"
            type="image/png"
            sizes="32x32"
            :href="BASE_URL + '/favicon-32x32.png?v=2'"
          />
          <Link
            rel="icon"
            type="image/png"
            sizes="16x16"
            :href="BASE_URL + '/favicon-16x16.png?v=2'"
          />
          <Link rel="manifest" :href="BASE_URL + '/site.webmanifest?v=2'" />
          <Link
            rel="mask-icon"
            :href="BASE_URL + '/safari-pinned-tab.svg?v=2'"
            color="#ff4f64"
          />
          <Link rel="shortcut icon" :href="BASE_URL + '/favicon.ico?v=2'" />
          <Meta name="apple-mobile-web-app-title" content="Simple Analytics" />
          <Meta name="application-name" content="Simple Analytics" />
          <Meta name="msapplication-TileColor" content="#ff4f64" />
          <Meta
            name="theme-color"
            :content="theme === 'dark' ? '#2a373a' : '#eef9ff'"
          />
          <Meta name="apple-mobile-web-app-capable" content="yes" />

          <!-- Privacy -->
          <Meta name="referrer" content="unsafe-url" />

          <!-- Twitter -->
          <Meta name="twitter:site" content="@SimpleAnalytic" />
          <Meta name="twitter:creator" content="@SimpleAnalytic" />

          <!-- Location in Amsterdam -->
          <Meta property="og:latitude" content="52.37304233578102" />
          <Meta property="og:longitude" content="4.8925307523630535" />
          <Meta property="og:locality" content="Amsterdam" />
          <Meta property="og:region" content="Noord-Holland" />
          <Meta property="og:country-name" content="NL" />

          <!-- Languages -->
          <Meta
            name="language"
            :content="localeHead.htmlAttrs.lang?.toUpperCase()?.split('-')[0]"
          />
          <Meta
            http-equiv="content-language"
            :content="localeHead.htmlAttrs.lang?.split('-')[0]"
          />

          <template v-for="link in localeHead.link" :key="link.id">
            <Link
              :id="link.id"
              :rel="link.rel"
              :href="link.href"
              :hreflang="link.hreflang"
            />
          </template>
          <template v-for="meta in localeHead.meta" :key="meta.id">
            <Meta
              :id="meta.id"
              :property="meta.property"
              :content="meta.content"
            />
          </template>
        </Head>
      </Html>

      <div
        class="text-gray-300 bg-gradient-to-b from-blue-100 dark:from-gray-900 relative md:pb-12"
      >
        <div class="relative pt-6 pb-16 sm:pb-8">
          <Popover>
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                class="relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
              >
                <div
                  class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
                >
                  <div
                    class="flex items-center justify-between w-full md:w-auto"
                  >
                    <NuxtLink
                      :to="localePath({ name: 'index' })"
                      class="flex items-center"
                    >
                      <SimpleAnalyticsIcon class="h-5 w-auto sm:h-6" />
                      <span
                        class="sm:hidden lg:block ml-3 text-xl sm:text-2xl text-gray-500 dark:text-gray-400"
                      >
                        Simple Analytics
                      </span>
                    </NuxtLink>

                    <ClientOnly>
                      <MoonSun class="scale-75 ml-1 mt-1 mr-auto" />
                    </ClientOnly>

                    <div
                      class="flex items-center md:hidden"
                      style="margin-right: 4px"
                    >
                      <PopoverButton
                        class="bg-red-50 dark:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                      >
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon
                          class="h-6 w-6 stroke-red-500 dark:stroke-gray-400"
                          aria-hidden="true"
                        />
                      </PopoverButton>
                    </div>
                  </div>
                </div>

                <div class="hidden md:flex md:space-x-6 md:mt-2">
                  <div v-for="item in navigation" :key="item.name">
                    <ExternalLink
                      :href="item.href"
                      v-if="!item.popover && item.href"
                      class="font-medium text-gray-500 hover:text-gray-600"
                    >
                      {{ $t(item.translation) }}
                    </ExternalLink>
                    <NuxtLink
                      v-else-if="!item.popover"
                      :to="localePath({ name: item.to })"
                      class="font-medium text-gray-500 hover:text-gray-600"
                    >
                      {{ $t(item.translation) }}
                    </NuxtLink>
                    <Popover class="relative z-30" v-slot="{ open }" v-else>
                      <PopoverButton
                        :class="[
                          open ? 'text-gray-600' : '',
                          'group  inline-flex items-center text-base font-medium text-gray-500 hover:text-gray-600',
                        ]"
                      >
                        <span>{{ $t("nav.resources") }}</span>
                        <ChevronDownIcon
                          :class="[
                            open ? 'text-gray-600' : 'text-gray-500',
                            'ml-2 h-5 w-5 hover:group-hover:text-gray-600',
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
                          class="absolute z-30 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div class="shadow-lg overflow-hidden">
                            <div
                              class="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8"
                            >
                              <PopoverButton
                                :as="
                                  /^https?:\/\//.test(item.href)
                                    ? ExternalLink
                                    : MenuLink
                                "
                                v-for="item in resources"
                                :key="item.name"
                                :href="
                                  !item.href
                                    ? undefined
                                    : /^https?:\/\//.test(item.href)
                                      ? item.href
                                      : localePath(item.href)
                                "
                                :to="
                                  item.to
                                    ? localePath({ name: item.to })
                                    : undefined
                                "
                                class="-m-3 p-3 rounded flex items-start hover:bg-blue-100 dark:hover:bg-gray-900 transition ease-in-out duration-150"
                              >
                                <component
                                  :is="item.icon"
                                  class="flex-shrink-0 h-6 w-6 text-red-500 dark:stroke-red-600 stroke-red-500"
                                  aria-hidden="true"
                                />
                                <div class="ml-4">
                                  <p
                                    class="text-base font-medium text-gray-900"
                                  >
                                    {{ $t(item.name) }}
                                  </p>
                                  <p class="mt-1 text-sm">
                                    {{ $t(item.description) }}
                                  </p>
                                </div>
                              </PopoverButton>
                            </div>
                            <div
                              class="px-5 py-5 bg-blue-100 dark:bg-gray-700 sm:px-8 sm:py-8"
                              v-if="pending || recentPosts?.length"
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
                                    :key="post.slug"
                                    class="text-base truncate"
                                    :title="post.excerpt"
                                  >
                                    <PopoverButton
                                      :as="MenuLink"
                                      :href="
                                        localePath({
                                          name: 'blog-slug',
                                          params: { slug: post.slug },
                                        })
                                      "
                                      class="font-medium hover:text-gray-900 dark:hover:text-gray-500 transition ease-in-out duration-150"
                                    >
                                      <span
                                        class="inline-block text-sm bg-red-500 dark:bg-red-600 px-1 text-white dark:text-gray-700 rounded-md align-text-top mr-1"
                                        >{{
                                          labelAgo($t, post.publishedAt)
                                        }}</span
                                      >
                                      {{ post.title }}
                                    </PopoverButton>
                                  </li>
                                </ul>
                              </div>
                              <div class="mt-5 text-sm">
                                <PopoverButton
                                  :as="MenuLink"
                                  :href="localePath({ name: 'blog' })"
                                  class="font-medium text-red-500 hover:text-red-500 transition ease-in-out duration-150"
                                >
                                  {{ $t("home.view_all_posts") }}
                                  <span aria-hidden="true">&rarr;</span>
                                </PopoverButton>
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
                    @click="
                      sendEventAndRedirect(
                        'click_login_top_nav',
                        {},
                        MAIN_URL + '/login',
                      )
                    "
                    class="inline-flex items-center px-4 py-2 text-gray-500 dark:text-gray-400 dark:hover:text-gray-600"
                  >
                    {{ $t("nav.login") }}
                  </a>
                  <a
                    @click="navigateToWelcome('click_signup_top_nav')"
                    class="font-medium mx-3 button"
                  >
                    {{ $t("nav.start_trial") }}
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
                class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
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
                        class="bg-white dark:bg-gray-500 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-100"
                      >
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon
                          class="h-6 w-6 stroke-gray-100 dark:stroke-gray-300"
                          aria-hidden="true"
                        />
                      </PopoverButton>
                    </div>
                  </div>
                  <div class="px-2 pt-2 pb-3">
                    <template v-for="item in navigation" :key="item.name">
                      <PopoverButton
                        :as="MenuLink"
                        v-if="item.mobile?.to || item.to"
                        :to="localePath({ name: item.mobile?.to || item.to })"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-300"
                      >
                        {{ $t(item.mobile?.translation || item.translation) }}
                      </PopoverButton>
                      <PopoverButton
                        :as="MenuLink"
                        v-else
                        :href="localePath(item.mobile?.href || item.href)"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-300"
                      >
                        {{ $t(item.mobile?.translation || item.translation) }}
                      </PopoverButton>
                    </template>
                    <a
                      @click="navigateToWelcome('click_signup_top_nav')"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-300"
                      >{{ $t("nav.start_trial") }}</a
                    >
                    <a
                      @click="setLocale(switchTo)"
                      v-if="switchTo"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-300"
                    >
                      Switch to English
                    </a>
                    <a
                      v-if="switchTo !== 'en' && locale !== 'en'"
                      @click="setLocale('nl')"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-300"
                    >
                      Switch to English
                    </a>
                  </div>
                  <a
                    @click="
                      sendEventAndRedirect(
                        'click_login_top_nav',
                        {},
                        MAIN_URL + '/login',
                      )
                    "
                    class="block w-full px-5 py-3 text-center font-medium text-red-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-500 dark:text-gray-100"
                  >
                    {{ $t("nav.login") }}
                  </a>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </div>
      </div>

      <main class="flex flex-col flex-grow">
        <div class="mb-20 flex-grow">
          <NuxtLoadingIndicator
            :color="theme === 'dark' ? '#DE3243' : '#FF4F64'"
          />
          <NuxtPage />
        </div>

        <StickyBottomBanner />
      </main>

      <!-- End of what is in viewport -->
    </div>

    <footer class="bg-blue-100 dark:bg-gray-800 mt-auto">
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
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <FingerPrintIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.what_we_collect") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://simpleanalytics.com/no-tracking"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <EyeSlashIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.we_dont_track_you") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://simpleanalytics.com/privacy-policy"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <ScaleIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.privacy_policy") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://simpleanalytics.com/cookie-statement"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <BookOpenIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
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
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <NewspaperIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
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
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <LifebuoyIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.documentation") }}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://community.simpleanalytics.com/"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <UserGroupIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.community") }}</span>
                  </a>
                </li>
                <li>
                  <NuxtLink
                    :to="localePath({ name: 'blog' })"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <BookOpenIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.blog") }}</span>
                  </NuxtLink>
                </li>
                <!--
                <li>
                  <a
                    href="https://simpleanalytics.com/roadmap"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <MapPinIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.roadmap") }}</span>
                  </a>
                </li>
                -->
                <li>
                  <NuxtLink
                    :to="localePath({ name: 'pricing' })"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <CreditCardIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.pricing") }}</span>
                  </NuxtLink>
                </li>
                <li>
                  <a
                    href="https://status.simpleanalytics.com/"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <ClipboardDocumentCheckIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.status") }}</span>
                  </a>
                </li>
                <li>
                  <NuxtLink
                    :to="localePath({ name: 'resources' })"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <BuildingLibraryIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.resources") }}</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="localePath({ name: 'guides' })"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <CursorArrowRippleIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.guides") }}</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="localePath({ name: 'case-studies' })"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <BriefcaseIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.case_studies") }}</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="localePath({ name: 'utm-builder' })"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <LinkIcon
                      class="inline h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>{{ $t("home.footer.utm_builder") }}</span>
                  </NuxtLink>
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
                  <NuxtLink
                    :to="
                      localePath({
                        name: 'blog-slug',
                        params: {
                          slug: 'why-simple-analytics-is-a-great-alternative-to-google-analytics',
                        },
                      })
                    "
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <GoogleAnalyticsIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>Google Analytics</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="
                      localePath({
                        name: 'blog-slug',
                        params: {
                          slug: 'why-simple-analytics-is-a-great-alternative-to-matomo',
                        },
                      })
                    "
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <MatomoIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>Matomo</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="
                      localePath({
                        name: 'blog-slug',
                        params: {
                          slug: 'why-simple-analytics-is-a-great-alternative-to-plausible',
                        },
                      })
                    "
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <PlausibleIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>Plausible</span>
                  </NuxtLink>
                </li>
                <li v-if="false">
                  <NuxtLink
                    to="#!"
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <FathomIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>Fathom</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="
                      localePath({
                        name: 'blog-slug',
                        params: {
                          slug: 'why-simple-analytics-is-a-great-alternative-to-cloudflare-web-analytics',
                        },
                      })
                    "
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded hover:text-red-500 group"
                  >
                    <CloudflareIcon
                      class="inline stroke-2 h-4 mr-2 stroke-gray-700 dark:stroke-gray-400 hover:group-hover:stroke-red-500 dark:hover:group-hover:stroke-gray-400"
                    />
                    <span>Cloudflare</span>
                  </NuxtLink>
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
                      href='/blog'>`,
                    `</a>`,
                  ])
                "
              ></p>
              <ul class="list-none flex flex-col space-y-2 -mb-2.5 mt-0" v-else>
                <li
                  v-for="(post, index) in recentPosts.slice(0, 3)"
                  :key="post.path"
                >
                  <NuxtLink
                    :to="
                      localePath({
                        name: 'blog-slug',
                        params: { slug: post.slug },
                      })
                    "
                    class="text-gray-800 dark:text-gray-400 py-2 px-3 items-center dark:hover:bg-gray-600 dark:hover:text-gray-300 rounded-md block group text-left"
                  >
                    <span
                      v-if="labelAgo($t, post.publishedAt)"
                      class="inline-block text-sm bg-red-500 dark:bg-red-600 px-1 text-white rounded-md align-text-top mr-1"
                      >{{ labelAgo($t, post.publishedAt) }}</span
                    >
                    <span
                      class="hover:group-hover:text-red-500 dark:hover:group-hover:text-gray-300"
                    >
                      {{ post.title?.split(" ").slice(0, -1).join(" ") }}
                      <span class="whitespace-nowrap">
                        {{ post.title?.split(" ").pop() }}
                        <Arrow
                          class="ml-0 fill-gray-800 hover:group-hover:fill-red-500 dark:fill-gray-400 dark:hover:group-hover:fill-gray-300"
                        />
                      </span>
                    </span>
                    <img
                      v-if="index === 0 && post.cover?.small"
                      class="rounded-lg shadow-md mt-1 mb-1 dark:brightness-90"
                      :src="post.cover.small"
                      :alt="post.cover.alt"
                      loading="lazy"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div
              class="lg:col-span-3 md:col-span-2 text-center flex items-center justify-center lg:justify-start"
            >
              <p class="mt-auto inline-flex items-center">
                <SimpleAnalyticsIcon class="h-5 w-auto sm:h-5 inline mr-2" />
                <span class="mt-0.5"
                  >Simple Analytics B.V.<span class="ml-3 mr-0">&middot;</span
                  ><a
                    class="text-gray-600 dark:text-gray-500 py-2 px-3 hover:text-red-500 dark:hover:text-gray-300 italic"
                    href="https://simpleanalytics.com/contact#details"
                  >
                    {{ $t("home.footer.company_details") }}</a
                  ></span
                >

                <ClientOnly>
                  <span class="mx-2">&middot;</span>
                  <MoonSun class="ml-1" />
                </ClientOnly>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  provideUseId,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import {
  Bars3Icon,
  XMarkIcon,
  CommandLineIcon,
  ScaleIcon,
  LifebuoyIcon,
  FingerPrintIcon,
  EyeSlashIcon,
  CreditCardIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  NewspaperIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  LinkIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CursorArrowRippleIcon,
} from "@heroicons/vue/24/outline";

import MenuLink from "./components/MenuLink.vue";
import ExternalLink from "./components/ExternalLink.vue";
import SimpleAnalyticsIcon from "./components/images/SimpleAnalyticsIcon.vue";

import CloudflareIcon from "./components/icons/Cloudflare.vue";
import FathomIcon from "./components/icons/Fathom.vue";
import GoogleAnalyticsIcon from "./components/icons/GoogleAnalytics.vue";
import MatomoIcon from "./components/icons/Matomo.vue";
import PlausibleIcon from "./components/icons/Plausible.vue";

import MoonSun from "./components/MoonSun.vue";

import { labelAgo } from "./utils/blog";

const route = useRoute();
const config = useRuntimeConfig();
const { BASE_URL, MAIN_URL, NODE_ENV /*, CDN_URL*/ } = config.public;

// Fix for hydration errors based on wrong IDs
// See https://github.com/tailwindlabs/headlessui/issues/2913
provideUseId(() => useId());

const localePath = useLocalePath();

const i18n = useI18n();
const { locale, locales, getBrowserLocale, setLocale } = i18n;

const switchTo = computed(() => {
  const browserLocale = getBrowserLocale();
  const found = locales.value.find(({ code }) => code === browserLocale);
  const code = found?.code;
  return code !== locale.value ? code : null;
});

const localeHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const resources = [
  {
    name: "nav.resources_dropdown.blog.title",
    description: "nav.resources_dropdown.blog.description",
    href: "/blog",
    icon: NewspaperIcon,
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
    icon: CommandLineIcon,
  },
  {
    name: "nav.resources_dropdown.glossary.title",
    description: "nav.resources_dropdown.glossary.description",
    to: "glossary",
    icon: AcademicCapIcon,
  },
  {
    name: "nav.resources_dropdown.ga_countries.title",
    description: "nav.resources_dropdown.ga_countries.description",
    to: "google-analytics-countries",
    icon: GoogleAnalyticsIcon,
  },
];

const defaultDescription =
  "Simple Analytics is the privacy-first Google Analytics alternative that is 100% GDPR compliant.";

const navigation = [
  { translation: "nav.pricing", to: "pricing" },
  launchedAi({ NODE_ENV }) ? { translation: "nav.ai", to: "ai" } : null,
  {
    translation: "nav.resources",
    popover: true,
    mobile: {
      translation: "nav.blog",
      to: "blog",
    },
  },
  { translation: "nav.docs", href: "https://docs.simpleanalytics.com" },
  { translation: "nav.contact", href: "https://simpleanalytics.com/contact" },
].filter(Boolean);

const scripts = [];

if (process.server) {
  scripts.push({
    src: "https://scripts.simpleanalyticscdn.com/auto-events.js",
    async: true,
  });
}

const link = [
  {
    rel: "canonical",
    href: BASE_URL + route.path,
  },
  {
    rel: "alternate",
    type: "application/atom+xml",
    title: "Blog of Simple Analytics",
    href: BASE_URL + "/feed.xml",
  },
];

const head = {
  title: () =>
    route.meta.title?.includes("Simple Analytics")
      ? route.meta.title
      : route.meta.title
        ? `${route.meta.title} - Simple Analytics`
        : "Simple Analytics",
  link,
  script: scripts,
  meta: () => [
    {
      name: "description",
      content: route.meta.description || defaultDescription,
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  bodyAttrs: {
    class: "min-h-full",
  },
};

useHead(head);

const ogImage =
  "https://assets.simpleanalytics.com/social-media/dark-chart.png";

useSeoMeta({
  ogTitle: head.title,
  ogDescription: () => route.meta.description || defaultDescription,
  ogImage,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage: ogImage,
});

const theme = useTheme();

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

const { articles: recentPosts, pending } = await useArticle({
  routeName: "blog-slug",
  articleType: "blog",
  keys: ["coverImageWithText", "coverImageWithoutText"],
  limit: 3,
  useLocale: true,
});

onMounted(() => {
  const title = document.title;
  window.addEventListener("blur", () => {
    document.title = "We miss you... - " + title;
  });
  window.addEventListener("focus", () => {
    document.title = title;
  });
});
</script>
