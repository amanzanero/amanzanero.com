import { sanityCmsClient } from "@/lib/sanity/client";
import { SLUGS_QUERY } from "@/lib/sanity/queries";
import { SLUGS_QUERYResult } from "@/lib/sanity/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await sanityCmsClient.fetch<SLUGS_QUERYResult>(SLUGS_QUERY);

  const staticRoutes = [
    {
      url: "https://amanzanero.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://amanzanero.com/work",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://amanzanero.com/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `https://amanzanero.com/blog/${slug.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...dynamicRoutes] as MetadataRoute.Sitemap;
}
