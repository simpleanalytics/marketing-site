export default defineEventHandler(async (event) => {
  event.node.res.setHeader("Content-Type", "application/xml");

  const {
    public: { BASE_URL, DASHBOARD_URL },
  } = useRuntimeConfig();

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${BASE_URL}/marketing-sitemap.xml</loc>
    </sitemap>
    <sitemap>
        <loc>${DASHBOARD_URL}/dashboard-sitemap.xml</loc>
    </sitemap>
    <sitemap>
        <loc>https://docs.simpleanalytics.com/sitemap.xml</loc>
    </sitemap>
</sitemapindex>`;
});
