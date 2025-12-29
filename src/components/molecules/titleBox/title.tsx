import { ReactNode } from 'react';

import { Flex, Text } from '../..';

export interface TitleBoxProps {
  title: string | ReactNode;
  children: string | ReactNode;
}

const TitleBox = ({ children, title }: TitleBoxProps) => {
  return (
    <Flex vertical={false} gap={24} align="flex-start">
      <Flex flex={1} className="bg-light-1 rounded px-4 py-2">
        {typeof title === 'string' ? <Text weight="medium">{title}</Text> : title}
      </Flex>
      <Flex flex={3} className="bg-light-1 rounded px-4 py-2">
        {typeof children === 'string' ? (
          <Text size={16} style={{ textAlign: 'justify' }}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Flex>
    </Flex>
  );
};

export { TitleBox };
