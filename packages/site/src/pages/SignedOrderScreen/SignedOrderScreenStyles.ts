import styled from 'styled-components';

export const SignedOrderScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1.5rem;
`;

export const StyledH3 = styled.h3`
  font-size: 38px;
  margin: 1rem;
`;

export const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem 1rem;
`;

export const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FromToTokenBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #13203c;
  border: #34425c solid 1.5px;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  color: white;
  font-weight: 800;
  font-size: 20px;
`;

export const VerbSpan = styled.span`
  color: #798bad;
  font-weight: 600;
  font-size: 16px;
`;

export const TokenDataSpan = styled.span`
  font-weight: 900;
`;

export const TokenImageContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 1rem;
  border: solid #798bad 0.5px;
  border-radius: 50%;
`;

export const SpecifiedTakerAndExpiryBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #13203c;
  border: #34425c solid 1.5px;
  border-radius: 12px;
  padding: 1rem;
`;

export const ActionButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1rem;
  gap: 1rem;
`;

export const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
