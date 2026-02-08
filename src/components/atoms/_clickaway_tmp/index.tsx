import React, { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -------------------------------------------------------------------------- */
export interface ClickAwayListenerProps {
  children: React.ReactNode; // The child component that the listener wraps
  onClickAway: () => void; // Callback function when a click away is detected
  document?: Document; // prefered document to get listened
  active?: boolean; // Whether the listener is active
  className?: string;
  hasDefaultStyle?: boolean;
}
/* -------------------------------------------------------------------------- */

// TODO - Test and StoryBook
const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
  children,
  onClickAway,
  document = window.document,
  active = true,
  className,
  hasDefaultStyle = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClickAway();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickAway, active, document]);

  return (
    <div
      ref={containerRef}
      {...(hasDefaultStyle
        ? { className: twMerge('flex h-full w-full flex-1', className) }
        : { className })}
    >
      {' '}
      {children}
    </div>
  );
};

export { ClickAwayListener };
