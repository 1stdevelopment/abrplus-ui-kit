import { colors } from '@configs';
import { Drawer as AntDrawer, DrawerProps as Props } from 'antd';
import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { Flex } from '../..';
import { DrawerFooter } from './components/footer';
import { DrawerHeaderTitle, DrawerHeaderTitleProps } from './components/headerTitle';

export type DrawerAction = Partial<{
  onSubmit: () => void;
  onDiscard: () => void;
  submitTitle: string;
  discardTitle: string;
  isLoading?: boolean;
  noPadding?: boolean;
  isSubmitDisabled?: boolean;
}>;

export interface DrawerProps extends Omit<Props, 'title' | 'onClose' | 'closable'> {
  title?: string | ReactNode;
  transparent?: boolean;
  onClose?: () => void;
  headerHeight?: number;
  wrapperClassName?: HTMLAttributes<HTMLElement>['className'];
  contentClassName?: HTMLAttributes<HTMLElement>['className'];
  closable?: boolean;
}

const Drawer = ({
  title,
  closable = true,
  transparent,
  submitTitle,
  discardTitle,
  onClose,
  onSubmit,
  onDiscard,
  classNames,
  styles,
  children,
  isLoading,
  headerHeight = 60,
  wrapperClassName,
  contentClassName,
  noPadding,
  isSubmitDisabled,
  footer,
  ...rest
}: DrawerProps & DrawerAction) => {
  return (
    <AntDrawer
      onClose={onClose}
      styles={{
        ...styles,
        header: {
          minHeight: headerHeight,
          backgroundColor: colors.light_2,
          borderColor: colors.light_7,
          paddingBlock: 12,
          paddingInline: 24,
        },
        body: {
          backgroundColor: transparent ? 'transparent' : colors.white_ff,
          // margin: transparent ? 0 : 24,
          // borderRadius: 10,
          padding: 0,
        },
        content: {
          backgroundColor: colors.light_2,
          padding: 0,
        },
        footer: {
          minHeight: 60,
          paddingBlock: 12,
          borderColor: colors.light_7,
          paddingInline: 24,
          margin: 0,
        },
      }}
      classNames={{
        ...classNames,
        body: 'small-custom-scrollbar',
      }}
      footer={
        footer || (
          <DrawerFooter
            {...{ onSubmit, onDiscard, submitTitle, discardTitle, isLoading, isSubmitDisabled }}
          />
        )
      }
      closable={false}
      title={<DrawerHeaderTitle title={title} closable={closable} onClose={onClose} />}
      {...rest}
    >
      <Flex
        className={twMerge(
          'small-custom-scrollbar h-full flex-1 overflow-y-auto bg-light-2 p-6',
          wrapperClassName,
        )}
        vertical
        gap={16}
      >
        <Flex
          className={twMerge(
            'bg-white-ff',
            noPadding ? 'rounded-lg' : 'rounded p-6',
            !transparent ? '' : 'bg-transparent',
            contentClassName,
          )}
          vertical
        >
          {children}
        </Flex>
      </Flex>
    </AntDrawer>
  );
};
export { Drawer };
export type { DrawerHeaderTitleProps };
