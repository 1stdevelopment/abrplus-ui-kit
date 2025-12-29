import { Tooltip } from 'antd';
import React, { CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

import { colors, useInteractions } from '@configs';

import { Flex, Icon, Image, Text } from '../..';

export interface TagProps {
  closable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  visible?: boolean;
  imageSrc?: string;
  title: string;
  disabled?: boolean;
  error?: boolean;
  height?: number;
  readonly className?: string;
  style?: CSSProperties;
  autoSlice?: boolean;
  sliceLength?: number;
}

const Tag = ({
  closable,
  onClose,
  imageSrc,
  title,
  disabled,
  className,
  style,
  autoSlice = true,
  sliceLength = 10,
}: TagProps) => {
  const { isHovered, isActive, eventHandlers } = useInteractions();
  const getColor = () => {
    if (disabled) {
      return colors.primary_light_2;
    }
    if (isHovered || isActive) {
      return colors.primary_dark_1;
    }
    return colors.primary;
  };
  const getIconColor = () => {
    if (disabled) {
      return colors.primary_light_2;
    }
    if (isHovered || isActive) {
      return colors.primary_dark_1;
    }
    return colors.primary_light_3;
  };

  const getBorder = () => {
    const baseBorder = `1px solid`;
    if (disabled) {
      return baseBorder + colors.light_6;
    }
    if (isActive || isHovered) {
      return baseBorder + colors.primary_dark_1;
    }

    return baseBorder + colors.primary_light_3;
  };

  const renderTitle = () => {
    if (autoSlice && title?.length > sliceLength) {
      return title.slice(0, sliceLength) + '...';
    } else {
      return title;
    }
  };

  return (
    <Tooltip
      color={colors.primary_dark_1}
      title={title?.length > 10 ? title : undefined}
      autoAdjustOverflow
      style={{ width: 'auto' }}
    >
      <Flex
        align="center"
        justify="center"
        tabIndex={0}
        className={twMerge(
          ' bg-light-1 h-[26px] max-h-[26px] rounded border  px-2 py-1 focus-visible:outline-none',
          disabled && 'bg-light-6 cursor-not-allowed ',
          className,
        )}
        style={{
          border: getBorder(),
          ...style,
        }}
        {...eventHandlers()}
      >
        <Flex align="center">
          {imageSrc && <Image preview={false} src={imageSrc} className="me-2 h-4 w-4" />}
          <Text color={getColor()} className="cursor-default">
            {renderTitle()}
          </Text>
          {closable && (
            <Icon
              color={getIconColor()}
              name={'Close'}
              size="xsmall"
              className="ms-2 cursor-pointer"
              onClick={onClose}
            />
          )}
        </Flex>
      </Flex>
    </Tooltip>
  );
};

export { Tag };
