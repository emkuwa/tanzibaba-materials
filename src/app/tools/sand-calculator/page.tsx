'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft } from 'lucide-react';

export default function SandCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [depth, setDepth] = useState('');
  const [result, setResult] = useState<{ volume: number; tons: number } | null>(null);

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    if (l > 0 && w > 0 && d > 0) {
      const volume = l * w * (d / 1000);
      const tons = volume * 1.6;
      setResult({ volume, tons });
    }
  };

  return (
    <>
      <head>
        <title>Sand Calculator | Calculate Sand Quantity | Tanzibaba</title>
        <meta name="description" content="Calculate sand quantity needed for concrete mixing, plastering and construction. Free online sand calculator for Tanzania." />
        <link rel="canonical" href="https://materials.tanzibaba.com/tools/sand-calculator" />
      </head>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/tools" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> All Tools</Link>
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1 rounded-full text-xs font-medium mb-3"><Calculator className="w-3.5 h-3.5" /> Calculator</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Sand Calculator</h1>
          <p className="text-gray-400">Calculate the volume and weight of sand needed for your construction project.</p>
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
            <button onClick={calculate} className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl transition-all">Calculate Sand</button>
          </div>
          {result && (
            <div className="mt-6 p-5 bg-yellow-50 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-3">Results</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-xl p-4 border border-yellow-100">
                  <p className="text-gray-500">Volume</p>
                  <p className="text-2xl font-bold text-gray-900">{result.volume.toFixed(2)} m³</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-yellow-100">
                  <p className="text-gray-500">Approx. Weight</p>
                  <p className="text-2xl font-bold text-yellow-600">{result.tons.toFixed(2)} tons</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">* Based on density of 1.6 tons/m³ for dry sand.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
