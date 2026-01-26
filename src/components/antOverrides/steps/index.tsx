import { StepsProps as AntStepProps, Steps as AntSteps, ConfigProvider, ThemeConfig } from 'antd';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface StepsProps extends AntStepProps {
  colorPrimary?: string;
}

type StepsComponent = FC<StepsProps> & {
  Step: typeof AntSteps.Step;
};

const stepTheme: ThemeConfig = {
  components: {
    Steps: {
      iconFontSize: 18,
      iconTop: 1,
    },
  },
};

const Steps: StepsComponent = ({ colorPrimary, rootClassName, ...props }) => {
  const mergedTheme: ThemeConfig = {
    ...stepTheme,
    token: {
      ...(stepTheme.token || {}),
      ...(colorPrimary ? { colorPrimary } : {}),
    },
  };

  return (
    <ConfigProvider theme={mergedTheme}>
      <AntSteps
        rootClassName={twMerge('[&_.ant-steps-item-finish_.ant-steps-icon]:top-1', rootClassName)}
        {...props}
      />
    </ConfigProvider>
  );
};

export { Steps };

Steps.Step = AntSteps.Step;
export type { StepsProps };
