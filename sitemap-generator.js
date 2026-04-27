const fs = require('fs-extra');
const baseUrl = "https://brightlane.github.io/manychat";

async function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  xml += `<url><loc>${baseUrl}/index.html</loc><priority>1.0</priority></url>`;
  // Logic to match the 10,000 files generated above
  // (Simplified for brevity, ensure it matches your loop)
  xml += `</urlset>`;
  await fs.writeFile('sitemap.xml', xml);
  console.log("✅ Sitemap created.");
}
generateSitemap();
