import { batch } from '@utilities';

import { BaseModal, BaseModalProps } from './base';
import { ConfirmModal, ConfirmModalProps } from './confirm';
import { DeleteModal, DeleteModalProps } from './delete';
import { ErrorModal, ErrorModalProps } from './error';
import { InfoModal, InfoModalProps } from './info';

const Modal = batch({
  Base: BaseModal,
  Confirm: ConfirmModal,
  Error: ErrorModal,
  Delete: DeleteModal,
  Info: InfoModal,
});

export { Modal };
export type {
  BaseModalProps,
  ConfirmModalProps,
  DeleteModalProps,
  ErrorModalProps,
  InfoModalProps,
};
