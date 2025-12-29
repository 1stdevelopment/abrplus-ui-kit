import { FlexProps } from 'antd';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';
import { Flex } from '../../antOverrides/flex';
import { Text, TextProps } from '../../antOverrides/text';

export interface PopoverLinkProps extends FlexProps, Pick<TextProps, 'size' | 'color' | 'weight'> {}

const PopoverLink = ({ children, size, color, weight, className, ...rest }: PopoverLinkProps) => {
  return (
    <Flex
      className={twMerge('border-secondary items-center border-b border-dashed', className)}
      {...rest}
    >
      <Text
        className={'cursor-pointer select-none'}
        color={color || colors.secondary}
        size={size || 16}
        weight={weight || 'medium'}
      >
        {children}
      </Text>
    </Flex>
  );
};

export { PopoverLink };
