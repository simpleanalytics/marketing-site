<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mx-4">
      <h1
        class="text-4xl font-medium sm:text-5xl md:text-6xl md:leading-snug leading-relaxed"
      >
        {{ $t(`utm_builder.sections.${type}.intro_title`) }}
      </h1>
      <p
        class="mt-8 text-md leading-loose text-left"
        v-html="$t(`utm_builder.sections.${type}.intro_text`)"
      ></p>
    </div>

    <UtmGeneratorForm :type="type" />

    <Article
      :name="`utm-builder-${slug}`"
      :slug="articleSlug"
      :articleType="articleType"
      :drafts="false"
      :hideAuthor="true"
      :hideTitle="true"
      :hideSeoMeta="true"
    />
  </div>
</template>

<script setup>
import UtmGeneratorForm from "@/components/UtmGeneratorForm.vue";
import Article from "@/components/Article.vue";
import { types } from "@/data/utmBuilders.js";

const articleType = "utm-builder";

const route = useRoute();
let { slug } = route.params;

const articleSlug = computed(() => {
  const article = types.find((v) => v?.type === slug.toLowerCase());
  return article?.articleSlug;
});

const type = computed(() => {
  if (route.params.slug === "google-spreadsheet") return "google_spreadsheet";
  else return route.params.slug;
});

slug = `${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;

useHead({
  title: `UTM Builder for ${slug}`,
  description: `Simple Analytics UTM builder for ${slug}`,
});
</script>
