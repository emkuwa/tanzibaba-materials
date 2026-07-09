export interface SEOCountry {
  slug: string;
  name: string;
  region: string;
}

export const tanzaniaRegions: SEOCountry[] = [
  { slug: 'arusha', name: 'Arusha', region: 'Tanzania' },
  { slug: 'mwanza', name: 'Mwanza', region: 'Tanzania' },
  { slug: 'mbeya', name: 'Mbeya', region: 'Tanzania' },
  { slug: 'morogoro', name: 'Morogoro', region: 'Tanzania' },
  { slug: 'tanga', name: 'Tanga', region: 'Tanzania' },
  { slug: 'pwani', name: 'Pwani', region: 'Tanzania' },
  { slug: 'dodoma', name: 'Dodoma', region: 'Tanzania' },
  { slug: 'kilimanjaro', name: 'Kilimanjaro', region: 'Tanzania' },
  { slug: 'manyara', name: 'Manyara', region: 'Tanzania' },
  { slug: 'singida', name: 'Singida', region: 'Tanzania' },
  { slug: 'tabora', name: 'Tabora', region: 'Tanzania' },
  { slug: 'shinyanga', name: 'Shinyanga', region: 'Tanzania' },
  { slug: 'geita', name: 'Geita', region: 'Tanzania' },
  { slug: 'kagera', name: 'Kagera', region: 'Tanzania' },
  { slug: 'mara', name: 'Mara', region: 'Tanzania' },
  { slug: 'simiyu', name: 'Simiyu', region: 'Tanzania' },
  { slug: 'katavi', name: 'Katavi', region: 'Tanzania' },
  { slug: 'njombe', name: 'Njombe', region: 'Tanzania' },
  { slug: 'iringa', name: 'Iringa', region: 'Tanzania' },
  { slug: 'ruvuma', name: 'Ruvuma', region: 'Tanzania' },
  { slug: 'mtwara', name: 'Mtwara', region: 'Tanzania' },
  { slug: 'lindi', name: 'Lindi', region: 'Tanzania' },
  { slug: 'songwe', name: 'Songwe', region: 'Tanzania' },
];

export const africaCountries: SEOCountry[] = [
  { slug: 'tanzania', name: 'Tanzania', region: 'East Africa' },
  { slug: 'kenya', name: 'Kenya', region: 'East Africa' },
  { slug: 'uganda', name: 'Uganda', region: 'East Africa' },
  { slug: 'rwanda', name: 'Rwanda', region: 'East Africa' },
  { slug: 'burundi', name: 'Burundi', region: 'East Africa' },
  { slug: 'south-sudan', name: 'South Sudan', region: 'East Africa' },
  { slug: 'dr-congo', name: 'DR Congo', region: 'Central Africa' },
  { slug: 'ethiopia', name: 'Ethiopia', region: 'Horn of Africa' },
  { slug: 'somalia', name: 'Somalia', region: 'Horn of Africa' },
  { slug: 'zambia', name: 'Zambia', region: 'Southern Africa' },
  { slug: 'malawi', name: 'Malawi', region: 'Southern Africa' },
  { slug: 'mozambique', name: 'Mozambique', region: 'Southern Africa' },
];

export function getCountryBySlug(slug: string): SEOCountry | undefined {
  return africaCountries.find(c => c.slug === slug);
}

export function getRegionBySlug(slug: string): SEOCountry | undefined {
  return tanzaniaRegions.find(r => r.slug === slug);
}
