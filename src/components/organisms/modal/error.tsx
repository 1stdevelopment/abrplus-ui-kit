import { colors } from '@configs';

import { Flex, Icon, Text } from '../..';
import { Button } from '../../molecules';
import { BaseModal } from './base';
import { ModalButtonProps, ModalProps } from './type';

const ErrorModal = ({
  children,
  title,
  onSubmit,
  submitTitle,
  isLoadingSubmit,
  ...rest
}: ModalProps & Omit<ModalButtonProps, 'discardTitle' | 'onDiscard'>) => {
  return (
    <BaseModal {...rest}>
      <Flex vertical>
        <Flex className="border-b-[2px] border-light-7 pb-3" align="center" justify="space-between">
          {typeof title === 'string' ? (
            <Text size={20} weight="bold" color={colors.primary_dark_1}>
              {title}
            </Text>
          ) : (
            title
          )}
          <Icon name="Alert" color={colors.negative} size={18} />
        </Flex>
        <Flex className="pb-10 pt-4">
          {typeof children === 'string' ? (
            <Text size={16} weight="normal" color={colors.primary}>
              {children}
            </Text>
          ) : (
            children
          )}
        </Flex>
        <Flex justify="flex-end">
          <Button.Primary isLoading={isLoadingSubmit} onClick={onSubmit}>
            {submitTitle}
          </Button.Primary>
        </Flex>
      </Flex>
    </BaseModal>
  );
};

export { ErrorModal };
