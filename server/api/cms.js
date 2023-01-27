import { marked } from "marked";
import { parse as qsParse, stringify as qsStringify } from "qs";

const TYPES = {
  articles: {
    markdown: ["content"],
  },
  "key-terms": {
    markdown: ["content"],
  },
};

const tableOfContentsRegex = /{{( )?tableofcontents( )?}}/g;

const populateMediaField = {
  fields: [
    "name",
    "alternativeText",
    "caption",
    "width",
    "height",
    "url",
    "formats",
  ],
};

const tableOfContents = (html) => {
  const toc = [];
  var level = 0;

  html.replace(
    /<h([1-6]) id="([^"]+)">(<a[^>]+>)?([^<]+)(<\/a>)?<\/h([1-6])>/g,
    function (match, _level, id, _2, text) {
      _level = parseInt(_level, 10);
      while (level > _level) {
        level--;
      }
      while (level < _level) {
        level++;
      }
      toc.push({ id, level, text });
    }
  );

  return toc;
};

function createIndentedList(items) {
  let html = "";
  let currentLevel = 1;
  let stack = [];
  for (const item of items) {
    const { id, level, text } = item;
    while (level < currentLevel) {
      html += `</${stack.pop()}>`;
      currentLevel--;
    }
    while (level > currentLevel) {
      html += `<ol><li>`;
      stack.push("ol");
      currentLevel++;
    }
    if (level === currentLevel) {
      html += `</li><li><a href="#${id}">${text}</a>`;
    } else {
      html += `<li><a href="#${id}">${text}</a>`;
    }
  }
  while (stack.length > 0) {
    html += `</${stack.pop()}>`;
  }

  // Remove empty list items
  html = html.replace(/<li><\/li>/g, "");
  html = html.replace(/<\/a><\/ol>/g, "</a></li></ol>");

  return html;
}

const preconvert = (markdown, { showIndex = false } = {}) => {
  // Replace HTML tags with &lt; and &gt; except in ``` blocks in markdown
  markdown = markdown
    .split("```")
    .map((part, index) => {
      if (index % 2 === 0) {
        // Sanitize the text outside of the code blocks

        // Sanitize only the p, img, and a tags
        part = part.replace(
          /<((?!\/?(span|details|summary|code|mark|p|img|a))[^>]+)>/g,
          "&lt;$1&gt;"
        );

        // A underscore direct after a new line after an image.
        // this markdown:
        // ![image](https://example.com/image.png)
        // caption (source [link](https://exmaple.com))
        //
        // is converted to this:
        // ![image](https://example.com/image.png)
        // _caption (source [link](https://exmaple.com))_
        part = part.replace(
          /(\n|^)(!\[[^\]]+\]\([^\)]+\))\n(.+)\n/,
          "$1$2\n_$3_\n"
        );

        // Replace [^1]: and [^string]: with - [^1]: and - [^string]:
        part = part.replace(
          /(\n|^)(\[\^)([^\]]+)(\]:)/g,
          function (match, _1, _2, id, _3) {
            return `${_1}- ${_2}${id}${_3}`;
          }
        );

        part = part.replace(
          /{% include gif\.html slug="([^"]+)" alt="([^"]+)"(?:.*?)%}/g,
          "![$2](https://assets.simpleanalytics.com/gifs/$1.gif)"
        );

        return part;
      } else {
        // Leave the code block unchanged
        return "```" + part + "```";
      }
    })
    .join("");

  // In the markdown links are formatted like this: [text](<url>), replace those with [text](url)
  markdown = markdown.replace(
    /\[([^\]]+)\]\((<|&lt;)(>|.+?(?=&gt;))(>|&gt;)\)/g,
    "[$1]($3)"
  );

  // Convert markdown to html
  let html = marked(markdown, {
    headerIds: true,
    gfm: true,
  });

  // Replace external links with target="_blank"
  html = html.replace(
    /<a href="([^"]+)"([^>]*)>([^<]+)<\/a>/g,
    function (match, href, attributes, text) {
      try {
        const url = new URL(href);
        if (url.hostname === "www.simpleanalytics.com") {
          const path = href.split("/").slice(3).join("/");
          return `<a href="/${path}"${attributes}>${text}</a>`;
        }
        if (
          href.startsWith("http") &&
          !url.hostname.includes("simpleanalytics")
        ) {
          return `<a href="${href}"${attributes} target="_blank" rel="noopener noreferrer nofollow">${text}</a>`;
        }
        return match;
      } catch (error) {
        return match;
      }
    }
  );

  // Replace GIF images with VueFreezeframe component
  html = html.replace(/<img src="([^"]+)"([^>]*)>/g, function (match, src) {
    if (src.endsWith(".gif"))
      return `<img class="mx-auto rounded-lg" src="${src}" />`;
    return match;
  });

  // Replace markdown footnotes like [^1] or [^note] with <sup id="ref-1"><a href="#note-1">1</a></sup>
  // make sure it does not match [^1]: or [^1](
  html = html.replace(
    /(?<!\[\^)(\[\^)([^\]]+)(\])(?!\:|\()/g,
    function (match, _1, id, _2) {
      const ref = id.replace(/[^a-z0-9]/gi, "-");
      return `<sup id="ref-${ref}"><a class="no-underline p-1" href="#note-${ref}">${id}</a></sup>`;
    }
  );

  // Replace markdown footnotes like [^1]: or [^note] with <li id="note-1"><a href="#ref-1">1</a></li>
  html = html.replace(
    /(\[\^)([^\]]+)(\]:)(.+)(?=\n)/g,
    function (match, _1, id, _2, text) {
      const ref = id.replace(/[^a-z0-9]/gi, "-");
      return `<a id="note-${ref}" class="no-underline" href="#ref-${ref}">#${id}</a> ${text.trim()}`;
    }
  );

  // Add classes
  html = html.replace(
    /<ul>\s?<li>\s?<a\sid\=\"note\-/,
    '<ul class="not-prose list-none mt-8 pt-6 border-t-2 border-gray-300 dark:border-gray-600 pl-0 text-sm text-red-600"><li><a id="note-'
  );

  html = html.replace(
    /<li>\s?<a\sid\=\"note\-/g,
    '<li class="text-gray-400 dark:text-gray-500 mb-2"><a id="note-'
  );

  if (!showIndex) {
    if (tableOfContentsRegex.test(html))
      return html.replace(tableOfContentsRegex, "");

    return html;
  }

  const toc = tableOfContents(html);

  if (toc.length === 0) return html;

  // Add class to first <ol> to make it a counter
  const index = createIndentedList(toc).replace(
    "<ol>",
    '<ol class="counters">'
  );

  // Check if html contains "{{tableofcontents}}"
  if (tableOfContentsRegex.test(html))
    return html.replace(tableOfContentsRegex, index);

  // Check if paragraph before <h2> is less than 100 characters
  if (/<p>([^<]{0,100})<\/p>\n<h2/.test(html))
    return html.replace(/(<p>([^<]{0,100})<\/p>\n)<h2/, `${index}$1<h2`);

  // Insert before first <h2> if it exists
  if (/<h2/.test(html)) return html.replace(/<h2/, `${index}$1<h2`);

  return `${index}${html}`;
};

