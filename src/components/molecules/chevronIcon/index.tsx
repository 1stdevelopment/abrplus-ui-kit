import { useTranslation } from 'react-i18next';

import { Icon, IconMoonsProps, IconsNames } from '../../atoms';

export interface ChevronIconProps extends Omit<IconMoonsProps, 'name'> {
  direction?: 'forward' | 'backward';
}

const ChevronIcon = ({ direction, ...rest }: ChevronIconProps) => {
  const { i18n } = useTranslation();
  const getIconName = (direction: ChevronIconProps['direction'] = 'forward'): IconsNames => {
    if (direction === 'forward') {
      return i18n.language === 'en' ? 'Chevron_Right' : 'Chevron_Left';
    } else {
      return i18n.language === 'en' ? 'Chevron_Left' : 'Chevron_Right';
    }
  };
  return <Icon name={getIconName(direction)} {...rest} />;
};

export { ChevronIcon };
