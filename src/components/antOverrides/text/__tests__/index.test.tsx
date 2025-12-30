import { composeStories } from '@storybook/react';
import { fireEvent, render } from '@testing-library/react';
import * as Story from '../index.stories';
const { Default, WithIconPosition, PersianText, LinkText, TruncatedText } = composeStories(Story);

describe('AntOverrides > Text', () => {
  // Test Case: Renders default props from story
  it('renders default props from story', () => {
    // Arrange: Render the Text component with default props from the story
    const { getByText } = render(<Default />);

    // Act: Find the text element by its content
    const textElement = getByText('Sample Text');

    // Assert: Verify that the text element is in the document
    expect(textElement).toBeInTheDocument();
  });

  // Test Case: Renders text in Persian from story
  it('renders text in Persian from story', () => {
    // Arrange: Render the Text component with Persian text from the story
    const { container } = render(<PersianText />);

    // Act: Find the paragraph element
    const textElement = container.querySelector('p');

    // Assert: Verify that the text element has the correct lang attribute
    expect(textElement).toHaveAttribute('lang', 'fa');
  });

  // Test Case: Renders text with start icon positioning from story
  it('renders text with start icon positioning from story', () => {
    // Arrange: Render the Text component with icon positioning from the story
    const { getByRole } = render(<WithIconPosition />);

    // Act: Find the icon element by its role
    const iconElement = getByRole('img');

    // Find the parent element containing the icon
    const parentElement = iconElement.parentElement;

    // Check if the icon is the first child of its parent
    const isFirstChild = parentElement?.firstChild === iconElement;

    // Assert: Verify that the icon element is in the document and is the first child
    expect(iconElement).toBeInTheDocument();
    expect(isFirstChild).toBe(true);
  });

  // Test Case: Applies link text and handles click events
  it('applies link text from story and handles click events', () => {
    // Arrange: Set up a mock function for the click event
    const onClickMock = vi.fn();
    const { container } = render(<LinkText onClick={onClickMock} />);

    // Act: Find the paragraph element and simulate a click event
    const linkElement = container.querySelector('p');
    if (linkElement) fireEvent.click(linkElement);

    // Assert: Verify that the mock function was called and the element has the correct class
    expect(onClickMock).toHaveBeenCalled();
    expect(linkElement).toHaveClass('cursor-pointer');
  });

  // Test Case: Applies truncated text style from story
  it('applies truncated text style from story', () => {
    // Arrange: Render the Text component with truncated text from the story
    const { container } = render(<TruncatedText />);

    // Act: Find the paragraph element
    const textElement = container.querySelector('p');
    // Assert: Verify that the text element has the correct styles for truncation
    expect(textElement).toHaveStyle({
      'text-overflow': 'ellipsis',
    });
  });
});
