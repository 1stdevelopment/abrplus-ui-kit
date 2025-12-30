import { HTMLAttributes } from 'react';
interface AudioVisualizerProps {
    deviceId?: string;
    speakerId?: string;
    monitor?: 'on' | 'off';
    containerStyle?: HTMLAttributes<HTMLDivElement>['style'];
    containerClassName?: HTMLAttributes<HTMLDivElement>['className'];
    barContainerStyle?: HTMLAttributes<HTMLDivElement>['style'];
    barContainerClassName?: HTMLAttributes<HTMLDivElement>['className'];
    barStyle?: HTMLAttributes<HTMLDivElement>['style'];
    barClassName?: HTMLAttributes<HTMLDivElement>['className'];
    barsNumber?: number;
}
export declare const AudioVisualizer: ({ deviceId, speakerId, monitor, containerStyle, containerClassName, barContainerStyle, barContainerClassName, barStyle, barClassName, barsNumber, }: AudioVisualizerProps) => import("react/jsx-runtime").JSX.Element;
export {};
