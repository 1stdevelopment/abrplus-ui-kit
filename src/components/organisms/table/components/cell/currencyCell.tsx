import { colors } from '@configs';
import { useTranslation } from 'react-i18next';
import { Text, TextProps } from 'src/components/antOverrides';
import starkString from 'starkstring';

export interface TableCellProps extends TextProps {
  value?: string | number;
  includeCurrency?: boolean;
}

const CurrencyCell = ({ value, includeCurrency, ...rest }: TableCellProps) => {
  const { t } = useTranslation();
  return (
    <Text className="w-full" size={14} weight="normal" color={colors.primary} {...rest}>
      {value ? starkString(value).scientificNotationToDecimal().toCurrency().toString() : ''}
      {includeCurrency && ` ${t('common.literal.rial')}`}
    </Text>
  );
};

export { CurrencyCell };
