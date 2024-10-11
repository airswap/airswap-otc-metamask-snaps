import { RadixSelect, TextInput } from '../../components';
import { useSwapStore } from '../../store/SwapStore';
import {
  AmountWrapper,
  FromTokenContainer,
  TokenSelector,
} from './FromTokenStyles';

// type FromTokenProps = {};

export const FromToken = () => {
  const { setFromToken, setFromAmount } = useSwapStore();
  return (
    <FromTokenContainer>
      <TokenSelector>
        From
        <RadixSelect
          ariaLabel="from-token"
          placeholder="ETH"
          items={[{ value: 'ether', label: 'ether' }]}
          onSelectChange={setFromToken}
        />
      </TokenSelector>
      <AmountWrapper>
        <TextInput
          type="number"
          placeholder="0.00"
          onTextChange={setFromAmount}
        />
      </AmountWrapper>
    </FromTokenContainer>
  );
};
