import { colors } from '@configs';

import { Flex, Text } from '../..';
import { Button } from '../../molecules';
import { BaseModal } from './base';
import { ModalButtonProps, ModalProps } from './type';

type ConfirmModalProps = (ModalProps & ModalButtonProps) & {
  renderFooter?: React.ReactNode;
};

const ConfirmModal = ({
  children,
  title,
  onSubmit,
  onDiscard,
  submitTitle,
  discardTitle,
  isLoadingSubmit,
  renderFooter,
  ...rest
}: ConfirmModalProps) => {
  const footerContent =
    renderFooter !== undefined
      ? renderFooter
      : (submitTitle || discardTitle) && (
          <Flex gap={16} align="center" justify="flex-end" className="px-6 py-4">
            {discardTitle && (
              <Button.Secondary onClick={onDiscard}>{discardTitle}</Button.Secondary>
            )}
            {submitTitle && (
              <Button.Primary isLoading={isLoadingSubmit} onClick={onSubmit}>
                {submitTitle}
              </Button.Primary>
            )}
          </Flex>
        );

  return (
    <BaseModal {...rest} renderFooter={footerContent}>
      <Flex vertical>
        <Flex vertical className="mb-2 border-b-[2px] border-light-7 pb-3">
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
      </Flex>
    </BaseModal>
  );
};

export { ConfirmModal };
