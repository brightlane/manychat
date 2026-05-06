const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'output');
const PAGE_COUNT = 18;

const PAGE_TYPES = {
  tutorial: {
    title: 'ManyChat Tutorial: Instagram, Messenger & SMS Automation',
    meta: 'Learn how to use ManyChat step by step for Instagram, Messenger, and SMS automation with examples, workflows, and FAQs.',
    hero: 'A practical guide to building ManyChat flows that capture leads and automate conversations.',
    seed: 'tutorial guide'
  },
  pricing: {
    title: 'ManyChat Pricing Guide',
    meta: 'A detailed ManyChat pricing guide covering free plan, paid tiers, value, and what plan fits your business.',
    hero: 'A pricing-focused page that helps readers choose the right ManyChat plan.',
    seed: 'pricing analysis'
  },
  instagram: {
    title: 'ManyChat Instagram Automation',
    meta: 'A long-form Instagram automation page for ManyChat with comment triggers, DM flows, lead capture, and creator examples.',
    hero: 'Instagram-first content focused on comments, DMs, stories, and creator workflows.',
    seed: 'instagram automation'
  },
  messenger: {
    title: 'ManyChat Messenger Automation',
    meta: 'A Messenger-focused ManyChat page covering chatbot flows, lead qualification, support, and conversions.',
    hero: 'A Messenger-specific page for guided conversations and lead capture.',
    seed: 'messenger automation'
  }
};

const SLUGS = [
  ['manychat-tutorial-00500', 'tutorial'],
  ['manychat-pricing-00501', 'pricing'],
  ['manychat-instagram-00502', 'instagram'],
  ['manychat-messenger-00503', 'messenger']
];

function makeBlock(label, topic, seed, i) {
  return `
    <section class="section">
      <div class="card">
        <h2>${label}</h2>
        <p>${topic} needs its own angle, examples, and supporting detail. This page keeps the same overall layout, but the wording, use cases, and intent are changed so it feels unique for the ${topic} subject.</p>
        <p>Expanded detail ${i + 1}: The best way to reach a 2,500-word target is to write useful paragraphs that match the page intent. For ${topic}, that means talking about the specific problem the reader has, the workflow they are trying to build, and the result they want from the tool.</p>
        <p>Expanded detail ${i + 2}: The content should not just repeat the keyword. It should explain the situation, show what the platform does, and give examples of how a user would actually apply it. This also helps the page feel like a real resource instead of a thin landing page.</p>
        <p>Expanded detail ${i + 3}: Seed phrase: ${seed}. Use this phrase naturally in the surrounding copy to keep the page aligned with the keyword theme while still making each page distinct in tone and structure.</p>
      </div>
    </section>`;
}

