import { colors } from '@configs';
import { Flex, Text } from '../../antOverrides';
import { Icon, IconsNames } from '../icon';

export const TooltipTitle = ({ title, iconName }: { title: string; iconName?: IconsNames }) => (
  <Flex align="center" gap={8}>
    <Text size={14} color={colors.white_ff}>
      {title}
    </Text>
    {iconName && <Icon name={iconName} />}
  </Flex>
);
