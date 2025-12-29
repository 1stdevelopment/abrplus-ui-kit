// import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
// import * as Story from '../index.stories'; // Import the story file
import { View } from '..';
// const { Default, Loading, Error } = composeStories(Story);

describe('Atoms > View', () => {
  // Test Case: Default Story
  it('renders default view content', () => {
    // Arrange: Render the Default View story
    render(<View>ddd</View>);

    // Act: Find the c  content by text
    const content = screen.getByText('ddd');

    // Assert: Verify that the default content is rendered
    expect(content).toBeInTheDocument();
  });

  // Test Case: Loading Story
  // it('shows loading indicator when isLoading is true', () => {
  //   // Arrange: Render the Loading View story
  //   render(<Loading />);

  //   // Act: Find the loading spinner by role or appropriate selector
  //   const spinner = screen.getByRole('progressbar'); // Assuming it's an accessible spinner element

  //   // Assert: Verify that the loading indicator is displayed
  //   expect(spinner).toBeInTheDocument();

  //   // Optionally, you can assert the spinner size if it's rendered in the DOM as a specific class or attribute
  // });

  // // Test Case: Error Story
  // it('displays error message and triggers retry on click', () => {
  //   // Arrange: Render the Error View story
  //   render(<Error />);

  //   // Act: Find the error message and retry button by text
  //   const errorMessage = screen.getByText('An error occurred!');
  //   const retryButton = screen.getByRole('button', { name: /Retry/i });

  //   // Assert: Verify that the error message is displayed
  //   expect(errorMessage).toBeInTheDocument();

  //   // Simulate clicking the retry button
  //   fireEvent.click(retryButton);

  //   // Since `onRetry` triggers an alert in this case, you can mock it and assert the alert is called
  //   expect(window.alert).toHaveBeenCalledWith('Retry clicked');
  // });
});
