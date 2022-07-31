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

const numpad = (number) => ("" + number).padStart(2, "0");

const getTZOString = (timezoneOffset) => {
  const prefix = timezoneOffset > 0 ? "-" : "+";
  const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
  const offsetMinutes = Math.abs(timezoneOffset % 60);

  return prefix + numpad(offsetHours, 2) + numpad(offsetMinutes, 2);
};

export const rfc822date = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    days[date.getDay()] +
    ", " +
    numpad(date.getDate(), 2) +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear() +
    " " +
    numpad(date.getHours(), 2) +
    ":" +
    numpad(date.getMinutes(), 2) +
    ":" +
    numpad(date.getSeconds(), 2) +
    " " +
    getTZOString(date.getTimezoneOffset())
  );
};

export const getAuthorFromSlug = (slug) => {
  switch (slug) {
    case "iron":
      return "Iron Brands";
    case "adriaan":
      return "Adriaan van Rossum";
    case "tim":
      return "Tim de Nood";
    case "mike":
      return "Mike Timofiiv";
    default:
      return "Simple Analytics";
  }
};
