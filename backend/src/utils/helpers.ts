export function generateQuoteNumber(): string {
  const prefix = 'TZB';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export function generateInvoiceNumber(): string {
  const prefix = 'INV';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export function calculateVolume(
  length?: number,
  width?: number,
  thickness?: number
): number | null {
  if (length && width && thickness) {
    return Math.ceil((length * width * thickness) / 1000 * 100) / 100;
  }
  return null;
}

const gradePrices: Record<string, number> = {
  C10: 130000,
  C15: 150000,
  C20: 180000,
  C25: 210000,
  C30: 250000,
  C35: 290000,
  C40: 330000,
  C45: 360000,
  C50: 400000,
};

export function getBasePricePerM3(grade: string): number {
  return gradePrices[grade] || 200000;
}

export function calculateDeliveryCost(
  distance: number,
  quantity: number
): number {
  const ratePerKmPerM3 = 5000;
  return distance * quantity * ratePerKmPerM3;
}

export function calculatePumpCost(quantity: number): number {
  const basePumpFee = 150000;
  const perM3Fee = 5000;
  return basePumpFee + quantity * perM3Fee;
}

export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}
