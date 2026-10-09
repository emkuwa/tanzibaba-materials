import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://materials.tanzibaba.com';
  // Private / non-indexable areas (app functionality, not content).
  const disallowed = ['/admin/', '/dashboard/', '/supplier/', '/api/', '/quote/'];
  return {
    rules: [
      {
        // Default rule: all general crawlers (Googlebot, Bingbot, etc.)
        userAgent: '*',
        allow: '/',
        disallow: disallowed,
      },
      // Explicitly allow legitimate AI search / answer-engine crawlers
      // so business content stays retrievable and citable.
      ...[
        'OAI-SearchBot',
        'ChatGPT-User',
        'GPTBot',
        'ClaudeBot',
        'anthropic-ai',
        'PerplexityBot',
        'Applebot',
        'Bytespider',
        'CCBot',
      ].map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: disallowed,
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
