import styled from 'styled-components';

type InputWrapperProps = {
  isHidden: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 2rem;
  font-size: 16px;
`;

export const HorizontalFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
`;

export const ForContainer = styled.div`
  display: flex;
  width: 100%;
  border: solid #34425c 1px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ExpiryContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const HeaderInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: solid #34425c 1px;
  border-radius: 10px;
`;

export const SelectLabelFor = styled.span`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  color: #798bad;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const SelectLabelExpiresIn = styled.span`
  display: flex;
  flex-direction: row;
  padding-left: 2rem;
  padding-right: 2rem;
  color: #798bad;
  border-right: solid #34425c 1px;
`;

export const DurationContainer = styled.div`
  display: flex;
`;

export const SelectWrapper = styled.div`
  border-left: solid #34425c 1px;
  padding: 1rem;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  width: 100%;
  margin: 2rem 0;
  background: #0e1b37;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  margin: 2rem;
`;
