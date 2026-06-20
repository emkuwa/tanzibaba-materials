'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PaintBucket, ArrowLeft } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function PaintCalculator() {
  const [wallLength, setWallLength] = useState('');
  const [wallHeight, setWallHeight] = useState('');
  const [coats, setCoats] = useState('2');
  const [result, setResult] = useState<{ area: number; litres: number; cans: number } | null>(null);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  const calculate = () => {
    const l = parseFloat(wallLength);
    const h = parseFloat(wallHeight);
    const c = parseInt(coats);
    if (l > 0 && h > 0) {
      const area = l * h * c;
      const litres = area / 12;
      const cans = Math.ceil(litres / 10);
      setResult({ area, litres, cans });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gray-950 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/tools" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> All Tools</Link>
            <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1 rounded-full text-xs font-medium mb-3"><PaintBucket className="w-3.5 h-3.5" /> Calculator</div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Paint Calculator</h1>
            <p className="text-gray-400">Estimate the amount of paint needed for your walls and ceilings.</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 -mt-8 pb-20">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total Wall Length (m)</label>
                  <input type="number" value={wallLength} onChange={e => setWallLength(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Wall Height (m)</label>
                  <input type="number" value={wallHeight} onChange={e => setWallHeight(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Coats</label>
                <select value={coats} onChange={e => setCoats(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none">
                  <option value="1">1 Coat</option>
                  <option value="2">2 Coats</option>
                  <option value="3">3 Coats</option>
                </select>
              </div>
              <button onClick={calculate} className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl transition-all">Calculate Paint</button>
            </div>
            {result && (
              <div className="mt-6 p-5 bg-pink-50 rounded-xl border border-pink-200">
                <h3 className="font-bold text-gray-900 mb-3">Results</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-white rounded-xl p-4 border border-pink-100">
                    <p className="text-gray-500">Total Area</p>
                    <p className="text-2xl font-bold text-gray-900">{result.area.toFixed(2)} m²</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-pink-100">
                    <p className="text-gray-500">Paint Needed</p>
                    <p className="text-2xl font-bold text-gray-900">{result.litres.toFixed(1)} L</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-pink-100">
                    <p className="text-gray-500">10L Cans</p>
                    <p className="text-2xl font-bold text-pink-600">{result.cans}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">* Based on coverage of 12 m²/L per coat.</p>
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
            <Link href="/blocks-supplier-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-sm font-medium text-blue-700">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">B</span>
              Concrete Blocks
            </Link>
            <Link href="/ready-mix-concrete-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-brand-50 hover:bg-brand-100 transition-colors text-sm font-medium text-brand-700">
              <span className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 font-bold">R</span>
              Ready-Mix Concrete
            </Link>
            <Link href="/aggregates-supplier-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors text-sm font-medium text-orange-700">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">A</span>
              Aggregates
            </Link>
          </div>
        </div>
      </div>

      {showLeadCapture && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4" onClick={() => setShowLeadCapture(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-white w-full md:max-w-md md:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom duration-300" onClick={e => e.stopPropagation()}>
            <LeadCaptureForm
              product="Paint"
              quantity={result ? `${result.litres.toFixed(1)} L` : ''}
              onClose={() => setShowLeadCapture(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
