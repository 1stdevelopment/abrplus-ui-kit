import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from '.';
import { withReactRouter } from '../../../utilities/testUtils';

/* -------------------------------------------------------------------------- */
const meta: Meta<typeof Breadcrumbs> = {
  title: 'Atoms/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [(Story) => withReactRouter(<Story />)],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Breadcrumbs** component is used for navigation, providing a way to display the path of pages a user has navigated through. It helps users to understand their current location within the app hierarchy and offers an easy way to navigate back to previous pages.',
      },
    },
  },
  argTypes: {
    route: {
      description:
        'The route object containing the breadcrumb structure. This object defines the paths and titles for each breadcrumb item, allowing the component to dynamically render the navigation path based on the current route.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const mockRoute = {
  template: () => '/',
  create: () => {
    return '/';
  },
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

/* -------------------------------------------------------------------------- */
// Default Story
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    route: mockRoute,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story demonstrates the Breadcrumbs component with a basic route structure. It shows how the component can be used to display a breadcrumb trail for navigation, starting from the home page to a specific product details page.',
      },
    },
  },
};
