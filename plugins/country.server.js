import { Reader } from "@maxmind/geoip2-node";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

let dbBuffer = null;
try {
  const dbPath = resolve("server/data/geolite-country.mmdb");
  if (existsSync(dbPath)) {
    dbBuffer = readFileSync(dbPath);
  }
} catch (error) {
  console.warn("GeoLite database not available:", error.message);
}

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

  if (ip === "127.0.0.1") {
    return saveCountry("nl");
  }

  if (ip && dbBuffer) {
    try {
      const reader = Reader.openBuffer(dbBuffer);
      const response = reader.country(ip);
      if (response?.country?.isoCode) {
        saveCountry(response.country.isoCode);
      }
    } catch (error) {
      if (/The address (.*) is not in the database/i.test(error?.message))
        return;

      console.error(error);
    }
  }
});
