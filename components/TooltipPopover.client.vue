<template>
  <Popover class="relative" v-slot="{ open }">
    <PopoverButton
      class="gap-x-1 text-left outline-none rounded px-2 -mx-2 py-1 -my-1 hover:ring-1 dark:hover:ring-0 dark:hover:bg-gray-600 ring-gray-200"
      :class="{
        'bg-blue-100 dark:bg-gray-600 dark:hover:bg-gray-600 dark:ring-0 dark:focus:ring-0 ring-1 focus:ring-1 ':
          open,
      }"
    >
      <InformationCircleIcon
        class="h-5 w-5 inline-block mr-1 -mt-[2px] stroke-current"
        aria-hidden="true"
      />
      <span>{{ text }}</span>
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
        class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4"
      >
        <div
          class="w-60 text-center max-w-full bg-blue-100 dark:bg-gray-600 shrink rounded-lg py-3 px-2 text-sm border border-gray-200 dark:border-transparent dark:shadow-md"
        >
          <slot></slot>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  CheckIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/vue/20/solid";

import {
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps(["text"]);

const open = ref(false);
// const popoverbutton = ref();

// onMounted(() => {
//   const hasMouse = matchMedia("(hover: hover)").matches;

//   if (hasMouse) {
//     popoverbutton.value?.addEventListener(
//       "mouseenter",
//       () => (open.value = true),
//     );
//     popoverbutton.value?.addEventListener(
//       "mouseleave",
//       () => (open.value = false),
//     );
//   }
// });
</script>
