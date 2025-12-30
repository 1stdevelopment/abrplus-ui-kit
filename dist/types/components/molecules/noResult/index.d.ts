import { IconsNames, SelectProps } from 'src/main';
export interface NotResultTextProps extends Pick<SelectProps<any>, 'error' | 'noContentFoundMessage'> {
    errorIcon?: IconsNames;
    noContentIcon?: IconsNames;
}
declare const NotResult: ({ error, noContentFoundMessage, errorIcon, noContentIcon, }: NotResultTextProps) => import("react/jsx-runtime").JSX.Element;
export { NotResult };
