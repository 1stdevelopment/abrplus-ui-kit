import { Meta, StoryObj } from '@storybook/react';
import { TagCollectionProps } from '.';
declare const _default: Meta<TagCollectionProps>;
export default _default;
type Story = StoryObj<TagCollectionProps>;
/**
 * with closable Tag
 */
export declare const Default: Story;
/**
 * search in Tags
 */
export declare const Searchable: Story;
/**
 * api called when click more
 */
export declare const WithMoreTags: Story;
/**
 * there is not any tag
 */
export declare const NoContent: Story;
/**
 * defined number of rows
 */
export declare const CustomRows: Story;
