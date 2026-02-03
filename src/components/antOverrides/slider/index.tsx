import { Slider as AntSlider, SliderSingleProps as AntSliderProps, ConfigProvider } from 'antd';

export interface SliderProps extends AntSliderProps {
  size?: number;
}

export const Slider = ({ size = 2, ...rest }: SliderProps) => {
  return (
    <ConfigProvider direction="ltr" theme={{ components: { Slider: { railSize: size } } }}>
      <AntSlider {...rest} />
    </ConfigProvider>
  );
};
