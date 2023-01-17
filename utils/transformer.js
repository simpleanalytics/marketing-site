export default ({ data, locale = "en", keys = [] }) => {
  const languages = {};

  const filterAttributes = (attributes) => {
    const filtered = {};
    keys.forEach((key) => {
      if (attributes[key]) filtered[key] = attributes[key];
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
    if (
      item?.attributes?.locale &&
      item?.attributes?.slug &&
      !languages[item.attributes.locale]
    ) {
      languages[item.attributes.locale] = { slug: item.attributes.slug };
    }
  }

  const preferred = ids.map((array) => {
    // Find the preferred locale
    const preferred = flattened.find(
      (article) =>
        array.includes(article.id) && article.attributes.locale === locale
    );
    if (preferred) return preferred;

    // Fallback to English
    const english = flattened.find(
      (article) =>
        array.includes(article.id) && article.attributes.locale === "en"
    );
    if (english) return english;

    // Find the first article in the array
    return flattened.find((article) => array.includes(article.id));
  });

  return preferred.map(({ attributes }) => {
    return { ...filterAttributes(attributes), languages };
  });
};
