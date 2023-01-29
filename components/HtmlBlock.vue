<script>
import { h } from "vue";
import NuxtLink from "#app/components/nuxt-link";
import ContentEditable from "~/components/ContentEditable.vue";

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
    const replaceContentEditable = (match, tag, attributes, content) => {
      const enabled = !/<(ol class|img)/.test(content);
      return `<ContentEditable ${attributes} :enabled="${enabled}" tag="${tag}" articleId="${this.articleId}">${content}</ContentEditable>`;
    };

    return h({
      template: `
        <article class="mt-4 prose prose-headings:leading-normal prose-p:leading-loose prose-img:rounded-xl prose-img:shadow-lg dark:prose-img:shadow-none prose-td:align-middle prose-tr:border-gray-600 prose-tr:border-b-2 ml-auto mr-auto counters">
          ${
            this.html
              ?.replace(/{{/g, "&#123;&#123;")
              .replace(
                /<a href="([^"]+)"([^>]*)>([^<]+)<\/a>/g,
                function (match, href, attributes, text) {
                  return `<NuxtLink to="${href}" ${attributes}>${text}</NuxtLink>`;
                }
              )
              .replace(
                /<(p)([^>]*)>((?:(?!<\/p>).)*)<\/p>/g,
                replaceContentEditable
              )
              .replace(
                /<(h[1-9])([^>]*)>((?:(?!<\/h[1-9]>).)*)<\/h[1-9]>/g,
                replaceContentEditable
              ) || ""
          }
        </article>
      `,
      components: { NuxtLink, ContentEditable },
    });
  },
};
</script>
