import { ModalButtonProps, ModalProps } from './type';
export type ConfirmModalProps = (ModalProps & ModalButtonProps) & {
    renderFooter?: React.ReactNode;
};
declare const ConfirmModal: ({ children, title, onSubmit, onDiscard, submitTitle, discardTitle, isLoadingSubmit, renderFooter, ...rest }: ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
export { ConfirmModal };
