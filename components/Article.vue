<template>
  <div>
    <div class="max-w-5xl pt-4 px-4 mx-auto">
      <div class="text-center mb-8">
        <slot name="pretitle"></slot>

        <slot name="title">
          <h1
            class="mt-4 text-4xl font-medium sm:text-5xl md:text-6xl md:leading-normal sm:leading-normal"
          >
            {{ article.title }}
          </h1>
        </slot>

        <p
          v-if="locale !== 'en' && article.automaticTranslated !== false"
          class="inline-block mt-6 px-4 py-2 rounded-lg bg-[#ffd9cb] dark:bg-[#592b1b]"
        >
          <template v-if="parts.length === 3">
            {{ parts[0] }}
            <NuxtLink
              class="dark:text-gray-300 text-gray-700 underline"
              :to="toEnglish"
            >
              {{ parts[1] }}
            </NuxtLink>
            {{ parts[2] }}
          </template>
          <template v-else>
            {{ $t("blog.automatic_translated_switch_to_english") }}
          </template>
        </p>
      </div>
    </div>

    <div class="max-w-3xl pb-4 px-4 mx-auto">
      <HtmlBlock :html="article.contentHtml" />
    </div>

    <SubscribePopup />
  </div>
</template>

<script setup>
const props = defineProps(["name"]);

import { categories } from "@/data/glossary";
import SubscribePopup from "@/components/SubscribePopup.vue";
import HtmlBlock from "@/components/HtmlBlock.vue";

const route = useRoute();
const { t, locale } = useI18n();
const localePath = useLocalePath();

const { article } = await useArticle({
  routeName: props.name,
  slug: route.params.slug,
});

const parts = t("blog.automatic_translated_switch_to_english", [
  "---",
  "---",
]).split("---");

const toEnglish = localePath({ name: props.name, params: route.params }, "en");
</script>
