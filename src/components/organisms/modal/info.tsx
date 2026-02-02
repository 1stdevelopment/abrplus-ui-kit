import { colors } from '@configs';

import { Flex, Text } from '../..';
import { Button } from '../../molecules';
import { BaseModal } from './base';
import { ModalButtonProps, ModalProps } from './type';

const InfoModal = ({
  children,
  title,
  onSubmit,
  onDiscard,
  submitTitle,
  discardTitle,
  isLoadingSubmit,
  error,
  ...rest
}: ModalProps & ModalButtonProps) => {
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
        {/*  @todo fix me */}
        <Text size={20} weight="bold" color={colors.negative}>
          {error}
        </Text>
        <Flex gap={16} align="center" justify="flex-end">
          <Button.SecondaryQuiet onClick={onDiscard}>{discardTitle}</Button.SecondaryQuiet>
          <Button.Primary isLoading={isLoadingSubmit} onClick={onSubmit}>
            {submitTitle}
          </Button.Primary>
        </Flex>
      </Flex>
    </BaseModal>
  );
};

export { InfoModal };
