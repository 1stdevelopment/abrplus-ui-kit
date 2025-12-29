import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Flex, Loading, Text } from '../../..';
import { Render } from '../../../../utilities';
import { Icon } from '../../../atoms';
import { ButtonProps, buttonDefaultClasses, fontSizePicker, paddingPicker } from '../shared';

const PrimaryButton = ({
  style,
  height = 34,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = 'start',
  isLoading,
  lang = 'fa',
  textSize,
  ...rest
}: ButtonProps) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.primary_light_2;
    }
    return colors.white_ff;
  };

  return (
    <button
      lang={lang}
      style={{ height, ...style }}
      className={twMerge(
        'bg-primary hover:bg-primary-light-1 active:bg-primary-dark-1 disabled:bg-light-6',
        paddingPicker(!!iconName)[iconPosition][mode || 'block'],
        fontSizePicker[mode || 'block'],
        buttonDefaultClasses,
        mode === 'block' && 'w-full',
        (disabled || isLoading) && 'border-light-6 cursor-not-allowed',
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
          <Icon name={iconName} className={fontSizePicker[mode || 'block']} color={getColor()} />
        )}
      </Render>
      <Text
        lang={lang}
        weight="medium"
        className={twMerge(
          'text-white-ff',
          (disabled || isLoading) && 'text-primary-light-2',
          fontSizePicker[mode || 'block'],
        )}
        size={textSize}
      >
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

export { PrimaryButton };
