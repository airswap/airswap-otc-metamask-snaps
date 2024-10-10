import { useState } from 'react';

import { RadixSelect, TextInput } from '../../components';
import {
  Container,
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
  { value: 'specificTake', label: 'SPECIFIC TAKER' },
];

export const SwapWidget = () => {
  const [duration, setDuration] = useState<string>('hours');
  const [isForAnyone, setIsForAnyone] = useState(true);

  const handleDurationChange = (value: string) => {
    setDuration(value);
  };

  const handleOnForChange = (value: string) => {
    if (value === 'anyone') {
      setIsForAnyone(true);
    } else {
      setIsForAnyone(false);
    }
  };

  return (
    <Container>
      <HorizontalFlexBox>
        <SubHeading>Make</SubHeading>
        <HeaderInputContainer>
          <div>Expires In</div>
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
      <InputWrapper isHidden={isForAnyone}>
        <TextInput placeholder="Enter taker address or ENS" />
      </InputWrapper>
    </Container>
  );
};
