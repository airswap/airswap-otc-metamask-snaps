import styled from 'styled-components';

export const TokenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  font-size: 18px;
  border: solid #34425c 1px;
  border-radius: 10px;
  background: #13203d;
  color: #798bad;
  font-weight: semibold;
`;

export const TokenImage = styled.img`
  border: solid white 1px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: solid #34425c 2px;
`;

export const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FromTokenSpan = styled.span`
  color: white;
`;

export const TokenSelector = styled.div`
  display: flex;
  width: 50%;
`;

export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
