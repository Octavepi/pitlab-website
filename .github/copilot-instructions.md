# GitHub Copilot Instructions for PITLAB Website Repository

## Project Overview
This repository (`pitlab-website`) is part of the **PITLAB Ecosystem** - a unified project combining meme culture with open hardware development.

### The PITLAB Ecosystem consists of three repositories:

1. **pitlab-meme** - Token smart contracts and deployment
   - ERC-20 token ($PITLAB / ARMPIT) on Base chain
   - Smart contract deployment scripts
   - Token-related documentation
   
2. **pitlab-wallet** - Hardware wallet implementation
   - Raspberry Pi-based Trezor-compatible hardware wallet
   - Buildroot-based embedded Linux system
   - Open-source hardware security platform
   
3. **pitlab-website** (THIS REPO) - Project website and documentation
   - Official PITLAB website (IPFS-hosted)
   - Whitepaper and technical documentation
   - Community resources and branding assets

## Mission Statement
ARMPIT ($PITLAB) is an experimental meme-utility token supporting open hardware, DIY security, and grassroots developers building the Pi Trezor initiative. The meme is the movement — sweaty, honest, raw effort in the open.

## Repository Purpose

This repository serves as:
1. **Public Documentation Hub** - Whitepaper, guides, and technical docs
2. **Marketing & Branding** - Logo assets, memes, visual identity
3. **Website Source** - Static site hosted on IPFS/GitHub Pages
4. **Community Resources** - Contribution guides, roadmaps, FAQs

## Technical Context

### Website Stack
- **Framework:** Static HTML/CSS/JS or Next.js/Vite for static export
- **Styling:** TailwindCSS for modern, responsive design
- **Hosting:** IPFS + GitHub Pages (decentralized + accessible)
- **Domain:** Web3 domain (.x) or traditional (.com) pointing to IPFS
- **CDN:** Fleek or similar for IPFS pinning

### Documentation
- **Format:** Markdown for all documentation
- **Conversion:** markdown-to-html for web display
- **Whitepaper:** Central authoritative document
- **Guides:** Technical and user-friendly tutorials

## Content Structure

### Primary Sections

1. **Home** - Hero, tagline, quick overview
2. **About** - Mission, the meme, the movement
3. **Token** - Tokenomics, how to buy, contract info
4. **Hardware** - Pi Trezor project, build guides
5. **Docs** - Whitepaper, technical documentation
6. **Community** - GitHub, socials, contribution guides
7. **Roadmap** - Phases, milestones, progress

### Key Documents

- **WHITEPAPER.md** - Complete project vision
- **TOKENOMICS.md** - Detailed token information
- **HARDWARE_GUIDE.md** - Pi Trezor build instructions
- **FAQ.md** - Common questions and answers
- **ROADMAP.md** - Project timeline and goals

## Brand Guidelines

### Visual Identity

- **Primary Colors:**
  - PIT Yellow: #FFD700 (gold, sweat, effort)
  - ARM Blue: #0066CC (tech, trust, Base chain)
  - Dark Background: #0A0A0A (sleek, professional)

- **Typography:**
  - Headers: Bold, sans-serif, modern
  - Body: Readable, clean, accessible
  - Code: Monospace for technical content

