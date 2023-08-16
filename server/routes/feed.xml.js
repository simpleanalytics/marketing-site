import { getAuthorFromSlug, rfc822date } from "~~/utils/blog";
import { stringify as qsStringify } from "qs";

const sanitize = (text = "") => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`/g, "&#96");
};

const regex = new RegExp("^ +", "gm");

export default defineEventHandler(async (event) => {
  const { strapiToken, cmsUrl } = useRuntimeConfig();
  const locale = "en";

  event.node.res.setHeader("Content-Type", "application/xml");

  const url = new URL(`/api/articles`, cmsUrl);
  const params = {
    fields: [
      "title",
      "slug",
      "excerpt",
      "authorSlug",
      "createdAt",
      "updatedAt",
      "publishedAt",
    ],
    locale,
    sort: "publishedAt:desc",
    filters: {
      articleType: {
        $eq: "blog",
      },
    },
    populate: {
      coverImageWithoutText: { fields: ["formats"] },
      coverImageWithText: { fields: ["formats"] },
    },
  };
  url.search = qsStringify(params, { encodeValuesOnly: true });
  const response = await $fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${strapiToken}`,
    },
  });

  const posts = response.data.map(({ attributes = {} }) => {
    const cover = attributes.coverImageWithoutText?.data
      ? attributes.coverImageWithoutText.data
      : attributes.coverImageWithText?.data
      ? attributes.coverImageWithText.data
      : null;
    const formats = cover?.attributes?.formats;
    const url =
      formats?.medium?.url || formats?.small?.url || formats?.thumbnail?.url;
    delete attributes.coverImageWithText;
    delete attributes.coverImageWithoutText;
    return { ...attributes, image: url };
  });

  try {
    const entries = [];

    let lastUpdatedAt = null;

    const localizedPath = locale === "en" ? "" : `/${locale}`;

    for (const post of posts) {
      const author = getAuthorFromSlug(post.authorSlug).name;
      const created = new Date(post.created || post.createdAt);
      const updated = new Date(post.updatedAt || created);

      if (lastUpdatedAt === null || updated > lastUpdatedAt) {
        lastUpdatedAt = updated;
      }

      entries.push(
        `
        <title type="html">${sanitize(post.title)}</title>
        <link href="https://www.simpleanalytics.com/blog/${
          post.slug
        }" rel="alternate" type="text/html" title="${sanitize(post.title)}" />
        <published>${rfc822date(created)}</published>
        <updated>${rfc822date(updated)}</updated>
        <modified>${rfc822date(updated)}</modified>
        <id>https://www.simpleanalytics.com${localizedPath}/blog/${
          post.slug
        }</id>
        <content type="html" xml:base="https://www.simpleanalytics.com${localizedPath}/blog/${
          post.slug
        }">${sanitize(post.content?.trim())}</content>
        <author><name>${author}</name></author>
        <language>en-US</language>
        <summary type="html">${sanitize(post.excerpt?.trim())}</summary>
        ${
          post.image
            ? `<media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="${post.image}" />
                <media:content xmlns:media="http://search.yahoo.com/mrss/" medium="image" url="${post.image}" />`
            : ""
        }
      `.trim()
      );
    }

    let xml = `
      <?xml version="1.0" encoding="utf-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">
        <link href="https://www.simpleanalytics.com/rss.xml" rel="self" type="application/atom+xml" />
        <link href="https://www.simpleanalytics.com${localizedPath}/blog" rel="alternate" type="text/html" />
        <updated>${rfc822date(lastUpdatedAt)}</updated>
        <id>https://www.simpleanalytics.com/rss.xml</id>
        <title type="html">Blog of Simple Analytics</title>
        <subtitle>Follow our journey to fight for privacy &amp; against Google Analytics.</subtitle>
        <description>Follow our journey to fight for privacy &amp; against Google Analytics.</description>
    `
      .replace(regex, "  ")
      .trim();

    entries.map((entry) => {
      xml += `\n  <entry>\n    ${entry.replace(regex, "    ")}\n  </entry>`;
    });

    xml += `\n</feed>`;

    return xml;
  } catch (error) {
    console.error(error.message);
    return `<feed><error>${sanitize(error.message)}</error></feed>`;
  }
});
