import {
  NumberInput,
  RadixSelect,
  TextInput,
  SwapButton,
} from '../../components';
import type { DurationUnits, TakerTypeValues } from '../../stores/SwapStore';
import { useSwapStore } from '../../stores/SwapStore';
import { FromToken } from '../TokenSelectContainers/FromToken';
import { ToToken } from '../TokenSelectContainers/ToToken';
import {
  ButtonWrapper,
  Container,
  DurationContainer,
  ExpiryContainer,
  ForContainer,
  HeaderInputContainer,
  HorizontalFlexBox,
  InputWrapper,
  SelectLabel,
  SelectLabelExpiresIn,
  SelectLabelFor,
  SelectWrapper,
} from './SwapWidgetStyles';

const hoursItems = [
  { value: 'MINUTES', label: 'MINUTES' },
  { value: 'HOURS', label: 'HOURS' },
  { value: 'DAYS', label: 'DAYS' },
  { value: 'WEEKS', label: 'WEEKS' },
];

const takerItems = [
  { value: 'anyone', label: 'Anyone' },
  { value: '0x...', label: 'Specific Taker' }, // Use a generic placeholder for `0x` address
];

export const SwapWidget = () => {
  const {
    takerType,
    takerAddress,
    durationLength,
    durationUnits,
    setTakerType,
    setTakerAddress,
    setDurationLength,
    setDurationUnits,
  } = useSwapStore();

  return (
    <Container>
      <FromToken />
      <ToToken />
      {/* wrapper around 'for' and 'expires in' containers */}
      <HorizontalFlexBox>
        <ForContainer>
          <SelectLabelFor>For</SelectLabelFor>
          <SelectWrapper>
            <RadixSelect
              ariaLabel="for"
              placeholder="anyone"
              value={takerType}
              items={takerItems}
              onSelectChange={(value: string) => {
                // Handle `anyone` or `0x...` address
                if (value === 'anyone' || value.startsWith('0x')) {
                  setTakerType(value as TakerTypeValues);
                  if (value === 'anyone') {
                    setTakerAddress(undefined); // Clear taker address for `anyone`
                  }
                }
              }}
            />
          </SelectWrapper>
        </ForContainer>

        {/* duration container */}
        <ExpiryContainer>
          <HeaderInputContainer>
            <SelectLabelExpiresIn>Expires In</SelectLabelExpiresIn>
            <DurationContainer>
              <NumberInput
                placeholder="1"
                value={durationLength}
                onTextChange={(value) => {
                  if (!Number.isNaN(value)) {
                    setDurationLength(value);
                  }
                }}
              />
            </DurationContainer>
            <SelectWrapper>
              <RadixSelect
                ariaLabel="hours"
                placeholder="HOURS"
                value={durationUnits}
                items={hoursItems}
                onSelectChange={(value: string) =>
                  setDurationUnits(value as DurationUnits)
                }
              />
            </SelectWrapper>
          </HeaderInputContainer>
        </ExpiryContainer>
      </HorizontalFlexBox>

      <InputWrapper isHidden={takerType === 'anyone'}>
        <TextInput
          placeholder="Enter taker address or ENS"
          defaultValue={takerAddress}
          onTextChange={setTakerAddress}
        />
      </InputWrapper>

      <ButtonWrapper>
        <SwapButton label="back" onClick={() => null} />
        <SwapButton label="review" onClick={() => null} />
      </ButtonWrapper>
    </Container>
  );
};
