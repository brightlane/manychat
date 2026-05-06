#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const OUT_DIR = 'site-clean';
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

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function pageHtml(keyword, slug, i) {
  const sections = [];
  for (let s = 1; s <= 20; s++) {
    sections.push(`
      <section>
        <h2>${keyword} section ${s}</h2>
        <p>
          ${keyword} is built for ManyChat conversion, SEO, geo targeting, and AI discovery.
          This page explains practical setup, unique content, internal linking, schema,
          and next steps for automation. Keep the wording unique, useful, and specific
          so search engines and assistants can understand the intent clearly.
        </p>
        <p>
          Use ${keyword} in headings, image alt text, the intro, and the CTA. Include clear
          explanations for beginners and deeper operational guidance for advanced users.
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
    <p>Unique page ${i} for ManyChat SEO publishing.</p>
  </header>

  ${sections.join('\n')}

  <section>
    <h2>Start here</h2>
    <p>Use this ManyChat path to build automation and capture leads.</p>
    <a class="cta" href="${AFFILIATE_URL}" rel="nofollow sponsored">Start with ManyChat</a>
  </section>

  <footer>
    <p>Generated for ManyChat SEO and publishing at scale.</p>
  </footer>
</body>
</html>`;
}

function makeUniqueSlug(keyword, i) {
  return `${slugify(keyword)}-${String(i).padStart(5, '0')}`;
}

function main() {
  ensureDir(OUT_DIR);

  const used = new Set();
  const pages = [];

  for (let i = 1; i <= 15000; i++) {
    const base = baseKeywords[(i - 1) % baseKeywords.length];
    const mod = modifiers[Math.floor((i - 1) / baseKeywords.length) % modifiers.length];
    const keyword = `${base} ${mod}`;
    const slug = makeUniqueSlug(keyword, i);

    if (used.has(slug)) continue;
    used.add(slug);

    fs.writeFileSync(
      path.join(OUT_DIR, `${slug}.html`),
      pageHtml(keyword, slug, i),
      'utf8'
    );

    pages.push(`${BASE_URL}/${slug}.html`);
  }

  fs.writeFileSync(
    'index.html',
    `<html><body><h1>ManyChat Keyword Hub</h1><ul>${pages.slice(0, 500).map(u => `<li><a href="${u}">${u.split('/').pop()}</a></li>`).join('')}</ul></body></html>`,
    'utf8'
  );

  fs.writeFileSync(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(u => `<url><loc>${u}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('')}</urlset>`,
    'utf8'
  );

  fs.writeFileSync(
    'robots.txt',
    `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`,
    'utf8'
  );

  console.log(`Generated ${pages.length} unique pages in ${OUT_DIR}`);
}

main();
