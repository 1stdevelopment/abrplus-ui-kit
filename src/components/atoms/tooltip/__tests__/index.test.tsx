import { fireEvent, render, screen } from '@testing-library/react';

import { Tooltip } from '..';

describe('Atoms > Tooltip', () => {
  it('renders children correctly', () => {
    render(
      <Tooltip variant="default" title="Test Title">
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.getByRole('button', { name: /hover me/i })).toBeInTheDocument();
  });

  it('renders custom TooltipTitle component when title is a string', async () => {
    render(
      <Tooltip variant="default" title="Test Title" iconName="Info_fill">
        <button>Hover me</button>
      </Tooltip>,
    );

    fireEvent.mouseOver(screen.getByRole('button', { name: /hover me/i }));
    expect(await screen.findByText('Test Title')).toBeInTheDocument();
    const iconElement = screen.getByRole('img');
    expect(iconElement).toBeInTheDocument();
  });

  it('displays custom content when title is a React node', async () => {
    render(
      <Tooltip variant="default" title={<span data-testid="custom-node">Custom Node</span>}>
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.queryByTestId('custom-node')).not.toBeInTheDocument();
    fireEvent.mouseOver(screen.getByRole('button', { name: /hover me/i }));
    expect(await screen.findByTestId('custom-node')).toBeInTheDocument();
  });
});
