import { RadixSelect, NumberInput } from '../../components';
import { useSwapStore } from '../../stores/SwapStore';
import {
  AmountWrapper,
  ToTokenContainer,
  TokenSelector,
} from './ToTokenStyles';

export const ToToken = () => {
  const { setToToken, setToAmount } = useSwapStore();
  return (
    <ToTokenContainer>
      <TokenSelector>
        To
        <RadixSelect
          ariaLabel="to-token"
          placeholder="ETH"
          items={[{ value: 'ether', label: 'ether' }]}
          onSelectChange={(value) => setToToken(value)}
        />
      </TokenSelector>
      <AmountWrapper>
        <NumberInput placeholder="0.00" onTextChange={setToAmount} />
      </AmountWrapper>
    </ToTokenContainer>
  );
};
