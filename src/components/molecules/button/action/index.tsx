import { AbrplusUIKit, APP_NAME, colors } from '@configs';
import { Render } from 'src/components/atoms/behavioralAtoms/render';
import { twMerge } from 'tailwind-merge';

import { Flex, Loading, Text } from '../../..';
import { Icon } from '../../../atoms';
import { ButtonProps, buttonDefaultClasses, fontSizePicker, paddingPicker } from '../shared';

export interface ActionButtonProps extends ButtonProps {

}
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
}: ActionButtonProps) => {
  const appName = AbrplusUIKit.config().getAppName()
  const getColor = () => {
    if ((disabled || isLoading) && appName) {
      if (
        appName === 'home' ||
        appName === 'sandbox' ||
        appName === 'bi' ||
        appName === 'storybook'
      )
        return colors['sales']['action_light_2'];
      return colors[appName]['action_light_2'];
    }
    return colors.white_ff;
  };

  const getColorClass = () => {
    if (!appName) return;

    const data: Partial<Record<APP_NAME, string>> = {
      bi: twMerge('bg-sales-action hover:bg-sales-action-light-1 active:bg-sales-action-dark-1'),
      call: twMerge('bg-call-action hover:bg-call-action-light-1 active:bg-call-action-dark-1'),
      club: twMerge('bg-club-action hover:bg-club-action-light-1 active:bg-club-action-dark-1'),
      marketing: twMerge(
        'bg-marketing-action hover:bg-marketing-action-light-1 active:bg-marketing-action-dark-1',
      ),
      sales: twMerge('bg-sales-action hover:bg-sales-action-light-1 active:bg-sales-action-dark-1'),
      team: twMerge('bg-team-action hover:bg-team-action-light-1 active:bg-team-action-dark-1'),
      rayan: twMerge('bg-rayan-action hover:bg-rayan-action-light-1 active:bg-rayan-action-dark-1'),
    };

    return data?.[appName] || data['sales'];
  };

  return (
    <button
      lang={lang}
      style={{
        height: height || 34,
        ...style,
      }}
      className={twMerge(
        'bg-repo disabled:bg-light-6 ',
        getColorClass(),
        paddingPicker(!!iconName)[iconPosition][mode || 'block'],
        fontSizePicker[mode || 'block'],
        buttonDefaultClasses,
        mode === 'block' && 'w-full',
        (disabled || isLoading) && 'cursor-not-allowed border-light-6',
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
