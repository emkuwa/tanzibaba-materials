'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Download, Clock, Truck, FileText } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { api } from '@/lib/api';

interface QuoteItem {
  id: string;
  grade: string;
  quantity: number;
  unitPrice: number;
  total: number;
  gravelSize?: string;
  gravelUseCase?: string;
  gravelUnit?: string;
}

interface QuoteData {
  id: string;
  quoteNumber: string;
  productCategory?: string;
  projectType: string;
  siteLocation: string;
  district: string;
  concreteGrade?: string;
  quantityM3?: number;
  deliveryDate: string;
  pumpRequired: boolean;
  concreteCost?: number;
  deliveryCost?: number;
  pumpCost?: number;
  totalPrice?: number;
  status: string;
  notes?: string;
  createdAt: string;
  customer: { fullName: string; phoneNumber: string; whatsappNumber: string };
  invoices: { id: string; invoiceNumber: string }[];
  items?: QuoteItem[];
  order?: {
    id: string;
    status: string;
    supplier: { companyName: string; phoneNumber: string; contactPerson: string };
    statusUpdates: { status: string; note?: string; createdAt: string }[];
  };
}

const statusSteps = [
  { key: 'QUOTED', label: 'Quoted', icon: FileText },
  { key: 'ACCEPTED', label: 'Accepted', icon: CheckCircle },
  { key: 'SUPPLIER_ASSIGNED', label: 'Supplier Assigned', icon: Truck },
  { key: 'SUPPLIER_CONTACTED', label: 'Supplier Contacted', icon: Truck },
  { key: 'DELIVERED', label: 'Delivered', icon: CheckCircle },
];

export default function QuoteDetailPage() {
  const { id } = useParams();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
      return;
    }
    if (id && user) {
      api.quotes.getById(id as string)
        .then(setQuote)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id, user, authLoading, router]);

  const handleAccept = async () => {
    try {
      await api.quotes.accept(id as string);
      const updated = await api.quotes.getById(id as string);
      setQuote(updated);
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Quote not found</p>
      </div>
    );
  }

  const currentStepIndex = statusSteps.findIndex((s) => s.key === quote.status);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center">
          <Link href="/dashboard" className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand-600">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="card mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Quote Number</p>
              <h1 className="text-2xl font-bold text-gray-900 font-mono">{quote.quoteNumber}</h1>
            </div>
            <span className={`status-badge text-sm px-4 py-2 ${
              quote.status === 'DELIVERED' ? 'bg-green-100 text-green-700' :
              quote.status === 'ACCEPTED' ? 'bg-blue-100 text-blue-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {quote.status.replace('_', ' ')}
            </span>
          </div>

          <div className="flex items-center justify-between mb-6">
            {statusSteps.map((step, i) => {
              const isActive = i <= currentStepIndex;
              const Icon = step.icon;
              return (
                <div key={step.key} className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isActive ? 'bg-brand-600 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs ${isActive ? 'text-brand-600 font-medium' : 'text-gray-400'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {quote.status === 'QUOTED' && (
            <button onClick={handleAccept} className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" /> Accept Quote
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-3">Customer Information</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">Name:</span> <span className="font-medium">{quote.customer.fullName}</span></p>
              <p><span className="text-gray-500">Phone:</span> <span className="font-medium">{quote.customer.phoneNumber}</span></p>
              <p><span className="text-gray-500">WhatsApp:</span> <span className="font-medium">{quote.customer.whatsappNumber}</span></p>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-3">Project Information</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">Product:</span> <span className="font-medium">{quote.productCategory === 'gravel-aggregates' ? 'Gravel / Aggregates' : 'Ready-Mix Concrete'}</span></p>
              <p><span className="text-gray-500">Type:</span> <span className="font-medium">{quote.projectType}</span></p>
              <p><span className="text-gray-500">Location:</span> <span className="font-medium">{quote.siteLocation}</span></p>
              <p><span className="text-gray-500">District:</span> <span className="font-medium">{quote.district}</span></p>
              {quote.productCategory !== 'gravel-aggregates' && (
                <>
                  <p><span className="text-gray-500">Grade:</span> <span className="font-medium">{quote.concreteGrade}</span></p>
                  <p><span className="text-gray-500">Quantity:</span> <span className="font-medium">{quote.quantityM3} m³</span></p>
                  <p><span className="text-gray-500">Pump Required:</span> <span className="font-medium">{quote.pumpRequired ? 'Yes' : 'No'}</span></p>
                </>
              )}
              <p><span className="text-gray-500">Delivery:</span> <span className="font-medium">{new Date(quote.deliveryDate).toLocaleDateString('en-TZ')}</span></p>
            </div>
          </div>
        </div>

        <div className="card mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">
            {quote.productCategory === 'gravel-aggregates' ? 'Requirements' : 'Pricing Breakdown'}
          </h3>

          {quote.productCategory === 'gravel-aggregates' && quote.items && quote.items.length > 0 ? (
            <div className="space-y-2">
              {quote.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-amber-50 rounded-lg px-4 py-3">
                  <div>
                    <span className="font-medium text-sm text-gray-900">{item.gravelSize || item.grade}</span>
                    {item.gravelUseCase && <p className="text-xs text-gray-500">{item.gravelUseCase}</p>}
                  </div>
                  <span className="font-semibold text-sm text-gray-900">{item.quantity} {item.gravelUnit || 'Tons'}</span>
                </div>
              ))}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700 mt-3">
                Supplier pricing will be provided upon review of your requirements.
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Concrete Cost</span>
                <span className="font-medium">TZS {(quote.concreteCost || 0).toLocaleString('en-TZ')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Delivery Cost</span>
                <span className="font-medium">TZS {(quote.deliveryCost || 0).toLocaleString('en-TZ')}</span>
              </div>
              {quote.pumpCost ? (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Pump Cost</span>
                  <span className="font-medium">TZS {quote.pumpCost.toLocaleString('en-TZ')}</span>
                </div>
              ) : null}
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-brand-600">TZS {(quote.totalPrice || 0).toLocaleString('en-TZ')}</span>
              </div>
            </div>
          )}
        </div>

        {quote.order && (
          <div className="card mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Assigned Supplier</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">Company:</span> <span className="font-medium">{quote.order.supplier.companyName}</span></p>
              <p><span className="text-gray-500">Contact:</span> <span className="font-medium">{quote.order.supplier.contactPerson}</span></p>
              <p><span className="text-gray-500">Phone:</span> <span className="font-medium">{quote.order.supplier.phoneNumber}</span></p>
              <p><span className="text-gray-500">Order Status:</span> <span className="font-medium">{quote.order.status}</span></p>
            </div>
            {quote.order.statusUpdates && quote.order.statusUpdates.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Status Updates</h4>
                <div className="space-y-2">
                  {quote.order.statusUpdates.map((u, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-brand-600 rounded-full mt-1.5" />
                      <div>
                        <p className="font-medium text-gray-700">{u.status.replace('_', ' ')}</p>
                        {u.note && <p className="text-gray-500">{u.note}</p>}
                        <p className="text-xs text-gray-400">{new Date(u.createdAt).toLocaleString('en-TZ')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {quote.invoices && quote.invoices.length > 0 && (
          <div className="flex justify-center">
            <a
              href={api.invoices.getPdf(quote.id)}
              target="_blank"
              className="btn-primary inline-flex items-center gap-2"
              download
            >
              <Download className="w-5 h-5" /> Download Invoice PDF
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
