import { Truck, Package, Layers, HelpCircle, Building2, Building, Warehouse, Store, Route, HardHat, ClipboardList, Grid3x3, Paintbrush, RefreshCw, Shield, Diamond, Mountain, CircleDot, Blocks, BrickWall, Square, Circle, Construction, Box } from 'lucide-react';

export const locationAreas: Record<string, string[]> = {
  'Kinondoni': ['Magomeni', 'Mwananyamala', 'Tandale', 'Manzese', 'Mikocheni', 'Kawe', 'Kunduchi', 'Tegeta', 'Sinza', 'Kijitonyama', 'Mabibo'],
  'Ubungo': ['Ubungo Makati', 'Kimara', 'Mbezi Luis', 'Mbezi Juu', 'Gongo la Mboto', 'Saranga', 'Kwembe', 'Msigani'],
  'Ilala': ['Kariakoo', 'Mchikichini', 'Upanga', 'Mchafukoge', 'Ilala', 'Buguruni', 'Kipawa', 'Tabata', 'Ukonga', 'Pugu', 'Vingunguti'],
  'Temeke': ['Temeke', 'Mbagala', 'Charambe', 'Azimio', 'Chamazi', 'Kurasini', 'Mtoni', 'Tandika', 'Kisarawe', 'Makangarawe'],
  'Kigamboni': ['Kigamboni', 'Vijibweni', 'Somangila', 'Tungi', 'Kisarawe II', 'Mjimwema'],
};
export const districts = [...Object.keys(locationAreas), 'Other'];

export const productCategories = [
  { id: 'ready-mix-concrete', label: 'Ready-Mix Concrete', icon: Truck, desc: 'Premium concrete for foundations, slabs, columns & structures' },
  { id: 'gravel-aggregates', label: 'Aggregates / Gravel', icon: Package, desc: 'Crushed stone, gravel & aggregates for construction' },
  { id: 'hollow-blocks', label: 'Hollow Blocks', icon: Grid3x3, desc: 'Lightweight blocks for walls, partitions & fencing' },
  { id: 'solid-blocks', label: 'Solid Blocks', icon: Grid3x3, desc: 'Solid concrete blocks for load-bearing walls' },
  { id: 'paving-blocks', label: 'Paving Blocks', icon: Square, desc: 'Interlocking blocks for driveways, walkways & yards' },
  { id: 'paver-tiles', label: 'Paver Tiles', icon: Square, desc: 'Concrete tiles for walkways & outdoor spaces' },
  { id: 'paving-slabs', label: 'Paving Slabs', icon: Square, desc: 'Large concrete slabs for pathways, patios & terraces' },
  { id: 'boundary-blocks', label: 'Boundary Blocks', icon: Grid3x3, desc: 'Heavy blocks for perimeter walls & boundary fencing' },
  { id: 'kerbstones', label: 'Kerbstones', icon: Circle, desc: 'Road and garden edge restraints' },
  { id: 'culvert-pipes', label: 'Culvert Pipes', icon: Circle, desc: 'Concrete pipes for drainage & culverts' },
  { id: 'precast', label: 'Precast Products', icon: Box, desc: 'Precast concrete products for construction' },
  { id: 'column-coping', label: 'Column Coping', icon: Shield, desc: 'Precast concrete caps for columns & pillars' },
  { id: 'wall-coping', label: 'Wall Coping', icon: Shield, desc: 'Concrete capping for walls, fences & landscaping' },
  { id: 'multiple', label: 'Multiple Products', icon: Layers, desc: 'Need multiple materials for your project' },
  { id: 'not-sure', label: 'Not Sure', icon: HelpCircle, desc: 'Help me choose the right materials' },
] as const;

export const productImages: Record<string, string> = {
  'ready-mix-concrete': '/images/new/ready-mix-concrete.webp',
  'gravel-aggregates': '/images/new/aggregates.webp',
  'crusher-plant': '/images/new/crusher-plant.webp',
  'concrete-pump': '/images/new/concrete-pump.webp',
  'washed-sand': '/images/new/washed-sand.webp',
  'hollow-blocks': '/images/new/hollow-blocks.webp',
  'solid-blocks': '/images/new/solid-blocks.webp',
  'paving-blocks': '/images/new/paving-blocks.webp',
  'culvert-pipes': '/images/new/culvert-pipes.webp',
  'precast': '/images/new/precast-products.webp',
  'road-construction': '/images/new/road-construction.webp',
};

export const heroImage = '/images/new/mobile-hero.webp';

