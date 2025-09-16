<template>
  <div :class="class">
    <Tooltip :text="$t('pricing.company_logos.mollie')" class="group">
      <NuxtLink href="https://www.mollie.com/" target="_blank">
        <LogosMollie class="h-5 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="$t('pricing.company_logos.bloomberg')" class="group">
      <NuxtLink href="https://www.bloomberg.com/" target="_blank">
        <LogosBloomberg class="h-6 my-3 translate-y-[20%]" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="$t('pricing.company_logos.michelin')" class="group">
      <NuxtLink href="https://www.michelin.com/" target="_blank">
        <LogosMichelin class="h-8 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="$t('pricing.company_logos.hyundai')" class="group">
      <NuxtLink href="https://www.hyundai.com/" target="_blank">
        <LogosHyundai class="h-8 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="$t('pricing.company_logos.gov_uk')" class="group">
      <NuxtLink href="https://www.gov.uk/" target="_blank">
        <LogosGovUK class="h-9 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="$t('pricing.company_logos.polkadot')" class="group">
      <NuxtLink href="https://polkadot.com/" target="_blank">
        <LogosPolkadot class="h-6 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="$t('pricing.company_logos.bank_of_england')" class="group">
      <NuxtLink href="https://www.bankofengland.co.uk/" target="_blank">
        <LogosBankOfEngland class="h-10 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="$t('pricing.company_logos.sketch')" class="group">
      <NuxtLink href="https://www.sketch.com/" target="_blank">
        <LogosSketch class="h-6 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="$t('pricing.company_logos.excalidraw')" class="group">
      <NuxtLink href="https://excalidraw.com/" target="_blank">
        <LogosExcalidraw class="h-7 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="$t('pricing.company_logos.nomads')" class="group">
      <NuxtLink href="https://nomads.com/" target="_blank">
        <LogosNomadList class="h-8 my-3" />
      </NuxtLink>
    </Tooltip>
  </div>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    default: "mt-6 mb-0 flex flex-wrap justify-center items-center space-x-7",
  },
});
</script>
