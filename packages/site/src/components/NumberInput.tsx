import { useState } from 'react';
import styled from 'styled-components';

type NumberInputProps = {
  value?: number;
  placeholder: string;
  onTextChange: (value: number) => void;
};

const Input = styled.input`
  display: flex;
  text-align: end;
  border: none;
  padding: 1rem;
  background: transparent;
  // color: #5a709d;
  color: white;
  width: 100%;
  font-size: 28px;
  font-weight: 500;

  &::placeholder {
    color: #5a709d;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const NumberInput = ({
  placeholder,
  value,
  onTextChange,
}: NumberInputProps) => {
  const [inputValue, setInputValue] = useState<number | undefined>(value);

  // eslint-disable-next-line id-length
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value); // Renamed variable to avoid shadowing
    if (Number.isNaN(newValue)) {
      setInputValue(undefined);
    } else {
      setInputValue(newValue);
      onTextChange(newValue);
    }
  };

  return (
    <Input
      type="number"
      min={0}
      placeholder={placeholder}
      value={inputValue ?? ''}
      onChange={handleInputChange}
    />
  );
};
