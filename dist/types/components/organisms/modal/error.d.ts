import { ModalButtonProps, ModalProps } from './type';
export type ErrorModalProps = ModalProps & Omit<ModalButtonProps, 'discardTitle' | 'onDiscard'>;
declare const ErrorModal: ({ children, title, onSubmit, submitTitle, isLoadingSubmit, ...rest }: ErrorModalProps) => import("react/jsx-runtime").JSX.Element;
export { ErrorModal };
