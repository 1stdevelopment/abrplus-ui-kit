import { twMerge } from 'tailwind-merge';

export interface SeparatorProps {
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

export const Separator = ({ direction = 'vertical', className }: SeparatorProps) => {
  return (
    <div
      role="separator"
      className={twMerge(
        'bg-light-7',
        direction === 'vertical' ? 'mx-2 h-full w-[1px]' : 'my-2 h-[1px] w-full',
        className,
      )}
    />
  );
};
