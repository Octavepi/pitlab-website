# PitLab ELTMM Frontend Integration Guide

## Overview

This guide explains how to integrate the React Web3 frontend (pitlab-website) with the pitlab-eltmm CLI backend for a seamless user experience.

## Architecture

```
┌─────────────────┐
│ pitlab-website  │ (React + Web3)
│  - Wallet UI    │
│  - Purchase UI  │
│  - Feature Gate │
└────────┬────────┘
         │
         │ Smart Contract Calls
         ▼
┌─────────────────┐
│ PaymentRouter   │ (Base Chain)
│  - Handle $PITLAB│
│  - 3-way split  │
│  - Access ctrl  │
└────────┬────────┘
         │
         │ On-chain verification
         ▼
┌─────────────────┐
│ pitlab-eltmm    │ (Python CLI)
│  - Read access  │
│  - Execute      │
│  - Premium feat │
└─────────────────┘
```

## Setup Instructions

### 1. Deploy Smart Contracts

See [pitlab-meme/DEPLOYMENT.md](../../pitlab-meme/DEPLOYMENT.md) for full deployment guide.

```bash
cd pitlab-meme

# Deploy PITLAB token
npm run deploy:sepolia

# Deploy PaymentRouter
npm run deploy:router:sepolia

# Note the contract addresses
```

### 2. Update Frontend Config

Edit `pitlab-website/src/config/contracts.ts`:

```typescript
export const CONTRACTS = {
  testnet: {
    chainId: 84532,
    pitlabToken: '0x...', // <-- Update with deployed address
    paymentRouter: '0x...', // <-- Update with deployed address
    rpcUrl: 'https://sepolia.base.org',
    explorer: 'https://sepolia.basescan.org',
  },
};
```

Calculate and update feature IDs:

```typescript
// Using ethers.js in browser console:
import { ethers } from 'ethers';

const features = [
  'mev_bundler',
  'market_maker',
  'advanced_analytics',
  'custom_strategies',
  'api_access',
  'priority_support',
];

features.forEach(name => {
  const id = ethers.keccak256(ethers.toUtf8Bytes(name));
  console.log(`${name}: ${id}`);
});
```

### 3. Update Backend Config

Edit `pitlab-eltmm/.env`:

```bash
# Payment verification
PAYMENT_ROUTER_ADDRESS=0x...  # From deployment
PITLAB_TOKEN_ADDRESS=0x...    # From deployment
RPC_URL=https://sepolia.base.org

# User identity (for feature verification)
USER_ADDRESS=0x...  # User's wallet address
```

### 4. Install Frontend Dependencies

```bash
cd pitlab-website

# Install if not already installed
npm install ethers
```

### 5. Test the Integration

#### Frontend Test:
```bash
cd pitlab-website
npm run dev
# Visit http://localhost:3000/features
# Connect wallet, purchase feature
```

#### Backend Test:
```python
# In pitlab-eltmm
from src.core.payments import PaymentClient
from src.evm.provider import Provider
from web3 import Web3

# Initialize
provider = Provider("https://sepolia.base.org", 84532)
client = PaymentClient(
    provider.w3,
    router_address="0x...",
    chain="base"
)

# Check access
user_address = "0x..."  # From frontend
has_access = client.has_feature_access(user_address, "mev_bundler")
print(f"Has MEV bundler access: {has_access}")
```

## User Flow

### Purchase Flow

1. **User visits pitlab-website/features**
   - Sees all premium features with prices
   - Clicks "Purchase" on desired feature

2. **Frontend handles wallet interaction**
   ```typescript
   // Step 1: Approve PITLAB tokens
   await approveTokens(price);
   
   // Step 2: Purchase feature
   await purchaseFeature(featureId, duration);
   ```

3. **Smart contract processes payment**
   - Burns 1/3 of tokens
   - Sends 1/3 to holder rewards pool
   - Sends 1/3 to dev wallet
   - Grants user access to feature

4. **User receives confirmation**
   - Transaction hash shown
   - Access granted immediately
   - Can now use feature in CLI

### Usage Flow

