import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from '../index.stories'; // import all stories from the story file

// Compose the stories to use in the tests
const { Default, VerticalFlex, HorizontalFlex } = composeStories(stories);

describe('Atoms > Empty', () => {
  // Test Case 1: Renders the default Empty component with horizontal direction
  it('renders Default Empty component with horizontal direction', () => {
    const { container } = render(<Default />);
    const divElement = container.firstChild;

    // Assert the div has the correct flex and flex-row class
    expect(divElement).toHaveStyle({ flex: 1 });
    expect(divElement).toHaveClass('flex-row');
  });

  // Test Case 2: Renders the Empty component with vertical direction (VerticalFlex story)
  it('renders Empty component with vertical direction', () => {
    const { container } = render(<VerticalFlex />);
    const divElement = container.firstChild;

    // Assert the div has the correct flex and flex-col class
    expect(divElement).toHaveStyle({ flex: 2 });
    expect(divElement).toHaveClass('flex-col');
  });

  // Test Case 3: Renders the Empty component with horizontal direction and different flex value (HorizontalFlex story)
  it('renders Empty component with horizontal direction and flex 3', () => {
    const { container } = render(<HorizontalFlex />);
    const divElement = container.firstChild;

    // Assert the div has the correct flex and flex-row class
    expect(divElement).toHaveStyle({ flex: 3 });
    expect(divElement).toHaveClass('flex-row');
  });
});
