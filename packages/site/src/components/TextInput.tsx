import React, { useState } from 'react';
import styled from 'styled-components';

type TextInputProps = {
  placeholder: string;
  defaultValue?: string;
  onTextChange: (value: string) => void;
};

const Input = styled.input`
  display: flex;
  width: 100%;
  border: solid #1a1e25 2px;
  border-radius: 2px;
  padding: 1rem;
  background: #181228;
  color: white;
`;

export const TextInput = ({
  placeholder,
  defaultValue = '',
  onTextChange,
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue);

  // eslint-disable-next-line id-length
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    onTextChange(value);
  };

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
