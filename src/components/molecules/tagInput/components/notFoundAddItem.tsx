import { useTranslation } from 'react-i18next';
import { Flex, Text } from 'src/main';

const NotFoundAddItem = ({ onAddNewItem }: { onAddNewItem: () => void }) => {
  const { t } = useTranslation();
  return (
    <Flex justify="start" align="center" gap={4} className="p-5">
      <Text className="bg-light-2 w-full cursor-pointer p-2" size={14} onClick={onAddNewItem}>
        {t('common.literal.addInputTag')}
      </Text>
    </Flex>
  );
};

export { NotFoundAddItem };