const convert = (...props) => {
  const html = preconvert(...props);

  // Remove <p> tags around <ol> and <ul> tags
  const regex = /<p>(<(ol|ul).*<\/(ol|ul)>)\s*<\/p>/gi;
  return html.replace(regex, "$1");
};

const parse = ({ type, response }) => {
  response.data = response.data.map((item) => {
    for (const iterator of TYPES[type].markdown) {
      if (item.attributes[iterator]) {
        item.attributes[iterator + "Html"] = convert(
          item.attributes[iterator],
          item.attributes
        );
      }
    }

    // Add ID to attributes
    item.attributes.id = item.id;

    if (item.attributes.localizations.data.length > 0) {
      item.attributes.localizations.data.forEach((localization) => {
        for (const iterator of TYPES[type].markdown) {
          if (localization.attributes[iterator]) {
            localization.attributes[iterator + "Html"] = convert(
              localization.attributes[iterator],
              item.attributes
            );
          }
        }
      });
    }

    return item;
  });

  return response;
};

export default defineEventHandler(async (event) => {
  const { strapiToken } = useRuntimeConfig();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${strapiToken}`,
  };

  const url = new URL(event.node?.req.url, "https://cms.simpleanalytics.com");

  const path = url.searchParams.get("path");
  const type = path.slice(1);

  url.pathname = "/api" + path;

  const fields = url.searchParams.has("fields")
    ? url.searchParams.get("fields").split(",").filter(Boolean)
    : [];

  const nonRelationFields = fields.filter(
    (field) =>
      ![
        "coverImageWithoutText",
        "coverImageWithText",
        "contentHtml",
        "languages",
      ].includes(field)
  );

  const populate =
    fields.includes("coverImageWithoutText") ||
    fields.includes("coverImageWithText")
      ? {
          coverImageWithoutText: populateMediaField,
          coverImageWithText: populateMediaField,
        }
      : {};

  const params = {
    ...qsParse(url.search.slice(1)),
    locale: url.searchParams.has("locale")
      ? url.searchParams.get("locale")
      : "all",
    sort: url.searchParams.has("sort")
      ? url.searchParams.get("sort")
      : "publishedAt:desc",
    fields: nonRelationFields,
    populate: {
      localizations: {
        fields: nonRelationFields,
        populate,
      },
      ...populate,
    },
    pagination: {
      pageSize: url.searchParams.has("pagination[pageSize]")
        ? url.searchParams.get("pagination[pageSize]")
        : "500",
    },
  };

  const query = qsStringify(params, {
    encodeValuesOnly: true, // prettify URL
  });

  url.search = query;

  if (!path || !TYPES[type]) throw new Error("Invalid type, add to TYPES");

  const response = await $fetch(url, { method: "GET", headers });

  return parse({ type, response });
});
