import { batch } from '@utilities';

import { BaseModal } from './base';
import { ConfirmModal } from './confirm';
import { DeleteModal } from './delete';
import { ErrorModal } from './error';
import { InfoModal } from './info';

const Modal = batch({
  Base: BaseModal,
  Confirm: ConfirmModal,
  Error: ErrorModal,
  Delete: DeleteModal,
  Info: InfoModal,
});

export { Modal };
