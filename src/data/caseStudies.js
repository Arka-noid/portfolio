export const publishedCaseStudySlugs = [];

export function isCaseStudyPublished(slug) {
  return publishedCaseStudySlugs.includes(slug);
}

export function isPublishedWorkPath(path) {
  const caseStudyPath = /^\/work\/([^/]+)$/.exec(path);
  return !caseStudyPath || isCaseStudyPublished(caseStudyPath[1]);
}