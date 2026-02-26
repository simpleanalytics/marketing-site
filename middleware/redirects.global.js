const HTTP_CODES = {
  permanent: 308,
  temporary: 307,
};

// =============================================================================
// LEGACY LOCALE REDIRECTS
// =============================================================================
// These redirects handle URLs from the old translated versions of the site.
// They redirect all locale-prefixed and translated URLs to their English equivalents.
// TODO: Remove this section once search engines have fully re-indexed the site
//       and traffic to translated URLs has dropped to negligible levels.
// =============================================================================

const legacyLocaleRedirects = [
  // Pricing
  { type: "exact", from: "/nl/prijzen", to: "/pricing" },
  { type: "exact", from: "/de/preise", to: "/pricing" },
  { type: "exact", from: "/es/precios", to: "/pricing" },
  { type: "exact", from: "/fr/tarifs", to: "/pricing" },
  { type: "exact", from: "/it/prezzi", to: "/pricing" },

  // Press
  { type: "exact", from: "/nl/pers", to: "/press" },
  { type: "exact", from: "/de/presse", to: "/press" },
  { type: "exact", from: "/es/prensa", to: "/press" },
  { type: "exact", from: "/fr/presse", to: "/press" },
  { type: "exact", from: "/it/stampa", to: "/press" },

  // Glossaries (Index)
  { type: "exact", from: "/nl/begrippenlijsten", to: "/glossary" },
  { type: "exact", from: "/de/glossare", to: "/glossary" },
  { type: "exact", from: "/es/glosarios", to: "/glossary" },
  { type: "exact", from: "/fr/glossaires", to: "/glossary" },
  { type: "exact", from: "/it/glossari", to: "/glossary" },

  // ---------------------------------------------------------------------------
  // Glossary (Category & Items) - Must come before generic locale strip
  // ---------------------------------------------------------------------------
  // Key terms (specific paths first)
  {
    type: "regex",
    from: /^\/nl\/begrippenlijst\/([^/]+)\/kernbegrippen(\/.*)?$/i,
    to: "/glossary/$1/key-terms$2",
  },
  {
    type: "regex",
    from: /^\/nl\/begrippenlijst\/([^/]+)\/kernbegrip(\/.*)?$/i,
    to: "/glossary/$1/key-term$2",
  },
  {
    type: "regex",
    from: /^\/de\/glossar\/([^/]+)\/schlusselbegriffe(\/.*)?$/i,
    to: "/glossary/$1/key-terms$2",
  },
  {
    type: "regex",
    from: /^\/de\/glossar\/([^/]+)\/schlusselbegriff(\/.*)?$/i,
    to: "/glossary/$1/key-term$2",
  },
  {
    type: "regex",
    from: /^\/es\/glosario\/([^/]+)\/terminos-clave(\/.*)?$/i,
    to: "/glossary/$1/key-terms$2",
  },
  {
    type: "regex",
    from: /^\/es\/glosario\/([^/]+)\/termino-clave(\/.*)?$/i,
    to: "/glossary/$1/key-term$2",
  },
  {
    type: "regex",
    from: /^\/fr\/glossaire\/([^/]+)\/termes-cles(\/.*)?$/i,
    to: "/glossary/$1/key-terms$2",
  },
  {
    type: "regex",
    from: /^\/fr\/glossaire\/([^/]+)\/terme-cle(\/.*)?$/i,
    to: "/glossary/$1/key-term$2",
  },
  {
    type: "regex",
    from: /^\/it\/glossario\/([^/]+)\/termini-chiave(\/.*)?$/i,
    to: "/glossary/$1/key-terms$2",
  },
  {
    type: "regex",
    from: /^\/it\/glossario\/([^/]+)\/termine-chiave(\/.*)?$/i,
    to: "/glossary/$1/key-term$2",
  },
  // Glossary category pages
  { type: "regex", from: /^\/nl\/begrippenlijst(\/.*)?$/i, to: "/glossary$1" },
  { type: "regex", from: /^\/de\/glossar(\/.*)?$/i, to: "/glossary$1" },
  { type: "regex", from: /^\/es\/glosario(\/.*)?$/i, to: "/glossary$1" },
  { type: "regex", from: /^\/fr\/glossaire(\/.*)?$/i, to: "/glossary$1" },
  { type: "regex", from: /^\/it\/glossario(\/.*)?$/i, to: "/glossary$1" },

  // Google Analytics Countries
  {
    type: "exact",
    from: "/nl/google-analytics-verboden-in-deze-landen",
    to: "/google-analytics-is-illegal-in-these-countries",
  },
  {
    type: "exact",
    from: "/de/google-analytics-in-diesen-landern-verboten",
    to: "/google-analytics-is-illegal-in-these-countries",
  },
  {
    type: "exact",
    from: "/es/google-analytics-prohibido-en-estos-paises",
    to: "/google-analytics-is-illegal-in-these-countries",
  },
  {
    type: "exact",
    from: "/fr/google-analytics-interdit-dans-ces-pays",
    to: "/google-analytics-is-illegal-in-these-countries",
  },
  {
    type: "exact",
    from: "/it/google-analytics-vietato-in-questi-paesi",
    to: "/google-analytics-is-illegal-in-these-countries",
  },
  {
    type: "regex",
    from: /^\/nl\/google-analytics-verboden(\/.*)?$/i,
    to: "/google-analytics-illegal$1",
  },
  {
    type: "regex",
    from: /^\/de\/google-analytics-lander(\/.*)?$/i,
    to: "/google-analytics-illegal$1",
  },
  {
    type: "regex",
    from: /^\/es\/google-analytics-paises(\/.*)?$/i,
    to: "/google-analytics-illegal$1",
  },
  {
    type: "regex",
    from: /^\/fr\/google-analytics-pays(\/.*)?$/i,
    to: "/google-analytics-illegal$1",
  },
  {
    type: "regex",
    from: /^\/it\/google-analytics-paesi(\/.*)?$/i,
    to: "/google-analytics-illegal$1",
  },

  // ---------------------------------------------------------------------------
  // Resources - Specific sub-paths first
  // ---------------------------------------------------------------------------
  // Comparisons
  {
    type: "regex",
    from: /^\/nl\/bronnen\/vergelijkingen(\/.*)?$/i,
    to: "/resources/comparisons$1",
  },
  {
    type: "regex",
    from: /^\/de\/ressourcen\/vergleiche(\/.*)?$/i,
    to: "/resources/comparisons$1",
  },
  {
    type: "regex",
    from: /^\/es\/recursos\/comparaciones(\/.*)?$/i,
    to: "/resources/comparisons$1",
  },
  {
    type: "regex",
    from: /^\/fr\/ressources\/comparaisons(\/.*)?$/i,
    to: "/resources/comparisons$1",
  },
  {
    type: "regex",
    from: /^\/it\/risorse\/confronti(\/.*)?$/i,
    to: "/resources/comparisons$1",
  },
  // Analytics Review
  {
    type: "regex",
    from: /^\/nl\/bronnen\/analyse-beoordeling(\/.*)?$/i,
    to: "/resources/analytics-review$1",
  },
  {
    type: "regex",
    from: /^\/de\/ressourcen\/analysebewertung(\/.*)?$/i,
    to: "/resources/analytics-review$1",
  },
  {
    type: "regex",
    from: /^\/es\/recursos\/revisiones-de-analiticas(\/.*)?$/i,
    to: "/resources/analytics-review$1",
  },
  {
    type: "regex",
    from: /^\/fr\/ressources\/avis-analytiques(\/.*)?$/i,
    to: "/resources/analytics-review$1",
  },
  {
    type: "regex",
    from: /^\/it\/risorse\/recensione-analitica(\/.*)?$/i,
    to: "/resources/analytics-review$1",
  },
  // Analytics Pricing
  {
    type: "regex",
    from: /^\/nl\/bronnen\/analyse-prijzen(\/.*)?$/i,
    to: "/resources/analytics-pricing$1",
  },
  {
    type: "regex",
    from: /^\/de\/ressourcen\/analysepreise(\/.*)?$/i,
    to: "/resources/analytics-pricing$1",
  },
  {
    type: "regex",
    from: /^\/es\/recursos\/precios-de-analiticas(\/.*)?$/i,
    to: "/resources/analytics-pricing$1",
  },
  {
    type: "regex",
    from: /^\/fr\/ressources\/prix-analytiques(\/.*)?$/i,
    to: "/resources/analytics-pricing$1",
  },
  {
    type: "regex",
    from: /^\/it\/risorse\/prezzo-analitico(\/.*)?$/i,
    to: "/resources/analytics-pricing$1",
  },
  // Alternatives
  {
    type: "regex",
    from: /^\/nl\/bronnen\/alternatieven(\/.*)?$/i,
    to: "/resources/alternatives$1",
  },
  {
    type: "regex",
    from: /^\/de\/ressourcen\/alternativen(\/.*)?$/i,
    to: "/resources/alternatives$1",
  },
  {
    type: "regex",
    from: /^\/es\/recursos\/alternativas(\/.*)?$/i,
    to: "/resources/alternatives$1",
  },
  {
    type: "regex",
    from: /^\/fr\/ressources\/alternatives(\/.*)?$/i,
    to: "/resources/alternatives$1",
  },
  {
    type: "regex",
    from: /^\/it\/risorse\/alternative(\/.*)?$/i,
    to: "/resources/alternatives$1",
  },
  // Resources index (generic - must come after specific sub-paths)
  { type: "regex", from: /^\/nl\/bronnen(\/.*)?$/i, to: "/resources$1" },
  { type: "regex", from: /^\/de\/ressourcen(\/.*)?$/i, to: "/resources$1" },
  { type: "regex", from: /^\/es\/recursos(\/.*)?$/i, to: "/resources$1" },
  { type: "regex", from: /^\/fr\/ressources(\/.*)?$/i, to: "/resources$1" },
  { type: "regex", from: /^\/it\/risorse(\/.*)?$/i, to: "/resources$1" },

  // UTM Builder
  {
    type: "regex",
    from: /^\/es\/constructor-de-utm(\/.*)?$/i,
    to: "/utm-builder$1",
  },
  {
    type: "regex",
    from: /^\/de\/utm-generator(\/.*)?$/i,
    to: "/utm-builder$1",
  },
  {
    type: "regex",
    from: /^\/it\/generatore-utm(\/.*)?$/i,
    to: "/utm-builder$1",
  },
  {
    type: "regex",
    from: /^\/fr\/constructeur-utm(\/.*)?$/i,
    to: "/utm-builder$1",
  },

  // GDPR Compliant
  {
    type: "regex",
    from: /^\/nl\/is-avg-conform(\/.*)?$/i,
    to: "/is-gdpr-compliant$1",
  },
  {
    type: "regex",
    from: /^\/de\/ist-dsgvo-konform(\/.*)?$/i,
    to: "/is-gdpr-compliant$1",
  },
  {
    type: "regex",
    from: /^\/es\/es-conforme-rgpd(\/.*)?$/i,
    to: "/is-gdpr-compliant$1",
  },
  {
    type: "regex",
    from: /^\/fr\/est-conforme-rgpd(\/.*)?$/i,
    to: "/is-gdpr-compliant$1",
  },
  {
    type: "regex",
    from: /^\/it\/e-conforme-gdpr(\/.*)?$/i,
    to: "/is-gdpr-compliant$1",
  },

  // Case Studies
  { type: "regex", from: /^\/de\/fallstudien(\/.*)?$/i, to: "/case-studies$1" },
  {
    type: "regex",
    from: /^\/es\/estudios-de-caso(\/.*)?$/i,
    to: "/case-studies$1",
  },
  {
    type: "regex",
    from: /^\/fr\/etudes-de-cas(\/.*)?$/i,
    to: "/case-studies$1",
  },
  {
    type: "regex",
    from: /^\/it\/studi-di-caso(\/.*)?$/i,
    to: "/case-studies$1",
  },
  { type: "regex", from: /^\/nl\/casestudies(\/.*)?$/i, to: "/case-studies$1" },

  // Guides
  { type: "regex", from: /^\/de\/anleitungen(\/.*)?$/i, to: "/guides$1" },
  { type: "regex", from: /^\/es\/tutoriales(\/.*)?$/i, to: "/guides$1" },
  { type: "regex", from: /^\/fr\/tutoriels(\/.*)?$/i, to: "/guides$1" },
  { type: "regex", from: /^\/it\/guide-pratiche(\/.*)?$/i, to: "/guides$1" },
  { type: "regex", from: /^\/nl\/handleidingen(\/.*)?$/i, to: "/guides$1" },

  // ---------------------------------------------------------------------------
  // Fallback: Generic locale prefix strip
  // This catches any remaining locale-prefixed URLs (e.g., /nl/blog/*, /de/video)
  // Must be LAST in this array
  // ---------------------------------------------------------------------------
  {
    type: "regex",
    from: /^\/(nl|de|es|fr|it)(\/.*)?$/i,
    to: "$2",
    fallback: "/",
  },
];

