'use client';

import { useWeb3 } from '@/contexts/Web3Context';
import WalletConnect from '@/components/WalletConnect';
import FeatureCard from '@/components/FeatureCard';
import { FEATURE_INFO, FEATURES } from '@/config/contracts';

export default function FeaturesPage() {
  const {
    isConnected,
    isCorrectNetwork,
    address,
    pitlabBalance,
    error,
  } = useWeb3();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold mb-4">Premium Features</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Unlock advanced features with $PITLAB tokens
          </p>
        </div>
        <WalletConnect />
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
          {error}
        </div>
      )}

      {isConnected && isCorrectNetwork && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
          <p className="text-sm">
            <strong>Connected:</strong> {address?.slice(0, 6)}...{address?.slice(-4)}
            {' | '}
            <strong>Balance:</strong> {parseFloat(pitlabBalance).toLocaleString()} PITLAB
          </p>
        </div>
      )}

      {!isConnected && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8 text-center">
          <p className="text-lg mb-4">👆 Connect your wallet to view and purchase features</p>
        </div>
      )}

      {isConnected && isCorrectNetwork && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(FEATURE_INFO).map(([key, info]) => (
            <FeatureCard
              key={key}
              featureKey={key}
              name={info.name}
              description={info.description}
              price={info.price}
              icon={info.icon}
              featureId={FEATURES[key as keyof typeof FEATURES]}
            />
          ))}
        </div>
      )}

      <div className="mt-16 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Connect your wallet (MetaMask, Coinbase Wallet, etc.)</li>
          <li>Ensure you're on Base Sepolia or Base Mainnet</li>
          <li>Make sure you have enough PITLAB tokens</li>
          <li>Click "Purchase" on the feature you want</li>
          <li>Approve the token spend (one-time per feature)</li>
          <li>Confirm the purchase transaction</li>
          <li>Feature unlocked! Use it in pitlab-eltmm CLI</li>
        </ol>

        <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
          <h3 className="font-bold mb-3">Payment Distribution:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3">
              <div className="text-2xl mb-2">🔥</div>
              <div className="font-semibold">1/3 Burned</div>
              <div className="text-gray-600 dark:text-gray-400">Deflationary mechanism</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3">
              <div className="text-2xl mb-2">💎</div>
              <div className="font-semibold">1/3 to Holders</div>
              <div className="text-gray-600 dark:text-gray-400">Rewards for PITLAB holders</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3">
              <div className="text-2xl mb-2">🛠️</div>
              <div className="font-semibold">1/3 to Development</div>
              <div className="text-gray-600 dark:text-gray-400">Funds free tools & infrastructure</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-bold mb-3">Using Your Features</h3>
        <p className="mb-3">After purchase, use features in the pitlab-eltmm CLI:</p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`# MEV Bundler
elt bundle --token 0x... --min-buy 1000 --max-buy 10000

# Market Maker
elt market-make --token 0x... --quote USDC --spread 0.5

# Advanced Analytics
elt analyze --token 0x... --signals all

# Check your access status
elt check-features --user ${address || '0x...'}`}
        </pre>
      </div>
    </div>
  );
}
