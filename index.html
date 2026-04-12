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

# Your Rotating Affiliate Links
LINKS = [
    "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
    "https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59",
    "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
    "https://manychat.partnerlinks.io/t8let4hhqtqg-wki14",
    "https://manychat.partnerlinks.io/nwkkk7vkps17"
]

# 2026 Trend Phrases for SEO Freshness
FRESH_BANK = [
    "Meta API v18.0", "Instagram Aura Effect", "Comment-to-DM velocity", 
    "WhatsApp Business API 2026", "AI-powered flow logic", "zero-click conversion",
    "Shopify ManyChat integration", "TikTok DM beta", "Telegram automation 2026",
    "conversational commerce", "lead qualification AI", "smart-delayed replies"
]

def get_modular_content(keyword):
    """Generates the expert SEO content block"""
    return f"""
    <section>
        <h2>Why {keyword} is the #1 Focus for 2026</h2>
        <p>In the current digital landscape, <strong>{keyword}</strong> has become the primary driver for automated ROI. Understanding the nuances of {keyword} is critical for capturing leads in a zero-click environment.</p>
        
        <h3>The Core Advantages</h3>
        <ul>
            <li><strong>Official Meta Integration:</strong> Using ManyChat for {keyword} ensures your account stays safe under 2026 API rules.</li>
            <li><strong>AI-Driven Flows:</strong> The new "AI Step" allows {keyword} to handle user intent without manual branching.</li>
            <li><strong>Multichannel Reach:</strong> Scale {keyword} across Instagram and WhatsApp from one hub.</li>
        </ul>
    </section>

    <section>
        <h3>Step-by-Step Implementation for {keyword}</h3>
        <p>To begin dominating {keyword}, you must first map your user journey. Identify the 'Aha! Moment' in your flow—the instant a user receives a lead magnet via DM.</p>
    </section>

    <section>
        <h3>Final Verdict on {keyword}</h3>
        <p>If you are serious about growth in 2026, ignoring <strong>{keyword}</strong> is no longer an option. The conversion data shows a massive spike in ROI using automated chat funnels.</p>
    </section>
    """

def update_sitemap(new_pages):
    """Injects new URLs into the manychat-sitemap.xml"""
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
        ET.SubElement(url_node, "priority").text = "0.7"

    xml_str = ET.tostring(root, encoding='utf-8')
    parsed_str = minidom.parseString(xml_str)
    pretty_xml = parsed_str.toprettyxml(indent="  ")
    
    with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
        f.write(pretty_xml)

def generate_page(keyword):
    """Creates individual HTML files with exit-intent and legal links"""
    slug = keyword.lower().replace(" ", "-").replace(":", "").replace("?", "") + ".html"
    path = os.path.join(MANYCHAT_DIR, slug)
    
    if os.path.exists(path):
        return None 

    affiliate = random.choice(LINKS)
    fresh_words = ", ".join(random.sample(FRESH_BANK, 3))
    today = datetime.date.today().strftime("%B %d, 2026")
    article_body = get_modular_content(keyword)

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{keyword} | Official 2026 Automation Guide</title>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: auto; padding: 20px; color: #333; }}
        header {{ background: #f4f4f4; padding: 20px; border-radius: 10px; margin-bottom: 20px; }}
        .cta-btn {{ display: inline-block; background: #0084ff; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; }}
        .money-box {{ background: #eef7ff; padding: 20px; border-left: 5px solid #ff3366; margin: 20px 0; }}
        footer {{ margin-top: 50px; border-top: 1px solid #eee; padding-top: 20px; font-size: 0.9em; }}
    </style>
</head>
<body>
    <header>
        <h1>Strategy: {keyword}</h1>
        <p><strong>Published:</strong> {today} | <strong>Trend:</strong> {fresh_words}</p>
    </header>
    
    <div class="money-box">
        <h3>2026 ManyChat Pro Offer</h3>
        <p>Unlock official Meta automation for {keyword} today.</p>
        <a href="{affiliate}" class="cta-btn">ACTIVATE DISCOUNT →</a>
    </div>

    <main>{article_body}</main>

    <footer>
        <p><a href="../index.html">Home</a> | <a href="../blog.html">Blog</a> | <a href="../legal.html">Privacy & Legal</a></p>
        <p>&copy; 2026 brightlane Digital. Verified ManyChat Partner.</p>
    </footer>

    <script>
    document.addEventListener('mouseleave', function(e) {{
        if (e.clientY < 0 && !localStorage.getItem('exit_set')) {{
            localStorage.setItem('exit_set', 'true');
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
    
    if not os.path.exists(KEYWORD_FILE):
        print("Error: keywords.txt not found.")
        return

    with open(KEYWORD_FILE, "r") as f:
        all_keys = [line.strip() for line in f if line.strip()]

    newly_created = []
    count = 0
    
    for kw in all_keys:
        if count >= 20: break
        
        result = generate_page(kw)
        if result:
            newly_created.append(result)
            print(f"Generated: {result}")
            count += 1
    
    if newly_created:
        update_sitemap(newly_created)
        print(f"Done. {len(newly_created)} pages added to sitemap.")
    else:
        print("No new keywords found. Site is up to date.")

if __name__ == "__main__":
    main()
