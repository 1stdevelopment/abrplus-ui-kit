import { Breadcrumb as AntBreadcrumb, BreadcrumbProps } from 'antd';
import { Link } from 'react-router-dom';

import { colors } from '@configs';

import { Text } from '../../antOverrides/text';
import { Icon } from '../../atoms/icon';

export interface AntBreadCrumbProps extends BreadcrumbProps {
  themeColor?: string; //TODOSH
}

export const Breadcrumb = (props: AntBreadCrumbProps) => {
  return (
    <AntBreadcrumb
      {...props}
      separator={<Icon name="Chevron_Left" size={22} color={props.themeColor} />}
      itemRender={(route, _, items) => {
        if (!route.title) return null;

        const last = items.indexOf(route) === items.length - 1;

        if (last) {
          return (
            <Text size={16} weight="medium" color={colors.primary_dark_1}>
              {route.title}
            </Text>
          );
        }
        return route.path ? (
          <Link to={route.path!}>
            <Text size={16} weight="medium" color={props.themeColor}>
              {route.title}
            </Text>
          </Link>
        ) : (
          <div onClick={route.onClick!} className="cursor-pointer">
            <Text size={16} weight="medium" color={props.themeColor}>
              {route.title}
            </Text>
          </div>
        );
      }}
    />
  );
};
