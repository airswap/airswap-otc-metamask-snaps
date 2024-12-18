import { SwapERC20 } from '@airswap/libraries';
import { ethers } from 'ethers';
import { useEffect } from 'react';

import { SwapButton } from '../../components';
import { useSwapStore } from '../../stores/SwapStore';
import { convertExpiryToHumanReadableFormat } from '../../utils/convertExpiryToHumanReadableFormat';
import {
  ReviewHeadline,
  ReviewScreenContainer,
  HorizontalBox,
  LineBreak,
  ActionButtonsBox,
} from './ReviewScreenStyles';

export const ReviewScreen = () => {
  const {
    fromToken,
    fromAmount,
    toToken,
    toAmount,
    takerAddress,
    expiry,
    setFee,
    fee,
  } = useSwapStore();

  const expirationDate = convertExpiryToHumanReadableFormat(expiry);

  useEffect(() => {
    const initializeContract = async () => {
      if (typeof window === 'undefined' || !window.ethereum) {
        console.error('MetaMask provider not found.');
        return;
      }

      try {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum as unknown as ethers.providers.ExternalProvider,
        );

        // Get network information
        const network = await provider.getNetwork();
        const { chainId } = network;

        // Initialize the Swap contract
        const swapContract = SwapERC20.getContract(provider, chainId);
        const feeFromContract = await swapContract.protocolFee();

        setFee(feeFromContract);
        console.log(`Protocol fee: ${feeFromContract.toString() as string}`);
      } catch (error) {
        console.error('Error initializing contract:', error);
      }
    };

    // Call the function
    initializeContract().catch((error) => console.error(error));
  }, [setFee]);

  return (
    <ReviewScreenContainer>
      <ReviewHeadline>Review</ReviewHeadline>
      <HorizontalBox>
        <span>Send</span>
        <div>
          <span>{fromAmount?.toString() ?? 0}</span>{' '}
          <span>{fromToken ?? 'WETH'}</span>
        </div>
      </HorizontalBox>
      <LineBreak />
      <HorizontalBox>
        <span>Receive</span>
        <div>
          <span>{toAmount?.toString() ?? 0}</span>{' '}
          <span>{toToken ?? 'USDC'}</span>
        </div>
      </HorizontalBox>
      <LineBreak />
      <HorizontalBox>
        <span>For</span>
        <span>{takerAddress ?? 'anyone'}</span>
      </HorizontalBox>
      <HorizontalBox>
        <span>Expiry</span>
        <span>{expirationDate}</span>
      </HorizontalBox>
      <HorizontalBox>
        <span>Rate</span>
        <span>` WETH = 1000 USDC`</span>
      </HorizontalBox>
      <HorizontalBox>
        <span>Fee</span>
        <span>{fee} ETH</span>
      </HorizontalBox>
      <HorizontalBox>
        <span>Total</span>
        <span>0.0001005 WETH</span>
      </HorizontalBox>
      <ActionButtonsBox>
        <SwapButton label="Edit" onClick={() => null} />
        <SwapButton label="Sign" onClick={() => null} />
      </ActionButtonsBox>
    </ReviewScreenContainer>
  );
};
