import { colors } from '@configs';
import { twMerge } from 'tailwind-merge';

import { TableProps } from '..';
import { Flex, Text } from '../../..';
import { ColumnProps } from '../column';

export interface TableHeaderTitleProps {
  title?: TableProps<any>['children'];
  style?: ColumnProps<any>['headerStyle'];
  className?: ColumnProps<any>['headerClassName'];
  align?: ColumnProps<any>['align'];
}

const TableHeaderTitle = ({ title, align, style, className }: TableHeaderTitleProps) => {
  if (typeof title !== 'string') {
    return title;
  }
  return (
    <Flex
      style={style}
      className={twMerge(
        'w-full',
        align === 'start' && 'justify-start',
        align === 'center' && 'justify-center',
        align === 'end' && 'justify-end',
        className,
      )}
    >
      <Text size={14} weight="normal" className="whitespace-nowrap" color={colors.primary}>
        {title}
      </Text>
    </Flex>
  );
};

export { TableHeaderTitle };
