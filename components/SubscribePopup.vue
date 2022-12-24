<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <div
      class="z-10 sticky bottom-6 left-0 overflow-hidden rounded-lg shadow-lg mx-6 md:w-80"
      v-if="show"
    >
      <a @click="hide" class="absolute top-0 right-0 p-4 group">
        <XMarkIcon
          class="h-8 w-8 stroke-gray-100 group-hover:stroke-white dark:stroke-gray-400 dark:group-hover:stroke-gray-200"
          aria-hidden="true"
        />
      </a>
      <SubscribeForm />
    </div>
  </transition>
</template>

<script setup>
import SubscribeForm from "~/components/SubscribeForm.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const i18n = useI18n();
const { t } = i18n;

const route = useRoute();

const hidePopupCookie = useCookie("hide_subscribe_popup", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});

const show = ref(false);

const start = Date.now();

const onmouseleave = (event) => {
  const duration = Date.now() - start;
  const timerDone = duration > 20 * 1000;
  if (timerDone && event.clientY < 10 && event.clientX > 150) show.value = true;
};

if (process.client && !hidePopupCookie.value) {
  if (window.innerWidth >= 1024) {
    document.body.addEventListener("mouseleave", onmouseleave, false);
  } else {
    setTimeout(() => (show.value = true), 60 * 1000);
  }
}

const hide = () => {
  show.value = false;
  hidePopupCookie.value = true;

  if (process.client)
    document.body.removeEventListener("mouseleave", onmouseleave, false);
};
</script>
