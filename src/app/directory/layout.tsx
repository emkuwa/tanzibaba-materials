import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Industry Directory | Tanzibaba',
  description: 'Directory of construction companies, contractors, engineers, architects, suppliers and government bodies in Tanzania. Find verified professionals for your project.',
  alternates: { canonical: 'https://materials.tanzibaba.com/directory' },
};

export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
