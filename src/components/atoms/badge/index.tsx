import { Badge as BadgeAnt, BadgeProps } from 'antd';

const Badge = ({ children, ...rest }: BadgeProps) => {
  return <BadgeAnt {...rest}>{children}</BadgeAnt>;
};

export { Badge };
