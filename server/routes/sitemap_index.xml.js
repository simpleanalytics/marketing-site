export default defineEventHandler(async (event) => {
  event.node.res.setHeader("Content-Type", "application/xml");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://www.simpleanalytics.com/marketing-sitemap.xml</loc>
    </sitemap>
    <sitemap>
        <loc>https://simpleanalytics.com/dashboard-sitemap.xml</loc>
    </sitemap>
    <sitemap>
        <loc>https://docs.simpleanalytics.com/sitemap.xml</loc>
    </sitemap>
</sitemapindex>`;
});