1. **User opens CLI**
   ```bash
   elt market-make --token 0x... --quote USDC
   ```

2. **CLI checks on-chain access**
   ```python
   @require_feature("market_maker")
   def start(self, ...):
       # Only runs if user has paid
       ...
   ```

3. **Feature executes if payment verified**

## Environment Variables

### Frontend (.env.local)
```bash
# Optional: Analytics, etc.
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=...
```

### Backend (.env)
```bash
# Required for payment verification
PAYMENT_ROUTER_ADDRESS=0x...
PITLAB_TOKEN_ADDRESS=0x...
RPC_URL=https://sepolia.base.org

# User identification
USER_ADDRESS=0x...  # Set per user or prompt
```

## API Reference

### PaymentClient (Python)

```python
from src.core.payments import PaymentClient

client = PaymentClient(provider, router_address, chain)

# Check if user has access
has_access = client.has_feature_access(user_address, feature_name)

# Get remaining time (seconds)
time_left = client.get_access_time_remaining(user_address, feature_name)

# Get feature price
price = client.get_feature_price(feature_name)

# Check all features at once
access_map = client.check_all_features(user_address)
```

### Web3Context (React)

```typescript
import { useWeb3 } from '@/contexts/Web3Context';

function MyComponent() {
  const {
    connect,           // Connect wallet
    disconnect,        // Disconnect wallet
    switchNetwork,     // Switch to Base
    purchaseFeature,   // Buy feature
    hasFeatureAccess,  // Check access
    approveTokens,     // Approve spend
    address,           // User's address
    pitlabBalance,     // PITLAB balance
    isConnected,       // Connection status
    loading,           // Loading state
    error,             // Error message
  } = useWeb3();
  
  return (
    <button onClick={connect}>Connect</button>
  );
}
```

## Caching Strategy

### Frontend
- Cache wallet connection state
- Cache feature access status (5 min TTL)
- Refresh on transaction confirmation

### Backend
```python
# Cache access checks to reduce RPC calls
from functools import lru_cache
import time

@lru_cache(maxsize=100)
def check_access_cached(user_address, feature_id, timestamp_hour):
    # Cached for 1 hour (timestamp_hour ensures hourly refresh)
    return client.has_feature_access(user_address, feature_id)

# Usage
current_hour = int(time.time() // 3600)
has_access = check_access_cached(user, feature, current_hour)
```

## Security Considerations

1. **Private Keys**
   - Never expose user private keys
   - Frontend only signs transactions, never exposes keys
   - Backend queries are read-only (no keys needed)

2. **RPC Rate Limiting**
   - Use caching to minimize RPC calls
   - Consider running own Base node for production

3. **Feature Verification**
   - Always verify on-chain before enabling features
   - Don't trust client-side verification alone
   - Cache with reasonable TTL (1 hour)

4. **Token Approvals**
   - Recommend limited approvals (exact amount)
   - Warn users about unlimited approvals

## Troubleshooting

### "Feature access check failed"
- Check `PAYMENT_ROUTER_ADDRESS` is correct
- Ensure RPC URL is accessible
- Verify user address matches wallet

### "Insufficient allowance"
- User didn't approve tokens
- Approval transaction didn't confirm
- Use `approveTokens()` before `purchaseFeature()`

### "Wrong network"
- Use Base Sepolia (84532) for testing
- Use Base Mainnet (8453) for production
- Call `switchNetwork()` to prompt user

## Production Checklist

- [ ] Deploy PITLAB token to Base Mainnet
- [ ] Deploy PaymentRouter to Base Mainnet
- [ ] Verify all contracts on BaseScan
- [ ] Update frontend config with mainnet addresses
- [ ] Calculate all feature IDs correctly
- [ ] Test purchase flow end-to-end
- [ ] Set up monitoring for payments
- [ ] Configure dev wallet and rewards pool
- [ ] Set reasonable feature prices
- [ ] Update RPC URLs for production
- [ ] Add error tracking (Sentry, etc.)
- [ ] Set up analytics

## Support

- GitHub: https://github.com/Octavepi/pitlab-website
- Discord: [TBD]
- Docs: https://pitlab.eth.limo
