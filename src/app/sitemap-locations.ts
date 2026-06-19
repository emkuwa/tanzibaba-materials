import type { MetadataRoute } from 'next';

const siteUrl = 'https://materials.tanzibaba.com';

const locationPages = [
  'ready-mix-concrete-kinondoni',
  'ready-mix-concrete-ubungo',
  'ready-mix-concrete-ilala',
  'ready-mix-concrete-temeke',
  'ready-mix-concrete-kigamboni',
  'commercial-construction-dar-es-salaam',
  'commercial-construction-dodoma',
  'commercial-construction-tanzania',
  'infrastructure-construction-tanzania',
  'industrial-construction-tanzania',
  'construction-company-dodoma',
  'construction-company-tanzania',
  'construction-company-zanzibar',
  'construction-materials-zanzibar',
  'government-construction-projects',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  return locationPages.map(slug => ({
    url: `${siteUrl}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
}
