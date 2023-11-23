<template>
  <div>
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
    </div>

    <Article
      name="utm-builder-slug"
      :nonUniqueSlug="articleSlug"
      articleType="utm-builder"
      :keys="['reviews']"
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

const route = useRoute();
const { slug } = route.params;

const articleSlug = computed(() => {
  const article = types.find(({ type }) => type === slug.toLowerCase());
  return article?.articleSlug;
});

const type = computed(() => {
  if (route.params.slug === "google-spreadsheet") return "google_spreadsheet";
  else return route.params.slug;
});

const name = `${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;

useHead({
  title: `UTM Builder for ${name}`,
  description: `Simple Analytics UTM builder for ${name}`,
});
</script>
