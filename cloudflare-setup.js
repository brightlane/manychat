// cloudflare-setup.js - Auto-generates Cloudflare config
const fs = require('fs');

const config = {
  name: "Million Page Factory",
  type: "github",
  repo: "brightlane/million-page-factory",
  build_command: "echo 'Static HTML ready'",
  build_output: "million-pages",
  root_directory: "/",
  environment: {
    variables: {
      CTA_URL: "https://manychat.partnerlinks.io/nwkkk7vkps17"
    }
  }
};

fs.writeFileSync('cloudflare.json', JSON.stringify(config, null, 2));
console.log("✅ Cloudflare config ready - Import cloudflare.json");
