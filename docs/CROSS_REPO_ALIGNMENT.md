# Cross-Repository Alignment Guide

> **Critical:** When making changes to pitlab-eltmm (backend) or pitlab-website (frontend), always ensure both repositories remain synchronized.

---

## Overview

The PITLAB ecosystem consists of interconnected repositories that must stay aligned:

- **pitlab-eltmm** (Backend): Python CLI with premium features
- **pitlab-website** (Frontend): React Web3 marketplace
- **pitlab-meme** (Contracts): Smart contracts (PITLAB token, PaymentRouter)
- **pitlab-wallet** (Hardware): Pi Trezor wallet (no monetization)

---

## Core Principle

**When you change one, update the others.**

The backend and frontend are tightly coupled through:
1. Feature IDs (keccak256 hash of feature names)
2. Smart contract ABIs
3. Payment verification logic
4. Feature pricing

---

## Change Propagation Matrix

### Adding a New Premium Feature

| Step | Repository | Action |
|------|------------|--------|
| 1 | **pitlab-eltmm** | Add feature name to `PaymentClient.FEATURES` |
| 2 | **pitlab-eltmm** | Add `@require_feature("feature_name")` decorator |
| 3 | **pitlab-eltmm** | Update CLI command if needed |
| 4 | **pitlab-eltmm** | Update docs: README.md, examples/ |
| 5 | **pitlab-website** | Add feature to `FEATURE_INFO` in `src/config/contracts.ts` |
| 6 | **pitlab-website** | Compute feature ID: `ethers.keccak256(ethers.toUtf8Bytes("feature_name"))` |
| 7 | **pitlab-website** | Add feature card to `src/app/features/page.tsx` |
| 8 | **pitlab-meme** | Set price in deployment script or via `setFeaturePrice()` |
| 9 | **Documentation** | Update WHITEPAPER.md, INTEGRATION.md |

**Example:**
```python
# pitlab-eltmm/src/core/payments.py
FEATURES = {
    "new_feature": "new_feature",  # <-- Add here
}

# pitlab-eltmm/src/cli/commands.py
@require_feature("new_feature")
def new_command():
    pass
```

```typescript
// pitlab-website/src/config/contracts.ts
export const FEATURE_INFO = {
  new_feature: {
    name: "New Feature",
    description: "...",
    price: "50000 PITLAB",
    icon: "🚀",
  },
};
```

---

### Updating Feature Pricing

| Step | Repository | Action |
|------|------------|--------|
| 1 | **pitlab-meme** | Call `setFeaturePrice(featureId, newPrice)` on PaymentRouter |
| 2 | **pitlab-website** | Update price in `FEATURE_INFO` config |
| 3 | **Documentation** | Update pricing table in WHITEPAPER.md |

---

### Modifying Smart Contract ABI

| Step | Repository | Action |
|------|------------|--------|
| 1 | **pitlab-meme** | Modify contract, recompile, redeploy |
| 2 | **pitlab-meme** | Update typechain types: `npm run compile` |
| 3 | **pitlab-eltmm** | Update `PAYMENT_ROUTER_ABI` in `src/core/payments.py` |
| 4 | **pitlab-website** | Update ABIs in `src/config/contracts.ts` |
| 5 | **Both** | Update contract addresses in configs |
| 6 | **Documentation** | Update DEPLOYMENT.md with new addresses |

---

### Changing Payment Flow Logic

| Step | Repository | Action |
|------|------------|--------|
| 1 | **pitlab-meme** | Modify PaymentRouter.sol (if needed) |
| 2 | **pitlab-eltmm** | Update `PaymentClient` verification logic |
| 3 | **pitlab-website** | Update `Web3Context` purchase/approval flow |
| 4 | **Documentation** | Update INTEGRATION.md flow diagrams |

---

## Feature ID Synchronization

**Critical:** Feature IDs must match across all repos.

### Computing Feature IDs

