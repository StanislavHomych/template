const fs = require('fs');
const path = require('path');

// Read site config file
const configPath = path.join(__dirname, '../src/config/site.ts');
const blogsPath = path.join(__dirname, '../src/data/blogs.ts');
const configContent = fs.readFileSync(configPath, 'utf-8');
const blogsContent = fs.readFileSync(blogsPath, 'utf-8');

// Extract domain from config
const domainMatch = configContent.match(/domain:\s*['"]([^'"]+)['"]/);
if (!domainMatch) {
  console.error('❌ Error: Domain not found in site config. Please add domain to src/config/site.ts');
  process.exit(1);
}
const domain = domainMatch[1].replace(/\/$/, ''); // Remove trailing slash

// Extract all static pages from navigation and footer
const staticPages = new Set(['/']); // Always include home page

// Extract from nav.links
const navLinksMatch = configContent.match(/nav:\s*\{[^}]*links:\s*\[([^\]]*)\]/s);
if (navLinksMatch) {
  const linksContent = navLinksMatch[1];
  const hrefMatches = linksContent.matchAll(/href:\s*['"]([^'"]+)['"]/g);
  for (const match of hrefMatches) {
    staticPages.add(match[1]);
  }
}

// Extract from footer - find all href patterns in the entire footer section
// This will catch links in product, legal, resources, etc.
const footerStart = configContent.indexOf('footer:');
if (footerStart !== -1) {
  // Find the matching closing brace for footer
  let braceCount = 0;
  let footerEnd = footerStart;
  let inFooter = false;
  
  for (let i = footerStart; i < configContent.length; i++) {
    if (configContent[i] === '{') {
      braceCount++;
      inFooter = true;
    } else if (configContent[i] === '}') {
      braceCount--;
      if (inFooter && braceCount === 0) {
        footerEnd = i + 1;
        break;
      }
    }
  }
  
  const footerContent = configContent.substring(footerStart, footerEnd);
  const footerHrefMatches = footerContent.matchAll(/href:\s*['"]([^'"]+)['"]/g);
  for (const match of footerHrefMatches) {
    staticPages.add(match[1]);
  }
}

// Check if contact page exists (common page)
if (configContent.includes('contactPage:') || configContent.includes("'/contact'") || configContent.includes('"/contact"')) {
  staticPages.add('/contact');
}

// Extract blog slugs from blogs.ts
const blogSlugs = [];
const blogSlugMatches = blogsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
for (const match of blogSlugMatches) {
  blogSlugs.push(match[1]);
}

// Build URLs array
const urls = [];

// Add static pages
staticPages.forEach(page => {
  urls.push(`${domain}${page}`);
});

// Add blog list page if not already included
if (!staticPages.has('/blog')) {
  urls.push(`${domain}/blog`);
}

// Add individual blog posts
blogSlugs.forEach(slug => {
  urls.push(`${domain}/blog/${slug}`);
});

// Sort URLs for consistent output
urls.sort();

// Generate XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

`;

urls.forEach(url => {
  xml += `  <url>
    <loc>${url}</loc>
  </url>

`;
});

xml += `</urlset>
`;

// Write sitemap.xml to public directory
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`✅ sitemap.xml generated successfully at ${sitemapPath}`);
console.log(`   Domain: ${domain}`);
console.log(`   Total URLs: ${urls.length}`);
console.log(`   - Static pages: ${staticPages.size}`);
console.log(`   - Blog posts: ${blogSlugs.length}`);

