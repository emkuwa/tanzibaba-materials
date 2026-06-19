'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft } from 'lucide-react';

export default function AggregateCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [depth, setDepth] = useState('');
  const [density, setDensity] = useState('1.75');
  const [result, setResult] = useState<{ volume: number; tons: number } | null>(null);

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    const den = parseFloat(density);
    if (l > 0 && w > 0 && d > 0) {
      const volume = l * w * (d / 1000);
      const tons = volume * den;
      setResult({ volume, tons });
    }
  };

  return (
    <>
      <head>
        <title>Aggregate Calculator | Calculate Gravel &amp; Stone | Tanzibaba</title>
        <meta name="description" content="Determine aggregate quantities for concrete mixing and road base construction. Free online aggregate calculator for Tanzania." />
        <link rel="canonical" href="https://materials.tanzibaba.com/tools/aggregate-calculator" />
      </head>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/tools" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> All Tools</Link>
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1 rounded-full text-xs font-medium mb-3"><Calculator className="w-3.5 h-3.5" /> Calculator</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Aggregate Calculator</h1>
          <p className="text-gray-400">Calculate the volume and weight of aggregate, gravel or crushed stone needed.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 -mt-8 pb-20">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Length (m)</label>
                <input type="number" value={length} onChange={e => setLength(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Width (m)</label>
                <input type="number" value={width} onChange={e => setWidth(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Depth (mm)</label>
                <input type="number" value={depth} onChange={e => setDepth(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Density (tons/m³)</label>
              <select value={density} onChange={e => setDensity(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none">
                <option value="1.75">Crushed Stone (1.75)</option>
                <option value="1.68">Gravel (1.68)</option>
                <option value="1.5">Limestone (1.5)</option>
                <option value="1.6">Road Base (1.6)</option>
              </select>
            </div>
            <button onClick={calculate} className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl transition-all">Calculate Aggregate</button>
          </div>
          {result && (
            <div className="mt-6 p-5 bg-orange-50 rounded-xl border border-orange-200">
              <h3 className="font-bold text-gray-900 mb-3">Results</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-xl p-4 border border-orange-100">
                  <p className="text-gray-500">Volume</p>
                  <p className="text-2xl font-bold text-gray-900">{result.volume.toFixed(2)} m³</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-100">
                  <p className="text-gray-500">Approx. Weight</p>
                  <p className="text-2xl font-bold text-orange-600">{result.tons.toFixed(2)} tons</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
