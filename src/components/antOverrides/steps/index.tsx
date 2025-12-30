import type { StepsProps } from 'antd';
import { Steps as AntSteps, ConfigProvider } from 'antd';
import type { FC } from 'react';

const stepTheme = {
  components: {},
};

type StepsComponent = FC<StepsProps> & {
  Step: typeof AntSteps.Step;
};

const Steps: StepsComponent = (props) => {
  return (
    <ConfigProvider theme={stepTheme}>
      <AntSteps {...props} />
    </ConfigProvider>
  );
};

Steps.Step = AntSteps.Step;

export { Steps };
export type { StepsProps };
