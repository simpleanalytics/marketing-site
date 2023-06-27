<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mx-4">
      <h1
        class="text-4xl font-medium sm:text-5xl md:text-6xl md:leading-snug leading-relaxed"
      >
        UTM generator for {{ $t(`utm_builder.sections.${type}.title`) }}
      </h1>
      <p
        class="mt-8 text-md"
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

const articleType = "utm-builder";

const route = useRoute();
let { slug, articleSlug } = route.params;

const type = computed(() => {
  return route.params.slug;
});

slug = `${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;

useHead({
  title: `UTM Builder for ${slug}`,
  description: `Simple Analytics UTM builder for ${slug}`,
});
</script>
