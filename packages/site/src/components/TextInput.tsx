import React, { useState } from 'react';
import styled from 'styled-components';

type TextInputProps = {
  type?: 'text' | 'number';
  placeholder: string;
  defaultValue?: string | number;
};

const Input = styled.input`
  display: flex;
  width: 100%;
  border: solid #1a1e25 2px;
  border-radius: 2px;
  padding: 1rem;
  background: #181228;
  color: white;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const TextInput = ({
  type = 'text',
  placeholder,
  defaultValue,
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string | number>(
    defaultValue ?? (type === 'number' ? 1 : ''),
  );

  // eslint-disable-next-line id-length
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
