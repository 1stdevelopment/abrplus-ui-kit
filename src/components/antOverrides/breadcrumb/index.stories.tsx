// src/components/molecules/Breadcrumb/Breadcrumb.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { AntBreadCrumbProps, Breadcrumb } from './';

// Define metadata for the component
export default {
  title: 'AntOverrides/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Breadcrumb** component is used for navigating between different parts of the app. It renders links for navigation and shows the current location in a hierarchy with custom separators.',
      },
    },
  },
  argTypes: {
    routes: {
      control: 'object',
      description:
        'Array of breadcrumb routes, each containing `title`, `path`, and `onClick` (optional).',
    },
  },
  tags: ['autodocs'],
} as Meta<AntBreadCrumbProps>;

// Template for stories
type Story = StoryObj<AntBreadCrumbProps>;

// Sample breadcrumb items
const breadcrumbItems = [
  { title: 'خانه', path: '/' },
  { title: 'محصولات', path: '/products' },
  { title: 'جزئیات محصولات', path: '/products/1' },
];

// Default Story
export const DefaultBreadcrumb: Story = {
  render: (args) => (
    <BrowserRouter>
      <Breadcrumb {...args} />
    </BrowserRouter>
  ),
  args: {
    routes: breadcrumbItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default breadcrumb with links for navigating through `Home`, `Products`, and `Product Details`.',
      },
    },
  },
};
