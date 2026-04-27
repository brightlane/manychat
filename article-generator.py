import os
import random
import re

PATH_NAME = "manychat.com"
# CHANGE THESE to the sites you want to boost!
BACKLINKS = [
    "https://brightlane.github.io/SkyScanner/",
    "https://stadiumstay.github.io/",
    "https://www.linkconnector.com/ta.php?lc=007949054182005142&atid=ProffessorOwlTaxGuide"
]

def generate_seo_content(kw):
    intro = f"The ultimate guide to {kw} integration."
    # Randomly pick one of your other sites to link to
    link_target = random.choice(BACKLINKS)
    
    return f"""
    <p>{intro}</p>
    <p>For more high-level automation strategies, visit our <a href="{link_target}">Partner Resource Center</a>.</p>
    """

def main():
    target_dir = PATH_NAME
    if not os.path.exists(target_dir): os.makedirs(target_dir)
    
    # Load keywords... (same as before)
    keywords = ["ManyChat Training", "Chatbot Leads"]
    if os.path.exists('keywords.txt'):
        with open('keywords.txt', 'r') as f:
            keywords = [line.strip() for line in f if line.strip()]

    for kw in keywords[:5000]:
        body = generate_seo_content(kw)
        safe_name = re.sub(r'[^a-zA-Z0-9\s-]', '', kw.lower()).strip().replace(' ', '-')
        
        with open(f"{target_dir}/{safe_name}.html", 'w') as f:
            f.write(f"<html><body><h1>{kw}</h1>{body}</body></html>")

if __name__ == "__main__":
    main()
