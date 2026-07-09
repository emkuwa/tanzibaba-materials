export interface MaterialsService {
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  icon: string;
  desc: string;
  metaDescBase: string;
  keywords: string[];
}

export interface ConstructionService {
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  icon: string;
  desc: string;
  capabilities: string[];
  keywords: string[];
  faqQ: (loc: string) => string;
  faqA: (loc: string) => string;
}

export const materialsServices: MaterialsService[] = [
  {
    slug: 'ready-mix-concrete', name: 'Ready-Mix Concrete', shortName: 'Ready-Mix Concrete', badge: 'Ready-Mix Concrete', icon: 'Truck',
    desc: 'supplies premium ready-mix concrete using washed sand technology with grades C10 to C50',
    metaDescBase: 'Ready-mix concrete supply in {location}. Grades C10 to C50 with washed sand technology.',
    keywords: ['ready mix concrete', 'zege', 'zege supplier', 'concrete supplier', 'concrete company', 'concrete distributor', 'concrete delivery', 'concrete dar es salaam', 'zege delivery', 'concrete na kokoto', 'msambazaji wa zege', 'concrete company tanzania', 'concrete price tanzania', 'zege dar es salaam', 'concrete Zanzibar', 'concrete Dodoma'],
  },
  {
    slug: 'aggregates-supplier', name: 'Aggregates Supply', shortName: 'Aggregates', badge: 'Aggregates Supplier', icon: 'Package',
    desc: 'supplies construction aggregates including gravel, crushed stone, kokoto, and base course materials from quality-controlled production',
    metaDescBase: 'Construction aggregates supply in {location}. Gravel, crushed stone, kokoto and base course materials.',
    keywords: ['kokoto', 'kokoto supplier', 'aggregates supplier', 'gravel supplier', 'crusher dust', 'road base', 'msambazaji wa kokoto', 'kokoto dar es salaam', 'kokoto Zanzibar', 'gravel tanzania', 'aggregates tanzania', 'crushed stone dar', 'kokoto na concrete', 'kokoto kwa ujenzi', 'building materials tanzania'],
  },
  {
    slug: 'blocks-supplier', name: 'Blocks Supply', shortName: 'Blocks', badge: 'Blocks Supplier', icon: 'HardHat',
    desc: 'supplies quality concrete blocks including hollow blocks, solid blocks, and interlocking blocks for walls and construction',
    metaDescBase: 'Concrete blocks supply in {location}. Hollow blocks, solid blocks and interlocking blocks.',
    keywords: ['concrete blocks', 'hollow blocks', 'solid blocks', 'blocks supplier', 'msambazaji wa blocks', 'blocks dar es salaam', 'block tanzania', 'hollow block price', 'blocks kwa ujenzi', 'concrete blocks tanzania', 'building blocks dar', 'block supplier tanzania', 'blocks na concrete', 'block Zanzibar'],
  },
  {
    slug: 'paving-blocks', name: 'Paving Blocks', shortName: 'Paving Blocks', badge: 'Paving Blocks Supplier', icon: 'Grid',
    desc: 'supplies quality interlocking paving blocks, paver tiles, and kerbstones for driveways, walkways, and landscaping',
    metaDescBase: 'Paving blocks supply in {location}. Interlocking paving blocks, paver tiles and kerbstones.',
    keywords: ['paving blocks', 'pavers tanzania', 'interlocking blocks', 'kerbstones', 'paving blocks dar es salaam', 'blocks na paving', 'paving stones tanzania', 'paver tiles dar', 'driveway blocks tanzania', 'landscaping materials tanzania', 'paving blocks Zanzibar'],
  },
  {
    slug: 'culvert-pipes', name: 'Culvert Pipes', shortName: 'Culvert Pipes', badge: 'Culvert Pipes Supplier', icon: 'CircleDot',
    desc: 'supplies concrete culvert pipes and box culverts for drainage, road crossings, and infrastructure projects',
    metaDescBase: 'Concrete culvert pipes supply in {location}. Round pipes and box culverts for drainage.',
    keywords: ['culvert pipes', 'culvert pipes dar es salaam', 'drainage pipes tanzania', 'box culverts', 'concrete pipes tanzania', 'road culverts', 'msambazaji wa mifereji', 'culvert pipes Zanzibar', 'drainage materials tanzania', 'building materials dar', 'infrastructure materials tanzania'],
  },
];

