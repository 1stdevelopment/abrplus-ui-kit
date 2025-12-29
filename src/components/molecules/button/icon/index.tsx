import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Icon, IconMoonsProps } from '../../../atoms/icon';
import { ButtonProps, buttonDefaultClasses } from '../shared';

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'iconName' | 'mode'> {
  iconProps?: Omit<IconMoonsProps, 'name' | 'color'> & { renderIcon?: ReactNode };
  iconName: Required<ButtonProps['iconName']>;
}

const IconButton = ({
  style,
  height = 34,
  iconName,
  disabled,
  className,
  iconPosition = 'start',
  iconProps,
  color,
  ...rest
}: IconButtonProps) => {
  return (
    <button
      style={{
        height: height,
        ...style,
      }}
      className={twMerge(
        buttonDefaultClasses,
        'h-[34px] w-[34px] p-4',
        'bg-light-1  border-primary-light-3 border',
        'hover:bg-white-ff hover:border-primary-light-2',
        'active:bg-light-6 active:border-primary-light-2',
        'disabled:text-primary-light-2 disabled:bg-light-6 disabled:border-light-6',
        disabled && 'border-light-6 cursor-not-allowed',
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {iconProps?.renderIcon ? (
        iconProps.renderIcon
      ) : (
        <Icon
          name={iconName}
          color={disabled ? colors.primary_light_3 : (color ?? colors.primary)}
          {...iconProps}
        />
      )}
    </button>
  );
};

export { IconButton };
