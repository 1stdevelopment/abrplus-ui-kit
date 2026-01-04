import { colors } from '@configs';
import { Render } from 'src/components/atoms/behavioralAtoms/render';
import { twMerge } from 'tailwind-merge';

import { Flex, Loading, Text } from '../../..';
import { Icon } from '../../../atoms';
import { ButtonProps, buttonDefaultClasses, fontSizePicker, paddingPicker } from '../shared';

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
        'bg-transparent hover:bg-primary-light-1 active:bg-primary-dark-1 disabled:bg-light-6 [&_p]:text-primary [&_p]:hover:text-white-ff [&_svg]:hover:!fill-white-ff',
        'border-[2px] border-solid border-primary hover:border-primary-light-1 active:border-primary-dark-1 disabled:bg-light-6',
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
