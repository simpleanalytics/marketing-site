export default defineNuxtPlugin(async (nuxtApp) => {
  const { event } = nuxtApp.ssrContext;
  const userAgent = event.node?.req?.headers?.["user-agent"];

  const isBlocked = userAgent?.match(/(tagparrot)/i);

  if (isBlocked)
    throw createError({
      statusCode: 403,
      statusMessage:
        "You are blocked because you're hitting our servers way to hard.",
    });
});
