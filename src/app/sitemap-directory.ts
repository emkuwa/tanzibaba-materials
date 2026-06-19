import type { MetadataRoute } from 'next';

const siteUrl = 'https://materials.tanzibaba.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  return [
    {
      url: `${siteUrl}/directory`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];
}
