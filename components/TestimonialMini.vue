<template>
  <div
    class="relative bg-white dark:bg-gray-800 rounded-lg mx-auto pt-6 pb-6 px-4 sm:px-6 lg:px-8 lg:pt-6"
  >
    <div
      class="relative lg:flex lg:items-center"
      :class="reverse ? 'lg:flex-row-reverse' : ''"
    >
      <div class="hidden lg:block lg:flex-shrink-0">
        <img
          v-if="image"
          :src="image"
          :class="'h-20 w-20 xl:h-50 xl:w-50 rounded-full ' + imageBackground"
          :alt="`Image of ${title}`"
          loading="lazy"
        />
        <component
          v-else-if="logo"
          :is="logo"
          class="h-20 w-20 xl:h-50 xl:w-50"
          :class="logoclass"
        />
      </div>

      <div class="relative" :class="reverse ? 'lg:mr-6' : 'lg:ml-6'">
        <svg
          class="absolute top-0 left-0 fill-blue-200 dark:fill-gray-700 transform -translate-x-4 -translate-y-4 h-10 w-10"
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
                  ? 'text-sm'
                  : quote?.length > 100
                    ? 'text-base'
                    : 'text-base'
              "
            >
              <p>
                <slot
                  ><span
                    class="leading-relaxed"
                    v-html="`&#8220;${quote}&#8221;`"
                  ></span
                ></slot>
                <span
                  class="text-base text-left sm:text-center font-medium text-blue-800"
                >
                  - {{ title }}

                  <a
                    v-if="subtitlelink"
                    class="text-base text-left sm:text-center font-normal text-blue-500 underline group"
                    :href="subtitlelink"
                    target="_blank"
                  >
                    {{ subtitle
                    }}<ArrowRightIcon
                      class="inline ml-1 w-4 fill-blue-500 transition-transform group-hover:rotate-0 -rotate-45"
                    />
                  </a>
                  <span v-else>
                    {{ subtitle }}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/solid";

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
