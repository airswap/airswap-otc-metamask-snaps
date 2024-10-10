import styled from 'styled-components';

type TextInputProps = {
  placeholder: string;
};

const Input = styled.input`
  display: flex;
  width: 100%;
  border: solid #1a1e25 2px;
  border-radius: 2px;
  padding: 1rem;
  background: #181228;
`;

export const TextInput = ({ placeholder }: TextInputProps) => {
  return <Input placeholder={placeholder}></Input>;
};
