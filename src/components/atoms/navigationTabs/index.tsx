import { CSSProperties, Children, ReactElement, ReactNode, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Flex } from '../../antOverrides/flex';
import { Text } from '../../antOverrides/text';

type TabProps<T extends string> = {
  tabKey: T;
  title?: string | ((color: string) => ReactNode);
  children: ReactElement | ReactNode;
  style?: CSSProperties | ((activeTabKey: T) => CSSProperties);
  className?: string | ((activeTabKey: T) => string);
  isVisible?: boolean;
  testID?: string;
};

interface NavigationTabsProps<T extends string> {
  children: ReactElement<TabProps<T>>[];
  onChange?: (activeTabKey: T) => void;
  wrapperStyle?: CSSProperties;
  wrapperClassName?: string;
  spaceBetweenTabs?: number;
  activeStyleMode?: 'underlined' | 'background' | 'textGlow';
  defaultTabKey?: T;
  extraAfterItem?: ReactNode | ((activeTabKey?: T) => ReactNode);
  extraBeforeItem?: ReactNode | ((activeTabKey?: T) => ReactNode);
  extraAfterChildren?: ReactNode | ((activeTabKey?: T) => ReactNode);
  extraBeforeChildren?: ReactNode | ((activeTabKey?: T) => ReactNode);
  tabFontSize?: number;
  tabsClassName?: string;
  tabClassName?: string;
  innerContentClassName?: string;
  tabsWrapperStyle?: CSSProperties;
  extraChildrenInheritBorder?: boolean;
  hasBorder?: boolean;
}

export const NavigationTabs = <T extends string>({
  children,
  onChange,
  wrapperStyle,
  wrapperClassName,
  spaceBetweenTabs,
  activeStyleMode = 'background',
  defaultTabKey,
  extraAfterItem,
  extraBeforeItem,
  extraBeforeChildren,
  extraAfterChildren,
  tabFontSize = 18,
  tabsClassName,
  tabClassName,
  tabsWrapperStyle,
  innerContentClassName,
  extraChildrenInheritBorder,
  hasBorder = true,
}: NavigationTabsProps<T>) => {
  const [currentTabKey, setCurrentTabKey] = useState<T | undefined>(undefined);

  useEffect(() => {
    const defaultActiveTab = Children.map(children, ({ props }) => props)[0];
    if (!defaultTabKey) {
      setCurrentTabKey(defaultActiveTab.tabKey);
      return;
    }
    setCurrentTabKey(defaultTabKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex style={wrapperStyle} vertical className={twMerge('w-full flex-1', wrapperClassName)}>
      <Flex
        align="center"
        className={twMerge(
          activeStyleMode === 'underlined' && hasBorder && 'border-light-7 border-b border-solid',
        )}
      >
        {extraBeforeItem && (
          <Flex
            justify="center"
            className={twMerge(
              'h-full px-2',
              extraChildrenInheritBorder && 'border-light-6 border-b border-solid',
            )}
          >
            {typeof extraBeforeItem === 'function'
              ? extraBeforeItem(currentTabKey)
              : extraBeforeItem}
          </Flex>
        )}
        <Flex
          align="center"
          className={twMerge(
            'w-full min-w-max flex-1 flex-row overflow-y-auto overflow-x-hidden',
            tabsClassName,
          )}
          gap={spaceBetweenTabs !== undefined ? spaceBetweenTabs : 24}
          style={tabsWrapperStyle}
        >
          {Children.map(
            children,
            ({ props: { tabKey, title, className, style, isVisible = true } }) =>
              isVisible ? (
                <Flex
                  key={tabKey}
                  align="center"
                  justify="center"
                  style={typeof style === 'function' ? style(currentTabKey || tabKey) : style}
                  className={twMerge(
                    'relative h-full min-h-[35px] w-fit min-w-[24px] cursor-pointer rounded',
                    tabClassName,
                    typeof title === 'string' ? 'px-4 pb-2 pt-4' : 'px-0 pb-2 pt-4',
                    tabKey === currentTabKey &&
                      (activeStyleMode === 'background'
                        ? 'after:bg-primary-light-1 z-auto overflow-hidden px-4 after:absolute after:left-0 after:top-0 after:h-full after:w-full'
                        : activeStyleMode === 'underlined'
                          ? ' after:border-action z-auto after:absolute after:left-0 after:top-0 after:h-full after:w-full after:border-b-[2px] after:border-solid'
                          : undefined),
                    typeof className === 'function'
                      ? className(currentTabKey || tabKey)
                      : className,
                  )}
                  onClick={() => {
                    setCurrentTabKey(tabKey);
                    onChange?.(tabKey);
                  }}
                >
                  {typeof title === 'string' ? (
                    <Text
                      size={tabFontSize}
                      weight="medium"
                      className={twMerge(
                        'z-10',
                        activeStyleMode === 'background' &&
                          tabKey === currentTabKey &&
                          'text-white-ff',
                        activeStyleMode === 'underlined' &&
                          tabKey === currentTabKey &&
                          'text-action',
                      )}
                    >
                      {title}
                    </Text>
                  ) : (
                    title?.(tabKey === currentTabKey ? colors.negative : colors.negative)
                  )}
                </Flex>
              ) : null,
          )}
        </Flex>
        {extraAfterItem && (
          <Flex
            justify="center"
            align="center"
            className={twMerge(
              'h-full px-2',
              extraChildrenInheritBorder && 'border-light-6 border-b border-solid',
            )}
          >
            {typeof extraAfterItem === 'function' ? extraAfterItem(currentTabKey) : extraAfterItem}
          </Flex>
        )}
      </Flex>
      <Flex className={twMerge('max-w-full flex-1', innerContentClassName)}>
        {extraBeforeChildren && (
          <Flex>
            {typeof extraBeforeChildren === 'function'
              ? extraBeforeChildren(currentTabKey)
              : extraBeforeChildren}
          </Flex>
        )}
        {Children.map(children, ({ props: { tabKey, children } }) => {
          if (tabKey === currentTabKey) {
            return (
              <Flex className="max-w-full flex-1" key={tabKey}>
                {children}
              </Flex>
            );
          }

          return null;
        })}
        {extraAfterChildren && (
          <Flex>
            {typeof extraAfterChildren === 'function'
              ? extraAfterChildren(currentTabKey)
              : extraAfterChildren}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

NavigationTabs.Tab = <T extends string>(_props: TabProps<T>) => null;
