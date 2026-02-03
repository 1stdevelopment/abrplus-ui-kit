import { ModalButtonProps, ModalProps } from './type';
export type InfoModalProps = ModalProps & ModalButtonProps;
declare const InfoModal: ({ children, title, onSubmit, onDiscard, submitTitle, discardTitle, isLoadingSubmit, error, ...rest }: InfoModalProps) => import("react/jsx-runtime").JSX.Element;
export { InfoModal };
