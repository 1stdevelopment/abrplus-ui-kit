import { Route } from 'react-route-type';
import { Link } from 'react-router-dom';

import { colors } from '@configs';
import { Breadcrumb as AntBreadcrumb } from '../../antOverrides/breadcrumb';
import { Text } from '../../antOverrides/text';
import { Icon } from '../icon';

const Breadcrumbs = ({ route }: { route: Route<any, any> }) => {
  const routeMap = route.useMap();

  const items = routeMap.map(({ title, create }) => ({ title, path: create() }));

  return (
    <AntBreadcrumb
      items={items}
      separator={<Icon name="Chevron_Left" size={22} color={colors.primary} />}
      itemRender={(route, _, items) => {
        if (!route.title || !route.path) return null;

        const last = items.indexOf(route) === items.length - 1;

        if (last) {
          return (
            <Text size={16} weight="medium" color={colors.primary}>
              {route.title}
            </Text>
          );
        }

        return (
          <Link to={route.path!}>
            <Text size={16} weight="medium" color={colors.secondary}>
              {route.title}
            </Text>
          </Link>
        );
      }}
    />
  );
};

export { Breadcrumbs };
