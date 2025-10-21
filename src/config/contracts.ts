// Contract addresses and ABIs for PITLAB ecosystem
// Update these after deployment

export const CONTRACTS = {
  // Base Sepolia (Testnet)
  testnet: {
    chainId: 84532,
    pitlabToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    paymentRouter: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    rpcUrl: 'https://sepolia.base.org',
    explorer: 'https://sepolia.basescan.org',
  },
  
  // Base Mainnet (Production)
  mainnet: {
    chainId: 8453,
    pitlabToken: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    paymentRouter: '0x0000000000000000000000000000000000000000', // TODO: Update after deployment
    rpcUrl: 'https://mainnet.base.org',
    explorer: 'https://basescan.org',
  },
};

// Get contract addresses for current network
export function getContracts(chainId: number) {
  if (chainId === 84532) return CONTRACTS.testnet;
  if (chainId === 8453) return CONTRACTS.mainnet;
  throw new Error(`Unsupported chain ID: ${chainId}`);
}

// Feature IDs (keccak256 of feature names)
export const FEATURES = {
  mev_bundler: '0x...', // TODO: Calculate from keccak256("mev_bundler")
  market_maker: '0x...', // TODO: Calculate from keccak256("market_maker")
  advanced_analytics: '0x...', // TODO: Calculate
  custom_strategies: '0x...', // TODO: Calculate
  api_access: '0x...', // TODO: Calculate
  priority_support: '0x...', // TODO: Calculate
};

// Feature metadata
export const FEATURE_INFO = {
  mev_bundler: {
    name: 'MEV Bundler',
    description: 'Anti-sniper protection for token launches',
    price: '100,000 PITLAB',
    icon: '⚡',
  },
  market_maker: {
    name: 'Market Maker',
    description: 'Automated liquidity provision and spread capture',
    price: '250,000 PITLAB',
    icon: '📊',
  },
  advanced_analytics: {
    name: 'Advanced Analytics',
    description: 'Real-time market signals and trading indicators',
    price: '50,000 PITLAB',
    icon: '📈',
  },
  custom_strategies: {
    name: 'Custom Strategies',
    description: 'Build and backtest custom trading algorithms',
    price: '150,000 PITLAB',
    icon: '🧠',
  },
  api_access: {
    name: 'API Access',
    description: 'Programmatic access with higher rate limits',
    price: '75,000 PITLAB',
    icon: '🔌',
  },
  priority_support: {
    name: 'Priority Support',
    description: 'Direct Discord/Telegram support channel',
    price: '25,000 PITLAB',
    icon: '💬',
  },
};

// Minimal ABI for PaymentRouter
export const PAYMENT_ROUTER_ABI = [
  'function purchaseFeature(bytes32 featureId, uint256 duration) external',
  'function hasFeatureAccess(address user, bytes32 featureId) external view returns (bool)',
  'function getAccessTimeRemaining(address user, bytes32 featureId) external view returns (uint256)',
  'function featurePrices(bytes32 featureId) external view returns (uint256)',
  'function computeFeatureId(string memory featureName) external pure returns (bytes32)',
];

// Minimal ABI for PITLAB token
export const PITLAB_TOKEN_ABI = [
  'function approve(address spender, uint256 amount) external returns (bool)',
  'function allowance(address owner, address spender) external view returns (uint256)',
  'function balanceOf(address account) external view returns (uint256)',
  'function decimals() external view returns (uint8)',
  'function symbol() external view returns (string)',
  'function name() external view returns (string)',
];
