import React, { useState } from 'react';
import { Flex } from 'src/components/antOverrides';
import { BorderedTitle, Icon } from 'src/components/atoms';

export interface PropsTypes {
  title?: string;
  children?: React.ReactNode;
  direction?: 'center' | 'start' | 'end';
  expand?: boolean;
}

export const Spliter = ({ children, title, direction = 'center', expand = false }: PropsTypes) => {
  const [expanded, setExpanded] = useState<boolean>(expand);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full">
      <Flex className="items-center w-full">
        <Flex
          className="bg-light-1 border-primary-light-3 p-1 rounded border cursor-pointer"
          onClick={toggleExpand}
        >
          <Icon name={expanded ? 'Chevron_Up' : 'Chevron_Down'} />
        </Flex>
        <BorderedTitle align={direction} title={title} />
      </Flex>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${expanded ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <Flex className="p-2 mt-2">{children}</Flex>
      </div>
    </div>
  );
};
