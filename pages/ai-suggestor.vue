<template>
  <div>
    <div class="max-w-7xl px-4 mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 h-full">
          <div
            class="text-gray-700 dark:text-gray-300 font-semibold text-lg mb-4"
          >
            {{ $t("ai_suggestor.title") }}
          </div>

          <div class="text-gray-500 text-md font-medium my-8">
            {{ $t("ai_suggestor.sub_title") }}
          </div>
          <div class="w-1/4 h-px bg-black dark:bg-white rounded-full"></div>
          <div class="my-6">
            <h3>{{ $t("ai_suggestor.help_text") }}</h3>
            <div class="my-8">
              <div
                class="text-md text-gray-500 dark:text-gray-400 font-medium my-2 w-5/6"
              >
                {{ $t("ai_suggestor.app_input.label") }}
              </div>
              <input
                type="text"
                :placeholder="$t('ai_suggestor.app_input.placeholder')"
                class="rounded-md w-5/6"
                v-model="applicationDetails"
              />
            </div>
            <div class="my-8">
              <div
                class="text-md text-gray-500 dark:text-gray-400 font-medium my-2 w-5/6"
              >
                {{ $t("ai_suggestor.platform_input.label") }}
              </div>
              <input
                type="text"
                :placeholder="$t('ai_suggestor.platform_input.placeholder')"
                v-model="platformDetails"
                class="rounded-md w-5/6"
              />
            </div>
          </div>
          <div class="mt-16">
            <button class="button large primary w-5/6">
              {{ $t("ai_suggestor.generateAction") }}
            </button>
          </div>
        </div>
        <div
          class="w-full md:w-1/2 mt-8 md:mt-0 h-[40.25rem] bg-gradient-to-b dark:bg-gray-800 from-[#64d8f52b] to-[#64d8f500]"
        >
          <div
            class="h-[35rem] overflow-auto rounded-sm w-auto mx-16 my-10 bg-white dark:bg-gray-800 px-4"
          >
            <HtmlBlock :html="html" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HtmlBlock from "@/components/HtmlBlock.vue";

const applicationDetails = useState("applicationDetails");
const platformDetails = useState("platformDetails");

const html = ``;
</script>
