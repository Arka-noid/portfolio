// Case-insensitive keyword filter used by case-study pages to pull
// their related papers out of the master publications list.
export const filterPubsByKeywords = (pubs, keywords) =>
  pubs.filter((p) =>
    keywords.some((kw) => p.title.toLowerCase().includes(kw.toLowerCase()))
  );
