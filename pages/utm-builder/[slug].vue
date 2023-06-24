<template>
  <div class="max-w-3xl px-4 mx-auto">
    <div class="text-center mx-4">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        UTM generator for {{ $t(`utm_builder.sections.${type}.title`) }}
      </h1>
      <p class="mt-8 text-md" v-html="$t(`utm_builder.sections.${type}.intro_text`)"></p>
    </div>

    <UtmGeneratorForm :type="slug" />
  </div>
</template>

<script setup>
import GoogleLogo from "@/components/logos/Google.vue";
import FacebookLogo from "@/components/logos/Facebook.vue";
import GoogleSheetLogo from "@/components/logos/GoogleSheet.vue";
import SpreadSheetLogo from "@/components/logos/SpreadSheet.vue";
import TikTokLogo from "@/components/logos/TikTop.vue";
import TwitterLogo from "@/components/logos/Twitter.vue";
import Arrow from "@/components/Arrow.vue";

import UtmGeneratorForm from "@/components/UtmGeneratorForm.vue";

const route = useRoute();
let { slug } = route.params;

const type = computed(() => {
  return route.params.slug;
});

slug = `${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;

useHead({
  title: `UTM Builder for ${slug}`,
  description: `Simple Analytics UTM builder for ${slug}`,
});
</script>