export const concreteClasses = [
  { grade: 'C10', desc: 'Blinding, leveling & non-structural fill' },
  { grade: 'C15', desc: 'Lean concrete, walkways, light foundations' },
  { grade: 'C20', desc: 'Residential slabs, small foundations, patios' },
  { grade: 'C25', desc: 'House foundations, columns, beams, driveways' },
  { grade: 'C30', desc: 'Multi-storey apartments, commercial buildings' },
  { grade: 'C35', desc: 'Heavy-duty structures, industrial floors' },
  { grade: 'C40', desc: 'Industrial plants, engineered structures' },
  { grade: 'C45', desc: 'High-strength precast, bridge components' },
  { grade: 'C50', desc: 'Specialized high-performance, heavy infrastructure' },
] as const;

export const concreteGradeOptions = [
  ...concreteClasses.map(c => ({ id: c.grade, label: c.grade, desc: c.desc })),
  { id: 'other', label: 'Other', desc: 'A different grade not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right grade' },
] as const;

export const gravelSizes = [
  { id: 'dust', label: 'Crusher Dust', inch: '', uses: ['Paving & Blocks', 'Fine Material', 'Base for paving stones'] },
  { id: '0-5mm', label: '0–5mm (0–0.2")', inch: '', uses: ['Asphalt Production', 'Fine Concrete Mixes', 'Sand Replacement'] },
  { id: '5-10mm', label: '5–10mm (0.2–0.4")', inch: '', uses: ['Fine Concrete', 'Lightweight Blocks', 'Thin Sections'] },
  { id: '10-20mm', label: '10–20mm (0.4–0.8")', inch: '', uses: ['Standard Concrete', 'Building Foundations', 'Slabs & Columns'] },
  { id: '20-40mm', label: '20–40mm (0.8–1.6")', inch: '', uses: ['Heavy Concrete', 'Drainage Works', 'Road Construction'] },
  { id: '40mm-plus', label: '40mm+', inch: '', uses: ['Road Works', 'Sub-base Fill', 'Large Infrastructure'] },
  { id: 'road-base', label: 'Road Base Material', inch: '', uses: ['Road Construction', 'Parking Areas', 'Site Preparation'] },
  { id: 'asphalt-aggregate', label: 'Asphalt Aggregate', inch: '', uses: ['Asphalt Production', 'Road Surfacing'] },
  { id: 'other', label: 'Other', inch: '', uses: ['A different size not listed'] },
  { id: 'not-sure', label: 'Not Sure', inch: '', uses: ['Help me choose the right size'] },
] as const;

export const hollowBlockSpecs = [
  { id: '140x190x390', label: '140×190×390mm', desc: 'Standard wall blocks, partitions' },
  { id: '190x190x390', label: '190×190×390mm', desc: 'Load-bearing walls, boundary walls' },
  { id: '230x190x390', label: '230×190×390mm', desc: 'Thick walls, structural applications' },
  { id: 'other', label: 'Other', desc: 'A different size not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right size' },
] as const;

export const solidBlockSpecs = [
  { id: '90x190x390', label: '90×190×390mm', desc: 'Light walls, partitions' },
  { id: '140x190x390', label: '140×190×390mm', desc: 'Standard wall construction' },
  { id: '140x200x390', label: '140×200×390mm', desc: 'Tall-storey wall construction' },
  { id: '190x190x390', label: '190×190×390mm', desc: 'Load-bearing walls, fencing' },
  { id: '220x190x390', label: '220×190×390mm', desc: 'Heavy load-bearing walls' },
  { id: 'other', label: 'Other', desc: 'A different size not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right size' },
] as const;

export const pavingBlockSpecs = [
  { id: '200x100x80', label: '200×100×80mm', desc: 'Standard paving, driveways, walkways' },
  { id: '200x100x60', label: '200×100×60mm', desc: 'Light pedestrian walkways, gardens' },
  { id: '220x110x80', label: '220×110×80mm', desc: 'Heavy-duty paving, parking areas' },
  { id: '220x110x60', label: '220×110×60mm', desc: 'Medium-duty walkways, patios' },
  { id: '200x140x60', label: '200×140×60mm', desc: 'Decorative paving, landscaping' },
  { id: 'other', label: 'Other', desc: 'A different size not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right size' },
] as const;

export const paverTileSpecs = [
  { id: '60mm', label: '60mm Thick', desc: 'Standard outdoor tiles, walkways, patios' },
  { id: '20mm', label: '20mm Thick', desc: 'Light pedestrian areas, decorative surfaces' },
  { id: 'other', label: 'Other', desc: 'A different thickness not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right thickness' },
] as const;

