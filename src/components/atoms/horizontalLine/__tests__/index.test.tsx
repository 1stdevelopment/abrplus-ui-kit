import { colors } from '@configs';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as Story from '../index.stories';

const { Default } = composeStories(Story);

describe('Atoms > HorizontalLine', () => {
  // Test Case: Renders correctly with default props from story
  it('renders correctly with default props from story', () => {
    // Arrange: Render the HorizontalLine component using the Default story
    const { getByText } = render(<Default />);

    // Act: Find the horizontal line element with sample text
    const horizontalLineElement = getByText('Sample Text');

    // Assert: Check if the element is in the document
    expect(horizontalLineElement).toBeInTheDocument();
  });

  // Test Case: Renders custom text from story
  it('renders custom text from story', () => {
    // Arrange: Render the HorizontalLine component with a custom text prop
    const { getByText } = render(<Default text="Sample_Text" />);

    // Act: Find the horizontal line element with the custom text
    const horizontalLineElement = getByText('Sample_Text');

    // Assert: Check if the element with the custom text is in the document
    expect(horizontalLineElement).toBeInTheDocument();
  });

  // Test Case: Applies custom styles from story
  it('applies custom styles from story', () => {
    // Arrange: Render the HorizontalLine component with a custom style prop
    const { getByTestId } = render(<Default style={{ borderColor: colors.primary }} />);

    // Act: Find the horizontal line element and get the <hr> tag
    const horizontalLineElement = getByTestId('horizontal-line').querySelector('hr');

    // Assert: Check if the <hr> tag has the custom border color
    expect(horizontalLineElement).toHaveStyle(`border-color: ${colors.primary}`);
  });

  // Test Case: Applies custom className from story
  it('applies custom className from story', () => {
    // Arrange: Render the HorizontalLine component with a custom className prop
    const { getByTestId } = render(<Default className={'border-t-primary'} />);

    // Act: Find the horizontal line element and get the <hr> tag
    const horizontalLineElement = getByTestId('horizontal-line').querySelector('hr');

    // Assert: Check if the <hr> tag has the custom className
    expect(horizontalLineElement).toHaveClass('border-t-primary');
  });

  // Test Case: Applies custom wrapperClassName from story
  it('applies custom wrapperClassName from story', () => {
    // Arrange: Render the HorizontalLine component with a custom wrapperClassName prop
    const { getByTestId } = render(<Default wrapperClassName={'border-t-primary'} />);

    // Act: Find the horizontal line element with the custom wrapper class
    const horizontalLineElement = getByTestId('horizontal-line');

    // Assert: Check if the wrapper element has the custom wrapperClassName
    expect(horizontalLineElement).toHaveClass('border-t-primary');
  });
});
