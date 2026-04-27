import os
import random
import re
from datetime import datetime

def generate_manychat_content(kw):
    """Creates unique automation-focused content without API costs."""
    
    intros = [
        f"Mastering {kw} is the key to scaling your 2026 business automation.",
        f"ManyChat workflows for {kw} are revolutionizing how we handle lead gen.",
        f"Why {kw} remains the top priority for automated chat marketing this year.",
        f"Transform your customer journey by implementing {kw} inside ManyChat."
    ]
    
    tech_points = [
        f"Our {kw} logic uses dynamic tagging to ensure high conversion rates.",
        f"Integrating {kw} with external APIs allows for 24/7 autonomous operations.",
        f"The {kw} framework in ManyChat is now fully optimized for mobile users.",
        f"By automating the {kw} sequence, you free up 40+ hours of manual work."
    ]
    random.shuffle(tech_points)
    
    ctas = [f"Setup {kw} Now", f"Download {kw} Template", f"Get {kw} Checklist"]

    return f"""
    <p>{random.choice(intros)}</p>
    <div style='border-left: 4px solid #3b82f6; padding-left: 15px; margin: 20px 0;'>
        <strong>Key Feature:</strong> {tech_points[0]}
    </div>
    <p>{tech_points[1]}</p>
    <p style='text-align:center;'>
        <a href='#' style='background:#007bff; color:#fff; padding:10px 20px; text-decoration:none; border-radius:5px;'>{random.choice(ctas)}</a>
    </p>
    <p>{tech_points[2]}</p>
    """

def main():
    if not os.path.exists('pages'): os.makedirs('pages')
    
    # Use your ManyChat/Automation keywords
    keywords = ["Instagram Automation", "Chatbot Funnels"]
    if os.path.exists('keywords.txt'):
        with open('keywords.txt', 'r', encoding='utf-8') as f:
            keywords = [line.strip() for line in f if line.strip()]

    for kw in keywords[:5000]:
        body = generate_manychat_content(kw)
        safe_name = re.sub(r'[^a-zA-Z0-9\s-]', '', kw.lower()).strip().replace(' ', '-')
        
        with open(f"pages/{safe_name}.html", 'w', encoding='utf-8') as f:
            f.write(f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{kw} | Automation Authority</title>
    <style>body{{font-family:sans-serif; max-width:800px; margin:auto; padding:40px; line-height:1.6;}}</style>
</head>
<body>
    <h1>ManyChat Guide: {kw}</h1>
    {body}
    <hr>
    <footer>Auto-Update: {datetime.now().strftime('%Y-%m-%d')}</footer>
</body>
</html>""")
    
    print(f"🏁 ManyChat Vulture finished {len(keywords[:5000])} pages.")

if __name__ == "__main__":
    main()
