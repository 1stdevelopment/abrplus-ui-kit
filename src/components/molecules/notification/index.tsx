import { notification } from 'antd/lib';
import { ArgsProps } from 'antd/lib/notification';
import { useTranslation } from 'react-i18next';

import { colors } from '@configs';

import { Flex } from '../../antOverrides';
import { Text } from '../../antOverrides/text';
import { VerticalLine } from '../../atoms';
import { Icon } from '../../atoms/icon';

notification.config({
  closeIcon: <Icon size={16} name={'Close'} color={colors.white_ff} />,
  placement: 'bottomRight',
  rtl: true,
  bottom: 0,
  duration: 7,
});
const useNotification = () => {
  const { t } = useTranslation();
  const success = (props: ArgsProps) => {
    notification.open({
      ...props,
      style: {
        backgroundColor: colors.positive,
        alignItems: 'center',
        borderRadius: 4,
      },
      //TODO if need button
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      icon: <Icon size={16} name={'Checkmark_Circle'} color={colors.white_ff} />,
      message: (
        <Flex className={'flex-1'}>
          <Text
            showTooltipOnTruncate={false}
            className="flex flex-1 "
            weight="medium"
            size={16}
            color={colors.white_ff}
          >
            {props.message}
          </Text>
          <VerticalLine color={colors.white_ff_20} className="min-h-full w-full" />
        </Flex>
      ),
    });
  };

  const neutral = (props: ArgsProps) => {
    notification.open({
      ...props,
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.primary_dark_1, borderRadius: 4, alignItems: 'center' },
      message: (
        <Flex gap={8}>
          <Text
            showTooltipOnTruncate={false}
            className="flex flex-1  "
            weight="medium"
            size={16}
            color={colors.white_ff}
          >
            {props.message}
          </Text>
          <VerticalLine color={colors.white_ff_20} className="min-h-full w-full" />
        </Flex>
      ),
    });
  };
  const informative = (props: ArgsProps) => {
    notification.open({
      ...props,
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.secondary, borderRadius: 4, alignItems: 'center' },
      icon: <Icon size={16} name={'information'} color={colors.white_ff} />,
      message: (
        <Flex gap={8}>
          <Text
            showTooltipOnTruncate={false}
            className="flex flex-1 "
            weight="medium"
            size={16}
            color={colors.white_ff}
          >
            {props.message}
          </Text>
          <VerticalLine color={colors.white_ff_20} className="min-h-full w-full" />
        </Flex>
      ),
    });
  };
  const negative = (props: ArgsProps) => {
    notification.open({
      ...props,
      // btn: (
      //   <Text className="self-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.negative, borderRadius: 4, alignItems: 'center' },
      icon: <Icon size={16} name={'Alert'} color={colors.white_ff} />,
      message: (
        <Flex gap={8}>
          <Text
            showTooltipOnTruncate={false}
            className=" flex flex-1 "
            weight="medium"
            size={16}
            color={colors.white_ff}
          >
            {props.message}
          </Text>
          <VerticalLine color={colors.white_ff_20} className="min-h-full w-full" />
        </Flex>
      ),
    });
  };

  const error = (error?: string) => {
    notification.open({
      style: { backgroundColor: colors.negative, borderRadius: 4, alignItems: 'center' },

      icon: <Icon size={16} name={'Alert'} color={colors.white_ff} />,
      message: (
        <Flex gap={8}>
          <Text
            showTooltipOnTruncate={false}
            weight="medium"
            size={16}
            className=" flex flex-1  "
            color={colors.white_ff}
          >
            {error || t('common.error.errorOccurred')}
          </Text>
          <VerticalLine color={colors.white_ff_20} className="min-h-full w-full" />
        </Flex>
      ),
    });
  };

  const successfullyAdded = () => {
    success({
      message: (
        <Text showTooltipOnTruncate={false} weight="medium" size={16} color={colors.white_ff}>
          {t('common.message.successfullyAdded')}
        </Text>
      ),
    });
  };

  const successfullyEdited = () => {
    success({
      message: (
        <Text showTooltipOnTruncate={false} weight="medium" size={16} color={colors.white_ff}>
          {t('common.message.successfullyEdited')}
        </Text>
      ),
    });
  };

  const successfullyDeleted = () => {
    success({
      message: (
        <Text showTooltipOnTruncate={false} weight="medium" size={16} color={colors.white_ff}>
          {t('common.message.successfullyDeleted')}
        </Text>
      ),
    });
  };

  const copied = () => {
    success({
      message: (
        <Text showTooltipOnTruncate={false} weight="medium" size={16} color={colors.white_ff}>
          {t('common.message.copied')}
        </Text>
      ),
    });
  };

  return {
    success,
    neutral,
    negative,
    informative,
    successfullyAdded,
    successfullyEdited,
    successfullyDeleted,
    copied,
    error,
  };
};

export { useNotification };
