import { SwapButton } from '../../components';
// import { compressFullOrderURL } from '../../utils/compressFullOrderERC20';
import { useSwapStore } from '../../stores';
import {
  ActionButtonsBox,
  FromTokenBox,
  HorizontalBox,
  SignedOrderScreenContainer,
  SpecifiedTakerAndExpiryBox,
  ToTokenBox,
  VerticalBox,
} from './SignedOrderScreenStyles';

export const SignedOrderScreen = () => {
  const { fromToken, fromAmount, toToken, toAmount, takerAddress, expiry } =
    useSwapStore((state) => ({
      fromToken: state.fromToken,
      fromAmount: state.fromAmount,
      toToken: state.toToken,
      toAmount: state.toAmount,
      takerAddress: state.takerAddress,
      expiry: state.expiry,
    }));
  // const handleCopyLink = async () => {
  //   // FIXME: Replace `undefined` with actual values
  //   const compressedURL = compressFullOrderURL(undefined);
  //   if (compressedURL) {
  //     try {
  //       await navigator.clipboard.writeText(compressedURL);
  //       console.log('Link copied to clipboard!');
  //     } catch (error) {
  //       console.error('Failed to copy link to clipboard:', error);
  //     }
  //   } else {
  //     console.error('Compressed URL is undefined or invalid');
  //   }
  // };

  return (
    <SignedOrderScreenContainer>
      <FromTokenBox>
        <VerticalBox>
          <span>From</span>
          <span>{fromToken ?? 'WETH'}</span>
        </VerticalBox>
        <HorizontalBox>{fromAmount?.toString() ?? 0}</HorizontalBox>
      </FromTokenBox>
      <ToTokenBox>
        <VerticalBox>
          <span>To</span>
          <span>{toToken ?? 'USDC'}</span>
        </VerticalBox>
        <VerticalBox>{toAmount?.toString() ?? 0}</VerticalBox>
      </ToTokenBox>
      <SpecifiedTakerAndExpiryBox>
        <HorizontalBox>For {takerAddress ?? 'Anyone'}</HorizontalBox>
        <HorizontalBox>Expires in {expiry}</HorizontalBox>
      </SpecifiedTakerAndExpiryBox>
      <HorizontalBox>
        1 {fromToken} = 333.333{toToken}
      </HorizontalBox>
      <ActionButtonsBox>
        {/* FIXME: add cb function */}
        <SwapButton label="Cancel Order" onClick={() => null} />
        {/* FIXME: cb function should accept handleCopyLink. Need to troubleshoot handleCopyLink */}
        <SwapButton label="Copy Link" onClick={() => null} />
      </ActionButtonsBox>
    </SignedOrderScreenContainer>
  );
};
