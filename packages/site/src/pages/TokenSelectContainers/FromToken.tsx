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

export const FromToken = ({ openModal }: { openModal: () => void }) => {
  const { setFromAmount, fromToken } = useSwapStore();

  return (
    <>
      <TokenContainer>
        <TokenImage src="" alt="" />
        <TokenSelector>
          <VerticalBox>
            From
            <FromTokenSpan onClick={openModal}>
              {fromToken ?? 'ETH'}
            </FromTokenSpan>
          </VerticalBox>
        </TokenSelector>
        <AmountWrapper>
          <NumberInput placeholder="0.00" onTextChange={setFromAmount} />
        </AmountWrapper>
      </TokenContainer>
    </>
  );
};
