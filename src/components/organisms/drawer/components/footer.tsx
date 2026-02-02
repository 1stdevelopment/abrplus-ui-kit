import { useTranslation } from 'react-i18next';

import { DrawerAction } from '..';
import { Flex } from '../../../antOverrides';
import { Button } from '../../../molecules';

const DrawerFooter = ({
  discardTitle,
  onDiscard,
  onSubmit,
  submitTitle,
  isLoading,
  isSubmitDisabled,
}: DrawerAction) => {
  const { t } = useTranslation();

  return (
    <Flex align="center" gap={16} justify="flex-end">
      {discardTitle && (
        <Button.Secondary disabled={isLoading} onClick={onDiscard}>
          {discardTitle}
        </Button.Secondary>
      )}
      <Button.Primary disabled={isSubmitDisabled} isLoading={isLoading} onClick={onSubmit}>
        {submitTitle || t('common.literal.apply')}
      </Button.Primary>
    </Flex>
  );
};

export { DrawerFooter };
