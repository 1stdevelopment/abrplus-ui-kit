import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Flex, Loading, Text } from '../../..';
import { Icon } from '../../../atoms';
import { ButtonProps, buttonDefaultClasses, fontSizePicker, paddingPicker } from '../shared';
import { Render } from 'src/components/atoms/render';

const SecondaryButton = ({
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
      style={{ height, ...style }}
      className={twMerge(
        'hover:bg-primary-light-1 active:bg-primary-dark-1 disabled:bg-light-6 [&_p]:text-primary [&_p]:hover:text-white-ff [&_svg]:hover:!fill-white-ff bg-transparent',
        'border-primary hover:border-primary-light-1 active:border-primary-dark-1 disabled:bg-light-6 border-[2px] border-solid',
        paddingPicker(!!iconName)[iconPosition][mode || 'block'],
        fontSizePicker[mode || 'block'],
        buttonDefaultClasses,
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
          <Icon name={iconName} className={fontSizePicker[mode || 'block']} color={getColor()} />
        )}
      </Render>
      <Text lang={lang} weight="medium" className={fontSizePicker[mode || 'block']}>
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

export { SecondaryButton };
