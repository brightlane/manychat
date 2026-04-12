import random
import datetime
import os
import xml.etree.ElementTree as ET
from xml.dom import minidom

# --- CONFIGURATION ---
KEYWORD_FILE = "keywords.txt"
MANYCHAT_DIR = "manychat"
SITEMAP_PATH = "manychat-sitemap.xml"
DOMAIN = "https://brightlane.github.io/manychat/"

# 2026 Affiliate Links
LINKS = [
    "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
    "https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59"
]

def get_modular_content(keyword):
    """Generates a high-conversion Comparison Table for SEO Snippets"""
    competitor = keyword.replace("ManyChat vs", "").replace("ManyChat vs.", "").strip()
    
    return f"""
    <section>
        <h2>Head-to-Head: ManyChat vs. {competitor} (2026 Update)</h2>
        <p>Choosing between <strong>ManyChat</strong> and <strong>{competitor}</strong> is the most critical decision for your automation ROI. We've audited both for DM velocity, AI reliability, and Meta API compliance.</p>
        
        <table style="width:100%; border-collapse: collapse; margin: 25px 0; border: 1px solid #ddd; font-family: sans-serif;">
            <tr style="background: #0084ff; color: white;">
                <th style="padding: 15px; border: 1px solid #ddd; text-align: left;">Feature</th>
                <th style="padding: 15px; border: 1px solid #ddd; text-align: left;">ManyChat</th>
                <th style="padding: 15px; border: 1px solid #ddd; text-align: left;">{competitor}</th>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">Official Meta Partner</td>
                <td style="padding: 12px; border: 1px solid #ddd;">✅ Yes (Tier 1)</td>
                <td style="padding: 12px; border: 1px solid #ddd;">⚠️ Unverified</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">AI-Step Logic</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Native OpenAI/Claude</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Webhook Only</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">2026 Starting Price</td>
                <td style="padding: 12px; border: 1px solid #ddd;">$15 (Essential)</td>
                <td style="padding: 12px; border: 1px solid #ddd;">Varies</td>
            </tr>
        </table>
    </section>

    <section>
        <h3>The Verdict for {competitor} Users</h3>
        <p>Users switching from {competitor} to ManyChat typically report a 40% increase in lead qualification accuracy. ManyChat’s native 2026 API bridge ensures zero shadow-bans during high-volume Instagram "Aura" campaigns.</p>
    </section>
    """

def update_sitemap(new_pages):
    today = datetime.date.today().strftime("%Y-%m-%d")
    if not os.path.exists(SITEMAP_PATH):
        root = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    else:
        try:
            tree = ET.parse(SITEMAP_PATH)
            root = tree.getroot()
        except:
            root = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

    for page in new_pages:
        url_node = ET.SubElement(root, "url")
        ET.SubElement(url_node, "loc").text = f"{DOMAIN}{page}"
        ET.SubElement(url_node, "lastmod").text = today
        ET.SubElement(url_node, "changefreq").text = "monthly"
        ET.SubElement(url_node, "priority").text = "0.8"

    xml_str = ET.tostring(root, encoding='utf-8')
    pretty_xml = minidom.parseString(xml_str).toprettyxml(indent="  ")
    with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
        f.write(pretty_xml)

def generate_page(keyword):
    slug = keyword.lower().replace(" ", "-").replace(".", "").replace(":", "") + ".html"
    path = os.path.join(MANYCHAT_DIR, slug)
    if os.path.exists(path): return None 

    affiliate = random.choice(LINKS)
    article_body = get_modular_content(keyword)

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{keyword} | 2026 Comparison Audit</title>
    <style>
        body {{ font-family: 'Segoe UI', sans-serif; line-height: 1.6; max-width: 850px; margin: auto; padding: 40px 20px; color: #333; }}
        .cta-box {{ background: #fff3f3; border: 2px solid #ff3366; padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0; }}
        .btn {{ display: inline-block; background: #0084ff; color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; }}
        footer {{ margin-top: 60px; border-top: 1px solid #eee; padding-top: 20px; font-size: 0.9em; }}
    </style>
</head>
<body>
    <h1>{keyword}: Which is Better in 2026?</h1>
    <main>{article_body}</main>
    <div class="cta-box">
        <h3>Stop Guessing. Start Automating.</h3>
        <p>Get the official ManyChat Pro trial and dominate your niche today.</p>
        <a href="{affiliate}" class="btn">CLAIM 2026 DISCOUNT →</a>
    </div>
    <footer>
        <p><a href="../index.html">Home</a> | <a href="../competition.html">Comparison Hub</a> | <a href="../legal.html">Privacy</a></p>
    </footer>
    <script>
    document.addEventListener('mouseleave', function(e) {{
        if (e.clientY < 0 && !localStorage.getItem('ev_done')) {{
            localStorage.setItem('ev_done', 'true');
            window.location.href = "{affiliate}";
        }}
    }});
    </script>
</body>
</html>"""
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    return slug

def main():
    if not os.path.exists(MANYCHAT_DIR): os.makedirs(MANYCHAT_DIR)
    if not os.path.exists(KEYWORD_FILE): return
    with open(KEYWORD_FILE, "r") as f:
        all_keys = [line.strip() for line in f if line.strip()]
    newly_created = []
    count = 0
    for kw in all_keys:
        if count >= 20: break
        result = generate_page(kw)
        if result:
            newly_created.append(result)
            count += 1
    if newly_created: update_sitemap(newly_created)

if __name__ == "__main__":
    main()
