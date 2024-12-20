import type { ChangeEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

type TextInputProps = {
  placeholder: string;
  defaultValue?: string | undefined;
  onTextChange: (value: string | undefined) => void;
};

const Input = styled.input`
  display: flex;
  width: 100%;
  border: solid #34425c 1px;
  border-radius: 10px;
  padding: 1rem;
  background: #13203d;
  color: white;
`;

export const TextInput = ({
  placeholder,
  defaultValue,
  onTextChange,
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string | undefined>(
    defaultValue,
  );

  // eslint-disable-next-line id-length
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || undefined;
    setInputValue(value);
    onTextChange(value);
  };

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={inputValue ?? ''}
      onChange={handleInputChange}
    />
  );
};
