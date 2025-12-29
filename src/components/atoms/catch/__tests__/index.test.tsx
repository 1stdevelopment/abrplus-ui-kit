import { composeStories } from '@storybook/react';
import { fireEvent, render } from '@testing-library/react';
import * as stories from '../index.stories'; // Adjust the path as necessary

// Compose the stories for testing
const { DefaultStory, WithoutErrorStory } = composeStories(stories);

describe('Catch Component', () => {
  it('renders the children content when no error is present', () => {
    // Render the story where no error is present (WithoutError story)
    const { container } = render(<WithoutErrorStory />);

    // Assert that the children content is displayed
    expect(container.textContent).toContain('Content without error');
  });

  it('renders the error message and retry button when error is present', () => {
    // Render the Default story which includes an error and retry function
    const { container } = render(<DefaultStory />);

    // Assert that the error message is displayed
    expect(container.textContent).toContain('خطای سرور');

    // Assert that the retry button is rendered
    const retryButton = container.querySelector('button');
    expect(retryButton).toBeInTheDocument();
    expect(retryButton?.textContent).toBe('تلاش مجدد');
  });

  it('calls the retry function when the retry button is clicked', () => {
    const retryMock = jest.fn();

    // Render the Default story with a mock retry function
    const { container } = render(<DefaultStory retry={retryMock} />);

    // Click the retry button
    const retryButton = container.querySelector('button');
    fireEvent.click(retryButton!);

    // Assert that the retry function was called
    expect(retryMock).toHaveBeenCalled();
  });

  it('does not render the retry button when no retry function is provided', () => {
    // Render the Default story without retry function
    const { container } = render(<DefaultStory retry={undefined} />);

    // Assert that the retry button is not rendered
    const retryButton = container.querySelector('button');
    expect(retryButton).not.toBeInTheDocument();
  });
});
