<template>
  <div class="relative mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
    <div
      class="relative lg:flex lg:items-center"
      :class="reverse ? 'lg:flex-row-reverse' : ''"
    >
      <div class="hidden lg:block lg:flex-shrink-0">
        <img
          v-if="image"
          :src="image"
          :class="'h-44 w-44 xl:h-50 xl:w-50 rounded-full ' + imageBackground"
          alt=""
          loading="lazy"
        />
        <component
          v-else-if="logo"
          :is="logo"
          class="h-44 w-44 xl:h-50 xl:w-50"
          :class="logoclass"
        />
      </div>

      <div class="relative" :class="reverse ? 'lg:mr-10' : 'lg:ml-10'">
        <svg
          class="absolute top-0 left-0 fill-red-100 dark:fill-gray-700 transform -translate-x-4 -translate-y-10 h-24 w-24"
          :class="iconclass"
          viewBox="0 0 144 144"
          aria-hidden="true"
        >
          <path
            stroke-width="2"
            d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
          />
        </svg>
        <blockquote class="relative">
          <div class="text-2xl leading-9 font-normal">
            <div
              class="italic"
              :class="
                quote?.length > 300
                  ? 'text-lg'
                  : quote?.length > 100
                  ? 'text-xl'
                  : 'text-2xl'
              "
            >
              <slot
                ><p class="leading-relaxed">"{{ quote }}"</p></slot
              >
            </div>
          </div>
          <footer class="mt-8">
            <div class="flex justify-center">
              <div class="flex-shrink-0 lg:hidden">
                <img
                  v-if="image"
                  :src="image"
                  :class="'h-12 w-12 rounded-full ' + imageBackground"
                  :alt="`Image of ${title}`"
                  loading="lazy"
                />
                <component
                  v-else-if="logo"
                  :is="logo"
                  class="h-12 w-12"
                  :class="logoclass"
                />
              </div>
              <div
                class="flex flex-col items-start lg:items-center justify-center ml-4 sm:ml-2 lg:mx-a"
              >
                <div
                  class="text-base text-left sm:text-center font-medium text-blue-800"
                >
                  {{ title }}
                </div>
                <a
                  v-if="subtitlelink"
                  class="text-base text-left sm:text-center font-normal text-blue-500 underline"
                  :href="subtitlelink"
                  target="_blank"
                >
                  {{ subtitle
                  }}<ArrowSmRightIcon class="inline ml-1 w-4 fill-blue-500" />
                </a>
                <div
                  v-else
                  class="text-base text-left sm:text-center font-normal text-blue-500"
                >
                  {{ subtitle }}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowSmRightIcon } from "@heroicons/vue/solid";

const props = defineProps([
  "logo",
  "image",
  "quote",
  "title",
  "subtitle",
  "subtitlelink",
  "reverse",
  "iconclass",
  "logoclass",
]);

const imageBackground = props.iconclass
  ? props.iconclass?.replace(/fill/g, "bg")
  : "bg-red-100 dark:bg-gray-700";
</script>
