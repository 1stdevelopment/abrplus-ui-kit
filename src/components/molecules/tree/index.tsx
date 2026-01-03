import { ITreeOption, colors } from '@configs';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { Tree as AntTree, Spin } from 'antd';
import { TreeProps as AntTreeProps } from 'antd/lib';
import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { Flex } from '../../antOverrides/flex';
import { InfiniteLoader } from '../../antOverrides/infiniteLoader';
import { Text } from '../../antOverrides/text';
import { Render } from '../../atoms/behavioralAtoms/render';
import { Icon, IconsNames } from '../../atoms/icon';
import { IconButton } from '../button/icon';
import { TreeSearchBar } from './searchBar';

export interface TreeProps<T extends TreeDataType> extends Omit<
  AntTreeProps,
  'switcherIcon' | 'icon' | 'treeData'
> {
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
    fetchNextPage: (
      options?: FetchNextPageOptions | undefined,
    ) => Promise<InfiniteQueryObserverResult<InfiniteData<unknown, unknown>, Error>>;
  };
}

export interface TreeDataType extends ITreeOption {}

const renderTreeNodes = <T extends TreeDataType>(
  data: T[],
  renderIcon: TreeProps<T>['renderIcon'],
  nodeClassName?: string,
  renderRightIcons?: TreeProps<T>['renderRightIcons'],
  defaultIcon?: IconsNames,
): ReactNode => {
  return (
    <>
      {data.map((node) => (
        <AntTree.TreeNode
          key={node.value}
          isLeaf={!node.hasChildren}
          data={{
            title: node.label,
            key: node.value,
            children:
              node.children?.map((child) => ({
                title: child.label,
                key: child.value,
                children: [],
              })) || [],
          }}
          className={twMerge('flex items-center justify-between', nodeClassName)}
          title={
            <Flex className="w-full items-center justify-between p-1">
              {/* Left icon + title */}
              <Flex className="items-center gap-2">
                {node.icon ? (
                  <Icon size={20} name={node.icon} />
                ) : renderIcon ? (
                  typeof renderIcon === 'function' ? (
                    renderIcon(node)
                  ) : (
                    renderIcon
                  )
                ) : defaultIcon ? (
                  <Icon size={20} name={defaultIcon} />
                ) : (
                  <Icon size={20} name="folder_fill" />
                )}
                <Flex>
                  <Text className=" truncate">{node.label}</Text>
                </Flex>
              </Flex>

              {/* Right-side icons */}
              <Flex className="items-center gap-1">{renderRightIcons?.(node)}</Flex>
            </Flex>
          }
        >
          {node.children?.length
            ? renderTreeNodes(
                node.children as T[],
                renderIcon,
                nodeClassName,
                renderRightIcons,
                defaultIcon,
              )
            : null}
        </AntTree.TreeNode>
      ))}
    </>
  );
};

export const Tree = <T extends TreeDataType>({
  switcherIconName,
  treeData,
  isLoading,
  className,
  nodeClassName,
  renderIcon,
  renderRightIcons,
  isExpandable,
  titleHeader,
  titleIcon,
  expandedWidth = 350,
  collapsedWidth = 48,
  onDrawerToggle,
  infiniteProps,
  onSearch,
  hasSearch = false,
  ...rest
}: TreeProps<T>) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setIsExpanded((prev) => {
      const newState = !prev;
      onDrawerToggle?.(newState);
      return newState;
    });
  };

  const content = (
    <AntTree
      {...rest}
      data-testid="tree-container"
      switcherIcon={<Icon name={switcherIconName || 'Chevron_Down'} />}
      className={twMerge(
        className,
        'tiny-custom-scrollbar w-full overflow-y-auto overflow-x-hidden',
      )}
    >
      {renderTreeNodes(treeData, renderIcon, nodeClassName, renderRightIcons, titleIcon)}
    </AntTree>
  );

  return (
    <Flex
      vertical
      className={twMerge(
        'h-full w-[350px] max-w-[30px] bg-light-1 transition-all',
        '[&_.ant-tree_.ant-tree-node-content-wrapper:hover]:bg-primary-light-2/20',
        '[&_.ant-tree_.ant-tree-node-content-wrapper.ant-tree-node-selected]:bg-transparent',
      )}
      style={{
        width: isExpandable && !isExpanded ? `${collapsedWidth}px` : `${expandedWidth}px`,
        minWidth: isExpandable && !isExpanded ? `${collapsedWidth}px` : `${expandedWidth}px`,
        maxWidth: isExpandable && !isExpanded ? `${collapsedWidth}px` : `${expandedWidth}px`,
      }}
    >
      {isExpandable && (
        <Flex
          gap={4}
          className={twMerge(
            'relative border-light-7 pb-2.5 pl-0 pr-3 pt-3',
            isExpanded && 'border',
          )}
        >
          <Flex gap={8} {...(!isExpanded ? { vertical: true } : {})}>
            <Icon color={colors.primary_light_1} name={titleIcon} />
            <Text
              className={twMerge(!isExpanded && 'rotate-180')}
              style={!isExpanded ? { writingMode: 'vertical-rl' } : {}}
              weight="bold"
              color={colors.primary_light_1}
            >
              {titleHeader}
            </Text>
          </Flex>

          <IconButton
            color={colors.primary_light_1}
            iconName={!isExpanded ? 'Chevron_Right' : 'Chevron_Left'}
            onClick={handleDrawerToggle}
            data-testid="drawer-toggle"
            className="absolute left-[-10px] z-40 w-5 cursor-pointer items-center justify-center rounded-sm border border-light-7 bg-white-ff p-2"
          />
        </Flex>
      )}
      <Render when={isExpanded && hasSearch && onSearch}>
        <Flex className=" border border-primary-light-3/60 bg-white-ff p-2">
          <TreeSearchBar onSearch={onSearch!} />
        </Flex>
      </Render>

      {isExpanded && (
        <div className="tiny-custom-scrollbar flex h-full flex-col overflow-y-auto bg-white-ff">
          {isLoading ? (
            <Spin size="large" />
          ) : treeData.length === 0 ? (
            <Text size={14} className="text-gray-500">
              {t('common.error.noItem')}
            </Text>
          ) : infiniteProps ? (
            <div
              id="tree-scroll-container"
              className=" tiny-custom-scrollbar relative overflow-y-auto bg-white-ff"
            >
              <InfiniteLoader
                hasMore={infiniteProps?.hasMore}
                onNextPage={infiniteProps?.fetchNextPage}
                scrollableNodeId="tree-scroll-container"
              >
                {content}
              </InfiniteLoader>
            </div>
          ) : (
            content
          )}
        </div>
      )}
    </Flex>
  );
};
