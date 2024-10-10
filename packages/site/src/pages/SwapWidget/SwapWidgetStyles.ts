import styled from 'styled-components';

type InputWrapperProps = {
  isHidden: boolean;
};

export const Container = styled.div`
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

export const HorizontalFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const SubHeading = styled.h3`
  font-size: 18px;
`;

export const HeaderInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const SelectLabel = styled.span`
  padding: 1rem;
  border: solid gray 1px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const DurationContainer = styled.div`
  width: 4rem;
  border: solid gray 1px;
`;

export const TokenSelectorsContainer = styled.div`
  width: 100%;
  background: #181228;
  padding: 0.5rem;
  border: #1a1e25 solid 1px;
  border-radius: 2px;
  margin: 1rem 0;
`;

export const ForContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  width: 100%;
  margin: 2rem 0;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 2rem;
`;
