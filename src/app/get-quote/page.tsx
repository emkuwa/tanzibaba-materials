'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft, CheckCircle, ChevronRight, ChevronLeft, MapPin, Truck, HelpCircle, Calendar, User, MessageCircle,
  Building2, FileText, Building, Layers, Columns3, House, Store, Warehouse, Route, HardHat, ClipboardList,
  Grid3x3, Paintbrush, RefreshCw, Check, X, Package, Plus, Trash2, Send,
  Diamond, Square, Blocks
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { api } from '@/lib/api';
import {
  projectTypes, gravelProjectTypes, projectStages, concreteClasses,
  concreteGradeOptions, gravelSizes, gravelQtyPresets,
  productCategories, hollowBlockSpecs, solidBlockSpecs, pavingBlockSpecs, paverTileSpecs,
  kerbstoneSpecs, culvertPipeSpecs,
  getBasePrice, getGravelPricePerTon, getGravelTransportPerTon,
  productPrices, fmt, tonnageCost, productImages
} from '@/data/constants';

const localDistricts = ['Kinondoni', 'Ubungo', 'Ilala', 'Temeke', 'Kigamboni', 'Other'] as const;

const quantityRanges = [
  { label: '1–5 m³', mid: 3 },
  { label: '5–10 m³', mid: 7.5 },
  { label: '10–20 m³', mid: 15 },
  { label: '20–30 m³', mid: 25 },
  { label: '30–50 m³', mid: 40 },
  { label: '50–75 m³', mid: 62.5 },
  { label: '75–100 m³', mid: 87.5 },
  { label: '100–150 m³', mid: 125 },
  { label: '150–200 m³', mid: 175 },
  { label: '200–300 m³', mid: 250 },
  { label: '300+ m³', mid: 350 },
] as const;

const deliveryOptions = [
  { label: 'Today', getDate: () => new Date() },
  { label: 'Tomorrow', getDate: () => { const d = new Date(); d.setDate(d.getDate() + 1); return d; } },
  { label: 'This Week', getDate: () => { const d = new Date(); d.setDate(d.getDate() + 3); return d; } },
  { label: 'Custom Date', getDate: () => null },
] as const;

const truckQuantities = [
  { label: '1 Truck', value: '1' },
  { label: '2 Trucks', value: '2' },
  { label: '3 Trucks', value: '3' },
  { label: '5 Trucks', value: '5' },
  { label: '10+ Trucks', value: '10-plus' },
] as const;

