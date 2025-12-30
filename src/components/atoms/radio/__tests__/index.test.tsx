import { fireEvent, render, screen } from '@testing-library/react';
import { Radio } from '..';

describe(' Atoms > Radio', () => {
  it('renders a radio button with default props', () => {
    render(<Radio>Option 1</Radio>);

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('handles change events', () => {
    const handleChange = vi.fn();
    render(<Radio onChange={handleChange}>Option 1</Radio>);

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders a disabled radio button', () => {
    render(<Radio disabled>Disabled Option</Radio>);

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });

  it('renders a checked radio button', () => {
    render(<Radio checked>Checked Option</Radio>);

    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('renders a radio group', () => {
    render(
      <Radio.Group>
        <Radio value={1}>Option 1</Radio>
        <Radio value={2}>Option 2</Radio>
        <Radio value={3}>Option 3</Radio>
      </Radio.Group>,
    );

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(3);

    radios.forEach((radio, index) => {
      expect(radio).toBeInTheDocument();
      expect(screen.getByText(`Option ${index + 1}`)).toBeInTheDocument();
    });
  });

  it('changes radio button in group when clicked', () => {
    const handleChange = vi.fn();
    render(
      <Radio.Group onChange={handleChange}>
        <Radio value={1}>Option 1</Radio>
        <Radio value={2}>Option 2</Radio>
        <Radio value={3}>Option 3</Radio>
      </Radio.Group>,
    );

    const radio = screen.getByLabelText('Option 2');
    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalled();
  });
});
