// src/components/molecules/FilterDrawer/FilterDrawer.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { FilterDrawer, FilterDrawerProps } from '.';
import { Icon } from '../../atoms';
import { FilterItem } from './filterItem';

// Define metadata for the component
export default {
  title: 'Molecules/FilterDrawer',
  component: FilterDrawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **FilterDrawer** component is a sliding drawer that can be used to display filter options in a compact, accessible way. It can contain multiple filter items and is designed to improve the user experience in filtering data within applications.',
      },
    },
  },
  subcomponents: { FilterItem },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the drawer is open or closed.',
    },
    top: {
      control: 'number',
      description:
        'Specifies the top position of the drawer. Useful when the drawer should not cover the entire screen height.',
    },
    onFilter: {
      action: 'filter',
      description:
        'Callback function triggered when a filter is applied. Useful for managing filter state and executing filter logic.',
    },
    onClear: {
      action: 'clear',
      description:
        'Callback function triggered when all filters are cleared. Useful for resetting the filter state.',
    },
    children: {
      control: 'object',
      description:
        'The child components, typically `FilterItem` components, that will be rendered inside the drawer.',
    },
  },
  tags: ['autodocs'],
} as Meta<FilterDrawerProps>;

type Story = StoryObj<FilterDrawerProps>;

// Default Story
export const DefaultStory: Story = {
  name: 'Default',
  args: {
    open: false, // Initially closed
    top: 40,
  },
  render: (args) => {
    const DrawerWithIcon = () => {
      const [isOpen, setIsOpen] = useState(args.open);

      return (
        <div>
          {/* Icon or Button to open the drawer */}
          <Icon
            name="Filter" // Replace with the appropriate icon name from your icon set
            size={24}
            onClick={() => setIsOpen(true)}
            style={{ cursor: 'pointer', marginBottom: '20px' }}
          />

          {/* Drawer Component */}
          <FilterDrawer {...args} open={isOpen} onClose={() => setIsOpen(false)}>
            <FilterItem label="Item 1" name="item1" />
            <FilterItem label="Item 2" name="item2" />
            <FilterItem label="Item 3" name="item3" />
          </FilterDrawer>
        </div>
      );
    };

    return <DrawerWithIcon />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default story for the `FilterDrawer` component. This configuration demonstrates a drawer with a button that opens it, containing multiple filter items. The drawer starts closed and can be toggled open by clicking the filter icon.',
      },
    },
  },
};
