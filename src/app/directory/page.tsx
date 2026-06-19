'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Users, Search, MapPin, Globe, Phone, Mail, ArrowRight, ExternalLink, Building2, Compass, Calculator, ClipboardList, HardHat, Construction, Route, Zap, Factory, Layers, Square, Home, Palette, TreePine, Droplets, FlaskConical, Mountain, Beaker, Wrench, Truck, Landmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { listings, categories, getCategoryCounts, type DirectoryListing } from '@/data/directory';

const iconMap: Record<string, React.ElementType> = {
  Compass, Building2, Calculator, MapPin, ClipboardList, HardHat, Construction, Route, Zap, Factory, Layers, Square, Home, Palette, TreePine, Droplets, FlaskConical, Mountain, Beaker, Wrench, Truck, Landmark,
};

const groupLabels: Record<string, string> = {
  'engineers': 'Professionals',
  'architects': 'Professionals',
  'quantity-surveyors': 'Professionals',
  'land-surveyors': 'Professionals',
  'project-managers': 'Professionals',
  'building-contractors': 'Contractors',
  'civil-contractors': 'Contractors',
  'road-contractors': 'Contractors',
  'mep-contractors': 'Contractors',
  'cement-manufacturers': 'Suppliers',
  'steel-manufacturers': 'Suppliers',
  'aluminium-suppliers': 'Suppliers',
  'glass-suppliers': 'Suppliers',
  'roofing-suppliers': 'Suppliers',
  'paint-suppliers': 'Suppliers',
  'timber-suppliers': 'Suppliers',
  'borehole-drilling': 'Specialists',
  'soil-testing': 'Specialists',
  'geotechnical-services': 'Specialists',
  'material-testing': 'Specialists',
  'equipment-rental': 'Specialists',
  'heavy-machinery-rental': 'Specialists',
  'government': 'Government',
};

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  const locations = useMemo(() => {
    const locs = new Set(listings.map(l => l.location));
    return Array.from(locs).sort();
  }, []);

  const filteredListings = useMemo(() => {
    let result = listings;

    if (selectedCategory) {
      result = result.filter(l => l.category === selectedCategory);
    }

    if (selectedLocation) {
      result = result.filter(l => l.location === selectedLocation);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(l =>
        l.name.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.location.toLowerCase().includes(q) ||
        l.subcategory.toLowerCase().includes(q)
      );
    }

    return result;
  }, [selectedCategory, selectedLocation, searchQuery]);

  const activeCategories = useMemo(() => {
    return categories.filter(c => categoryCounts[c.slug] && categoryCounts[c.slug] > 0);
  }, [categoryCounts]);

  const groupedListings = useMemo(() => {
    const groups: Record<string, DirectoryListing[]> = {};
    filteredListings.forEach(l => {
      const group = groupLabels[l.category] || 'Other';
      if (!groups[group]) groups[group] = [];
      groups[group].push(l);
    });
    return groups;
  }, [filteredListings]);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-gray-950 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-brand-500/20">
              <Users className="w-4 h-4" /> Industry Directory
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Tanzania Construction Directory</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Find contractors, architects, engineers, suppliers and service providers for your construction project.</p>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, type, or location..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => { setSelectedCategory(''); setSelectedLocation(''); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!selectedCategory && !selectedLocation ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              All ({listings.length})
            </button>
            {activeCategories.map(c => {
              const Icon = iconMap[c.icon] || Users;
              return (
                <button
                  key={c.slug}
                  onClick={() => { setSelectedCategory(c.slug === selectedCategory ? '' : c.slug); setSelectedLocation(''); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === c.slug ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  <Icon className="w-4 h-4" />
                  {c.title}
                  <span className="text-xs opacity-70">({categoryCounts[c.slug]})</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-xs text-gray-500 py-2">Location:</span>
            <button
              onClick={() => setSelectedLocation('')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${!selectedLocation ? 'bg-brand-100 text-brand-700' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
            >
              All
            </button>
            {locations.map(loc => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc === selectedLocation ? '' : loc)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${selectedLocation === loc ? 'bg-brand-100 text-brand-700' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                {loc}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-900">{filteredListings.length}</span> listings
              {selectedCategory && <> in <span className="font-semibold text-gray-900">{categories.find(c => c.slug === selectedCategory)?.title}</span></>}
              {selectedLocation && <> — <span className="font-semibold text-gray-900">{selectedLocation}</span></>}
            </p>
          </div>

          {filteredListings.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No listings found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filters.</p>
              <button onClick={() => { setSearchQuery(''); setSelectedCategory(''); setSelectedLocation(''); }} className="text-brand-600 hover:text-brand-700 font-semibold text-sm">
                Clear all filters
              </button>
            </div>
          ) : (
            Object.entries(groupedListings).map(([group, items]) => (
              <div key={group} className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-600 rounded-full" />
                  {group}
                  <span className="text-sm font-normal text-gray-400">({items.length})</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map(listing => (
                    <div key={listing.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-brand-200 transition-all duration-300 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-gray-900 text-sm leading-tight">{listing.name}</h3>
                        <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full shrink-0 ml-2">
                          {listing.subcategory}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2 flex-1">{listing.description}</p>
                      <div className="space-y-1.5 mb-3">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          {listing.location}
                        </div>
                        {listing.phone && (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <a href={`tel:${listing.phone}`} className="hover:text-brand-600 transition-colors">{listing.phone}</a>
                          </div>
                        )}
                        {listing.email && (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <a href={`mailto:${listing.email}`} className="hover:text-brand-600 transition-colors">{listing.email}</a>
                          </div>
                        )}
                        {listing.website && (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Globe className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <a href={listing.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors flex items-center gap-1">
                              {listing.website.replace(/https?:\/\//, '').slice(0, 30)}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
