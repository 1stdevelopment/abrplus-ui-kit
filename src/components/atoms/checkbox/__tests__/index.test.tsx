import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from '..';

describe('Checkbox and Checkbox Group Components', () => {
  // Test for individual Checkbox component
  it('renders and interacts with individual checkbox correctly', () => {
    const onChange = jest.fn();
    const { container } = render(<Checkbox onChange={onChange}>Test Checkbox</Checkbox>);

    // Find the checkbox input element within the rendered container
    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();

    if (checkbox) {
      // If there is a label element, check its content
      const label = container.querySelector('label');
      expect(label).toBeInTheDocument();
      if (label) {
        expect(label.textContent).toBe('Test Checkbox');
      }

      // Initially unchecked
      expect(checkbox).not.toBeChecked();

      // Click to check
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(onChange).toHaveBeenCalled();

      // Click to uncheck
      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    } else {
      // Fail the test if the checkbox is not found
      throw new Error('Checkbox not found');
    }
  });

  it('renders and handles disabled state for individual checkbox', () => {
    const { container } = render(<Checkbox disabled>Test Checkbox</Checkbox>);

    // Find the checkbox input element
    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();

    if (checkbox) {
      expect(checkbox).toBeDisabled();
    } else {
      // Fail the test if the checkbox is not found
      throw new Error('Checkbox not found');
    }
  });

  // Test for Checkbox Group component
  it('renders and interacts with checkbox group correctly', () => {
    const mockChangeHandler = jest.fn();
    const { container } = render(
      <Checkbox.Group
        options={[
          { label: 'Option 1', value: 'A' },
          { label: 'Option 2', value: 'B' },
          { label: 'Option 3', value: 'C' },
        ]}
        onChange={mockChangeHandler}
      />,
    );

    // Find all checkboxes within the container
    const option1 = container.querySelector('input[value="A"]');
    const option2 = container.querySelector('input[value="B"]');
    const option3 = container.querySelector('input[value="C"]');

    if (option1 && option2 && option3) {
      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
      expect(option3).toBeInTheDocument();

      // Click checkbox to check it
      fireEvent.click(option1);
      expect(mockChangeHandler).toHaveBeenCalled();

      // Click checkbox to uncheck it
      fireEvent.click(option1);
      expect(mockChangeHandler).toHaveBeenCalled();
    } else {
      // Fail the test if any checkbox is not found
      throw new Error('One or more checkboxes not found');
    }
  });
});
