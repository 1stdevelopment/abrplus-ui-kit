import { composeStories } from '@storybook/react';
import { fireEvent, render } from '@testing-library/react';

import * as Story from '../index.stories';

// Adjust the path as necessary

// Compose stories for testing
const { DefaultStory, ClickableBox } = composeStories(Story);

describe('Atom > Box', () => {
  // Test case: Renders the children content correctly
  it('renders children content', () => {
    // Arrange: Render the Default story
    const { getByText } = render(<DefaultStory />);

    // Act: Find the children content
    const childElement = getByText('Default Child Content');

    // Assert: Ensure the children content is in the document
    expect(childElement).toBeInTheDocument();
  });

  // Test case: Handles onClick event correctly
  it('handles onClick event', () => {
    // Mock the onClick handler
    const handleClick = jest.fn();

    // Arrange: Render the ClickableBox story with a mocked onClick handler
    const { getByText } = render(<ClickableBox onClick={handleClick} />);

    // Act: Find the clickable box and simulate a click event
    const clickableElement = getByText('Clickable Box Content');
    fireEvent.click(clickableElement);

    // Assert: Ensure the click handler is called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test case: Doesn't throw error if onClick is undefined
  it('does not throw error if onClick is undefined', () => {
    // Arrange: Render the Default story without an onClick handler
    const { getByText } = render(<DefaultStory />);

    // Act: Find the clickable element and simulate a click event
    const clickableElement = getByText('Default Child Content');

    // Assert: Simulate a click and ensure no errors are thrown
    expect(() => fireEvent.click(clickableElement)).not.toThrow();
  });
});