**Solidity:**
```solidity
bytes32 featureId = keccak256(abi.encodePacked("feature_name"));
```

**JavaScript/TypeScript:**
```typescript
import { ethers } from 'ethers';
const featureId = ethers.keccak256(ethers.toUtf8Bytes("feature_name"));
```

**Python:**
```python
from web3 import Web3
feature_id = Web3.keccak(text="feature_name")
```

### Feature ID Registry

Use `pitlab-meme/scripts/calculate-feature-ids.js` to generate consistent IDs:

```bash
cd pitlab-meme
node scripts/calculate-feature-ids.js
```

**Maintain this canonical list:**
- `mev_bundler`: `0x...`
- `market_maker`: `0x...`
- `advanced_analytics`: `0x...`
- `custom_strategies`: `0x...`
- `api_access`: `0x...`
- `priority_support`: `0x...`

---

## Configuration Files to Sync

### Environment Variables

**pitlab-eltmm/.env:**
```bash
PAYMENT_ROUTER_ADDRESS=0x...
PITLAB_TOKEN_ADDRESS=0x...
RPC_URL=https://sepolia.base.org
USER_ADDRESS=0x...
```

**pitlab-website/src/config/contracts.ts:**
```typescript
export const CONTRACTS = {
  testnet: {
    chainId: 84532,
    pitlabToken: '0x...',    // Must match .env
    paymentRouter: '0x...',  // Must match .env
  },
};
```

**pitlab-meme/.env:**
```bash
PITLAB_TOKEN_ADDRESS=0x...  # Source of truth
PAYMENT_ROUTER_ADDRESS=0x...  # After deployment
```

---

## Testing Checklist

When making changes, test both repos:

### Backend Tests
```bash
cd pitlab-eltmm

# Unit tests
pytest tests/

# Integration test (requires deployed contracts)
python -c "
from src.core.payments import PaymentClient
from web3 import Web3

w3 = Web3(Web3.HTTPProvider('https://sepolia.base.org'))
client = PaymentClient(w3, '0x...', 'base')
print(client.has_feature_access('0x...', 'mev_bundler'))
"
```

### Frontend Tests
```bash
cd pitlab-website

# Type check
npm run build

# Manual test
npm run dev
# Navigate to /features
# Connect wallet
# Check feature access detection
# Test purchase flow
```

### Contract Tests
```bash
cd pitlab-meme

# Unit tests
npx hardhat test

# Deployment test
npm run deploy:sepolia
```

---

## Common Pitfalls

### ❌ Don't:
1. **Add feature to backend without updating frontend**
   - Users won't be able to purchase it
2. **Change feature names after deployment**
   - Feature IDs will mismatch
3. **Update ABIs in only one repo**
   - Contract calls will fail
4. **Hardcode contract addresses**
   - Use environment variables
5. **Skip testing after changes**
   - Integration can break silently

### ✅ Do:
1. **Update both repos in same PR/commit**
2. **Use consistent feature naming**
3. **Sync ABIs immediately after contract changes**
4. **Centralize addresses in env files**
5. **Test end-to-end before deploying**
6. **Document breaking changes**

---

## Deployment Coordination

### Testnet Deployment Flow
```bash
# 1. Deploy contracts
cd pitlab-meme
npm run deploy:sepolia
# Note addresses

# 2. Update backend config
cd ../pitlab-eltmm
echo "PAYMENT_ROUTER_ADDRESS=0x..." >> .env
echo "PITLAB_TOKEN_ADDRESS=0x..." >> .env

# 3. Update frontend config
cd ../pitlab-website
# Edit src/config/contracts.ts with new addresses

# 4. Test integration
cd ../pitlab-eltmm
pytest tests/test_payments.py

cd ../pitlab-website
npm run build
npm run dev

# 5. Verify on BaseScan
```

### Mainnet Deployment Flow
Same as testnet, but:
- Use production env files
- Double-check all addresses
- Test on testnet first
- Announce to community before deploying

