import { SwapButton } from '../../components/Buttons';
// import { compressFullOrderURL } from '../../utils/compressFullOrderERC20';
import {
  ActionButtonsBox,
  FromTokenBox,
  HorizontalBox,
  SignedOrderScreenContainer,
  SpecifiedTakerAndExpiryBox,
  ToTokenBox,
  VerticalBox,
} from './SignedOrderScreenStyles';

type SignedOrderScreenType = {
  fromToken: `0x${string}` | undefined;
  toToken: `0x${string}` | undefined;
  fromTokenAmount: bigint | undefined;
  toTokenAmount: bigint | undefined;
  specifiedTaker: `0x${string}` | undefined;
  expiry: number | undefined;
};

export const SignedOrderScreen = ({
  fromToken,
  toToken,
  fromTokenAmount,
  toTokenAmount,
  specifiedTaker,
  expiry,
}: SignedOrderScreenType) => {
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
        <HorizontalBox>{fromTokenAmount?.toString() ?? 0}</HorizontalBox>
      </FromTokenBox>
      <ToTokenBox>
        <VerticalBox>
          <span>To</span>
          <span>{toToken ?? 'USDC'}</span>
        </VerticalBox>
        <VerticalBox>{toTokenAmount?.toString() ?? 0}</VerticalBox>
      </ToTokenBox>
      <SpecifiedTakerAndExpiryBox>
        <HorizontalBox>For {specifiedTaker ?? 'Anyone'}</HorizontalBox>
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
