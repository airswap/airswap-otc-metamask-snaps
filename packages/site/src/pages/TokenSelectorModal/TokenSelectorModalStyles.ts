import styled from 'styled-components';

export const StyledDialog = styled.dialog`
  width: 500px;
  border: none;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  background-color: #0e1b37;
  color: #ffffff;

  &::backdrop {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(6px);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.5rem;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.25rem;
  }
`;

export const TokenList = styled.div`
  max-height: 250px;
  overflow-y: auto;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;

  span {
    color: #798bad;
    font-weight: bold;
  }
`;

export const TokenItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #243659;
  }

  span {
    color: #ffffff;
    font-size: 1rem;
  }
`;

export const EditCustomTokensButton = styled.button`
  display: flex;
  width: 50%;
  place-content: center;
  align-items: center;
  margin: auto;
  border: none;
  border-radius: 8px;
  background-color: #2b71ff;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  font-weight: medium;

  &:hover {
    background-color: #2563eb;
    border: none;
  }
`;
