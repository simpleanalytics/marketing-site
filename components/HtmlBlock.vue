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
    const replacer = ({
      match,
      tag,
      attributes,
      content,
      parent,
      parentAttributes,
    }) => {
      if (/(<img|ContentEditable|<ol class)/i.test(match)) return match;

      const html = `<ContentEditable ${attributes} parent="${
        parent || ""
      }" tag="${tag || ""}" articleId="${
        this.articleId || ""
      }">${content}</ContentEditable>`;

      if (parent)
        return `<${parent}${
          parentAttributes ? ` ${parentAttributes}` : ""
        }>${html}</${parent}>`;

      return html;
    };

    return h({
      template: `
        <article class="mt-4 prose prose-headings:leading-normal prose-p:leading-loose prose-img:rounded-xl prose-img:shadow-lg dark:prose-img:shadow-none prose-td:align-middle prose-tr:border-gray-600 prose-tr:border-b-2 ml-auto mr-auto counters prose-code:before:content-none prose-code:after:content-none prose-code:font-mono dark:prose-code:bg-gray-600 prose-code:bg-gray-200 prose-code:p-1 prose-code:rounded prose-code:font-normal dark:prose-code:text-gray-200 prose-code:text-gray-800 prose-code:box-decoration-clone">
          ${
            this.html
              ?.replace(/\{\{((?:(?!\}\}).)*)\}\}/g, "&#123;$1&#123;")
              .replace(
                /<a href="([^"]+)"([^>]*)>((?:(?!<\/a>).)*)<\/a>/g,
                function (match, href, attributes, text) {
                  return `<NuxtLink to="${href}"${
                    attributes ? ` ${attributes}` : ""
                  }>${text}</NuxtLink>`;
                }
              )
              .replace(
                /(?<!(?:<blockquote(?:[^>]*)>\n?))<(p)([^>]*)>((?:(?!<\/p>).)*)<\/p>/g,
                (match, tag, attributes, content) =>
                  replacer({ match, tag, attributes, content })
              )
              .replace(
                /<(summary)([^>]*)>((?:(?!<\/summary>).)*)<\/summary>/g,
                (match, tag, attributes, content) =>
                  replacer({ match, tag, attributes, content })
              )
              .replace(
                /<(blockquote)([^>]*)>(?:[ \r\n]*)<(p)([^>]*)>((?:(?!<\/p>).)*)<\/p>(?:[ \r\n]*)<\/blockquote>/g,
                (match, parent, parentAttributes, tag, attributes, content) =>
                  replacer({
                    match,
                    parent,
                    parentAttributes,
                    tag,
                    attributes,
                    content,
                  })
              )
              .replace(
                /<(h[1-9])([^>]*)>((?:(?!<\/h[1-9]>).)*)<\/h[1-9]>/g,
                (match, tag, attributes, content) =>
                  replacer({ match, tag, attributes, content })
              ) || ""
          }
        </article>
      `,
      components: { NuxtLink, ContentEditable },
    });
  },
};
</script>
