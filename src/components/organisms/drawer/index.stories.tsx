// Drawer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Drawer, DrawerAction, DrawerProps } from '.';
import { Flex, Icon } from '../..';

// Adjust the import path as necessary

const meta: Meta<DrawerAction & DrawerProps> = {
  title: 'Organisms/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The **Drawer** component is a UI element that slides in from the side of the screen, typically used to provide additional contextual information, settings, or navigation options without leaving the current page. It is particularly useful for mobile interfaces and responsive web designs, where space is limited and modal-like interactions are preferable.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<DrawerAction & DrawerProps>;

// New story with icon to open Drawer
export const Default: Story = {
  args: {
    title: 'Default Drawer',
    transparent: false,
    onClose: undefined,
    headerHeight: 60,
    wrapperClassName: 'p-4',
    noPadding: false,
  },
  render: (args) => {
    const DrawerWithIcon = () => {
      const [visible, setVisible] = useState(false);

      const showDrawer = () => setVisible(true);
      const closeDrawer = () => setVisible(false);

      return (
        <div>
          <div className="flex h-screen items-center justify-center">
            <Icon
              name="Apps"
              size={24}
              color="black"
              className="cursor-pointer"
              onClick={showDrawer}
            />
          </div>
          <Drawer {...args} open={visible} onClose={closeDrawer} onDiscard={closeDrawer}>
            <Flex vertical gap={4} className="rounded bg-gray-100 p-4">
              <p>Drawer content triggered by clicking the icon.</p>
            </Flex>
          </Drawer>
        </div>
      );
    };

    return <DrawerWithIcon />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "The **Default** story demonstrates a Drawer component that is triggered by clicking an icon. The Drawer slides in from the side of the screen and can be closed by either clicking outside it or using a close button within. This setup is ideal for menus, navigation, or settings that should not disrupt the user's current view.",
      },
    },
  },
  argTypes: {
    title: {
      description:
        'The title displayed at the top of the Drawer. This can be used to provide context or a header for the content inside the Drawer.',
      control: 'text',
    },
    transparent: {
      description:
        'Determines if the Drawer background should be transparent. Setting this to true makes the Drawer’s background see-through, which can be useful for overlay effects.',
      control: 'boolean',
    },
    onClose: {
      description:
        'Callback function triggered when the Drawer needs to be closed. This is typically used to update the state or perform additional actions when the Drawer is dismissed.',
      action: 'closed',
    },
    headerHeight: {
      description:
        'Height of the Drawer header in pixels. This defines the space allocated for the header section of the Drawer, which can include titles or close buttons.',
      control: 'number',
    },
    wrapperClassName: {
      description:
        'Custom CSS class name for additional styling of the Drawer wrapper. This allows for customization of the Drawer’s appearance beyond the default styles.',
      control: 'text',
    },
    noPadding: {
      description:
        'Whether padding should be applied inside the Drawer. Setting this to true removes the default padding, which can be useful for achieving a different layout or design.',
      control: 'boolean',
    },
  },
};
