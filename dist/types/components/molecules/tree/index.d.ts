import { ITreeOption } from '../../../configs';
import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { TreeProps as AntTreeProps } from 'antd/lib';
import { ReactNode } from 'react';
import { IconsNames } from '../../atoms/icon';
export interface TreeProps<T extends TreeDataType> extends Omit<AntTreeProps, 'switcherIcon' | 'icon' | 'treeData'> {
    switcherIconName?: IconsNames;
    nodeClassName?: string;
    titleHeader: string;
    isLoading?: boolean;
    titleIcon: IconsNames;
    treeData: T[];
    renderRightIcons?: (node: T) => ReactNode;
    renderIcon?: ((treeNode: T) => ReactNode) | ReactNode;
    isExpandable?: boolean;
    onDrawerToggle?: (open: boolean) => void;
    expandedWidth?: number;
    collapsedWidth?: number;
    onSearch?: (value: string) => void;
    hasSearch?: boolean;
    infiniteProps?: {
        isInfinite: boolean;
        hasMore: boolean;
        fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<InfiniteData<unknown, unknown>, Error>>;
    };
}
export interface TreeDataType extends ITreeOption {
}
export declare const Tree: <T extends TreeDataType>({ switcherIconName, treeData, isLoading, className, nodeClassName, renderIcon, renderRightIcons, isExpandable, titleHeader, titleIcon, expandedWidth, collapsedWidth, onDrawerToggle, infiniteProps, onSearch, hasSearch, ...rest }: TreeProps<T>) => import("react/jsx-runtime").JSX.Element;
