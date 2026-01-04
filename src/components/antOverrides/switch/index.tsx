import { colors } from '@configs';
import { Switch as AntSwitch, ConfigProvider, SwitchProps } from 'antd';
import { ThemeConfig } from 'antd/lib';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const SwitchThemeConfig: ThemeConfig = {
  components: {
    Switch: {
      handleBg: colors.light_1,
      colorPrimaryHover: colors.primary,
      colorTextTertiary: colors.light_1,
      trackMinWidthSM: 26,
    },
  },
};

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(({ className, ...props }, ref) => {
  return (
    <ConfigProvider theme={SwitchThemeConfig}>
      <AntSwitch ref={ref} {...props} className={twMerge('bg-light-7', className)} />
    </ConfigProvider>
  );
});

export { Switch };
