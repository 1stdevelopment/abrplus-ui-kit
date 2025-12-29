import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';

import { colors } from '@configs';

import { Flex, Icon, Text, Tooltip } from '../..';

export interface CopyButtonProps {
  textToCopy: string;
  renderButton?: React.ReactNode;
  variant?: 'informative' | 'success' | 'error' | 'default';
}

const CopyButton = ({ textToCopy, variant = 'success', renderButton }: CopyButtonProps) => {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    showTooltip &&
      setTimeout(() => {
        setShowTooltip(false);
      }, 750);
  }, [showTooltip]);

  return (
    <CopyToClipboard
      text={textToCopy}
      onCopy={(result) => {
        result && setShowTooltip(true);
      }}
    >
      <Tooltip variant={variant} title={t('common.message.copied')} open={showTooltip}>
        {renderButton ? (
          renderButton
        ) : (
          <Flex align="center" gap={4} className={'cursor-pointer'}>
            <Icon size={18} color={colors.primary_light_1} name="file_copy_line" />
            <Text>{t('common.literal.copy')}</Text>
          </Flex>
        )}
      </Tooltip>
    </CopyToClipboard>
  );
};

export { CopyButton };
