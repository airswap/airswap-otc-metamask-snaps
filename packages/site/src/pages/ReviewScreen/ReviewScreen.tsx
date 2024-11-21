import { SwapButton } from '../../components/Buttons';
import {
  ReviewHeadline,
  ReviewScreenContainer,
  HorizontalBox,
  LineBreak,
  ActionButtonsBox,
} from './ReviewScreenStyles';

type ReviewScreenProps = {
  fromToken: `0x${string}` | undefined;
  toToken: `0x${string}` | undefined;
  fromTokenAmount: bigint | undefined;
  toTokenAmount: bigint | undefined;
  specifiedTaker: `0x${string}` | undefined;
  expiry: number | undefined;
};

export const ReviewScreen = ({
  fromToken,
  toToken,
  fromTokenAmount,
  toTokenAmount,
  specifiedTaker,
  expiry,
}: ReviewScreenProps) => {
  return (
    <ReviewScreenContainer>
      <ReviewHeadline>Review</ReviewHeadline>
      <HorizontalBox>
        <span>Send</span>
        <div>
          <span>{fromTokenAmount?.toString() ?? 0}</span>{' '}
          <span>{fromToken ?? 'WETH'}</span>
        </div>
      </HorizontalBox>
      <LineBreak />
      <HorizontalBox>
        <span>Receive</span>
        <div>
          <span>{toTokenAmount?.toString() ?? 0}</span>{' '}
          <span>{toToken ?? 'USDC'}</span>
        </div>
      </HorizontalBox>
      <LineBreak />
      <HorizontalBox>
        <span>For</span>
        <span>{specifiedTaker ?? 'anyone'}</span>
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
        {/* FIXME: import `protocolFee` from airswap */}
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
