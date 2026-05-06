rom pathlib import Path

script = Path('output/manychat-15k-factory-clean.js').read_text(encoding='utf-8')
script = script.replace('    <a class="cta" href="${AFFILIATE_URL}" rel="nofollow sponsored">Start with ManyChat</a>', '    <a class="cta" href="${AFFILIATE_URL}" rel="nofollow sponsored">Start with ManyChat</a>\n    <button class="copy-btn" type="button" data-copy="${AFFILIATE_URL}">Copy affiliate link</button>')
script = script.replace('    .cta{display:inline-block;padding:14px 20px;background:#2b6cb0;color:#fff;text-decoration:none;border-radius:10px;font-weight:700}', '    .cta,.copy-btn{display:inline-block;padding:14px 20px;background:#2b6cb0;color:#fff;text-decoration:none;border-radius:10px;font-weight:700;border:none;cursor:pointer}\n    .copy-btn{margin-left:12px;background:#111827}')
script = script.replace('</body>\n</html>`;', '''<script>
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = 'Copy affiliate link', 1200);
    } catch {
      btn.textContent = 'Copy failed';
      setTimeout(() => btn.textContent = 'Copy affiliate link', 1200);
    }
  });
</script>\n</body>\n</html>`;''')

Path('output/manychat-15k-factory-clean.js').write_text(script, encoding='utf-8')
