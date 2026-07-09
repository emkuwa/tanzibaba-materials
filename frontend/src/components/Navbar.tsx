'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, HardHat, Building2, Calculator, BookOpen, Users, Newspaper, FileText, Mail } from 'lucide-react';
import { useAuth } from '@/lib/auth';

const navItems = [
  {
    label: 'Products', icon: HardHat, href: '/#products',
    children: [
      { label: 'Aggregates', href: '/aggregates-supplier-dar-es-salaam' },
      { label: 'Sand', href: '/aggregates-supplier-dar-es-salaam' },
      { label: 'Gravel', href: '/aggregates-supplier-dar-es-salaam' },
      { label: 'Ready Mix Concrete', href: '/ready-mix-concrete-dar-es-salaam' },
      { label: 'Concrete Blocks', href: '/blocks-supplier-dar-es-salaam' },
      { label: 'Road Base Materials', href: '/aggregates-supplier-dar-es-salaam' },
    ],
  },
  {
    label: 'Equipment Hire', icon: HardHat, href: '/equipment-hire',
    children: [
      { label: 'Excavators', href: '/equipment-hire' },
      { label: 'Bulldozers', href: '/equipment-hire' },
      { label: 'Wheel Loaders', href: '/equipment-hire' },
      { label: 'Dump Trucks', href: '/equipment-hire' },
      { label: 'Mobile Cranes', href: '/equipment-hire' },
      { label: 'Concrete Pump Trucks', href: '/equipment-hire' },
      { label: 'Forklifts', href: '/equipment-hire' },
      { label: 'Generators', href: '/equipment-hire' },
    ],
  },
  {
    label: 'Projects', icon: Building2, href: '/projects',
  },
  {
    label: 'AI Tools', icon: Calculator, href: '/tools',
    children: [
      { label: 'Concrete Calculator', href: '/tools/concrete-calculator' },
      { label: 'Block Calculator', href: '/tools/block-calculator' },
      { label: 'Sand Calculator', href: '/tools/sand-calculator' },
      { label: 'Aggregate Calculator', href: '/tools/aggregate-calculator' },
      { label: 'Tile Calculator', href: '/tools/tile-calculator' },
      { label: 'Paint Calculator', href: '/tools/paint-calculator' },
      { label: 'Material Estimator', href: '/tools/material-estimator' },
      { label: 'Cost Calculator', href: '/tools/cost-calculator' },
      { label: 'BOQ Generator', href: '/tools/boq-generator' },
    ],
  },
  {
    label: 'Education', icon: BookOpen, href: '/learn',
    children: [
      { label: 'Building Materials', href: '/learn?category=building-materials' },
      { label: 'Construction Methods', href: '/learn?category=construction-methods' },
      { label: 'Engineering Basics', href: '/learn?category=engineering-basics' },
      { label: 'Cost Guides', href: '/learn?category=cost-guides' },
      { label: 'Safety & PPE', href: '/learn?category=safety-ppe' },
      { label: 'Project Planning', href: '/learn?category=project-planning' },
    ],
  },
  {
    label: 'Directory', icon: Users, href: '/directory',
    children: [
      { label: 'Contractors', href: '/directory?category=contractors' },
      { label: 'Architects', href: '/directory?category=architects' },
      { label: 'Engineers', href: '/directory?category=engineers' },
      { label: 'Surveyors', href: '/directory?category=surveyors' },
      { label: 'Equipment Rental', href: '/directory?category=equipment-rental' },
      { label: 'Material Suppliers', href: '/directory?category=material-suppliers' },
      { label: 'Transport Services', href: '/directory?category=transport-services' },
    ],
  },
  {
    label: 'News', icon: Newspaper, href: '/news',
  },
  {
    label: 'Resources', icon: FileText, href: '/resources',
    children: [
      { label: 'Free Guides', href: '/resources/guides' },
      { label: 'Checklists', href: '/resources/checklists' },
      { label: 'Templates', href: '/resources/templates' },
      { label: 'BOQ Samples', href: '/resources/boq-samples' },
      { label: 'Construction Forms', href: '/resources/forms' },
      { label: 'Downloads', href: '/resources/downloads' },
    ],
  },
  {
    label: 'About', icon: Users, href: '/about',
  },
  {
    label: 'FAQ', icon: FileText, href: '/faq',
  },
  {
    label: 'Government', icon: FileText, href: '/government',
  },
  {
    label: 'Contact', icon: Mail, href: '/contact',
  },
];

