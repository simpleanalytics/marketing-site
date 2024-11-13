<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-[9998] flex items-center justify-center bg-black/30"
      @click.self="close"
    >
      <div
        class="relative w-full max-w-2xl rounded-lg bg-gray-100 dark:bg-gray-700 p-6 shadow-xl"
      >
        <!-- Close button -->
        <button
          @click="close"
          class="group absolute right-0 top-0 px-2 py-2"
          aria-label="Close popover"
        >
          <XMarkIcon
            class="h-6 w-6 stroke-gray-400 dark:stroke-blue-500 group-hover:stroke-blue-500 dark:group-hover:stroke-blue-500"
          />
        </button>

        <!-- Scrollable Content -->
        <div class="mt-4 overflow-y-auto max-h-[calc(90vh-6rem)]">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const close = () => emit("update:modelValue", false);

onMounted(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape" && props.modelValue) close();
  };

  document.addEventListener("keydown", handleEsc);
  onBeforeUnmount(() => {
    document.removeEventListener("keydown", handleEsc);
  });
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
