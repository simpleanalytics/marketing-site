import { marked } from "marked";
import { parse as qsParse, stringify as qsStringify } from "qs";
import hljs from "highlight.js";

const TYPES = {
  articles: {
    markdown: ["content"],
  },
  "key-terms": {
    markdown: ["content"],
  },
};

const tableOfContentsRegex = /{{( )?tableofcontents( )?}}/gi;
const ctaOneRegex = /{{( )?ctaone( )?}}/gi;
const ctaTwoRegex = /{{( )?ctatwo( )?}}/gi;

const populateMediaField = {
  fields: [
    "name",
    "alternativeText",
    "caption",
    "width",
    "height",
    "url",
    "formats",
    "mime",
    "provider_metadata",
  ],
};

const populateTableComponentField = {
  fields: ["title", "tableContent"],
};

const populateReviewComponentField = {
  fields: [
    "reviewTitle",
    "reviewLink",
    "sourceName",
    "sourceLink",
    "userName",
    "userLink",
    "userDesignation",
    "content",
  ],
};

const sanitize = (text = "") => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`/g, "&#96");
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
      html += `</li></${stack.pop()}>`;
      currentLevel--;
    }
    while (level > currentLevel) {
      html += `<ol><li>`;
      stack.push("ol");
      currentLevel++;
    }
    if (level === currentLevel) {
      html += `</li><li><NuxtLink to="#${id}">${text}</NuxtLink>`;
    } else {
      html += `<li><NuxtLink to="#${id}">${text}</NuxtLink>`;
    }
  }
  while (stack.length > 0) {
    html += `</li></${stack.pop()}>`;
  }

  // Remove empty list items
  html = html.replace(/<li>(\n)?<\/li>/g, "");

  // replace multiple \n with a single \n
  html = html.replace(/\n{2,}/g, "\n");

  return html;
}

const preconvert = (markdown, { showIndex = false, inlineMedia } = {}) => {
  // Replace HTML tags with &lt; and &gt; except in ``` blocks in markdown
  markdown = markdown
    .split("```")
    .map((nonCode, index) => {
      if (index % 2 === 0) {
        return nonCode
          .split("`")
          .map((part, index) => {
            if (index % 2 === 0) {
              // Sanitize the text outside of the code blocks

              // Change ![optional text](<https://example.com>) into ![optional text](https://example.com)
              part = part.replace(/\[([^\]]*)\]\(<([^\>]+)>\)/g, "[$1]($2)");

              // Sanitize only the p, img, and a tags
              part = part.replace(
                /<((?!\/?(span|details|summary|code|mark|p|img|a|br|hr))[^>]+)>/g,
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
                /(\n|^)(!?\[[^\]]+\]\([^\)]+\))\n(.+)\n/g,
                "$1$2\n<em>$3</em>\n"
              );

              for (const { id, attributes } of inlineMedia?.data || []) {
                // Replace `![alt text](url)` with `![alt text](id)`
                part = part.replace(
                  /!\[(?:[^\]]*)\]\(([^\)]+)\)/g,
                  (match, url) => {
                    if (
                      url === attributes.url &&
                      attributes.mime === "image/gif"
                    ) {
                      const metadata = attributes.provider_metadata;
                      const medium = metadata?.formats?.medium;
                      const file =
                        medium?.webp?.url || medium?.gif?.url || attributes.url;
                      const poster =
                        medium?.poster?.webp?.url || medium?.poster?.png?.url;
                      const color = metadata?.meta?.averageColorHex || "";

                      return `<Gif width="${medium?.width || ""}" height="${
                        medium?.height || ""
                      }" poster="${
                        poster || ""
                      }" background="${color}" src="${file}" />`;
                    }
                    return match;
                  }
                );

                part = part.replace(
                  /\[(?:[^\]]*)\]\(([^\)]+)\)/g,
                  (match, url) => {
                    if (
                      url === attributes.url &&
                      attributes.mime?.startsWith("video/")
                    ) {
                      const metadata = attributes.provider_metadata;
                      const xlarge = metadata?.formats?.xlarge;
                      const file =
                        xlarge?.webp?.url || xlarge?.gif?.url || attributes.url;
                      const poster =
                        xlarge?.poster?.webp?.url ||
                        xlarge?.poster?.png?.url ||
                        "";
                      const color = metadata?.meta?.averageColorHex || "";
                      const brightness =
                        metadata?.meta?.averageColorBrightness || "";
                      return `<Video width="${xlarge?.width || ""}" height="${
                        xlarge?.height || ""
                      }" background="${color}" brightness="${brightness}" poster="${poster}"><source src="${
                        xlarge?.mp4?.url || attributes.url
                      }" type="video/mp4" />${
                        xlarge?.webm?.url
                          ? `<source src="${xlarge?.webm?.url}" type="video/webm" />`
                          : ""
                      }Video not supported, you can <a href="${file}">download it</a>.</Video>`;
                    }
                    return match;
                  }
                );
              }

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

              // Replace markdown footnotes like [^1] or [^note] with <sup id="ref-1"><a href="#note-1">1</a></sup>
              // make sure it does not match [^1]: or [^1](
              part = part.replace(
                /(?<!\[\^)(\[\^)([^\]]+)(\])(?!\:|\()/g,
                function (match, _1, id, _2) {
                  const ref = id.replace(/[^a-z0-9]/gi, "-");
                  return `<sup id="ref-${ref}"><a class="no-underline p-1" href="#note-${ref}">${id}</a></sup>`;
                }
              );

              // Replace \n\n>>text\n\n with <blockquote>text</blockquote>
              part = part.replace(
                /(\n\n|^)(\>\>)(.+?)(\n\n)/g,
                function (match, prefix, _indent, text, suffix) {
                  return `${prefix}<blockquote class="warning"><p>${text}</p></blockquote>${suffix}`;
                }
              );

              return part;
            } else {
              // Leave the code block unchanged
              return "`" + part + "`";
            }
          })
          .join("");
      } else {
        const languages = hljs.listLanguages();

        const firstLine = nonCode.split("\n")[0];
        const language = firstLine === "html" ? "xml" : firstLine;
        const validLanuage = languages.includes(language);

        // Remove the first line if it is a language
        if (validLanuage) nonCode = nonCode.split("\n").slice(1).join("\n");

        const code = validLanuage
          ? hljs.highlight(nonCode, { language })?.value
          : hljs.highlightAuto(nonCode)?.value;

        return `<pre class="not-prose bg-gray-100 dark:bg-gray-700"><code class="hljs">${code}</code></pre>`;
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
          return `<a href="/${path}" ${attributes}>${text}</a>`;
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

  // Remove <p> tags around `<p>{{tableofcontents}}</p>`
  html = html.replace(/<p>{{([a-z0-9\.]+)}}<\/p>/gi, "{{$1}}");

  // Remove <p> tags around `<p><Video>...</Video></p>`
  html = html.replace(
    /<p><Video((?:(?!<\/Video>).)*)<\/Video>(\n.+)?<\/p>/gi,
    "<Video$1</Video>$2"
  );

  // Remove <p> tags around `<p><Gif...</Gif></p>`
  html = html.replace(
    /<p><Gif((?:(?!<\/Gif>).)*)<\/Gif>(\n.+)?<\/p>/gi,
    "<Gif$1</Gif>$2"
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

  const ctaOne = ctaOneRegex.test(html) ? "" : "{{ctaone}}";

  // Check if html contains "{{tableofcontents}}"
  if (tableOfContentsRegex.test(html))
    return html.replace(tableOfContentsRegex, `${index}${ctaOne}`);

  const firstH2Index = html.search(/<h2/);
  const hasPBeforeH2 = firstH2Index
    ? html
        .slice(0, firstH2Index + "<h2".length)
        .match(/<p>([^<]{0,100})<\/p>\n<h2/)
    : false;

  // Check if paragraph before <h2> is less than 100 characters
  if (hasPBeforeH2)
    return html.replace(
      /(<p>([^<]{0,100})<\/p>\n)<h2/,
      `${index}${ctaOne}$1<h2`
    );

  // Insert before first <h2> if it exists
  if (/<h2/.test(html)) return html.replace(/<h2/, `${index}${ctaOne}<h2`);

  return `${index}${ctaOne}${html}`;
};

const replacer = ({
  match,
  tag,
  attributes,
  content,
  parent,
  parentAttributes,
  id,
}) => {
  if (/(<img|ContentEditable|<ol class|<Video )/i.test(match)) return match;

  const html = `<ContentEditable ${attributes} parent="${parent || ""}" tag="${
    tag || ""
  }" articleId="${id || ""}">${content}</ContentEditable>`;

  if (parent)
    return `<${parent}${
      parentAttributes ? ` ${parentAttributes}` : ""
    }>${html}</${parent}>`;

  return html;
};

const getCustomTable = ({ matchedValue, tables }) => {
  let html = "";
  if (tables) {
    for (const table of tables) {
      if (table.title?.toLowerCase() === matchedValue?.toLowerCase()) {
        html = `
        <div id="custom-tables">
          <p id='${sanitize(
            table.title,
          )}' class="text-center font-semibold bg-[#F3F9FB] dark:bg-[#2a373a]">${sanitize(
            table.title.trim(),
          )}</p>
          ${preconvert(table.tableContent)}
        </div>
      `;
      }
    }
  }
  return html;
};

const getReviews = ({ matchedValue, reviews }) => {
  let html = "";
  if (reviews) {
    for (const review of reviews) {
      if (review.reviewTitle?.toLowerCase() === matchedValue?.toLowerCase()) {
        html = `
        <div class="border-2 border-red-600 rounded-lg h-auto w-auto mb-4">
          <div class="px-4 md:px-8 lg:px-12 mb-12">
            <div class="px-3 py-1.5 text-white text-base w-auto max-w-full font-semibold bg-gradient-to-b from-red-400 to-red-500 dark:from-red-600 dark:to-red-600 rounded-b-lg inline-block truncate">
              <span>${sanitize(review.reviewTitle.trim())}</span>
            </div>
            ${preconvert(review.content.trim())}
          </div>
          <div class="flex items-center justify-between w-full px-4 md:px-8 lg:px-12 py-2 rounded-b-md bg-gradient-to-b from-red-400 to-red-500 dark:from-red-600 dark:to-red-600">
            <div class="font-semibold text-base text-white max-w-[50%] truncate">
            ${
              review.userLink
                ? `
                <NuxtLink
                  target="_blank"
                  to="${sanitize(review.userLink)}"
                  class="font-semibold text-base text-white truncate"
                >${sanitize(review.userName.trim())}</NuxtLink>
                `
                : `
                <span class="font-semibold text-base text-white/75 truncate">
                ${sanitize(review.userName.trim())}
                </span>
                `
            }
            ${
              review.userDesignation
                ? `<span class="font-semibold text-base text-white/75 truncate">, ${sanitize(
                    review.userDesignation.trim(),
                  )}</span>`
                : ""
            }
            </div>
            ${
              review.sourceName
                ? `
                <div class="text-base text-white font-semibold inline-flex items-center max-w-[50%]">
                  <span class="truncate max-w-[calc(100%-1.5rem)]">Source: ${sanitize(
                    review.sourceName.trim(),
                  )}</span>
                  ${
                    review.sourceLink
                      ? `
                    <NuxtLink
                      target="_blank"
                      to="${sanitize(review.sourceLink)}"
                      class="ml-1 w-5 h-5 text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-full w-full">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </NuxtLink>
                  `
                      : ""
                  }
                </div>
              `
                : ""
            }
          </div>
        </div>
      `;
      }
    }
  }
  return html;
};

const convert = (markdown, attributes) => {
  let html = preconvert(markdown, attributes);

  const randomCta = Math.random() < 0.5 ? "CtaOne" : "CtaTwo";

  const ctas = attributes.showCallToActions !== false;
  html = html.replace(ctaOneRegex, ctas ? `<${randomCta} />` : "");
  html = html.replace(ctaTwoRegex, ctas ? `<${randomCta} />` : "");

  const id = attributes.id;

  const tables = attributes?.tables;
  const reviews = attributes?.reviews;

  html = html
    // Replace handlebar variables with html characters
    .replace(/{{/g, "&lbrace;&lbrace;")
    .replace(/}}/g, "&rbrace;&rbrace;")
    .replace(
      /<a href="([^"]+)"([^>]*)>((?:(?!<\/a>).)*)<\/a>/g,
      (match, href, attributes, text) => {
        return `<NuxtLink to="${href}"${
          attributes ? ` ${attributes}` : ""
        }>${text}</NuxtLink>`;
      }
    )
    // replace and add table tags as per the order of occurences
    .replace(
      /<p>&lbrace;&lbrace;table &quot;([^&]+)&quot;&rbrace;&rbrace;<\/p>/g,
      (_, matchedValue) => {
        return getCustomTable({
          matchedValue,
          tables,
        });
      }
    )
    // replace and add review tags as per there occurence
    .replace(
      /<p>&lbrace;&lbrace;review &quot;([^&]+)&quot;&rbrace;&rbrace;<\/p>/g,
      (_, matchedValue) => {
        return getReviews({
          matchedValue,
          reviews,
        });
      }
    )
    .replace(
      /(?<!(?:<blockquote(?:[^>]*)>\n?))<(p)([^>]*)>((?:(?!<\/p>).)*)<\/p>/g,
      (match, tag, attributes, content) =>
        replacer({ match, tag, attributes, content, id })
    )
    .replace(
      /<(summary)([^>]*)>((?:(?!<\/summary>).)*)<\/summary>/g,
      (match, tag, attributes, content) =>
        replacer({ match, tag, attributes, content, id })
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
          id,
        })
    )
    .replace(
      /<(h[1-9])([^>]*)>((?:(?!<\/h[1-9]>).)*)<\/h[1-9]>/g,
      (match, tag, attributes, content) =>
        replacer({ match, tag, attributes, content, id })
    );

  return html;
};

