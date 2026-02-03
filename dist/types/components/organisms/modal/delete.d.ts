import { ModalButtonProps, ModalProps } from './type';
export type DeleteModalProps = ModalProps & ModalButtonProps;
declare const DeleteModal: ({ children, title, onSubmit, onDiscard, submitTitle, discardTitle, isLoadingSubmit, ...rest }: DeleteModalProps) => import("react/jsx-runtime").JSX.Element;
export { DeleteModal };
