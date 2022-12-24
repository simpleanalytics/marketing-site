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
      template: `<div>${this.html.replace(
        /<a href="([^"]+)"([^>]*)>([^<]+)<\/a>/g,
        function (match, href, attributes, text) {
          if (href.startsWith("/") && !/^\/[a-z]{2}\//i.test(href)) {
            return `<NuxtLink to="${href}" ${attributes}>${text}</NuxtLink>`;
          }
          return `<NuxtLink to="${href}" ${attributes}>${text}</NuxtLink>`;
        }
      )}</div>`,
      components: { NuxtLink },
    });
  },
};
</script>