const parse = ({ type, response }) => {
  response.data = response.data.map((item) => {
    // Add ID to attributes
    if (item.id) item.attributes.id = item.id;

    for (const iterator of TYPES[type].markdown) {
      if (item.attributes[iterator]) {
        item.attributes[iterator + "Html"] = convert(
          item.attributes[iterator],
          item.attributes
        );
      }
    }

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
  const { strapiToken, cmsUrl } = useRuntimeConfig();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${strapiToken}`,
  };

  const url = new URL(event.node?.req.url, cmsUrl);

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
        "inlineMedia",
        "contentHtml",
        "languages",
      ].includes(field)
  );

  const populate =
    fields.includes("coverImageWithoutText") ||
    fields.includes("coverImageWithText") ||
    fields.includes("inlineMedia") ||
    fields.includes("tables") ||
    fields.includes("reviews")
      ? {
          coverImageWithoutText: populateMediaField,
          coverImageWithText: populateMediaField,
          inlineMedia: populateMediaField,
          tables: populateTableComponentField,
          reviews: populateReviewComponentField,
        }
      : {};

  const userAgent = url.searchParams.get("userAgent");
  url.searchParams.delete("userAgent");
  const userPath = url.searchParams.get("userPath");
  url.searchParams.delete("userPath");

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
    publicationState: url.searchParams.has("drafts") ? "preview" : "live", // preview
  };

  const query = qsStringify(params, {
    encodeValuesOnly: true, // prettify URL
  });

  url.search = query;

  if (!path || !TYPES[type]) throw new Error("Invalid type, add to TYPES");

  console.log(`USER: ${userAgent || "(no agent)"}: ${userPath || "(no path)"}`);

  const response = await $fetch(url, { method: "GET", headers });

  return parse({ type, response });
});
