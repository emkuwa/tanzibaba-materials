// Pricing zones — each zone has independent cost, transport and margin
export type PricingZone = 'dar' | 'dodoma' | 'zanzibar';
export type ProductType = 'ready-mix-concrete' | 'aggregates' | 'hollow-blocks' | 'solid-blocks' | 'paving-blocks' | 'paver-tiles' | 'paving-slabs' | 'kerbstones' | 'culvert-pipes' | 'boundary-blocks' | 'column-coping' | 'wall-coping' | 'gravel-aggregates';
export type PriceUnit = 'per-ton' | 'per-cbm' | 'per-piece' | 'per-m';

export interface ZonePricing {
  zoneId: PricingZone;
  zoneName: string;
  products: ProductPricing[];
}

export interface ProductPricing {
  productId: ProductType;
  productName: string;
  unit: PriceUnit;
  costPrice: number;
  transportCost: number;
  marginPercent: number;
  sellingPrice: number;
  bulkDiscounts: BulkDiscountTier[];
}

export interface BulkDiscountTier {
  minQty: number;
  maxQty: number | null;
  discountPercent: number;
}

// Concrete grade pricing
export interface GradePricing {
  grade: string;
  costPrice: number;
  transportCost: number;
  marginPercent: number;
  sellingPrice: number;
}

export interface ZoneGradePricing {
  zoneId: PricingZone;
  grades: GradePricing[];
}

function calcSellingPrice(cost: number, transport: number, marginPercent: number): number {
  return Math.round((cost + transport) * (1 + marginPercent / 100));
}

// ==================== BASE DATA ====================

const concreteGrades = ['C10', 'C15', 'C20', 'C25', 'C30', 'C35', 'C40', 'C45', 'C50'];
const gradeBaseCost: Record<string, number> = { C10: 85000, C15: 95000, C20: 110000, C25: 130000, C30: 155000, C35: 180000, C40: 200000, C45: 220000, C50: 250000 };

export function getBaseConcreteGradeCost(grade: string): number {
  return gradeBaseCost[grade] || 130000;
}

function buildConcreteGrades(zoneId: PricingZone, transportOverride: number, marginOverride: number): GradePricing[] {
  return concreteGrades.map(g => {
    const cost = getBaseConcreteGradeCost(g);
    return {
      grade: g,
      costPrice: cost,
      transportCost: transportOverride,
      marginPercent: marginOverride,
      sellingPrice: calcSellingPrice(cost, transportOverride, marginOverride),
    };
  });
}

// Zone A — Dar es Salaam
const darTransport = 15000;
const darMargin = 25;

// Zone B — Dodoma (higher transport from Dar)
const dodomaTransport = 45000;
const dodomaMargin = 20;

// Zone C — Zanzibar (marine logistics)
const zanzibarTransport = 55000;
const zanzibarMargin = 22;

export const zoneGradePricing: ZoneGradePricing[] = [
  { zoneId: 'dar', grades: buildConcreteGrades('dar', darTransport, darMargin) },
  { zoneId: 'dodoma', grades: buildConcreteGrades('dodoma', dodomaTransport, dodomaMargin) },
  { zoneId: 'zanzibar', grades: buildConcreteGrades('zanzibar', zanzibarTransport, zanzibarMargin) },
];

export function getGradePricing(zoneId: PricingZone, grade: string): GradePricing | undefined {
  return zoneGradePricing.find(z => z.zoneId === zoneId)?.grades.find(g => g.grade === grade);
}