- **Tone:**
  - Self-aware humor (it's a meme, we know it)
  - Technically competent (we build real things)
  - Community-focused (we're all in this together)
  - Transparent (open about everything)

### Logo Usage

- Official logos in `/assets/logo_pack_v1/`
- Multiple formats: SVG, PNG, variants
- Usage guidelines in logo README
- Community can create derivatives (MIT license)

## Development Guidelines

### When Building Website

- **Mobile-First:** Design for mobile, scale up
- **Performance:** Optimize images, minimize bundle size
- **Accessibility:** WCAG 2.1 AA compliance
- **SEO:** Meta tags, sitemap, semantic HTML
- **IPFS-Friendly:** All assets bundled, no external CDNs

### Content Writing

- **Clear & Concise:** No marketing fluff
- **Honest:** This is experimental, say so
- **Technical:** Back claims with facts
- **Meme-Aware:** Embrace the humor
- **Legal:** Include appropriate disclaimers

### Code Style

```javascript
// Use modern ES6+
import React from 'react';

// Component example
const Hero = () => (
  <section className="hero">
    <h1>ARMPIT ($PITLAB)</h1>
    <p>Sweat-secured. ARM-powered. Built in the PIT.</p>
  </section>
);
```

## Cross-Repository Integration

### Linking to Other Repos

- **Token Info:** Link to pitlab-meme for contract details
- **Hardware Guides:** Link to pitlab-wallet for build instructions
- **GitHub Badges:** Show build status, contributors, etc.

### Unified Messaging

All repos should present a consistent narrative:
- The PITLAB ecosystem is three interconnected projects
- Token supports hardware development
- Hardware provides real utility
- Website documents and promotes both

## Documentation Standards

### Markdown Best Practices

```markdown
# Main Heading

## Section Heading

### Subsection

- Use bullet points for lists
- Include code blocks with syntax highlighting
- Add images with alt text
- Link to related documents

```solidity
// Example code with syntax highlighting
contract PITLAB is ERC20 {
  // ...
}
```

![Logo](../assets/logo.png)

[Related Doc](./related.md)
```

### File Organization

```
docs/
├── WHITEPAPER.md          # Main project document
├── TOKENOMICS.md          # Token details
├── HARDWARE_GUIDE.md      # Build instructions
├── FAQ.md                 # Common questions
├── ROADMAP.md             # Project timeline
├── CONTRIBUTING.md        # How to contribute
└── guides/                # Detailed tutorials
    ├── buying-pitlab.md
    ├── building-wallet.md
    └── deploying-contract.md
```

## IPFS Deployment

### Static Site Generation

```bash
# Build static site
npm run build

# Output to /dist or /out
# All assets must be relative paths

# Deploy to IPFS via Fleek or ipfs-deploy
npm run deploy:ipfs
```

### IPFS Best Practices

- Use relative paths for all assets
- Bundle all dependencies
- Optimize images and assets
- Include IPFS-friendly 404.html
- Test locally with IPFS gateway

## Community Engagement

### Content Ideas

- **Memes:** Encourage community meme creation
- **Tutorials:** Step-by-step guides for newcomers
- **Updates:** Regular progress reports
- **Spotlights:** Highlight contributors
- **Technical Deep Dives:** Detailed explanations

### Social Media Integration

- Link to GitHub repos
- Embed Twitter/X feeds
- Discord/Telegram widgets
- Community gallery

## Legal & Compliance

### Required Disclaimers

Every page should include or link to:
- "This is experimental software"
- "Not financial advice"
- "DYOR - Do Your Own Research"
- "No guarantees of value or profit"

### Content Requirements

- Clear, honest communication
- No false promises
- No financial advice
- Open source licensing
- Privacy-respecting (no tracking)

## Roadmap Integration

Website should reflect current phase:
- **Phase 0:** Fair Launch & LP Burn
- **Phase 1:** Build Awareness + Meme Growth (Current focus)
- **Phase 2:** Hardware Integration
- **Phase 3:** Community Grants & Governance
- **Phase 4:** Web3 Domain, IPFS Site completion

## Performance Targets

- **Load Time:** < 3 seconds on 3G
- **Bundle Size:** < 500KB initial
- **Lighthouse Score:** > 90 all categories
- **Mobile-Friendly:** 100% responsive
- **Accessibility:** WCAG 2.1 AA

## Security Considerations

- No user authentication (static site)
- No data collection without consent
- Verify all external links
- Use HTTPS for non-IPFS domains
- Include security.txt file

## Version Control

- Main branch = production (live site)
- Dev branch = staging/preview
- Feature branches for new content
- Tag releases with version numbers

---

*Sweat together. Build together. The PIT never sleeps.*
