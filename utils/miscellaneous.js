export const sendEventAndRedirect = (event, metadata = {}, url) => {
  const theme = useTheme();

  metadata = {
    ...metadata,
    app: "marketing_site",
    theme: theme.value,
  };

  if (window.sa_loaded && event) {
    return window.sa_event(event, metadata, () => {
      window.location.href = url;
    });
  } else if (event) {
    console.warn("Simple Analytics not loaded yet to send event:", event);
  }

  return (window.location.href = url);
};

export const navigateToWelcome = (event, metadata = {}) => {
  const config = useRuntimeConfig();
  const { MAIN_URL } = config.public;
  const theme = useTheme();
  const currency = useState("currency");
  const affiliate = useState("affiliate");

  const params = new URLSearchParams();
  if (currency?.value?.code) params.set("currency", currency.value.code);
  if (affiliate?.value?.slug) params.set("affiliate", affiliate?.value?.slug);
  if (theme.value === "dark") params.set("theme", "dark");

  const welcomeUrl = `${MAIN_URL}/welcome?${params}`;
  return sendEventAndRedirect(event, metadata, welcomeUrl);
};
