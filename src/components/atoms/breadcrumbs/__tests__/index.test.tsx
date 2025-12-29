import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as Story from '../index.stories'; // Adjust the path as necessary

// Compose the stories for testing
const { DefaultStory } = composeStories(Story);

describe('Breadcrumbs Component', () => {
  // Test case: Renders all breadcrumb items
  it('renders all breadcrumb items', () => {
    // Arrange: Render the Default story (no need for MemoryRouter, handled in the Storybook decorator)
    const { getByText } = render(<DefaultStory />);

    // Act: Find breadcrumb items based on their text
    const homeBreadcrumb = getByText('خانه');
    const productsBreadcrumb = getByText('محصولات');
    const productDetailsBreadcrumb = getByText('جزئیات محصول');

    // Assert: Check if each breadcrumb item is in the document
    expect(homeBreadcrumb).toBeInTheDocument();
    expect(productsBreadcrumb).toBeInTheDocument();
    expect(productDetailsBreadcrumb).toBeInTheDocument();
  });

  // Test case: The last breadcrumb item is not a link
  it('renders the last breadcrumb item without a link', () => {
    // Arrange: Render the Default story
    const { getByText } = render(<DefaultStory />);

    // Act: Find the last breadcrumb item
    const productDetailsBreadcrumb = getByText('جزئیات محصول');

    // Assert: Ensure the last breadcrumb item is not wrapped in a <Link>
    expect(productDetailsBreadcrumb.closest('a')).toBeNull();
  });

  // Test case: Previous breadcrumb items are rendered as links
  it('renders previous breadcrumb items as links', () => {
    // Arrange: Render the Default story
    const { getByText } = render(<DefaultStory />);

    // Act: Find the first and second breadcrumb items
    const homeBreadcrumb = getByText('خانه');
    const productsBreadcrumb = getByText('محصولات');

    // Assert: Ensure previous breadcrumb items are wrapped in <Link> elements
    expect(homeBreadcrumb.closest('a')).toHaveAttribute('href', '/');
    expect(productsBreadcrumb.closest('a')).toHaveAttribute('href', '/products');
  });

  // Test case: Separator icon is rendered between breadcrumb items
  it('renders separator icon between breadcrumb items', () => {
    // Arrange: Render the Default story
    const { container } = render(<DefaultStory />);

    // Act: Check if the Chevron_Left icon is used as the separator
    const iconElement = container.querySelector('.ant-breadcrumb-separator');

    // Assert: Ensure the icon element is rendered
    expect(iconElement).toBeInTheDocument();
  });
});
