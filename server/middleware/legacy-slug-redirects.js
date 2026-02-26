/**
 * Legacy Locale Article Redirects Middleware
 *
 * This middleware handles redirects for translated article URLs to their English equivalents.
 * It performs BOTH path structure translation AND slug translation in a single redirect.
 *
 * For example:
 *   /nl/begrippenlijst/google-analytics/attributiemodellen-in-google-analytics
 *   -> /glossary/google-analytics/attribution-models-in-google-analytics
 *
 * URL patterns by article_type:
 * - google-analytics            -> /glossary/google-analytics/{slug}
 * - analytics                   -> /glossary/analytics/{slug}
 * - google-analytics-countries  -> /google-analytics-countries/{slug}
 * - blog                        -> /blog/{slug}
 * - guide                       -> /guides/{slug}
 * - resources-alternatives      -> /resources/alternatives/{slug}
 * - resources-analytics-review  -> /resources/analytics-review/{slug}
 * - resources-analytics-pricing -> /resources/analytics-pricing/{slug}
 * - resources-comparisons       -> /resources/comparisons/{slug}
 *
 * TODO: Remove this middleware once search engines have fully re-indexed the site
 *       and traffic to translated URLs has dropped to negligible levels.
 */

import translations from "./strapi-translations.json";

// Build a lookup map: any slug (including English) -> { englishSlug, articleType }
const slugLookup = new Map();

for (const article of translations) {
  const englishSlugs = article.slugs_en;
  if (!englishSlugs || englishSlugs.length === 0) continue;

  const englishSlug = englishSlugs[0];
  const articleType = article.article_type;

  // Add ALL slugs to the lookup (including English, for path-only redirects)
  for (const slug of article.slugs_all_locales || []) {
    slugLookup.set(slug, { englishSlug, articleType });
  }
}

/**
 * Get the English URL path for a given article type and slug
 */
function getEnglishPath(articleType, slug) {
  switch (articleType) {
    case "google-analytics":
      return `/glossary/google-analytics/${slug}`;
    case "analytics":
      return `/glossary/analytics/${slug}`;
    case "google-analytics-countries":
      return `/google-analytics-countries/${slug}`;
    case "blog":
      return `/blog/${slug}`;
    case "guide":
      return `/guides/${slug}`;
    case "resources-alternatives":
      return `/resources/alternatives/${slug}`;
    case "resources-analytics-review":
      return `/resources/analytics-review/${slug}`;
    case "resources-analytics-pricing":
      return `/resources/analytics-pricing/${slug}`;
    case "resources-comparisons":
      return `/resources/comparisons/${slug}`;
    default:
      return null;
  }
}

/**
 * URL patterns to match translated article paths.
 * Each pattern extracts the slug from the URL.
 */
