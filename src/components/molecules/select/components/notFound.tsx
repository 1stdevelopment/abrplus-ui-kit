import { useTranslation } from 'react-i18next';

import { colors } from '@configs';
import { Flex, Icon, SelectProps, Text } from '@abrplus/ui';

export interface SelectNotFoundProps
  extends Pick<SelectProps<any>, 'error' | 'noContentFoundMessage'> {}

const SelectNotFound = ({ error, noContentFoundMessage }: SelectNotFoundProps) => {
  const { t } = useTranslation();
  return (
    <Flex justify="center" align="center" gap={4} className="h-[100px]">
      {error?.message ? (
        <Icon name="alert-line" size={24} color={colors.negative_light_2} />
      ) : (
        <Icon name="Search_fail" size={24} color={colors.primary_light_3} />
      )}
      <Text size={14} color={error?.message ? colors.negative : colors.primary_light_2}>
        {noContentFoundMessage
          ? noContentFoundMessage
          : error?.message
            ? t('common.literal.listError')
            : t('common.message.noResultFound')}
      </Text>
    </Flex>
  );
};

export { SelectNotFound };
