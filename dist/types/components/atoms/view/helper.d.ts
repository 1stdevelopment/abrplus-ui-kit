import { RefObject } from 'react';
/** Merge refs into one ref function to support ref passing. */
export declare function composeRef<T>(...refs: (React.Ref<T> | undefined)[]): React.Ref<T>;
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
declare function useElementLayout(ref: RefObject<any>, onLayout?: (e: LayoutEvent) => void): void;
export { useElementLayout };
