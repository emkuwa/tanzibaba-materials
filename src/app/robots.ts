import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://materials.tanzibaba.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/dashboard/', '/supplier/', '/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
