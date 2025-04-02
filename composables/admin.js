export const useAdmin = (to = {}) => {
  const { path, query = {} } = to;
  const adminState = useState(() => null);

  const adminCookie = useCookie("admin", {
    secure: process.env.NODE_ENV === "production",
    sameSite: true,
    httpOnly: false,
  });

  if (typeof adminCookie.value === "boolean")
    adminState.value = adminCookie.value;

  if ([null, "true", "yes", "on"].includes(query.admin)) {
    adminState.value = true;
  }

  watch(
    adminState,
    (value) => {
      if (typeof value === "boolean") adminCookie.value = value;
      if (
        import.meta.client &&
        value === false &&
        [null, "true", "yes", "on"].includes(query.admin)
      ) {
        // Remove the admin query param via replaceState
        const params = new URLSearchParams(query);
        params.delete("admin");
        // Reload the page
        window.location.href = `${path}${
          params.toString() ? `?${params.toString()}` : ""
        }`;
      }
    },
    { immediate: true },
  );

  return adminState;
};
