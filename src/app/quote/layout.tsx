import type { Metadata } from 'next';

// Private quote-detail pages carry customer data — never index.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
