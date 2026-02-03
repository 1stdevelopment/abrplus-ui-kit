import { colors } from '@configs';
import { Text } from 'src/components/antOverrides';

import { CurrencyCell } from './currencyCell';
import { DateCell } from './dateCell';
import { StatusCell } from './status';

export interface TableCellProps {
  children?: any;
}

const TableCell = ({ children }: TableCellProps) => {
  if (typeof children === 'string' || typeof children === 'number') {
    return (
      <Text className="w-full" size={14} weight="normal" color={colors.primary}>
        {children}
      </Text>
    );
  }
  return children;
};

export { TableCell };

TableCell.Currency = CurrencyCell;
TableCell.Date = DateCell;
TableCell.StatusCell = StatusCell;
