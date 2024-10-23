import styled from 'styled-components';

import { HeaderButtons } from './Buttons';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border?.default};
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <RightContainer>
        <HeaderButtons />
      </RightContainer>
    </HeaderWrapper>
  );
};
