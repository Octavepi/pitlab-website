# PITLAB Ecosystem - Complete Infrastructure Summary

## Overview

This document summarizes the complete payment infrastructure for the PITLAB ecosystem, including smart contracts, frontend, CLI backend, and deployment procedures.

## Repository Structure

```
Octavepi/
├── pitlab-eltmm/          # Premium CLI tool (Python)
├── pitlab-meme/           # Smart contracts (Solidity)
├── pitlab-wallet/         # Hardware wallet (Buildroot)
├── pitlab-website/        # Frontend & docs (Next.js)
└── QUICK_START.md         # User onboarding guide
```

## Components

### 1. Smart Contracts (pitlab-meme)

**Files:**
- `contracts/PITLAB.sol` - ERC-20 token with burn function
- `contracts/PaymentRouter.sol` - Payment processing with 3-way split
- `scripts/deploy-payment-router.ts` - Deployment automation

**Features:**
- 3-way payment split (burn/holders/dev)
- Feature-based access control
- On-chain verification
- Timestamped access expiration

**Deployment:**
```bash
cd pitlab-meme
npm run deploy:sepolia           # Deploy PITLAB token
npm run deploy:router:sepolia    # Deploy PaymentRouter
npm run verify:router:sepolia    # Verify on BaseScan
```

### 2. Frontend (pitlab-website)

**Files:**
- `src/contexts/Web3Context.tsx` - Web3 provider with wallet integration
- `src/components/WalletConnect.tsx` - Wallet connection UI
- `src/components/FeatureCard.tsx` - Feature purchase cards
- `src/app/features/page.tsx` - Premium features marketplace
- `src/config/contracts.ts` - Contract addresses and ABIs

**Features:**
- MetaMask/Coinbase Wallet support
- Base Sepolia/Mainnet network switching
- Real-time PITLAB balance display
- Feature purchase flow (approve + purchase)
- Access verification

**Setup:**
```bash
cd pitlab-website
npm install ethers
npm run dev
```

### 3. CLI Backend (pitlab-eltmm)

**Files:**
- `src/core/payments.py` - PaymentClient for on-chain verification
- `src/cli/main.py` - CLI commands with @require_feature decorator
- `src/market/maker.py` - Market maker implementations (premium)
- `.env` - Configuration (USER_ADDRESS, PAYMENT_ROUTER_ADDRESS, etc.)

**Features:**
- On-chain access verification before command execution
- Caching to minimize RPC calls
- Feature-gated commands
- Support for all premium features

**Setup:**
```bash
cd pitlab-eltmm
pip install -e .
cp .env.example .env
# Configure .env with USER_ADDRESS, PAYMENT_ROUTER_ADDRESS, etc.
```

### 4. Hardware Wallet (pitlab-wallet)

**Status:** FREE - No payment integration needed
**Purpose:** Gift to crypto community
**Funding:** Supported by pitlab-meme revenue

## Premium Features

| Feature | ID | Price (PITLAB) | Description |
|---------|-----|----------------|-------------|
| MEV Bundler | `keccak256("mev_bundler")` | 100,000 | Anti-sniper protection |
| Market Maker | `keccak256("market_maker")` | 250,000 | Automated liquidity |
| Advanced Analytics | `keccak256("advanced_analytics")` | 50,000 | Market signals |
| Custom Strategies | `keccak256("custom_strategies")` | 150,000 | Custom algorithms |
| API Access | `keccak256("api_access")` | 75,000 | Higher rate limits |
| Priority Support | `keccak256("priority_support")` | 25,000 | Direct support |

## Payment Flow

```
User (Frontend)
    │
    ├─► 1. approve(PaymentRouter, amount)     [PITLAB Token]
    │
    └─► 2. purchaseFeature(featureId, 0)      [PaymentRouter]
            │
            ├─► burn(1/3)                      [PITLAB Token]
            ├─► transfer(holderPool, 1/3)      [PITLAB Token]
            └─► transfer(devWallet, 1/3)       [PITLAB Token]
            
User (CLI)
    │
    └─► 3. hasFeatureAccess(user, feature)    [PaymentRouter Read]
            │
            └─► Execute if true
```

## Environment Configuration

### Frontend (.env.local)
```bash
# Optional
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=...
```

### Backend (.env)
```bash
# Required
USER_ADDRESS=0x...
PAYMENT_ROUTER_ADDRESS=0x...
PITLAB_TOKEN_ADDRESS=0x...
RPC_URL=https://sepolia.base.org
PRIVATE_KEY=0x...  # For CLI transactions
```

### Contracts (hardhat.config.ts)
```bash
# .env
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
BASE_MAINNET_RPC_URL=https://mainnet.base.org
PRIVATE_KEY=0x...
BASESCAN_API_KEY=...
```

## Deployment Checklist

### Testnet (Base Sepolia)

- [ ] **Smart Contracts**
  - [ ] Deploy PITLAB token: `npm run deploy:sepolia`
  - [ ] Note token address: `0x...`
  - [ ] Deploy PaymentRouter: `npm run deploy:router:sepolia`
  - [ ] Note router address: `0x...`
  - [ ] Verify contracts: `npm run verify:router:sepolia`
  - [ ] Set feature prices via contract calls

