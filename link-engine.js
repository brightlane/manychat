const fs = require("fs");
const csv = require("csv-parser");
const slugify = require("./slugify");

// Load all pages into memory
let pages = [];

// Grouping rules (INTENT-BASED SILOS)
function getCluster(intent) {
  switch (intent) {
    case "BUY":
      return ["TOOL", "PLATFORM", "HOWTO"];
    case "TOOL":
      return ["BUY", "HOWTO", "PROBLEM"];
    case "HOWTO":
      return ["TOOL", "STRATEGY", "PROBLEM"];
    case "PROBLEM":
      return ["HOWTO", "TOOL", "BUY"];
    case "STRATEGY":
      return ["HOWTO", "TOOL"];
    case "PLATFORM":
      return ["TOOL", "BUY"];
    default:
      return ["TOOL", "HOWTO"];
  }
}

// Build internal links
function buildLinks(current, pages) {
  const related = pages
    .filter(p => p.intent !== current.intent)
    .filter(p => getCluster(current.intent).includes(p.intent))
    .slice(0, 4);

  return related
    .map(p => `<li><a href="/${p.slug}">${p.title}</a></li>`)
    .join("\n");
}

// Enhance HTML with links
function injectLinks(html, links) {
  return html.replace(
    "<!-- LINKS_PLACEHOLDER -->",
    `<ul>${links}</ul>`
  );
}

// STEP 1: LOAD DATA
fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (row) => {
    pages.push({
      title: row.D,
      intent: row.B,
      slug: slugify(row.D),
      raw: row
    });
  })
  .on("end", () => {

    console.log("Loaded pages:", pages.length);

    pages.forEach(page => {
      const links = buildLinks(page, pages);

      const html = `
<!DOCTYPE html>
<html>
<head>
  <title>${page.title}</title>
</head>
<body>

<h1>${page.title}</h1>

<p>${page.raw.A}</p>

<!-- LINKS_PLACEHOLDER -->

</body>
</html>
`;

      const finalHtml = injectLinks(html, links);

      fs.writeFileSync(`output/${page.slug}.html`, finalHtml);
    });

    console.log("✅ Internal linking applied across all pages");
  });
