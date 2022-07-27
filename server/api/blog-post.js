const BLOG_URL =
  process.env.NODE_ENV === "production"
    ? "https://blog.simpleanalytics.com"
    : "http://localhost:4001";

const getAuthorFromSlug = (slug) => {
  switch (slug) {
    case "iron":
      return "Iron Brands";
    case "adriaan":
      return "Adriaan van Rossum";
    case "mike":
      return "Mike Timofiiv";
    default:
      return "Simple Analytics";
  }
};

export default defineEventHandler(async (event) => {
  const { searchParams } = new URL(event.req.url, "https://example.com");
  const slug = searchParams.get("slug");

  const [post, posts] = await Promise.all([
    $fetch(`${BLOG_URL}/${slug}`),
    $fetch(`${BLOG_URL}/recent-posts.json`),
  ]);

  const title = /<title>([\s\S]*?)<\/title>/g.exec(post);
  const article = /<article>([\s\S]*?)<\/article>/g.exec(post);

  const found = posts.find(({ url }) => {
    const path = url.replace(BLOG_URL, "").slice(1);
    return path === slug;
  });

  const jsonData = found || {};

  const author = getAuthorFromSlug(jsonData?.author_slug);

  const date =
    /itemprop="datePublished"[\s\S]*?content="([\s\S]*?)"[\s\S]*?\/>/g.exec(
      post
    );

  return {
    ...jsonData,
    author,
    slug,
    date: date?.[1],
    title: title?.[1],
    article: article?.[1]
      ?.replace(/="\//g, `="${BLOG_URL}/`)
      ?.replace(/https:\/\/blog.simpleanalytics.com\//g, "/blog/"),
  };
});
