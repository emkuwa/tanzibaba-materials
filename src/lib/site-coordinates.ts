export type SitePoint = { lat: number; lon: number };
export function inDeliveryRegion(p: SitePoint): boolean {
  return Number.isFinite(p.lat) && Number.isFinite(p.lon) && p.lat >= -7.3 && p.lat <= -6.3 && p.lon >= 38.7 && p.lon <= 39.7;
}
// Deliberately accept only explicit latitude, longitude pairs, never execute or fetch pasted text.
export function parseSiteCoordinates(value: string): SitePoint | null {
  const parts=value.trim().split(/[\s,;]+/);
  if(parts.length!==2 || parts.some(x=>!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(x)))return null;
  const point={lat:Number(parts[0]),lon:Number(parts[1])};
  return inDeliveryRegion(point)?point:null;
}
