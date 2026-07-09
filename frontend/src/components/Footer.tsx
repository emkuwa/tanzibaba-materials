import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-0 mb-4">
              <img src="/images/logo/tanzibaba.svg" alt="T" className="w-[30px] h-[30px] md:w-[36px] md:h-[36px]" />
              <span className="font-extrabold text-xl md:text-2xl tracking-tight">
                <span className="text-brand-400">anzi</span>
                <span className="text-orange-400">baba</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Premium construction supply, equipment and logistics network — ready mix concrete, aggregates, blocks, building materials and construction equipment hire across Tanzania.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://wa.me/255716002790" target="_blank" className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center hover:bg-green-600/30 transition-colors">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="mailto:info@tanzibaba.co.tz" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="w-5 h-5 text-gray-400" />
              </a>
              <a href="tel:0716002790" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Phone className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Products</h4>
            <div className="flex flex-col gap-3">
              <Link href="/ready-mix-concrete-dar-es-salaam" className="text-sm hover:text-brand-400 transition-colors">Ready-Mix Concrete</Link>
              <Link href="/aggregates-supplier-dar-es-salaam" className="text-sm hover:text-brand-400 transition-colors">Aggregates</Link>
              <Link href="/aggregates-supplier-dar-es-salaam" className="text-sm hover:text-brand-400 transition-colors">Sand &amp; Gravel</Link>
              <Link href="/blocks-supplier-dar-es-salaam" className="text-sm hover:text-brand-400 transition-colors">Concrete Blocks</Link>
              <Link href="/paving-blocks-dar-es-salaam" className="text-sm hover:text-brand-400 transition-colors">Paving Blocks</Link>
              <Link href="/culvert-pipes-dar-es-salaam" className="text-sm hover:text-brand-400 transition-colors">Culvert Pipes</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">AI Tools</h4>
            <div className="flex flex-col gap-3">
              <Link href="/tools/concrete-calculator" className="text-sm hover:text-brand-400 transition-colors">Concrete Calculator</Link>
              <Link href="/tools/block-calculator" className="text-sm hover:text-brand-400 transition-colors">Block Calculator</Link>
              <Link href="/tools/sand-calculator" className="text-sm hover:text-brand-400 transition-colors">Sand Calculator</Link>
              <Link href="/tools/cost-calculator" className="text-sm hover:text-brand-400 transition-colors">Cost Calculator</Link>
              <Link href="/tools/boq-generator" className="text-sm hover:text-brand-400 transition-colors">BOQ Generator</Link>
              <Link href="/tools" className="text-sm hover:text-brand-400 transition-colors font-semibold text-brand-400">View All Tools</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Construction Equipment</h4>
            <div className="flex flex-col gap-3">
              <Link href="/equipment/rent" className="text-sm hover:text-brand-400 transition-colors">Rent Equipment</Link>
              <Link href="/equipment/buy" className="text-sm hover:text-brand-400 transition-colors">Buy Equipment</Link>
              <Link href="/equipment/rent-to-own" className="text-sm hover:text-brand-400 transition-colors">Rent-to-Own</Link>
              <Link href="/equipment/list-equipment" className="text-sm hover:text-brand-400 transition-colors">Sell or List Equipment</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Resources</h4>
            <div className="flex flex-col gap-3">
              <Link href="/learn" className="text-sm hover:text-brand-400 transition-colors">Education Hub</Link>
              <Link href="/directory" className="text-sm hover:text-brand-400 transition-colors">Industry Directory</Link>
              <Link href="/news" className="text-sm hover:text-brand-400 transition-colors">Industry News</Link>
              <Link href="/government" className="text-sm hover:text-brand-400 transition-colors">Government Hub</Link>
              <Link href="/blog" className="text-sm hover:text-brand-400 transition-colors">Blog</Link>
              <Link href="/faq" className="text-sm hover:text-brand-400 transition-colors">FAQ</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm hover:text-brand-400 transition-colors">About Us</Link>
              <Link href="/projects" className="text-sm hover:text-brand-400 transition-colors">Projects</Link>
              <Link href="/get-quote" className="text-sm hover:text-brand-400 transition-colors">Get a Quote</Link>
              <Link href="/contact" className="text-sm hover:text-brand-400 transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:0716002790" className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors group">
                <span className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-brand-600/20 transition-colors"><Phone className="w-4 h-4 text-gray-400 group-hover:text-brand-400" /></span>
                <div><span className="text-gray-500 text-xs">Phone / WhatsApp</span><br /><span className="text-white font-medium">0716 002 790</span></div>
              </a>
              <a href="mailto:info@tanzibaba.co.tz" className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors group">
                <span className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-brand-600/20 transition-colors"><Mail className="w-4 h-4 text-gray-400 group-hover:text-brand-400" /></span>
                <div><span className="text-gray-500 text-xs">Email</span><br /><span className="text-white font-medium">info@tanzibaba.co.tz</span></div>
              </a>
              <div className="flex items-center gap-3 text-sm group">
                <span className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center"><MapPin className="w-4 h-4 text-gray-400" /></span>
                <div><span className="text-gray-500 text-xs">Address</span><br /><span className="text-white font-medium">Dar es Salaam, Tanzania</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Tanzibaba. All rights reserved.</p>
          <p className="text-gray-600 text-center">Tanzania&apos;s Construction Supply, Equipment &amp; Logistics Network.</p>
        </div>
      </div>
    </footer>
  );
}
