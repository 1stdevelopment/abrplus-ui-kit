import { colors } from '@configs';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as Story from '../index.stories';

// Compose the stories so we can test them
const { DefaultStory } = composeStories(Story);

describe('Atoms > BorderTitle', () => {
  // Test case: Renders the title text correctly
  it('renders the title text correctly', () => {
    // Arrange: Render the Default story of BorderedTitle
    const { getByText } = render(<DefaultStory />);

    // Act: Find the title element
    const titleElement = getByText('test');

    // Assert: Check if the title text is rendered in the document
    expect(titleElement).toBeInTheDocument();
  });

  // Test case: Renders horizontal lines based on alignment
  it('renders the correct horizontal lines for center alignment', () => {
    // Arrange: Render the BorderedTitle with center alignment
    const { container } = render(<DefaultStory align="center" />);

    // Act: Find the horizontal lines (hr elements)
    const horizontalLines = container.querySelectorAll('hr');

    // Assert: Two horizontal lines should be rendered for center alignment
    expect(horizontalLines.length).toBe(2);
  });

  // Test case: Renders only one horizontal line for start alignment
  it('renders one horizontal line for start alignment', () => {
    // Arrange: Render the BorderedTitle with start alignment
    const { container } = render(<DefaultStory align="start" />);

    // Act: Find the horizontal lines (hr elements)
    const horizontalLines = container.querySelectorAll('hr');

    // Assert: Only one horizontal line should be rendered for start alignment
    expect(horizontalLines.length).toBe(1);
  });

  // Test case: Renders with the correct text size
  it('applies the correct text size', () => {
    // Arrange: Render the Default story
    const { getByText } = render(<DefaultStory />);

    // Act: Find the title element
    const titleElement = getByText('test');

    // Assert: Check if the element has the correct text size applied
    expect(titleElement).toHaveStyle(`font-size: 50px`);
  });

  // Test case: Applies custom text color
  it('applies custom text color', () => {
    // Arrange: Render the BorderedTitle with a custom color
    const { getByText } = render(<DefaultStory textColor={colors.primary_dark_1} />);

    // Act: Find the title element
    const titleElement = getByText('test');

    // Assert: Check if the text element has the correct color style applied
    expect(titleElement).toHaveStyle(`color: ${colors.primary_dark_1}`);
  });
});
