import styled from 'styled-components';

type SwapButtonProps = {
  label: string;
  onClick: () => void;
};

const StyledSwapButton = styled.button`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #2c70ff;
  text-transform: uppercase;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: #0c5cff;
    border: solid 1px #3779f7;
  }
`;

export const SwapButton = ({ label, onClick }: SwapButtonProps) => {
  return <StyledSwapButton onClick={onClick}>{label}</StyledSwapButton>;
};
