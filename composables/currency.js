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

const parseAcceptLanguage = (input = "") => {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(",").map((tag) => tag.split(";")[0]);
};

const getBrowserLocales = () => {
  // Get browser language either from navigator if running on client side, or from the headers
  const browserLocales = import.meta.client
    ? navigator.languages
    : parseAcceptLanguage(useRequestHeader("accept-language"));
  return browserLocales;
};

const getCurrency = (locale, browserLocales) => {
  const usd = { sign: "$", code: "usd" };
  const gbp = { sign: "£", code: "gbp" };
  const eur = { sign: "€", code: "eur" };

  const isEuroCountry = euroCountries.includes(locale.value);
  if (isEuroCountry) return eur;
  if (browserLocales[0] === "en-GB") return gbp;
  if (browserLocales[0] === "en" && browserLocales[1] === "en-GB") return gbp;
  return usd;
};

export function useCurrency() {
  const { locale } = useI18n();
  const browserLocales = getBrowserLocales();

  const currency = ref(getCurrency(locale, browserLocales));

  watch(locale, () => {
    currency.value = getCurrency(locale, browserLocales);
  });

  return currency;
}
