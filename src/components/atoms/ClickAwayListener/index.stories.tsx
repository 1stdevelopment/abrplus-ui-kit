import { Meta, StoryObj } from '@storybook/react';

import { ClickAwayListener, ClickAwayListenerProps } from '.';

const meta: Meta<ClickAwayListenerProps> = {
  title: 'Atoms/ClickAwayListener',
  component: ClickAwayListener,
  parameters: {
    layout: 'centered', // Center the component in Storybook view
    docs: {
      description: {
        component:
          'The **ClickAwayListener** component is used to detect  whether a users click is in area of box or not. It can be used to detect when the user clicks outside the box and close elements such as SearchBar.',
      },
    },
  },

  argTypes: {
    children: {
      control: false,
      description:
        'Content inside the ClickAwayListener. Typically used to render the badge label or number.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the ClickAwayListener.',
    },
    document: {
      control: { type: 'object' },
      description:
        'The `Document` object to which click-away events are attached. Defaults to `window.document`.',
    },
    active: {
      control: 'boolean',
      description: 'ClickAwayListener is active or not.',
    },
    onClickAway: {
      control: false,
      action: 'onClickAway',
      description: 'Callback invoked when a click is detected outside the listener’s children.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ClickAwayListenerProps>;

export const Default: Story = {
  args: {
    onClickAway: function () {
      alert(`User click outside !`);
    },
    className:
      'bg-black text-[#fff] p-2 flex items-center justify-center rounded cursor-not-allowed', // Use your color utilities or constants
    children: (
      <div>
        Please <b className="text-desk-action-light-2">active</b> component and click outside Box
      </div>
    ),
    active: true,
    document: window.document,
  },
};
