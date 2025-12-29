import { twMerge } from 'tailwind-merge';

export interface EmptyProps {
  flex: number;
  direction?: 'vertical' | 'horizontal';
}

export const Empty = ({ flex, direction = 'horizontal' }: EmptyProps) => {
  return (
    <div
      className={twMerge('flex', direction === 'horizontal' ? 'flex-row' : 'flex-col')}
      style={{ flex }}
    />
  );
};