// Product pricing per zone
const productDefinitions: { id: ProductType; name: string; unit: PriceUnit; costDar: number; costDodoma: number; costZanzibar: number; transportDar: number; transportDodoma: number; transportZanzibar: number; margin: number }[] = [
  { id: 'aggregates', name: 'Aggregates', unit: 'per-ton', costDar: 45000, costDodoma: 55000, costZanzibar: 70000, transportDar: 15000, transportDodoma: 40000, transportZanzibar: 50000, margin: 25 },
  { id: 'gravel-aggregates', name: 'Gravel / Kokoto', unit: 'per-ton', costDar: 45000, costDodoma: 55000, costZanzibar: 70000, transportDar: 15000, transportDodoma: 40000, transportZanzibar: 50000, margin: 25 },
  { id: 'hollow-blocks', name: 'Hollow Blocks', unit: 'per-piece', costDar: 1800, costDodoma: 2200, costZanzibar: 2800, transportDar: 500, transportDodoma: 1500, transportZanzibar: 2000, margin: 20 },
  { id: 'solid-blocks', name: 'Solid Blocks', unit: 'per-piece', costDar: 2500, costDodoma: 3000, costZanzibar: 3800, transportDar: 600, transportDodoma: 1800, transportZanzibar: 2500, margin: 20 },
  { id: 'paving-blocks', name: 'Paving Blocks', unit: 'per-piece', costDar: 3800, costDodoma: 4500, costZanzibar: 5500, transportDar: 700, transportDodoma: 2000, transportZanzibar: 2800, margin: 22 },
  { id: 'paver-tiles', name: 'Paver Tiles', unit: 'per-piece', costDar: 4500, costDodoma: 5200, costZanzibar: 6500, transportDar: 700, transportDodoma: 2000, transportZanzibar: 2800, margin: 22 },
  { id: 'paving-slabs', name: 'Paving Slabs', unit: 'per-piece', costDar: 6000, costDodoma: 7000, costZanzibar: 8500, transportDar: 800, transportDodoma: 2500, transportZanzibar: 3200, margin: 22 },
  { id: 'kerbstones', name: 'Kerbstones', unit: 'per-piece', costDar: 8500, costDodoma: 9500, costZanzibar: 12000, transportDar: 1000, transportDodoma: 3000, transportZanzibar: 4000, margin: 22 },
  { id: 'culvert-pipes', name: 'Culvert Pipes', unit: 'per-piece', costDar: 32000, costDodoma: 38000, costZanzibar: 48000, transportDar: 4000, transportDodoma: 10000, transportZanzibar: 14000, margin: 22 },
  { id: 'boundary-blocks', name: 'Boundary Blocks', unit: 'per-piece', costDar: 3200, costDodoma: 3800, costZanzibar: 4800, transportDar: 600, transportDodoma: 1800, transportZanzibar: 2500, margin: 20 },
  { id: 'column-coping', name: 'Column Coping', unit: 'per-piece', costDar: 10000, costDodoma: 12000, costZanzibar: 15000, transportDar: 1000, transportDodoma: 3000, transportZanzibar: 4000, margin: 22 },
  { id: 'wall-coping', name: 'Wall Coping', unit: 'per-piece', costDar: 8000, costDodoma: 9500, costZanzibar: 12000, transportDar: 1000, transportDodoma: 3000, transportZanzibar: 4000, margin: 22 },
];

export function buildZonePricing(): ZonePricing[] {
  return [
    {
      zoneId: 'dar', zoneName: 'Dar es Salaam',
      products: productDefinitions.map(p => ({
        productId: p.id, productName: p.name, unit: p.unit,
        costPrice: p.costDar, transportCost: p.transportDar,
        marginPercent: p.margin,
        sellingPrice: calcSellingPrice(p.costDar, p.transportDar, p.margin),
        bulkDiscounts: [
          { minQty: 0, maxQty: 9, discountPercent: 0 },
          { minQty: 10, maxQty: 49, discountPercent: 5 },
          { minQty: 50, maxQty: 99, discountPercent: 8 },
          { minQty: 100, maxQty: null, discountPercent: 12 },
        ],
      })),
    },
    {
      zoneId: 'dodoma', zoneName: 'Dodoma',
      products: productDefinitions.map(p => ({
        productId: p.id, productName: p.name, unit: p.unit,
        costPrice: p.costDodoma, transportCost: p.transportDodoma,
        marginPercent: p.margin,
        sellingPrice: calcSellingPrice(p.costDodoma, p.transportDodoma, p.margin),
        bulkDiscounts: [
          { minQty: 0, maxQty: 9, discountPercent: 0 },
          { minQty: 10, maxQty: 49, discountPercent: 5 },
          { minQty: 50, maxQty: 99, discountPercent: 8 },
          { minQty: 100, maxQty: null, discountPercent: 12 },
        ],
      })),
    },
    {
      zoneId: 'zanzibar', zoneName: 'Zanzibar',
      products: productDefinitions.map(p => ({
        productId: p.id, productName: p.name, unit: p.unit,
        costPrice: p.costZanzibar, transportCost: p.transportZanzibar,
        marginPercent: p.margin,
        sellingPrice: calcSellingPrice(p.costZanzibar, p.transportZanzibar, p.margin),
        bulkDiscounts: [
          { minQty: 0, maxQty: 9, discountPercent: 0 },
          { minQty: 10, maxQty: 49, discountPercent: 5 },
          { minQty: 50, maxQty: 99, discountPercent: 8 },
          { minQty: 100, maxQty: null, discountPercent: 12 },
        ],
      })),
    },
  ];
}

