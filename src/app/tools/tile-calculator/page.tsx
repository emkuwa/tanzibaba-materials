'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Square, ArrowLeft } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function TileCalculator() {
  const [areaLength, setAreaLength] = useState('');
  const [areaWidth, setAreaWidth] = useState('');
  const [tileSize, setTileSize] = useState('400');
  const [waste, setWaste] = useState('10');
  const [result, setResult] = useState<{ area: number; tiles: number; withWaste: number } | null>(null);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  const calculate = () => {
    const l = parseFloat(areaLength);
    const w = parseFloat(areaWidth);
    const size = parseInt(tileSize);
    const wastePct = parseFloat(waste) || 0;
    if (l > 0 && w > 0 && size > 0) {
      const area = l * w;
      const tileArea = (size / 1000) * (size / 1000);
      const tiles = Math.ceil(area / tileArea);
      setResult({ area, tiles, withWaste: Math.ceil(tiles * (1 + wastePct / 100)) });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gray-950 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/tools" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> All Tools</Link>
            <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1 rounded-full text-xs font-medium mb-3"><Square className="w-3.5 h-3.5" /> Calculator</div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Tile Calculator</h1>
            <p className="text-gray-400">Calculate the number of tiles needed for your floor or wall area.</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 -mt-8 pb-20">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area Length (m)</label>
                  <input type="number" step="0.1" value={areaLength} onChange={e => setAreaLength(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area Width (m)</label>
                  <input type="number" step="0.1" value={areaWidth} onChange={e => setAreaWidth(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tile Size</label>
                <select value={tileSize} onChange={e => setTileSize(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none">
                  <option value="300">300×300 mm</option>
                  <option value="400">400×400 mm</option>
                  <option value="500">500×500 mm</option>
                  <option value="600">600×600 mm</option>
                  <option value="800">800×800 mm</option>
                  <option value="1000">1000×1000 mm</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
                <input type="number" value={waste} onChange={e => setWaste(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
              <button onClick={calculate} className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl transition-all">Calculate Tiles</button>
            </div>
            {result && (
              <div className="mt-6 p-5 bg-purple-50 rounded-xl border border-purple-200">
                <h3 className="font-bold text-gray-900 mb-3">Results</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-white rounded-xl p-4 border border-purple-100">
                    <p className="text-gray-500">Area</p>
                    <p className="text-2xl font-bold text-gray-900">{result.area.toFixed(2)} m²</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-purple-100">
                    <p className="text-gray-500">Tiles Needed</p>
                    <p className="text-2xl font-bold text-gray-900">{result.tiles}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-purple-100">
                    <p className="text-gray-500">With Waste</p>
                    <p className="text-2xl font-bold text-purple-600">{result.withWaste}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowLeadCapture(true)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-all text-center"
              >
                WhatsApp Us
              </button>
              <a
                href="/get-quote"
                className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition-all text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/ready-mix-concrete-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-brand-50 hover:bg-brand-100 transition-colors text-sm font-medium text-brand-700">
              <span className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 font-bold">R</span>
              Ready-Mix Concrete
            </Link>
            <Link href="/aggregates-supplier-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors text-sm font-medium text-orange-700">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">A</span>
              Aggregates
            </Link>
            <Link href="/blocks-supplier-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-sm font-medium text-blue-700">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">B</span>
              Concrete Blocks
            </Link>
          </div>
        </div>
      </div>

      {showLeadCapture && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4" onClick={() => setShowLeadCapture(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-white w-full md:max-w-md md:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom duration-300" onClick={e => e.stopPropagation()}>
            <LeadCaptureForm
              product="Tiles"
              quantity={result ? `${result.withWaste} tiles` : ''}
              onClose={() => setShowLeadCapture(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
