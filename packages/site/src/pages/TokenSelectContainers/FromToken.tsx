import { NumberInput } from '../../components';
import { useSwapStore } from '../../stores/SwapStore';
import {
  AmountWrapper,
  FromTokenSpan,
  TokenContainer,
  TokenImage,
  TokenSelector,
  VerbSpan,
  VerticalBox,
} from './FromTokenStyles';

export const FromToken = ({ openModal }: { openModal: () => void }) => {
  const { setFromAmount, fromToken } = useSwapStore();

  return (
    <>
      <TokenContainer>
        <TokenImage src="" alt="" />
        <TokenSelector>
          <VerticalBox onClick={openModal}>
            <VerbSpan>From</VerbSpan>
            <FromTokenSpan>{fromToken ?? 'ETH'}</FromTokenSpan>
          </VerticalBox>
        </TokenSelector>
        <AmountWrapper>
          <NumberInput placeholder="0.00" onTextChange={setFromAmount} />
        </AmountWrapper>
      </TokenContainer>
    </>
  );
};
