import { colors } from '@configs';
import { useTranslation } from 'react-i18next';
import { Flex, Text, TextProps } from 'src/components/antOverrides';
import { twMerge } from 'tailwind-merge';

export interface TableCellProps extends TextProps {
  value?: boolean;
  activeTitle?: string;
  disableTitle?: string;
}

const StatusCell = ({ value, activeTitle, disableTitle, ...rest }: TableCellProps) => {
  const { t } = useTranslation();
  return (
    <Flex
      className={twMerge(
        'h-[26px] items-center justify-center rounded px-4',
        value ? 'bg-positive-light-2 bg-opacity-10' : 'bg-light-6',
      )}
      {...rest}
    >
      {value ? (
        <Text size={12} weight="medium" color={colors.positive}>
          {activeTitle || t('common.literal.active')}
        </Text>
      ) : (
        <Text size={12} weight="medium" color={colors.primary_light_2}>
          {disableTitle || t('common.literal.disable')}
        </Text>
      )}
    </Flex>
  );
};

export { StatusCell };
