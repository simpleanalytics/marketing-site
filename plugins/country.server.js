import { Reader } from "@maxmind/geoip2-node";
import { readFileSync } from "fs";
import { resolve } from "path";

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

export default defineNuxtPlugin((nuxtApp) => {
  const country = useState("country");
  const currency = useState("currency");

  const usd = { sign: "$", code: "usd" };
  const gbp = { sign: "£", code: "gbp" };
  const eur = { sign: "€", code: "eur" };

  const { req: request } = nuxtApp.ssrContext;
  const ip =
    request?.headers["x-real-ip"] ||
    request?.headers["x-forwarded-for"] ||
    request?.connection?.remoteAddress ||
    request?.connection?.socket?.remoteAddress;

  country.value = null;
  currency.value = usd;

  if (ip && dbBuffer) {
    try {
      const reader = Reader.openBuffer(dbBuffer);
      const response = reader.country(ip);
      if (response.country.isoCode) {
        const code = response.country.isoCode.toLowerCase();
        country.value = code;

        if (["uk", "gb"].includes(code)) {
          currency.value = gbp;
        } else if (euroCountries.includes(code)) {
          currency.value = eur;
        } else {
          currency.value = usd;
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
});
