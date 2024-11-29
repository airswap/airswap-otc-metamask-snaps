import { RadixSelect, NumberInput } from '../../components';
import { useSwapStore } from '../../stores/SwapStore';
import {
  AmountWrapper,
  TokenContainer,
  TokenSelector,
} from './FromTokenStyles';

export const FromToken = () => {
  const { setFromToken, setFromAmount } = useSwapStore();
  return (
    <TokenContainer>
      <TokenSelector>
        From
        <RadixSelect
          ariaLabel="from-token"
          placeholder="ETH"
          items={[{ value: 'ether', label: 'ether' }]}
          onSelectChange={(value) => setFromToken(value)}
        />
      </TokenSelector>
      <AmountWrapper>
        <NumberInput placeholder="0.00" onTextChange={setFromAmount} />
      </AmountWrapper>
    </TokenContainer>
  );
};
