import { RadixSelect, NumberInput } from '../../components';
import { useSwapStore } from '../../stores/SwapStore';
import {
  AmountWrapper,
  TokenContainer,
  TokenImage,
  TokenSelector,
  VerticalBox,
} from './FromTokenStyles';

export const ToToken = () => {
  const { setToToken, setToAmount } = useSwapStore();
  return (
    <TokenContainer>
      <TokenImage src="" alt="" />
      <TokenSelector>
        <VerticalBox>
          To
          <RadixSelect
            ariaLabel="to-token"
            placeholder="ETH"
            items={[{ value: 'ether', label: 'ether' }]}
            onSelectChange={(value) => setToToken(value)}
          />
        </VerticalBox>
      </TokenSelector>
      <AmountWrapper>
        <NumberInput placeholder="0.00" onTextChange={setToAmount} />
      </AmountWrapper>
    </TokenContainer>
  );
};
