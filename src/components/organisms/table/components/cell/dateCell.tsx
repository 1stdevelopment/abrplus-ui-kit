import { colors } from '@configs';
import { Text, TextProps } from 'src/components/antOverrides';

export interface TableCellProps extends TextProps {
  value?: string;
}

const DateCell = ({ value, ...rest }: TableCellProps) => {
  // @todo complete this component when we installed moment
  return (
    <Text className="w-full" size={14} weight="normal" color={colors.primary} {...rest}>
      {value}
    </Text>
  );
};

export { DateCell };
