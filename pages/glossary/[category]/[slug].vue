<template>
  <div>
    <div class="max-w-5xl pt-4 px-4 mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-2xl sm:text-2xl md:text-3xl text-gray-500">
          <NuxtLink
            :to="
              localePath({
                name: 'glossary-category',
                params: { category: $route.params.category },
              })
            "
            data-no-style
            >{{ $t(category.titleTranslation) }}
            {{ $t("glossary.title") }}
          </NuxtLink>
        </h2>
        <h1
          class="mt-4 text-4xl font-medium sm:text-5xl md:text-6xl md:leading-normal sm:leading-normal"
        >
          {{ article.title }}
        </h1>
      </div>
    </div>

    <div class="max-w-3xl pb-4 px-4 mx-auto">
      <HtmlBlock :html="article.contentHtml" />
    </div>

    <SubscribePopup />
  </div>
</template>

<script setup>
import transformer from "@/utils/transformer";
import { categories } from "@/data/glossary";
import SubscribePopup from "@/components/SubscribePopup.vue";
import HtmlBlock from "@/components/HtmlBlock.vue";

const route = useRoute();
const { locale } = useI18n();

const { article } = await useArticle({
  routeName: "glossary-category-slug",
  slug: route.params.slug,
});

const category = computed(() => {
  const category = categories.find(
    (category) => category.category === route.params.category
  );
  return category || {};
});
</script>
