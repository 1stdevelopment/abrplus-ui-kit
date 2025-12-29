import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';

import * as TreeStories from '../index.stories';

const { Expandable, DefaultStory } = composeStories(TreeStories);

describe('Tree Component (Storybook)', () => {
  test('renders with default props', async () => {
    // ✅ Arrange
    render(<DefaultStory />);

    // ✅ Act & Assert
    expect(await screen.findByText('Category 1')).toBeInTheDocument();
  });

  test('handles expandable mode correctly', async () => {
    render(<Expandable />);

    const toggleButton = screen.getByTestId('drawer-toggle');

    // ✅ Assert
    expect(screen.getByTestId('tree-container')).toBeInTheDocument();

    // ✅ Act
    fireEvent.click(toggleButton);

    // ✅ Assert
    expect(screen.queryByTestId('tree-container')).not.toBeInTheDocument();

    // ✅ Act
    fireEvent.click(toggleButton);

    // ✅ Assert
    expect(screen.getByTestId('tree-container')).toBeInTheDocument();
  });
});
