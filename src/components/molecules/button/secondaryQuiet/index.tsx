import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Text } from '../../..';
import { Render } from '../../../../utilities';
import { Icon } from '../../../atoms';
import { ButtonProps, buttonDefaultClasses, fontSizePicker, paddingPicker } from '../shared';

const SecondaryQuietButton = ({
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
  ...rest
}: ButtonProps) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.primary_light_2;
    }
    return colors.primary;
  };

  return (
    <button
      lang={lang}
      style={{
        height: height || 34,
        ...style,
      }}
      className={twMerge(
        'hover:bg-light-6 active:bg-light-7 disabled:light-6 bg-transparent',
        paddingPicker(!!iconName)[iconPosition][mode || 'block'],
        fontSizePicker[mode || 'block'],
        buttonDefaultClasses,
        (disabled || isLoading) && 'cursor-not-allowed ',
        className,
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      <Render when={iconPosition === 'start'}>
        {iconName && (
          <Icon name={iconName} className={fontSizePicker[mode || 'block']} color={getColor()} />
        )}
      </Render>
      <Text
        lang={lang}
        weight="medium"
        className={fontSizePicker[mode || 'block']}
        color={getColor()}
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

export { SecondaryQuietButton };