---

## Documentation to Update

When changing features or contracts, update:

| Document | Location | What to Update |
|----------|----------|----------------|
| WHITEPAPER.md | pitlab-website/docs/ | Feature list, pricing, flow |
| ROADMAP.md | pitlab-website/docs/ | Milestones, utility metrics |
| INTEGRATION.md | pitlab-website/ | Setup steps, API reference |
| DEPLOYMENT.md | pitlab-meme/ | Contract addresses, pricing |
| README.md | pitlab-eltmm/ | CLI commands, feature list |
| README.md | pitlab-website/ | Setup, configuration |

---

## Version Control Best Practices

### Commit Messages
```
feat(payments): Add new "whale_alerts" premium feature

- Add to PaymentClient.FEATURES in pitlab-eltmm
- Add to FEATURE_INFO in pitlab-website
- Set price: 25,000 PITLAB
- Update INTEGRATION.md with feature ID

Affects: pitlab-eltmm, pitlab-website
```

### Branch Naming
```
feature/add-whale-alerts        # For new features
fix/sync-feature-ids            # For alignment fixes
chore/update-contract-addresses # For config updates
```

### PR Checklist
- [ ] Backend changes implemented
- [ ] Frontend changes implemented
- [ ] Feature IDs match
- [ ] ABIs synced
- [ ] Addresses updated
- [ ] Tests pass
- [ ] Documentation updated
- [ ] CHANGELOG.md entries added

---

## Emergency Procedures

### Contract Address Mismatch
1. Identify correct address from BaseScan
2. Update all three repos' env/config files
3. Redeploy frontend if necessary
4. Announce to users

### Feature ID Collision
1. Use `calculate-feature-ids.js` to regenerate
2. Update backend `FEATURES` dict
3. Update frontend `FEATURE_INFO`
4. If already deployed: **Do not change** (breaks existing purchases)

### ABI Version Mismatch
1. Check contract on BaseScan
2. Export correct ABI
3. Update backend `PAYMENT_ROUTER_ABI`
4. Update frontend `src/config/contracts.ts`
5. Test all contract calls

---

## Cross-Repo Issue Tracking

### GitHub Issues
Label issues with affected repos:
- `backend`: pitlab-eltmm
- `frontend`: pitlab-website
- `contracts`: pitlab-meme
- `sync-required`: Affects multiple repos

### Example Issue
```markdown
Title: [SYNC] Add "custom_alerts" premium feature

Checklist:
- [ ] Backend: Add to PaymentClient.FEATURES
- [ ] Backend: Add CLI command
- [ ] Frontend: Add to FEATURE_INFO
- [ ] Frontend: Add feature card
- [ ] Contracts: Set price via setFeaturePrice()
- [ ] Docs: Update WHITEPAPER.md
- [ ] Docs: Update INTEGRATION.md
- [ ] Test: End-to-end purchase flow

Affects: pitlab-eltmm, pitlab-website, pitlab-meme
```

---

## Automation Opportunities

### Future Enhancements
1. **Shared config package**
   - npm/pip package with feature IDs
   - Single source of truth
2. **CI/CD validation**
   - Check feature ID consistency
   - Validate ABI matches
3. **Code generation**
   - Generate backend/frontend configs from contracts
4. **Integration tests**
   - Automated E2E tests across repos

---

## Questions?

If you're unsure whether a change affects both repos:

**Ask yourself:**
1. Does it involve feature names or IDs? → **Both repos**
2. Does it modify smart contract ABIs? → **All three repos**
3. Does it change payment flow? → **Both repos + docs**
4. Does it update pricing? → **Both repos + docs**
5. Is it purely UI/UX? → **Frontend only**
6. Is it pure Python logic? → **Backend only**

When in doubt: **Update both and add tests.**

---

**The PIT stays aligned. Keep repos in sync, always.**

*Last updated: October 2025*
