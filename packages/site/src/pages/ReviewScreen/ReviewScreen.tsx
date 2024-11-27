import { SwapButton } from '../../components';
import { useSwapStore } from '../../stores/SwapStore';
import {
  ReviewHeadline,
  ReviewScreenContainer,
  HorizontalBox,
  LineBreak,
  ActionButtonsBox,
} from './ReviewScreenStyles';

export const ReviewScreen = () => {
  const fromToken = useSwapStore((state) => state.fromToken);
  const fromAmount = useSwapStore((state) => state.fromAmount);
  const toToken = useSwapStore((state) => state.toToken);
  const toAmount = useSwapStore((state) => state.toAmount);
  const takerAddress = useSwapStore((state) => state.takerAddress);
  const expiry = useSwapStore((state) => state.expiry);

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
