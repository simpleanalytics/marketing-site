<template>
  <component
    :is="tag"
    class="rounded relative group"
    :class="
      edited && editing
        ? 'ring-8 bg-orange-200 ring-orange-200 dark:bg-orange-900 dark:ring-orange-900' +
          (enable ? ' enabled' : '')
        : editing
        ? 'ring-8 bg-blue-200 ring-blue-200 dark:bg-gray-900 dark:ring-gray-900' +
          (enable ? ' enabled' : '')
        : enable
        ? 'hover:ring-8 hover:bg-blue-100 hover:ring-blue-100 dark:hover:bg-gray-700  dark:hover:ring-gray-700' +
          (enable ? ' enabled' : '')
        : ''
    "
    :contenteditable="contenteditable"
    :tabIndex="enable ? 0 : -1"
    ref="content"
    ><slot></slot
    ><span
      v-if="enable"
      contenteditable="false"
      class="cursor-pointer select-none invisible group-hover:visible absolute -right-7 dark:bg-gray-900 bg-blue-200 rounded-full top-1/2 transform -translate-y-1/2"
      :class="editing ? '!visible' : ''"
      @click="toggleEditing"
      ><svg
        viewBox="0 0 24 24"
        class="w-5 h-5 m-2 dark:fill-blue-300 fill-blue-800"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <g v-if="editing">
          <path
            d="M18.5 19h-13a4.5 4.5 0 0 1-.8-8.92l.78-.14.04-.8a6.5 6.5 0 0 1 12.96 0l.04.8.78.14a4.5 4.5 0 0 1-.8 8.92Zm.98-9.9a7.5 7.5 0 0 0-14.96 0A5.5 5.5 0 0 0 5.5 20h13a5.5 5.5 0 0 0 .98-10.9Z"
          />
          <path
            d="M11.25 16.5h1V8.67l2.5 3.08.75-.66-3.75-4.59L8 11.06l.74.68 2.5-3.07v7.83Z"
          />
        </g>
        <path
          v-else
          d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"
        /></svg></span
  ></component>
</template>

<script setup>
const props = defineProps(["tag", "enabled", "articleId"]);

const content = ref(null);
const hash = ref(null);
const edited = ref(false);
const editing = ref(false);
const contenteditable = ref(false);
const initialContent = ref();
const savedHashes = ref([]);

function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

const save = () => {
  editing.value = false;

  // Check if different
  if (savedHashes.value.includes(hashCode(content.value.textContent))) return;

  savedHashes.value.push(hashCode(content.value.textContent));

  $fetch("/api/content-feedback", {
    method: "POST",
    body: JSON.stringify({
      articleId: props.articleId,
      url: window.location.href,
      original: initialContent.value,
      suggestion: content.value?.textContent,
    }),
  }).catch((error) => {
    console.log(error);
  });
};

const eventListener = function (event) {
  if (
    event.key === "s" &&
    (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)
  ) {
    event.preventDefault();
    save();
  }
};

const toggleEditing = () => {
  editing.value = !editing.value;
  contenteditable.value = editing.value;

  if (editing.value) {
    if (!savedHashes.value.length)
      savedHashes.value.push(hashCode(content.value.textContent));

    if (!initialContent.value) initialContent.value = content.value.textContent;

    content.value.focus();
    document.addEventListener("keydown", eventListener, false);
  } else {
    document.removeEventListener("keydown", eventListener, false);
    save();
  }
};

const hasHoverSupport = () => {
  if (process.server) return false;
  const mq = window.matchMedia("(hover: hover)");
  return mq.matches;
};

const enable = () => {
  if (hasHoverSupport()) return props.enabled;
  return false;
};

onMounted(() => {
  if (!props.enabled || !content.value) return;

  hash.value = hashCode(content.value.textContent);

  content.value.onblur = () => {
    edited.value = hash.value !== hashCode(content.value.textContent);
  };
});
</script>

<style scoped>
[contenteditable]:focus {
  outline: none;
}
[contenteditable].enabled:focus {
  @apply rounded;
}
[contenteditable="false"].enabled:focus {
  @apply ring-blue-200 dark:ring-gray-500 ring-4;
}
[contenteditable].enabled::-moz-focus-inner {
  border: 0;
}
</style>
