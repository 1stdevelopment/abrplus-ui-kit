import './index.css';

import { AbrplusUIKit, APP_NAME, AppColorSchema, colors, ColorScheme } from '@configs';
import { Breadcrumb as AntBreadcrumb, BreadcrumbProps } from 'antd';
import { Link } from 'react-router-dom';

import { Text } from '../../antOverrides/text';
import { Icon } from '../../atoms/icon';

export interface AntBreadCrumbProps extends BreadcrumbProps {
}

export const Breadcrumb = (props: AntBreadCrumbProps) => {
  const appName = AbrplusUIKit.config().getAppName()
  const color = colors[appName as keyof ColorScheme] as AppColorSchema
const actionColor=color.action
  return (
    <AntBreadcrumb
      {...props}
      separator={<Icon name="Chevron_Left" size={22} color={actionColor} />}
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
            <Text size={16} weight="medium" color={actionColor}>
              {route.title}
            </Text>
          </Link>
        ) : (
          <div onClick={route.onClick!} className="cursor-pointer">
            <Text size={16} weight="medium" color={actionColor}>
              {route.title}
            </Text>
          </div>
        );
      }}
    />
  );
};
