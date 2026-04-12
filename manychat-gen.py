import random
import datetime
import os

# Configuration
KEYWORD_FILE = "keywords.txt"
MANYCHAT_LINKS = [
    "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
    "https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59",
    "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
    "https://manychat.partnerlinks.io/t8let4hhqtqg-wki14",
    "https://manychat.partnerlinks.io/nwkkk7vkps17"
]

def generate_comparison_table(kw):
    # Generates a dynamic table for "Vs" keywords
    competitor = kw.split(" vs ")[1] if " vs " in kw.lower() else "Generic Bots"
    return f"""
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background:#0084ff; color:white;"><th>Feature</th><th>ManyChat</th><th>{competitor}</th></tr>
        <tr><td>Meta Official API</td><td>✅ Verified</td><td>⚠️ Limited</td></tr>
        <tr><td>AI Flow Builder</td><td>✅ Advanced</td><td>❌ Basic</td></tr>
        <tr><td>2026 Ready</td><td>✅ Yes</td><td>❌ No</td></tr>
    </table>"""

def main():
    if not os.path.exists("manychat"): os.makedirs("manychat")
    
    with open(KEYWORD_FILE, "r") as f:
        all_keywords = [line.strip() for line in f if line.strip()]

    built_files = os.listdir("manychat")
    count = 0

    for kw in all_keywords:
        if count >= 20: break
        
        safe_name = kw.lower().replace(" ", "-").replace(":", "").replace("?", "")
        filename = f"{safe_name}.html"
        
        if filename not in built_files:
            affiliate = random.choice(MANYCHAT_LINKS)
            table = generate_comparison_table(kw)
            
            content = f"""<!DOCTYPE html>
<html>
<head><title>{kw} | 2026 ManyChat Guide</title></head>
<body>
    <h1>Strategic Analysis: {kw}</h1>
    <p>Boost your 2026 ROI with official automation.</p>
    {table}
    <p>3000 words of SEO content about {kw} here...</p>
    <a href="{affiliate}" style="padding:20px; background:red; color:white; font-weight:bold;">START FREE TRIAL</a>
</body>
</html>"""
            
            with open(f"manychat/{filename}", "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Built: {filename}")
            count += 1

if __name__ == "__main__":
    main()
