import fs from "fs";

// =========================
// 🔗 AFFILIATE LINKS
// =========================
const LINKS = {
  main: "https://manychat.partnerlinks.io/nwkkk7vkps17",
  ig: "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
  free: "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
  insta: "https://manychat.partnerlinks.io/8k59yhm0l32j-z7dk2i",
  pricing: "https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59"
};

// =========================
// 🧠 KEYWORD CLUSTERS
// =========================
const clusters = [
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
  }
];

// =========================
// 🧩 ALL ARTICLES MAP
// =========================
function buildArticleMap() {
  const map = {};

  clusters.forEach(cluster => {
    cluster.keywords.forEach(kw => {
      map[kw] = {
        cluster: cluster.name,
        slug: kw.replace(/ /g, "-") + ".html"
      };
    });
  });

  return map;
}

const articleMap = buildArticleMap();

// =========================
// 🔗 INTERNAL LINKS GENERATOR
// =========================
function relatedLinks(keyword) {

  const cluster = Object.values(articleMap)
    .find(v => v.slug === keyword.replace(/ /g, "-") + ".html")?.cluster;

  const related = Object.entries(articleMap)
    .filter(([k, v]) => v.cluster === cluster)
    .map(([k, v]) => `<li><a href="./${v.slug}">${k}</a></li>`)
    .join("");

  return `
<h3>Related Articles</h3>
<ul>
${related}
</ul>
`;
}

// =========================
// ✍️ ARTICLE BUILDER
// =========================
function buildArticle(keyword) {

  const file = keyword.replace(/ /g, "-") + ".html";

  return `
<!DOCTYPE html>
<html>

<head>
<title>${keyword} - SEO Guide</title>
<meta name="description" content="Learn ${keyword} with automation strategies.">
</head>

<body style="font-family:Arial; max-width:900px; margin:40px; line-height:1.7;">

<h1>${keyword}</h1>

<p>${keyword} is a powerful strategy used in modern marketing automation systems.</p>

<p>With ManyChat, you can automate ${keyword} and turn traffic into customers.</p>

<div>
  <a href="${LINKS.ig}">👉 Start Instagram Automation</a>
</div>

<h2>Why this works</h2>
<p>Automation improves speed, engagement, and conversion rates.</p>

<div>
  <a href="${LINKS.free}">👉 Try Free Trial</a>
</div>

<!-- 🔗 INTERNAL LINKING BLOCK -->
${relatedLinks(keyword)}

<!-- 🔗 CATEGORY CTA -->
<h3>Start Here</h3>
<a href="${LINKS.main}">Main ManyChat System</a>

</body>
</html>
`;
}

// =========================
// 🏠 CATEGORY PAGE BUILDER
// =========================
function buildCategory(cluster) {

  const links = cluster.keywords.map(kw =>
    `<li><a href="./${kw.replace(/ /g, "-")}.html">${kw}</a></li>`
  ).join("");

  return `
<!DOCTYPE html>
<html>

<head>
<title>${cluster.name}</title>
</head>

<body style="font-family:Arial; max-width:900px; margin:40px; line-height:1.7;">

<h1>${cluster.name}</h1>

<ul>
${links}
</ul>

<a href="${LINKS.ig}">👉 Instagram Automation Tool</a>

</body>
</html>
`;
}

// =========================
// ⚙️ ENGINE
// =========================
function run() {

  if (!fs.existsSync("site")) fs.mkdirSync("site");

  // ARTICLES
  Object.keys(articleMap).forEach(keyword => {
    const file = articleMap[keyword].slug;
    const html = buildArticle(keyword);
    fs.writeFileSync(`site/${file}`, html);
  });

  // CATEGORIES
  clusters.forEach(cluster => {
    fs.writeFileSync(`site/${cluster.slug}.html`, buildCategory(cluster));
  });

  console.log("✅ INTERNAL LINKING SEO SITE GENERATED");
}

run();
