import { colors } from '@configs';
import { Modal as AntModal, ConfigProvider } from 'antd';

import { Flex, Text } from '../../antOverrides';
import { Icon } from '../../atoms';
import { Button } from '../../molecules';
import { ModalButtonProps, ModalProps } from './type';

type BaseModalProps = (ModalButtonProps & Omit<ModalProps, 'description'>) & {
  renderFooter?: React.ReactNode;
};

const BaseModal = ({
  children,
  submitTitle,
  discardTitle,
  onSubmit,
  onDiscard,
  title,
  onClose,
  isLoadingSubmit,
  renderFooter,
  ...rest
}: BaseModalProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            borderRadius: 4,
            borderRadiusOuter: 4,
            borderRadiusLG: 4,
            paddingMD: 0,
            paddingContentHorizontalLG: 0,
            margin: 0,
          },
        },
      }}
    >
      <AntModal
        closeIcon={false}
        classNames={{ body: '!px-6 !py-4' }}
        footer={
          renderFooter !== undefined ? (
            renderFooter
          ) : submitTitle || discardTitle ? (
            <Flex
              justify="end"
              align="center"
              className="h-[58px] rounded-b border-t border-solid border-light-7 bg-light-2 px-6"
              gap={16}
            >
              {discardTitle && (
                <Button.Secondary onClick={onDiscard}>{discardTitle}</Button.Secondary>
              )}
              {submitTitle && (
                <Button.Primary isLoading={isLoadingSubmit} onClick={onSubmit}>
                  {submitTitle}
                </Button.Primary>
              )}
            </Flex>
          ) : null
        }
        title={
          typeof title === 'string' ? (
            <Flex
              className="h-12 rounded-t border-b border-solid border-light-7 bg-light-2 px-6"
              align="center"
              justify="space-between"
            >
              <Text size={18} weight="medium" color={colors.primary_dark_1}>
                {title}
              </Text>
              <Icon
                name="Close"
                color={colors.primary}
                onClick={onClose}
                className="cursor-pointer"
              />
            </Flex>
          ) : (
            title
          )
        }
        {...rest}
      >
        {children}
      </AntModal>
    </ConfigProvider>
  );
};

export { BaseModal };
