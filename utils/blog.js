import ms from "~~/utils/ms";

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
    case "iron-brands":
      return {
        name: "Iron Brands",
        avatar: "https://assets.simpleanalytics.com/images/people/iron.jpg",
      };
    case "adriaan-van-rossum":
      return {
        name: "Adriaan van Rossum",
        avatar: "https://assets.simpleanalytics.com/images/people/adriaan.jpg",
      };
    case "carlo-cilento":
      return {
        name: "Carlo Cilento",
        avatar:
          "https://assets.simpleanalytics.com/images/people/carlo-cilento.jpg",
      };
    case "tim-de-nood":
      return {
        name: "Tim de Nood",
        avatar:
          "https://assets.simpleanalytics.com/images/people/tim-de-nood.jpg",
      };
    case "mike-timofiiv":
      return {
        name: "Mike Timofiiv",
        avatar:
          "https://assets.simpleanalytics.com/images/people/mike-timofiiv.jpg",
      };
    case "ankit-ghosh":
      return {
        name: "Ankit Ghosh",
        avatar: "https://assets.simpleanalytics.com/images/people/ankit.jpg",
      };
    case "pieter-vegt":
      return {
        name: "Pieter Vegt",
        avatar:
          "https://assets.simpleanalytics.com/images/people/pieter-vegt.jpg",
      };
    case "jules-van-den-berg":
      return {
        name: "Jules van den Berg",
        avatar:
          "https://assets.simpleanalytics.com/images/people/jules-van-den-berg.jpg",
      };
    case "onur-genes":
      return {
        name: "Onur Genes",
        avatar:
          "https://assets.simpleanalytics.com/images/people/onur-genes.jpg",
      };
    default:
      return {};
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
