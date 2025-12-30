import { IconMoonsProps } from '../../atoms';
export interface ChevronIconProps extends Omit<IconMoonsProps, 'name'> {
    direction?: 'forward' | 'backward';
}
declare const ChevronIcon: ({ direction, ...rest }: ChevronIconProps) => import("react/jsx-runtime").JSX.Element;
export { ChevronIcon };
