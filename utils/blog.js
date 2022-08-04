import ms from "~~/utils/ms";

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
      return {
        name: "Iron Brands",
        avatar: "https://assets.simpleanalytics.com/images/people/iron.jpg",
      };
    case "adriaan":
      return {
        name: "Adriaan van Rossum",
        avatar: "https://assets.simpleanalytics.com/images/people/adriaan.jpg",
      };
    case "carlo":
      return {
        name: "Carlo Cilento",
        avatar:
          "https://assets.simpleanalytics.com/images/people/carlo-cilento.jpg",
      };
    case "tim":
      return {
        name: "Tim de Nood",
        avatar:
          "https://assets.simpleanalytics.com/images/people/tim-de-nood.jpg",
      };
    case "mike":
      return {
        name: "Mike Timofiiv",
        avatar:
          "https://assets.simpleanalytics.com/images/people/mike-timofiiv.jpg",
      };
    default:
      return { name: "Simple Analytics" };
  }
};

export const labelAgo = (t, date) => {
  if (!date || new Date(date) < Date.now() - ms.week * 11) return;

  const ago = Date.now() - new Date(date);
  if (ago > ms.day * 10)
    return t("time.short.ago.weeks", [Math.round(ago / ms.week)]);
  if (ago < ms.minute) return t("time.now");
  if (ago < ms.hour)
    return t("time.short.ago.minutes", [Math.round(ago / ms.minute)]);
  if (ago < ms.day)
    return t("time.short.ago.hours", [Math.round(ago / ms.hour)]);
  return t("time.short.ago.days", [Math.round(ago / ms.day)]);
};
