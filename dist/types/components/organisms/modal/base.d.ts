import { ModalButtonProps, ModalProps } from './type';
export type BaseModalProps = (ModalButtonProps & Omit<ModalProps, 'description'>) & {
    renderFooter?: React.ReactNode;
};
declare const BaseModal: ({ children, submitTitle, discardTitle, onSubmit, onDiscard, title, onClose, isLoadingSubmit, renderFooter, ...rest }: BaseModalProps) => import("react/jsx-runtime").JSX.Element;
export { BaseModal };
