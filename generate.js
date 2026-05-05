const fs = require("fs");
const csv = require("csv-parser");

const CTA = "https://manychat.partnerlinks.io/nwkkk7vkps17";

function buildPage(row) {
  return `
<!DOCTYPE html>
<html>
<head>
<title>${row.D}</title>
<meta name="description" content="${row.E}">
</head>
<body>

<h1>${row.D}</h1>

<!-- TOP CTA -->
<div>
  <a href="${CTA}">🔥 Start Automating Your Business</a>
</div>

<p>${row.A} is used for marketing automation, CRM systems, funnels, and business growth.</p>

<h2>Overview</h2>
<p>This page explains how ${row.A} helps improve conversions and automation.</p>

<!-- MID CTA -->
<div>
  <a href="${CTA}">Try Automation System →</a>
</div>

<h2>Related Resources</h2>
<ul>
<li>${row.H}</li>
</ul>

<!-- BOTTOM CTA -->
<div>
  <h3>Ready to scale?</h3>
  <a href="${CTA}">Launch Your Automation System →</a>
</div>

<p>Summary: This page covers ${row.A} in a structured SEO format.</p>

</body>
</html>
`;
}

fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (row) => {
    const slug = row.D.toLowerCase().replace(/ /g, "-");

    fs.writeFileSync(`output/${slug}.html`, buildPage(row));
  })
  .on("end", () => {
    console.log("400 pages generated successfully.");
  });
