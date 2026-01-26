import { StepsProps as AntStepProps, Steps as AntSteps } from 'antd';
import { FC } from 'react';
interface StepsProps extends AntStepProps {
    colorPrimary?: string;
}
type StepsComponent = FC<StepsProps> & {
    Step: typeof AntSteps.Step;
};
declare const Steps: StepsComponent;
export { Steps };
export type { StepsProps };
