import { NextRequest, NextResponse } from 'next/server';
import { grades, plants, sellingPrice } from '@/lib/server/concrete-pricing';
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { grade, quantity, plant: requested, distanceKm, lat, lon } = body;
    if (!grades.includes(grade) || typeof quantity !== 'number' || !Number.isFinite(quantity) || quantity <= 0 || quantity > 100000 || !['auto', 'temeke', 'mikocheni'].includes(requested)) {
      return NextResponse.json({ error: 'Chagua grade, plant na kiasi sahihi cha zege.' }, { status: 400 });
    }
    let candidates: { id: string; name: string; km: number }[];
    if (distanceKm !== undefined) {
      const p = plants.find(p => p.id === requested);
      if (!p || typeof distanceKm !== 'number' || !Number.isFinite(distanceKm) || distanceKm <= 0 || distanceKm > 500) return NextResponse.json({ error: 'Chagua plant na umbali sahihi.' }, { status: 400 });
      candidates = [{ id: p.id, name: p.name, km: distanceKm }];
    } else {
      if (typeof lat !== 'number' || typeof lon !== 'number' || !Number.isFinite(lat) || !Number.isFinite(lon) || lat < -7.3 || lat > -6.3 || lon < 38.7 || lon > 39.7) return NextResponse.json({ error: 'Chagua location iliyo Dar es Salaam au karibu.' }, { status: 400 });
      const selected = requested === 'auto' ? plants : plants.filter(p => p.id === requested);
      const settled = await Promise.allSettled(selected.map(async p => {
        const url = `https://router.project-osrm.org/route/v1/driving/${p.lon},${p.lat};${lon},${lat}?overview=false&alternatives=false&steps=false`;
        const res = await fetch(url, { next: { revalidate: 86400 }, signal: AbortSignal.timeout(12000) });
        if (!res.ok) throw new Error('routing');
        const data = await res.json();
        const metres = data.routes?.[0]?.distance;
        if (data.code !== 'Ok' || !Number.isFinite(metres) || metres <= 0 || data.waypoints?.some((w: any) => w.distance > 2000)) throw new Error('no road route');
        return { id: p.id, name: p.name, km: Math.ceil(metres / 100) / 10 };
      }));
      // Do not claim the cheapest/nearest plant when one comparison failed.
      if (settled.some(r => r.status === 'rejected')) return NextResponse.json({ error: 'Hatukuweza kuthibitisha njia. Jaribu tena au weka umbali wa barabara mwenyewe.' }, { status: 503 });
      candidates = settled.flatMap(r => r.status === 'fulfilled' ? [r.value] : []).sort((a,b) => a.km-b.km);
    }
    const chosen = candidates[0];
    const price = sellingPrice(chosen.km, grade);
    return NextResponse.json({ ...price, customQuote: !price, plant: chosen.name, distanceKm: chosen.km, quantity, grade, total: price ? Math.round(price.unitPrice * quantity) : null, distanceSource: distanceKm !== undefined ? 'manual' : 'road-estimate', effectiveFrom: '2026-11-01', vat: 'unconfirmed', pumpIncluded: false });
  } catch { return NextResponse.json({ error: 'Taarifa hazikusomeka. Tafadhali jaribu tena.' }, { status: 400 }); }
}
