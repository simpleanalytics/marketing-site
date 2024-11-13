<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :viewBox="`0 0 ${svgWidth} ${barHeight}`"
    :enable-background="`new 0 0 ${svgWidth} ${barHeight}`"
    xml:space="preserve"
    fill="currentColor"
  >
    <rect
      v-for="(_, index) in bars"
      :key="index"
      :x="padding + index * (barWidth + gapWidth)"
      :width="barWidth"
      :height="barHeight"
      :transform="`translate(0) rotate(180 ${padding + barWidth / 2 + index * (barWidth + gapWidth)} ${barHeight / 2})`"
      :rx="barRadius"
      :ry="barRadius"
    >
      <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        :values="`${barHeight * 0.3}; ${barHeight}; ${barHeight * 0.3}`"
        repeatCount="indefinite"
        :begin="`${index * 0.2}s`"
      />
    </rect>
  </svg>
</template>

<script setup>
const props = defineProps({
  bars: {
    type: Number,
    default: 3,
  },
  barWidth: {
    type: Number,
    default: 7,
  },
  barHeight: {
    type: Number,
    default: 50,
  },
  barRadius: {
    type: Number,
    default: 0,
  },
  gapWidth: {
    type: Number,
    default: 9,
  },
  padding: {
    type: Number,
    default: 0,
  },
});

const svgWidth = computed(() => {
  const totalBarsWidth = props.barWidth * props.bars;
  const totalGapsWidth = props.gapWidth * (props.bars - 1);
  const totalPadding = props.padding * 2;
  return totalBarsWidth + totalGapsWidth + totalPadding;
});
</script>
