#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// ONE FILE → MILLIONS OF PAGES
const CTA = "https://manychat.partnerlinks.io/nwkkk7vkps17";
const TARGET = 1000000; // 1M pages
const BASE_DIR = 'million-pages';
fs.mkdirSync(BASE_DIR, { recursive: true });

// Global multipliers
const COUNTRIES = Array.from({length: 200}, (_, i) => `country${i+1}`);
const CITIES = Array.from({length: 1000}, (_, i) => `city${i+1}`);
const LANGUAGES = ['en', 'es', 'fr', 'de', 'pt-br', 'it', 'ru'];
const TEMPLATES = ['guide', 'review', 'overview', 'tutorial', 'case-study'];

async function factory() {
  console.log('🚀 Million Page Factory - Starting...');
  
  const csv = fs.readFileSync('data.csv', 'utf8');
  const rows = csv.split('\n').slice(1).map(line => {
    const cols = line.split(',');
    return {
      name: cols[0]?.trim(),
      title: cols[3]?.trim(),
      desc: cols[4]?.trim()
    };
  }).filter(r => r.title);

  let generated = 0;
  
  for (const row of rows) {
    for (const country of COUNTRIES.slice(0, 50)) {
      for (const city of CITIES.slice(0, 20)) {
        for (const lang of LANGUAGES) {
          for (const template of TEMPLATES) {
            if (generated >= TARGET) break;
            
            const slug = `${slugify(row.title)}-${country}-${city}-${lang}-${template}.html`;
            const page = generatePage(row, country, city, lang, template);
            
            fs.writeFileSync(path.join(BASE_DIR, slug), page);
            generated++;
            
            if (generated % 10000 === 0) {
              console.log(`🔥 ${generated}/${TARGET} pages generated`);
            }
          }
          if (generated >= TARGET) break;
        }
      }
    }
  }
  
  generateSitemaps(generated);
  console.log(`\n🎉 MILLION PAGE FACTORY COMPLETE: ${generated} pages!`);
  console.log(`📁 ${BASE_DIR}/ ready for Cloudflare/Netlify`);
}

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100);
}

function generatePage(row, country, city, lang, template) {
  const title = `${row.title || 'Automation'} ${city} ${country.toUpperCase()} ${template}`;
  const ctaLink = `${CTA}?p=${slugify(row.title)}&c=${country}&ci=${city}&l=${lang}&t=${template}`;
  
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<meta name="description" content="${row.desc || 'Global automation solution'}">
<link rel="alternate" hreflang="${lang}" href="/${lang}/${slugify(row.title)}-${country}-${city}-${lang}-${template}.html">
</head>
<body>
<div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 30px; text-align: center;">
  <h1>${title}</h1>
  <a href="${ctaLink}" style="background: white; color: #667eea; padding: 20px 40px; font-weight: bold; text-decoration: none; border-radius: 50px;" rel="sponsored">
    🚀 Start ${template.toUpperCase()} Now
  </a>
</div>

<main style="max-width: 900px; margin: 0 auto; padding: 20px;">
  <p>${row.name || 'Enterprise solution'} optimized for ${city}, ${country}. ${template} content.</p>
</main>
</body>
</html>`;
}

function generateSitemaps(count) {
  const chunkSize = 50000;
  const chunks = Math.ceil(count / chunkSize);
  
  for (let i = 0; i < chunks; i++) {
    const xml = `<?xml version="1.0"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<!-- ${chunkSize} URLs for chunk ${i+1} -->
</urlset>`;
    fs.writeFileSync(path.join(BASE_DIR, `sitemap-${i+1}.xml`), xml);
  }
  
  fs.writeFileSync(path.join(BASE_DIR, 'sitemap-index.xml'), `<?xml version="1.0"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array(chunks).fill().map((_, i) => 
  `<sitemap><loc>sitemap-${i+1}.xml</loc></sitemap>`
).join('')}
</sitemapindex>`);
}

// LAUNCH FACTORY
factory();
