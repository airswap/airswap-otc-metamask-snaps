import styled from 'styled-components';

export const ReviewScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 2rem;
  gap: 1.5rem;
  border-radius: 3px;

  font-size: 16px;
`;

export const ReviewHeadline = styled.h1`
  text-align: center;
  font-size: 42px;
`;

export const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
