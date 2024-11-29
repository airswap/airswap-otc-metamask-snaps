import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';

const StyledTrigger = styled(Select.Trigger)`
  font-size: 12px;
  background: transparent;
  color: white;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const StyledContent = styled(Select.Content)`
  font-size: 12px;
  background: #13203d;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border: solid #34425c 1px;
  border-radius: 10px;
  padding: 1rem;
`;

const StyledItem = styled(Select.Item)`
  padding: 10px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #21396a;
  }
`;

type SelectItem = {
  value: string;
  label: string;
};

type SelectProps = {
  ariaLabel: string;
  placeholder: string;
  value?: string; // Add value prop
  items: SelectItem[];
  onSelectChange: (value: string) => void; // Ensure value is string
};

export const RadixSelect = ({
  ariaLabel,
  placeholder,
  value = '',
  items,
  onSelectChange,
}: SelectProps) => {
  return (
    <Select.Root value={value} onValueChange={onSelectChange}>
      <StyledTrigger aria-label={ariaLabel}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon />
      </StyledTrigger>

      <Select.Portal>
        <StyledContent>
          <Select.ScrollUpButton />
          <Select.Viewport>
            {items.map((item) => (
              <StyledItem key={item.value} value={item.value}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator />
              </StyledItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </StyledContent>
      </Select.Portal>
    </Select.Root>
  );
};
