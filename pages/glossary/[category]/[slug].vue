<template>
  <Article
    name="glossary-category-slug"
    :slug="route.params.slug"
    :articleType="route.params.category"
  >
    <template #pretitle>
      <h2 class="text-2xl sm:text-2xl md:text-3xl text-gray-500">
        <NuxtLink
          :to="
            localePath({
              name: 'glossary-category',
              params: { category: route.params.category },
            })
          "
          data-no-style
          >{{ $t(category.titleTranslation) }}
          {{ $t("glossary.title") }}
        </NuxtLink>
      </h2>
    </template>
  </Article>
</template>

<script setup>
import { categories } from "@/data/glossary";
import Article from "@/components/Article.vue";

const route = useRoute();
const localePath = useLocalePath();

const category = computed(() => {
  const category = categories.find(
    (category) => category.category === route.params.category
  );
  return category || {};
});
</script>
