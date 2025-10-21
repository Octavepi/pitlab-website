'use client';

import { useWeb3 } from '@/contexts/Web3Context';

export default function WalletConnect() {
  const {
    isConnected,
    isCorrectNetwork,
    address,
    pitlabBalance,
    connect,
    disconnect,
    switchNetwork,
    loading,
    error,
  } = useWeb3();

  if (loading) {
    return (
      <button
        disabled
        className="bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed"
      >
        Loading...
      </button>
    );
  }

  if (!isConnected) {
    return (
      <button
        onClick={connect}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
      >
        Connect Wallet
      </button>
    );
  }

  if (!isCorrectNetwork) {
    return (
      <div className="flex flex-col gap-2">
        <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-400 dark:border-orange-700 px-4 py-2 rounded-lg text-sm">
          ⚠️ Wrong Network
        </div>
        <button
          onClick={switchNetwork}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Switch to Base Sepolia
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-700 px-4 py-2 rounded-lg">
        <div className="text-sm font-mono">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {parseFloat(pitlabBalance).toLocaleString(undefined, { maximumFractionDigits: 2 })} PITLAB
        </div>
      </div>
      <button
        onClick={disconnect}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition text-sm"
      >
        Disconnect
      </button>
    </div>
  );
}
