<template>
  <Listbox as="div" v-model="selectedLocale">
    <div class="relative z-50">
      <ListboxButton
        class="relative font-medium hover-hover:hover:text-gray-900 dark:hover-hover:hover:text-gray-500 pl-1 pr-6 text-left cursor-pointer"
      >
        <span class="flex items-center">
          <EuropeanFlag class="flex-shrink-0 w-8 rounded" />
        </span>
        <span
          class="ml-2 absolute inset-y-0 right-0 flex items-center pointer-events-none"
        >
          <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-50 mt-1 w-full min-w-max bg-white dark:bg-gray-700 shadow-lg max-h-56 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="availableLocale in availableLocales"
            :key="availableLocale.code"
            :value="availableLocale"
          >
            <li
              class="cursor-pointer select-none relative py-2 pl-3 pr-9 dark:hover-hover:hover:text-white"
            >
              <div class="flex items-center">
                <img
                  :src="availableLocale.flag"
                  alt=""
                  class="flex-shrink-0 h-6 w-6"
                />
                <span class="font-normal ml-3 block truncate">
                  {{ availableLocale.name }}
                </span>
              </div>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";
import EuropeanFlag from "./logos/EuropeanFlag.vue";

const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value
    .filter((i) => i.code !== locale.value)
    .map((language) => {
      return {
        ...language,
        flag: `https://assets.simpleanalytics.com/images/flags/${language.flag.toUpperCase()}.svg`,
      };
    });
});

const selectedLocale = computed({
  get: () => locale.value,
  set: ({ code }) => setLocale(code),
});
</script>
