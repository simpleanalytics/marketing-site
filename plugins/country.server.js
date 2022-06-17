import { Reader } from "@maxmind/geoip2-node";
import { readFileSync } from "fs";
import { resolve } from "path";
import { useCookie } from "h3";

const dbBuffer = readFileSync(resolve("server/data/geolite-country.mmdb"));

const euroCountries = [
  // EU countries
  "at",
  "be",
  "bg",
  "hr",
  "cy",
  "cz",
  "dk",
  "ee",
  "fi",
  "fr",
  "de",
  "gr",
  "hu",
  "ie",
  "it",
  "lv",
  "lt",
  "lu",
  "mt",
  "nl",
  "pl",
  "pt",
  "ro",
  "sk",
  "si",
  "es",
  "se",

  // Non EU, but have Euro
  "ad",
  "xk",
  "va",

  // Non EU, but familiar with Euro
  "ch",
  "li",
];

const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

export default defineNuxtPlugin((nuxtApp) => {
  const usd = { sign: "$", code: "usd" };
  const gbp = { sign: "£", code: "gbp" };
  const eur = { sign: "€", code: "eur" };

  const country = useState("country");
  const currency = useState("currency");

  country.value = null;
  currency.value = usd;

  const saveCountry = (isoCode) => {
    const code = isoCode.toLowerCase();
    country.value = code;

    if (["uk", "gb"].includes(code)) {
      currency.value = gbp;
    } else if (euroCountries.includes(code)) {
      currency.value = eur;
    } else {
      currency.value = usd;
    }
  };

  const { req: request } = nuxtApp.ssrContext;
  const { cookie } = useRequestHeaders(["cookie"]);
  const locale = cookie ? parseCookie(cookie)?.locale : null;
  console.log({ locale });
  if (locale) return saveCountry(locale);

  const ip =
    request?.headers["x-real-ip"] ||
    request?.headers["x-forwarded-for"] ||
    request?.connection?.remoteAddress ||
    request?.connection?.socket?.remoteAddress;

  if (ip && dbBuffer) {
    try {
      const reader = Reader.openBuffer(dbBuffer);
      const response = reader.country(ip);
      if (response?.country?.isoCode) {
        saveCountry(response.country.isoCode);
      }
    } catch (error) {
      console.error(error);
    }
  }
});
