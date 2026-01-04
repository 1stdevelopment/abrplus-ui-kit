import { TabsProps } from 'antd';
interface TabProps extends TabsProps {
}
declare const Tab: {
    (props: TabsProps): import("react/jsx-runtime").JSX.Element;
    TabPane: import('react').FC<import('antd').TabPaneProps>;
};
export { Tab };
export type { TabProps };
