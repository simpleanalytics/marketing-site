<template>
  <div class="flex items-center gap-3">
    <span class="text-xs font-medium text-gray-700 dark:text-gray-300"
      >Step {{ step }}/{{ total }}</span
    >
    <div class="flex gap-2">
      <div
        v-for="n in total"
        :key="n"
        :class="[
          'w-2 h-2 rounded-full',
          n <= step
            ? 'bg-red-500 dark:bg-red-600'
            : 'bg-gray-200 dark:bg-gray-700',
        ]"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  /** @type {number} */
  step: {
    type: Number,
    required: true,
  },
  /** @type {number} */
  total: {
    type: Number,
    required: true,
    default: 3,
  },
});
</script>
