export type Size = {
    width: number;
    height: number;
};
declare function getWindowDimensions(): {
    width: number;
    height: number;
};
/**
 * This was implemented with proxy because of perf, so destructor response
 *
 * @example
 *   const { width, height } = useWindowDimensions();
 */
declare function useWindowDimensions(): Size;
export { getWindowDimensions, useWindowDimensions };
