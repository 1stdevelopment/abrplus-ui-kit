export declare const useDebounce: <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number) => (...args: Parameters<T>) => void;
