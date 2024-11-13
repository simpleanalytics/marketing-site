<template>
  <div>
    <div v-if="generalErrors.length" class="mt-1">
      <p
        v-if="generalErrors.length === 1"
        class="text-red-500 dark:text-red-600"
      >
        {{ generalErrors[0].message }}
      </p>
      <p v-else>Oops, some errors:</p>
      <ul class="ml-6" v-if="generalErrors.length > 1">
        <li
          v-for="(error, idx) in generalErrors"
          :key="idx"
          class="my-2 list-disc text-red-500 dark:text-red-600"
        >
          {{ error.message }}
        </li>
      </ul>
    </div>

    <div v-if="nonGenerealOtherErrors.length" class="mt-1">
      <p>Oops, some errors that are not from this page:</p>
      <ul class="ml-6">
        <li
          v-for="(error, idx) in otherErrors"
          :key="idx"
          class="my-2 list-disc text-red-500 dark:text-red-600"
        >
          {{ error.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  errors: {
    type: Array,
    required: true,
    default: () => [],
  },
  otherErrors: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const nonGenerealOtherErrors = computed(() => {
  return props.otherErrors.filter(
    (error) => error.field && error.field !== "general",
  );
});

const generalErrors = computed(() => {
  const nonGeneralOtherErrorFields = props.otherErrors
    .filter((error) => error.field && error.field !== "general")
    .map((error) => error.field);

  return props.errors.filter(
    (error) =>
      (error.field === "general" || !error.field) &&
      !nonGeneralOtherErrorFields.includes(error.field),
  );
});
</script>
