<template>
  
</template>

<script>
import { h } from "vue";

export default {
  props: {
    channel: {
      type: String,
      required: true
    }
  },
  render() {
    return h({
      template: `
      <div class="mx-auto px-6 max-w-3xl">
        <h1 class="font-medium p-4 lg:p-8 text-center text-4xl sm:text-5xl md:text-6xl">
          ${$t("utm_generator.facebook.title")}.
        </h1>

        <p class="mb-4 leading-loose text-md text-center">
          {{ $t("utm_generator.facebook.intro") }}
        </p>
      </div>
      `,
    });
  },
};
</script>
