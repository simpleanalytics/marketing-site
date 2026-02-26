<template>
  <div :class="class">
    <Tooltip :text="'Bloomberg'" class="group">
      <NuxtLink href="https://www.bloomberg.com/" target="_blank">
        <LogosBloomberg class="h-6 my-3 translate-y-[20%]" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="'Michelin'" class="group">
      <NuxtLink href="https://www.michelin.com/" target="_blank">
        <LogosMichelin class="h-8 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="'Hyundai'" class="group">
      <NuxtLink href="https://www.hyundai.com/" target="_blank">
        <LogosHyundai class="h-8 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="'GOV.UK'" class="group">
      <NuxtLink href="https://www.gov.uk/" target="_blank">
        <LogosGovUK class="h-9 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="'Polkadot'" class="group">
      <NuxtLink href="https://polkadot.com/" target="_blank">
        <LogosPolkadot class="h-6 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="'Bank of England'" class="group">
      <NuxtLink href="https://www.bankofengland.co.uk/" target="_blank">
        <LogosBankOfEngland class="h-10 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="'Sketch'" class="group">
      <NuxtLink href="https://www.sketch.com/" target="_blank">
        <LogosSketch class="h-6 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="'Excalidraw'" class="group">
      <NuxtLink href="https://excalidraw.com/" target="_blank">
        <LogosExcalidraw class="h-7 my-3" />
      </NuxtLink>
    </Tooltip>
    <Tooltip :text="'Nomads'" class="group">
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
    default:
      "mt-6 mb-0 flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-7 gap-y-2",
  },
});
</script>
