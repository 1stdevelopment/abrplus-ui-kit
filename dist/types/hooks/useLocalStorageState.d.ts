import { Dispatch, SetStateAction } from 'react';
declare function useLocalStorageState<T extends string | number>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>];
export { useLocalStorageState };
