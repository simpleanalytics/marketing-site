<template>
  <component
    :is="tag"
    class="rounded relative group"
    @click="focusOnContent"
    :class="
      edited && editing
        ? 'ring-8 bg-orange-200 ring-orange-200 dark:bg-orange-900 dark:ring-orange-900' +
          (enable ? ' enabled' : '')
        : didSucceed
        ? 'ring-8 bg-green-200 ring-green-200 dark:bg-green-900 dark:ring-green-900' +
          (enable ? ' enabled' : '')
        : didError
        ? 'ring-8 bg-red-200 ring-red-200 dark:bg-red-900 dark:ring-red-900' +
          (enable ? ' enabled' : '')
        : editing
        ? 'ring-8 bg-blue-200 ring-blue-200 dark:bg-gray-900 dark:ring-gray-900' +
          (enable ? ' enabled' : '')
        : enable
        ? 'hover:ring-8 hover:bg-blue-100 hover:ring-blue-100 dark:hover:bg-gray-700  dark:hover:ring-gray-700' +
          (enable ? ' enabled' : '')
        : ''
    "
    ><span
      :contenteditable="contenteditable"
      :tabIndex="enable ? 0 : -1"
      ref="content"
      :class="
        parent === 'blockquote'
          ? ''
          : tag === 'p'
          ? 'block'
          : /^h[0-9]$/.test(tag)
          ? 'inline'
          : 'inline-block'
      "
      ><slot></slot></span
    ><span
      v-if="enable"
      contenteditable="false"
      class="cursor-pointer select-none group-hover:visible absolute right-0 md:-right-7 rounded-full top-1/2 transform -translate-y-1/2"
      :class="
        didSucceed
          ? `dark:bg-green-800 bg-green-100 visible`
          : didError
          ? `dark:bg-red-800 bg-red-100 visible`
          : `dark:bg-gray-900 bg-blue-200 ${editing ? 'visible' : 'invisible'}`
      "
      @click="toggleEditing"
      ><svg
        viewBox="0 0 24 24"
        class="w-5 h-5 m-2"
        :class="
          didSucceed
            ? 'dark:fill-gray-900 fill-green-500'
            : didError
            ? 'dark:fill-gray-900 fill-red-500'
            : 'dark:fill-blue-300 fill-blue-800'
        "
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-if="didError"
          d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
          fill-rule="nonzero"
        />
        <path
          v-else-if="didSucceed"
          d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"
        />
        <g v-else-if="editing">
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
const props = defineProps(["tag", "articleId", "parent"]);

const content = ref(null);
const hash = ref(null);
const edited = ref(false);
const editing = ref(false);
const contenteditable = ref(false);
const didError = ref(false);
const didSucceed = ref(false);
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
  })
    .then((response) => {
      if (response.ok) {
        didSucceed.value = true;
        setTimeout(() => {
          didSucceed.value = false;
        }, 3000);
      } else {
        console.error(response);
        didError.value = true;
        setTimeout(() => {
          didError.value = false;
        }, 3000);
      }
    })
    .catch((error) => {
      console.error(error);
      didError.value = true;
      setTimeout(() => {
        didError.value = false;
      }, 3000);
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

const hasHoverSupport = computed(() => {
  if (process.server) return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
});

const enable = computed(() => {
  if (typeof hasHoverSupport.value === "boolean") return true;
  return false;
});

const focusOnContent = () => {
  if (editing.value) content.value.focus();
};

onMounted(() => {
  if (!content.value) return;

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
