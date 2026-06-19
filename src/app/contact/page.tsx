import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Contact Tanzibaba | Premium Ready-Mix Concrete Dar es Salaam',
  description: 'Contact Tanzibaba for premium ready-mix concrete in Dar es Salaam. WhatsApp: 0716 002 790, Email: info@tanzibaba.co.tz, quotes@tanzibaba.co.tz, sales@tanzibaba.co.tz.',
  keywords: ['contact tanzibaba', 'concrete supplier dar es salaam contact', 'ready mix concrete phone number', 'tanzibaba email', 'concrete delivery contact'],
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: 'Contact Tanzibaba | Premium Ready-Mix Concrete Dar es Salaam',
    description: 'Contact Tanzibaba for premium ready-mix concrete. WhatsApp 0716 002 790 or email info@tanzibaba.co.tz.',
    url: `${siteUrl}/contact`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone / WhatsApp',
    value: '0716 002 790',
    href: 'tel:0716002790',
    note: 'Available Mon–Sat, 07:00–18:00',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'WhatsApp Chat',
    value: 'Chat with us now',
    href: 'https://wa.me/255716002790',
    note: 'Quickest response time',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'General Inquiries',
    value: 'info@tanzibaba.co.tz',
    href: 'mailto:info@tanzibaba.co.tz',
    note: 'For general questions and information',
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: 'Quotations',
    value: 'quotes@tanzibaba.co.tz',
    href: 'mailto:quotes@tanzibaba.co.tz',
    note: 'For detailed quote requests',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Sales Team',
    value: 'sales@tanzibaba.co.tz',
    href: 'mailto:sales@tanzibaba.co.tz',
    note: 'For bulk orders and commercial pricing',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Office Location',
    value: 'Dar es Salaam, Tanzania',
    note: 'Operations across Dar es Salaam, Zanzibar and Dodoma',
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image src="/images/contact-cta.jpg" alt="Contact Tanzibaba for premium ready-mix concrete delivery in Dar es Salaam" fill className="object-cover" style={{ objectPosition: '50% 30%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MessageCircle className="w-4 h-4" /> Get in Touch
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Contact<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Tanzibaba</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Ready to order premium ready-mix concrete? Reach out — we&apos;ll respond within minutes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactMethods.map((m, i) => (
                <div key={i} className={`bg-gray-50 rounded-2xl border border-gray-100 p-6 ${m.href ? 'hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300' : ''}`}>
                  <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white mb-4">{m.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                  {m.href ? (
                    <a href={m.href} target={m.href.startsWith('http') ? '_blank' : undefined} className="text-brand-600 font-semibold text-sm hover:underline">{m.value}</a>
                  ) : (
                    <p className="text-gray-900 font-semibold text-sm">{m.value}</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">{m.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Office Hours</h2>
              <p className="text-gray-500">Our team is available during the following hours:</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
              {[
                { day: 'Monday – Friday', hours: '07:00 – 18:00' },
                { day: 'Saturday', hours: '08:00 – 15:00' },
                { day: 'Sunday', hours: 'Closed (emergency orders: WhatsApp only)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-brand-600" />
                    <span className="font-medium text-gray-900 text-sm">{item.day}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{item.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-brand-50 rounded-2xl border border-brand-200 p-6 text-center">
              <p className="text-sm text-gray-600 mb-4">Prefer an instant online quote?</p>
              <a href="/get-quote" className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Get Instant Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
