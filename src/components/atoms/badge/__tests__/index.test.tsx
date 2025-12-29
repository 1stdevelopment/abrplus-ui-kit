import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import { colors } from '@configs';

// Assuming colors is imported for custom styles
import * as Story from '../index.stories';

// Adjust the path as necessary

// Compose the stories from Storybook
const { Default } = composeStories(Story);

describe('Atoms > Badge', () => {
  // Test Case: Renders the default Badge with default props
  it('renders correctly with default props from story', () => {
    // Arrange: Render the Badge component using the Default story
    const { getByText } = render(<Default />);

    // Act: Find the badge element with the children text ('Notice')
    const badgeElement = getByText('Notice');

    // Assert: Check if the element is in the document
    expect(badgeElement).toBeInTheDocument();
  });

  // Test Case: Renders the correct count inside the badge
  it('renders the correct count', () => {
    // Arrange: Render the Badge component using the Default story
    const { getByText } = render(<Default />);

    // Act: Find the badge count element
    const countElement = getByText('5');

    // Assert: Check if the count element is in the document
    expect(countElement).toBeInTheDocument();
  });

  // Test Case: Applies the correct color from the story
  it('applies custom color from story', () => {
    // Arrange: Render the Badge component
    const { container } = render(<Default />);

    // Act: Find the badge count element (sup with class "ant-badge-count")
    const badgeCountElement = container.querySelector('.ant-badge-count');

    // Assert: Check if the badge count element has the correct background color style
    expect(badgeCountElement).toHaveStyle(`background-color: ${colors.primary}`);
  });

  // Test Case: Applies small size class when size="small"
  it('renders with small size when size="small"', () => {
    // Arrange: Render the Badge component with the size prop set to "small"
    const { container } = render(<Default size="small" />);

    // Act: Find the badge count element (sup with class "ant-badge-count")
    const badgeCountElement = container.querySelector('.ant-badge-count');

    // Assert: Ensure the badge count element has the "ant-badge-count-sm" class
    expect(badgeCountElement).toHaveClass('ant-badge-count-sm');
  });

  // Test Case: Renders badge dot if 'dot' is true
  it('renders dot when dot prop is true', () => {
    // Arrange: Render the Badge component with dot prop set to true
    const { container } = render(<Default dot={true} />);

    // Act: Find the badge dot element
    const badgeDot = container.querySelector('.ant-badge-dot');

    // Assert: Check if the badge dot is rendered
    expect(badgeDot).toBeInTheDocument();
  });

  // Test Case: Applies overflow count correctly
  it('renders overflow count when the count exceeds the overflowCount', () => {
    // Arrange: Render the Badge component with a large count that exceeds overflowCount
    const { getByText } = render(<Default count={100} overflowCount={99} />);

    // Act: Find the badge overflow count element (should show 99+)
    const overflowElement = getByText('99+');

    // Assert: Check if the overflow count is correctly displayed
    expect(overflowElement).toBeInTheDocument();
  });
});
