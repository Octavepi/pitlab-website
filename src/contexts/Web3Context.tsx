'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';
import { getContracts, PAYMENT_ROUTER_ABI, PITLAB_TOKEN_ABI } from '@/config/contracts';

interface Web3ContextType {
  provider: ethers.BrowserProvider | null;
  signer: ethers.Signer | null;
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  isCorrectNetwork: boolean;
  pitlabBalance: string;
  connect: () => Promise<void>;
  disconnect: () => void;
  switchNetwork: () => Promise<void>;
  purchaseFeature: (featureId: string, duration: number) => Promise<void>;
  hasFeatureAccess: (featureId: string) => Promise<boolean>;
  approveTokens: (amount: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export function Web3Provider({ children }: { children: ReactNode }) {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [pitlabBalance, setPitlabBalance] = useState<string>('0');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isConnected = !!address;
  const isCorrectNetwork = chainId === 84532 || chainId === 8453; // Base Sepolia or Base Mainnet

  // Initialize provider
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(web3Provider);
    }
  }, []);

  // Listen for account/network changes
  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect();
      } else {
        setAddress(accounts[0]);
      }
    };

    const handleChainChanged = (chainIdHex: string) => {
      const newChainId = parseInt(chainIdHex, 16);
      setChainId(newChainId);
      window.location.reload(); // Recommended by MetaMask
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  // Update PITLAB balance when address or chain changes
  useEffect(() => {
    if (address && chainId && isCorrectNetwork) {
      updatePitlabBalance();
    }
  }, [address, chainId, isCorrectNetwork]);

  const updatePitlabBalance = async () => {
    if (!provider || !address || !chainId || !isCorrectNetwork) return;

    try {
      const contracts = getContracts(chainId);
      const tokenContract = new ethers.Contract(
        contracts.pitlabToken,
        PITLAB_TOKEN_ABI,
        provider
      );

      const balance = await tokenContract.balanceOf(address);
      setPitlabBalance(ethers.formatEther(balance));
    } catch (err) {
      console.error('Failed to fetch PITLAB balance:', err);
    }
  };

  const connect = async () => {
    if (!provider) {
      setError('Please install MetaMask or another Web3 wallet');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const accounts = await provider.send('eth_requestAccounts', []);
      const network = await provider.getNetwork();
      const web3Signer = await provider.getSigner();

      setAddress(accounts[0]);
      setChainId(Number(network.chainId));
      setSigner(web3Signer);
    } catch (err: any) {
      setError(err.message || 'Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  };

  const disconnect = () => {
    setAddress(null);
    setSigner(null);
    setChainId(null);
    setPitlabBalance('0');
  };

  const switchNetwork = async () => {
    if (!provider) return;

    setLoading(true);
    setError(null);

    try {
      // Try Base Sepolia first (testnet)
      await provider.send('wallet_switchEthereumChain', [
        { chainId: '0x14a34' }, // 84532 in hex
      ]);
    } catch (switchError: any) {
      // If network doesn't exist, add it
      if (switchError.code === 4902) {
        try {
          await provider.send('wallet_addEthereumChain', [
            {
              chainId: '0x14a34',
              chainName: 'Base Sepolia',
              nativeCurrency: {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18,
              },
              rpcUrls: ['https://sepolia.base.org'],
              blockExplorerUrls: ['https://sepolia.basescan.org'],
            },
          ]);
        } catch (addError: any) {
          setError(addError.message || 'Failed to add network');
        }
      } else {
        setError(switchError.message || 'Failed to switch network');
      }
    } finally {
      setLoading(false);
    }
  };

  const approveTokens = async (amount: string) => {
    if (!signer || !chainId || !isCorrectNetwork) {
      throw new Error('Wallet not connected or wrong network');
    }

    setLoading(true);
    setError(null);

    try {
      const contracts = getContracts(chainId);
      const tokenContract = new ethers.Contract(
        contracts.pitlabToken,
        PITLAB_TOKEN_ABI,
        signer
      );

      const amountWei = ethers.parseEther(amount);
      const tx = await tokenContract.approve(contracts.paymentRouter, amountWei);
      await tx.wait();

      return tx;
    } catch (err: any) {
      setError(err.message || 'Failed to approve tokens');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const purchaseFeature = async (featureId: string, duration: number) => {
    if (!signer || !chainId || !isCorrectNetwork) {
      throw new Error('Wallet not connected or wrong network');
    }

    setLoading(true);
    setError(null);

    try {
      const contracts = getContracts(chainId);
      const routerContract = new ethers.Contract(
        contracts.paymentRouter,
        PAYMENT_ROUTER_ABI,
        signer
      );

      const tx = await routerContract.purchaseFeature(featureId, duration);
      await tx.wait();

      // Update balance after purchase
      await updatePitlabBalance();

      return tx;
    } catch (err: any) {
      setError(err.message || 'Failed to purchase feature');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const hasFeatureAccess = async (featureId: string): Promise<boolean> => {
    if (!provider || !address || !chainId || !isCorrectNetwork) {
      return false;
    }

    try {
      const contracts = getContracts(chainId);
      const routerContract = new ethers.Contract(
        contracts.paymentRouter,
        PAYMENT_ROUTER_ABI,
        provider
      );

      return await routerContract.hasFeatureAccess(address, featureId);
    } catch (err) {
      console.error('Failed to check feature access:', err);
      return false;
    }
  };

  return (
    <Web3Context.Provider
      value={{
        provider,
        signer,
        address,
        chainId,
        isConnected,
        isCorrectNetwork,
        pitlabBalance,
        connect,
        disconnect,
        switchNetwork,
        purchaseFeature,
        hasFeatureAccess,
        approveTokens,
        loading,
        error,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
}