// =============================================================================
// END OF LEGACY LOCALE REDIRECTS
// =============================================================================

const redirects = [
  {
    type: "regex",
    from: /^\/glossaries\/?$/i,
    to: "/glossary",
  },
  {
    type: "regex",
    from: /^\/(?:case-?study|use-?cases|use-?case)(\/|$)/i,
    to: "/case-studies$1",
  },
  { type: "regex", from: /^\/case-study(\/|$)/i, to: "/case-studies$1" },
  {
    type: "regex",
    from: /^\/glossary\/analytics\/key-term\/key-term-1(\/|$)/i,
    to: "/glossary/analytics/key-term/conversion-funnel$1",
  },
  {
    type: "regex",
    from: /^\/sitemap.xml$/i,
    to: "/sitemap_index.xml",
  },
  {
    type: "regex",
    from: /^\/practical-privacy-tips-for-your-business\/?$/i,
    to: "/blog/practical-privacy-tips-for-your-business$1",
  },
  {
    type: "regex",
    from: /^\/google-analytics-illegal\/is-google-analytics-illegal-in-finland$/i,
    to: "/blog/finland-is-latest-eu-country-to-crack-down-on-google-analytics",
  },
  {
    type: "regex",
    from: /^\/google-analytics-illegal\/is-google-analytics-illegal-in-norway$/i,
    to: "/blog/norway-takes-a-stance-against-google-analytics",
  },
  {
    type: "regex",
    from: /^\/utm-generator/i,
    to: "/utm-builder",
  },
  {
    type: "exact",
    from: "/stop-using-google-analytics-if-you-care-about-your-page-rank",
    to: "/google-analytics-performance-impact-using-google-lighthouse",
  },
  {
    type: "exact",
    from: "/google-analytics-hurts-your-search-ranking",
    to: "/google-analytics-performance-impact-using-google-lighthouse",
  },
  {
    type: "exact",
    from: "/what-is-wrong-with-developers",
    to: "/why-simple-analytics-is-my-first-successful-project",
  },
  {
    type: "exact",
    from: "/why-you-should-reconsider-using-google-analytics",
    to: "/why-its-time-to-move-away-from-google-analytics",
  },
  {
    type: "exact",
    from: "/denmark-bans-all-google-products",
    to: "/denmark-bans-google-workspace-for-municipalities",
  },
  {
    type: "replace",
    from: "/google-analytics-countries",
    to: "/google-analytics-is-illegal-in-these-countries",
  },
  {
    type: "exact",
    from: "/denmark-bans-all-google-products",
    to: "/denmark-bans-google-workspace-for-municipalities",
  },
  {
    type: "exact",
    from: "/why-you-should-reconsider-using-google-analytics",
    to: "/why-its-time-to-move-away-from-google-analytics",
  },
  {
    type: "exact",
    from: "/google-analytics-hurts-your-search-ranking",
    to: "/google-penalizes-you-for-using-google-analytics",
  },
  {
    type: "replace",
    from: "/resources/comparions",
    to: "/resources/comparisons",
  },
  {
    type: "exact",
    from: "/stop-using-google-analytics-if-you-care-about-your-page-rank",
    to: "/google-penalizes-you-for-using-google-analytics",
  },
];

