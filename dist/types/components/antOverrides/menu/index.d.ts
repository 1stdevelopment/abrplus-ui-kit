import { MenuProps } from 'antd';
declare const Menu: {
    ({ ...props }: MenuProps): import("react/jsx-runtime").JSX.Element;
    Item: Omit<import('react').FunctionComponent<import('antd').MenuItemProps>, ""> & (<T extends import('antd').MenuItemProps>(props: T extends infer U extends import('antd').MenuItemProps ? unknown extends U ? import('antd').MenuItemProps : U : import('antd').MenuItemProps, deprecatedLegacyContext?: any) => ReturnType<import('react').FunctionComponent<import('antd').MenuItemProps>>);
    ItemGroup: import('react').ForwardRefExoticComponent<Pick<import('antd/es/menu').MenuItemGroupProps, "children" | "style" | "className" | "title" | "eventKey" | "warnKey"> & import('react').RefAttributes<HTMLLIElement>>;
};
export { Menu };
export type { MenuProps };