- [ ] **Frontend**
  - [ ] Update `src/config/contracts.ts` with addresses
  - [ ] Calculate feature IDs: `node scripts/calculate-feature-ids.js`
  - [ ] Update FEATURES object in contracts.ts
  - [ ] Install dependencies: `npm install`
  - [ ] Test locally: `npm run dev`
  - [ ] Test wallet connection
  - [ ] Test purchase flow

- [ ] **Backend**
  - [ ] Update `.env` with PAYMENT_ROUTER_ADDRESS
  - [ ] Update `.env` with PITLAB_TOKEN_ADDRESS
  - [ ] Update `.env` with USER_ADDRESS
  - [ ] Test feature verification: `elt check-features`
  - [ ] Test premium command: `elt market-make --help`

- [ ] **Integration Testing**
  - [ ] Purchase feature via frontend
  - [ ] Verify payment on BaseScan
  - [ ] Check access in CLI: `elt check-features`
  - [ ] Run premium command
  - [ ] Verify 3-way split (burn/holders/dev)

### Mainnet (Base)

- [ ] **Pre-Deployment**
  - [ ] Audit smart contracts
  - [ ] Test thoroughly on testnet
  - [ ] Set up multisig for owner
  - [ ] Prepare dev wallet
  - [ ] Prepare holder rewards pool

- [ ] **Deployment**
  - [ ] Deploy PITLAB token: `npm run deploy:mainnet`
  - [ ] Deploy PaymentRouter: `npm run deploy:router:mainnet`
  - [ ] Verify contracts
  - [ ] Set reasonable feature prices
  - [ ] Transfer ownership to multisig

- [ ] **Frontend**
  - [ ] Update mainnet addresses in contracts.ts
  - [ ] Deploy to IPFS/Fleek
  - [ ] Update ENS record

- [ ] **Backend**
  - [ ] Update .env.example with mainnet config
  - [ ] Document mainnet deployment

- [ ] **Monitoring**
  - [ ] Set up payment event monitoring
  - [ ] Track total burns, holder rewards, dev funds
  - [ ] Monitor feature usage
  - [ ] Set up alerts for issues

## File Locations

### Configuration Files
```
pitlab-meme/
  ├── .env                          # Private keys, RPC URLs
  ├── hardhat.config.ts             # Network config
  └── scripts/deploy-payment-router.ts  # Deployment script

pitlab-website/
  ├── .env.local                    # Optional API keys
  ├── src/config/contracts.ts       # Contract addresses & ABIs
  └── package.json                  # Dependencies (ethers)

pitlab-eltmm/
  ├── .env                          # User address, contract addresses
  └── src/core/payments.py          # PaymentClient
```

### Documentation
```
pitlab-meme/DEPLOYMENT.md          # Contract deployment guide
pitlab-website/INTEGRATION.md       # Frontend-backend integration
QUICK_START.md                      # User onboarding guide
```

### Smart Contracts
```
pitlab-meme/contracts/
  ├── PITLAB.sol                    # ERC-20 token
  └── PaymentRouter.sol             # Payment processing
```

### Frontend Components
```
pitlab-website/src/
  ├── contexts/Web3Context.tsx      # Web3 provider
  ├── components/
  │   ├── WalletConnect.tsx         # Wallet UI
  │   └── FeatureCard.tsx           # Purchase cards
  ├── app/features/page.tsx         # Marketplace
  └── config/contracts.ts           # Addresses & ABIs
```

### Backend Integration
```
pitlab-eltmm/src/
  ├── core/payments.py              # PaymentClient
  ├── cli/main.py                   # CLI commands
  └── market/maker.py               # Premium features
```

## Support & Resources

- **Documentation**: https://pitlab.eth.limo/docs
- **Quick Start**: See `/QUICK_START.md`
- **Deployment Guide**: See `pitlab-meme/DEPLOYMENT.md`
- **Integration Guide**: See `pitlab-website/INTEGRATION.md`
- **GitHub**: https://github.com/Octavepi
- **Discord**: [Link TBD]

## Security Notes

1. **Private Keys**: Never commit to git, use .env files
2. **Owner Key**: Use multisig for mainnet
3. **RPC Rate Limits**: Cache access checks, use own node if needed
4. **Feature Verification**: Always verify on-chain, don't trust client
5. **Token Approvals**: Recommend limited approvals (exact amounts)

## Next Steps

1. **Calculate Feature IDs**: `cd pitlab-meme && node scripts/calculate-feature-ids.js`
2. **Deploy to Testnet**: Follow `pitlab-meme/DEPLOYMENT.md`
3. **Test Purchase Flow**: Use `pitlab-website/features` page
4. **Verify CLI Integration**: Use `pitlab-eltmm` commands
5. **Deploy to Mainnet**: When thoroughly tested

---

**Status**: ✅ Complete infrastructure ready for testnet deployment
**Last Updated**: 2025
**Maintainers**: PITLAB Contributors
