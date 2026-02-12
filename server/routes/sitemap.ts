import { Router } from 'express';

const router = Router();

const BASE_URL = 'https://frostline.as';

const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/routes', changefreq: 'monthly', priority: '0.9' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/partners', changefreq: 'monthly', priority: '0.7' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
];

router.get('/sitemap.xml', (_req, res) => {
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.set('Content-Type', 'application/xml');
  res.send(xml);
});

export default router;
