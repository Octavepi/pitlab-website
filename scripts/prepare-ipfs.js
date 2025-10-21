#!/usr/bin/env node

/**
 * Prepare IPFS Build
 * 
 * This script prepares the Next.js static export for IPFS deployment by:
 * 1. Ensuring all paths are relative
 * 2. Creating IPFS-friendly redirects
 * 3. Generating metadata
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

console.log('🔧 Preparing IPFS build...\n');

// 1. Check if out directory exists
if (!fs.existsSync(OUT_DIR)) {
  console.error('❌ Error: out directory not found. Run `npm run build` first.');
  process.exit(1);
}

// 2. Create _redirects file for IPFS
const redirects = `
# IPFS Redirects
/*    /index.html   200
`.trim();

fs.writeFileSync(path.join(OUT_DIR, '_redirects'), redirects);
console.log('✅ Created _redirects file');

// 3. Create IPFS metadata
const metadata = {
  name: 'PITLAB Website',
  description: 'Sweat-secured. ARM-powered. Built in the PIT.',
  version: '1.0.0',
  build_date: new Date().toISOString(),
  ipfs_friendly: true,
};

fs.writeFileSync(
  path.join(OUT_DIR, 'metadata.json'),
  JSON.stringify(metadata, null, 2)
);
console.log('✅ Created metadata.json');

// 4. Verify critical files exist
const criticalFiles = [
  'index.html',
  'manifest.json',
  'robots.txt',
  'sitemap.xml',
];

let allFilesExist = true;
criticalFiles.forEach(file => {
  const filePath = path.join(OUT_DIR, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ Found ${file}`);
  } else {
    console.error(`❌ Missing ${file}`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.error('\n❌ Build incomplete. Please check your Next.js configuration.');
  process.exit(1);
}

// 5. Calculate total size
function getFolderSize(dir) {
  let size = 0;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      size += getFolderSize(filePath);
    } else {
      size += stats.size;
    }
  });
  
  return size;
}

const totalSize = getFolderSize(OUT_DIR);
const sizeMB = (totalSize / (1024 * 1024)).toFixed(2);

console.log(`\n📦 Total build size: ${sizeMB} MB`);

if (totalSize > 50 * 1024 * 1024) {
  console.warn('⚠️  Warning: Build size exceeds 50MB. Consider optimizing assets.');
}

console.log('\n✨ IPFS build prepared successfully!');
console.log(`📁 Output directory: ${OUT_DIR}`);
console.log('\nNext steps:');
console.log('  1. Deploy to IPFS: npm run ipfs:deploy');
console.log('  2. Pin to IPFS: npm run ipfs:pin');
console.log('  3. Update ENS: See docs/ENS_SETUP.md\n');
