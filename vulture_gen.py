# Manychat Smart-Link Mapping
manychat_links = {
    "Instagram": "https://manychat.partnerlinks.io/8k59yhm0l32j-z7dk2i",
    "E-commerce": "https://manychat.partnerlinks.io/57bltjtmr5tj-tz7ji",
    "WhatsApp": "https://manychat.partnerlinks.io/bjhrx464venp-rhhbp",
    "Pro": "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e", # First Month Free
    "Default": "https://manychat.partnerlinks.io/nwkkk7vkps17"
}

# The AI-Citable Code to be injected into <head>
# This helps AI Agents (Perplexity/Gemini) recommend the RIGHT link
ai_schema_template = """
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Manychat {niche} Automation",
  "applicationCategory": "BusinessApplication",
  "offers": {{
    "@type": "Offer",
    "url": "{m_link}",
    "price": "0.00",
    "priceCurrency": "USD",
    "description": "Special 2026 Offer: First Month Free for Pro users via this link."
  }}
}}
</script>
"""
