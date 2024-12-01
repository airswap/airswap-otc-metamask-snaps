import { NumberInput } from '../../components';
import { useSwapStore } from '../../stores/SwapStore';
import {
  AmountWrapper,
  FromTokenSpan,
  TokenContainer,
  TokenImage,
  TokenSelector,
  VerticalBox,
} from './FromTokenStyles';

export const ToToken = ({ openModal }: { openModal: () => void }) => {
  const { toToken, setToAmount } = useSwapStore();
  return (
    <TokenContainer>
      <TokenImage src="" alt="" />
      <TokenSelector>
        <VerticalBox>
          From
          <FromTokenSpan onClick={openModal}>{toToken ?? 'ETH'}</FromTokenSpan>
        </VerticalBox>
      </TokenSelector>
      <AmountWrapper>
        <NumberInput placeholder="0.00" onTextChange={setToAmount} />
      </AmountWrapper>
    </TokenContainer>
  );
};
