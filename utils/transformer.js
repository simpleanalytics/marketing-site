// "coverImageWithoutText": {
//   "data": {
//     "id": 80,
//     "attributes": {
//       "name": "google-analytics-banned-in-europe-no-text.png",
//       "alternativeText": null,
//       "caption": null,
//       "width": 1012,
//       "height": 506,
//       "formats": {
//         "large": {
//           "ext": ".png",
//           "url": "https://cms-assets.simpleanalytics.com/large_google_analytics_banned_in_europe_no_text_38ddd345d0.png",
//           "hash": "large_google_analytics_banned_in_europe_no_text_38ddd345d0",
//           "mime": "image/png",
//           "name": "large_google-analytics-banned-in-europe-no-text.png",
//           "path": null,
//           "size": 96.95,
//           "width": 1000,
//           "height": 500
//         },
//         "small": {
//           "ext": ".png",
//           "url": "https://cms-assets.simpleanalytics.com/small_google_analytics_banned_in_europe_no_text_38ddd345d0.png",
//           "hash": "small_google_analytics_banned_in_europe_no_text_38ddd345d0",
//           "mime": "image/png",
//           "name": "small_google-analytics-banned-in-europe-no-text.png",
//           "path": null,
//           "size": 36.18,
//           "width": 500,
//           "height": 250
//         },
//         "medium": {
//           "ext": ".png",
//           "url": "https://cms-assets.simpleanalytics.com/medium_google_analytics_banned_in_europe_no_text_38ddd345d0.png",
//           "hash": "medium_google_analytics_banned_in_europe_no_text_38ddd345d0",
//           "mime": "image/png",
//           "name": "medium_google-analytics-banned-in-europe-no-text.png",
//           "path": null,
//           "size": 67.25,
//           "width": 750,
//           "height": 375
//         },
//         "thumbnail": {
//           "ext": ".png",
//           "url": "https://cms-assets.simpleanalytics.com/thumbnail_google_analytics_banned_in_europe_no_text_38ddd345d0.png",
//           "hash": "thumbnail_google_analytics_banned_in_europe_no_text_38ddd345d0",
//           "mime": "image/png",
//           "name": "thumbnail_google-analytics-banned-in-europe-no-text.png",
//           "path": null,
//           "size": 13.3,
//           "width": 245,
//           "height": 123
//         }
//       },
//       "hash": "google_analytics_banned_in_europe_no_text_38ddd345d0",
//       "ext": ".png",
//       "mime": "image/png",
//       "size": 20.07,
//       "url": "https://cms-assets.simpleanalytics.com/google_analytics_banned_in_europe_no_text_38ddd345d0.png",
//       "previewUrl": null,
//       "provider": "strapi-provider-upload-bunny",
//       "provider_metadata": null,
//       "createdAt": "2023-01-24T06:54:45.604Z",
//       "updatedAt": "2023-01-24T06:54:45.604Z"
//     }
//   }
// }

const getMedia = (media) => {
  const formats = media?.data?.attributes?.formats;
  if (!formats) return null;

  const { alternativeText, caption, name, url, provider_metadata } =
    media.data.attributes;

  const alt = alternativeText
    ? alternativeText
    : caption
      ? caption
      : name
        ? name
            .replace(/(\-no\-text|\-text)/g, "")
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        : null;

  const small = formats.small?.url;
  const medium = formats.medium?.url;
  const large = formats.large?.url;

  return {
    alt,
    caption,
    small,
    medium,
    large,
    original: url,
    averageColorHex: provider_metadata?.meta?.averageColorHex,
    isDark: provider_metadata?.meta?.averageColorBrightness < 256 / 2,
  };
};

const getCover = ({ coverImageWithText, coverImageWithoutText }) => {
  if (coverImageWithoutText) return coverImageWithoutText;
  if (coverImageWithText) return coverImageWithText;
  return null;
};

