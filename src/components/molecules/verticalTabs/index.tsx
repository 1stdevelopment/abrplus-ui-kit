import { colors } from '@configs';
import qs from 'qs';
import {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { Card, Flex, Text } from '../..';

interface TabProps {
  title: string;
  tab: string;
  children: ReactNode;
  className?: string;
  transparent?: boolean;
  extraNode?: ReactNode;
}

export interface VerticalTabsProps {
  defaultActiveTab?: string;
  query?: boolean;
  children: ReactElement<TabProps>[];
}

const Tab = (_props: TabProps) => null;

const VerticalTabs = ({ children, query = true, defaultActiveTab }: VerticalTabsProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState<string | undefined>(
    defaultActiveTab || children[0].props.tab,
  );

  const props = Children.map(children, (child) => child.props);

  const { activeContent, className, isTransparent, extraNode } = useMemo(() => {
    const activeProp = props.find((prop) => prop.tab === activeTab);

    if (!activeProp) return { activeContent: null, isTransparent: false };

    return {
      activeContent: activeProp.children,
      className: activeProp.className,
      isTransparent: activeProp.transparent,
      extraNode: activeProp.extraNode,
    };
  }, [activeTab, props]);

  const setQuery = useCallback(
    (tab: string) => {
      const currentQueries = new URLSearchParams(window.location.search);
      if (query) {
        if (tab) currentQueries.set('tab', tab);
      } else {
        if (currentQueries.has('tab')) currentQueries.delete('tab');
      }

      const q = Object.fromEntries(currentQueries.entries());

      const search = qs.stringify(q, { addQueryPrefix: true, encode: false });

      navigate({ search });
    },
    [navigate, query],
  );

  useEffect(() => {
    if (!searchParams || !query) return;

    const q = Object.fromEntries(searchParams.entries()) ?? {};

    if ('tab' in q && props.find((item) => item.tab === q['tab'])) {
      setActiveTab(q['tab']);
    }
  }, [props, query, searchParams]);

  return (
    <Flex vertical={false} className="p-6" flex={1} align="flex-start" gap={24}>
      <Flex className="h-full max-w-[200px]" vertical flex={1} gap={16}>
        {props.map(({ tab, title }) => (
          <Flex
            key={tab}
            className={twMerge(
              'cursor-pointer rounded-bl rounded-tl border-r-[3px] border-transparent px-[22px]  py-2',
              tab === activeTab &&
                'border-secondary bg-white-ff  shadow-[0_1px_2px_0_rgba(67,88,121,0.26)]',
            )}
            onClick={() => {
              setActiveTab(tab);

              setQuery(tab);
            }}
          >
            <Text
              size={16}
              color={colors[tab === activeTab ? 'secondary' : 'primary']}
              weight={tab === activeTab ? 'bold' : 'normal'}
            >
              {title}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Flex vertical flex={1} className="h-full">
        {isValidElement(extraNode) && extraNode}
        <Card
          className={twMerge(
            'small-custom-scrollbar h-fit overflow-y-hidden shadow-[0_3px_6px_0_rgba(67,88,121,0.16)]',
            isTransparent && 'bg-transparent p-0 !shadow-none',
            className,
          )}
        >
          {activeContent}
        </Card>
      </Flex>
    </Flex>
  );
};

VerticalTabs.Tab = Tab;

export { VerticalTabs };
