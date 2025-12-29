// ActionHeader.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Route } from 'react-route-type';
import { ActionHeader, ActionHeaderProps } from '.';
import { withReactRouter } from '../../../utilities/testUtils';
import { Flex, Text } from '../../antOverrides';

export default {
  title: 'Molecules/ActionHeader',
  component: ActionHeader,
  decorators: [(Story) => withReactRouter(<Story />)],
  parameters: {
    docs: {
      description: {
        component:
          'The **ActionHeader** component is a versatile header element commonly used for page or section headings. It can include optional children elements such as breadcrumbs, navigation items, or other interactive elements. The component supports various customization options, including borders, spacing, and dynamic routes for breadcrumbs.',
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description:
        'The title displayed in the header. It is typically used to represent the current section or page name.',
    },
    hasBorder: {
      control: { type: 'boolean' },
      description:
        'If true, a border will be rendered at the bottom of the header. This can be useful for visually separating the header from the content below.',
    },
    gap: {
      control: { type: 'number' },
      description:
        'The gap size (in pixels) between children elements within the header. This prop controls the spacing between elements, enhancing layout flexibility.',
    },
    className: {
      control: { type: 'text' },
      description:
        'Additional CSS class names to apply to the header component for custom styling.',
    },
    route: {
      control: { type: 'object' },
      description:
        'A route object that provides navigation information for rendering breadcrumbs or nested routes. It can be used to dynamically generate breadcrumb paths based on the current route.',
    },
  },
  tags: ['autodocs'],
} as Meta<ActionHeaderProps>;

type Story = StoryObj<ActionHeaderProps>;

// Template for mockRoute
const mockRoute: Route<any, any> = {
  template: () => '/',
  create: () => '/',
  route: () => mockRoute,
  useQueryParams: () => ({}),
  useMap: () => [
    { title: 'خانه', path: '/', create: () => '/' },
    { title: 'محصولات', path: '/products', create: () => '/products' },
    { title: 'جزئیات محصول', path: '/products/electronics', create: () => '/products/electronics' },
  ],
  useParams: () => ({}),
  useCreate: () => (() => '/') as any,
  createNestedRoutes: () =>
    ({
      root: mockRoute,
    }) as any,
};

// Default Story
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    title: 'Default Title',
    hasBorder: true,
    gap: 8,
    children: (
      <Flex>
        <Text size={16}>Child 1</Text>
      </Flex>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story demonstrates the basic usage of the ActionHeader component with a title, a border, and a single child element. It shows how to set up a simple header with standard spacing and styles.',
      },
    },
  },
};

// Story with Breadcrumbs route
export const WithBreadcrumbs: Story = {
  name: 'WithBreadcrumbs',
  args: {
    route: mockRoute,
    hasBorder: true,
    gap: 12,
    children: (
      <Flex>
        <Text size={16}>Breadcrumb Child</Text>
      </Flex>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **WithBreadcrumbs** story showcases the ActionHeader component configured with a dynamic route for displaying breadcrumbs. It includes a border and custom gap spacing, demonstrating how to use the route prop to provide navigation information within the header.',
      },
    },
  },
};

// Story with no children
export const NoChildren: Story = {
  name: 'NoChildren',
  args: {
    title: 'Title with No Children',
    hasBorder: true,
    gap: 8,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The **NoChildren** story displays the ActionHeader component without any child elements. This example highlights the component's flexibility in different layouts, particularly when a simple header with only a title is needed.",
      },
    },
  },
};
