// Swahili slug mappings — maps each English slug pattern to natural Swahili
// Uses real Tanzania search language (mixed English/Swahili, not dictionary-only)

export interface SwahiliMapping {
  swSlug: string;
  enSlug: string;
  title: string;
  h1: string;
  desc: string;
}

// Service type translations
export const swahiliServiceMap: Record<string, { sw: string; title: string; desc: (loc: string) => string }> = {
  'ready-mix-concrete': {
    sw: 'saruji-tayari',
    title: 'Saruji Tayari (Ready-Mix Concrete)',
    desc: (loc) => `Tunauza saruji tayari (ready-mix concrete) ${loc}. Grades C10 hadi C50 — zege yenye quality kwa ajili ya ujenzi wa nyumba, majengo ya biashara, na miradi ya miundombinu.`,
  },
  'aggregates-supplier': {
    sw: 'muuzaji-wa-kokoto',
    title: 'Kokoto na Aggregates (Gravel Supplier)',
    desc: (loc) => `Tunauza kokoto, gravel, crusher dust, na road base ${loc}. Quality materials kwa ajili ya ujenzi wa barabara, nyumba, na miradi mikubwa ya construction.`,
  },
  'blocks-supplier': {
    sw: 'matofali-ya-saruji',
    title: 'Matofali ya Saruji (Concrete Blocks)',
    desc: (loc) => `Tunauza matofali ya saruji ${loc} — hollow blocks, solid blocks, na interlocking blocks. Quality blocks kwa ajili ya kuta, fencing, na ujenzi wa majengo.`,
  },
  'paving-blocks': {
    sw: 'paving-blocks', // Same in common usage
    title: 'Paving Blocks na Paver Tiles',
    desc: (loc) => `Tunauza paving blocks, paver tiles, na kerbstones ${loc} kwa ajili ya driveway, walkways, na landscaping. Quality interlocking blocks za kudumu.`,
  },
  'culvert-pipes': {
    sw: 'mabomba-ya-zege',
    title: 'Mabomba ya Zege (Culvert Pipes)',
    desc: (loc) => `Tunauza mabomba ya zege ${loc} — round pipes na box culverts kwa ajili ya drainage, road crossings, na miradi ya miundombinu.`,
  },
  'construction-company': {
    sw: 'kampuni-ya-ujenzi',
    title: 'Kampuni ya Ujenzi (Construction Company)',
    desc: (loc) => `Tanzibaba ni kampuni ya ujenzi ${loc}. Tunafanya ujenzi wa majengo ya biashara, viwanda, barabara, na miradi ya serikali. Class 1 contractor — quality na reliability.`,
  },
  'commercial-construction': {
    sw: 'ujenzi-wa-majengo-ya-biashara',
    title: 'Ujenzi wa Majengo ya Biashara (Commercial Construction)',
    desc: (loc) => `Tunafanya ujenzi wa majengo ya biashara ${loc} — office complexes, retail centres, hotels, na mixed-use developments. Quality commercial construction services.`,
  },
  'industrial-construction': {
    sw: 'ujenzi-wa-viwanda',
    title: 'Ujenzi wa Viwanda (Industrial Construction)',
    desc: (loc) => `Tunafanya ujenzi wa viwanda ${loc} — manufacturing plants, warehouses, processing facilities, na industrial infrastructure. Industrial construction experts.`,
  },
  'infrastructure-construction': {
    sw: 'ujenzi-wa-miundombinu',
    title: 'Ujenzi wa Miundombinu (Infrastructure Construction)',
    desc: (loc) => `Tunafanya ujenzi wa miundombinu ${loc} — barabara, madaraja, drainage systems, na public utilities. Infrastructure construction across Tanzania na East Africa.`,
  },
};

// Special page translations
export const swahiliSpecialPages: Record<string, SwahiliMapping> = {
  'government-projects-tanzania': {
    swSlug: 'miradi-ya-serikali-tanzania',
    enSlug: 'government-projects-tanzania',
    title: 'Miradi ya Serikali Tanzania — Government Projects',
    h1: 'Miradi ya Serikali Tanzania',
    desc: 'Tunafanya miradi ya serikali Tanzania — majengo ya umma, institutional facilities, na government infrastructure. Class 1 contractor kwa ajili ya miradi ya serikali.',
  },
  'turnkey-construction-tanzania': {
    swSlug: 'ujenzi-kamili-tanzania',
    enSlug: 'turnkey-construction-tanzania',
    title: 'Ujenzi Kamili Tanzania — Turnkey Construction',
    h1: 'Ujenzi Kamili Tanzania',
    desc: 'Tunatoa ujenzi kamili (turnkey construction) Tanzania — kutoka design mpaka handover. Commercial, industrial, na infrastructure projects.',
  },
};

