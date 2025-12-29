import { render, screen } from '@testing-library/react';
import { Separator } from '..';

describe('Atoms > Separator', () => {
  it('renders vertical', () => {
    render(<Separator />);

    const separator = screen.getByRole('separator');
    expect(separator).toHaveClass('mx-2 h-full w-[1px]');
    expect(separator).toHaveClass('bg-light-7');
  });

  it('renders horizontal', () => {
    render(<Separator direction="horizontal" />);

    const separator = screen.getByRole('separator');
    expect(separator).toHaveClass('my-2 h-[1px] w-full');
    expect(separator).toHaveClass('bg-light-7');
  });

  it('custom class name', () => {
    render(<Separator className="custom-class" />);

    const separator = screen.getByRole('separator');
    expect(separator).toHaveClass('custom-class');
  });
});
