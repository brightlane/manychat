import fs from "fs";

// =========================
// 🔗 AFFILIATE LINKS
// =========================
const LINKS = {
  ig: "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
  free: "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
  insta: "https://manychat.partnerlinks.io/8k59yhm0l32j-z7dk2i",
  creators: "https://manychat.partnerlinks.io/fsbpv50o2t2b-orca59",
  ecommerce: "https://manychat.partnerlinks.io/57bltjtmr5tj-tz7ji",
  pricing: "https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59",
  main: "https://manychat.partnerlinks.io/nwkkk7vkps17"
};

// =========================
// 🧠 SITE STRUCTURE
// =========================
const categories = [
  {
    name: "Instagram Automation",
    slug: "instagram-automation",
    keywords: [
      "instagram dm automation",
      "instagram growth strategy",
      "how to get instagram followers",
      "instagram lead generation"
    ]
  },
  {
    name: "DM Marketing",
    slug: "dm-marketing",
    keywords: [
      "dm marketing strategy",
      "how to sell on instagram dms",
      "instagram dm funnel"
    ]
  },
  {
    name: "Ecommerce Automation",
    slug: "ecommerce-automation",
    keywords: [
      "ecommerce chatbot automation",
      "abandoned cart recovery",
      "sales automation ecommerce"
    ]
  }
];

// =========================
// ✍️ AI-STYLE ARTICLE GENERATOR
// =========================
function article(keyword, category) {

  const variations = [
    `In today's digital landscape, ${keyword} is one of the most effective ways to grow online businesses.`,
    `Many brands are using ${keyword} to automate customer acquisition and scale faster.`,
    `${keyword} allows businesses to replace manual work with automated messaging systems.`,
    `The rise of automation has made ${keyword} essential for modern marketers.`
  ];

  const body = `
    ${variations[Math.floor(Math.random() * variations.length)]}

    The key advantage is automation. Instead of manually responding to users, systems like ManyChat handle conversations instantly.

    Businesses using ${keyword} see higher engagement and conversion rates because timing matters in digital marketing.

    When a user interacts with your content, automation ensures they receive instant responses, offers, and follow-ups.
  `;

  return `
<!DOCTYPE html>
<html>
<head>
<title>${keyword} - Complete Guide</title>
<meta name="description" content="Learn ${keyword} with automation strategies using ManyChat.">
</head>

<body style="font-family:Arial; max-width:900px; margin:40px; line-height:1.7;">

<h1>${keyword}</h1>

<p>${body}</p>

<h2>Why Automation Works</h2>
<p>Automation removes delay and increases conversion speed dramatically.</p>

<div>
  <a href="${LINKS.ig}">👉 Start Instagram Automation</a>
</div>

<h2>How to Implement</h2>
<ul>
<li>Set up ManyChat</li>
<li>Create DM flows</li>
<li>Use keyword triggers</li>
<li>Deliver offers automatically</li>
</ul>

<div>
  <a href="${LINKS.free}">👉 Try Free Trial</a>
</div>

<h2>Final Thoughts</h2>
<p>${keyword} is most powerful when combined with automation systems like ManyChat.</p>

<div>
  <a href="${LINKS.pricing}">👉 View Pricing</a>
</div>

</body>
</html>
`;
}

// =========================
// 🏠 HOME PAGE
// =========================
function homePage() {
  return `
<!DOCTYPE html>
<html>
<head>
<title>ManyChat Automation Hub</title>
</head>

<body style="font-family:Arial; max-width:900px; margin:40px; line-height:1.7;">

<h1>ManyChat Automation Hub</h1>

<p>Learn how to grow your business using Instagram automation, DM funnels, and chatbot systems.</p>

<h2>Categories</h2>
<ul>
${categories.map(c => `<li><a href="./${c.slug}.html">${c.name}</a></li>`).join("")}
</ul>

<div>
  <a href="${LINKS.ig}">👉 Start Here</a>
</div>

</body>
</html>
`;
}

// =========================
// 📚 CATEGORY PAGE
// =========================
function categoryPage(cat) {

  const links = cat.keywords.map(k =>
    `<li><a href="./${k.replace(/ /g, "-")}.html">${k}</a></li>`
  ).join("");

  return `
<!DOCTYPE html>
<html>
<head>
<title>${cat.name}</title>
</head>

<body style="font-family:Arial; max-width:900px; margin:40px; line-height:1.7;">

<h1>${cat.name}</h1>

<p>Explore guides and strategies for ${cat.name} using automation systems.</p>

<h2>Articles</h2>
<ul>
${links}
</ul>

<div>
  <a href="${LINKS.insta}">👉 Instagram Automation Tool</a>
</div>

</body>
</html>
`;
}

// =========================
// 🧾 SITEMAP
// =========================
function sitemap(files) {
  const urls = files.map(f => `<url><loc>${f}</loc></url>`).join("");

  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset>
${urls}
</urlset>
`;
}

// =========================
// ⚙️ ENGINE
// =========================
function run() {

  if (!fs.existsSync("site")) fs.mkdirSync("site");

  let files = [];

  // HOME
  fs.writeFileSync("site/index.html", homePage());
  files.push("index.html");

  // CATEGORIES
  categories.forEach(cat => {
    fs.writeFileSync(`site/${cat.slug}.html`, categoryPage(cat));
    files.push(`${cat.slug}.html`);

    // ARTICLES
    cat.keywords.forEach(kw => {
      const file = kw.replace(/ /g, "-") + ".html";
      fs.writeFileSync(`site/${file}`, article(kw, cat.name));
      files.push(file);
    });
  });

  // SITEMAP
  fs.writeFileSync("site/sitemap.xml", sitemap(files));

  console.log("✅ FULL WEBSITE GENERATED");
}

run();
