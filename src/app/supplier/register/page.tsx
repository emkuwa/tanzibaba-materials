'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { api } from '@/lib/api';

export default function SupplierRegisterPage() {
  const [form, setForm] = useState({
    companyName: '',
    contactPerson: '',
    phoneNumber: '',
    email: '',
    password: '',
    capacity: '',
    coverageAreas: [] as string[],
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const districts = ['Kinondoni', 'Ilala', 'Ubungo', 'Kigamboni', 'Temeke'];

  const toggleDistrict = (d: string) => {
    setForm((prev) => ({
      ...prev,
      coverageAreas: prev.coverageAreas.includes(d)
        ? prev.coverageAreas.filter((a) => a !== d)
        : [...prev.coverageAreas, d],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await api.suppliers.create({
        ...form,
        capacity: parseInt(form.capacity),
        status: 'ACTIVE',
        coverageAreas: form.coverageAreas,
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <head><meta name="robots" content="noindex, nofollow" /></head>
      <Navbar />
      <main className="pt-24 pb-16 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-600 mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          {success ? (
            <div className="card text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Submitted!</h2>
              <p className="text-gray-500 mb-6">We will review your application and get back to you within 24 hours.</p>
              <Link href="/" className="btn-primary">Back to Home</Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Supplier Network</h1>
                <p className="text-gray-500">Expand your reach and get more orders through Tanzibaba.</p>
              </div>

              <div className="card">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                      <input type="text" className="input-field" value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                      <input type="text" className="input-field" value={form.contactPerson} onChange={(e) => setForm({ ...form, contactPerson: e.target.value })} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input type="tel" className="input-field" value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input type="email" className="input-field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                      <input type="password" className="input-field" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required minLength={6} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Daily Capacity (m³) *</label>
                      <input type="number" className="input-field" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Areas *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {districts.map((d) => (
                        <label key={d} className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input type="checkbox" checked={form.coverageAreas.includes(d)} onChange={() => toggleDistrict(d)} className="text-brand-600" />
                          <span className="text-sm">{d}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg py-4" disabled={loading}>
                    {loading ? 'Submitting...' : 'Register as Supplier'}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By registering, you agree to Tanzibaba's terms and conditions. Our team will verify your application.
                  </p>
                </form>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
