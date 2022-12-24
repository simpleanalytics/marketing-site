<template>
  <article
    class="mt-4 prose prose-headings:leading-normal prose-p:leading-loose ml-auto mr-auto counters"
  >
    <LinkContainer />
  </article>
</template>

<script setup>
import { compile } from "vue/dist/vue.esm-bundler";
import { defineNuxtComponent } from "#imports";
import DynamicLink from "@/components/DynamicLink.vue";

const props = defineProps(["html"]);

const LinkContainer = defineNuxtComponent({
  components: { DynamicLink },
  render: compile(
    props.html.replace(
      /<a href="([^"]+)"([^>]*)>([^<]+)<\/a>/g,
      function (match, href, attributes, text) {
        if (href.startsWith("/") && !/^\/[a-z]{2}\//i.test(href)) {
          return `<DynamicLink to="/nl${href}" ${attributes}>${text}</DynamicLink>`;
        }
        return `<DynamicLink to="${href}" ${attributes}>${text}</DynamicLink>`;
      }
    )
  ),
});
</script>
