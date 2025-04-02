<template>
  <div>
    <div class="text-center">
      <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
        {{ $t("pricing.title") }}.
      </h1>
    </div>

    <Pricing />

    <div class="max-w-5xl mx-auto px-6 mt-8">
      <h3
        class="text-2xl sm:text-4xl leading-normal sm:leading-normal mx-auto mt-2 mb-4 sm:mt-32 sm:mb-8 font-medium text-center"
      >
        {{ $t("pricing_faq.title") }}.
      </h3>

      <div class="max-w-3xl mx-auto">
        <FAQ />
      </div>

      <div class="py-12 text-center">
        <StartTrial />
      </div>
    </div>

    <EindePopup name="hide_exit_popup">
      <EindePopupPricing />
    </EindePopup>
  </div>
</template>

<script setup>
import Pricing from "../components/Pricing.vue";
import FAQ from "../components/FAQ.vue";
import EindePopup from "@/components/EindePopup.vue";
import EindePopupPricing from "@/components/EindePopupPricing.vue";

definePageMeta({
  title: "Pricing",
  description:
    "Simple Analytics pricing page consisting out of starter, business and enterprise offerings",
});

onMounted(() => {
  if (import.meta.client && window.sa_event) sa_event("visit_pricing");
});
</script>
