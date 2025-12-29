import { ThemeConfig } from 'antd';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

export const CustomizedAntSelectConfig: ThemeConfig = {
  components: {
    Select: {
      multipleItemBg: colors.light_1,
      multipleItemBorderColor: colors.primary_light_3,
      multipleItemBorderColorDisabled: colors.primary_light_3,
      multipleItemColorDisabled: colors.negative,
      multipleItemHeight: 20,
      multipleItemHeightLG: 20,
      multipleSelectorBgDisabled: colors.light_1,
      optionActiveBg: colors.light_1,
      optionFontSize: 20,
      optionHeight: 20,
      optionPadding: 0,
      optionSelectedBg: colors.white_ff,
      singleItemHeightLG: 20,
      zIndexPopup: 20,
      colorTextPlaceholder: colors.primary_light_3,
    },
  },
};

export const generateSelectClassNames = ({
  size = 'medium',
  error,
  disabled,
  isTabFocused,
}: {
  size: 'small' | 'medium' | 'large';
  error?: boolean;
  disabled: boolean;
  isTabFocused: boolean;
}) => {
  const extraOverrides: Record<'small' | 'medium' | 'large', string> = {
    small: 'h-[34px] [&_input]:!h-[32px]',
    medium: 'h-[40px] [&_input]:!h-[38px]',
    large: 'h-[46px] [&_input]:!h-[44px]',
  };

  return twMerge(
    `min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 `,
    '[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent',
    extraOverrides[size],
    disabled && '!bg-light-6 !border-light-6',
    error && 'border-negative hover:border-negative-dark-1 ',
    isTabFocused && `border-[2px] border-primary-dark-1`,
  );
};
