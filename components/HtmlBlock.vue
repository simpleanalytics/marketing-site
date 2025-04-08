<script>
import { h } from "vue";
import NuxtLink from "#app/components/nuxt-link";
import ContentEditable from "~/components/ContentEditable.vue";
import CtaOne from "~/components/CtaOne.vue";
import CtaTwo from "~/components/CtaTwo.vue";
import Gif from "~/components/Gif.vue";
import Video from "~/components/Video.vue";

export default {
  props: {
    html: {
      type: String,
    },
    articleId: {
      type: Number,
    },
  },
  render() {
    return h({
      template: `
        <article class="mt-4 prose prose-headings:leading-normal prose-p:leading-loose prose-img:rounded-xl prose-img:shadow-lg dark:prose-img:shadow-none prose-td:align-middle prose-tr:border-gray-600 prose-tr:border-b-2 ml-auto mr-auto counters prose-code:before:content-none prose-code:after:content-none prose-code:font-mono dark:prose-code:bg-gray-600 prose-code:bg-gray-200 prose-code:p-1 prose-code:rounded prose-code:font-normal dark:prose-code:text-gray-200 prose-code:text-gray-800 prose-code:box-decoration-clone">
          ${this.html}
        </article>
      `,
      components: {
        NuxtLink,
        ContentEditable,
        CtaOne,
        CtaTwo,
        Gif,
        Video,
      },
    });
  },
};
</script>
