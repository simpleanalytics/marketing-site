<template>
  <div id="slot" class="rounded-md px-2 py-4 md:px-8 md:py-12" ref="gradient">
    <slot></slot>
  </div>
</template>

<script setup>
const gradient = ref(null);

const handleMouseMove = (event) => {
  if (!gradient.value) return;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const mouseXpercentage = Math.round((event.clientX / windowWidth) * 100);
  const mouseYpercentage = Math.round((event.clientY / windowHeight) * 100);

  gradient.value.style.background = `radial-gradient(circle at ${mouseXpercentage}% ${mouseYpercentage}%, var(--gradient-from), var(--gradient-to))`;
};

onMounted(() => {
  if (process.client) {
    window.addEventListener("mousemove", handleMouseMove, false);
  }
});
</script>

<style>
#slot {
  --gradient-from: #dd4352;
  --gradient-to: #e38e97;

  padding: 2rem 3rem;
  width: 100%;

  background: var(--gradient-from);
  background: radial-gradient(
    circle at center,
    var(--gradient-from),
    var(--gradient-to)
  );
}

.dark #slot {
  --gradient-from: #9b0f1c;
  --gradient-to: #de3243;
}
</style>
