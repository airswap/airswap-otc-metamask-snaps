import styled from 'styled-components';

import { RadixSelect } from '../components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 2rem;
  border-radius: 3px;
  border: solid gray 1px;
  background: black;
  font-size: 14px;
`;

const HorizontalFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const SubHeading = styled.h3`
  font-size: 18px;
`;

const HeaderInputContainer = styled.div`
  display: flex;
  place-items: center;
  padding: 0.5rem;
  border: solid gray 1px;
  border-radius: 10px;
`;

const TokenSelectorsContainer = styled.div`
  width: 100%;
  background: darkgray;
  padding: 0.5rem;
  border-radius: 3px;
  margin: 1rem 0;
`;

const ForContainer = styled.div`
  display: flex;
  width: fit;
  flex-direction: row;
  align-items: start;
  border: solid gray 1px;
`;

const hoursItems = [
  { value: 'minutes', label: 'MINUTES' },
  { value: 'hours', label: 'HOURS' },
  { value: 'days', label: 'DAYS' },
  { value: 'weeks', label: 'WEEKS' },
];

const forItems = [
  { value: 'anyone', label: 'ANYONE' },
  { value: 'hours', label: 'Hours' },
];

export const SwapWidget = () => {
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
          />
        </HeaderInputContainer>
      </HorizontalFlexBox>
      <TokenSelectorsContainer>
        <span>from</span>
        <br />
        <span>to</span>
      </TokenSelectorsContainer>
      <ForContainer>
        For
        <RadixSelect ariaLabel="for" placeholder="ANYONE" items={forItems} />
      </ForContainer>
    </Container>
  );
};