interface NavItemProps {
  item: typeof navItems[0];
  mobile?: boolean;
  onNav?: () => void;
}

function NavItem({ item, mobile, onNav }: NavItemProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobile) {
      const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) setDropdownOpen(false);
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [mobile]);

  if (mobile) {
    return (
      <div>
        {item.children ? (
          <>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center justify-between w-full text-sm text-gray-700 py-2.5 font-medium border-b border-gray-50">
              <span className="flex items-center gap-2"><item.icon className="w-4 h-4 text-brand-600" /> {item.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="pl-6 pb-2">
                {item.children.map(child => (
                  <Link key={child.href} href={child.href} onClick={onNav} className="block text-sm text-gray-600 py-2 hover:text-brand-600">{child.label}</Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link href={item.href} onClick={onNav} className="flex items-center gap-2 text-sm text-gray-700 py-2.5 font-medium border-b border-gray-50">
            <item.icon className="w-4 h-4 text-brand-600" /> {item.label}
          </Link>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={() => item.children && setDropdownOpen(true)} onMouseLeave={() => item.children && setDropdownOpen(false)}>
      {item.children ? (
        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors py-2">
          {item.label} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        <Link href={item.href} className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors py-2">{item.label}</Link>
      )}
      {dropdownOpen && item.children && (
        <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-xl py-2 min-w-[220px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {item.children.map(child => (
            <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">{child.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-0 group shrink-0">
            <img src="/images/logo/tanzibaba.svg" alt="T" className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] group-hover:scale-105 transition-transform" />
            <span className="font-extrabold text-xl md:text-2xl tracking-tight">
              <span className="text-brand-600">anzi</span>
              <span className="text-orange-500">baba</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map(item => (
              <NavItem key={item.label} item={item} />
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Phone number visible on all screens */}
            <a href="tel:+255716002790" className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors shrink-0">
              <Phone className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap hidden sm:inline">+255 716 002 790</span>
              <span className="whitespace-nowrap sm:hidden">+255 716 002 790</span>
            </a>

            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <>
                  <Link href={user.role === 'ADMIN' ? '/admin' : user.role === 'SUPPLIER' ? '/supplier' : '/dashboard'} className="btn-primary text-sm py-2.5 px-5">
                    Dashboard
                  </Link>
                  <button onClick={logout} className="text-sm text-gray-500 hover:text-red-600 transition-colors">Logout</button>
                </>
              ) : (
                <Link href="/get-quote" className="btn-primary text-sm py-2.5 px-5">Get Quote</Link>
              )}
            </div>

            <button className="lg:hidden p-2 transition-colors text-gray-900 ml-1" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-4 pb-5 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1 pt-3">
            {/* Mobile phone number - always visible in menu */}
            <a href="tel:+255716002790" className="flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 py-3 border-b border-gray-50">
              <Phone className="w-4 h-4 shrink-0" />
              +255 716 002 790 — Call Now
            </a>

            {navItems.map(item => (
              <NavItem key={item.label} item={item} mobile onNav={() => setOpen(false)} />
            ))}
            <div className="pt-3 flex flex-col gap-3">
              {user ? (
                <>
                  <Link href="/dashboard" onClick={() => setOpen(false)} className="btn-primary text-sm text-center py-3">Dashboard</Link>
                  <button onClick={() => { logout(); setOpen(false); }} className="text-sm text-red-500 text-left py-2">Logout</button>
                </>
              ) : (
                <Link href="/get-quote" onClick={() => setOpen(false)} className="btn-primary text-sm text-center py-3">Get Quote</Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
