import type { MetadataRoute } from 'next';

const siteUrl = 'https://materials.tanzibaba.com';

const productPages = [
  'ready-mix-concrete-dar-es-salaam',
  'ready-mix-concrete-dodoma',
  'ready-mix-concrete-zanzibar',
  'aggregates-supplier-dar-es-salaam',
  'aggregates-supplier-dodoma',
  'aggregates-supplier-zanzibar',
  'blocks-supplier-dar-es-salaam',
  'blocks-supplier-dodoma',
  'blocks-supplier-zanzibar',
  'paving-blocks-dar-es-salaam',
  'paving-blocks-dodoma',
  'paving-blocks-zanzibar',
  'culvert-pipes-dar-es-salaam',
  'culvert-pipes-dodoma',
  'culvert-pipes-zanzibar',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  return productPages.map(slug => ({
    url: `${siteUrl}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
}
