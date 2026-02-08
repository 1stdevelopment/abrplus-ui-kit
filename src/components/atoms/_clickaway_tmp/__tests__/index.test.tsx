import { composeStories } from '@storybook/react';
import { fireEvent, render } from '@testing-library/react';

import { ClickAwayListener, ClickAwayListenerProps } from '..';
import * as Story from '../index.stories';
// Compose the stories from Storybook
const { Default } = composeStories(Story);

describe('Atoms > ClickAwayListener', () => {
  // Test case: Renders the default ClickAwayListiner
  it('renders correctly with default props from story', () => {
    // Arrange: Render the ClickAwayListiner with using Defult Story
    const { getByText } = render(<Default />);

    // Act: Find box element with text
    const boxElement = getByText(/please/i);

    // Assert: Check if the element is in the document
    expect(boxElement).toBeInTheDocument();
  });

  // Helper function to render ClickAwayListener with default props and any overrides
  const renderWithProps = (props: Partial<ClickAwayListenerProps> = {}) => {
    // Create a Jest mock for the onClickAway callback
    const onClickAway = vi.fn();
    // Render the component and return the utility methods plus our mock
    const utils = render(
      <ClickAwayListener onClickAway={onClickAway} {...props}>
        <div data-testid="inside">Inside</div>
      </ClickAwayListener>,
    );
    return { ...utils, onClickAway };
  };

  it('calls onClickAway when clicking outside the container', () => {
    // Arrange: render the component and grab the mock callback
    const { onClickAway } = renderWithProps();
    // Act: simulate a mouse down event on the document body (outside the container)
    fireEvent.mouseDown(document.body);
    // Assert: the onClickAway callback should have been called exactly once
    expect(onClickAway).toHaveBeenCalledTimes(1);
  });

  it('does NOT call onClickAway when clicking inside the container', () => {
    // Arrange: render the component and grab the mock and query utilities
    const { onClickAway, getByTestId } = renderWithProps();
    // Act: simulate a mouse down event inside the container element
    fireEvent.mouseDown(getByTestId('inside'));
    // Assert: the onClickAway callback should NOT have been called
    expect(onClickAway).not.toHaveBeenCalled();
  });

  it('does NOT attach listener when active=false', () => {
    // Arrange: render the component with active set to false
    const { onClickAway } = renderWithProps({ active: false });
    // Act: simulate a mouse down event on the document body
    fireEvent.mouseDown(document.body);
    // Assert: the onClickAway callback should NOT have been called since listener is inactive
    expect(onClickAway).not.toHaveBeenCalled();
  });
});
