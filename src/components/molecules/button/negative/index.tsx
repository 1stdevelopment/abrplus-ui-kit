import { colors } from '@configs';
import { Render } from 'src/components/atoms/behavioralAtoms/render';
import { twMerge } from 'tailwind-merge';

import { Flex, Loading, Text } from '../../..';
import { Icon } from '../../../atoms';
import { ButtonProps, buttonDefaultClasses, fontSizePicker, paddingPicker } from '../shared';

const NegativeButton = ({
  style,
  height,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = 'start',
  isLoading,
  lang = 'fa',
  variant = 'outline', // Default variant
  ...rest
}: ButtonProps & { variant?: 'contain' | 'outline' }) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.primary_light_2;
    } else if (variant === 'contain') {
      return colors.white_ff;
    }
    return colors.negative;
  };

  // Define classes for outline and contain variants
  const outlineClasses =
    'hover:bg-negative-light-1 active:bg-negative-dark-1 [&_p]:hover:!text-white-ff [&_*]:hover:fill-white-ff disabled:bg-light-6 bg-transparent border-negative hover:border-negative-light-1 active:border-negative-dark-1 disabled:light-6 border-[2px] border-solid';
  const containClasses =
    'bg-negative hover:bg-negative-light-1 active:bg-negative-dark-1 disabled:bg-light-6 border-transparent';

  const buttonVariantClasses = variant === 'contain' ? containClasses : outlineClasses;

  return (
    <button
      lang={lang}
      style={{
        height: height || 34,
        ...style,
      }}
      className={twMerge(
        buttonDefaultClasses,
        buttonVariantClasses,
        paddingPicker(!!iconName)[iconPosition][mode || 'block'],
        fontSizePicker[mode || 'block'],
        (disabled || isLoading) && 'cursor-not-allowed',
        className,
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      <Render when={isLoading}>
        <Flex className="absolute">
          <Loading isLoading size={16} />
        </Flex>
      </Render>
      <Render when={iconPosition === 'start'}>
        {iconName && (
          <Icon
            name={iconName}
            className={twMerge(fontSizePicker[mode || 'block'])}
            color={getColor()}
          />
        )}
      </Render>

      <Text weight="medium" size={16} color={getColor()} lang={lang}>
        {children}
      </Text>
      <Render when={iconPosition === 'end'}>
        {iconName && (
          <Icon name={iconName} className={fontSizePicker[mode || 'block']} color={getColor()} />
        )}
      </Render>
    </button>
  );
};

export { NegativeButton };
