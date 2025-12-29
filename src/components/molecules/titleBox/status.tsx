import { colors } from '@configs';

import { Icon } from '../..';

export interface StatusBoxProps {
  active: boolean | undefined;
}

const StatusBox = ({ active }: StatusBoxProps) => {
  return (
    <Icon
      name={active ? 'Checkmark_Circle' : 'Close_Circle_fill'}
      color={colors[active ? 'positive' : 'negative']}
    />
  );
};

export { StatusBox };
