export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const { BASE_URL, DASHBOARD_URL } = config.public;

  const affiliate = useState("affiliate");

  const { ssrContext } = nuxtApp;
  const { searchParams } = new URL(ssrContext?.url, BASE_URL);
  const referral = searchParams.get("referral");
  const cookie = useCookie("affiliate");

  const slug = referral || cookie.value;
  affiliate.value = null;

  if (slug) {
    try {
      const url = `${DASHBOARD_URL}/api/referral-validator?referral=${slug}`;
      const data = await $fetch(url);

      affiliate.value = {
        slug: data.slug || slug,
        name: data.name,
        valid: data.success,
      };
    } catch (error) {
      affiliate.value = {
        error: "Failed to check if affiliate link is valid.",
      };
    }
  }
});
