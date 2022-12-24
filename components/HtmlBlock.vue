<script>
import { h } from "vue";
import NuxtLink from "#app/components/nuxt-link";

export default {
  props: {
    html: {
      type: String,
    },
  },
  render() {
    return h({
      template: `
        <article class="mt-4 prose prose-headings:leading-normal prose-p:leading-loose ml-auto mr-auto counters">
          ${
            this.html?.replace(
              /<a href="([^"]+)"([^>]*)>([^<]+)<\/a>/g,
              function (match, href, attributes, text) {
                return `<NuxtLink to="${href}" ${attributes}>${text}</NuxtLink>`;
              }
            ) || ""
          }
        </article>
      `,
      components: { NuxtLink },
    });
  },
};
</script>
