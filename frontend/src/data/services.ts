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
  {
    slug: 'concrete-pump', name: 'Concrete Pump Rental', shortName: 'Concrete Pump', badge: 'Concrete Pump', icon: 'Truck',
    desc: 'rents professional concrete pumps for efficient placement of ready-mix concrete at construction sites',
    metaDescBase: 'Concrete pump rental in {location}. Professional pump trucks for efficient concrete placement.',
    keywords: ['concrete pump', 'concrete pump rental', 'pump truck', 'concrete pump dar es salaam', 'pump kwa zege', 'concrete pumping tanzania', 'boom pump', 'line pump', 'concrete pump price', 'pump rental dar'],
  },
  {
    slug: 'gravel-supplier', name: 'Gravel Supply', shortName: 'Gravel', badge: 'Gravel Supplier', icon: 'CircleDot',
    desc: 'supplies high-quality construction gravel in various sizes for foundations, drainage, and general construction',
    metaDescBase: 'Gravel supply in {location}. Construction gravel in various sizes for building projects.',
    keywords: ['gravel', 'gravel supplier', 'gravel dar es salaam', 'kokoto', 'construction gravel', 'gravel price tanzania', 'msambazaji wa gravel', 'gravel kwa ujenzi', 'gravel delivery'],
  },
  {
    slug: 'crushed-stone-supplier', name: 'Crushed Stone Supply', shortName: 'Crushed Stone', badge: 'Crushed Stone', icon: 'CircleDot',
    desc: 'supplies premium crushed stone and aggregates for construction, road building, and infrastructure projects',
    metaDescBase: 'Crushed stone supply in {location}. Premium aggregates for construction and road building.',
    keywords: ['crushed stone', 'crushed stone supplier', 'crusher dust', 'aggregate', 'crushed stone dar es salaam', 'msambazaji wa mawe', 'construction aggregates tanzania', 'road base materials'],
  },
  {
    slug: 'kokoto-supplier', name: 'Kokoto Supply', shortName: 'Kokoto', badge: 'Kokoto Supplier', icon: 'CircleDot',
    desc: 'supplies kokoto (gravel) and crushed stone for construction projects across Tanzania',
    metaDescBase: 'Kokoto supply in {location}. Construction gravel and crushed stone for building projects.',
    keywords: ['kokoto', 'kokoto supplier', 'kokoto dar es salaam', 'gravel tanzania', 'msambazaji wa kokoto', 'kokoto kwa ujenzi', 'construction gravel', 'kokoto price'],
  },
  {
    slug: 'sand-supplier', name: 'Sand Supply', shortName: 'Sand', badge: 'Sand Supplier', icon: 'Package',
    desc: 'supplies washed construction sand, river sand, and manufactured sand for concrete and plastering',
    metaDescBase: 'Sand supply in {location}. Washed construction sand, river sand and manufactured sand.',
    keywords: ['sand', 'sand supplier', 'construction sand', 'river sand', 'washed sand', 'sand dar es salaam', 'msambazaji wa mchanga', 'mchanga wa ujenzi', 'plastering sand', 'concrete sand'],
  },
  {
    slug: 'cement-supplier', name: 'Cement Supply', shortName: 'Cement', badge: 'Cement Supplier', icon: 'Package',
    desc: 'supplies Portland cement, PPC cement, and specialized cement products from top manufacturers',
    metaDescBase: 'Cement supply in {location}. Portland cement, PPC cement and specialized cement products.',
    keywords: ['cement', 'cement supplier', 'Portland cement', 'PPC cement', 'cement dar es salaam', 'bei ya cement', 'msambazaji wa cement', 'Simba cement', 'Dangote cement', 'cement tanzania'],
  },
  {
    slug: 'steel-supplier', name: 'Steel Reinforcement Supply', shortName: 'Steel', badge: 'Steel Supplier', icon: 'Package',
    desc: 'supplies steel reinforcement bars, mesh, and structural steel for construction projects',
    metaDescBase: 'Steel reinforcement supply in {location}. Rebar, mesh and structural steel for construction.',
    keywords: ['steel', 'rebar', 'steel reinforcement', 'mesh', 'steel dar es salaam', 'chuma ya ujenzi', 'msambazaji wa steel', 'structural steel', 'binding wire', 'steel price tanzania'],
  },
  {
    slug: 'road-construction-materials', name: 'Road Construction Materials', shortName: 'Road Materials', badge: 'Road Materials', icon: 'Route',
    desc: 'supplies road construction materials including aggregates, gravel, and base course materials',
    metaDescBase: 'Road construction materials supply in {location}. Aggregates, gravel and base course.',
    keywords: ['road construction materials', 'road base', 'base course', 'sub-base', 'road materials dar', 'barabara materials', 'road building tanzania', 'asphalt materials'],
  },
  {
    slug: 'construction-materials', name: 'Construction Materials', shortName: 'Construction Materials', badge: 'Construction Materials', icon: 'Package',
    desc: 'supplies complete construction materials including concrete, aggregates, gravel, and crushed stone',
    metaDescBase: 'Construction materials supply in {location}. Complete building materials for all projects.',
    keywords: ['construction materials', 'building materials', 'materials dar es salaam', 'vyombo vya ujenzi', 'building supplies tanzania', 'construction supplies', 'hardware materials'],
  },
  {
    slug: 'building-materials', name: 'Building Materials', shortName: 'Building Materials', badge: 'Building Materials', icon: 'Package',
    desc: 'supplies complete building materials including cement, steel, paints, tiles, plumbing and electrical supplies',
    metaDescBase: 'Building materials supply in {location}. Cement, steel, paints, tiles, plumbing and electrical.',
    keywords: ['building materials', 'cement', 'steel', 'paints', 'tiles', 'plumbing', 'electrical', 'building materials dar es salaam', 'vyombo vya ujenzi', 'hardware shop', 'construction supplies tanzania'],
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
