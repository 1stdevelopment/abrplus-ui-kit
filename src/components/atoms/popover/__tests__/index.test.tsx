import { fireEvent, render, screen } from '@testing-library/react';

import { colors } from '@configs';

import { Popover } from '..';

describe('Atoms > Popover', () => {
  it('renders popover with header, content, and footer', async () => {
    render(
      <Popover headerTitle="Header Title" content="Popover content" footer="Footer content">
        <button>hover me</button>
      </Popover>,
    );

    fireEvent.mouseOver(screen.getByRole('button', { name: /hover me/i }));

    expect(await screen.findByText('Header Title')).toBeInTheDocument();
    expect(await screen.findByText('Popover content')).toBeInTheDocument();
    expect(await screen.findByText('Footer content')).toBeInTheDocument();
  });
  it('custom header and expect dose not render footer', async () => {
    render(
      <Popover headerTitle={<span data-testid="custom-header">Custom Header</span>}>
        <button>hover me</button>
      </Popover>,
    );

    fireEvent.mouseOver(screen.getByRole('button', { name: /hover me/i }));
    expect(await screen.findByTestId('custom-header')).toBeInTheDocument();
    expect(screen.queryByText('Footer content')).not.toBeInTheDocument();
  });

  it('renders popover with close button and triggers onClose', async () => {
    const onCloseMock = jest.fn();

    render(
      <Popover
        headerTitle="Header Title"
        content="Popover content"
        closeable={true}
        onClose={onCloseMock}
      >
        <button>hover me</button>
      </Popover>,
    );

    fireEvent.mouseOver(screen.getByRole('button', { name: /hover me/i }));

    const iconElement = await screen.findByRole('img');
    expect(iconElement).toBeInTheDocument();
  });

  it('expect onClose function called', async () => {
    const onCloseMock = jest.fn();

    render(
      <Popover
        headerTitle="Header Title"
        content="Popover content"
        closeable={true}
        onClose={onCloseMock}
      >
        <button>hover me</button>
      </Popover>,
    );

    fireEvent.mouseOver(screen.getByRole('button', { name: /hover me/i }));
    const iconElement = await screen.findByRole('img');
    expect(iconElement).toBeInTheDocument();
    fireEvent.click(iconElement);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('renders with custom size, color, and weight', () => {
    render(
      <Popover.Link size={20} color={colors.primary} weight="bold">
        Custom Link
      </Popover.Link>,
    );

    const textElement = screen.getByText('Custom Link');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle({
      color: colors.primary,
      fontSize: '20px',
      // fontWeight: '700',
    });
  });
});
