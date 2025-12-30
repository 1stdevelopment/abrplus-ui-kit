import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Text } from '../../..';
import { Icon, Render } from '../../../atoms';
import { ButtonProps, buttonDefaultClasses, fontSizePicker, paddingPicker } from '../shared';

const TertiaryButton = ({
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

    return colors.primary_dark_1;
  };

  return (
    <button
      lang={lang}
      style={{
        height: height || 34,
        ...style,
      }}
      className={twMerge(
        'bg-light-1 hover:bg-white-ff active:light-6 disabled:light-6',
        'border-primary-light-3 hover:border-primary-light-2 active:bg-primary-light-2 disabled:light-6 border-[1px] border-solid',
        paddingPicker(!!iconName)[iconPosition][mode || 'block'],
        fontSizePicker[mode || 'block'],
        buttonDefaultClasses,
        (disabled || isLoading) && 'cursor-not-allowed',
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

export { TertiaryButton };
