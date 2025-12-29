import { twMerge } from 'tailwind-merge';

import { colors, getColorKey } from '@configs';

import { Flex, Loading, Text } from '../../..';
import { Render } from '../../../../utilities';
import { Icon } from '../../../atoms';
import { ButtonProps, buttonDefaultClasses, fontSizePicker, paddingPicker } from '../shared';

const ActionButton = ({
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
      return colors[getColorKey()]['action_light_2'];
    }
    return colors.white_ff;
  };

  const getColorClass = () => {
    if (!__APP__) return;

    const data: Partial<Record<typeof __APP__, string>> = {
      bi: twMerge('bg-sales-action hover:bg-sales-action-light-1 active:bg-sales-action-dark-1'),
      call: twMerge('bg-call-action hover:bg-call-action-light-1 active:bg-call-action-dark-1'),
      club: twMerge('bg-club-action hover:bg-club-action-light-1 active:bg-club-action-dark-1'),
      marketing: twMerge(
        'bg-marketing-action hover:bg-marketing-action-light-1 active:bg-marketing-action-dark-1',
      ),
      sales: twMerge('bg-sales-action hover:bg-sales-action-light-1 active:bg-sales-action-dark-1'),
      team: twMerge('bg-team-action hover:bg-team-action-light-1 active:bg-team-action-dark-1'),
    };

    return data?.[__APP__] || data['sales'];
  };

  return (
    <button
      lang={lang}
      style={{
        height: height || 34,
        ...style,
      }}
      className={twMerge(
        'disabled:bg-light-6 bg-repo ',
        getColorClass(),
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

export { ActionButton };
