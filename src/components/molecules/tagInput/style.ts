import { ThemeConfig } from 'antd';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { SelectProps } from '../select/types';

export const CustomizedAntSelectTagConfig: ThemeConfig = {
  components: {
    Select: {
      multipleItemBg: colors.light_1,
      multipleItemBorderColor: colors.primary_light_3,
      multipleItemBorderColorDisabled: colors.primary_light_3,
      multipleItemColorDisabled: colors.negative,
      multipleItemHeight: 30,
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
  size,
  error,
  disabled,
  isTabFocused,
}: {
  size: SelectProps<any>['size'];
  error?: boolean;
  disabled: SelectProps<any>['disabled'];
  isTabFocused: boolean;
}) => {
  const className = twMerge(
    `min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 `,
    '[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent',
    disabled && '!bg-light-6 !border-light-6',
    error && 'border-negative hover:border-negative-dark-1 ',
    isTabFocused && `border-[2px] border-primary-dark-1`,
  );

  if (size === 'medium') {
    return twMerge('', className);
  }
  return twMerge('h-[34px]', className);
};
