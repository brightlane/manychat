const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'output');

const PAGES = [
  {
    slug: 'manychat-login-00504',
    title: 'ManyChat Login Guide',
    meta: 'Learn how to access ManyChat, solve login issues, and understand account entry, dashboard access, and onboarding steps.',
    hero: 'A login-focused page that helps users get into ManyChat and understand what to do next.',
    angle: 'access and onboarding',
    keyword: 'login'
  },
  {
    slug: 'manychat-free-00505',
    title: 'ManyChat Free Plan Guide',
    meta: 'A detailed guide to the ManyChat free plan, what it includes, who should use it, and when upgrading makes sense.',
    hero: 'A free-plan page that explains the value, limits, and best use cases for beginners.',
    angle: 'free plan evaluation',
    keyword: 'free'
  },
  {
    slug: 'manychat-pro-00506',
    title: 'ManyChat Pro Plan Guide',
    meta: 'A ManyChat Pro page covering advanced features, paid plan benefits, scaling, and buyer decision factors.',
    hero: 'A pro-plan page focused on advanced features, scale, and conversion value.',
    angle: 'upgrade decision',
    keyword: 'pro'
  }
];

function longIntro(page) {
  return `
    <section class="section card">
      <div class="eyebrow">ManyChat ${page.keyword} page</div>
      <h1>${page.title}</h1>
      <p class="lead">${page.hero}</p>
      <p>This page is built around ${page.angle}. It should feel different from other ManyChat pages because the user intent is different, the examples are different, and the calls to action are different.</p>
      <p>When you build a subject-specific page, the key is not just changing a keyword in the heading. You need a distinct problem statement, distinct examples, and distinct supporting sections so the page reads like its own article.</p>
      <div class="cta-row">
        <a class="btn primary" href="https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e">🔥 Get 1 Month FREE</a>
        <a class="btn secondary" href="https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59">💰 View Pricing</a>
      </div>
    </section>`;
}

function section(h, p1, p2, p3) {
  return `
    <section class="section card">
      <h2>${h}</h2>
      <p>${p1}</p>
      <p>${p2}</p>
      <p>${p3}</p>
    </section>`;
}

function faqBlock(items) {
  return `
    <section class="section card">
      <h2>Frequently Asked Questions</h2>
      ${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}
    </section>`;
}

function build(page) {
  const sections = [];
  sections.push(longIntro(page));
  sections.push(section(
    'Why this page is different',
    `The ${page.keyword} page needs its own framing because the user is not looking for the same thing as someone reading a tutorial or pricing page. For login, the reader wants access and troubleshooting. For free, the reader wants to know the limits and benefits. For pro, the reader wants to understand value, feature depth, and upgrade timing.`,
    'That means the page should explain the most likely user question first, then expand into supporting detail. The section order should match the question a reader has when they land on the page. That keeps the content useful and helps the article feel intentional rather than recycled.',
    'This also makes it easier to scale without creating duplicate pages. The site can share the same layout, but each page should have a unique intro, unique examples, and unique FAQ questions.'
  ));
  sections.push(section(
    'Core message',
    `For the ${page.keyword} page, the core message should stay tightly aligned with ${page.angle}. The user should instantly understand what this page is for and why it exists.`,
    'A strong page gives the reader enough detail to make a decision. It should answer the top question, remove confusion, and show the next step clearly.',
    'This is where the conversion layer matters. A clear CTA should follow the explanation so the page is not just informative but also useful for action.'
  ));
  sections.push(section(
    'Expanded detail',
    `Add practical examples that fit the keyword. For login, explain dashboard access, password problems, and account entry. For free, explain what features are included, who should start there, and when the plan becomes limiting. For pro, explain scaling, advanced automation, and why a paid plan can pay off.`,
    'The more specific the example, the more unique the page will feel. Specificity also helps the page hold attention because the reader can see themselves in the scenario you describe.',
    'If you want each page to reach 2,500 words, the easiest way is to add multiple long but relevant sections rather than repeating the same sentence in different forms.'
  ));
  sections.push(section(
    'How to keep the page unique',
    'Start by changing the title, intro, and the first supporting paragraph for every page. Then change the examples, FAQ, and CTA labels so the page does not feel like a copy of another one.',
    'You can keep the same CSS and general structure because layout reuse is fine. What should change is the narrative and the intent behind the page.',
    'The result is a scalable system where the pages share a template but do not share the same message.'
  ));
  sections.push(faqBlock([
    ['Is this page the same as the tutorial page?', 'No. The intent is different, so the explanation, examples, and FAQ need to be different too.'],
    ['Can I use this layout for more pages?', 'Yes. Keep the structure and swap the copy by topic.'],
    ['How do I reach 2,500 words?', 'Add more relevant sub-sections, examples, and FAQ items for the specific keyword.']
  ]));
  sections.push(`
    <section class="section card">
      <h2>Final CTA</h2>
      <p>This ${page.keyword} page is meant to be the subject-specific version of the topic. It should guide the reader to the next step with a CTA that matches the topic and the user intent.</p>
      <div class="cta-row">
        <a class="btn primary" href="https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e">🔥 Get 1 Month FREE</a>
        <a class="btn secondary" href="https://manychat.partnerlinks.io/t8let4hhqtqg-wki14">💸 Get 50% Off</a>
      </div>
    </section>`);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.meta}">
  <link rel="canonical" href="https://brightlane.github.io/manychat.com/${page.slug}.html">
  <style>
    body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#f4f6fb;color:#111;line-height:1.75}
    .wrap{max-width:980px;margin:0 auto;padding:24px}
    .card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:28px;box-shadow:0 8px 24px rgba(0,0,0,.05);margin:22px 0}
    .eyebrow{display:inline-block;background:#eef2ff;color:#3730a3;padding:7px 12px;border-radius:999px;font-size:.88rem;margin-bottom:14px}
    .lead{font-size:1.08rem;color:#374151}
    h1{font-size:clamp(2rem,4vw,3.4rem);line-height:1.1;margin:0 0 14px}
    h2{font-size:1.45rem;margin:0 0 12px}
    p{margin:0 0 14px}
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
  for (const page of PAGES) {
    const html = build(page);
    fs.writeFileSync(path.join(OUT_DIR, `${page.slug}.html`), html, 'utf8');
  }
  fs.writeFileSync(path.join(OUT_DIR, 'manychat-next-pages.js'), code, 'utf8');
}

generate();
console.log('Created:', PAGES.map(p => `${p.slug}.html`).join(', '));
