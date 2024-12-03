import { Swap } from '@airswap/libraries';
import type { ExternalProvider } from '@ethersproject/providers';
import { Web3Provider } from '@ethersproject/providers';

import { SwapButton } from '../../components';
import { useMetaMaskContext } from '../../hooks/MetamaskContext';
import { useSwapStore } from '../../stores/SwapStore';
import { executeSwap } from '../../utils/swapFunction';
import {
  ReviewHeadline,
  ReviewScreenContainer,
  HorizontalBox,
  LineBreak,
  ActionButtonsBox,
} from './ReviewScreenStyles';

export const ReviewScreen = () => {
  const { expiry, fromToken, fromAmount, toToken, toAmount, takerAddress } =
    useSwapStore();

  const { provider } = useMetaMaskContext();
  // const web3Provider = new Web3Provider(
  //   provider as unknown as ExternalProvider,
  // );
  // const signer = web3Provider.getSigner();
  // const address = await signer.getAddress();

  console.log(provider);

  const chainId = Number(provider?.chainId);
  // const swapContract = Swap.getContract(web3Provider, chainId);
  // console.log('chainId:', chainId);

  // const swapParams = {
  //   nonce: BigInt(1),
  //   expiry: BigInt(expiry),
  //   signerWallet: '0x',
  //   signerToken: fromToken,
  //   signerAmount: fromAmount,
  //   senderToken: toToken,
  //   senderAmount: toAmount,
  //   signature: '0x',
  // };
  // const swapLink = executeSwap(swapParams);

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
