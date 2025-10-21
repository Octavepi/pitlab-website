# PitLab Website: Official Ecosystem Hub

> **Tagline:** *Sweat-secured. ARM-powered. Built in the PIT.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Framework-Next.js-black.svg)](https://nextjs.org)
[![IPFS](https://img.shields.io/badge/Deployed-IPFS-blue.svg)](https://ipfs.io)

**Official website and documentation hub for the PITLAB ecosystem of open-source developer tools.**

This Next.js-powered site serves as the central information portal for the $PITLAB token, hardware wallet project, and all ecosystem tools. Features decentralized hosting via IPFS and ENS.

## The PITLAB Ecosystem

This repository is part of the **PITLAB** ecosystem — a collection of open-source tools powered by the $PITLAB utility token:

1. **[pitlab-meme](https://github.com/Octavepi/pitlab-meme)** - Utility token ($PITLAB / ARMPIT) on Base
   - Powers premium features in pitlab-eltmm
   - 1/3 burned, 1/3 to holders, 1/3 to development
2. **[pitlab-eltmm](https://github.com/Octavepi/pitlab-eltmm)** - Ethical token launch tool ⚡ *Premium*
   - MEV-protected fair launches
   - Premium features unlocked with $PITLAB payments
3. **[pitlab-wallet](https://github.com/Octavepi/pitlab-wallet)** - Raspberry Pi hardware wallet 🎁 *Free*
   - Trezor-compatible air-gapped security
   - FREE gift to crypto community with ❤️
4. **[pitlab-website](https://github.com/Octavepi/pitlab-website)** (THIS REPO) - Official ecosystem hub 🎁 *Free*
   - Documentation and whitepapers
   - Web3 interface for PITLAB tools

**This site is completely FREE** — no paywalls, no subscriptions. The only charges in the PITLAB ecosystem come from premium pitlab-eltmm features, which fund development of these free resources and reward $PITLAB holders.

## 🌐 Live Site

- **Production**: [pitlab.eth](https://pitlab.eth.limo) (ENS)
- **IPFS Gateway**: `https://ipfs.io/ipfs/[CID]`
- **GitHub**: https://github.com/Octavepi/pitlab-website

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run serve

# Deploy to IPFS
npm run ipfs:deploy
```

## 📁 Project Structure

```
pitlab-website/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Main landing page
│   │   └── globals.css   # Global styles
│   └── components/       # React components
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Tokenomics.tsx
│       ├── Hardware.tsx
│       ├── Roadmap.tsx
│       ├── Community.tsx
│       └── Footer.tsx
├── public/               # Static assets
│   ├── icons/           # PWA icons
│   ├── manifest.json    # PWA manifest
│   ├── robots.txt       # SEO robots
│   ├── sitemap.xml      # SEO sitemap
│   └── .well-known/     # Security & standards
├── scripts/             # Build & deployment scripts
│   ├── prepare-ipfs.js  # IPFS build preparation
│   └── pin-to-ipfs.js   # IPFS pinning
├── docs/                # Documentation
│   ├── WHITEPAPER.md       # Main project document
│   ├── WHITEPAPER.txt      # Text version
│   └── guides/             # Detailed tutorials (coming soon)
├── assets/                  # Branding and media
│   ├── logo_pack_v1/       # Official logos
│   ├── images/             # Website images (coming soon)
│   └── memes/              # Community memes (coming soon)
└── src/                     # Website source code (coming soon)
```

## Documentation

### Whitepaper

The complete PITLAB whitepaper is available in `/docs`:
- **[WHITEPAPER.md](./docs/WHITEPAPER.md)** - Markdown format
- **[WHITEPAPER.txt](./docs/WHITEPAPER.txt)** - Plain text format

### Key Points

- **Token:** $PITLAB (ARMPIT) on Base chain
- **Supply:** 1,000,000,000 fixed
- **Distribution:** 100% fair launch
- **Purpose:** Support PitLab Wallet open hardware development
- **Governance:** Community-led

## Project Mission

ARMPIT ($PITLAB) exists to support:
- **Open Hardware** - DIY security devices like PitLab Wallet
- **Grassroots Development** - Independent builder movement
- **Transparent Finance** - Fair launch, no VCs, community-led
- **Meme Culture** - Self-aware humor meets serious building

### The Tagline Explained

- **Sweat-secured** - Built through hard work and community effort
- **ARM-powered** - Raspberry Pi ARM architecture foundation
- **Built in the PIT** - The PITLAB Laboratory

## Branding Assets

Official logos and branding materials are in `/assets/logo_pack_v1/`:

- SVG and PNG formats
- Multiple color variants
- Usage guidelines included
- MIT licensed - create derivatives!

## Roadmap

- **Phase 0:** Fair Launch & LP Burn
- **Phase 1:** Build Awareness + Meme Growth (Current)
  - Launch website on IPFS
  - Create comprehensive documentation
  - Build community presence
- **Phase 2:** Hardware Integration
  - PitLab Wallet + Base testing
  - Integration guides and tutorials
- **Phase 3:** Community Grants & Governance
  - Grant program for contributors
  - Governance activation
- **Phase 4:** Web3 Domain & Public Registry
  - Decentralized domain (.x)
  - Full IPFS infrastructure

## Related Repositories

- **Token:** [pitlab-meme](https://github.com/Octavepi/pitlab-meme) - Smart contracts
- **Hardware:** [pitlab-wallet](https://github.com/Octavepi/pitlab-wallet) - PitLab Wallet (air-gapped Trezor wallet build for Raspberry Pi)

## Contributing

We welcome contributions! Help improve documentation, create content, or suggest improvements.

## Legal Disclaimer

This project is a **meme experiment**, not an investment. The token has no intrinsic monetary value, and no promises of profit are made. All content is provided for informational and educational purposes only.

**Not financial advice. DYOR.**

## License

MIT © 2025 PITLAB Contributors

---

*Sweat together. Build together. The PIT never sleeps.* 🏋️‍♂️💪

