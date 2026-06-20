import type { MetadataRoute } from 'next';
import areas, { concreteGrades, siteUrl } from '@/data/locations';
import { materialsServices, constructionServices } from '@/data/services';
import { darEsSalaamLocations, zanzibarLocations, extraLocations } from '@/data/materialsLocations';
import { tanzaniaRegions, africaCountries } from '@/data/countries';
import { generateSwahiliSlugs } from '@/data/swahili';
import { govPages } from '@/data/government/pages';
import { checklists } from '@/data/government/links';
import { allArticles } from '@/data/knowledge/articles';

const projectTypes = [
  'apartment-concrete-supply', 'commercial-concrete-supply', 'industrial-concrete-supply',
  'warehouse-concrete-supply', 'hotel-concrete-supply', 'hospital-concrete-supply',
  'school-concrete-supply', 'infrastructure-concrete-supply',
];

const allMaterialsLocations = [...darEsSalaamLocations, ...zanzibarLocations, ...extraLocations];

// === Segmented sitemap data (consolidated from individual sitemap files) ===

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
  const staticPages = ['', '/get-quote', '/about', '/contact', '/major-projects',
    '/tools', '/directory', '/learn',
    '/commercial-construction',
  ];
  const today = new Date();

  const mainEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: today,
    changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
    priority: page === '' ? 1.0 : 0.8,
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

  // === Segmented sitemap entries (consolidated) ===

  const productEntries: MetadataRoute.Sitemap = productPages.map(slug => ({
    url: `${siteUrl}/${slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = locationPages.map(slug => ({
    url: `${siteUrl}/${slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  const directoryEntries: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/directory`, lastModified: today, changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  const learnEntries: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/learn`, lastModified: today, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...allArticles.map(a => ({
      url: `${siteUrl}/learn/${a.slug}`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.7,
    })),
  ];

  return [
    ...mainEntries,
    ...areaEntries, ...gradeEntries, ...projectTypeEntries, ...overviewEntries,
    ...materialsEntries, ...tzConstructionEntries, ...africaConstructionEntries,
    ...swahiliEntries, ...governmentEntries,
    ...productEntries, ...locationEntries, ...directoryEntries,
    ...learnEntries,
  ];
}
