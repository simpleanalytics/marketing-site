export const BLOG_URL =
  process.env.NODE_ENV === "production"
    ? "https://blogold.simpleanalytics.com"
    : "http://localhost:4001";

export const getPathFromBlogUrl = (url) => {
  const pathname = url.startsWith("/") ? url : new URL(url).pathname;
  if (pathname.startsWith("/blog/")) return pathname;
  return "/blog" + pathname;
};

export const replaceInlineImages = (article) => {
  const url = BLOG_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regexp = new RegExp(`(src)="${url}\/blog\/`, "g");
  return article.replace(regexp, `$1="${BLOG_URL}/`);
};
