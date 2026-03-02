<template>
  <div class="mb-20">
    <div class="text-center mx-4">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">Press.</h1>
      <p class="mt-8 text-lg">
        Interviews with Simple Analytics' founders in podcasts, and mentions in
        other media.
      </p>
    </div>

    <div class="max-w-6xl px-6 mx-auto mt-12">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <li v-for="press in pressMentions" :key="press.slug" class="mb-8">
          <NuxtLink
            :to="`/press/${press.slug}`"
            class="block relative overflow-hidden rounded-lg shadow-md"
          >
            <div
              class="w-full aspect-[16/9] bg-cover bg-center bg-gray-900"
              :style="{ backgroundImage: `url(${press.image})` }"
            ></div>
            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4"
            >
              <h3 class="text-lg font-semibold text-white">
                {{ press.name }} - {{ format(press.date) }}
              </h3>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { pressMentions } from "~/data/press";

const format = (date) => {
  if (!date) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  }).format(new Date(date));
};

definePageMeta({
  title: "Press mentions of Simple Analytics",
  description: "See and read where Simple Analytics is mentioned by the press.",
});
</script>
