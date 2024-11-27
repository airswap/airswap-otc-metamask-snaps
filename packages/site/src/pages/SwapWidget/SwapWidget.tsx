import {
  NumberInput,
  RadixSelect,
  TextInput,
  SwapButton,
} from '../../components';
import type { DurationUnits } from '../../stores/SwapStore';
import { useSwapStore } from '../../stores/SwapStore';
import { FromToken } from '../FromToken/FromToken';
import { ToToken } from '../ToToken/ToToken';
import {
  ButtonWrapper,
  Container,
  DurationContainer,
  ForContainer,
  HeaderInputContainer,
  HorizontalFlexBox,
  InputWrapper,
  SelectLabel,
  SubHeading,
} from './SwapWidgetStyles';

const hoursItems = [
  { value: 'minutes', label: 'MINUTES' },
  { value: 'hours', label: 'HOURS' },
  { value: 'days', label: 'DAYS' },
  { value: 'weeks', label: 'WEEKS' },
];

const takerItems = [
  { value: 'anyone', label: 'ANYONE' },
  { value: 'specificTaker', label: 'SPECIFIC TAKER' },
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
      <HorizontalFlexBox>
        <SubHeading>Make</SubHeading>
        <HeaderInputContainer>
          <SelectLabel>Expires In</SelectLabel>
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
          <RadixSelect
            ariaLabel="hours"
            placeholder="HOURS"
            value={durationUnits}
            items={hoursItems}
            onSelectChange={(value: string) =>
              setDurationUnits(value as DurationUnits)
            }
          />
        </HeaderInputContainer>
      </HorizontalFlexBox>
      <FromToken />
      <ToToken />
      <ForContainer>
        <SelectLabel>For</SelectLabel>
        <RadixSelect
          ariaLabel="for"
          placeholder="ANYONE"
          value={takerType}
          items={takerItems}
          onSelectChange={(value) => {
            if (value === 'anyone' || value.startsWith('0x')) {
              setTakerType(value as 'anyone' | `0x${string}`);
              if (value === 'anyone') {
                setTakerAddress(undefined);
              }
            }
          }}
        />
      </ForContainer>
      <InputWrapper isHidden={takerType === 'anyone'}>
        <TextInput
          placeholder="Enter taker address or ENS"
          defaultValue={takerAddress}
          onTextChange={setTakerAddress}
        />
      </InputWrapper>

      <ButtonWrapper>
        <SwapButton label="review" onClick={() => null} />
      </ButtonWrapper>
    </Container>
  );
};
