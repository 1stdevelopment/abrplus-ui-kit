
import { batch } from '@utilities';
import { ActionButton } from './action';
import { IconButton } from './icon';
import { NegativeButton } from './negative';
import { PrimaryButton } from './primary';
import { SecondaryButton } from './secondary';
import { SecondaryQuietButton } from './secondaryQuiet';
import { TertiaryButton } from './tertiary';
import { TextButton } from './text';

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

export { Button };
