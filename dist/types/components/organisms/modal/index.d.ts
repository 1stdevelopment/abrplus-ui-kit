import { BaseModalProps } from './base';
import { ConfirmModalProps } from './confirm';
import { DeleteModalProps } from './delete';
import { ErrorModalProps } from './error';
import { InfoModalProps } from './info';
declare const Modal: {
    readonly Confirm: ({ children, title, onSubmit, onDiscard, submitTitle, discardTitle, isLoadingSubmit, renderFooter, ...rest }: ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
    readonly Delete: ({ children, title, onSubmit, onDiscard, submitTitle, discardTitle, isLoadingSubmit, ...rest }: DeleteModalProps) => import("react/jsx-runtime").JSX.Element;
    readonly Error: ({ children, title, onSubmit, submitTitle, isLoadingSubmit, ...rest }: ErrorModalProps) => import("react/jsx-runtime").JSX.Element;
    readonly Base: ({ children, submitTitle, discardTitle, onSubmit, onDiscard, title, onClose, isLoadingSubmit, renderFooter, ...rest }: BaseModalProps) => import("react/jsx-runtime").JSX.Element;
    readonly Info: ({ children, title, onSubmit, onDiscard, submitTitle, discardTitle, isLoadingSubmit, error, ...rest }: InfoModalProps) => import("react/jsx-runtime").JSX.Element;
};
export { Modal };
export type { BaseModalProps, ConfirmModalProps, DeleteModalProps, ErrorModalProps, InfoModalProps, };