// Combine legacy locale redirects with main redirects
// Legacy locale redirects come FIRST so they are processed before generic redirects
const allRedirects = [...legacyLocaleRedirects, ...redirects];

export default defineNuxtRouteMiddleware(
  ({ path, query, hash, redirectCode }) => {
    const options = { redirectCode: redirectCode || HTTP_CODES.permanent };

    for (const redirect of allRedirects) {
      if (redirect.type === "exact" && path === redirect.from) {
        console.info("=> redirecting", path, "to", redirect.to);
        return navigateTo({ path: redirect.to, query, hash }, options);
      } else if (redirect.type === "replace" && path.includes(redirect.from)) {
        const nextPath = path.replace(redirect.from, redirect.to);
        console.info("=> redirecting", path, "to", nextPath);
        return navigateTo({ path: nextPath, query, hash }, options);
      } else if (redirect.type === "regex" && redirect.from.test(path)) {
        let nextPath = path.replace(redirect.from, redirect.to);
        if (!nextPath && redirect.fallback) nextPath = redirect.fallback;
        console.info(`=> redirecting (${redirect.from})`, path, "to", nextPath);
        return navigateTo({ path: nextPath, query, hash }, options);
      }
    }

    if (path.slice(0, 2) === "//") {
      while (path.slice(0, 2) === "//") {
        path = path.slice(1);
      }
      return navigateTo({ path, query, hash }, options);
    }
  },
);
