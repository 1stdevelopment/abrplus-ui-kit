// src/components/molecules/AvatarGroup/AvatarGroup.stories.tsx
import { LogoIconNameType } from '@configs';
import { Meta, StoryObj } from '@storybook/react';

import { AvatarGroup, AvatarGroupItemsProps } from '.';

// Define metadata for the component
export default {
  title: 'Organisms/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **AvatarGroup** component displays a group of avatars, typically used to represent a list of users or entities. If there are more than three items, it will show the first three and indicate how many more are in a popover.',
      },
    },
  },
  argTypes: {
    Items: {
      control: 'object',
      description: 'An array of objects representing the items to be displayed as avatars.',
    },
  },
  tags: ['autodocs'],
} as Meta<AvatarGroupItemsProps>;

// Template for stories
type Story = StoryObj<AvatarGroupItemsProps>;

// Sample data for the stories
const sampleData = [
  {
    id: 'uuid-1',
    name: 'Item 1',
    type: LogoIconNameType.User,
  },
  {
    id: 'uuid-2',
    name: 'Item 2',
    type: LogoIconNameType.Office,
  },
  {
    id: 'uuid-3',
    name: 'Item 3',
    type: LogoIconNameType.Position,
  },
  {
    id: 'uuid-4',
    name: 'Item 4',
    type: LogoIconNameType.SecurityGroup,
  },
  {
    id: 'uuid-5',
    name: 'Item 5',
    type: LogoIconNameType.Department,
  },
];

// Default Story
export const DefaultItems: Story = {
  name: 'Default',
  args: {
    items: sampleData,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default AvatarGroup, displaying a set of security items with avatars.',
      },
    },
  },
};

// Story when no items are provided
export const NoItems: Story = {
  name: 'NoItems',
  args: {
    items: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'This story displays the AvatarGroup component when no items are provided.',
      },
    },
  },
};
