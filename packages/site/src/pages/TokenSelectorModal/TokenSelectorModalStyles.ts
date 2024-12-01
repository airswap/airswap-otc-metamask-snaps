import styled from 'styled-components';

export const StyledDialog = styled.dialog`
  width: 400px;
  border: none;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  color: #333;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const TokenList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TokenItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c62828;
  }
`;
