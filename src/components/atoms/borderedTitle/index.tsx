import React from 'react';

import { colors } from '@configs';

import { Render } from '../../../utilities/render';
import { Flex } from '../../antOverrides/flex';
import { Text } from '../../antOverrides/text';
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
        <hr className="border-light-7 flex  h-[1px] flex-1 border" />
      </Render>
      <Render when={typeof title === 'string'} fallback={title}>
        <Text size={textSize} color={textColor} weight="medium">
          {title}
        </Text>
      </Render>
      <Render when={align !== 'end'}>
        <hr className="border-light-7 flex h-[1px] flex-1 border" />
      </Render>
    </Flex>
  );
};

export { BorderedTitle };
