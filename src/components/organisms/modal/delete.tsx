import { colors } from '@configs';

import { Flex, Text } from '../..';
import { Button } from '../../molecules';
import { BaseModal } from './base';
import { ModalButtonProps, ModalProps } from './type';

export type DeleteModalProps = ModalProps & ModalButtonProps;
const DeleteModal = ({
  children,
  title,
  onSubmit,
  onDiscard,
  submitTitle,
  discardTitle,
  isLoadingSubmit,
  ...rest
}: DeleteModalProps) => {
  return (
    <BaseModal {...rest}>
      <Flex vertical>
        <Flex vertical className="border-b-[2px] border-light-7 pb-3">
          {typeof title === 'string' ? (
            <Text size={20} weight="bold" color={colors.primary_dark_1}>
              {title}
            </Text>
          ) : (
            title
          )}
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
        <Flex gap={16} align="center" justify="flex-end">
          <Button.Secondary onClick={onDiscard}>{discardTitle}</Button.Secondary>
          <Button.Negative iconName="Delete" isLoading={isLoadingSubmit} onClick={onSubmit}>
            {submitTitle}
          </Button.Negative>
        </Flex>
      </Flex>
    </BaseModal>
  );
};

export { DeleteModal };
