import { ModalProps as AntModalProps } from 'antd';

export interface ModalProps extends AntModalProps {
  error?: string;
}

export interface ModalButtonProps {
  onSubmit?: () => void;
  onDiscard?: () => void;
  submitTitle?: string;
  discardTitle?: string;
  isLoadingSubmit?: boolean;
}