export function getProductPricing(zoneId: PricingZone, productId: ProductType): ProductPricing | undefined {
  return buildZonePricing().find(z => z.zoneId === zoneId)?.products.find(p => p.productId === productId);
}

export function getZoneForLocation(location: string): PricingZone {
  const loc = location.toLowerCase();
  if (loc.includes('dodoma')) return 'dodoma';
  if (loc.includes('zanzibar') || loc.includes('paje') || loc.includes('nungwi') || loc.includes('jambiani') || loc.includes('kiwengwa') || loc.includes('matemwe') || loc.includes('fumba') || loc.includes('zanzibar-city')) return 'zanzibar';
  return 'dar';
}

// Truck transport cost estimation
export interface TruckCost {
  truckType: 'fuso' | 'howo' | 'scania';
  capacityTons: number;
  zoneTransportRate: number;
  totalCost: number;
}

const truckCapacities: Record<string, number> = { fuso: 6, howo: 30, scania: 25 };

const zoneTransportRates: Record<PricingZone, number> = { dar: 20000, dodoma: 50000, zanzibar: 60000 };

export function getTruckCost(zoneId: PricingZone, truckType: 'fuso' | 'howo' | 'scania'): TruckCost {
  const capacity = truckCapacities[truckType] || 10;
  const rate = zoneTransportRates[zoneId];
  return { truckType, capacityTons: capacity, zoneTransportRate: rate, totalCost: capacity * rate };
}

// Calculate bulk discount
export function applyBulkDiscount(qty: number, unitPrice: number, discounts: BulkDiscountTier[]): { finalPrice: number; discountPercent: number; savings: number } {
  const tier = discounts.find(d => qty >= d.minQty && (d.maxQty === null || qty <= d.maxQty));
  const discountPercent = tier?.discountPercent || 0;
  const originalTotal = qty * unitPrice;
  const finalTotal = Math.round(originalTotal * (1 - discountPercent / 100));
  return { finalPrice: finalTotal, discountPercent, savings: originalTotal - finalTotal };
}

// Profit calculation
export interface ProfitBreakdown {
  costPrice: number;
  transportCost: number;
  marginPercent: number;
  sellingPrice: number;
  profitPerUnit: number;
  totalProfit: number;
  marginAmount: number;
}

export function calculateProfit(zoneId: PricingZone, productId: ProductType, quantity: number): ProfitBreakdown | null {
  const pricing = getProductPricing(zoneId, productId);
  if (!pricing) return null;
  const { costPrice, transportCost, marginPercent, sellingPrice } = pricing;
  const marginAmount = Math.round((costPrice + transportCost) * (marginPercent / 100));
  const profitPerUnit = sellingPrice - costPrice - transportCost;
  return {
    costPrice, transportCost, marginPercent, sellingPrice,
    profitPerUnit, totalProfit: profitPerUnit * quantity, marginAmount,
  };
}

// Quote-level profit summary
export interface QuoteProfitReport {
  items: ProfitBreakdown[];
  totalCost: number;
  totalTransport: number;
  totalSelling: number;
  totalProfit: number;
  averageMarginPercent: number;
}

export function generateQuoteProfitReport(zoneId: PricingZone, items: { productId: ProductType; quantity: number }[]): QuoteProfitReport {
  const breakdowns = items.map(i => calculateProfit(zoneId, i.productId, i.quantity)).filter(Boolean) as ProfitBreakdown[];
  const totalCost = breakdowns.reduce((s, b) => s + b.costPrice, 0);
  const totalTransport = breakdowns.reduce((s, b) => s + b.transportCost, 0);
  const totalSelling = breakdowns.reduce((s, b) => s + b.sellingPrice, 0);
  const totalProfit = breakdowns.reduce((s, b) => s + b.totalProfit, 0);
  const avgMargin = breakdowns.length > 0 ? breakdowns.reduce((s, b) => s + b.marginPercent, 0) / breakdowns.length : 0;
  return { items: breakdowns, totalCost, totalTransport, totalSelling, totalProfit, averageMarginPercent: Math.round(avgMargin * 10) / 10 };
}
