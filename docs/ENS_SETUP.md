# ENS (Ethereum Name Service) Setup Guide

This guide explains how to point your ENS domain (e.g., `pitlab.eth`) to your IPFS-hosted website.

## Prerequisites

1. **ENS Domain**: You need to own an ENS domain
2. **IPFS CID**: Your website must be deployed to IPFS
3. **Ethereum Wallet**: With ETH for gas fees
4. **Mainnet Access**: ENS is on Ethereum mainnet

## Step 1: Deploy Website to IPFS

```bash
# Build and prepare for IPFS
npm run ipfs:build

# Pin to IPFS (choose one method)
npm run ipfs:pin          # Local IPFS node
npm run ipfs:deploy       # Fleek

# Your CID will be saved to IPFS_CID.txt
```

## Step 2: Get Your IPFS CID

After deployment, you'll receive an IPFS Content Identifier (CID), e.g.:
```
Qm...xyz or bafy...abc
```

Save this CID - you'll need it for ENS configuration.

## Step 3: Configure ENS

### Option A: Using ENS Manager (Recommended)

1. Visit [app.ens.domains](https://app.ens.domains)
2. Connect your wallet (must be the domain owner)
3. Search for your domain (e.g., `pitlab.eth`)
4. Click on your domain
5. Go to the "Records" tab
6. Add/Edit "Content" record:
   - Type: `Content Hash`
   - Value: `ipfs://YOUR_CID_HERE`
   - Example: `ipfs://QmYourCidHere`
7. Click "Save"
8. Confirm the transaction in your wallet
9. Wait for transaction confirmation

### Option B: Using Ethers.js Script

```javascript
const { ethers } = require('ethers');

async function updateENS() {
  // Your ENS domain and IPFS CID
  const domain = 'pitlab.eth';
  const ipfsCID = 'YOUR_CID_HERE';
  
  // Connect to Ethereum
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  
  // ENS Registry and Resolver
  const ensRegistry = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';
  const resolver = await provider.getResolver(domain);
  
  // Set content hash
  const contentHash = `ipfs://${ipfsCID}`;
  const tx = await resolver.setContenthash(contentHash);
  
  console.log('Transaction sent:', tx.hash);
  await tx.wait();
  console.log('ENS updated!');
}
```

### Option C: Using Web3 Tools

Tools like [MyCrypto](https://mycrypto.com) or [MEW](https://myetherwallet.com) can also update ENS records.

## Step 4: Verify Configuration

### Check ENS Resolution

Visit your domain through an ENS gateway:
- https://pitlab.eth.limo
- https://pitlab.eth.link (deprecated but still works)
- Use Brave browser: just type `pitlab.eth` in address bar

### Verify with CLI

```bash
# Using ethers
npx ethers-ens resolve pitlab.eth

# Check content hash
npx ethers-ens contenthash pitlab.eth
```

## Step 5: Set Up Additional Records (Optional)

You can add more DNS-like records:

### A Records (For traditional DNS)
```
Type: A
Value: Your server IP (if you have one)
```

### Text Records
```
Type: TXT
Key: description
Value: Sweat-secured. ARM-powered. Built in the PIT.
```

### Social Links
```
Type: TXT
Key: url
Value: https://pitlab.eth

Type: TXT  
Key: com.github
Value: Octavepi

Type: TXT
Key: com.twitter
Value: pitlab_official
```

### Crypto Addresses
Add cryptocurrency addresses for donations:
```
Type: Address
Coin: ETH
Value: 0x...

Type: Address
Coin: BTC
Value: bc1...
```

## Updating Your Site

When you update your website:

1. Build new version: `npm run ipfs:build`
2. Deploy to IPFS: `npm run ipfs:deploy`
3. Get new CID from deployment
4. Update ENS contenthash with new CID
5. Wait ~5-10 minutes for propagation

## Important Notes

### Gas Costs
- Updating ENS records requires gas fees
- Costs vary with Ethereum network congestion
- Typically 0.001-0.01 ETH per update

### Caching
- ENS records are cached by gateways
- Changes may take 5-10 minutes to propagate
- Some gateways cache longer (up to 1 hour)

### IPFS Pinning
- Your content must remain pinned on IPFS
- Use multiple pinning services for redundancy:
  - Fleek
  - Pinata
  - Web3.Storage
  - Infura
  - Your own IPFS node

### Subdomains
You can create subdomains:
```
app.pitlab.eth -> Different IPFS content
docs.pitlab.eth -> Documentation site
test.pitlab.eth -> Testing environment
```

## Alternatives to ENS

If ENS is too expensive or complex:

1. **Traditional Domain + IPFS**
   - Buy pitlab.com
   - Use DNSLink to point to IPFS
   - Cheaper, but more centralized

2. **HNS (Handshake)**
   - Decentralized alternative to DNS
   - pitlab/ domain
   - Lower costs

3. **Unstoppable Domains**
   - pitlab.crypto or pitlab.blockchain
   - One-time fee, no renewals
   - Different ecosystem

## Troubleshooting

### Site Not Loading
- Verify CID is correct
- Check ENS contenthash matches CID
- Ensure content is pinned
- Try different gateways
- Clear browser cache

### Transaction Failed
- Insufficient gas
- Not domain owner
- Resolver not set correctly

### Old Content Showing
- Gateway caching (wait 10 mins)
- Browser cache (clear it)
- Wrong CID in ENS (verify)

## Resources

- [ENS Documentation](https://docs.ens.domains)
- [IPFS Documentation](https://docs.ipfs.tech)
- [Fleek Documentation](https://docs.fleek.co)
- [ENS Manager](https://app.ens.domains)

## Automation

For frequent updates, consider:

```bash
# Auto-deploy script
#!/bin/bash

# Build
npm run ipfs:build

# Deploy to Fleek (automatic ENS update)
npm run ipfs:deploy

# Or use custom script
node scripts/deploy-and-update-ens.js
```

---

**Questions?** Check the [FAQ](./FAQ.md) or open an issue on GitHub.
