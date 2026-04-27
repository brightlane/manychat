/**
 * 🔥 MANYCHAT VULTURE 10K PROTOCOL
 * Target: Instagram & Messenger Automation Domination
 */

const fs = require('fs-extra');
const path = require('path');

const KEYWORDS = {
  niches: [
    'real estate instagram automation','e-commerce chat funnels','fitness coach dm bot',
    'restaurant whatsapp marketing','shopify abandoned cart messenger','beauty salon booking bot',
    'crypto lead generation instagram','saas demo automation chat','dentist appointment bot'
  ],
  features: [
    'instagram dm automation free','manychat flows for beginners','best messenger marketing tools',
    'how to automate instagram comments','ai chatbot for whatsapp','messenger ref links guide',
    'manychat pricing 2026','instagram story mention automation','keyword triggers manychat'
  ],
  comparisons: [
    'manychat vs mobilemonkey','manychat vs chatfuel','best manychat alternatives',
    'manychat vs tawk.to','is manychat safe for instagram','manychat vs yellow.ai'
  ]
};

const AFFILIATE_LINK = "https://manychat.pxf.io/c/007949054182005142/10001";

function generateContent(keyword, category) {
  const intros = [
    `In the competitive landscape of 2026, <strong>${keyword}</strong> is the key to scaling without burnout.`,
    `If you're not using <strong>${keyword}</strong>, you're leaving money on the table every time someone DMs you.`,
    `Modern brands are switching to <strong>${keyword}</strong> to handle leads 24/7.`
  ];
  const selectedIntro = intros[Math.floor(Math.random() * intros.length)];

  return `
    <section style="text-align:center;padding:40px 0;">
        <h1>${keyword}</h1>
        <p>${selectedIntro} ManyChat remains the gold standard for <strong>Instagram automation</strong>.</p>
        <a href="${AFFILIATE_LINK}" style="display:inline-block;background:#0073ff;color:white;padding:15px 25px;border-radius:8px;text-decoration:none;font-weight:bold;">🚀 Start Free Trial</a>
    </section>
    <section style="background:#f9f9f9;padding:25px;border-radius:10px;margin:20px 0;">
        <h2>Why ${keyword} Matters</h2>
        <p>Using <strong>${keyword}</strong> allows you to capture leads instantly, even while you sleep. By automating the first touch-point, you increase conversion rates by up to 400%.</p>
    </section>
  `;
}

async function main() {
  const categories = Object.keys(KEYWORDS);
  categories.forEach(cat => fs.ensureDirSync(cat));
  
  for(let i = 0; i < 10000; i++) {
    const category = categories[i % categories.length];
    const base = KEYWORDS[category][i % KEYWORDS[category].length];
    const variation = Math.floor(i / KEYWORDS[category].length) + 1;
    const keyword = `${base} variation ${variation}`;
    const slug = `${category}/${keyword.toLowerCase().replace(/\s+/g, '-')}.html`;

    const html = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${keyword} | Automation Authority</title>
        <meta name="google-site-verification" content="8uB_m0v9U6qC0p8XoHjF3p6G4_m8zN8p5qX6w" />
        <style>body{font-family:sans-serif;line-height:1.6;max-width:800px;margin:0 auto;padding:20px;}</style>
    </head>
    <body>
        ${generateContent(keyword, category)}
        <div style="text-align:center;"><a href="${AFFILIATE_LINK}">Try ManyChat for ${keyword}</a></div>
    </body>
    </html>`;

    await fs.outputFile(slug, html);
    if(i % 1000 === 0) console.log(`🌳 Planted ${i} ManyChat nodes`);
  }
}

main();
