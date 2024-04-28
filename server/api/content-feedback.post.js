import DiffMatchPatch from "diff-match-patch";
import { stringify as qsStringify } from "qs";

const users = {
  adriaan: "61c34c21bcc1486f8969d7ef",
  carlo: "6128e08da90a3d7079d04287",
  iron: "61c9f06c529cb30e657782f6",
};

const lists = {
  typosAndGrammar: "63d3e484b20b844b3cbff691",
};

export default defineEventHandler(async (event) => {
  const { trelloPersonalKey, trelloPersonalToken, strapiToken } =
    useRuntimeConfig();

  const {
    url: location,
    original: originalRaw,
    suggestion: suggestionRaw,
    articleId,
  } = await readBody(event);

  // Remove new lines
  const original = originalRaw?.replace(/\n/g, " ");
  const suggestion = suggestionRaw?.replace(/\n/g, " ");

  const cmsUrl = new URL(
    `/api/articles/${articleId}`,
    "https://cms.simpleanalytics.com",
  );
  const cmsParams = {
    fields: ["id", "title", "slug", "authorSlug", "locale"],
  };
  cmsUrl.search = qsStringify(cmsParams, { encodeValuesOnly: true });
  const cmsResponse = articleId
    ? await $fetch(cmsUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${strapiToken}`,
        },
      })
    : null;

  const author = cmsResponse?.data?.attributes?.authorSlug;
  const locale = cmsResponse?.data?.attributes?.locale;
  const title = cmsResponse?.data?.attributes?.title;

  const headers = {
    "Content-Type": "application/json",
  };

  const dmp = new DiffMatchPatch();
  const diff = dmp.diff_main(original, suggestion);
  dmp.diff_cleanupSemantic(diff);

  // Reduce the diff to a single string in markdown format
  const markdown = diff.reduce((markdown, [operation, text]) => {
    switch (operation) {
      case -1:
        return `${markdown}~~${text}~~`;
      case 1:
        return `${markdown}**${text}**`;
      case 0:
        return `${markdown}${text}`;
    }
  }, "");

  const idMember =
    locale === "it"
      ? users.carlo
      : author?.includes("adriaan")
        ? users.adriaan
        : author?.includes("carlo")
          ? users.carlo
          : users.iron;

  const cms = `https://cms.simpleanalytics.com/admin/content-manager/collection-types/api::article.article/${articleId}`;

  const changes = diff.reduce((changes, [operation, text]) => {
    if (operation === 0) return changes;
    return changes + 1;
  }, 0);

  const description = [
    `### ${changes} changes`,
    "",
    markdown,
    "",
    "### Suggestion",
    `> ${suggestion}`,
    "",
    articleId || location ? "### Links" : null,
    articleId || location ? "" : null,
    articleId ? `- [Update article #${articleId} in our CMS](${cms})` : null,
    location ? `- [Reported on this page](${location})` : null,
  ].filter((line) => line !== null);

  const card = {
    pos: "top",
    name: `${changes} changes in ${title ? `"${title}"` : "content"}${
      locale ? ` (${locale})` : ""
    }`,
    desc: description.join("\n"),
    idMembers: [idMember],
    idList: lists.typosAndGrammar,
  };

  const url = new URL("/1/cards", "https://api.trello.com");
  const searchParams = new URLSearchParams(card);
  searchParams.set("key", trelloPersonalKey);
  searchParams.set("token", trelloPersonalToken);
  url.search = searchParams.toString();

  const response = await $fetch(url, { method: "POST", headers });
  return response?.id ? { ok: true } : { ok: false };
});
