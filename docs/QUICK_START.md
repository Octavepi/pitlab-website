# Quick Start: PITLAB Premium Features

This guide will get you started with purchasing and using premium features in under 10 minutes.

## Prerequisites

- Web3 wallet (MetaMask, Coinbase Wallet, etc.)
- Some Base Sepolia ETH (for gas)
- $PITLAB tokens
- Node.js 18+ and Python 3.10+ installed

## Step 1: Get Testnet Tokens

### Get Base Sepolia ETH
1. Visit https://sepolia.basescan.org/
2. Click "Faucet" in the footer
3. Request testnet ETH for gas fees

### Get $PITLAB Tokens
```bash
# Option A: Use faucet (if available)
Visit https://pitlab.eth.limo/faucet

# Option B: Use testnet deployment script
cd pitlab-meme
npm run deploy:sepolia  # Deploys with initial supply to your wallet
```

## Step 2: Purchase a Feature

### Via Website (Recommended)
1. Visit https://pitlab.eth.limo/features
2. Click "Connect Wallet"
3. Select Base Sepolia network
4. Choose a feature and click "Purchase"
5. Approve token spend in MetaMask
6. Confirm purchase transaction
7. Wait for confirmation (~2 seconds)

### Via Etherscan (Advanced)
```bash
# 1. Approve PITLAB spend
# Go to PITLAB token contract on BaseScan
# Call: approve(paymentRouterAddress, amount)

# 2. Purchase feature
# Go to PaymentRouter contract on BaseScan
# Call: purchaseFeature(featureId, 0)
# featureId = keccak256("mev_bundler") for MEV Bundler
# duration = 0 for permanent access
```

## Step 3: Set Up pitlab-eltmm CLI

```bash
# Clone and install
git clone https://github.com/Octavepi/pitlab-eltmm
cd pitlab-eltmm
pip install -e .

# Configure
cp .env.example .env
nano .env
```

Add to `.env`:
```bash
# Your wallet address (must match the one that purchased features)
USER_ADDRESS=0x...

# Contract addresses (from deployment)
PAYMENT_ROUTER_ADDRESS=0x...
PITLAB_TOKEN_ADDRESS=0x...

# RPC endpoint
RPC_URL=https://sepolia.base.org

# Your private key (for CLI transactions)
PRIVATE_KEY=0x...
```

## Step 4: Verify Feature Access

```bash
# Check all your features
elt check-features --user 0xYourAddress

# Expected output:
# ✓ mev_bundler: Unlocked (Permanent)
# ✗ market_maker: Locked
# ✗ advanced_analytics: Locked
```

## Step 5: Use Your Features

### MEV Bundler (Anti-Sniper)
```bash
elt bundle \
  --token 0x... \
  --min-buy 1000 \
  --max-buy 10000 \
  --duration 300
```

### Market Maker
```bash
elt market-make \
  --token 0x... \
  --quote USDC \
  --spread 0.5 \
  --size 1000 \
  --levels 5
```

### Advanced Analytics
```bash
elt analyze --token 0x... --signals all
```

## Feature Prices (Testnet)

| Feature | Price | Description |
|---------|-------|-------------|
| MEV Bundler | 100,000 PITLAB | Anti-sniper protection |
| Market Maker | 250,000 PITLAB | Automated liquidity |
| Advanced Analytics | 50,000 PITLAB | Market signals |
| Custom Strategies | 150,000 PITLAB | Custom algorithms |
| API Access | 75,000 PITLAB | Higher rate limits |
| Priority Support | 25,000 PITLAB | Direct support |

## Troubleshooting

### "Insufficient allowance"
You need to approve PITLAB tokens before purchase:
```typescript
// In browser console on pitlab-website
await approveTokens("100000");  // Approve 100K PITLAB
```

### "Feature not available"
Check that feature price is set:
```bash
# Via BaseScan
paymentRouter.featurePrices(featureId)
# Should return > 0
```

### "User does not have access"
Ensure:
- Purchase transaction confirmed
- Using same wallet address in .env
- Correct network (Base Sepolia or Mainnet)

### "Wrong network"
Switch to Base Sepolia:
```bash
# MetaMask: Networks → Add Network
Chain ID: 84532
RPC URL: https://sepolia.base.org
Currency: ETH
Explorer: https://sepolia.basescan.org
```

## Example: Full MEV Bundle Flow

```bash
# 1. Check balance
elt balance

# 2. Verify feature access
elt check-features

# 3. Create token bundle config
cat > bundle.yaml <<EOF
token_address: "0x..."
router_address: "0x..."
min_buy_amount: 1000
max_buy_amount: 10000
min_liquidity: 50000
slippage_tolerance: 5.0
EOF

# 4. Run anti-sniper bundle
elt bundle --config bundle.yaml --duration 300

# 5. Monitor bundle status
elt bundle-status --id <bundle_id>
```

## Getting Help

- **Documentation**: https://pitlab.eth.limo/docs
- **GitHub Issues**: https://github.com/Octavepi/pitlab-eltmm/issues
- **Discord**: [Link TBD]
- **Examples**: See `pitlab-eltmm/examples/workflows.md`

## Next Steps

1. **Explore Advanced Features**: See `pitlab-eltmm/examples/workflows.md`
2. **Build Custom Strategies**: Use the strategy builder
3. **Join the Community**: Discord, GitHub Discussions
4. **Contribute**: See CONTRIBUTING.md in each repo

## Mainnet Deployment

When ready for production:

```bash
# Deploy to Base Mainnet
cd pitlab-meme
npm run deploy:mainnet
npm run deploy:router:mainnet

# Update frontend config
# Update .env files
# Test thoroughly on testnet first!
```

---

**Welcome to PITLAB! Built in the PIT. 🔥**
