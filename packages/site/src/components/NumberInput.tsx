import React, { useState } from 'react';
import styled from 'styled-components';

type NumberInputProps = {
  placeholder: string;
  onTextChange: (value: number) => void;
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
`;

export const NumberInput = ({
  placeholder,
  onTextChange,
}: NumberInputProps) => {
  const [inputValue, setInputValue] = useState<number | undefined>(undefined);

  // eslint-disable-next-line id-length
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setInputValue(value);
      onTextChange(value);
    }
  };

  return (
    <Input
      type="number"
      min={0}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
