export const useAdmin = () => {
  const route = useRoute();
  const adminState = useState(() => null);

  const adminCookie = useCookie("admin", {
    secure: process.env.NODE_ENV === "production",
    sameSite: true,
    httpOnly: false,
  });

  if (typeof adminCookie.value === "boolean")
    adminState.value = adminCookie.value;

  if ([null, "true", "yes", "on"].includes(route.query.admin)) {
    adminState.value = true;
  }

  watch(
    adminState,
    (value) => {
      if (typeof value === "boolean") adminCookie.value = value;
      if (
        process.client &&
        value === false &&
        [null, "true", "yes", "on"].includes(route.query.admin)
      ) {
        // Remove the admin query param via replaceState
        const params = new URLSearchParams(route.query);
        params.delete("admin");
        // Reload the page
        window.location.href = `${route.path}${
          params.toString() ? `?${params.toString()}` : ""
        }`;
      }
    },
    { immediate: true }
  );

  return adminState;
};
