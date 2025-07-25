export function useCurrency() {
  const currency = useState("currency", () => ({ sign: "$", code: "usd" }));
  return currency;
}
