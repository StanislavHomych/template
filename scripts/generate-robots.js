const fs = require('fs');
const path = require('path');

// Import site config
// Since we're in a Node.js script, we need to read the TypeScript file differently
// We'll use a simple approach: read and parse the config file
const configPath = path.join(__dirname, '../src/config/site.ts');
const configContent = fs.readFileSync(configPath, 'utf-8');

// Extract domain from config file
// Look for domain: '...' pattern
const domainMatch = configContent.match(/domain:\s*['"]([^'"]+)['"]/);
if (!domainMatch) {
  console.error('❌ Error: Domain not found in site config. Please add domain to src/config/site.ts');
  process.exit(1);
}

const domain = domainMatch[1];

// Generate robots.txt content
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

// Write robots.txt to public directory
const publicDir = path.join(__dirname, '../public');
const robotsPath = path.join(publicDir, 'robots.txt');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(robotsPath, robotsContent, 'utf-8');
console.log(`✅ robots.txt generated successfully at ${robotsPath}`);
console.log(`   Domain: ${domain}`);
console.log(`   Sitemap: ${domain}/sitemap.xml`);



