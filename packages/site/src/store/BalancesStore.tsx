import type { ethers } from 'ethers';
import {
  fetchAllowancesSwap,
  fetchAllowancesWrapper,
  fetchBalances,
} from 'src/features/balances/balancesApi';
import { create } from 'zustand';

type BalancesState = {
  status: 'idle' | 'fetching' | 'failed';
  lastFetch: number | null;
  inFlightFetchTokens: string[] | null;
  values: { [tokenAddress: string]: string | null };
  fetchBalances: (
    provider: ethers.providers.Web3Provider,
    chainId: number,
    walletAddress: string,
    tokenAddresses: string[],
  ) => Promise<void>;
  fetchAllowances: (
    provider: ethers.providers.Web3Provider,
    chainId: number,
    walletAddress: string,
    tokenAddresses: string[],
    spenderType: 'Swap' | 'Wrapper',
  ) => Promise<void>;
  resetState: () => void; // New function to reset state
};

export const useBalancesStore = create<BalancesState>((set) => ({
  status: 'idle',
  lastFetch: null,
  inFlightFetchTokens: null,
  values: {},

  fetchBalances: async (provider, chainId, walletAddress, tokenAddresses) => {
    set({ status: 'fetching', inFlightFetchTokens: tokenAddresses });
    try {
      const balances = await fetchBalances({
        provider,
        chainId,
        walletAddress,
        tokenAddresses,
      });
      const values = tokenAddresses.reduce<{ [tokenAddress: string]: string }>(
        (acc, address, index) => {
          acc[address] = balances[index] ?? '0';
          return acc;
        },
        {},
      );

      set({
        values,
        lastFetch: Date.now(),
        status: 'idle',
        inFlightFetchTokens: null,
      });
    } catch (error) {
      console.error('Error fetching balances:', error);
      set({ status: 'failed' });
    }
  },

  fetchAllowances: async (
    provider,
    chainId,
    walletAddress,
    tokenAddresses,
    spenderType,
  ) => {
    set({ status: 'fetching', inFlightFetchTokens: tokenAddresses });
    try {
      const allowances =
        spenderType === 'Swap'
          ? await fetchAllowancesSwap({
              provider,
              chainId,
              walletAddress,
              tokenAddresses,
            })
          : await fetchAllowancesWrapper({
              provider,
              chainId,
              walletAddress,
              tokenAddresses,
            });

      const values = tokenAddresses.reduce<{ [tokenAddress: string]: string }>(
        (acc, address, index) => {
          acc[address] = allowances[index] ?? '0';
          return acc;
        },
        {},
      );

      set({
        values,
        lastFetch: Date.now(),
        status: 'idle',
        inFlightFetchTokens: null,
      });
    } catch (error) {
      console.error(`Error fetching ${spenderType} allowances:`, error);
      set({ status: 'failed' });
    }
  },

  resetState: () =>
    set({
      status: 'idle',
      lastFetch: null,
      inFlightFetchTokens: null,
      values: {},
    }),
}));