export const pavingSlabSpecs = [
  { id: '600x600x50', label: '600×600×50mm', desc: 'Standard patio & walkway slabs' },
  { id: '600x600x75', label: '600×600×75mm', desc: 'Heavy-duty patio & terrace slabs' },
  { id: '500x500x50', label: '500×500×50mm', desc: 'Medium garden & pathway slabs' },
  { id: '400x400x40', label: '400×400×40mm', desc: 'Light pedestrian paving slabs' },
  { id: 'other', label: 'Other', desc: 'A different size not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right size' },
] as const;

export const boundaryBlockSpecs = [
  { id: '190x190x390', label: '190×190×390mm', desc: 'Standard boundary wall blocks' },
  { id: '230x190x390', label: '230×190×390mm', desc: 'Heavy-duty boundary blocks' },
  { id: '300x190x390', label: '300×190×390mm', desc: 'Extra thick boundary blocks' },
  { id: 'other', label: 'Other', desc: 'A different size not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right size' },
] as const;

export const kerbstoneSpecs = [
  { id: '500x250x100', label: '500×250×100mm', desc: 'Standard road kerbs, garden edges' },
  { id: '500x250x150', label: '500×250×150mm', desc: 'Heavy-duty road kerbs, highways' },
  { id: '600x300x150', label: '600×300×150mm', desc: 'Large kerbs, major roadways' },
  { id: 'other', label: 'Other', desc: 'A different size not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right size' },
] as const;

export const culvertPipeSpecs = [
  { id: '400x1050x40', label: '400mm dia × 1050mm', desc: 'Small drainage, driveway culverts' },
  { id: '500x1050x40', label: '500mm dia × 1050mm', desc: 'Medium drainage, road culverts' },
  { id: '600x1050x50', label: '600mm dia × 1050mm', desc: 'Large drainage, main culverts' },
  { id: '900x900x100', label: '900mm dia × 900mm', desc: 'Box culverts, major drainage' },
  { id: '1200x900x100', label: '1200mm dia × 900mm', desc: 'Large box culverts, river crossings' },
  { id: 'other', label: 'Other', desc: 'A different size not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right size' },
] as const;

export const columnCopingSpecs = [
  { id: '300x300', label: '300×300mm', desc: 'Standard column caps' },
  { id: '400x400', label: '400×400mm', desc: 'Medium column caps' },
  { id: '500x500', label: '500×500mm', desc: 'Large column caps' },
  { id: 'other', label: 'Other', desc: 'A different size not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right size' },
] as const;

