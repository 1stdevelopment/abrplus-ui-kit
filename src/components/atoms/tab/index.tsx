import './index.css';

import { colors } from '@configs';
import { ConfigProvider, Tabs, TabsProps, ThemeConfig } from 'antd';

interface TabProps extends TabsProps {}

const TabConfig: ThemeConfig = {
  components: {
    Tabs: {
      inkBarColor: colors.secondary,
      itemColor: colors.primary,
      itemSelectedColor: colors.secondary,
      titleFontSize: 18,
      horizontalItemPadding: '0px',
      horizontalMargin: '0',
      itemHoverColor: colors.primary_light_1,
      itemActiveColor: colors.primary_light_2,
    },
  },
};

const Tab = (props: TabsProps) => {
  return (
    <ConfigProvider theme={TabConfig}>
      <Tabs {...props} />
    </ConfigProvider>
  );
};

Tab.TabPane = Tabs.TabPane;
export { Tab };
export type { TabProps };
