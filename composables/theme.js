import { useCookies } from "h3";

export const useTheme = (fallback = "light") => {
  const darkMode = ref("light");

  if (process.server) {
    const nuxtApp = useNuxtApp();
    const { theme } = useCookies(nuxtApp.ssrContext?.req);
    if (theme) darkMode.value = theme;
  } else if (process.client) {
    const themeCookie = useCookie("theme");
    if (themeCookie.value) darkMode.value = themeCookie.value;
    else {
      const wantsDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (wantsDark) darkMode.value = "dark";
    }
  }

  return darkMode;
};
