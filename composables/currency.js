export const useCurrency = () =>
  useState("currency", () => {
    if (process.server) return;

    const usd = { sign: "$", code: "usd" };

    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isEurope = /^europe/i.test(timezone);
      const isUK = /(london|belfast|gb)$/i.test(timezone);
      if (isUK) return { sign: "£", code: "gbp" };
      if (isEurope) return { sign: "€", code: "eur" };
      return usd;
    } catch (e) {
      console.error(e);
      return usd;
    }
  });
