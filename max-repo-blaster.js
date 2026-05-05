#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Standalone - No npm install needed
const CTA = "https://manychat.partnerlinks.io/nwkkk7vkps17";
const MAX_PAGES = 95000;
const OUTPUT_DIR = 'output-github-max';
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function csvToPages() {
  const csvData = fs.readFileSync('data.csv', 'utf8');
  const rows = csvData.split('\n').slice(1).map(line => {
    const cols = line.split(',');
    return {
      A: cols[0]?.trim(),
      D: cols[3]?.trim(),
      E: cols[4]?.trim(),
      H: cols[7]?.trim()
    };
  }).filter(row => row.D);

  let total = 0;
  
  rows.forEach((row, rowIndex) => {
    for (let i = 0; i < 250 && total < MAX_PAGES; i++) {
      const slug = `${slugify(row.D)}-${rowIndex}-${i}.html`;
      const filename = path.join(OUTPUT_DIR, slug);
      
      const page = buildPage(row, i);
      fs.writeFileSync(filename, page);
      
      total++;
      process.stdout.write(`\r🔥 ${total}/${MAX_PAGES} pages filled`);
    }
  });
  
  console.log(`\n✅ MAX GITHUB FILLED: ${total} pages in ${OUTPUT_DIR}`);
  console.log('🚀 git add output-github-max/ && git push');
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

function buildPage(row, variation) {
  const title = `${row.D} Variation ${variation}`;
  return `<!DOCTYPE html>
<html>
<head>
<title>${title}</title>
<meta name="description" content="${row.E || 'Automation tool'}">
</head>
<body>
<h1>${title}</h1>
<div style="background: #667eea; color: white; padding: 20px; text-align: center;">
  <a href="${CTA}?v=${variation}" style="color: white; font-size: 1.5em;" rel="sponsored">🚀 Start Automation</a>
</div>
<p>${row.A || 'Marketing automation'} content for GitHub max capacity.</p>
</body>
</html>`;
}

// FIRE STANDALONE
csvToPages();
