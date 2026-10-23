export const editorialPageSlugs = [
  "about",
  "expertise",
  "services",
  "contact",
] as const;

export type EditorialPageSlug = (typeof editorialPageSlugs)[number];
