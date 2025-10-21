# Deployment Guide

Complete guide for deploying the PITLAB website to IPFS and configuring ENS.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build

# 3. Test locally
npm run serve

# 4. Prepare for IPFS
npm run ipfs:build

# 5. Deploy (choose one method below)
```

## Deployment Methods

### Method 1: Fleek (Recommended)

Fleek provides automatic IPFS deployment with CDN and ENS integration.

```bash
# Install Fleek CLI
npm install -g @fleek-platform/cli

# Login to Fleek
fleek login

# Initialize project
fleek site:init

# Deploy
npm run ipfs:deploy

# Your site is now live!
# Fleek provides: IPFS URL, CDN URL, and can automatically update ENS
```

**Benefits:**
- Automatic CI/CD
- Global CDN
- Automatic ENS updates
- Free tier available
- Preview deployments

### Method 2: Local IPFS Node

Use your own IPFS node for maximum decentralization.

```bash
# Install IPFS
# https://docs.ipfs.tech/install/

# Start IPFS daemon
ipfs daemon

# Deploy
npm run ipfs:pin

# Your CID will be saved to IPFS_CID.txt
```

**Benefits:**
- Full control
- No third-party dependencies
- True decentralization

**Drawbacks:**
- Must keep node running
- Need to manage pinning
- Slower initial load times

### Method 3: Pinata

Web-based IPFS pinning service.

```bash
# 1. Build site
npm run build

# 2. Visit https://pinata.cloud
# 3. Sign up for account
# 4. Upload the 'out' folder
# 5. Copy the CID
# 6. Update ENS with CID
```

**Benefits:**
- Simple web interface
- Reliable pinning
- Good for beginners

### Method 4: Web3.Storage

Free IPFS storage from Protocol Labs.

```bash
# 1. Sign up at https://web3.storage
# 2. Get API token
# 3. Install w3 CLI
npm install -g @web3-storage/w3cli

# 4. Login
w3 login your-email@example.com

# 5. Upload
w3 put out/

# 6. Copy CID and update ENS
```

**Benefits:**
- Free
- Backed by Protocol Labs
- Generous storage limits

## Environment Variables

Create a `.env.local` file:

```bash
# Site Configuration
SITE_URL=https://pitlab.eth
SITE_NAME=PITLAB

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Fleek (if using Fleek)
FLEEK_API_KEY=your_api_key_here

# Web3.Storage (if using Web3.Storage)
WEB3_STORAGE_TOKEN=your_token_here

# ENS Configuration
ENS_DOMAIN=pitlab.eth
ENS_PRIVATE_KEY=your_private_key_here  # For automated ENS updates
```

## Testing Before Deployment

### 1. Local Testing

```bash
# Development mode
npm run dev

# Production build test
npm run build
npm run serve

# Open http://localhost:3000
```

### 2. Lighthouse Audit

```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --view
```

Target scores:
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

### 3. IPFS Gateway Test

After deploying, test through multiple gateways:

```
https://ipfs.io/ipfs/YOUR_CID
https://cloudflare-ipfs.com/ipfs/YOUR_CID
https://gateway.pinata.cloud/ipfs/YOUR_CID
https://dweb.link/ipfs/YOUR_CID
```

## ENS Configuration

See [ENS_SETUP.md](./ENS_SETUP.md) for detailed instructions.

Quick version:

```bash
# 1. Deploy to IPFS (get CID)
npm run ipfs:deploy

# 2. Visit https://app.ens.domains
# 3. Connect wallet
# 4. Select your domain (pitlab.eth)
# 5. Records → Content → ipfs://YOUR_CID
# 6. Save and confirm transaction
```

## Continuous Deployment

### GitHub Actions (Fleek)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to IPFS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Fleek
        env:
          FLEEK_API_KEY: ${{ secrets.FLEEK_API_KEY }}
        run: npm run ipfs:deploy
```

### Manual Deployment Checklist

- [ ] Update content
- [ ] Test locally
- [ ] Run Lighthouse audit
- [ ] Build for production
- [ ] Deploy to IPFS
- [ ] Verify deployment
- [ ] Update ENS (if needed)
- [ ] Test live site
- [ ] Announce update

## Rollback Procedure

If something goes wrong:

```bash
# 1. Get previous CID from git history
git log --all --grep="CID" IPFS_CID.txt

# 2. Update ENS to previous CID
# Use ENS Manager or script

# 3. Wait for propagation (5-10 mins)
```

## Performance Optimization

### Before Deployment

```bash
# Optimize images
npm install -g sharp-cli
sharp -i public/images/*.png -o public/images/optimized/

# Analyze bundle
ANALYZE=true npm run build

# Check bundle size
ls -lh out/
```

### IPFS Optimization

- Use smaller images (WebP format)
- Minimize JavaScript bundles
- Enable compression
- Use lazy loading
- Optimize fonts

Target total size: <10MB

## Monitoring

### Check Site Status

```bash
# Check IPFS pinning status
ipfs pin ls | grep YOUR_CID

# Check ENS resolution
npx ethers-ens resolve pitlab.eth
```

### Analytics (Optional)

Add to `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=pitlab.eth
```

## Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules
npm install

# Try again
npm run build
```

### IPFS Deploy Fails

```bash
# Check IPFS daemon
ipfs swarm peers

# Restart daemon
ipfs daemon &

# Try different gateway
IPFS_GATEWAY=https://cloudflare-ipfs.com npm run ipfs:pin
```

### ENS Not Updating

- Wait 10 minutes for propagation
- Clear browser cache
- Try different ENS gateway
- Verify transaction on Etherscan
- Check contenthash format

## Security Checklist

- [ ] No API keys in code
- [ ] Environment variables secured
- [ ] Content Security Policy set
- [ ] HTTPS enforced
- [ ] XSS protection enabled
- [ ] No sensitive data exposed
- [ ] Dependencies updated
- [ ] Security headers configured

## Support

- GitHub Issues: https://github.com/Octavepi/pitlab-website/issues
- Documentation: [README.md](../README.md)
- ENS Guide: [ENS_SETUP.md](./ENS_SETUP.md)

---

*Sweat together. Build together. The PIT never sleeps.* 🏋️‍♂️💪
