const fs = require('fs');
const path = require('path');

// Try to require sharp and to-ico, show helpful error if not installed
let sharp, toIco;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Error: sharp package is not installed.');
  console.error('   Please run: npm install --save-dev sharp');
  process.exit(1);
}

try {
  toIco = require('to-ico');
} catch (error) {
  console.error('❌ Error: to-ico package is not installed.');
  console.error('   Please run: npm install --save-dev to-ico');
  process.exit(1);
}

// Read site config file
const configPath = path.join(__dirname, '../src/config/site.ts');
const configContent = fs.readFileSync(configPath, 'utf-8');

// Extract logo path from config
const logoMatch = configContent.match(/image:\s*['"]([^'"]+)['"]/);
if (!logoMatch) {
  console.error('❌ Error: Logo image not found in site config.');
  process.exit(1);
}

const logoPath = logoMatch[1]; // e.g., '/images/Logo.png'
const logoFilePath = path.join(__dirname, '../public', logoPath);

// Check if logo file exists
if (!fs.existsSync(logoFilePath)) {
  console.error(`❌ Error: Logo file not found at ${logoFilePath}`);
  process.exit(1);
}

// Output path for favicon
const publicDir = path.join(__dirname, '../public');
const faviconPath = path.join(publicDir, 'favicon.ico');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate favicon.ico with multiple sizes (16x16, 32x32, 48x48)
async function generateFavicon() {
  try {
    console.log(`📸 Reading logo from: ${logoPath}`);
    
    // Read the input image
    const image = sharp(logoFilePath);
    const metadata = await image.metadata();
    
    console.log(`   Original size: ${metadata.width}x${metadata.height}`);
    
    // Create ICO file with multiple sizes
    // ICO format supports multiple resolutions in one file
    const sizes = [16, 32, 48];
    
    // Generate PNG buffers for each size
    const pngBuffers = await Promise.all(
      sizes.map(size =>
        image
          .clone()
          .resize(size, size, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
          })
          .png()
          .toBuffer()
      )
    );
    
    // Convert PNG buffers to ICO format using to-ico
    const icoBuffer = await toIco(pngBuffers);
    
    // Write ICO file
    fs.writeFileSync(faviconPath, icoBuffer);
    
    console.log(`✅ favicon.ico generated successfully at ${faviconPath}`);
    console.log(`   Sizes: ${sizes.map(s => `${s}x${s}`).join(', ')}px`);
    
  } catch (error) {
    console.error('❌ Error generating favicon:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

generateFavicon();

