import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { locales } from "@/lib/i18n";
import { editorialPageSlugs } from "@/lib/pages";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...locales.map((locale) => ({
      url: `${siteUrl}/${locale}`,
      alternates: {
        languages: {
          fr: `${siteUrl}/fr`,
          en: `${siteUrl}/en`,
          "x-default": `${siteUrl}/fr`,
        },
      },
      priority: 1,
    })),
    ...locales.flatMap((locale) =>
      editorialPageSlugs.map((page) => ({
        url: `${siteUrl}/${locale}/${page}`,
        alternates: {
          languages: {
            fr: `${siteUrl}/fr/${page}`,
            en: `${siteUrl}/en/${page}`,
          },
        },
        priority: 0.8,
      })),
    ),
    ...locales.flatMap((locale) =>
      projects.map((project) => ({
        url: `${siteUrl}/${locale}/projects/${project.slug}`,
        alternates: {
          languages: {
            fr: `${siteUrl}/fr/projects/${project.slug}`,
            en: `${siteUrl}/en/projects/${project.slug}`,
          },
        },
        priority: 0.7,
      })),
    ),
  ];
}
