import { AvatarProps } from 'antd';
import { PopoverProps } from 'antd/lib';
import { CSSProperties } from 'react';
interface AvatarGroupProps extends AvatarProps {
    max?: {
        count?: number;
        style?: CSSProperties;
        popover?: PopoverProps;
    };
}
declare const Avatar: {
    ({ className, ...props }: AvatarProps): import("react/jsx-runtime").JSX.Element;
    Group: ({ className, max, ...props }: AvatarGroupProps) => import("react/jsx-runtime").JSX.Element;
};
export { Avatar };
