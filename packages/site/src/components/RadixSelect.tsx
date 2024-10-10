// eslint-disable-next-line import/no-extraneous-dependencies
import * as Select from '@radix-ui/react-select';

type SelectItem = {
  value: string;
  label: string;
};

type SelectProps = {
  ariaLabel: string;
  placeholder: string;
  items: SelectItem[];
};

export const RadixSelect = ({ ariaLabel, placeholder, items }: SelectProps) => {
  return (
    <Select.Root>
      <Select.Trigger aria-label={ariaLabel}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            {items.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
