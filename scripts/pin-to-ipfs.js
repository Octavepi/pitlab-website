#!/usr/bin/env node

/**
 * Pin to IPFS
 * 
 * This script pins the built website to IPFS using various pinning services.
 * Configure your pinning service API keys in .env
 */

const { create } = require('ipfs-http-client');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

async function pinToIPFS() {
  console.log('📌 Pinning to IPFS...\n');

  // Check if out directory exists
  if (!fs.existsSync(OUT_DIR)) {
    console.error('❌ Error: out directory not found. Run `npm run ipfs:build` first.');
    process.exit(1);
  }

  try {
    // Option 1: Local IPFS node
    console.log('Attempting to connect to local IPFS node...');
    const ipfs = create({ url: 'http://127.0.0.1:5001' });

    // Test connection
    const version = await ipfs.version();
    console.log(`✅ Connected to IPFS node v${version.version}`);

    // Add directory to IPFS
    console.log('\nAdding files to IPFS...');
    const rootCid = await addDirectory(ipfs, OUT_DIR);

    console.log(`\n✅ Successfully pinned to IPFS!`);
    console.log(`\n📍 IPFS CID: ${rootCid}`);
    console.log(`\n🌐 Access your site at:`);
    console.log(`   https://ipfs.io/ipfs/${rootCid}`);
    console.log(`   https://gateway.pinata.cloud/ipfs/${rootCid}`);
    console.log(`   https://cloudflare-ipfs.com/ipfs/${rootCid}`);
    console.log(`\n💡 To update ENS, use CID: ${rootCid}`);

    // Save CID to file
    fs.writeFileSync(
      path.join(__dirname, '..', 'IPFS_CID.txt'),
      rootCid
    );
    console.log(`\n💾 CID saved to IPFS_CID.txt`);

  } catch (error) {
    console.error('\n❌ Error pinning to IPFS:');
    
    if (error.message.includes('ECONNREFUSED')) {
      console.error('\n🔴 Could not connect to local IPFS node.');
      console.error('\nOptions:');
      console.error('  1. Start local IPFS: ipfs daemon');
      console.error('  2. Use Fleek: npm run ipfs:deploy');
      console.error('  3. Use Pinata: Upload out/ folder to https://pinata.cloud');
      console.error('  4. Use Web3.Storage: Upload to https://web3.storage\n');
    } else {
      console.error(error.message);
    }
    
    process.exit(1);
  }
}

async function addDirectory(ipfs, dirPath) {
  const files = [];

  function readDir(currentPath, basePath = '') {
    const items = fs.readdirSync(currentPath);

    items.forEach(item => {
      const itemPath = path.join(currentPath, item);
      const relativePath = path.join(basePath, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        readDir(itemPath, relativePath);
      } else {
        files.push({
          path: relativePath,
          content: fs.readFileSync(itemPath)
        });
      }
    });
  }

  readDir(dirPath);

  console.log(`Found ${files.length} files to add...`);

  let rootCid;
  for await (const result of ipfs.addAll(files, { wrapWithDirectory: true })) {
    if (result.path === '') {
      rootCid = result.cid.toString();
    }
    process.stdout.write('.');
  }

  console.log('');
  return rootCid;
}

// Run the script
pinToIPFS().catch(console.error);