export const wallCopingSpecs = [
  { id: '400x100', label: '400×100mm', desc: 'Standard wall capping' },
  { id: '500x100', label: '500×100mm', desc: 'Medium wall capping' },
  { id: '600x150', label: '600×150mm', desc: 'Large wall capping' },
  { id: 'other', label: 'Other', desc: 'A different size not listed' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me choose the right size' },
] as const;

export const projectTypes = [
  { label: 'Apartment', icon: Building2 },
  { label: 'Commercial', icon: Building },
  { label: 'Industrial', icon: Warehouse },
  { label: 'Warehouse', icon: Store },
  { label: 'Road Project', icon: Route },
  { label: 'Residential', icon: Building2 },
  { label: 'Infrastructure', icon: Layers },
  { label: 'Other', icon: HelpCircle },
  { label: 'Not Sure', icon: HelpCircle },
] as const;

export const gravelProjectTypes = [
  { label: 'Building Construction', icon: Building2 },
  { label: 'Commercial Projects', icon: Building },
  { label: 'Industrial Projects', icon: Warehouse },
  { label: 'Road Construction', icon: Route },
  { label: 'Infrastructure Projects', icon: Layers },
  { label: 'Government Projects', icon: Building },
  { label: 'Asphalt Production', icon: HardHat },
  { label: 'Other', icon: HelpCircle },
  { label: 'Not Sure', icon: HelpCircle },
] as const;

export const projectStages = [
  { label: 'Planning', icon: ClipboardList },
  { label: 'Foundation', icon: Building },
  { label: 'Structural', icon: Grid3x3 },
  { label: 'Finishing', icon: Paintbrush },
  { label: 'Ongoing', icon: RefreshCw },
  { label: 'Other', icon: HelpCircle },
  { label: 'Not Sure', icon: HelpCircle },
] as const;

export const quantityOptions = [
  { id: 'pieces', label: 'Pieces', desc: 'Specify exact number of pieces' },
  { id: 'tons', label: 'Tons', desc: 'Specify exact tonnage' },
  { id: 'cbm', label: 'CBM (Cubic Meters)', desc: 'Specify cubic meters' },
  { id: 'trucks', label: 'Trucks', desc: 'Order by truckload' },
  { id: 'custom', label: 'Custom Quantity', desc: 'Describe your quantity needs' },
  { id: 'not-sure', label: 'Not Sure', desc: 'Help me estimate the quantity' },
] as const;

export const concreteQuantityRanges = [
  { label: '1–5 m³', mid: 3 },
  { label: '5–10 m³', mid: 7.5 },
  { label: '10–20 m³', mid: 15 },
  { label: '20–30 m³', mid: 25 },
  { label: '30–50 m³', mid: 40 },
  { label: '50–75 m³', mid: 62.5 },
  { label: '75–100 m³', mid: 87.5 },
  { label: '100–150 m³', mid: 125 },
  { label: '150–200 m³', mid: 175 },
  { label: '200–300 m³', mid: 250 },
  { label: '300+ m³', mid: 350 },
] as const;

export const gravelQtyPresets = [
  { label: '10 Tons', value: '10' },
  { label: '20 Tons', value: '20' },
  { label: '30 Tons', value: '30' },
  { label: '50 Tons', value: '50' },
  { label: '100 Tons', value: '100' },
  { label: '200 Tons', value: '200' },
  { label: '500+ Tons', value: '500-plus' },
] as const;

export const gravelCbmPresets = [
  { label: '5 CBM', value: '5' },
  { label: '10 CBM', value: '10' },
  { label: '20 CBM', value: '20' },
  { label: '30 CBM', value: '30' },
  { label: '50 CBM', value: '50' },
  { label: '100 CBM', value: '100' },
  { label: '200+ CBM', value: '200-plus' },
] as const;

export const truckTypes = [
  { id: 'fuso', label: 'Fuso Truck', capacity: 'Approx. 5–8 Tons', minTons: 5, maxTons: 8 },
  { id: 'scania', label: 'Scania Truck', capacity: 'Approx. 20–30 Tons', minTons: 20, maxTons: 30 },
  { id: 'howo', label: 'Howo Truck', capacity: 'Approx. 25–40 Tons', minTons: 25, maxTons: 40 },
  { id: 'other', label: 'Other', capacity: 'A different truck type', minTons: 0, maxTons: 0 },
  { id: 'not-sure', label: 'Not Sure', capacity: 'Help me choose', minTons: 0, maxTons: 0 },
] as const;

export const productPrices: Record<string, number> = {
  'hollow-blocks': 2500,
  'solid-blocks': 3500,
  'paving-blocks': 5500,
  'paver-tiles': 6500,
  'paving-slabs': 8500,
  'boundary-blocks': 4500,
  'kerbstones': 12000,
  'culvert-pipes': 45000,
  'column-coping': 15000,
  'wall-coping': 12000,
  'gravel-aggregates': 90000,
  'ready-mix-concrete': 200000,
  'multiple': 200000,
  'not-sure': 200000,
};

export function getBasePrice(grade: string): number {
  const prices: Record<string, number> = { C10: 130000, C15: 150000, C20: 180000, C25: 210000, C30: 250000, C35: 290000, C40: 330000, C45: 360000, C50: 400000 };
  return prices[grade] || 200000;
}

export function getGravelPricePerTon(sizeId: string): number {
  const prices: Record<string, number> = {
    dust: 80000, '0-5mm': 85000, '5-10mm': 90000, '10-20mm': 95000,
    '20-40mm': 100000, '40mm-plus': 105000, 'road-base': 75000, 'asphalt-aggregate': 110000,
  };
  return prices[sizeId] || 90000;
}

export function getGravelTransportPerTon(): number {
  return 20000;
}

export function fmt(n: number) { return n.toLocaleString('en-TZ'); }

export const nonPricedProductIds = [
  'hollow-blocks', 'solid-blocks', 'paving-blocks', 'paver-tiles', 'paving-slabs',
  'boundary-blocks', 'kerbstones', 'culvert-pipes', 'column-coping', 'wall-coping', 'not-sure'
];

export type QuantityMode = 'pieces' | 'tons' | 'cbm' | 'trucks' | 'custom';
export type ProductCategory = typeof productCategories[number]['id'];

export interface GravelReq { size: string; qty: string; unit: string; truckType?: string; useCase?: string }

export function tonnageCost(r: GravelReq): number {
  const qty = parseFloat(r.qty) || 0;
  const rate = getGravelPricePerTon(r.size);
  if (r.unit === 'Truck') {
    const truck = truckTypes.find(t => t.id === r.truckType);
    const avgTons = truck ? (truck.minTons + truck.maxTons) / 2 : 10;
    return avgTons * rate;
  }
  return qty * rate;
}
