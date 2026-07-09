import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-extrabold text-brand-600">404</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Page Not Found</h1>
          <p className="text-gray-500 mb-8">
            The page you are looking for does not exist or has been moved. Please check the URL or navigate back to our homepage.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
            Back to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
