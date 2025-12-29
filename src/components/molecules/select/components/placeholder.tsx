import { colors } from '@configs';
import { Text } from '@abrplus/ui';

import { SelectProps } from '..';

export interface SelectPlaceholderProps extends Pick<SelectProps<any>, 'placeholder' | 'disabled'> {
  isHovered?: boolean;
  isTabFocused?: boolean;
}

const SelectPlaceholder = ({
  placeholder,
  isHovered,
  disabled,
  isTabFocused,
}: SelectPlaceholderProps) => {
  return (
    <Text
      weight="normal"
      size={14}
      color={
        disabled
          ? colors.primary_light_2
          : isHovered || isTabFocused
            ? colors.primary_dark_1
            : colors.primary_light_3
      }
    >
      {placeholder}
    </Text>
  );
};

export { SelectPlaceholder };