export const constructionServices: ConstructionService[] = [
  {
    slug: 'construction-company', name: 'Construction Company', shortName: 'Construction', badge: 'Construction Company', icon: 'Building2',
    desc: 'delivers commercial, industrial and infrastructure construction projects',
    capabilities: ['Commercial Buildings', 'Industrial Facilities', 'Infrastructure Projects', 'Government Projects', 'Turnkey Construction', 'Regional Project Support'],
    keywords: ['construction company', 'kampuni ya ujenzi', 'building contractor', 'class 1 contractor', 'commercial construction', 'infrastructure contractor', 'kampuni ya ujenzi dar es salaam', 'construction company tanzania', 'ujenzi wa majengo', 'contractor tanzania', 'general contractor dar', 'ujenzi wa barabara', 'construction dar es salaam', 'building contractor tanzania', 'mkandarasi tanzania', 'construction company kenya', 'construction company uganda'],
    faqQ: (l) => `What construction services does Tanzibaba offer in ${l}?`,
    faqA: (l) => `Tanzibaba offers commercial buildings, industrial facilities, infrastructure projects, government projects and turnkey construction in ${l}. Primary operations in Dar es Salaam, Zanzibar and Dodoma with regional project support available.`,
  },
  {
    slug: 'commercial-construction', name: 'Commercial Construction', shortName: 'Commercial Construction', badge: 'Commercial Construction', icon: 'Building2',
    desc: 'delivers commercial construction projects including office complexes, retail centres, hotels and mixed-use developments',
    capabilities: ['Office Complexes', 'Retail Centers', 'Hotels & Hospitality', 'Mixed-Use Developments', 'Commercial Infrastructure'],
    keywords: ['commercial construction', 'ujenzi wa majengo ya biashara', 'office construction tanzania', 'retail construction', 'hotel construction tanzania', 'commercial contractor dar', 'ujenzi wa maduka', 'hotel building tanzania', 'mixed use development tanzania', 'commercial construction kenya'],
    faqQ: (l) => `Does Tanzibaba undertake commercial construction projects in ${l}?`,
    faqA: (l) => `Yes, Tanzibaba delivers commercial construction projects in ${l} including office complexes, retail centres, hotels and mixed-use developments. Primary operations in Dar es Salaam, Zanzibar and Dodoma.`,
  },
  {
    slug: 'industrial-construction', name: 'Industrial Construction', shortName: 'Industrial Construction', badge: 'Industrial Construction', icon: 'Factory',
    desc: 'delivers industrial construction projects including manufacturing plants, warehouses, processing facilities and industrial infrastructure',
    capabilities: ['Manufacturing Plants', 'Warehouses & Logistics', 'Processing Facilities', 'Industrial Infrastructure', 'Equipment Foundations'],
    keywords: ['industrial construction', 'ujenzi wa viwanda', 'factory construction tanzania', 'warehouse construction', 'manufacturing plant tanzania', 'industrial contractor dar', 'ujenzi wa kiwanda', 'warehouse building tanzania', 'processing facilities tanzania', 'industrial construction kenya'],
    faqQ: (l) => `Does Tanzibaba undertake industrial construction projects in ${l}?`,
    faqA: (l) => `Yes, Tanzibaba delivers industrial construction projects in ${l} including manufacturing plants, warehouses, processing facilities and industrial infrastructure.`,
  },
  {
    slug: 'infrastructure-construction', name: 'Infrastructure Construction', shortName: 'Infrastructure Construction', badge: 'Infrastructure Construction', icon: 'HardHat',
    desc: 'delivers infrastructure construction projects including road networks, bridges, drainage systems and public utilities',
    capabilities: ['Road Networks', 'Bridges & Culverts', 'Drainage Systems', 'Public Utilities', 'Infrastructure Planning'],
    keywords: ['infrastructure construction', 'ujenzi wa barabara', 'road construction tanzania', 'bridge construction', 'drainage systems tanzania', 'infrastructure contractor', 'ujenzi wa madaraja', 'barabara tanzania', 'public works tanzania', 'infrastructure projects east africa', 'road building tanzania', 'ufundi wa barabara'],
    faqQ: (l) => `Does Tanzibaba undertake infrastructure projects in ${l}?`,
    faqA: (l) => `Yes, Tanzibaba delivers infrastructure projects in ${l} including road networks, bridges, drainage systems and public utilities. Primary operations in Dar es Salaam, Zanzibar and Dodoma.`,
  },
];

export const materialsServiceSlugs = materialsServices.map(s => s.slug);
export const constructionServiceSlugs = constructionServices.map(s => s.slug);
