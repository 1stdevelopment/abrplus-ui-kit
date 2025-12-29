import { Meta, StoryObj } from '@storybook/react';
import { TagCollectionProps, TagCollectionView } from '.';

export default {
  title: 'Molecules/TagCollectionView',
  parameters: {
    layout: 'centered',
  },
  component: TagCollectionView,
  argTypes: {
    tags: {
      control: 'object',
      description:
        'Array of tags along with a function to remove tags. Provides the data to be displayed and the ability to handle tag removal.',
    },
    label: {
      control: 'text',
      description:
        'Label for the tag collection view. Provides context or instructions for the displayed tags.',
    },
    hasMore: {
      control: 'boolean',
      description:
        'Indicates if there are more tags to load. Controls the visibility of a "load more" option or indicator.',
    },
    fetchNextPage: {
      action: 'fetchNextPage',
      description:
        'Function to load more tags. Triggered when the user opts to load additional tags.',
    },
    isSearchable: {
      control: 'boolean',
      description:
        'Allows searching within the tags. When true, enables a search feature to filter the displayed tags.',
    },
    noContentFoundMessage: {
      control: 'text',
      description:
        'Message displayed when no tags are available. Provides feedback to the user when the tag list is empty.',
    },
    numberOfRows: {
      control: 'number',
      description:
        'Number of rows to display in the tag collection view. Controls the height and number of visible rows for tags.',
    },
  },
} as Meta<TagCollectionProps>;

type Story = StoryObj<TagCollectionProps>;
/**
 * with closable Tag
 */
export const Default: Story = {
  args: {
    tags: [
      { value: 'Tag 1', onRemove: () => alert('removed Tag') },
      { value: 'Tag 2', onRemove: () => alert('removed Tag') },
      { value: 'Tag 3', onRemove: () => alert('removed Tag') },
      { value: 'Tag 4', onRemove: () => alert('removed Tag') },
    ],
    label: 'Tag Collection',
    hasMore: false,
  },
};
/**
 * search in Tags
 */
export const Searchable: Story = {
  args: {
    tags: [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Cherry' }, { value: 'Date' }],
    label: 'Searchable Tag Collection',
    isSearchable: true,
  },
};
/**
 * api called when click more
 */
export const WithMoreTags: Story = {
  args: {
    tags: [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Cherry' }, { value: 'Date' }],
    label: 'Tag Collection with More',
    hasMore: true,
    fetchNextPage: () => alert('more'),
  },
};
/**
 * there is not any tag
 */
export const NoContent: Story = {
  args: {
    tags: [],
    label: 'Empty Tag Collection',
    noContentFoundMessage: 'No tags available',
    isSearchable: true,
  },
};
/**
 * defined number of rows
 */
export const CustomRows: Story = {
  args: {
    tags: [
      { value: 'Tag 1' },
      { value: 'Tag 2' },
      { value: 'Tag 3' },
      { value: 'Tag 4' },
      { value: 'Tag 5' },
    ],
    label: 'Tag Collection with Custom Rows',
    numberOfRows: 5,
  },
};
