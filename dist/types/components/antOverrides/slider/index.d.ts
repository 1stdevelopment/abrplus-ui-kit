import { SliderSingleProps as AntSliderProps } from 'antd';
export interface SliderProps extends AntSliderProps {
    size?: number;
}
export declare const Slider: ({ size, ...rest }: SliderProps) => import("react/jsx-runtime").JSX.Element;
