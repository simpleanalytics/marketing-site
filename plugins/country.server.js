import { Reader } from "@maxmind/geoip2-node";
import { readFileSync } from "fs";

const dbBuffer = readFileSync("./geolite-country.mmdb");

export default defineNuxtPlugin((nuxtApp) => {
  const country = useState("country");

  const { req: request } = nuxtApp.ssrContext;
  const ip =
    request?.connection?.remoteAddress ||
    request?.connection?.socket?.remoteAddress;

  if (ip && dbBuffer) {
    try {
      const reader = Reader.openBuffer(dbBuffer);
      const response = reader.country(ip);
      country.value = response.country.isoCode;
      console.log({ found: true, code: response.country.isoCode });
    } catch (error) {
      country.value = "error";
      console.log({ found: false, error: error.message });
    }
  } else {
    country.value = "none";
    console.log({ found: false });
  }
});
