<template>
  <div class="relative mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
    <div class="relative lg:flex lg:items-center">
      <div class="hidden lg:block lg:flex-shrink-0">
        <img
          v-if="image"
          :src="image"
          class="h-44 w-44 xl:h-60 xl:w-60 rounded-full"
          alt=""
        />
        <component
          v-else-if="logo"
          :is="logo"
          class="h-44 w-44 xl:h-60 xl:w-60"
        />
      </div>

      <div class="relative lg:ml-10">
        <svg
          class="absolute top-0 left-0 stroke-blue-300 transform -translate-x-4 -translate-y-20 h-36 w-36 opacity-50"
          fill="none"
          viewBox="0 0 144 144"
          aria-hidden="true"
        >
          <path
            stroke-width="2"
            d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
          />
        </svg>
        <blockquote class="relative">
          <div class="text-2xl leading-9 font-normal text-gray-600">
            <p>
              <slot></slot>
            </p>
          </div>
          <footer class="mt-8">
            <div class="flex">
              <div class="flex-shrink-0 lg:hidden">
                <img
                  v-if="image"
                  :src="image"
                  class="h-12 w-12 rounded-full"
                  alt=""
                />
                <component v-else-if="logo" :is="logo" class="h-12 w-12" />
              </div>
              <div class="ml-4 lg:ml-0">
                <div class="text-base text-left font-medium text-gray-600">
                  {{ title }}
                </div>
                <div class="text-base text-left font-normal text-gray-400">
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
const props = defineProps(["logo", "image", "title", "subtitle"]);
</script>
