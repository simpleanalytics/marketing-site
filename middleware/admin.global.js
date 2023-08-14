export default defineNuxtRouteMiddleware((to, from) => {
  const { query } = to;
  const adminState = useAdmin(to, from);
  if ([null, "yes", "true", "on"].includes(query.admin)) {
    adminState.value = true;
  } else if (["no", "false", "off"].includes(query.admin)) {
    adminState.value = false;
  }
});
