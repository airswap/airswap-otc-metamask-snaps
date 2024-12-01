import styled from 'styled-components';

export const StyledDialog = styled.dialog`
  width: 500px;
  border: solid #34425c 0.5px;
  border-radius: 14px;
  padding: 4rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  background-color: #0e1b37;
  color: #ffffff;

  &::backdrop {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(6px);
  }
`;

export const CloseButton = styled.button`
  display: flex;
  justify-self: end;
  background: transparent;
  color: #34425c;
  cursor: pointer;
  font-size: 20px;
  border: solid #34425c 0.5px;
  border-radius: 50%;
  padding: 1.25rem;
  margin-top: -2rem;
  margin-right: -2rem;

  &:hover {
    bordder: solid white 0.5px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SelectTokenHeader = styled.h3`
  font-size: 30px;
  margin-top: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const TokenList = styled.div`
  max-height: 250px;
  overflow-y: auto;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;

  span {
    color: #34425c;
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

export const OutlineDiv = styled.div`
  display: flex;
  border: solid #34425c 0.5px;
  padding: 2rem;
  font-size: 12px;
`;

export const EditCustomTokensButton = styled.button`
  display: flex;
  width: 50%;
  place-content: center;
  align-items: center;
  margin: 3rem auto 0 auto;
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
