import { InputFieldError, colors } from '@configs';

import { SelectProps } from '..';
import { Flex, Icon } from 'src/main';

export interface SelectSuffixProps extends Pick<SelectProps<any>, 'disabled' | 'loading'> {
  isHovered?: boolean;
  isTabFocused?: boolean;
  disabled?: boolean;
  error?: InputFieldError;
}

const SelectSuffix = ({ isHovered, isTabFocused, disabled, error }: SelectSuffixProps) => {
  return (
    <Flex align="center" gap={8}>
      {error?.message && <Icon name="Alert" size={18} color={colors.negative} />}

      <Icon
        name="Chevron_Down"
        size={18}
        color={
          disabled
            ? colors.primary_light_2
            : isHovered || isTabFocused
              ? colors.primary_dark_1
              : colors.primary_dark_1
        }
      />
    </Flex>
  );
};

export { SelectSuffix };
