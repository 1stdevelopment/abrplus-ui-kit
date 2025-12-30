import { Collapse } from 'antd';
import { Children, ReactElement, RefObject, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Render } from 'src/components/atoms/render';
import { Icon, Text } from '../..';

interface AccordionItem {
  children: React.ReactNode;
  label: React.ReactNode;
}

export interface AccordionProps {
  currentIndex?: number;
  accordionRef?: RefObject<HTMLDivElement>;
  children: ReactElement<AccordionItem>[];
  indexedStyle?: boolean;
  transparent?: boolean;
  noPaddingItem?: boolean;
  noGapBetweenItems?: boolean;
  onChangeIndex?(key: number): void;
}

const Item = (_props: AccordionItem) => null;

const Accordion = ({
  children,
  accordionRef,
  onChangeIndex,
  currentIndex = 1,
  indexedStyle = true,
  noPaddingItem,
  noGapBetweenItems,
  transparent,
}: AccordionProps) => {
  const props = useMemo(() => {
    const prettifyChildren = ({ props }: ReactElement<AccordionItem>, index: number) => {
      let label = props.label;

      if (typeof label === 'string') {
        label = (
          <Text
            size={18}
            color={colors[currentIndex === index + 1 ? 'primary_dark_1' : 'primary_light_1']}
            weight={currentIndex === index + 1 ? 'bold' : 'medium'}
          >
            {label}
          </Text>
        );
      }

      return { ...props, label, key: index + 1 };
    };

    return Children.map(children, prettifyChildren);
  }, [children, currentIndex]);

  return (
    <div
      className={twMerge(
        'flex flex-1 flex-col gap-[16px] py-[20px]',
        indexedStyle && 'pe-[60px] ps-[16px]',
        noGapBetweenItems && 'gap-0',
      )}
      ref={accordionRef}
    >
      {props.map((item, index) => (
        <div className=" flex w-full items-start gap-[16px]" key={item.key}>
          <Render when={indexedStyle}>
            <div className="relative flex h-full w-[30px] flex-col">
              <div className="flex h-full items-start justify-center">
                <div
                  className={twMerge(
                    currentIndex > index ? 'bg-positive' : 'bg-primary-light-2',
                    `z-[1] mt-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full`,
                  )}
                >
                  <Render
                    when={currentIndex > index + 1}
                    fallback={
                      <Text color={colors.white_ff} size={16}>
                        {index + 1}
                      </Text>
                    }
                  >
                    <Icon name="Checkmark" size={18} color={colors.white_ff} />
                  </Render>
                </div>
              </div>
              <Render when={index !== props.length - 1}>
                <div
                  className={twMerge(
                    'border-primary-light-2 absolute left-[calc(50%-0.5px)] top-[25px] z-0 h-full w-[1px] border-l-[1px] border-dashed',
                    currentIndex > index && 'border-positive-light-2',
                  )}
                />
              </Render>
            </div>
          </Render>
          <Collapse
            accordion
            bordered={false}
            activeKey={currentIndex}
            expandIconPosition="end"
            onChange={(key) => {
              if (Array.isArray(key)) {
                return onChangeIndex?.(Number(key[0]));
              }

              return onChangeIndex?.(Number(key));
            }}
            items={[props[index]]}
            expandIcon={({ isActive }) => (
              <Icon
                name={isActive ? 'Chevron_Down' : 'Chevron_Up'}
                color={colors[isActive ? 'primary' : 'primary_light_1']}
              />
            )}
            style={{ boxShadow: '0 1px 6px 0 rgba(72, 88, 118, 0.16)' }}
            className={twMerge(
              `bg-white-ff w-full overflow-hidden border-b-0 [&_.ant-collapse-header]:cursor-default`,
              !indexedStyle
                ? '[&_.ant-collapse-header]:!bg-action/10'
                : transparent
                  ? '[&_.ant-collapse-header]:!bg-transparent'
                  : '[&_.ant-collapse-header]:!bg-light-1',
              noPaddingItem && '[&_.ant-collapse-header]:!p-0',
              indexedStyle ? 'rounded-lg' : 'rounded-none',
              // indexedStyle && '[&_.ant-collapse-header]:hover:!bg-positive/20',
              indexedStyle && '[&_.ant-collapse-header]:shadow-[0_1px_6px_0_rgba(72,88,118,0.16)]',
            )}
          />
        </div>
      ))}
    </div>
  );
};

Accordion.Item = Item;

export { Accordion };
