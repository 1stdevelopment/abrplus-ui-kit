import { batch } from '@utilities';
import { ActionButton, ActionButtonProps } from './action';
import { IconButton, IconButtonProps } from './icon';
import { NegativeButton } from './negative';
import { PrimaryButton } from './primary';
import { SecondaryButton } from './secondary';
import { SecondaryQuietButton } from './secondaryQuiet';
import {
  ButtonMode,
  ButtonProps,
  buttonDefaultClasses,
  fontSizePicker,
  paddingPicker,
} from './shared';
import { TertiaryButton } from './tertiary';
import { TextButton, TextButtonProps } from './text';

const Button = batch({
  Primary: PrimaryButton,
  Secondary: SecondaryButton,
  Tertiary: TertiaryButton,
  SecondaryQuiet: SecondaryQuietButton,
  Icon: IconButton,
  Negative: NegativeButton,
  Action: ActionButton,
  Text: TextButton,
});

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonDefaultClasses, fontSizePicker, paddingPicker };
export type { ActionButtonProps, ButtonMode, ButtonProps, IconButtonProps, TextButtonProps };
