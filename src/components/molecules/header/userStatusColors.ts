import { colors } from '@configs';
import { UserStatus } from '@configs/global';

export const userItemStatus = {
  [UserStatus.OnLife]: colors.negative,
  [UserStatus.Busy]: colors.negative_dark_1,
  [UserStatus.Available]: colors.positive,
  [UserStatus.Rest]: colors.primary,
};
