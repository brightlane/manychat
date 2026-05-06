#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const OUT_DIR = 'site';
const BASE_URL = 'https://brightlane.github.io/manychat.com';
const AFFILIATE_URL = 'https://manychat.partnerlinks.io/nwkkk7vkps17';

const baseKeywords = [
  'manychat', 'many chat', 'manychats', 'manychat login', 'manychat pricing',
  'manychat instagram', 'manychat facebook', 'manychat whatsapp',
  'manychat flows', 'manychat keywords', 'manychat pro', 'manychat free',
  'manychat tutorial'
];

const modifiers = [
  'tutorial', 'guide', 'how-to', 'setup', 'pricing', 'review', 'free-trial',
  'instagram', 'facebook', 'whatsapp', 'automation', 'flows', 'keywords',
  'chatbot', 'signup', 'templates', 'academy', 'best-practices', 'case-study'
];

function slugify(str) {
  return str.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function makeUniqueSlug(keyword, i) {
  return `${slugify(keyword)}-${String(i).padStart(4, '0')}`;
}

function pick(arr, i) {
  return arr[i % arr.length];
}

function pageHtml(keyword, slug, i) {
  const words = [];
  for (let s = 1; s <= 20; s++) {
    words.push(`
      <section>
        <h2>${keyword} strategy ${s}</h2>
        <p>
          ${keyword} is a high-intent search phrase for ManyChat users who want
          automation, conversions, and better lead capture. This page explains
          setup, best practices, geo-targeting, LLM-friendly metadata, social
          funnels, and search engine optimization in a practical way.
          Use ${keyword} in titles, headings, internal links, and CTA placements.
          The goal is to align content with user intent, improve click-through
          rate, and support conversion-focused affiliate traffic.
        </p>
        <p>
          ManyChat flows can be adapted for Instagram DM automation, Facebook
          Messenger sequences, WhatsApp follow-ups, and lead qualification.
          Add schema markup, descriptive alt text, canonical tags, and clear
          navigation. Keep the page unique, useful, and structured for both
          people and crawlers.
        </p>
      </section>
    `);
  }

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${keyword} | ManyChat Strategy ${i}</title>
  <meta name="description" content="Complete ${keyword} guide for ManyChat with SEO, geo targeting, and conversion-focused setup.">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="${BASE_URL}/${slug}.html">
  <meta property="og:title" content="${keyword} | ManyChat Strategy ${i}">
  <meta property="og:description" content="Complete ${keyword} guide for ManyChat.">
  <meta property="og:url" content="${BASE_URL}/${slug}.html">
  <style>
    body{font-family:system-ui,Arial,sans-serif;max-width:900px;margin:0 auto;padding:24px;line-height:1.7}
    .cta{display:inline-block;padding:14px 20px;background:#2b6cb0;color:#fff;text-decoration:none;border-radius:10px;font-weight:700}
    nav a{margin-right:12px}
    footer{margin-top:40px;border-top:1px solid #ddd;padding-top:20px;font-size:14px;color:#555}
  </style>
</head>
<body>
  <header>
    <nav>
      <a href="/index.html">Home</a>
      <a href="/sitemap.xml">Sitemap</a>
      <a href="/robots.txt">Robots</a>
    </nav>
    <h1>${keyword}</h1>
    <p>This page is built for search, discovery, and conversions.</p>
  </header>

  ${words.join('\n')}

  <section>
    <h2>Get started</h2>
    <p>Use this ManyChat path to build automation and capture leads.</p>
    <a class="cta" href="${AFFILIATE_URL}" rel="nofollow sponsored">Start with ManyChat</a>
  </section>

  <footer>
    <p>Generated for ManyChat SEO and publishing at scale.</p>
  </footer>
</body>
</html>`;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function main() {
  ensureDir(OUT_DIR);

  const pages = [];
  let used = new Set();

  for (let i = 1; i <= 15000; i++) {
    const base = pick(baseKeywords, i - 1);
    const mod = pick(modifiers, Math.floor((i - 1) / baseKeywords.length));
    const keyword = `${base} ${mod}`.replace(/\s+/g, ' ').trim();
    const slug = makeUniqueSlug(keyword, i);

    if (used.has(slug)) continue;
    used.add(slug);

    const html = pageHtml(keyword, slug, i);
    const filePath = path.join(OUT_DIR, `${slug}.html`);
    fs.writeFileSync(filePath, html, 'utf8');

    pages.push({
      loc: `${BASE_URL}/${slug}.html`,
      title: keyword,
      slug
    });
  }

  const indexLinks = pages.slice(0, 500).map(p => `<li><a href="/site/${p.slug}.html">${p.title}</a></li>`).join('\n');
  fs.writeFileSync('index.html', `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>ManyChat Keyword Hub</title></head>
<body>
<h1>ManyChat Keyword Hub</h1>
<ul>${indexLinks}</ul>
</body></html>`, 'utf8');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${p.loc}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('\n')}
</urlset>`;
  fs.writeFileSync('sitemap.xml', sitemap, 'utf8');

  fs.writeFileSync('robots.txt', `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`, 'utf8');

  console.log(`Generated ${pages.length} pages.`);
}

main();
