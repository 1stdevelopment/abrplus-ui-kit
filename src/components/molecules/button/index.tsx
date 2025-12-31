import { batch } from '@utilities';
import { ActionButton, ActionButtonProps } from './action';
import { IconButton, IconButtonProps } from './icon';
import { NegativeButton } from './negative';
import { PrimaryButton } from './primary';
import { SecondaryButton, } from './secondary';
import { SecondaryQuietButton, } from './secondaryQuiet';
import { TertiaryButton, } from './tertiary';
import { TextButton, TextButtonProps } from './text';
import { ButtonProps } from './shared';

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

export {
  Button
};
export type {
  ButtonProps,
  TextButtonProps,
  ActionButtonProps,
  IconButtonProps
}
