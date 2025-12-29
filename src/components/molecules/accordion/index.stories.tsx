// Accordion.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Accordion, AccordionProps } from '.'; // Adjust import path accordingly
import { Flex, Text } from '../..'; // Adjust import path accordingly

const meta: Meta<AccordionProps> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'The **Accordion** component is a versatile UI element used to toggle between collapsing and expanding sections of content. It is ideal for displaying lists of items, settings, or other information in a compact and accessible manner. The component provides various customization options to control the appearance and behavior of the accordion sections.',
      },
    },
  },
  argTypes: {
    currentIndex: {
      control: 'number',
      description:
        'Index of the currently active accordion section. This determines which section is expanded by default.',
    },
    indexedStyle: {
      control: 'boolean',
      description:
        'If true, applies styling based on the index of the accordion items. Useful for customizing the appearance of each section based on its position.',
    },
    transparent: {
      control: 'boolean',
      description:
        'If true, applies a transparent background to the accordion. This is useful for integrating the accordion into various design schemes without affecting the overall layout.',
    },
    noPaddingItem: {
      control: 'boolean',
      description:
        'If true, removes padding from the content of the accordion items. This option is useful for tighter layouts or when integrating the accordion into more complex UI designs.',
    },
    noGapBetweenItems: {
      control: 'boolean',
      description:
        'If true, removes the gap between accordion items. This can be used to create a more compact accordion layout without visual separation between sections.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AccordionProps>;

// Define a template component that can use hooks
const AccordionTemplate: React.FC<AccordionProps> = (args) => {
  const [currentIndex, setCurrentIndex] = useState<number>(args.currentIndex || 1);

  return (
    <Accordion {...args} currentIndex={currentIndex} onChangeIndex={setCurrentIndex}>
      <Accordion.Item label="Section 1">
        <Flex className="m-3 w-full" vertical gap={8}>
          <Text>This is the content of section 1.</Text>
        </Flex>
      </Accordion.Item>
      <Accordion.Item label="Section 2">
        <Flex className="m-3 w-full" vertical gap={8}>
          <Text>This is the content of section 2.</Text>
        </Flex>
      </Accordion.Item>
      <Accordion.Item label="Section 3">
        <Flex className="m-3 w-full" vertical gap={8}>
          <Text>This is the content of section 3.</Text>
        </Flex>
      </Accordion.Item>
    </Accordion>
  );
};

// Default story for Accordion component
export const Default: Story = {
  args: {
    currentIndex: 1,
    indexedStyle: true,
    transparent: false,
    noPaddingItem: false,
    noGapBetweenItems: false,
  },
  render: (args) => <AccordionTemplate {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'The **Default** story demonstrates the Accordion component with three sections. Each section can be toggled independently, and the default open section is determined by the `currentIndex` prop. This configuration shows the accordion with indexed styling and no special adjustments to padding or gaps between items.',
      },
    },
  },
};
