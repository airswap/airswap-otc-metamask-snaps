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
  width: 100%;
  border: solid #1a1e25 2px;
  border-radius: 10px;
  padding: 1rem;
  background: #13203d;
  color: white;

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
