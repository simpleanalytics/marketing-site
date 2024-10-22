<template>
  <div class="flex gap-4 justify-between items-center">
    <div class="w-full">
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
        <p>{{ formatDatapoints(props.options[0], $t("time.intl_locale")) }}</p>
        <p class="text-gray-400 dark:text-gray-500 text-sm">
          {{ getTextValue(sliderIndex) }} pageviews (or events)
        </p>
        <p>
          {{ getTextValue(props.options.length - 1) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDatapoints } from "@/utils/miscellaneous";
const { t } = useI18n();

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  sliderIndexInitial: {
    type: Number,
    required: false,
    default: 0,
  },
  addInfinityStep: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const sliderIndex = ref(props.sliderIndexInitial);

const emit = defineEmits(["updateValue"]);

// Add an extra step if addInfinityStep is true
if (
  props.addInfinityStep &&
  props.options[props.options.length - 1] !== "infinity"
) {
  props.options.push("infinity");
}

const getNumberValue = (index) => {
  const value = props.options[index];
  if (props.addInfinityStep && value === "infinity") return Infinity;
  return parseFloat(value);
};

const getTextValue = (index) => {
  const value = getNumberValue(index);
  if (value === Infinity)
    return (
      formatDatapoints(
        props.options[props.options.length - 2],
        t("time.intl_locale"),
      ) + "+"
    );
  return formatDatapoints(value, t("time.intl_locale"));
};

onMounted(() => {
  const value = getNumberValue(sliderIndex.value);
  emit("updateValue", value);
  console.log({ sliderIndex: sliderIndex.value, updateValue: value });

  // Ensure sliderIndex is within bounds after potentially adding an extra step
  if (typeof value === "number")
    sliderIndex.value = Math.min(sliderIndex.value, props.options.length - 1);

  const rangeSlider = document.getElementById("range-slider");
  const tooltip = document.getElementById("slider-tooltip");
  const thumbWidth = 32; // Width of the slider thumb

  function updateTooltip() {
    tooltip.innerHTML = getTextValue(sliderIndex.value);
    const percent =
      (rangeSlider.value - rangeSlider.min) /
      (rangeSlider.max - rangeSlider.min);
    const offset = thumbWidth * percent - thumbWidth / 2;
    tooltip.style.left = `calc(${percent * 100}% - ${offset}px)`;
  }

  const canHover = window.matchMedia("(hover: hover)").matches;
  if (canHover) {
    rangeSlider.addEventListener("input", updateTooltip);
    updateTooltip();
  } else {
    tooltip.style.display = "none";
  }
});

watch(sliderIndex, () => {
  emit("updateValue", getNumberValue(sliderIndex.value));
});
</script>

<style>
#range-slider {
  --filled-color: theme("colors.green.500");
  --track-color: theme("colors.slate.300");
  --thumb-color: theme("colors.green.500");
}
html.dark #range-slider {
  --filled-color: theme("colors.green.600");
  --track-color: theme("colors.gray.800");
  --thumb-color: theme("colors.green.600");
}

.slider-container {
  position: relative;
  --thumb-color: theme("colors.green.500");
}
html.dark .slider-container {
  --thumb-color: theme("colors.green.600");
}

.slider-container .tooltip {
  user-select: none;
  position: absolute;
  background-color: var(--thumb-color);
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

.slider-container input:active + .tooltip {
  visibility: visible;
}
</style>
