import { BLOG_URL, getAuthorFromSlug, rfc822date } from "~~/utils/blog";

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
  event.res.setHeader("Content-Type", "application/xml");

  const posts = await $fetch(`${BLOG_URL}/posts.json`);

  try {
    const entries = [];

    let lastUpdatedAt = null;

    for (const post of posts) {
      const author = getAuthorFromSlug(post.author_slug).name;
      const image = post.image || post.image_no_text;
      const created = new Date(post.created || post.created_at);
      const updated = new Date(post.last_modified_at || created);

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
        <id>https://www.simpleanalytics.com/blog/${post.slug}</id>
        <content type="html" xml:base="https://www.simpleanalytics.com/blog/${
          post.slug
        }">${sanitize(post.content?.trim())}</content>
        <author><name>${author}</name></author>
        <language>en-US</language>
        <summary type="html">${sanitize(post.excerpt?.trim())}</summary>
        ${
          image
            ? `<media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="${image}" />
                <media:content xmlns:media="http://search.yahoo.com/mrss/" medium="image" url="${image}" />`
            : ""
        }
      `.trim()
      );
    }

    let xml = `
      <?xml version="1.0" encoding="utf-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">
        <link href="https://www.simpleanalytics.com/rss.xml" rel="self" type="application/atom+xml" />
        <link href="https://www.simpleanalytics.com/blog/" rel="alternate" type="text/html" />
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
