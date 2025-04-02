<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <div
      class="z-50 sticky bottom-0 left-0 right-0 overflow-hidden w-full bg-gradient-to-b from-red-400 to-red-500 dark:from-red-600 dark:to-red-600 p-2"
      v-if="showBottomBanner"
    >
      <p
        class="text-white dark:text-red-50 text-sm md:text-base text-left md:text-center mr-10"
      >
        {{ $t("banners.import_ga.cta") }}
        <a
          class="!hidden sm:!inline-block ml-1 button white"
          @click="
            navigateToWelcome($router, 'click_bottom_banner', {
              type: 'ga_import',
              app: 'marketing_site',
            })
          "
          >{{ $t("banners.import_ga.button") }}</a
        >
        <a
          class="!inline-block sm:!hidden ml-1 button tiny white"
          @click="
            navigateToWelcome($router, 'click_bottom_banner', {
              type: 'ga_import',
              app: 'marketing_site',
            })
          "
          >{{ $t("banners.import_ga.button") }}</a
        >
      </p>
      <a
        @click="hide"
        class="absolute top-0 bottom-0 right-0 flex items-center group"
      >
        <XMarkIcon
          class="h-12 w-12 p-2 mr-2 stroke-red-100 group-hover:stroke-white dark:stroke-red-100 dark:group-hover:stroke-gray-600"
          aria-hidden="true"
        />
      </a>
    </div>
  </transition>
</template>

<script setup>
import { useBottomBanner } from "~/composables/booleans";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const i18n = useI18n();
const { t } = i18n;

const router = useRouter();
const showBottomBanner = useBottomBanner();

const hideBottomBannerCookie = useCookie("hide_bottom_banner", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});

const hide = () => {
  showBottomBanner.value = false;
  hideBottomBannerCookie.value = true;
};

if (!hideBottomBannerCookie.value && import.meta.client) {
  const handleScroll = () => {
    if (hideBottomBannerCookie.value) return;
    const scrollPosition = window.scrollY;
    showBottomBanner.value = scrollPosition > 100;
  };

  watch(hideBottomBannerCookie, (value) => {
    if (value) window.removeEventListener("scroll", handleScroll);
  });

  window.addEventListener("scroll", handleScroll);
}
</script>
