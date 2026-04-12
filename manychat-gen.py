import os
import random

# Config
OUT_DIR = "manychat"
KW_FILE = "keywords.txt"
LINK = "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo"

def main():
    # Force folder creation
    if not os.path.exists(OUT_DIR):
        os.makedirs(OUT_DIR)

    # Get Keywords or use defaults if file is missing
    if os.path.exists(KW_FILE):
        with open(KW_FILE, "r", encoding="utf-8") as f:
            keywords = [line.strip() for line in f if line.strip()]
    else:
        keywords = ["ManyChat vs Chatfuel", "ManyChat vs Botpress"]

    # Generate Batch
    for kw in keywords[:20]:
        slug = kw.lower().replace(" ", "-").replace(".", "") + ".html"
        path = os.path.join(OUT_DIR, slug)
        
        if not os.path.exists(path):
            html = f"<html><body style='font-family:sans-serif;text-align:center;padding:50px;'><h1>{kw}</h1><p>2026 Comparison</p><a href='{LINK}'>Claim Discount</a></body></html>"
            with open(path, "w", encoding="utf-8") as f:
                f.write(html)
            print(f"Done: {slug}")

if __name__ == "__main__":
    main()
