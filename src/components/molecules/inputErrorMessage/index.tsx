import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Text } from '../../antOverrides/text';
import { Render } from '@utilities';

export interface ErrorProps {
  name?: string;
  children?: React.ReactNode;
  textColor?: string;
  message?: string;
  testID?: string;
  className?: string;
}

export const InputErrorMessage = ({
  children,
  message,
  textColor,
  className,
}: ErrorProps) => {
  return (
    <div className={twMerge('inputErrorMessage h-6 justify-center', className)}>
      <Render when={message} fallback={children}>
        <Text weight="normal" size={12} color={textColor ? textColor : colors.negative}>
          {message}
        </Text>
      </Render>
    </div>
  );
};
