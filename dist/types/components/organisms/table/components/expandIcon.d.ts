export interface ExpandIconProps {
    expanded: boolean;
    expandable: boolean;
    onExpand: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
declare const ExpandIcon: ({ expandable, expanded, onExpand }: ExpandIconProps) => import("react/jsx-runtime").JSX.Element | null;
export { ExpandIcon };
