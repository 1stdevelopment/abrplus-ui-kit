import { composeStories } from '@storybook/react';
import { fireEvent, render } from '@testing-library/react';

import * as IconStories from '../index.stories';

const { DefaultStory, Clickable } = composeStories(IconStories);

describe('Atoms > Icon', () => {
  // Test Case: Renders with default props
  it('renders with default props', () => {
    // Arrange: Render the Icon component using the Default story
    const { getByRole } = render(<DefaultStory />);

    // Act: Find the icon element
    const iconElement = getByRole('img');

    // Assert: Check if the icon element is in the document
    expect(iconElement).toBeInTheDocument();
  });

  // Test Case: Renders with different sizes
  it('renders with different sizes', () => {
    // Arrange: Render the Icon component with a large size prop
    const { container } = render(<DefaultStory size="large" />);

    // Act: Find the SVG element within the icon
    const iconElement = container.querySelector('svg');

    // Assert: Check if the SVG has the correct width and height attributes
    expect(iconElement).toHaveAttribute('width', '24');
    expect(iconElement).toHaveAttribute('height', '24');
  });

  // Test Case: Handles click events
  it('handles click events', () => {
    // Arrange: Set up a mock function for the onClick event
    const onClickMock = jest.fn();
    const { getByRole } = render(<Clickable onClick={onClickMock} />);

    // Act: Find the icon element and simulate a click event
    const iconElement = getByRole('img');
    fireEvent.click(iconElement);

    // Assert: Verify that the mock function was called once
    expect(onClickMock).toHaveBeenCalled();
  });

  // Test Case: Applies custom styles correctly
  it('applies custom styles correctly', () => {
    // Arrange: Render the Icon component with custom style props
    const { getByRole } = render(<DefaultStory style={{ margin: '10px' }} />);

    // Act: Find the icon element
    const iconElement = getByRole('img');

    // Assert: Check if the icon element has the custom margin style
    expect(iconElement).toHaveStyle('margin: 10px');
  });

  // Test Case: Applies color correctly
  it('applies color correctly', () => {
    // Arrange: Render the Icon component with a custom color prop
    const { getByRole } = render(<DefaultStory color="#ff5733" />);

    // Act: Find the path element within the icon
    const iconElement = getByRole('img').querySelector('path');

    // Assert: Check if the path element has the correct fill color
    expect(iconElement).toHaveAttribute('fill', '#ff5733');
  });
});
