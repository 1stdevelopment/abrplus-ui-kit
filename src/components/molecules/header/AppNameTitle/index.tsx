import i18n from 'i18next';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { colors, scopedRoutes } from '@configs';
import { useGetGeneralAllApps } from '@configs/global';

import { Button } from '../../../molecules';

export const AppNameTitle = () => {
  const navigate = useNavigate();
  const { data: allApps = [] } = useGetGeneralAllApps({
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const appTitle = useMemo(() => {
    return (
      allApps.find((app) => {
        return app.key?.toLowerCase() === __APP__?.toLowerCase();
      })?.key || ''
    );
  }, [allApps]);

  const handleClick = () => navigate(scopedRoutes.root.create());

  return (
    <Button.Text
      className="mt-1.5 !px-0"
      textProps={{ color: colors.primary_dark_1, size: 22 }}
      onClick={handleClick}
    >
      {`${__PLATFORM__ === 'onprem' || __LOCALHOST__ ? '' : '+'} ${appTitle}` ||
        i18n.t('common.literal.home')}
    </Button.Text>
  );
};
