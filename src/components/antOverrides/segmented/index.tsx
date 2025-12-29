import {
  Segmented as AntSegmented,
  SegmentedProps as AntSegmentedProps,
  ConfigProvider,
} from 'antd';

export interface SegmentedProps<T> extends AntSegmentedProps<T> {}

export const SegmentedSwitch = <T,>({ style, ...rest }: SegmentedProps<T>) => {
  return (
    <ConfigProvider>
      <AntSegmented
        {...rest}
        style={{
          padding: 2,
          ...style,
        }}
      />
    </ConfigProvider>
  );
};
