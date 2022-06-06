import { useCookie } from "h3";

const MAIN_URL =
  process.env.NODE_ENV === "production"
    ? "https://simpleanalytics.com"
    : "http://localhost:3000";

export default defineNuxtPlugin(async (nuxtApp) => {
  const affiliate = useState("affiliate");

  const { ssrContext } = nuxtApp;
  const { searchParams } = new URL(ssrContext?.req?.url, MAIN_URL);
  const referral = searchParams.get("referral");
  const cookie = useCookie(ssrContext?.req, "affiliate");

  const slug = referral || cookie;
  affiliate.value = null;

  if (slug) {
    try {
      const url = `${MAIN_URL}/api/referral-validator?referral=${slug}`;
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
