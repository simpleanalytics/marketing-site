import { Reader } from "@maxmind/geoip2-node";
import { readFileSync } from "fs";
import { resolve } from "path";

console.info(
  "country.server.js",
  JSON.stringify({
    import: import.meta.url,
    file: resolve("server/data/geolite-country.mmdb"),
  }),
);

// log files recursively
fs.readdirSync(resolve("server")).forEach((file) => {
  console.info({ server: file });
});

fs.readdirSync(resolve("server/data")).forEach((file) => {
  console.info({ data: file });
});

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
      }
    } catch (error) {
      if (/The address (.*) is not in the database/i.test(error?.message))
        return;

      console.error(error);
    }
  }
});
