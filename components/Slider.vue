<template>
  <div class="flex gap-4 justify-between items-center">
    <div class="w-full p-4">
      <div class="slider-container">
        <input
          id="range-slider"
          min="0"
          :max="props.options.length - 1"
          class="w-full"
          type="range"
          v-model="sliderIndex"
        />
        <div id="slider-tooltip" class="tooltip">50</div>
      </div>
      <div class="flex justify-between font-light">
        <p>{{ format(props.options[0]) }}</p>
        <p>{{ format(props.options[props.options.length - 1]) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

const sliderIndex = ref(5);

const props = defineProps(["options"]);

const format = (value) => {
  if (value >= 1_000_000) return `${value / 1_000_000}M`;
  if (value >= 10_000) return `${(value / 10_000) * 10}k`;
  const formatter = new Intl.NumberFormat(t("time.intl_locale"));
  return formatter.format(value);
};

onMounted(() => {
  const rangeSlider = document.getElementById("range-slider");
  const tooltip = document.getElementById("slider-tooltip");
  const thumbWidth = 32; // Width of the slider thumb

  function updateTooltip() {
    tooltip.innerHTML = format(props.options[sliderIndex.value]);
    const percent =
      (rangeSlider.value - rangeSlider.min) /
      (rangeSlider.max - rangeSlider.min);
    const offset = thumbWidth * percent - thumbWidth / 2;
    tooltip.style.left = `calc(${percent * 100}% - ${offset}px)`;
  }

  rangeSlider.addEventListener("input", updateTooltip);
  updateTooltip(); // Initial update
});
</script>

<style>
.slider-container {
  position: relative;
}

.slider-container .tooltip {
  user-select: none;
  position: absolute;
  background-color: #ff4f64;
  color: white;
  text-align: center;
  border-radius: 50px;
  padding: 5px 10px;
  top: -15px; /* Original position */
  transform: translateX(-50%) scale(0.5); /* Start scaled down */
  opacity: 0; /* Start hidden */
  transition:
    left 90ms ease-out,
    top 0.3s ease,
    opacity 0.3s ease,
    transform 0.5s ease; /* Animation effect */
}

.slider-container input:active + .tooltip {
  top: -37px; /* Adjusted position when active */
  opacity: 1;
  transform: translateX(-50%) scale(1); /* Scale to full size */
}

html.dark .slider-container .tooltip {
  background-color: #de3243;
}

.slider-container input:active + .tooltip {
  visibility: visible;
}
</style>
