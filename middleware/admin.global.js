export default defineNuxtRouteMiddleware(({ query }) => {
  const adminState = useAdmin();
  if ([null, "yes", "true", "on"].includes(query.admin)) {
    adminState.value = true;
  } else if (["no", "false", "off"].includes(query.admin)) {
    adminState.value = false;
  }
});
