import { Button, NumberInput, RadixSelect, TextInput } from '../../components';
import { useSwapStore } from '../../store/SwapStore';
import { FromToken } from '../FromToken/FromToken';
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
    setTakerType,
    setTakerAddress,
    setDurationLength,
    setDurationUnits,
  } = useSwapStore();

  const handleDurationLength = (value: number) => {
    setDurationLength(value);
  };

  const handleDurationUnits = (value: string) => {
    setDurationUnits(value);
  };

  const handleTakerType = (value: 'anyone' | 'specificTaker') => {
    setTakerType(value);
    if (value === 'anyone') {
      setTakerAddress(undefined);
    }
  };

  const handleTakerAddressChange = (value: string) => {
    setTakerAddress(value);
  };

  return (
    <Container>
      <HorizontalFlexBox>
        <SubHeading>Make</SubHeading>
        <HeaderInputContainer>
          <SelectLabel>Expires In</SelectLabel>
          <DurationContainer>
            <NumberInput placeholder="1" onTextChange={handleDurationLength} />
          </DurationContainer>
          <RadixSelect
            ariaLabel="hours"
            placeholder="HOURS"
            items={hoursItems}
            onSelectChange={handleDurationUnits}
          />
        </HeaderInputContainer>
      </HorizontalFlexBox>
      <FromToken />
      <FromToken />
      <ForContainer>
        <SelectLabel>For</SelectLabel>
        <RadixSelect
          ariaLabel="for"
          placeholder="ANYONE"
          items={takerItems}
          onSelectChange={handleTakerType}
        />
      </ForContainer>
      <InputWrapper isHidden={takerType !== 'specificTaker'}>
        <TextInput
          placeholder="Enter taker address or ENS"
          onTextChange={handleTakerAddressChange}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button label={'review'} />
      </ButtonWrapper>
    </Container>
  );
};
