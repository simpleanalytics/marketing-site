<template>
  <div>
    <div class="max-w-xl px-6 mx-auto mt-8">
      <!-- UTM generator form -->
      <form @submit.prevent="generateUrl">
        <div class="mb-4">
          <label for="baseUrl" class="block text-sm font-medium mb-2">
            {{ $t("utm_generator_form.base_url") }}
          </label>
          <input
            v-model="baseUrl"
            type="text"
            id="baseUrl"
            class="block w-full dark:border-none border border-gray-300 dark:text-gray-200 text-gray-700 rounded py-2 px-3 dark:bg-gray-600"
            :placeholder="$t('utm_generator_form.base_url_placeholder')"
            required
          />
        </div>

        <div class="mb-4">
          <label for="utmSource" class="block text-sm font-medium mb-2">
            {{ $t("utm_generator_form.utm_source") }}
          </label>
          <input
            v-model="utmSource"
            type="text"
            id="utmSource"
            class="block w-full dark:border-none border border-gray-300 dark:text-gray-200 text-gray-700 rounded py-2 px-3 dark:bg-gray-600"
            :placeholder="$t('utm_generator_form.utm_source_placeholder')"
          />
        </div>

        <div class="mb-4">
          <label for="utmMedium" class="block text-sm font-medium mb-2">
            {{ $t("utm_generator_form.utm_medium") }}
          </label>
          <input
            v-model="utmMedium"
            type="text"
            id="utmMedium"
            class="block w-full dark:border-none border border-gray-300 dark:text-gray-200 text-gray-700 rounded py-2 px-3 dark:bg-gray-600"
            :placeholder="$t(`utm_generator_form.utm_medium_placeholder.${type}`)"
          />
        </div>

        <div class="mb-4">
          <label for="utmContent" class="block text-sm font-medium mb-2">
            {{ $t("utm_generator_form.utm_content") }}
          </label>
          <input
            v-model="utmContent"
            type="text"
            id="utmContent"
            class="block w-full dark:border-none border border-gray-300 dark:text-gray-200 text-gray-700 rounded py-2 px-3 dark:bg-gray-600"
            :placeholder="$t('utm_generator_form.utm_content_placeholder')"
          />
        </div>

        <div class="mb-4">
          <label for="utmCampaign" class="block text-sm font-medium mb-2">
            {{ $t("utm_generator_form.utm_campaign") }}
          </label>
          <input
            v-model="utmCampaign"
            type="text"
            id="utmCampaign"
            class="block w-full dark:border-none border border-gray-300 dark:text-gray-200 text-gray-700 rounded py-2 px-3 dark:bg-gray-600"
            :placeholder="$t('utm_generator_form.utm_campaign_placeholder')"
          />
        </div>

        <div class="mb-4">
          <label for="utmTerm" class="block text-sm font-medium mb-2">
            {{ $t("utm_generator_form.utm_term") }}
          </label>
          <input
            v-model="utmTerm"
            type="text"
            id="utmTerm"
            class="block w-full dark:border-none border border-gray-300 dark:text-gray-200 text-gray-700 rounded py-2 px-3 dark:bg-gray-600"
            :placeholder="$t('utm_generator_form.utm_term_placeholder')"
          />
        </div>

        <button type="submit" class="button">
          {{ $t("utm_generator_form.generate_url") }}
        </button>
      </form>

      <div v-if="generatedUrl" class="mt-4">
        <label for="generatedUrlInput" class="block text-sm font-medium mb-2">
          {{ $t("utm_generator_form.generated_url") }}
        </label>
        <div class="flex items-center space-x-2">
          <input
            v-model="generatedUrl"
            type="text"
            id="generatedUrlInput"
            class="flex-grow dark:border-none border border-gray-300 dark:text-gray-200 text-gray-700 rounded py-2 px-3 dark:bg-gray-600"
            readonly
          />
          <button
            @click="copy"
            :class="[
              'button',
              isCopied ? '!border-green-500 !text-green-500' : '',
            ]"
          >
            {{
              isCopied ? $t("utm_generator_form.copied") : $t("utm_generator_form.copy")
            }}
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-2xl px-6 mx-auto mt-8">
      <p class="mb-4 leading-loose text-md text-center">
        {{ $t("utm_generator_form.disclaimer") }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const { type } = defineProps(["type"]);

const baseUrl = ref("");
const utmSource = ref("");
const utmMedium = ref("");
const utmCampaign = ref("");
const utmContent = ref("");
const utmTerm = ref("");
const generatedUrl = ref("");
const isCopied = ref(false);

function saveUrlToLocalStorage() {
  localStorage.setItem("savedUrl", generatedUrl.value);
}

function loadUrlFromLocalStorage() {
  const savedUrl = localStorage.getItem("savedUrl");
  if (savedUrl) {
    const url = new URL(savedUrl);
    baseUrl.value = url.origin + url.pathname;
    utmSource.value = url.searchParams.get("utm_source") || "";
    utmMedium.value = url.searchParams.get("utm_medium") || "";
    utmCampaign.value = url.searchParams.get("utm_campaign") || "";
    utmContent.value = url.searchParams.get("utm_content") || "";
    utmTerm.value = url.searchParams.get("utm_term") || "";
  }
}

function generateUrl() {
  // Make sure it starts with https:// or http://
  const urlRegex = /^(https?:\/\/)/;
  if (!urlRegex.test(baseUrl.value)) {
    baseUrl.value = "https://" + baseUrl.value;
  }
  const url = new URL(baseUrl.value);
  if (utmSource.value) url.searchParams.set("utm_source", utmSource.value);
  if (utmMedium.value) url.searchParams.set("utm_medium", utmMedium.value);
  if (utmCampaign.value)
    url.searchParams.set("utm_campaign", utmCampaign.value);
  if (utmContent.value) url.searchParams.set("utm_content", utmContent.value);
  if (utmTerm.value) url.searchParams.set("utm_term", utmTerm.value);
  generatedUrl.value = url.href;
  saveUrlToLocalStorage();
}

function copy() {
  const copyText = document.querySelector("#generatedUrlInput");
  copyText.select();
  document.execCommand("copy");
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
}

onMounted(() => {
  loadUrlFromLocalStorage();
});
</script>
