import { SelectProps } from '../types';
export interface SelectNotFoundProps extends Pick<SelectProps<any>, 'error' | 'noContentFoundMessage'> {
}
declare const SelectNotFound: ({ error, noContentFoundMessage }: SelectNotFoundProps) => import("react/jsx-runtime").JSX.Element;
export { SelectNotFound };
