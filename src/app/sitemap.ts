import type { MetadataRoute } from 'next';
import areas, { concreteGrades, siteUrl } from '@/data/locations';
import { materialsServices, constructionServices } from '@/data/services';
import { darEsSalaamLocations, zanzibarLocations, extraLocations } from '@/data/materialsLocations';
import { tanzaniaRegions, africaCountries } from '@/data/countries';
import { generateSwahiliSlugs } from '@/data/swahili';
import { govPages } from '@/data/government/pages';
import { checklists } from '@/data/government/links';

const existingServicePages = [
  'ready-mix-concrete-dar-es-salaam',
  'concrete-supplier-dar-es-salaam',
  'ready-mix-concrete-kinondoni',
  'ready-mix-concrete-ubungo',
  'ready-mix-concrete-ilala',
  'ready-mix-concrete-temeke',
  'ready-mix-concrete-kigamboni',
  'concrete-pump-rental-dar-es-salaam',
  'c25-concrete-dar-es-salaam',
  'c30-concrete-dar-es-salaam',
  'commercial-concrete-supply-dar-es-salaam',
  'apartment-concrete-supply-dar-es-salaam',
];

const projectPages = ['vijana-towers', 'viva-towers', 'hotel-verde-zanzibar'];

const blogPages = [
  'concrete-price-guide-tanzania', 'c25-vs-c30-concrete', 'concrete-pump-guide',
  'ready-mix-concrete-for-apartments', 'foundation-concrete-guide',
  'what-is-ready-mix-concrete', 'how-concrete-is-delivered',
  'aggregate-sizes-guide', 'road-construction-materials-guide',
  'commercial-construction-guide', 'infrastructure-construction-guide',
  'building-construction-costs-tanzania', 'hotel-construction-zanzibar',
  'industrial-construction-tanzania',
];

const projectTypes = [
  'apartment-concrete-supply', 'commercial-concrete-supply', 'industrial-concrete-supply',
  'warehouse-concrete-supply', 'hotel-concrete-supply', 'hospital-concrete-supply',
  'school-concrete-supply', 'infrastructure-concrete-supply',
];

const allMaterialsLocations = [...darEsSalaamLocations, ...zanzibarLocations, ...extraLocations];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/get-quote', '/about', '/contact', '/major-projects',
    '/commercial-construction', '/commercial-construction-dar-es-salaam',
    '/commercial-construction-dodoma', '/infrastructure-construction',
    '/construction-company-dodoma', '/ready-mix-concrete-zanzibar',
    '/construction-company-zanzibar', '/construction-materials-zanzibar',
    '/ready-mix-concrete-dodoma', '/construction-company-tanzania',
    '/commercial-construction-tanzania', '/infrastructure-construction-tanzania',
    '/government-construction-projects', '/industrial-construction-tanzania',
  ];
  const today = new Date();

  const mainEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: today,
    changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
    priority: page === '' ? 1.0 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = existingServicePages.map((slug) => ({
    url: `${siteUrl}/services/${slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = projectPages.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPages.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.6,
  }));

  // Auto-generated materials pages for all locations
  const materialsEntries: MetadataRoute.Sitemap = materialsServices.flatMap(s =>
    allMaterialsLocations.map(l => ({
      url: `${siteUrl}/${s.slug}-${l.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Auto-generated Tanzania construction pages
  const tzConstructionEntries: MetadataRoute.Sitemap = constructionServices.flatMap(s =>
    tanzaniaRegions.map(r => ({
      url: `${siteUrl}/${s.slug}-${r.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Auto-generated Africa construction pages (exclude Tanzania - handled by static pages)
  const africaConstructionEntries: MetadataRoute.Sitemap = constructionServices.flatMap(s =>
    africaCountries.filter(c => c.slug !== 'tanzania').map(c => ({
      url: `${siteUrl}/${s.slug}-${c.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Granular area pages
  const areaEntries: MetadataRoute.Sitemap = [];
  for (const area of areas) {
    areaEntries.push({ url: `${siteUrl}/ready-mix-concrete-${area.slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7 });
    areaEntries.push({ url: `${siteUrl}/concrete-supplier-${area.slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.6 });
    areaEntries.push({ url: `${siteUrl}/concrete-pump-${area.slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.6 });
  }

  const gradeEntries: MetadataRoute.Sitemap = concreteGrades.map((g) => ({
    url: `${siteUrl}/c${g.grade.toLowerCase()}-concrete-dar-es-salaam`,
    lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  const projectTypeEntries: MetadataRoute.Sitemap = projectTypes.map((slug) => ({
    url: `${siteUrl}/${slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  const overviewEntries: MetadataRoute.Sitemap = [
    'gravel-supplier-dar-es-salaam', 'crushed-stone-supplier-dar-es-salaam',
    'road-construction-materials', 'kokoto-supplier-dar-es-salaam',
    'construction-materials-dar-es-salaam',
    'government-projects-tanzania', 'turnkey-construction-tanzania',
    'construction-company-east-africa', 'commercial-construction-east-africa',
    'infrastructure-projects-east-africa',
  ].map(slug => ({
    url: `${siteUrl}/${slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  const swahiliSlugs = generateSwahiliSlugs();
  const swahiliEntries: MetadataRoute.Sitemap = swahiliSlugs.map((slug) => ({
    url: `${siteUrl}/sw/${slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  const governmentEntries: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/government`, lastModified: today, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteUrl}/government/official-resources`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7 },
    ...govPages.map(p => ({ url: `${siteUrl}/government/${p.slug}` as string, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...checklists.map(c => ({ url: `${siteUrl}/government/checklist-${c.slug}` as string, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];

  return [
    ...mainEntries, ...serviceEntries, ...projectEntries, ...blogEntries,
    ...areaEntries, ...gradeEntries, ...projectTypeEntries, ...overviewEntries,
    ...materialsEntries, ...tzConstructionEntries, ...africaConstructionEntries,
    ...swahiliEntries, ...governmentEntries,
  ];
}
