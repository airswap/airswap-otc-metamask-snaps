import { SwapButton } from '../../components';
// import { compressFullOrderURL } from '../../utils/compressFullOrderERC20';
import { useSwapStore } from '../../stores';
import {
  ActionButtonsBox,
  FromToTokenBox,
  HorizontalBox,
  SignedOrderScreenContainer,
  SpecifiedTakerAndExpiryBox,
  VerbSpan,
  VerticalBox,
} from './SignedOrderScreenStyles';

export const SignedOrderScreen = () => {
  const { fromToken, fromAmount, toToken, toAmount, takerAddress, expiry } =
    useSwapStore();
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
      <h3>Order</h3>
      <FromToTokenBox>
        <VerticalBox>
          <VerbSpan>From</VerbSpan>
          <span>{fromToken}</span>
        </VerticalBox>
        <HorizontalBox>{fromAmount?.toString() ?? 0}</HorizontalBox>
      </FromToTokenBox>
      <FromToTokenBox>
        <VerticalBox>
          <VerbSpan>To</VerbSpan>
          <span>{toToken}</span>
        </VerticalBox>
        <VerticalBox>{toAmount?.toString()}</VerticalBox>
      </FromToTokenBox>
      <SpecifiedTakerAndExpiryBox>
        <HorizontalBox>
          <VerbSpan>For: {takerAddress ?? 'Anyone'}</VerbSpan>
        </HorizontalBox>
        <HorizontalBox>Expires in {expiry}</HorizontalBox>
      </SpecifiedTakerAndExpiryBox>
      <HorizontalBox>
        <VerbSpan>
          {/* FIXME: remove placeholders and add conversioin rate */}1{' '}
          {fromToken} = 333.333{toToken}
        </VerbSpan>
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
