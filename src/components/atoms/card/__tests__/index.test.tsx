import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from '../index.stories'; // Adjust the path as necessary
// Compose the stories for testing
const { Default, CustomClass } = composeStories(stories);

describe('Card Component', () => {
  // Test case: Renders the children passed to the Card component
  it('renders the children correctly', () => {
    // Arrange: Render the Default story (which passes children as a prop)
    const { getByText } = render(<Default />);

    // Act: Find the text content passed as children
    const childElement = getByText('Card Text');

    // Assert: Ensure the child content is rendered
    expect(childElement).toBeInTheDocument();
  });

  // Test case: Renders with the default classes
  it('renders with the default classes', () => {
    // Arrange: Render the Default story
    const { container } = render(<Default />);

    // Act: Find the card container element
    const cardElement = container.firstChild;

    // Assert: Ensure the default classes are applied (from tailwind-merge)
    expect(cardElement).toHaveClass('bg-white-ff card-shadow w-full rounded p-6');
  });

  // Test case: Applies the custom className properly
  it('applies the custom className', () => {
    // Arrange: Render the Default story with an additional className
    const { container } = render(<CustomClass />);

    // Act: Find the card container element
    const cardElement = container.firstChild;

    // Assert: Check if the custom className is applied
    expect(cardElement).toHaveClass('bg-tertiary-dark-1');
  });

  // Test case: Renders the component with vertical layout (from Flex component)
  it('renders with vertical layout', () => {
    // Arrange: Render the Default story
    const { container } = render(<Default />);

    // Act: Find the card container element
    const cardElement = container.firstChild;

    // Assert: Ensure the 'ant-flex-vertical' class is applied to enforce vertical layout
    expect(cardElement).toHaveClass('ant-flex-vertical'); // Check for vertical layout class
  });
});
