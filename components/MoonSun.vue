<template>
  <a @click="toggleTheme()" role="img" aria-label="Toggle dark mode">
    <div class="moon-container">
      <div class="moon"></div>
      <div class="straaltje" style="--shine-id: 1"></div>
      <div class="straaltje" style="--shine-id: 2"></div>
      <div class="straaltje" style="--shine-id: 3"></div>
      <div class="straaltje" style="--shine-id: 4"></div>
      <div class="straaltje" style="--shine-id: 5"></div>
      <div class="straaltje" style="--shine-id: 6"></div>
      <div class="straaltje" style="--shine-id: 7"></div>
      <div class="straaltje" style="--shine-id: 8"></div>
      <div class="straaltje" style="--shine-id: 9"></div>
      <div class="straaltje" style="--shine-id: 10"></div>
      <div class="straaltje" style="--shine-id: 11"></div>
      <div class="straaltje" style="--shine-id: 12"></div>
    </div>
  </a>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/24/solid";

const theme = useTheme();

const themeCookie = useCookie("theme", {
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
});

const toggleTheme = () => {
  if (theme.value === "light") theme.value = "dark";
  else theme.value = "light";

  themeCookie.value = theme.value;
};
</script>

<style scoped>
.moon-container {
  --size: 30px;
  --duration: 0.5s;
  --shine-id: 1; /* Default value */
  --background-color-light: #f8fafb;
  --background-color-dark: #232e2f;
  --moon-color: #9aa7b4;
  --sun-color: gold;

  display: block;
  position: relative;
  cursor: pointer;
  width: var(--size);
  height: var(--size);
  overflow: hidden;
}

.moon {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--moon-color);
  border-radius: 50%;
  transition: all var(--duration);
  z-index: 1;
  transform: scale(0.75);
}

.moon::after {
  content: "";
  display: block;
  border-radius: 50%;
  position: absolute;
  right: calc(var(--size) / -3);
  top: calc(var(--size) / -4);
  width: var(--size);
  height: var(--size);
  transition-property: right, top, width, height, transform;
  transition-delay: 100ms;
  transition-duration: var(--duration);
  background-color: var(--background-color-light);
}

html.dark .moon {
  transform: scale(0.6);
  background-color: var(--sun-color);
}

html.dark .moon::after {
  width: 0;
  height: 0;
  transform: scale(0.6);
  background-color: var(--background-color-dark);
}

.straaltje {
  --width: calc(var(--size) / 10);
  --height: calc(var(--size) / 10);

  position: absolute;
  top: 0;
  border-radius: 50%;
  left: calc(50% - 5px / 2);
  width: var(--width);
  height: var(--height);
  background-color: gold;
  transform-origin: 2.5px calc(var(--size) / 2);
  transition: all var(--duration);
  transform: rotate(calc(360deg / 12 * var(--shine-id)))
    translateY(var(--width));
  opacity: 0;
  z-index: 50;
}

html.dark .straaltje {
  transform: rotate(calc(360deg / 12 * var(--shine-id)));
  opacity: 1;
}
</style>
