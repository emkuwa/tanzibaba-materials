// Server-only supplier schedule effective 2026-11-01. Never import into a client component.
import 'server-only';
export const grades = ['C15', 'C20', 'C25', 'C30', 'C35', 'C40'];
const rows = [[3,259,269,296,310,327,340],[6,264,274,299,314,331,344],[9,269,279,303,318,334,348],[12,274,284,307,322,338,352],[15,279,289,311,326,342,356],[18,284,294,315,330,346,360],[20,289,299,317,332,349,362],[23,296,306,323,338,354,368],[26,301,311,327,342,358,372],[29,306,316,331,346,362,376],[32,311,321,335,350,366,380],[35,316,326,339,353,370,383],[38,321,331,342,357,374,387],[40,326,336,345,360,376,390]];
export const plants = [
  { id: 'temeke', name: 'Uwanja wa Taifa, Temeke', lon: 39.2738, lat: -6.8536 },
  { id: 'mikocheni', name: 'ITV, Mikocheni', lon: 39.2363434, lat: -6.7659838 },
];
// Coordinates are nearby landmarks, not surveyed batching-plant entrances.
export function sellingPrice(km: number, grade: string) {
  const i = grades.indexOf(grade);
  if (i < 0 || !Number.isFinite(km) || km <= 0 || km > 40) return null;
  const row = rows.find(r => r[0] >= km)!;
  return { bandKm: row[0], unitPrice: row[i + 1] * 1000 + 5000 };
}
