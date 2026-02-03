import { colors } from '@configs';
import { Logo, LogoProps } from 'src/components/molecules';

import { Flex, FlexProps, Text } from '../../antOverrides';
import { Popover, PopoverProps, Render, View } from '../../atoms';

export interface AvatarGroupItemType {
  id?: string;
  name?: string;
  imageSrc?: string;
}
export interface AvatarGroupItemsProps<T extends AvatarGroupItemType = AvatarGroupItemType> {
  items: T[];
  renderItem?: (item: T) => JSX.Element;
  max?: number;
  avatarProps?: { size?: number };
  nameExtractor?: (item: T) => string;
  hasAnimation?: boolean;
  onClickAvatar?: (item: T) => void;
  itemLogoProps?: LogoProps;
  containerProps?: FlexProps;
  popoverProps?: PopoverProps & { containerProps?: FlexProps };
}

export function AvatarGroup<T extends AvatarGroupItemType>({
  items = [],
  max = 3,
  avatarProps: { size } = {},
  onClickAvatar,
  hasAnimation = true,
  nameExtractor,
  renderItem,
  itemLogoProps,
  containerProps,
  popoverProps,
}: AvatarGroupItemsProps<T>) {
  if (items.length === 0) {
    return <Text>-</Text>;
  }

  const getName = (item: T) => {
    return nameExtractor?.(item) ?? (item.name || '--');
  };

  return (
    <Flex {...containerProps}>
      {items.slice(0, max).map((item, index) => (
        <Render
          when={!!renderItem}
          fallback={
            <Logo
              key={item.id}
              style={{ marginInlineStart: index - 12, width: size, height: size }}
              imageSrc={item?.imageSrc}
              hasToolTip
              toolTipTitle={getName(item)}
              hasAnimation={hasAnimation}
              onClick={() => onClickAvatar?.(item)}
              {...itemLogoProps}
            />
          }
        >
          {renderItem?.(item)}
        </Render>
      ))}

      {items.length > max && (
        <Popover
          arrow
          color={colors.primary_dark_1}
          placement="left"
          overlayInnerStyle={{
            backgroundColor: colors.primary_dark_1,
            borderRadius: 4,
          }}
          trigger={['hover']}
          content={
            <View vertical>
              {items.slice(max).map((item) => (
                <Text key={item.id} color={colors.white_ff}>
                  {getName(item)}
                </Text>
              ))}
            </View>
          }
          {...popoverProps}
        >
          <Flex
            align="center"
            justify="center"
            className="z-50 -ms-3 h-6 w-6 rounded-full border-2 border-primary-light-3 bg-light-7"
            style={{ width: size, height: size }}
            {...popoverProps?.containerProps}
          >
            {`${items.length - max}+`}
          </Flex>
        </Popover>
      )}
    </Flex>
  );
}
