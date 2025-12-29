import React, { Ref, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Breadcrumbs } from '../..';
import { Flex, Text } from '../../antOverrides';

export interface ActionHeaderProps {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  route?: any;
  gap?: number;
  hasBorder?: boolean;
  className?: string;
}

const ActionHeader = forwardRef(
  (
    { children, title, route, hasBorder, gap = 8, className }: ActionHeaderProps,
    ref: Ref<HTMLElement>,
  ) => {
    const headerTitle = (title: ActionHeaderProps['title'], route: ActionHeaderProps['route']) => {
      if (route) {
        return (
          <Flex className="min-w-max">
            <Breadcrumbs route={route} />
          </Flex>
        );
      }

      if (title) {
        return (
          <Flex className="min-w-max">
            {typeof title === 'string' ? (
              <Text size={16} weight="medium" color={colors.primary}>
                {title}
              </Text>
            ) : (
              title
            )}
          </Flex>
        );
      }

      return null;
    };

    return (
      <Flex
        className={twMerge(
          'bg-light-1 w-full px-6 py-4',
          hasBorder && 'border-light-7 border-b',
          className,
        )}
        align="center"
        justify="space-between"
      >
        {headerTitle(title, route)}
        <Flex ref={ref} gap={gap} className="w-full justify-end">
          {children}
        </Flex>
      </Flex>
    );
  },
);

export { ActionHeader };
