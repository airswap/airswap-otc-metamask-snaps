import { SwapButton } from '../../components/Buttons';
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
  return (
    <SignedOrderScreenContainer>
      <FromTokenBox>
        <VerticalBox>from {fromToken}</VerticalBox>
        <VerticalBox>{fromTokenAmount?.toString() ?? 0}</VerticalBox>
      </FromTokenBox>
      <ToTokenBox>
        <VerticalBox>to {toToken}</VerticalBox>
        <VerticalBox>{toTokenAmount?.toString() ?? 0}</VerticalBox>
      </ToTokenBox>
      <SpecifiedTakerAndExpiryBox>
        <HorizontalBox>for {specifiedTaker}</HorizontalBox>
        <HorizontalBox>Expires in {expiry}</HorizontalBox>
      </SpecifiedTakerAndExpiryBox>
      <HorizontalBox>
        1 {fromToken} = 333.333{toToken}
      </HorizontalBox>
      <ActionButtonsBox>
        <SwapButton label="Cancel Order" />
        <SwapButton label="Copy Link" />
      </ActionButtonsBox>
    </SignedOrderScreenContainer>
  );
};
