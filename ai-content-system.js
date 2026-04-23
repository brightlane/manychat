import fs from "fs";

// =========================
// 🔑 CONFIG
// =========================
const OPENAI_API_KEY = "PUT_YOUR_KEY_HERE";

// Affiliate links (kept intact)
const LINKS = {
  ig: "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
  free: "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
  insta: "https://manychat.partnerlinks.io/8k59yhm0l32j-z7dk2i",
  pricing: "https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59",
  main: "https://manychat.partnerlinks.io/nwkkk7vkps17"
};

// =========================
// 🧠 KEYWORDS (expand to 1000)
// =========================
const keywords = [
  "instagram dm automation",
  "instagram growth strategy",
  "how to get instagram followers",
  "dm marketing strategy",
  "whatsapp marketing automation",
  "ecommerce chatbot automation"
];

// =========================
// 🤖 AI ARTICLE GENERATOR
// =========================
async function generateArticle(keyword) {

  const prompt = `
Write a high-quality SEO blog article about "${keyword}".

Requirements:
- 1200–1800 words
- natural tone
- include headings (H1, H2, H3)
- explain problem + solution + steps
- mention automation marketing
- include CTA for ManyChat

Include this affiliate link naturally:
${LINKS.ig}
${LINKS.free}
${LINKS.insta}
`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an SEO expert copywriter." },
        { role: "user", content: prompt }
      ]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}

// =========================
// 🌐 HTML WRAPPER
// =========================
function wrapHTML(title, content) {
  return `
<!DOCTYPE html>
<html>
<head>
<title>${title}</title>
<meta name="description" content="${title} guide using automation.">
</head>

<body style="font-family:Arial; max-width:900px; margin:40px; line-height:1.7;">

${content}

<hr>
<p>
<a href="${LINKS.main}">Start Here</a> |
<a href="${LINKS.pricing}">Pricing</a>
</p>

</body>
</html>
`;
}

// =========================
// 📣 SOCIAL POST GENERATOR
// =========================
function socialPost(title, url) {

  return `
🚀 ${title}

Most people struggle with this, but automation changes everything.

👉 Learn more: ${url}

Start here: ${LINKS.ig}

#marketing #automation #growth
`;
}

// =========================
// ⚙️ MAIN ENGINE
// =========================
async function run() {

  if (!fs.existsSync("site")) fs.mkdirSync("site");
  if (!fs.existsSync("social")) fs.mkdirSync("social");

  const queue = [];

  for (const kw of keywords) {

    console.log("Generating:", kw);

    // 1. AI ARTICLE
    const article = await generateArticle(kw);

    // 2. SAVE HTML PAGE
    const file = kw.replace(/ /g, "-") + ".html";
    const html = wrapHTML(kw, article);

    fs.writeFileSync(`site/${file}`, html);

    // 3. SOCIAL POST
    const post = socialPost(kw, `https://yourdomain.com/${file}`);

    fs.writeFileSync(`social/${file}.txt`, post);

    queue.push({
      keyword: kw,
      page: file,
      post: post
    });
  }

  // 4. SAVE MASTER QUEUE
  fs.writeFileSync("content-queue.json", JSON.stringify(queue, null, 2));

  console.log("✅ FULL AI SYSTEM COMPLETE");
}

run();
