import random
import datetime
import os

# --- 1,000 KEYWORD DATABASE ---
# Starting with the High-Earner Tier 1 & 2
ALL_KEYWORDS = [
    "ManyChat vs Chatfuel 2026", "ManyChat vs MobileMonkey Review", "ManyChat vs Tars WhatsApp",
    "ManyChat vs Intercom Pricing", "ManyChat vs Respond.io Guide", "ManyChat vs GoHighLevel Funnels",
    "ManyChat vs Linktree Strategy", "ManyChat vs Manybot Telegram", "ManyChat vs Drift B2B",
    "ManyChat Pro Discount Code 2026", "ManyChat Essential Plan Pricing", "ManyChat Free Trial Link 2026",
    "Is ManyChat Pro Worth It", "ManyChat Coupon April 2026", "ManyChat Agency Account Cost",
    "ManyChat Lifetime Deal Status", "ManyChat vs Pro Feature List", "How to get ManyChat Pro Free",
    "ManyChat for Real Estate Agents 2026", "Automated Lead Gen for Mortgage Brokers"
    # Add the remaining 980 keywords here
]

# --- AFFILIATE URL ROTATION ---
MANYCHAT_LINKS = [
    "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
    "https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59",
    "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
    "https://manychat.partnerlinks.io/t8let4hhqtqg-wki14",
    "https://manychat.partnerlinks.io/nwkkk7vkps17"
]

FRESH_PHRASES = ["Meta API updates 2026", "AI-driven engagement", "Instagram algorithm shifts", "WhatsApp growth"]

def get_html_template(keyword, affiliate_url):
    today = datetime.date.today().strftime("%B %d, 2026")
    extra_words = ", ".join(random.sample(FRESH_PHRASES, 2))
    
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{keyword} | 2026 ManyChat Official Guide</title>
    <style>
        body {{ font-family: sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: auto; padding: 20px; }}
        .cta-box {{ background: #f0f7ff; padding: 30px; border: 2px solid #0084ff; border-radius: 12px; text-align: center; }}
        .btn {{ background: #ff3366; color: white; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 8px; display: inline-block; }}
        .comparison {{ width: 100%; border-collapse: collapse; margin: 20px 0; }}
        .comparison th, .comparison td {{ border: 1px solid #ddd; padding: 12px; text-align: left; }}
    </style>
</head>
<body>
    <div class="cta-box">
        <h1>{keyword}: The 2026 Strategic Review</h1>
        <p>Updated: {today} | Featuring {extra_words}</p>
        <a href="{affiliate_url}" class="btn">ACTIVATE FREE TRIAL NOW</a>
    </div>
    
    <nav>
        <h3>Guide Navigation</h3>
        <ul>
            <li><a href="#analysis">2026 Analysis</a></li>
            <li><a href="#comparison">ManyChat vs Others</a></li>
            <li><a href="#verdict">Final Verdict</a></li>
        </ul>
    </nav>

    <h2 id="analysis">The State of {keyword}</h2>
    <p>In 2026, automation is the only way to scale. This guide covers how {keyword} integrates with ManyChat's newest AI features...</p>
    
    <h2 id="comparison">Detailed Comparison Table</h2>
    <table class="comparison">
        <tr style="background:#0084ff; color:white;"><th>Feature</th><th>ManyChat</th><th>Competitors</th></tr>
        <tr><td>AI Flow Builder</td><td>✅ Official API</td><td>❌ Limited</td></tr>
        <tr><td>WhatsApp Setup</td><td>✅ 2-Minute Link</td><td>❌ Complex</td></tr>
    </table>

    <h2 id="verdict">Final Verdict</h2>
    <p>For maximizing ROI on {keyword}, ManyChat remains the superior 2026 choice.</p>
    <div style="text-align:center;"><a href="{affiliate_url}" class="btn">GET STARTED FREE</a></div>
</body>
</html>"""

def main():
    if not os.path.exists("manychat"):
        os.makedirs("manychat")

    built_files = os.listdir("manychat")
    count = 0
    
    for kw in ALL_KEYWORDS:
        if count >= 20: break
        
        safe_name = kw.lower().replace(" ", "-").replace(":", "").replace("?", "")
        filename = f"{safe_name}.html"
        
        if filename not in built_files:
            affiliate_link = random.choice(MANYCHAT_LINKS)
            content = get_html_template(kw, affiliate_link)
            
            with open(f"manychat/{filename}", "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Generated: {filename}")
            count += 1

if __name__ == "__main__":
    main()
