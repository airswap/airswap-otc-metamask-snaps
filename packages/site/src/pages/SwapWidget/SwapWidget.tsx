import { Button, RadixSelect, TextInput } from '../../components';
import { useSwapStore } from '../../store/SwapStore';
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
  TokenSelectorsContainer,
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
            <TextInput
              type="number"
              placeholder="1"
              defaultValue={1}
              onTextChange={handleDurationLength}
            />
          </DurationContainer>
          <RadixSelect
            ariaLabel="hours"
            placeholder="HOURS"
            items={hoursItems}
            onSelectChange={handleDurationUnits}
          />
        </HeaderInputContainer>
      </HorizontalFlexBox>
      <TokenSelectorsContainer>
        <div>***placeholder***</div>
      </TokenSelectorsContainer>
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
