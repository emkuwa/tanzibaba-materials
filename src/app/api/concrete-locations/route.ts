import { NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim() || '';
  if (q.length < 2 || q.length > 120) return NextResponse.json({ error: 'Andika jina la eneo (herufi 2–120).' }, { status: 400 });
  try {
    const url = new URL('https://photon.komoot.io/api/');
    url.search = new URLSearchParams({ q: q + ', Dar es Salaam, Tanzania', limit: '6', lat: '-6.82', lon: '39.27', bbox: '38.7,-7.3,39.7,-6.3' }).toString();
    const res = await fetch(url, { next: { revalidate: 86400 }, signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error('geocoder');
    const data = await res.json();
    const locations = (data.features || []).filter((f: any) => f.properties?.countrycode === 'TZ' && f.geometry?.coordinates?.length === 2).map((f: any) => ({
      label: [...new Set([f.properties.name, f.properties.street, f.properties.locality, f.properties.district, f.properties.city].filter(Boolean))].join(', '),
      lon: f.geometry.coordinates[0], lat: f.geometry.coordinates[1],
    }));
    return NextResponse.json({ locations, attribution: '© OpenStreetMap contributors · Photon' });
  } catch {
    return NextResponse.json({ error: 'Ramani haipatikani sasa. Unaweza kuweka umbali unaoujua au kuomba quotation kwa location yako.' }, { status: 503 });
  }
}
