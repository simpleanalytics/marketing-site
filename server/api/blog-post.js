const BLOG_URL =
  process.env.NODE_ENV === "production"
    ? "https://blog.simpleanalytics.com"
    : "http://localhost:4001";

export default defineEventHandler(async (event) => {
  const { searchParams } = new URL(event.req.url, "https://example.com");
  const slug = searchParams.get("slug");

  const data = await $fetch(`${BLOG_URL}/${slug}`);

  const title = /<title>([\s\S]*?)<\/title>/g.exec(data);
  const article = /<article>([\s\S]*?)<\/article>/g.exec(data);

  const date =
    /itemprop="datePublished"[\s\S]*?content="([\s\S]*?)"[\s\S]*?\/>/g.exec(
      data
    );

  return {
    slug,
    date: date?.[1],
    title: title?.[1],
    article: article?.[1]
      ?.replace(/https:\/\/blog.simpleanalytics.com\//g, "/blog/")
      .replace(/="\//g, '="https://blog.simpleanalytics.com/'),
  };
});
