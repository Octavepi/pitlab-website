# ARMPIT ($PITLAB)

> **Tagline:** *Sweat-secured. ARM-powered. Built in the PIT.*

---

## Table of Contents
1. [Introduction](#introduction)
2. [Purpose & Mission](#purpose--mission)
3. [The Meme & The Machine](#the-meme--the-machine)
4. [Tokenomics](#tokenomics)
5. [Launch Model (Pure Fair-Launch)](#launch-model-pure-fair-launch)
6. [Governance (Community-Led PITLAB)](#governance-community-led-pitlab)
7. [Roadmap & Ecosystem Vision](#roadmap--ecosystem-vision)
8. [Security & Storage (Base + Trezor)](#security--storage-base--trezor)
9. [Technical Overview](#technical-overview)
10. [Contribution & Support Model](#contribution--support-model)
11. [Legal & Disclaimer](#legal--disclaimer)
12. [Contact / Links / Future](#contact--links--future)

---

## Introduction
ARMPIT ($PITLAB) is an experimental meme-utility token built on the **Base chain**. Its mission: to support open hardware, DIY security, and the grassroots developer movement building the PitLab Wallet project.

---

## Purpose & Mission
The ARMPIT token exists to reward and support independent developers working to create open, secure, ARM-based crypto hardware. The meme is the movement — sweaty, honest, raw effort in the open.

---

## The Meme & The Machine
The "ARMPIT" name riffs on **ARM architecture + Pi hardware**, wrapped in the humor of self-reliance. It's a joke that became a build — a sweatcoin for open devs.

---

## Tokenomics
- **Chain:** Base (EVM-compatible)
- **Standard:** ERC-20
- **Ticker:** PITLAB
- **Decimals:** 18
- **Supply:** 1,000,000,000 fixed
- **Distribution:** 100% Fair Launch — no presale, no team allocation, no VCs.
- **Contract:** Verified and open-source.
- **Liquidity:** LP burned on launch.

### Token Utility
$PITLAB serves as the utility token for the entire PITLAB ecosystem:

**Free Services:**
- **pitlab-wallet**: PitLab Wallet — air-gapped (simulated hardware) Trezor wallet build for Raspberry Pi; completely free, no charges.
- **pitlab-website**: Documentation, guides, and community resources — free forever.

**Premium Features (pitlab-eltmm):**
- **MEV Bundler**: Anti-sniper launch protection
- **Market Maker**: Automated liquidity provision with custom strategies
- **Advanced Analytics**: Market signals and trading insights
- **Custom Strategies**: Tailored algorithmic trading
- **API Access**: Enhanced rate limits for developers
- **Priority Support**: Direct technical assistance

**Payment Flow:**
When users purchase premium features with $PITLAB:
- **33% Burned** — Deflationary mechanism
- **33% to Holder Rewards Pool** — Rewards long-term holders
- **33% to Dev Wallet** — Funds continued development

This 3-way split ensures sustained ecosystem growth, rewards community loyalty, and reduces supply over time.

---

## Launch Model (Pure Fair-Launch)
ARMPIT will deploy using a **zero-tax, no-treasury** Base ERC-20 contract. LP tokens are burned post-launch to ensure full decentralization. The deployer walks away; the PIT stays alive through the community.

### First Utility Launch
The **pitlab-eltmm** premium features will debut simultaneously with the $PITLAB token launch, providing immediate utility:
- Token holders can access premium trading tools from day one
- PaymentRouter contract will be deployed and verified on Base
- Frontend marketplace will be live at launch
- Full on-chain verification ensures trustless access control

---

## Governance (Community-Led PITLAB)
Governance may emerge once a real contributor base forms. Until then, $PITLAB is governed by code and meme. Future proposals may include:
- Snapshot-based community voting.
- GitHub-linked grants.
- Open multisig for development funds.

---

## Roadmap & Ecosystem Vision
**Phase 0:** Fair Launch & LP Burn  
**Phase 1:** Build Awareness + Meme Growth  
**Phase 2:** Hardware Integration (PitLab Wallet + Base testing)  
**Phase 3:** Community Grants & Governance Activation  
**Phase 4:** Web3 Domain, IPFS Site, and Public Registry

---

## Security & Storage (Base + Trezor)
$PITLAB uses the ERC-20 standard, making it **Trezor-compatible** on Base (via MetaMask or hardware bridge).  
Solana-style SPL tokens are intentionally avoided to ensure hardware wallet support.

---

## Technical Overview

### Smart Contracts
- **PITLAB Token:** OpenZeppelin ERC-20 with burn functionality
- **PaymentRouter:** Feature access management with 3-way split
- **Deployment:** Hardhat-verified on BaseScan
- **Security:** Pausable, ReentrancyGuard, input validation
- **Network:** Base Sepolia (testnet) and Base Mainnet

### Backend (pitlab-eltmm)
- **Language:** Python 3.11+
- **Web3:** web3.py for on-chain verification
- **Features:** MEV bundling, market making, analytics
- **Caching:** TTL-based access verification (60s cache, 5min stale fallback)
- **Gating:** Decorator-based feature access control

### Frontend (pitlab-website)
- **Framework:** Next.js 14 + React 18
- **Web3:** Ethers.js v6 for wallet integration
- **Wallet Support:** MetaMask, WalletConnect, hardware wallets
- **Security:** CSP headers, exact token approvals, gas estimation
- **Hosting:** GitHub Pages + IPFS mirror (static site)

### Infrastructure
- **RPC:** Base Sepolia/Mainnet via Alchemy/Infura
- **Explorer:** BaseScan for contract verification
- **Dev Tools:** Hardhat, TypeScript, TailwindCSS, Markdown Docs
- **CI/CD:** GitHub Actions for automated testing and deployment

---

## Contribution & Support Model
ARMPIT encourages open collaboration — every holder is a backer. Contributions may include:
- GitHub pull requests (hardware/software)
- Meme creation or community moderation
- Technical documentation
- Donations to verified build addresses

---

## Legal & Disclaimer
This project is a **meme experiment**, not an investment. $PITLAB has no intrinsic monetary value, and no promises of profit are made. All code is open-source and use-at-your-own-risk.

---

## Contact / Links / Future
- **Website:** TBD (likely `pitlab.x` or `armpitcoin.x` hosted via IPFS)
- **GitHub:** [coming soon]
- **Docs:** `/docs/WHITEPAPER.md`
- **License:** MIT (open contribution model)

---
*Sweat together. Build together. The PIT never sleeps.*
