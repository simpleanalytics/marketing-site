const blocklist = []; // [/tag.?parrot/i];

export default defineNuxtPlugin(async (nuxtApp) => {
  const { event } = nuxtApp.ssrContext;
  const url = event?.node?.req?.url;
  const userAgent = event.node?.req?.headers?.["user-agent"];

  // Do not block sitemap.xml, robots.txt, etc.
  if (url?.match(/\.(xml|xsl|txt|css|js)$/i)) return;

  // Block based on user-agent
  const isBlocked = blocklist.some((regex) => userAgent?.match(regex));

  if (isBlocked)
    throw createError({
      statusCode: 429,
      statusMessage: "Please contact us about crawling our website.",
    });
});
