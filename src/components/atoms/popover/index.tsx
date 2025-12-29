import { Popover as AntPopover, PopoverProps as AntPopoverProps } from 'antd';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Flex } from '../../antOverrides/flex';
import { Text } from '../../antOverrides/text';
import { Icon } from '../icon';
import { PopoverLink } from './link';

export interface PopoverProps extends AntPopoverProps {
  headerTitle?: ReactNode;
  onClose?: () => void;
  closeable?: boolean;
  footer?: ReactNode;
  overlayInnerClassName?: string;
}

const Popover = ({
  overlayInnerStyle,
  overlayClassName,
  overlayInnerClassName,
  headerTitle,
  content,
  closeable = true,
  onClose,
  footer,
  ...rest
}: PopoverProps) => {
  return (
    <AntPopover
      showArrow={false}
      arrow={false}
      overlayClassName={twMerge('[&_.ant-popover-inner]:p-0', overlayClassName)}
      overlayInnerStyle={{
        boxShadow: `2px 3px 7px 0 rgba(67, 88, 121, 0.15)`,
      }}
      {...rest}
      content={
        <div>
          {headerTitle && (
            <Flex className="border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-b px-3 py-1">
              {typeof headerTitle === 'string' ? (
                <Text size={12} weight="medium" color={colors.primary}>
                  {headerTitle}
                </Text>
              ) : (
                headerTitle
              )}
              {closeable && (
                <Icon
                  name="Close"
                  className="cursor-pointer"
                  onClick={onClose}
                  color={colors.primary}
                  size={12}
                />
              )}
            </Flex>
          )}
          <div className={twMerge('p-3', overlayInnerClassName)} style={overlayInnerStyle}>
            {typeof content === 'function' ? content() : content}
          </div>
          <Flex className="border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-t px-3 py-1">
            {footer}
          </Flex>
        </div>
      }
    />
  );
};

Popover.Link = PopoverLink;

export { Popover };