// Generate all Swahili slugs
import { materialsServices, constructionServices } from './services';
import { allMaterialsLocations } from './materialsLocations';
import { tanzaniaRegions, africaCountries } from './countries';

export function generateSwahiliSlugs(): string[] {
  const slugs: string[] = [];

  // Materials + locations
  for (const ms of materialsServices) {
    const sw = swahiliServiceMap[ms.slug]?.sw;
    if (sw) {
      for (const loc of allMaterialsLocations) {
        slugs.push(`${sw}-${loc.slug}`);
      }
    }
  }

  // Construction + Tanzania regions
  for (const cs of constructionServices) {
    const sw = swahiliServiceMap[cs.slug]?.sw;
    if (sw) {
      for (const region of tanzaniaRegions) {
        slugs.push(`${sw}-${region.slug}`);
      }
    }
  }

  // Construction + Africa countries (excluding Tanzania — handled by static pages)
  for (const cs of constructionServices) {
    const sw = swahiliServiceMap[cs.slug]?.sw;
    if (sw) {
      for (const country of africaCountries.filter(c => c.slug !== 'tanzania')) {
        slugs.push(`${sw}-${country.slug}`);
      }
    }
  }

  // Special pages
  for (const sp of Object.values(swahiliSpecialPages)) {
    slugs.push(sp.swSlug);
  }

  // East Africa general pages
  slugs.push('kampuni-ya-ujenzi-east-africa');
  slugs.push('ujenzi-wa-majengo-ya-biashara-east-africa');
  slugs.push('ujenzi-wa-miundombinu-east-africa');

  return slugs;
}

export function parseSwahiliSlug(swSlug: string): {
  enServiceSlug: string;
  enLocationSlug: string;
  serviceType: 'materials' | 'construction' | 'special' | 'east-africa';
  locationName: string;
} | null {
  // Check special pages
  for (const sp of Object.values(swahiliSpecialPages)) {
    if (swSlug === sp.swSlug) {
      return { enServiceSlug: sp.enSlug, enLocationSlug: '', serviceType: 'special', locationName: 'Tanzania' };
    }
  }

  // Check East Africa pages
  const eaMap: Record<string, string> = {
    'kampuni-ya-ujenzi-east-africa': 'construction-company',
    'ujenzi-wa-majengo-ya-biashara-east-africa': 'commercial-construction',
    'ujenzi-wa-miundombinu-east-africa': 'infrastructure-construction',
  };
  if (eaMap[swSlug]) {
    return { enServiceSlug: eaMap[swSlug], enLocationSlug: 'east-africa', serviceType: 'east-africa', locationName: 'East Africa' };
  }

  // Find matching Swahili service prefix
  for (const [enSlug, swData] of Object.entries(swahiliServiceMap)) {
    if (swSlug.startsWith(`${swData.sw}-`)) {
      const rest = swSlug.replace(`${swData.sw}-`, '');
      return { enServiceSlug: enSlug, enLocationSlug: rest, serviceType: enSlug.startsWith('construction') || enSlug.startsWith('commercial') || enSlug.startsWith('industrial') || enSlug.startsWith('infrastructure') ? 'construction' : 'materials', locationName: '', };
    }
  }

  return null;
}

export function getSwahiliServiceData(enSlug: string) {
  return swahiliServiceMap[enSlug] || null;
}

export function getSwahiliSlug(enSlug: string): string | null {
  // Check special pages first
  for (const sp of Object.values(swahiliSpecialPages)) {
    if (enSlug === sp.enSlug) return sp.swSlug;
  }
  // Check East Africa pages
  const eaMap: Record<string, string> = {
    'construction-company-east-africa': 'kampuni-ya-ujenzi-east-africa',
    'commercial-construction-east-africa': 'ujenzi-wa-majengo-ya-biashara-east-africa',
    'infrastructure-construction-east-africa': 'ujenzi-wa-miundombinu-east-africa',
  };
  if (eaMap[enSlug]) return eaMap[enSlug];
  // Replace service prefix with Swahili equivalent
  for (const [enPrefix, swData] of Object.entries(swahiliServiceMap)) {
    if (enSlug.startsWith(`${enPrefix}-`)) {
      const location = enSlug.replace(`${enPrefix}-`, '');
      return `${swData.sw}-${location}`;
    }
  }
  return null;
}
