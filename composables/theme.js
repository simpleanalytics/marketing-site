import { getCookie } from "h3";

export const useDefaultTheme = () => {
  const darkMode = ref();
  const { ssrContext } = useNuxtApp();

  if (import.meta.server && ssrContext) {
    const event = useRequestEvent();
    const sent = event.node?.res?.headersSent;
    if (sent) return darkMode;

    const theme = getCookie(event, "theme");
    if (theme) darkMode.value = theme;
  } else if (import.meta.client) {
    const themeCookie = useCookie("theme");
    if (themeCookie.value) darkMode.value = themeCookie.value;
    else {
      const wantsDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)",
      ).matches;
      if (wantsDark) darkMode.value = "dark";
      else darkMode.value = "light";
    }
  }

  return darkMode;
};

export const useTheme = () => useState("theme", () => useDefaultTheme().value);
