import { colors } from '@configs';
import React from 'react';

import { Flex } from '../../antOverrides/flex';
import { Text } from '../../antOverrides/text';
import { Render } from '../behavioralAtoms/render';

export interface BorderedTitleProps {
  title: string | React.ReactNode;
  align?: 'start' | 'center' | 'end';
  textColor?: string;
  textSize?: number;
}

const BorderedTitle = ({
  title,
  align = 'start',
  textSize = 16,
  textColor = colors.primary_dark_1,
}: BorderedTitleProps) => {
  return (
    <Flex className="w-full" align="center" gap={8}>
      <Render when={align !== 'start'}>
        <hr className="flex h-[1px]  flex-1 border border-light-7" />
      </Render>
      <Render when={typeof title === 'string'} fallback={title}>
        <Text size={textSize} color={textColor} weight="medium">
          {title}
        </Text>
      </Render>
      <Render when={align !== 'end'}>
        <hr className="flex h-[1px] flex-1 border border-light-7" />
      </Render>
    </Flex>
  );
};

export { BorderedTitle };
