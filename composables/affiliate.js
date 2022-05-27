// import { useCookies } from "h3";

const mainAppUrl =
  process.env?.NODE_ENV === "production"
    ? "https://simpleanalytics.com"
    : "http://localhost:3000";

export const useDefaultAffiliate = () => {
  const affiliate = ref({});

  if (process.server) {
    const { ssrContext } = useNuxtApp();
    const { searchParams } = new URL(ssrContext?.req?.url, "http://localhost");
    const referral = searchParams.get("referral");

    if (referral) {
      // const { data } = await useFetch(
      //   mainAppUrl + "/api/referral-validator?referral=" + referral
      // );

      // affiliate.value = data._value;

      affiliate.value = {
        id: 1,
        uuid: "e38d4cac-9fff-43cb-963d-12bf8b2bee03",
        slug: "adriaan",
        name: "adriaan",
        success: true,
        message: "The referral 'adriaan' is valid",
      };
    }
  } else {
    console.log("affiliate", window.__NUXT__);
  }

  return affiliate.value;
};

export const useAffiliate = () =>
  useState("affiliate", () => useDefaultAffiliate());
