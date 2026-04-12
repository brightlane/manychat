# --- Money Silos for ManyChat 2026 ---

# High Conversion: Comparisons
competitors = [
    "Inro", "HighLevel", "Superprofile", "Tidio", "Gorgias", "Chatfuel", 
    "UChat", "Botpress", "Respond.io", "Landbot", "Intercom", "HubSpot",
    "ActiveCampaign", "Drift", "CreatorFlow", "LinkDM", "InstantDM", "Manybot"
]

# High Conversion: Niches
industries = [
    "Real Estate", "SaaS", "Ecommerce", "Dental", "Law Firms", "Coaching", 
    "Gyms", "Solar Energy", "Mortgage", "Crypto", "Travel", "Course Creators",
    "Shopify Stores", "Local Business", "Agencies", "Healthcare", "Aesthetics"
]

# Intent Modifiers
modifiers = [
    "Pricing 2026", "vs ManyChat Review", "Alternative for", "Automation Guide",
    "Lead Generation", "ROI Strategy", "Discount Code", "Essential Plan",
    "WhatsApp API Setup", "Instagram DM Strategy", "Official Partner"
]

def generate_keywords():
    keywords = []

    # 1. Generate "Vs" Battles (The Top Earners)
    for comp in competitors:
        keywords.append(f"ManyChat vs {comp} 2026 Review")
        keywords.append(f"Best ManyChat Alternative {comp}")
        keywords.append(f"{comp} vs ManyChat for Instagram")

    # 2. Generate Niche Specifics
    for ind in industries:
        keywords.append(f"ManyChat for {ind} Lead Generation")
        keywords.append(f"How to use ManyChat for {ind}")
        keywords.append(f"Best {ind} Chatbot 2026")

    # 3. Pricing & Technical
    keywords.append("ManyChat Essential Plan Pricing 2026")
    keywords.append("ManyChat Pro vs Business Plan")
    keywords.append("ManyChat WhatsApp API Fees Explained")
    keywords.append("ManyChat AI Step Tutorial 2026")
    keywords.append("ManyChat Instagram Comment to DM Guide")

    # 4. Fill the rest to reach 1,000 with long-tail variations
    while len(keywords) < 1000:
        comp = random.choice(competitors)
        ind = random.choice(industries)
        mod = random.choice(modifiers)
        
        variation = f"ManyChat {mod} for {ind} with {comp}"
        if variation not in keywords:
            keywords.append(variation)

    return keywords[:1000]

import random
if __name__ == "__main__":
    all_keys = generate_keywords()
    with open("keywords.txt", "w", encoding="utf-8") as f:
        for k in all_keys:
            f.write(f"{k}\n")
    print(f"Successfully injected {len(all_keys)} keywords into keywords.txt")
