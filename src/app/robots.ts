import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/snippets', '/editor'],
      disallow: '',
    },
    sitemap: 'https://www.codevault.com.br/sitemap.xml',
  };
}
