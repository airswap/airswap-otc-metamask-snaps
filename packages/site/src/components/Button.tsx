import styled from 'styled-components';

type ButtonProps = {
  label: string;
};

const StyledButton = styled.button`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #2c70ff;
  text-transform: uppercase;
  border-radius: 2px;
  border: none;

  &:hover {
    background-color: #0c5cff;
    border: solid 1px #3779f7;
  }
`;

export const Button = ({ label }: ButtonProps) => {
  return <StyledButton>{label}</StyledButton>;
};