const patterns = [
  // ==========================================================================
  // Glossary - google-analytics & analytics categories
  // ==========================================================================
  // NL: /nl/begrippenlijst/google-analytics/{slug}
  // DE: /de/glossar/google-analytics/{slug}
  // ES: /es/glosario/google-analytics/{slug}
  // FR: /fr/glossaire/google-analytics/{slug}
  // IT: /it/glossario/google-analytics/{slug}
  {
    regex:
      /^\/(nl|de|es|fr|it)\/(begrippenlijst|glossar|glosario|glossaire|glossario)\/(google-analytics|analytics)\/([^/]+)\/?$/i,
    getSlug: (m) => m[4],
  },

  // ==========================================================================
  // Google Analytics Countries
  // ==========================================================================
  // NL: /nl/google-analytics-verboden/{slug}
  // DE: /de/google-analytics-lander/{slug}
  // ES: /es/google-analytics-paises/{slug}
  // FR: /fr/google-analytics-pays/{slug}
  // IT: /it/google-analytics-paesi/{slug}
  {
    regex:
      /^\/(nl|de|es|fr|it)\/(google-analytics-verboden|google-analytics-lander|google-analytics-paises|google-analytics-pays|google-analytics-paesi)\/([^/]+)\/?$/i,
    getSlug: (m) => m[3],
  },

  // ==========================================================================
  // Blog
  // ==========================================================================
  // All locales: /{locale}/blog/{slug}
  {
    regex: /^\/(nl|de|es|fr|it)\/blog\/([^/]+)\/?$/i,
    getSlug: (m) => m[2],
  },

  // ==========================================================================
  // Guides
  // ==========================================================================
  // NL: /nl/handleidingen/{slug}
  // DE: /de/anleitungen/{slug}
  // ES: /es/tutoriales/{slug}
  // FR: /fr/tutoriels/{slug}
  // IT: /it/guide-pratiche/{slug}
  {
    regex:
      /^\/(nl|de|es|fr|it)\/(handleidingen|anleitungen|tutoriales|tutoriels|guide-pratiche)\/([^/]+)\/?$/i,
    getSlug: (m) => m[3],
  },

  // ==========================================================================
  // Resources - Alternatives
  // ==========================================================================
  // NL: /nl/bronnen/alternatieven/{slug}
  // DE: /de/ressourcen/alternativen/{slug}
  // ES: /es/recursos/alternativas/{slug}
  // FR: /fr/ressources/alternatives/{slug}
  // IT: /it/risorse/alternative/{slug}
  {
    regex:
      /^\/(nl|de|es|fr|it)\/(bronnen|ressourcen|recursos|ressources|risorse)\/(alternatieven|alternativen|alternativas|alternatives|alternative)\/([^/]+)\/?$/i,
    getSlug: (m) => m[4],
  },

  // ==========================================================================
  // Resources - Analytics Review
  // ==========================================================================
  // NL: /nl/bronnen/analyse-beoordeling/{slug}
  // DE: /de/ressourcen/analysebewertung/{slug}
  // ES: /es/recursos/revisiones-de-analiticas/{slug}
  // FR: /fr/ressources/avis-analytiques/{slug}
  // IT: /it/risorse/recensione-analitica/{slug}
  {
    regex:
      /^\/(nl|de|es|fr|it)\/(bronnen|ressourcen|recursos|ressources|risorse)\/(analyse-beoordeling|analysebewertung|revisiones-de-analiticas|avis-analytiques|recensione-analitica)\/([^/]+)\/?$/i,
    getSlug: (m) => m[4],
  },

  // ==========================================================================
  // Resources - Analytics Pricing
  // ==========================================================================
  // NL: /nl/bronnen/analyse-prijzen/{slug}
  // DE: /de/ressourcen/analysepreise/{slug}
  // ES: /es/recursos/precios-de-analiticas/{slug}
  // FR: /fr/ressources/prix-analytiques/{slug}
  // IT: /it/risorse/prezzo-analitico/{slug}
  {
    regex:
      /^\/(nl|de|es|fr|it)\/(bronnen|ressourcen|recursos|ressources|risorse)\/(analyse-prijzen|analysepreise|precios-de-analiticas|prix-analytiques|prezzo-analitico)\/([^/]+)\/?$/i,
    getSlug: (m) => m[4],
  },

  // ==========================================================================
  // Resources - Comparisons
  // ==========================================================================
  // NL: /nl/bronnen/vergelijkingen/{slug}
  // DE: /de/ressourcen/vergleiche/{slug}
  // ES: /es/recursos/comparaciones/{slug}
  // FR: /fr/ressources/comparaisons/{slug}
  // IT: /it/risorse/confronti/{slug}
  {
    regex:
      /^\/(nl|de|es|fr|it)\/(bronnen|ressourcen|recursos|ressources|risorse)\/(vergelijkingen|vergleiche|comparaciones|comparaisons|confronti)\/([^/]+)\/?$/i,
    getSlug: (m) => m[4],
  },

  // ==========================================================================
  // English paths with non-English slugs (fallback for slug-only translation)
  // ==========================================================================
  {
    regex: /^\/glossary\/(google-analytics|analytics)\/([^/]+)\/?$/i,
    getSlug: (m) => m[2],
  },
  {
    regex: /^\/google-analytics-countries\/([^/]+)\/?$/i,
    getSlug: (m) => m[1],
  },
  {
    regex: /^\/blog\/([^/]+)\/?$/i,
    getSlug: (m) => m[1],
  },
  {
    regex: /^\/guides\/([^/]+)\/?$/i,
    getSlug: (m) => m[1],
  },
  {
    regex: /^\/resources\/alternatives\/([^/]+)\/?$/i,
    getSlug: (m) => m[1],
  },
  {
    regex: /^\/resources\/analytics-review\/([^/]+)\/?$/i,
    getSlug: (m) => m[1],
  },
  {
    regex: /^\/resources\/analytics-pricing\/([^/]+)\/?$/i,
    getSlug: (m) => m[1],
  },
  {
    regex: /^\/resources\/comparisons\/([^/]+)\/?$/i,
    getSlug: (m) => m[1],
  },
];

/**
 * Extract slug from URL path
 */
function extractSlug(path) {
  for (const pattern of patterns) {
    const match = path.match(pattern.regex);
    if (match) {
      return pattern.getSlug(match);
    }
  }
  return null;
}

export default defineEventHandler((event) => {
  const path = event.path || event.node.req.url;

  // Skip non-page requests (assets, API, etc.)
  if (path.startsWith("/_") || path.startsWith("/api/") || path.includes(".")) {
    return;
  }

  // Try to extract a slug from the path
  const slug = extractSlug(path);
  if (!slug) return;

  // Look up the slug in our translation map
  const translation = slugLookup.get(slug);
  if (!translation) return;

  // Get the canonical English path
  const englishPath = getEnglishPath(
    translation.articleType,
    translation.englishSlug,
  );
  if (!englishPath) return;

  // Don't redirect if we're already at the correct English path
  if (path === englishPath || path === englishPath + "/") return;

  // Redirect to the English version (single redirect for both path + slug)
  console.info(`=> legacy article redirect: ${path} -> ${englishPath}`);
  return sendRedirect(event, englishPath, 308);
});
