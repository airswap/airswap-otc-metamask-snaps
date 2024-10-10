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

const forItems = [
  { value: 'anyone', label: 'ANYONE' },
  { value: 'specificTaker', label: 'SPECIFIC TAKER' },
];

export const SwapWidget = () => {
  const { forAddress, setForAddress, setDuration } = useSwapStore();

  const handleDurationChange = (value: string) => {
    setDuration(value);
  };

  const handleOnForChange = (value: 'anyone' | 'specificTaker') => {
    setForAddress(value);
  };

  return (
    <Container>
      <HorizontalFlexBox>
        <SubHeading>Make</SubHeading>
        <HeaderInputContainer>
          <SelectLabel>Expires In</SelectLabel>
          <DurationContainer>
            <TextInput type="number" placeholder="1" />
          </DurationContainer>
          <RadixSelect
            ariaLabel="hours"
            placeholder="HOURS"
            items={hoursItems}
            onSelectChange={handleDurationChange}
          />
        </HeaderInputContainer>
      </HorizontalFlexBox>
      <TokenSelectorsContainer>
        <span>from</span>
        <br />
        <span>to</span>
      </TokenSelectorsContainer>
      <ForContainer>
        <SelectLabel>For</SelectLabel>
        <RadixSelect
          ariaLabel="for"
          placeholder="ANYONE"
          items={forItems}
          onSelectChange={handleOnForChange}
        />
      </ForContainer>
      <InputWrapper isHidden={forAddress}>
        <TextInput placeholder="Enter taker address or ENS" />
      </InputWrapper>
      <ButtonWrapper>
        <Button label={'review'} />
      </ButtonWrapper>
    </Container>
  );
};
