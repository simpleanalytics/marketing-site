export const getPathFromBlogUrl = (url) => {
  const pathname = url.startsWith("/") ? url : new URL(url).pathname;
  if (pathname.startsWith("/blog/")) return pathname;
  return "/blog" + pathname;
};

export const BLOG_URL =
  process.env.NODE_ENV === "production"
    ? "https://blogold.simpleanalytics.com"
    : "http://localhost:4001";
