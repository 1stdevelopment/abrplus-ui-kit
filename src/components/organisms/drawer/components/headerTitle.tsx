import { colors } from '@configs';
import React from 'react';

import { Flex, Icon, Text } from '../../..';

export interface DrawerHeaderTitleProps {
  title?: string | React.ReactNode;
  closable?: boolean;
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const DrawerHeaderTitle = ({ title, closable, onClose }: DrawerHeaderTitleProps) => {
  const getTitle = () => {
    if (typeof title !== 'string') {
      return title;
    }
    return (
      <Text size={18} weight="medium" color={colors.primary}>
        {title}
      </Text>
    );
  };

  return (
    <Flex justify="space-between" align="center">
      {getTitle()}
      {closable && (
        <div className="cursor-pointer" onClick={onClose}>
          <Icon name="Close" size={20} color={colors.primary} />
        </div>
      )}
    </Flex>
  );
};

export { DrawerHeaderTitle };
