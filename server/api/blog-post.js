import { getAuthorFromSlug, getPathFromBlogUrl } from "~~/utils/blog";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { BLOG_URL } = config.public;

  const { searchParams } = new URL(event.req.url, "https://example.com");
  const slug = searchParams.get("slug");

  try {
    const [post, posts] = await Promise.all([
      $fetch(`${BLOG_URL}/${slug}`),
      $fetch(`${BLOG_URL}/recent-posts.json`),
    ]);

    const title = /<title>([\s\S]*?)<\/title>/g.exec(post);
    const article = /<article>([\s\S]*?)<\/article>/g.exec(post);

    const found = posts.find(({ url }) => {
      const path = getPathFromBlogUrl(url).slice("/blog/".length);
      return path === slug;
    });

    if (!found)
      console.warn(
        new Error(`Extra blog post info not found in posts for ${slug}`)
      );

    const jsonData = found || {};

    const { name: author, avatar } = getAuthorFromSlug(jsonData?.author_slug);

    const date =
      /itemprop="datePublished"[\s\S]*?content="([\s\S]*?)"[\s\S]*?\/>/g.exec(
        post
      );

    return {
      ...jsonData,
      author,
      avatar,
      slug,
      date: date?.[1],
      title: title?.[1],
      article: article?.[1]
        ?.replace(/="\//g, `="${BLOG_URL}/`)
        ?.replace(/https:\/\/blog(old)?.simpleanalytics.com\//g, "/blog/")
        ?.replace(/src="\//g, `src="${BLOG_URL}/`),
    };
  } catch (error) {
    console.error(error.message);
    return {};
  }
});
