import type { MetadataRoute } from 'next';

const siteUrl = 'https://materials.tanzibaba.com';

const blogPages = [
  'concrete-price-guide-tanzania',
  'c25-vs-c30-concrete',
  'concrete-pump-guide',
  'ready-mix-concrete-for-apartments',
  'foundation-concrete-guide',
  'what-is-ready-mix-concrete',
  'how-concrete-is-delivered',
  'aggregate-sizes-guide',
  'road-construction-materials-guide',
  'commercial-construction-guide',
  'infrastructure-construction-guide',
  'building-construction-costs-tanzania',
  'hotel-construction-zanzibar',
  'industrial-construction-tanzania',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  return blogPages.map(slug => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
}
