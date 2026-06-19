export interface KnowledgeCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  articleCount?: number;
}

export const knowledgeCategories: KnowledgeCategory[] = [
  { slug: 'construction-guides', name: 'Construction Guides', description: 'Step-by-step guides covering the full construction process from planning to completion.', icon: 'HardHat' },
  { slug: 'ready-mix-concrete-academy', name: 'Ready Mix Concrete Academy', description: 'In-depth guides on ready-mix concrete, grades, testing, curing and quality control.', icon: 'Zap' },
  { slug: 'aggregates-gravel-academy', name: 'Aggregates & Gravel Academy', description: 'Learn about aggregates, gravel sizes, crusher dust, road base and their role in construction.', icon: 'Mountain' },
  { slug: 'blocks-paving-academy', name: 'Blocks & Paving Academy', description: 'Complete guides on concrete blocks, paving blocks, design ideas and installation.', icon: 'Grid3x3' },
  { slug: 'infrastructure-academy', name: 'Infrastructure Academy', description: 'Knowledge resources on roads, bridges, drainage and public infrastructure construction.', icon: 'Route' },
  { slug: 'commercial-construction-academy', name: 'Commercial Construction Academy', description: 'Guides on commercial building construction, project management and best practices.', icon: 'Building2' },
  { slug: 'industrial-construction-academy', name: 'Industrial Construction Academy', description: 'Resources on industrial facilities, warehousing, processing plants and heavy construction.', icon: 'Factory' },
];

export function getCategoryBySlug(slug: string): KnowledgeCategory | undefined {
  return knowledgeCategories.find(c => c.slug === slug);
}
