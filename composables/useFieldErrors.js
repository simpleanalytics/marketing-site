import { computed } from "vue";

export function useFieldErrors(errors, fieldName, index = null) {
  return computed(() => {
    return errors.value
      .filter(
        (error) =>
          error.field === fieldName &&
          (index === null || error.index === index),
      )
      .map((error) => error.message)
      .join(", ");
  });
}
