import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

const Clickable = ({ children, onClick, className, ...rest }: BoxProps) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        'hover:bg-light-2 flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Clickable };
