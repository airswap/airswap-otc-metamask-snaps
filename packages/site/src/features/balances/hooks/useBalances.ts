import type { Web3Provider } from '@ethersproject/providers';
import { useEffect } from 'react';

import { fetchBalances } from '../balancesApi';

type UseBalancesProps = {
  provider: Web3Provider;
  chainId: number;
  walletAddress: string;
  tokenAddresses: string[];
};

export const useBalances = ({
  provider,
  chainId,
  walletAddress,
  tokenAddresses,
}: UseBalancesProps) => {
  useEffect(() => {
    const fetchAndLogBalances = async () => {
      try {
        const balances = await fetchBalances({
          chainId,
          provider,
          walletAddress,
          tokenAddresses,
        });
        console.log('Fetched balances:', balances); // Log the balances for testing
      } catch (error) {
        console.error('Error fetching balances:', error);
      }
    };

    if (provider && walletAddress && tokenAddresses.length) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchAndLogBalances();
    }
  }, [provider, chainId, walletAddress, tokenAddresses]);
};
