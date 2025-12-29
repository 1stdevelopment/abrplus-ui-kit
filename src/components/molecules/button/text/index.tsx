import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Flex, Loading, Text, TextProps } from '../../..';
import { Render } from '../../../../utilities';
import { Icon } from '../../../atoms';
import { ButtonProps, buttonDefaultClasses, fontSizePicker, paddingPicker } from '../shared';

interface TexButtonProps extends ButtonProps {
  underline?: boolean;
  textProps?: TextProps;
  startIconSize?: number;
  endIconSize?: number;
}

//TODO storybook & unit-test required
const TextButton = ({
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
  underline,
  textProps,
  startIconSize,
  endIconSize,
  ...rest
}: TexButtonProps) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.primary_light_2;
    }
    return colors.black;
  };

  return (
    <button
      lang={lang}
      style={{ height, ...style }}
      className={twMerge(
        'disabled:bg-light-6 border-none hover:bg-none focus:bg-none',
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
          <Icon
            size={startIconSize}
            name={iconName}
            className={fontSizePicker[mode || 'block']}
            color={getColor()}
          />
        )}
      </Render>
      <Text
        lang={lang}
        weight="medium"
        className={twMerge(
          (disabled || isLoading) && 'text-primary-light-2',
          fontSizePicker[mode || 'block'],
          underline && 'underline',
        )}
        {...textProps}
      >
        {children}
      </Text>

      <Render when={iconPosition === 'end'}>
        {iconName && (
          <Icon
            size={endIconSize}
            name={iconName}
            className={fontSizePicker[mode || 'block']}
            color={getColor()}
          />
        )}
      </Render>
    </button>
  );
};

export { TextButton };
