import { Tooltip as AntTooltip, TooltipProps as AntTooltipProps } from 'antd';
import React from 'react';

import { colors } from '@configs';

export type TooltipProps = Omit<AntTooltipProps, 'title'> & {
  variant?: 'informative' | 'success' | 'error' | 'default';
  title?: string | React.ReactNode;
};

const bgColors: Record<NonNullable<TooltipProps['variant']>, string> = {
  default: colors.primary,
  error: colors.negative,
  success: colors.positive,
  informative: colors.secondary,
};

const Tooltip = ({
  children,
  variant = 'default',
  overlayInnerStyle,
  title,
  ...rest
}: TooltipProps) => {
  return (
    <AntTooltip
      color={bgColors[variant]}
      overlayInnerStyle={{ paddingInline: 12, ...overlayInnerStyle }}
      title={title}
      {...rest}
    >
      {children}
    </AntTooltip>
  );
};

export { Tooltip };
