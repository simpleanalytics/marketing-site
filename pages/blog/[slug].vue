<template>
  <div>
    <div class="max-w-5xl mx-auto text-center">
      <h1
        class="text-4xl md:leading-normal font-medium sm:text-5xl md:text-6xl mx-4 lg:mx-10"
      >
        {{ post?.title }}
      </h1>

      <p class="mt-8">{{ new Date(post?.date) }}</p>
    </div>

    <div
      class="max-w-3xl px-6 mx-auto mt-8 prose prose-lg prose-ul:list-disc prose-img:rounded-lg prose-headings:text-gray-600 prose-headings:font-semibold dark:prose-strong:text-gray-500"
      v-html="post?.article"
    ></div>
  </div>
</template>

<script setup>
const route = useRoute();

const { pending, data: post } = useLazyFetch(
  "/api/blog-post?slug=" + route.params.slug
);
</script>
