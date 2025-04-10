<script>
import { h } from "vue";
import NuxtLink from "#app/components/nuxt-link";
import ContentEditable from "~/components/ContentEditable.vue";
import CtaOne from "~/components/CtaOne.vue";
import CtaTwo from "~/components/CtaTwo.vue";
import Gif from "~/components/Gif.vue";
import Video from "~/components/Video.vue";
import { parseDocument } from "htmlparser2";

export default {
  props: {
    html: {
      type: String,
    },
    articleId: {
      type: Number,
    },
  },
  setup(props) {
    const componentMap = {
      nuxtlink: NuxtLink,
      contenteditable: ContentEditable,
      ctaone: CtaOne,
      ctatwo: CtaTwo,
      gif: Gif,
      video: Video,
    };

    const createVNodeFromElement = (element) => {
      const { name, attribs, children } = element;
      if (!name) {
        // Handle text nodes or other nodes without a name
        return element.data ? element.data : null;
      }
      const Component = componentMap[name.toLowerCase()];
      if (Component) {
        // Ensure slots are passed as functions
        const slotContent = children.map(createVNodeFromElement);
        const slots = slotContent.length ? { default: () => slotContent } : {};
        return h(Component, { ...attribs }, slots);
      }
      return h(name, { ...attribs }, children.map(createVNodeFromElement));
    };

    const renderHtml = () => {
      const dom = parseDocument(props.html, { recognizeSelfClosing: true });
      return dom.children.map(createVNodeFromElement);
    };

    return () =>
      h(
        "article",
        {
          class:
            "mt-4 prose prose-headings:leading-normal prose-p:leading-loose prose-img:rounded-xl prose-img:shadow-lg dark:prose-img:shadow-none prose-td:align-middle prose-tr:border-gray-600 prose-tr:border-b-2 ml-auto mr-auto counters prose-code:before:content-none prose-code:after:content-none prose-code:font-mono dark:prose-code:bg-gray-600 prose-code:bg-gray-200 prose-code:p-1 prose-code:rounded prose-code:font-normal dark:prose-code:text-gray-200 prose-code:text-gray-800 prose-code:box-decoration-clone prose-hr:border-gray-200 dark:prose-hr:border-gray-600 prose-hr:border-b-2 prose-hr:my-8",
        },
        renderHtml(),
      );
  },
};
</script>
