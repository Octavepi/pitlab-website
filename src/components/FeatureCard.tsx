'use client';

import { useState } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';

interface FeatureCardProps {
  featureKey: string;
  name: string;
  description: string;
  price: string;
  icon: string;
  featureId: string;
}

export default function FeatureCard({
  featureKey,
  name,
  description,
  price,
  icon,
  featureId,
}: FeatureCardProps) {
  const { purchaseFeature, hasFeatureAccess, approveTokens, loading } = useWeb3() as any;

  const [purchasing, setPurchasing] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [checking, setChecking] = useState(false);

  // Check access on mount
  useState(() => {
    checkAccess();
  });

  const checkAccess = async () => {
    setChecking(true);
    try {
      // Compute featureId deterministically from feature key to avoid relying on config placeholders
      const { keccak256, toUtf8Bytes } = await import('ethers');
      const computedId = keccak256(toUtf8Bytes(featureKey));
      const access = await hasFeatureAccess(computedId);
      setHasAccess(access);
    } catch (err) {
      console.error('Failed to check access:', err);
    } finally {
      setChecking(false);
    }
  };

  const handlePurchase = async () => {
    setPurchasing(true);

    try {
      // Extract numeric price
      const priceAmount = price.replace(/[^0-9]/g, '');

      // Step 1: Approve tokens
      console.log(`Approving ${priceAmount} PITLAB...`);
      await approveTokens(priceAmount);

  // Step 2: Purchase feature (0 = permanent)
      console.log('Purchasing feature...');
  const { keccak256, toUtf8Bytes } = await import('ethers');
  const computedId = keccak256(toUtf8Bytes(featureKey));
  await purchaseFeature(computedId, 0);

      setHasAccess(true);
      alert(`${name} purchased successfully! 🎉`);
    } catch (err: any) {
      console.error('Purchase failed:', err);
      alert(`Purchase failed: ${err.message}`);
    } finally {
      setPurchasing(false);
    }
  };

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[3rem]">
        {description}
      </p>
      
      <div className="mb-4">
        <p className="text-xl font-semibold">{price}</p>
      </div>

      {hasAccess ? (
        <div className="bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-700 px-4 py-2 rounded-lg text-center font-semibold">
          ✓ Owned
        </div>
      ) : (
        <button
          onClick={handlePurchase}
          disabled={purchasing || loading || checking}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold disabled:bg-gray-400 transition"
        >
          {purchasing ? 'Processing...' : checking ? 'Checking...' : 'Purchase'}
        </button>
      )}
    </div>
  );
}
