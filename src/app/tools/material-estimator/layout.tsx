import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Material Estimator | Tanzibaba',
  description: 'List and estimate all materials needed for your construction project. Free online material estimator for Tanzania.',
  keywords: ['material estimator', 'construction materials', 'building estimate', 'construction calculator', 'Tanzania', 'building materials'],
  openGraph: {
    title: 'Free Material Estimator | Tanzibaba',
    description: 'List and estimate all materials needed for your construction project.',
    url: 'https://materials.tanzibaba.com/tools/material-estimator',
    siteName: 'Tanzibaba',
    type: 'website',
  },
  alternates: {
    canonical: 'https://materials.tanzibaba.com/tools/material-estimator',
  },
};

export default function MaterialEstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}