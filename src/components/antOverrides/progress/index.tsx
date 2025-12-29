import { Progress as AntProgress, ProgressProps } from 'antd';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

const Progress = ({ className, ...props }: ProgressProps) => {
  return (
    <AntProgress
      strokeColor={colors.secondary}
      {...props}
      className={twMerge('bg-light-7', className)}
    />
  );
};

export { Progress };