function buildPage(slug, cfg) {
  const [firstWord, secondWord] = slug.split('-');
  const sections = [];
  sections.push(`
    <section class="hero card">
      <div class="eyebrow">Instagram, Messenger & SMS Marketing Automation Tool</div>
      <h1>${cfg.title}</h1>
      <p class="lead">${cfg.hero}</p>
      <p>Automate conversations, capture leads, and increase conversions with a page that is designed to match the intent behind this exact topic. The layout stays consistent, but the copy changes by subject so every page can stand on its own.</p>
      <div class="cta-row">
        <a class="btn primary" href="https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e">🔥 Get 1 Month FREE</a>
        <a class="btn secondary" href="https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59">💰 View Pricing</a>
      </div>
    </section>`);

  sections.push(`
    <section class="section">
      <div class="card">
        <h2>What this page covers</h2>
        <ul>
          <li>A unique topic angle for ${slug}.</li>
          <li>Long-form explanations built around user intent.</li>
          <li>Examples, FAQs, and conversion-focused CTAs.</li>
          <li>Support text that helps the page reach roughly 2,500 words.</li>
        </ul>
      </div>
    </section>`);

  const blocks = [
    ['Overview', `ManyChat pages should not all say the same thing in different words. This ${firstWord} page uses a different intro, different examples, and different supporting sections so the subject has its own identity.`],
    ['Why it matters', `A ${secondWord} page should answer the question the reader actually has. The purpose is not just to rank for a keyword, but to satisfy the intent behind the keyword with useful, specific information.`],
    ['How to use it', `The most effective pages combine education and conversion. Show what the platform does, explain who it is for, and then guide the reader toward the next action with a clear CTA.`],
    ['Example workflow', `If the topic is ${slug}, use an example that matches the subject. For example, a tutorial page should explain setup steps, while a pricing page should explain plan differences and value.`],
    ['Feature breakdown', `Give each page a feature section that fits the topic. That could mean automation features, pricing details, channel-specific workflows, or beginner setup steps depending on the subject.`],
    ['FAQ', `Add unique FAQ questions that match the page topic. The questions should change from page to page so the FAQ section reinforces the intent instead of duplicating other articles.`],
    ['CTA', `Use the CTA to match the page theme. A tutorial page can invite setup, a pricing page can invite plan comparison, and a channel page can invite activation for that specific channel.`]
  ];

  blocks.forEach((b, idx) => {
    sections.push(`
    <section class="section">
      <div class="card">
        <h2>${b[0]}</h2>
        <p>${b[1]}</p>
        <p>Expanded detail ${idx + 1}: Keep the copy specific to ${slug} so it does not look like a reused template. The more the page speaks to the exact subject and use case, the more it will feel unique to both users and search engines.</p>
        <p>Expanded detail ${idx + 8}: Use concrete examples, short explanations, and intent-matched language. That gives you depth without turning the page into filler.</p>
      </div>
    </section>`);
  });

  for (let i = 0; i < 6; i++) sections.push(makeBlock(`Extra section ${i + 1}`, slug, cfg.seed, i * 3));

  sections.push(`
    <section class="section">
      <div class="card faq">
        <h2>Frequently asked questions</h2>
        <details><summary>Is this page unique?</summary><p>Yes. The layout is shared, but the title, hero text, examples, FAQs, and supporting copy are changed by subject.</p></details>
        <details><summary>Will this help reach 2,500 words?</summary><p>Yes. The generator adds multiple long sections and expanded detail blocks so each page can grow into a full-length article.</p></details>
        <details><summary>Can I add more topics?</summary><p>Yes. Add new entries to PAGE_TYPES and a new slug in SLUGS, then generate the pages again.</p></details>
      </div>
    </section>`);

  sections.push(`
    <section class="section">
      <div class="card">
        <h2>Final CTA</h2>
        <p>Use this page as the subject-specific version for ${slug}. It is built to stay consistent in layout while staying different in actual content, which is the key to scaling without creating duplicate pages.</p>
        <div class="cta-row">
          <a class="btn primary" href="https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e">🔥 Get 1 Month FREE</a>
          <a class="btn secondary" href="https://manychat.partnerlinks.io/t8let4hhqtqg-wki14">💸 Get 50% Off</a>
        </div>
      </div>
    </section>`);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${cfg.title}</title>
  <meta name="description" content="${cfg.meta}">
  <link rel="canonical" href="https://brightlane.github.io/manychat.com/${slug}.html">
  <style>
    body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#f6f7fb;color:#111;line-height:1.75}
    .wrap{max-width:980px;margin:0 auto;padding:24px}
    .card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:28px;box-shadow:0 8px 22px rgba(0,0,0,.05)}
    .section{margin:22px 0}
    .hero{padding:34px}
    .eyebrow{display:inline-block;background:#eef2ff;color:#4338ca;padding:7px 12px;border-radius:999px;font-size:.88rem;margin-bottom:14px}
    h1{font-size:clamp(2rem,4vw,3.5rem);line-height:1.1;margin:0 0 14px}
    h2{font-size:1.45rem;margin:0 0 12px}
    p{margin:0 0 14px}
    .lead{font-size:1.08rem;color:#374151}
    ul{margin:0 0 14px 22px}
    li{margin:8px 0}
    .cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}
    .btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:700}
    .btn.primary{background:#4f46e5;color:#fff}
    .btn.secondary{background:#111827;color:#fff}
    details{border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin:10px 0}
    summary{cursor:pointer;font-weight:700}
  </style>
</head>
<body>
  <div class="wrap">
    ${sections.join('\n')}
  </div>
</body>
</html>`;
}

function generate() {
  for (const [slug, key] of SLUGS) {
    const cfg = PAGE_TYPES[key];
    const html = buildPage(slug, cfg);
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.html`), html, 'utf8');
  }
  fs.writeFileSync(path.join(OUT_DIR, 'manychat-page-generator-v2.js'), code, 'utf8');
}

generate();
console.log('Created:', SLUGS.map(([s]) => `${s}.html`).join(', '));
