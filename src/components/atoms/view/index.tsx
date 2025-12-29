import { FlexProps } from 'antd';
import { Ref, forwardRef, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { colors } from '@configs';

import { Flex } from '../../antOverrides/flex';
import { Loading } from '../../antOverrides/loading';
import { Text } from '../../antOverrides/text';
import { Button } from '../../molecules/button';
import { composeRef, useElementLayout } from './helper';

type LayoutValue = {
  x: number;
  y: number;
  left: number;
  top: number;
  width: number;
  height: number;
};

export type LayoutEvent = {
  nativeEvent: {
    layout: LayoutValue;
    target: any;
  };
  timeStamp: number;
};

export interface ViewProps extends FlexProps {
  isLoading?: boolean;
  error?: string;
  onRetry?: () => void;
  loadingMinHeight?: number;
  loadingSize?: number;
  onLayout?: (e: LayoutEvent) => void;
}

const View = forwardRef(
  (
    {
      children,
      isLoading,
      onRetry,
      error,
      loadingMinHeight,
      loadingSize,
      onLayout,
      ...rest
    }: ViewProps,
    ref: Ref<HTMLElement>,
  ) => {
    const contentLayoutRef = useRef<HTMLDivElement>(null);

    useElementLayout(contentLayoutRef, onLayout);

    const finalRef = composeRef(ref, contentLayoutRef);

    const { t } = useTranslation();
    if (isLoading) {
      return (
        <Flex
          ref={finalRef}
          align="center"
          justify="center"
          className="h-full w-full"
          style={{
            minHeight: loadingMinHeight,
          }}
        >
          <Loading isLoading size={loadingSize} />
        </Flex>
      );
    }
    if (error) {
      return (
        <Flex
          ref={finalRef}
          align="center"
          justify="center"
          style={{
            minHeight: loadingMinHeight,
          }}
          gap={8}
          vertical
          className="h-full w-full"
        >
          <Text size={16} color={colors.negative}>
            {error}
          </Text>
          {onRetry && (
            <Button.Primary onClick={onRetry}>{t('common.message.tryAgain')}</Button.Primary>
          )}
        </Flex>
      );
    }
    return (
      <Flex ref={finalRef} {...rest}>
        {children}
      </Flex>
    );
  },
);

export { View };
