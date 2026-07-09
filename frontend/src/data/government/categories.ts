export interface GovCategory {
  slug: string;
  name: string;
  description: string;
  pageCount: number;
}

export interface GovPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  category: string;
  readingTime: string;
  sections: GovSection[];
  faqs: { q: string; a: string }[];
  keywords: string[];
}

export interface GovSection {
  heading: string;
  body: string;
}

export interface GovOfficialLink {
  id: string;
  name: string;
  description: string;
  website: string;
  category: string;
  contact?: string;
}

export interface GovChecklist {
  slug: string;
  title: string;
  description: string;
  items: { task: string; details: string }[];
}

export interface GovLinkCategory {
  slug: string;
  name: string;
}

export const govCategories: GovCategory[] = [
  { slug: 'building-permits', name: 'Building Permits', description: 'Complete guides to building permit applications in Tanzania, Dar es Salaam, Zanzibar and Dodoma.', pageCount: 4 },
  { slug: 'land-property', name: 'Land & Property', description: 'Land acquisition, title deeds, survey procedures and property transfer processes in Tanzania.', pageCount: 4 },
  { slug: 'environment', name: 'Environmental Permits', description: 'Environmental Impact Assessment (EIA), NEMC procedures and environmental compliance for construction.', pageCount: 3 },
  { slug: 'investment', name: 'Investment Procedures', description: 'Investment guides for Tanzania and Zanzibar, business registration, tax registration and work permits.', pageCount: 3 },
  { slug: 'public-procurement', name: 'Public Procurement', description: 'Government tenders, procurement procedures, tender submission and contractor qualification.', pageCount: 3 },
  { slug: 'professional-licensing', name: 'Professional Licensing', description: 'Registration procedures for engineers, architects, surveyors and contractors in Tanzania.', pageCount: 4 },
  { slug: 'official-resources', name: 'Official Government Resources', description: 'Directory of government authorities, ministries, councils and regulatory bodies.', pageCount: 1 },
  { slug: 'checklists', name: 'Checklists', description: 'Printable checklists for building permits, land purchase, project startup and compliance.', pageCount: 6 },
];

export function getGovCategoryBySlug(slug: string) {
  return govCategories.find(c => c.slug === slug);
}