export default function GetQuotePage() {
  const [step, setStep] = useState(1);

  const [productCategory, setProductCategory] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [district, setDistrict] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectStage, setProjectStage] = useState('');
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [quantityLabel, setQuantityLabel] = useState('');
  const [customQuantity, setCustomQuantity] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [pump, setPump] = useState<'yes' | 'no' | 'not-sure' | null>(null);
  const [deliveryLabel, setDeliveryLabel] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [customDate, setCustomDate] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [selectedSpec, setSelectedSpec] = useState('');
  const [productQtyMode, setProductQtyMode] = useState('');
  const [productQtyValue, setProductQtyValue] = useState('');
  const [productQtyCustom, setProductQtyCustom] = useState('');

  const [gravelRequirements, setGravelRequirements] = useState<Array<{ size: string; useCase: string; qty: string; unit: string }>>([]);
  const [pendingGravelSize, setPendingGravelSize] = useState('');
  const [pendingGravelQty, setPendingGravelQty] = useState('');
  const [pendingGravelUnit, setPendingGravelUnit] = useState('Tons');
  const [gravelQtyMode, setGravelQtyMode] = useState<'truck' | 'tons' | 'custom'>('tons');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [quote, setQuote] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  const isConcrete = productCategory === 'ready-mix-concrete';
  const isGravel = productCategory === 'gravel-aggregates';
  const isMulti = productCategory === 'multiple';
  const isNotSure = productCategory === 'not-sure';
  const hasNotSure = selectedGrades.includes('Not Sure');

  const productSpecMap: Record<string, any> = {
    'hollow-blocks': hollowBlockSpecs,
    'solid-blocks': solidBlockSpecs,
    'paving-blocks': pavingBlockSpecs,
    'paver-tiles': paverTileSpecs,
    'kerbstones': kerbstoneSpecs,
    'culvert-pipes': culvertPipeSpecs,
  };
  const needsSpec = productCategory ? productCategory in productSpecMap : false;
  const isOtherProduct = productCategory && !isConcrete && !isGravel && !isMulti && !isNotSure && !needsSpec;
  const categoryLabel = productCategories.find(c => c.id === productCategory)?.label || productCategory || 'Construction Materials';
  const specOptions = productCategory && productCategory in productSpecMap ? productSpecMap[productCategory] : [];

  const qty = useMemo(() => {
    if (isCustom) return parseFloat(customQuantity) || 0;
    const range = quantityRanges.find(r => r.label === quantityLabel);
    return range ? range.mid : 0;
  }, [quantityLabel, customQuantity, isCustom]);

  const effectiveDate = deliveryLabel === 'Custom Date' ? customDate : deliveryDate;

  const pricing = useMemo(() => {
    if (isConcrete) {
      const grades = selectedGrades.filter(g => g !== 'Not Sure');
      if (grades.length === 0 || qty <= 0) return null;
      const avgBase = grades.reduce((sum, g) => sum + getBasePrice(g), 0) / grades.length;
      const concreteCost = qty * avgBase;
      const deliveryCost = 15 * qty * 5000;
      const pumpCost = pump === 'yes' ? 150000 + qty * 5000 : 0;
      const subtotal = concreteCost + deliveryCost + pumpCost;
      const vat = subtotal * 0.18;
      const grandTotal = subtotal + vat;
      return { type: 'concrete' as const, materialCost: concreteCost, transportCost: deliveryCost, pumpCost, subtotal, vat, grandTotal, avgBase, grades };
    }
    if (needsSpec && selectedSpec && productCategory) {
      const basePrice = productPrices[productCategory] || 25000;
      const val = parseFloat(productQtyValue) || 1;
      const materialCost = basePrice * val;
      const deliveryCost = val * 1500;
      const subtotal = materialCost + deliveryCost;
      const vat = subtotal * 0.18;
      const grandTotal = subtotal + vat;
      return { type: 'product' as const, materialCost, transportCost: deliveryCost, subtotal, vat, grandTotal, spec: selectedSpec };
    }
    if (isOtherProduct && productCategory) {
      const basePrice = productPrices[productCategory] || 50000;
      const val = parseFloat(productQtyValue) || 1;
      const materialCost = basePrice * val;
      const deliveryCost = val * 2000;
      const subtotal = materialCost + deliveryCost;
      const vat = subtotal * 0.18;
      const grandTotal = subtotal + vat;
      return { type: 'other' as const, materialCost, transportCost: deliveryCost, subtotal, vat, grandTotal };
    }
    return null;
  }, [selectedGrades, qty, pump, isConcrete, needsSpec, selectedSpec, productQtyValue, isOtherProduct, productCategory, productQtyMode]);

  const isQuickProduct = isNotSure || isOtherProduct || (needsSpec && !productCategory);
  const totalSteps = isConcrete ? 10 : isGravel ? 8 : isNotSure ? 4 : (needsSpec ? 6 : isMulti ? 5 : 5);

  const stepLabels: Record<number, string> = {
    1: 'Product Category',
    2: 'Contact Info',
    3: 'Location',
    4: 'Project Type',
    5: isConcrete ? 'Project Stage' : isGravel ? 'Gravel Requirements' : (needsSpec ? 'Specifications' : 'Summary & Submit'),
    6: isConcrete ? 'Concrete Classes' : isGravel ? 'Delivery Date' : 'Summary & Submit',
    7: isConcrete ? 'Quantity' : isGravel ? 'Special Requirements' : undefined,
    8: isConcrete ? 'Pump' : undefined,
    9: isConcrete ? 'Delivery Date' : undefined,
    10: isConcrete ? 'Summary & Submit' : undefined,
  } as Record<number, string>;

  const toggleGrade = (grade: string) => {
    if (grade === 'Not Sure') {
      setSelectedGrades(prev => prev.includes('Not Sure') ? prev.filter(g => g !== 'Not Sure') : [...prev.filter(g => g !== 'Not Sure'), 'Not Sure']);
      return;
    }
    setSelectedGrades(prev => {
      const withoutNotSure = prev.filter(g => g !== 'Not Sure');
      if (withoutNotSure.includes(grade)) return withoutNotSure.filter(g => g !== grade);
      return [...withoutNotSure, grade];
    });
  };

  const addGravelRequirement = () => {
    if (pendingGravelSize && pendingGravelQty && parseFloat(pendingGravelQty) > 0) {
      const size = gravelSizes.find(s => s.id === pendingGravelSize);
      setGravelRequirements(prev => [...prev, {
        size: pendingGravelSize,
        useCase: size?.uses.join(', ') || '',
        qty: pendingGravelQty,
        unit: pendingGravelUnit,
      }]);
      setPendingGravelSize('');
      setPendingGravelQty('');
      setPendingGravelUnit('Tons');
      setGravelQtyMode('tons');
    }
  };

  const removeGravelRequirement = (index: number) => {
    setGravelRequirements(prev => prev.filter((_, i) => i !== index));
  };

  const gravelSizeLabel = (id: string) => gravelSizes.find(s => s.id === id)?.label || id;

  const canProceed = (s: number) => {
    switch (s) {
      case 1: return !!productCategory;
      case 2: return name.trim().length >= 2 && whatsapp.trim().length >= 7;
      case 3: return !!district;
      case 4: return !!projectType;
      case 5: return isConcrete ? !!projectStage : isGravel ? (gravelRequirements.length > 0) : (needsSpec ? !!selectedSpec : true);
      case 6: return isConcrete ? (selectedGrades.length > 0) : isGravel ? !!effectiveDate : true;
      case 7: return isConcrete ? (qty > 0) : true;
      case 8: return isConcrete ? (pump !== null) : true;
      case 9: return isConcrete ? !!effectiveDate : true;
      default: return true;
    }
  };

  const handleNext = () => {
    if (isNotSure) {
      if (step === 5) return;
      setStep(step + 1);
      return;
    }
    if (needsSpec) {
      if (step === 5) { if (selectedSpec) setStep(6); return; }
      if (step === 6) return;
      setStep(step + 1);
      return;
    }
    if (isOtherProduct || isMulti) {
      if (step === 4) { setStep(5); return; }
    }
    if (isGravel) {
      if (step === 5) setStep(6);
      else setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const submitQuote = async (accept: boolean) => {
    setError('');
    setLoading(true);
    try {
      const body: Record<string, any> = {
        fullName: name,
        phoneNumber: whatsapp,
        whatsappNumber: whatsapp,
        productCategory,
        projectType,
        projectStage: isConcrete ? projectStage : undefined,
        siteLocation: district,
        district,
        deliveryDate: effectiveDate,
        pumpRequired: pump === 'yes',
        specialRequirements,
        selectedSpec: needsSpec ? selectedSpec : undefined,
        productQuantityMode: (needsSpec || isOtherProduct) ? productQtyMode : undefined,
        productQuantityValue: (needsSpec || isOtherProduct) ? productQtyValue : undefined,
        productQuantityCustom: (needsSpec || isOtherProduct) ? productQtyCustom : undefined,
      };
      if (isConcrete) {
        body.concreteGrade = hasNotSure ? 'Not Sure' : selectedGrades.join(', ');
        body.quantityM3 = qty;
      }
      if (isGravel) {
        body.gravelItems = gravelRequirements.map(r => ({
          gravelSize: r.size,
          gravelUseCase: r.useCase,
          quantity: parseFloat(r.qty),
          gravelUnit: r.unit,
        }));
      }
      const res = await api.quotes.request(body);
      setQuote(res);
      if (accept && res.quote?.id) {
        await api.quotes.accept(res.quote.id);
        const updated = await api.quotes.getById(res.quote.id);
        setQuote({ ...res, quote: updated });
      }
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDeliverySelect = (label: string) => {
    const opt = deliveryOptions.find(o => o.label === label);
    if (!opt) return;
    setDeliveryLabel(label);
    if (label !== 'Custom Date') {
      const d = opt.getDate() as Date;
      setDeliveryDate(d.toISOString().split('T')[0]);
      setCustomDate('');
    } else {
      setDeliveryDate('');
    }
  };

  if (submitted && quote) {
    const quoteCategory = quote.quote?.productCategory;
    return (
      <>
        <Navbar />
        <main className="pt-20 pb-28 px-4 bg-gray-50 min-h-screen">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Request Received!</h1>
            <p className="text-sm text-gray-500 mb-1">
              Ref: <span className="font-mono font-bold text-brand-600">{quote.quote?.quoteNumber}</span>
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Our team will review your requirements and provide pricing within 24 hours.
            </p>

            <div className="bg-white rounded-2xl border border-gray-200 p-5 text-left mb-5 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Requirements Summary</h3>
              {quoteCategory === 'gravel-aggregates' && quote.quote?.items && quote.quote.items.length > 0 ? (
                <div className="space-y-2">
                  {quote.quote.items.map((item: any, i: number) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                      <div>
                        <span className="font-medium text-sm text-gray-900">{item.gravelSize || item.grade}</span>
                        {item.gravelUseCase && <p className="text-xs text-gray-500">{item.gravelUseCase}</p>}
                      </div>
                      <span className="font-semibold text-sm text-gray-900">{item.quantity} {item.gravelUnit || 'Tons'}</span>
                    </div>
                  ))}
                </div>
              ) : quoteCategory === 'ready-mix-concrete' && (
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{qty} m³ @ avg TZS {fmt(pricing?.avgBase || 0)}/m³</span>
                    <span className="font-semibold">TZS {fmt(quote.pricing?.materialCost || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Cost</span>
                    <span className="font-semibold">TZS {fmt(quote.pricing?.transportCost || 0)}</span>
                  </div>
                  {(quote.pricing?.pumpCost || 0) > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pump Cost</span>
                      <span className="font-semibold">TZS {fmt(quote.pricing.pumpCost)}</span>
                    </div>
                  )}
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Grand Total</span>
                    <span className="text-brand-600">TZS {fmt(quote.pricing?.totalPrice || 0)}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-left text-amber-800 leading-relaxed">
              <p className="font-semibold mb-1">Tanzibaba — {categoryLabel}</p>
              <p className="mb-1">Your requirements have been received. We will prepare supplier pricing and contact you.</p>
              <p className="font-semibold">Expect a response within 24 hours.</p>
            </div>

            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200"><CheckCircle className="w-3 h-3" /> Fast Response</span>
              {quoteCategory !== 'gravel-aggregates' && <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200"><CheckCircle className="w-3 h-3" /> Quality Materials</span>}
            </div>

            {quote.quote?.id && (
              <Link href={`/quote/${quote.quote.id}`} className="btn-primary w-full block text-center mb-2">
                View Full Details
              </Link>
            )}
            <Link href="/" className="btn-secondary w-full block text-center mt-2">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  function InputField({ label, value, onChange, placeholder, type = 'text', icon }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; icon?: React.ReactNode }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
        <div className="relative">
          {icon && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>}
          <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
            className={`input-field ${icon ? 'pl-10' : ''}`} />
        </div>
      </div>
    );
  }

  function renderStepContent() {
    // Step 1 — Product Category
    if (step === 1) {
      return (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">What materials do you need?</h2>
          <p className="text-sm text-gray-500 mb-5">We'll help determine the best product, size and quantity.</p>
          <div className="space-y-2">
            {productCategories.map(c => (
              <button key={c.id} onClick={() => { setProductCategory(c.id); setProjectType(''); setProjectStage(''); setSelectedGrades([]); setGravelRequirements([]); setPump(null); }}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${productCategory === c.id ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="flex items-center gap-3">
                  {(productImages[c.id] ? (
                    <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-gray-200">
                      <Image src={productImages[c.id]} alt={c.label} width={40} height={40} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${productCategory === c.id ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <c.icon className="w-5 h-5" />
                    </div>
                  ))}
                  <div>
                    <span className="text-sm font-semibold block">{c.label}</span>
                    <span className="text-xs text-gray-400">{c.desc}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 2 — Customer Details
    if (step === 2) {
      return (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Your Details</h2>
          <p className="text-sm text-gray-500 mb-5">Enter your details to get a quick price estimate.</p>
          <div className="space-y-4">
            <InputField label="Full Name *" value={name} onChange={setName} placeholder="Your full name" icon={<User className="w-4 h-4" />} />
            <InputField label="WhatsApp Number *" value={whatsapp} onChange={setWhatsapp} placeholder="e.g. 0712 345 678" type="tel" icon={<MessageCircle className="w-4 h-4" />} />
            <p className="text-xs text-gray-400">Your WhatsApp number will be used for all communication.</p>
          </div>
        </div>
      );
    }

    // Step 3 — Location
    if (step === 3) {
      return (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Project Location</h2>
          <p className="text-sm text-gray-500 mb-4">Where is your construction site?</p>
          <div className="grid grid-cols-1 gap-2">
            {localDistricts.map(d => (
              <button key={d} onClick={() => setDistrict(d)}
                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${district === d ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${district === d ? 'border-brand-600' : 'border-gray-300'}`}>
                  {district === d && <div className="w-2.5 h-2.5 bg-brand-600 rounded-full" />}
                </div>
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="font-medium">{d}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 4 — Project Type
    if (step === 4) {
      const types = isGravel ? gravelProjectTypes : projectTypes;
      return (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Project Type</h2>
          <p className="text-sm text-gray-500 mb-4">What type of project is this for?</p>
          <div className="grid grid-cols-2 gap-2">
            {types.map(p => (
              <button key={p.label} onClick={() => setProjectType(p.label)}
                className={`p-3.5 rounded-xl border-2 text-center transition-all ${projectType === p.label ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                <p.icon className="w-6 h-6 mx-auto mb-1.5" />
                <span className="text-sm font-medium block leading-tight">{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 5 — Project Stage (concrete) OR Gravel Size + Quantity OR Spec Selection
    if (step === 5) {
      if (needsSpec && specOptions.length > 0) {
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Specifications</h2>
            <p className="text-sm text-gray-500 mb-4">Select your {categoryLabel.toLowerCase()} size.</p>
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
              {specOptions.map((spec: any, i: number) => (
                <button key={i} onClick={() => setSelectedSpec(spec.label || spec)}
                  className={`w-full p-3.5 rounded-xl border-2 text-left transition-all ${selectedSpec === (spec.label || spec) ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <span className="font-semibold text-sm">{spec.label || spec}</span>
                </button>
              ))}
            </div>
            {selectedSpec && (
              <div className="mt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Quantity</p>
                <div className="space-y-2">
                  {[
                    { id: 'fuso', label: 'Fuso Truck (5-8 Tons)' },
                    { id: 'scania', label: 'Scania Truck (20-30 Tons)' },
                    { id: 'howo', label: 'Howo Truck (25-40 Tons)' },
                    { id: 'tons', label: 'Tons', dashed: true },
                    { id: 'cbm', label: 'CBM (Cubic Meters)', dashed: true },
                    { id: 'custom', label: 'Custom Quantity', dashed: true },
                    { id: 'not-sure', label: 'Not Sure' },
                  ].map(opt => (
                    <button key={opt.id} onClick={() => {
                      setProductQtyMode(opt.id);
                      if (['fuso','scania','howo','not-sure'].includes(opt.id)) setProductQtyValue(opt.label);
                    }}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                        productQtyMode === opt.id ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-gray-300'
                      } ${opt.dashed ? 'border-dashed' : ''}`}>
                      <span className="text-sm font-semibold block">{opt.label}</span>
                    </button>
                  ))}
                </div>
                {(productQtyMode === 'tons' || productQtyMode === 'cbm') && (
                  <div className="mt-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Quantity in {productQtyMode === 'tons' ? 'Tons' : 'Cubic Meters'}</label>
                    <input type="number" step="0.5" min="0.5" value={productQtyValue} onChange={e => setProductQtyValue(e.target.value)}
                      className="input-field text-sm" placeholder={productQtyMode === 'tons' ? 'e.g. 100' : 'e.g. 50'} />
                  </div>
                )}
                {productQtyMode === 'custom' && (
                  <div className="mt-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Describe your quantity</label>
                    <textarea value={productQtyCustom} onChange={e => setProductQtyCustom(e.target.value)}
                      className="input-field text-sm" rows={2} placeholder="e.g. 500 pieces of hollow blocks" />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      }
      if (isConcrete) {
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Project Stage</h2>
            <p className="text-sm text-gray-500 mb-4">What stage is your project currently at?</p>
            <div className="grid grid-cols-1 gap-2">
              {projectStages.map(s => (
                <button key={s.label} onClick={() => setProjectStage(s.label)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${projectStage === s.label ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                  <s.icon className="w-5 h-5 text-brand-600" />
                  <span className="font-medium">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      }
      // Gravel: Size + Quantity
      return (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Gravel Size &amp; Quantity</h2>
          <p className="text-sm text-gray-500 mb-4">Select gravel sizes with use cases. Add as many items as needed.</p>

          <div className="space-y-2 mb-3">
            {gravelRequirements.length === 0 && (
              <p className="text-xs text-gray-400 text-center py-3 bg-gray-50 rounded-xl border border-dashed border-gray-200">No gravel requirements added yet.</p>
            )}
            {gravelRequirements.map((r, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 border border-gray-100">
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-sm text-gray-900 block truncate">{gravelSizeLabel(r.size)}</span>
                  <span className="text-xs text-gray-500">{r.qty} {r.unit}</span>
                </div>
                <button onClick={() => removeGravelRequirement(i)} className="text-red-500 hover:text-red-700 text-xs font-medium flex items-center gap-1 p-1 shrink-0">
                  <Trash2 className="w-3.5 h-3.5" /> Remove
                </button>
              </div>
            ))}
          </div>

          <details className="group bg-gray-50 rounded-xl border border-gray-200">
            <summary className="flex items-center gap-2 px-3 py-2.5 text-xs font-semibold text-brand-600 cursor-pointer hover:text-brand-700">
              <Plus className="w-4 h-4" /> Add Gravel Requirement
            </summary>
            <div className="px-3 pb-3 border-t border-gray-200 pt-3 space-y-3">
              <div>
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Gravel Size</p>
                <div className="grid grid-cols-2 gap-1.5 max-h-[200px] overflow-y-auto">
                  {gravelSizes.map(s => (
                    <button key={s.id} onClick={() => setPendingGravelSize(s.id)}
                      className={`px-3 py-2 rounded-lg border text-left transition-all ${pendingGravelSize === s.id ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <span className={`text-xs font-semibold block ${pendingGravelSize === s.id ? 'text-brand-700' : 'text-gray-700'}`}>{s.label}</span>
                      <span className="text-[10px] text-gray-400 block mt-0.5">{s.uses.join(', ')}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Quantity</p>
                <div className="flex gap-1.5 mb-2">
                  {(['truck', 'tons', 'custom'] as const).map(mode => (
                    <button key={mode} onClick={() => setGravelQtyMode(mode)}
                      className={`flex-1 px-2 py-1.5 rounded-lg border text-xs font-medium text-center transition-all ${gravelQtyMode === mode ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                      {mode === 'truck' ? 'By Truck' : mode === 'tons' ? 'By Quantity' : 'Custom'}
                    </button>
                  ))}
                </div>

                {gravelQtyMode === 'truck' && (
                  <div className="grid grid-cols-2 gap-1">
                    {truckQuantities.map(t => (
                      <button key={t.value} onClick={() => { setPendingGravelQty(t.value); setPendingGravelUnit('Truck'); }}
                        className={`px-3 py-2 rounded-lg border text-xs font-medium text-center transition-all ${pendingGravelQty === t.value && gravelQtyMode === 'truck' ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                        {t.label}
                      </button>
                    ))}
                  </div>
                )}

                {gravelQtyMode === 'tons' && (
                  <div className="grid grid-cols-2 gap-1">
                    {gravelQtyPresets.map(p => (
                      <button key={p.value} onClick={() => { setPendingGravelQty(p.value); setPendingGravelUnit('Tons'); }}
                        className={`px-3 py-2 rounded-lg border text-xs font-medium text-center transition-all ${pendingGravelQty === p.value && gravelQtyMode === 'tons' ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                        {p.label}
                      </button>
                    ))}
                  </div>
                )}

                {gravelQtyMode === 'custom' && (
                  <div>
                    <div className="flex gap-2">
                      <input type="number" step="0.5" min="0.5" value={pendingGravelQty} onChange={e => setPendingGravelQty(e.target.value)}
                        className="input-field text-xs flex-1" placeholder="e.g. 50" />
                      <select value={pendingGravelUnit} onChange={e => setPendingGravelUnit(e.target.value)} className="input-field text-xs w-auto">
                        <option value="Tons">Tons</option>
                        <option value="Cubic Meters">Cubic Meters</option>
                        <option value="Truck">Trucks</option>
                      </select>
                    </div>
                    <p className="text-[10px] text-amber-600 mt-1.5 flex items-center gap-1">
                      <HelpCircle className="w-3 h-3" /> Not sure how much you need? Select <strong>Not Sure</strong> above and our team will assist.
                    </p>
                  </div>
                )}
              </div>

              <button onClick={addGravelRequirement} disabled={!pendingGravelSize || !pendingGravelQty || parseFloat(pendingGravelQty) <= 0}
                className="w-full px-3 py-2 bg-brand-600 text-white rounded-xl text-xs font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Add to List
              </button>
            </div>
          </details>
        </div>
      );
    }

    // Step 6 — Concrete Classes (concrete) OR Delivery Date (gravel) OR Summary (spec/other)
    if (step === 6) {
      if (needsSpec || isOtherProduct || isNotSure || isMulti) {
        return renderSummary(true);
      }
      if (isConcrete) {
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Concrete Classes</h2>
            <p className="text-sm text-gray-500 mb-4">Select one or more concrete classes for your project.</p>
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
              {concreteClasses.map(c => {
                const selected = selectedGrades.includes(c.grade);
                return (
                  <button key={c.grade} onClick={() => toggleGrade(c.grade)}
                    className={`w-full p-3.5 rounded-xl border-2 text-left transition-all ${selected ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${selected ? 'bg-brand-600 border-brand-600 text-white' : 'border-gray-300'}`}>
                        {selected && <CheckCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <span className={`font-bold text-base ${selected ? 'text-brand-700' : 'text-gray-900'}`}>{c.grade}</span>
                        <p className="text-xs text-gray-500 mt-0.5">{c.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
              <button onClick={() => toggleGrade('Not Sure')}
                className={`w-full p-3.5 rounded-xl border-2 border-dashed text-left transition-all ${hasNotSure ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${hasNotSure ? 'bg-brand-600 border-brand-600 text-white' : 'border-gray-300'}`}>
                    {hasNotSure && <CheckCircle className="w-4 h-4" />}
                  </div>
                  <HelpCircle className={`w-5 h-5 ${hasNotSure ? 'text-brand-600' : 'text-gray-400'}`} />
                  <span className={`font-medium text-sm ${hasNotSure ? 'text-brand-700' : 'text-gray-600'}`}>Not Sure</span>
                </div>
              </button>
            </div>
            {selectedGrades.filter(g => g !== 'Not Sure').length > 1 && (
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-700">
                You selected {selectedGrades.filter(g => g !== 'Not Sure').length} classes. Pricing uses the average rate.
              </div>
            )}
          </div>
        );
      }
      // Gravel: Delivery Date
      return (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Delivery Date</h2>
          <p className="text-sm text-gray-500 mb-4">When do you need delivery?</p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {deliveryOptions.map(o => (
              <button key={o.label} onClick={() => handleDeliverySelect(o.label)}
                className={`p-3.5 rounded-xl border-2 text-center transition-all ${deliveryLabel === o.label ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                <Calendar className={`w-5 h-5 mx-auto mb-1 ${deliveryLabel === o.label ? 'text-brand-600' : 'text-gray-400'}`} />
                <span className="text-sm font-medium">{o.label}</span>
              </button>
            ))}
          </div>
          {deliveryLabel === 'Custom Date' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pick a date</label>
              <input type="date" className="input-field" value={customDate}
                onChange={e => setCustomDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]} />
            </div>
          )}
        </div>
      );
    }

    // Step 7 — Quantity (concrete) OR Special Requirements (gravel)
    if (step === 7) {
      if (isConcrete) {
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Quantity</h2>
            <p className="text-sm text-gray-500 mb-4">How much concrete do you need?</p>
            <div className="grid grid-cols-2 gap-2">
              {quantityRanges.map(r => (
                <button key={r.label} onClick={() => { setQuantityLabel(r.label); setIsCustom(false); }}
                  className={`p-3 rounded-xl border-2 text-center transition-all ${!isCustom && quantityLabel === r.label ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                  <span className="block font-bold text-sm">{r.label}</span>
                </button>
              ))}
              <button onClick={() => { setQuantityLabel('Custom'); setIsCustom(true); }}
                className={`p-3 rounded-xl border-2 border-dashed text-center transition-all ${isCustom ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                <span className="block font-bold text-sm">Custom</span>
                <span className="text-xs">Enter amount</span>
              </button>
            </div>
            {isCustom && (
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter quantity (m³)</label>
                <input type="number" step="0.5" min="0.5" className="input-field" value={customQuantity}
                  onChange={e => setCustomQuantity(e.target.value)} placeholder="e.g. 25" />
              </div>
            )}
          </div>
        );
      }
      // Gravel: Special Requirements
      return (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Special Requirements</h2>
          <p className="text-sm text-gray-500 mb-4">Any special requirements for your project? (Optional)</p>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4 text-sm text-gray-600">
            <p className="font-semibold text-gray-700 mb-2">Examples:</p>
            <ul className="space-y-1 text-xs">
              <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Night delivery</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Difficult site access</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Urgent project</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Loading/unloading assistance</li>
            </ul>
          </div>
          <textarea value={specialRequirements} onChange={e => setSpecialRequirements(e.target.value)}
            className="input-field min-h-[120px] resize-y" placeholder="Describe any special requirements..." />
        </div>
      );
    }

    // Step 8 — Pump (concrete only) OR Summary (gravel)
    if (step === 8) {
      if (isConcrete) {
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Concrete Pump</h2>
            <p className="text-sm text-gray-500 mb-4">Do you need a concrete pump?</p>
            <div className="flex gap-2 mb-4">
              {(['yes', 'no', 'not-sure'] as const).map(v => (
                <button key={v} onClick={() => setPump(v)}
                  className={`flex-1 p-4 rounded-xl border-2 text-center transition-all ${pump === v ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                  <span className="mb-1">{v === 'yes' ? <Check className="w-6 h-6 mx-auto text-green-600" /> : v === 'no' ? <X className="w-6 h-6 mx-auto text-red-500" /> : <HelpCircle className="w-6 h-6 mx-auto text-amber-500" />}</span>
                  <span className="text-sm font-medium capitalize">{v === 'not-sure' ? 'Not Sure' : v}</span>
                </button>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm text-gray-600">
              <p className="font-semibold text-gray-700 mb-2">A concrete pump is recommended when:</p>
              <ul className="space-y-1 text-xs">
                <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Site access is difficult</li>
                <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Multi-storey construction</li>
                <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Large volume pours</li>
                <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Faster placement required</li>
                <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Reducing labour costs</li>
              </ul>
            </div>
          </div>
        );
      }
      // Gravel: Summary with Submit
      return renderSummary(true);
    }

    // Step 9 — Delivery Date (concrete only)
    if (step === 9 && isConcrete) {
      return (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">Delivery Date</h2>
          <p className="text-sm text-gray-500 mb-4">When do you need delivery?</p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {deliveryOptions.map(o => (
              <button key={o.label} onClick={() => handleDeliverySelect(o.label)}
                className={`p-3.5 rounded-xl border-2 text-center transition-all ${deliveryLabel === o.label ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                <Calendar className={`w-5 h-5 mx-auto mb-1 ${deliveryLabel === o.label ? 'text-brand-600' : 'text-gray-400'}`} />
                <span className="text-sm font-medium">{o.label}</span>
              </button>
            ))}
          </div>
          {deliveryLabel === 'Custom Date' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pick a date</label>
              <input type="date" className="input-field" value={customDate}
                onChange={e => setCustomDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]} />
            </div>
          )}
        </div>
      );
    }

    // Step 10 (concrete) or continuation
    if (step === 10 && isConcrete) {
      return renderSummary(true);
    }

    return renderSummary(true);
  }

  function renderSummary(withSubmit: boolean) {
    return (
      <div>
        <h2 className="text-xl font-bold text-gray-900 mt-1 mb-1">
          {isGravel ? 'Your Requirements' : 'Your Estimated Price'}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          {isGravel ? 'Review your gravel requirements below.' : 'Review your project details and estimated pricing below.'}
        </p>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
          <div className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-3">Project Summary</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3 pb-2 border-b border-gray-200 mb-1">
              {(productCategory && productImages[productCategory] ? (
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                  <Image src={productImages[productCategory]} alt={categoryLabel} width={48} height={48} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-brand-100 text-brand-600">
                  <Package className="w-5 h-5" />
                </div>
              ))}
              <div>
                <p className="text-xs text-gray-500">Product</p>
                <p className="font-semibold text-gray-900">{categoryLabel}</p>
              </div>
            </div>
            <Row icon={<User className="w-4 h-4 text-brand-500" />} label="Name" value={name} />
            <Row icon={<User className="w-4 h-4 text-brand-500" />} label="Name" value={name} />
            <Row icon={<MessageCircle className="w-4 h-4 text-brand-500" />} label="WhatsApp" value={whatsapp} />
            <Row icon={<MapPin className="w-4 h-4 text-brand-500" />} label="Location" value={district} />
            <Row icon={<Building2 className="w-4 h-4 text-brand-500" />} label="Project" value={projectType} />
            {isConcrete && projectStage && <Row icon={<FileText className="w-4 h-4 text-brand-500" />} label="Stage" value={projectStage} />}
            {isConcrete && <Row icon={<Truck className="w-4 h-4 text-brand-500" />} label="Classes" value={hasNotSure ? 'Not Sure' : selectedGrades.join(', ')} />}
            {isConcrete && <Row icon={<svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>} label="Qty" value={`${qty} m³`} />}
            {isConcrete && pump && <Row icon={<Truck className="w-4 h-4 text-brand-500" />} label="Pump" value={pump === 'yes' ? 'Yes' : pump === 'no' ? 'No' : 'Not Sure'} />}
            {effectiveDate && <Row icon={<Calendar className="w-4 h-4 text-brand-500" />} label="Delivery" value={new Date(effectiveDate).toLocaleDateString('en-TZ', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} />}
            {specialRequirements && <Row icon={<FileText className="w-4 h-4 text-brand-500" />} label="Notes" value={specialRequirements} />}
          </div>
        </div>

        {isGravel && gravelRequirements.length > 0 && (
          <div className="bg-white rounded-xl border-2 border-amber-100 p-4 mb-4">
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-3">Gravel / Aggregate Requirements</p>
            <div className="space-y-2">
              {gravelRequirements.map((r, i) => (
                <div key={i} className="flex items-center justify-between bg-amber-50 rounded-lg px-3 py-2">
                  <div>
                    <span className="font-medium text-sm text-gray-900">{gravelSizeLabel(r.size)}</span>
                    {r.useCase && <p className="text-xs text-gray-500">{r.useCase}</p>}
                  </div>
                  <span className="font-semibold text-sm text-gray-900">{r.qty} {r.unit}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700">
              <p className="font-semibold mb-1">Not sure how much you need?</p>
              <p>Our team will help you determine the right quantities. Select <strong>Not Sure</strong> or leave a note.</p>
            </div>
          </div>
        )}

        {pricing && (
          <div className="bg-white rounded-xl border-2 border-brand-100 p-4 mb-4">
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-3">Estimated Pricing</p>
            <div className="space-y-2 text-sm">
              {pricing.materialCost > 0 && <div className="flex justify-between"><span className="text-gray-600">{pricing.type === 'concrete' ? 'Concrete Cost' : 'Material Cost'}</span><span className="font-semibold">TZS {fmt(pricing.materialCost)}</span></div>}
              <div className="flex justify-between"><span className="text-gray-600">Delivery Cost</span><span className="font-semibold">TZS {fmt(pricing.transportCost)}</span></div>
              {pricing.type === 'concrete' && pricing.pumpCost > 0 && <div className="flex justify-between"><span className="text-gray-600">Pump Cost</span><span className="font-semibold">TZS {fmt(pricing.pumpCost)}</span></div>}
              <div className="border-t pt-2 flex justify-between font-semibold"><span>Subtotal</span><span>TZS {fmt(pricing.subtotal)}</span></div>
              <div className="flex justify-between text-amber-700"><span>VAT (18%)</span><span className="font-semibold">TZS {fmt(pricing.vat)}</span></div>
              <div className="border-t-2 border-brand-600 pt-2 flex justify-between font-bold text-lg"><span>Grand Total</span><span className="text-brand-600">TZS {fmt(pricing.grandTotal)}</span></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Prices include 18% VAT.</p>
          </div>
        )}

        {error && <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm mb-4">{error}</div>}

        {isGravel && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 leading-relaxed mb-4">
            <p className="font-semibold mb-1">Tanzibaba — Gravel / Aggregates Supply</p>
            <p className="mb-1">Supplier pricing will be provided upon review of your requirements.</p>
            <p className="font-semibold">Our team will contact you with a detailed quotation.</p>
          </div>
        )}

        {isConcrete && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 leading-relaxed">
            <p className="font-semibold mb-1">Tanzibaba — Premium Ready-Mix Concrete</p>
            <p className="mb-1">Washed sand technology. Direct pricing.</p>
            <p className="font-semibold">Contact us for a detailed quotation and project consultation.</p>
          </div>
        )}

        <div className="text-center mt-4">
          <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 px-4 py-2.5 rounded-xl font-medium hover:bg-green-100 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp — 0716 002 790
          </a>
        </div>

        {withSubmit && (
          <button onClick={() => submitQuote(true)} disabled={loading}
            className="w-full bg-brand-600 text-white rounded-xl py-3.5 font-bold text-sm hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-600/20 mt-4">
            {loading ? 'Submitting...' : <><Send className="w-4 h-4" /> Submit Request</>}
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      <head>
        <title>Get a Quote | Tanzibaba — Premium Building Materials</title>
        <meta name="description" content="Get an instant price estimate for ready mix concrete, aggregates, blocks and building materials. WhatsApp response within minutes." />
        <link rel="canonical" href="https://materials.tanzibaba.com/get-quote" />
      </head>
      <Navbar />
      <main className="pt-20 pb-28 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-lg mx-auto">
          <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-600 mb-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Get Quick Price</h1>

          <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full transition-colors" style={{
                backgroundColor: i < step ? '#16a34a' : i === step ? '#22c55e' : '#e5e7eb'
              }} />
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4 min-h-[28px]">
            {productCategory && <Chip>{categoryLabel}</Chip>}
            {name && <Chip><User className="w-3 h-3" /> {name}</Chip>}
            {whatsapp && <Chip><MessageCircle className="w-3 h-3" /> {whatsapp}</Chip>}
            {district && <Chip><MapPin className="w-3 h-3" /> {district}</Chip>}
            {projectType && <Chip><Building2 className="w-3 h-3" /> {projectType}</Chip>}
            {isConcrete && projectStage && <Chip>{projectStage}</Chip>}
            {isConcrete && selectedGrades.length > 0 && <Chip>{selectedGrades.join(', ')}</Chip>}
            {isConcrete && qty > 0 && <Chip>{qty} m³</Chip>}
            {isConcrete && pump && <Chip>Pump: {pump === 'yes' ? 'Yes' : pump === 'no' ? 'No' : 'Not Sure'}</Chip>}
            {isGravel && gravelRequirements.length > 0 && <Chip><Package className="w-3 h-3" /> {gravelRequirements.length} item(s)</Chip>}
            {effectiveDate && <Chip><Calendar className="w-3 h-3" /> {new Date(effectiveDate).toLocaleDateString('en-TZ', { day: 'numeric', month: 'short' })}</Chip>}
            {specialRequirements && <Chip>Notes</Chip>}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
              Step {step} of {totalSteps} — {stepLabels[step] || ''}
            </span>
            <div className="mt-3 animate-fade-in space-y-5">
              {renderStepContent()}
            </div>

            <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
              <button onClick={() => setStep(Math.max(1, step - 1))}
                className={`flex items-center gap-1 text-sm font-medium ${step === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-gray-900'}`}
                disabled={step === 1}>
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              {step < totalSteps && !(step === totalSteps - 1 && isMulti) && !(step === 8 && isGravel) && !(step === 10 && isConcrete) ? (
                <button onClick={handleNext} disabled={!canProceed(step)}
                  className="btn-primary text-sm py-2.5 px-6 flex items-center gap-1">
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-[11px] font-medium">{children}</span>;
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      {icon}
      <span className="text-gray-400 text-xs min-w-[64px]">{label}</span>
      <span className="font-medium text-gray-800 text-xs">{value}</span>
    </div>
  );
}
