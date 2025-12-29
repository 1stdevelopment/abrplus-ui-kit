import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from '../index.stories'; // import all stories from story file

// Compose the stories
const { Default } = composeStories(stories);

describe('Atoms > Fallback', () => {
  // Test Case 1: Renders the Fallback component with default props (size 40)
  it('renders the Fallback component with default size', () => {
    // Arrange: Render the Default story of the Fallback component
    const { container } = render(<Default />);

    // Act: Find the div that wraps the svg (spinner)
    const spinnerWrapper = container.querySelector('div > div.grid');

    // Assert: Check if the spinner wrapper is rendered
    expect(spinnerWrapper).toBeInTheDocument();

    // Assert: Ensure the spinner wrapper has the correct style for default size (40px)
    expect(spinnerWrapper).toHaveStyle({ width: '40px', height: '40px' });

    // Act: Find the spinner svg inside the wrapper
    const spinnerSVG = spinnerWrapper?.querySelector('svg');

    // Assert: Check if the spinner SVG is rendered with the correct size attributes
    expect(spinnerSVG).toHaveAttribute('width', '40px');
    expect(spinnerSVG).toHaveAttribute('height', '40px');
  });

  // Test Case 2: Renders the Fallback component with custom size (60)
  it('renders the Fallback component with custom size (60)', () => {
    // Arrange: Render the Fallback component with a custom size (60)
    const { container } = render(<Default size={60} />);

    // Act: Find the div that wraps the svg (spinner)
    const spinnerWrapper = container.querySelector('div > div.grid');

    // Assert: Check if the spinner wrapper has the custom size applied
    expect(spinnerWrapper).toHaveStyle({ width: '60px', height: '60px' });

    // Act: Find the spinner svg inside the wrapper
    const spinnerSVG = spinnerWrapper?.querySelector('svg');

    // Assert: Check if the spinner SVG has the custom size attributes
    expect(spinnerSVG).toHaveAttribute('width', '60px');
    expect(spinnerSVG).toHaveAttribute('height', '60px');
  });

  // Test Case 3: Verify the correct alignment of the Fallback component
  it('renders the Fallback component aligned in the center', () => {
    // Arrange: Render the Fallback component using the Default story
    const { container } = render(<Default />);

    // Act: Get the Flex container that wraps the spinner
    const flexContainer = container.firstChild;

    // Assert: Ensure the Flex container has the appropriate classes for alignment
    expect(flexContainer).toHaveClass(
      'ant-flex',
      'ant-flex-align-center',
      'ant-flex-justify-center',
    );
  });
});
