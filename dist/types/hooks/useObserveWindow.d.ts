export declare function useObserveWindow(): {
    getIsWidthSmallerThan: (query: number) => boolean | undefined;
    getIsWidthLargerThan: (query: number) => boolean | undefined;
    getIsWidthBetween: (queries: [number, number]) => boolean | undefined;
    isSmallerThanExtraLarge: boolean | undefined;
    isSmallerThanMedium: boolean | undefined;
    isSmallerThanSmall: boolean | undefined;
    isSmallerThenLarge: boolean | undefined;
};
