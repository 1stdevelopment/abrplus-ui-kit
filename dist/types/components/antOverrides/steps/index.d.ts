import { StepsProps, Steps as AntSteps } from 'antd';
import { FC } from 'react';
type StepsComponent = FC<StepsProps> & {
    Step: typeof AntSteps.Step;
};
declare const Steps: StepsComponent;
export { Steps };
export type { StepsProps };
