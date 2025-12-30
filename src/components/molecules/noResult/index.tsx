import { useTranslation } from 'react-i18next';

import { colors } from '@configs';
import { Flex, Icon, IconsNames, SelectProps, Text } from 'src/main';

export interface NotResultTextProps
  extends Pick<SelectProps<any>, 'error' | 'noContentFoundMessage'> {
  errorIcon?: IconsNames;
  noContentIcon?: IconsNames;
}

const NotResult = ({
  error,
  noContentFoundMessage,
  errorIcon,
  noContentIcon,
}: NotResultTextProps) => {
  const { t } = useTranslation();
  return (
    <Flex justify="center" align="center" gap={4} className="h-[100px]">
      {error?.message ? (
        <Icon name={errorIcon} size={24} color={colors.negative_light_2} />
      ) : (
        <Icon name={noContentIcon} size={24} color={colors.primary_light_3} />
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

export { NotResult };
