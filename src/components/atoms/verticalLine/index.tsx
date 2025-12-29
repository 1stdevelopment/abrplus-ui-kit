import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

export interface VerticalLine extends HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  color?: string;
  spacing?: number;
}

export const VerticalLine = ({ style, color, spacing, ...rest }: VerticalLine) => {
  return (
    <div
      {...rest}
      className={twMerge('mx-2 min-h-[12px] w-[1px] max-w-[1px]', rest.className)}
      style={{
        backgroundColor: color || colors.primary_dark_1,
        ...style,
      }}
    />
  );
};
