'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FileText, CheckCircle, Truck, Clock, LogOut, Download, ArrowRight } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { api } from '@/lib/api';
import { Quote } from '@/types';

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
  SUBMITTED: { label: 'Submitted', color: 'bg-gray-100 text-gray-700', icon: Clock },
  QUOTED: { label: 'Quoted', color: 'bg-blue-100 text-blue-700', icon: FileText },
  ACCEPTED: { label: 'Accepted', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  SUPPLIER_ASSIGNED: { label: 'Supplier Assigned', color: 'bg-purple-100 text-purple-700', icon: Truck },
  SUPPLIER_CONTACTED: { label: 'Supplier Contacted', color: 'bg-indigo-100 text-indigo-700', icon: Truck },
  DELIVERED: { label: 'Delivered', color: 'bg-brand-100 text-brand-700', icon: CheckCircle },
  CANCELLED: { label: 'Cancelled', color: 'bg-red-100 text-red-700', icon: Clock },
};

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loadingQuotes, setLoadingQuotes] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
      return;
    }
    if (user) {
      api.quotes.getAll().then((res) => {
        setQuotes(res.quotes);
        setLoadingQuotes(false);
      }).catch(() => setLoadingQuotes(false));
    }
  }, [user, loading, router]);

  if (loading || loadingQuotes) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  const handleAccept = async (quoteId: string) => {
    try {
      await api.quotes.accept(quoteId);
      const res = await api.quotes.getAll();
      setQuotes(res.quotes);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <>
      <head><meta name="robots" content="noindex, nofollow" /></head>
      <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Tanzibaba</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{user?.email}</span>
            <button onClick={logout} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Quotes</h1>
            <p className="text-gray-500 text-sm">Track and manage your concrete supply requests.</p>
          </div>
          <Link href="/get-quote" className="btn-primary mt-4 sm:mt-0 inline-flex items-center gap-2">
            New Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {quotes.length === 0 ? (
          <div className="card text-center py-12">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Quotes Yet</h3>
            <p className="text-gray-500 mb-6">Get your first free quote for your project.</p>
            <Link href="/get-quote" className="btn-primary">Get Price Estimate</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {quotes.map((quote) => {
              const StatusIcon = statusConfig[quote.status]?.icon || Clock;
              return (
                <div key={quote.id} className="card hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-sm text-brand-600 font-bold">{quote.quoteNumber}</span>
                        <span className={`status-badge ${statusConfig[quote.status]?.color || 'bg-gray-100 text-gray-700'} flex items-center gap-1`}>
                          <StatusIcon className="w-3 h-3" />
                          {statusConfig[quote.status]?.label || quote.status}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{quote.projectType}</h3>
                      <p className="text-sm text-gray-500">
                        {quote.productCategory === 'gravel-aggregates' ? 'Gravel / Aggregates' : quote.concreteGrade || 'Concrete'}
                        {quote.quantityM3 ? ` | ${quote.quantityM3} m³` : ''}
                        {quote.items && quote.items.length > 0 ? ` | ${quote.items.length} item(s)` : ''}
                        {' | '}{quote.district} | {new Date(quote.deliveryDate).toLocaleDateString('en-TZ')}
                      </p>
                      {quote.totalPrice && (
                        <p className="text-lg font-bold text-brand-600 mt-1">
                          TZS {quote.totalPrice.toLocaleString('en-TZ')}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href={`/quote/${quote.id}`} className="btn-outline text-sm">
                        View Details
                      </Link>
                      {quote.status === 'QUOTED' && (
                        <button onClick={() => handleAccept(quote.id)} className="btn-primary text-sm">
                          Accept Quote
                        </button>
                      )}
                      {quote.invoices && quote.invoices.length > 0 && (
                        <a
                          href={api.invoices.getPdf(quote.id)}
                          target="_blank"
                          className="btn-outline text-sm flex items-center gap-1"
                          download
                        >
                          <Download className="w-4 h-4" /> PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
    </>
  );
}
