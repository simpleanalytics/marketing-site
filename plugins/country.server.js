import { Reader } from "@maxmind/geoip2-node";
import { readFileSync } from "fs";
import { resolve } from "path";

const dbBuffer = import.meta.prerender
  ? null
  : readFileSync(resolve("server/data/geolite-country.mmdb"));

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

export default defineNuxtPlugin(() => {
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

  const headers = useRequestHeaders();
  const ip = headers["x-real-ip"] || headers["x-forwarded-for"];

  if (ip && dbBuffer) {
    try {
      const reader = Reader.openBuffer(dbBuffer);
      const response = reader.country(ip);
      if (response?.country?.isoCode) {
        saveCountry(response.country.isoCode);
      } else {
        console.warn("Country not found in GeoIP2 database");
      }
    } catch (error) {
      if (/The address (.*) is not in the database/i.test(error?.message))
        return;

      console.error(error);
    }
  }
});
