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
      class="z-50 sticky transition-all duration-150 left-0 overflow-hidden rounded-lg shadow-lg mx-6 md:w-80"
      :class="showBottomBanner ? 'bottom-20' : 'bottom-6'"
      v-if="show"
    >
      <a @click="hide" class="absolute top-0 right-0 p-4 group">
        <XMarkIcon
          class="h-8 w-8 stroke-gray-100 group-hover:stroke-white dark:stroke-gray-400 dark:group-hover:stroke-gray-200"
          aria-hidden="true"
        />
      </a>
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
import { useBottomBanner } from "~/composables/booleans";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["name"]);

const hidePopupCookie = useCookie(props.name, {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});

const show = ref(process.env.NODE_ENV === "development");
const showBottomBanner = useBottomBanner();

const start = Date.now();

const onmouseleave = (event) => {
  const duration = Date.now() - start;
  const timerDone = duration > 20 * 1000;
  if (timerDone && event.clientY < 10 && event.clientX > 150) show.value = true;
};

if (import.meta.client && !hidePopupCookie.value) {
  if (window.innerWidth >= 1024) {
    document.body.addEventListener("mouseleave", onmouseleave, false);
  } else {
    setTimeout(() => (show.value = true), 60 * 1000);
  }
}

const hide = () => {
  show.value = false;
  hidePopupCookie.value = true;

  if (import.meta.client)
    document.body.removeEventListener("mouseleave", onmouseleave, false);
};
</script>
