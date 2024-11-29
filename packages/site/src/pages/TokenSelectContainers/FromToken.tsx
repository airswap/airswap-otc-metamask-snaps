import { RadixSelect, NumberInput } from '../../components';
import { useSwapStore } from '../../stores/SwapStore';
import {
  AmountWrapper,
  TokenContainer,
  TokenImage,
  TokenSelector,
  VerticalBox,
} from './FromTokenStyles';

export const FromToken = () => {
  const { setFromToken, setFromAmount } = useSwapStore();
  return (
    <TokenContainer>
      <TokenImage src="" alt="" />
      <TokenSelector>
        <VerticalBox>
          From
          <RadixSelect
            ariaLabel="from-token"
            placeholder="ETH"
            items={[{ value: 'ether', label: 'ether' }]}
            onSelectChange={(value) => setFromToken(value)}
          />
        </VerticalBox>
      </TokenSelector>
      <AmountWrapper>
        <NumberInput placeholder="0.00" onTextChange={setFromAmount} />
      </AmountWrapper>
    </TokenContainer>
  );
};
