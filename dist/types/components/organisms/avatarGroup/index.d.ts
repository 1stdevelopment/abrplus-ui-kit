import { LogoProps } from 'src/components/molecules';
import { FlexProps } from '../../antOverrides';
import { PopoverProps } from '../../atoms';
export interface AvatarGroupItemType {
    id?: string;
    name?: string;
    imageSrc?: string;
}
export interface AvatarGroupItemsProps<T extends AvatarGroupItemType = AvatarGroupItemType> {
    items: T[];
    renderItem?: (item: T) => JSX.Element;
    max?: number;
    avatarProps?: {
        size?: number;
    };
    nameExtractor?: (item: T) => string;
    hasAnimation?: boolean;
    onClickAvatar?: (item: T) => void;
    itemLogoProps?: LogoProps;
    containerProps?: FlexProps;
    popoverProps?: PopoverProps & {
        containerProps?: FlexProps;
    };
}
export declare function AvatarGroup<T extends AvatarGroupItemType>({ items, max, avatarProps: { size }, onClickAvatar, hasAnimation, nameExtractor, renderItem, itemLogoProps, containerProps, popoverProps, }: AvatarGroupItemsProps<T>): import("react/jsx-runtime").JSX.Element;
