<template>
  <Listbox as="div" v-model="$i18n.locale">
    <div class="relative">
      <ListboxButton
        class="relative font-medium text-gray-500 hover:text-gray-900 pl-1 pr-8 text-left cursor-default"
      >
        <span class="flex items-center">
          <img
            :src="selectLang($i18n.locale)?.flag"
            alt=""
            class="flex-shrink-0 h-6 w-6"
          />
          <!-- <span class="ml-3 block truncate">{{
            selectLang($i18n.locale)?.code
          }}</span> -->
        </span>
        <span
          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 w-full min-w-max bg-white shadow-lg max-h-56 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="lang in langs"
            :key="lang.code"
            :value="lang.code"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-red-500' : 'text-gray-900',
                'cursor-default select-none relative py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <img :src="lang.flag" alt="" class="flex-shrink-0 h-6 w-6" />
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                >
                  {{ lang.name }}
                </span>
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-red-500',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
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
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

import { useI18n } from "vue-i18n";
const { availableLocales } = useI18n();

const langs = availableLocales.map((locale) => {
  const countryCode = locale.startsWith("en") ? "US" : locale.toUpperCase();
  const name = locale.startsWith("en")
    ? "English"
    : locale === "nl"
    ? "Nederlands"
    : locale;

  return {
    code: locale,
    name: name,
    flag: `https://assets.simpleanalytics.com/images/flags/${countryCode}.svg`,
  };
});

const selectLang = (lang) => langs.filter(({ code }) => code === lang)?.[0];
</script>
