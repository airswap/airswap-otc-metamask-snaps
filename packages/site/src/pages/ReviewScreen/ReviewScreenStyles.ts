import styled from 'styled-components';

export const ReviewScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 60%;
  gap: 1.5rem;
`;

export const ReviewHeadline = styled.h1`
  text-align: center;
  font-size: 42px;
`;

export const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const LineBreak = styled.hr`
  border: none;
  border-top: 0.5px solid white;
  width: 100%;
`;

export const ActionButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1rem;
  gap: 1rem;
`;