export default ({ data, locale = "en", keys = [], limit }) => {
  const languages = {
    en: {},
    de: {},
    fr: {},
    it: {},
    es: {},
    nl: {},
  };

  const filterAttributes = (attributes) => {
    const filtered = {};
    keys.forEach((key) => {
      if (typeof attributes[key] !== "undefined" && attributes[key] !== null)
        filtered[key] = attributes[key];
    });
    return filtered;
  };

  // Reduce all ids to an array
  const ids = data.reduce((list, article) => {
    // Find array within array with locale
    const found = list.find((array) => array.includes(article.id));
    if (found) found.push(article.id);
    else list.push([article.id]);

    if (article.attributes.localizations.data.length > 0) {
      article.attributes.localizations.data.forEach((localization) => {
        const found = list.find((array) => array.includes(article.id));
        if (found) found.push(localization.id);
        else list.push([localization.id]);
      });
    }
    return list;
  }, []);

  // Flatten articles and localizations
  const flattened = data.reduce((acc, article) => {
    if (article.attributes.localizations.data.length > 0) {
      article.attributes.localizations.data.forEach((localization) => {
        acc.push({ ...localization, rootId: article.id });
      });
    }
    delete article.attributes.localizations;
    acc.push({ ...article, rootId: article.id });
    return acc;
  }, []);

  for (const item of flattened) {
    if (item?.attributes?.locale && item?.attributes?.slug) {
      languages[item.attributes.locale] = { slug: item.attributes.slug };
    }
  }

  const preferred = ids.map((array) => {
    // Get all articles with the same id
    const articles = flattened.filter((article) => array.includes(article.id));

    if (articles.length === 0) return null;
    if (articles.length === 1) {
      const article = articles[0];
      if (article.attributes.locale === locale) return article;
      if (article.attributes.locale === "en") return article;
      return null;
    }

    // Get English version to find the publishAt date
    const inEnglish = articles.find(
      ({ attributes }) => attributes.locale === "en",
    );

    // Find the preferred locale
    const inLocale = articles.find(
      ({ attributes }) => attributes.locale === locale,
    );

    if (inLocale) {
      return {
        ...inLocale,
        note: {
          inEnglish: inEnglish.attributes.publishedAt,
          inLocale: inLocale.attributes.publishedAt,
        },
        attributes: {
          ...inLocale.attributes,
          publishedAt:
            inEnglish?.attributes?.publishedAt ||
            inLocale.attributes.publishedAt,
        },
      };
    }

    // Fallback to English
    if (inEnglish) return inEnglish;

    // Find the first article in the array
    return articles[0];
  });

  // Sort by publishedAt strings converted to dates
  preferred.sort((a, b) => {
    if (!a?.attributes?.publishedAt || !b?.attributes?.publishedAt) return 0;
    const aDate = new Date(a.attributes.publishedAt);
    const bDate = new Date(b.attributes.publishedAt);
    return bDate - aDate;
  });

  return preferred
    .filter(Boolean)
    .map(({ attributes }) => {
      if (keys.includes("coverImageWithoutText"))
        attributes.coverImageWithoutText = getMedia(
          attributes.coverImageWithoutText,
        );

      if (keys.includes("coverImageWithText"))
        attributes.coverImageWithText = getMedia(attributes.coverImageWithText);

      if (attributes.coverImageWithText || attributes.coverImageWithoutText) {
        keys.push("cover");
        attributes.cover = getCover({
          coverImageWithText: attributes.coverImageWithText,
          coverImageWithoutText: attributes.coverImageWithoutText,
        });
      }

      if (!keys.includes("languages")) return filterAttributes(attributes);

      if (languages.en?.slug) {
        for (const key in languages) {
          if (languages[key].slug) continue;
          languages[key].slug = languages.en.slug;
        }
      }

      return { ...filterAttributes(attributes), languages };
    })
    .slice(0, Math.min(Math.abs(limit) || 10000));
};
