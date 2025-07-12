// generate-sitemap.js
import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://qaamenterprises.com' });
const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });

sitemap.end();

writeStream.on('finish', () => {
  console.log('✅ Sitemap generated at public/sitemap.xml');
});

writeStream.on('error', (err) => {
  console.error('❌ Failed to generate sitemap:', err);
});
