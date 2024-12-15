import { Swap } from '@airswap/libraries';
import type { ExternalProvider } from '@ethersproject/providers';
import { Web3Provider } from '@ethersproject/providers';
import { useEffect, useState } from 'react';

import { SwapButton } from '../../components';
import { useMetaMaskContext } from '../../hooks';
import { useSwapStore } from '../../stores/SwapStore';
import {
  ReviewHeadline,
  ReviewScreenContainer,
  HorizontalBox,
  LineBreak,
  ActionButtonsBox,
} from './ReviewScreenStyles';

export const ReviewScreen = () => {
  const [fee, setFee] = useState<string | undefined>(undefined);
  const { fromToken, fromAmount, toToken, toAmount, takerAddress, expiry } =
    useSwapStore();

  // const { provider } = useMetaMaskContext();

  // useEffect(() => {
  //   const initializeContract = () => {
  //     if (!provider) {
  //       console.error('MetaMask provider not found.');
  //       return;
  //     }

  //     try {
  //       const web3Provider = new Web3Provider(
  //         provider as unknown as ExternalProvider,
  //       );
  //       const network = web3Provider.getNetwork();
  //       const swapContract = Swap.getContract(web3Provider, network.chainId);
  //       const feeFromContract = swapContract.fee;
  //       setFee(feeFromContract);

  //       setFee(fee);
  //     } catch (error) {
  //       console.error('Error initializing contract:', error);
  //     }
  //   };

  //   initializeContract();
  // }, [provider]);

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
        <span>{expiry}</span>
      </HorizontalBox>
      <HorizontalBox>
        <span>Rate</span>
        <span>` WETH = 1000 USDC`</span>
      </HorizontalBox>
      <HorizontalBox>
        <span>Fee</span>
        <span>0.05 ETH</span>
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
