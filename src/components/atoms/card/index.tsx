import { FlexProps } from 'antd';
import { twMerge } from 'tailwind-merge';
import { Flex } from '../../antOverrides/flex';

export interface CardProps extends FlexProps {}

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <Flex
      vertical
      className={twMerge('bg-white-ff card-shadow w-full rounded p-6', className)}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export { Card };
