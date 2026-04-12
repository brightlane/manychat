import random
import datetime
import os

# --- 1,000 KEYWORD DATABASE (SAMPLES) ---
# In your real file, fill this list with all 1,000 keys
ALL_KEYWORDS = [
    "ManyChat vs CreatorFlow 2026", "ManyChat Essential Plan Cost", 
    "Instagram DM Automation ManyChat", "ManyChat for Shopify 2026",
    "ManyChat vs LinkDM Review", "ManyChat WhatsApp API Guide",
    "ManyChat Pro Pricing 2026", "ManyChat for Real Estate Leads"
    # ... add the rest here
]

# --- 20 EXTRA FRESH WORDS GENERATOR ---
# These are added to the content daily to force Bing to re-index as "New"
FRESH_PHRASES = [
    "latest automation trends", "Meta API updates April 2026", "AI-driven engagement",
    "Instagram algorithm shifts", "WhatsApp business growth", "conversational commerce",
    "zero-click content strategy", "ManyChat Essential tier", "active contact limits",
    "automated lead qualification", "smart flow building", "2026 marketing ROI"
]

def generate_page(keyword):
    today = datetime.date.today().strftime("%Y-%m-%d")
    
    # 1. Pick 20 extra words/phrases to inject for "Freshness"
    extra_words = ", ".join(random.sample(FRESH_PHRASES, min(len(FRESH_PHRASES), 12)))
    
    # 2. File Naming Logic to avoid duplication
    safe_name = keyword.lower().replace(" ", "-").replace(":", "").replace("?", "")
    file_path = f"manychat/{safe_name}.html"
    
    if os.path.exists(file_path):
        print(f"Skipping {keyword} - already exists.")
        return None

    # 3. Content Construction (High-Conversion Layout)
    html = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head><title>{keyword} | Official 2026 Guide</title></head>
    <body>
        <h1>Maximizing {keyword}</h1>
        <p>This daily update explores how {extra_words} are shaping the future of automation.</p>
        <div class='3000-word-block'>
            [Your 3,000 Word SEO Content Template Here]
        </div>
    </body>
    </html>
    """
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(html)
    return file_path

def main():
    # Only pick 20 keys that haven't been built yet
    built_files = os.listdir("manychat") if os.path.exists("manychat") else []
    
    count = 0
    for kw in ALL_KEYWORDS:
        if count >= 20: break
        
        # Check if file exists by comparing slugs
        slug = kw.lower().replace(" ", "-") + ".html"
        if slug not in built_files:
            generate_page(kw)
            count += 1

if __name__ == "__main__":
    main()
