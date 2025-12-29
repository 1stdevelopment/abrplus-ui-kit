import type { Meta, StoryObj } from '@storybook/react';

import { IconPack } from '.';

/* -------------------------------------------------------------------------- */
const meta: Meta<typeof IconPack> = {
  title: 'Icons',
  component: IconPack,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconPack>;

export const Default: Story = {
  name: 'Icons',
  args: {
    size: 50,
  },
};
