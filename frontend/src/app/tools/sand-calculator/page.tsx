'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function SandCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [depth, setDepth] = useState('');
  const [result, setResult] = useState<{ volume: number; tons: number } | null>(null);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

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
            <Link href="/aggregates-supplier-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors text-sm font-medium text-orange-700">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">A</span>
              Aggregates
            </Link>
            <Link href="/ready-mix-concrete-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-brand-50 hover:bg-brand-100 transition-colors text-sm font-medium text-brand-700">
              <span className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 font-bold">R</span>
              Ready-Mix Concrete
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
              product="Sand"
              quantity={result ? `${result.volume.toFixed(2)} m³` : ''}
              onClose={() => setShowLeadCapture(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
