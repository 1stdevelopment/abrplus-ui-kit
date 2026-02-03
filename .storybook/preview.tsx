/** @type { import('@storybook/react').Preview } */
import '../src/configs/css/global.css';
import './storybook.css';

import { Preview } from '@storybook/react';

import { AbrplusUIKitProvider } from '../src/configs';

const preview: Preview = {
  decorators: [
    (Story) => (
      <AbrplusUIKitProvider appName={'sales'}>
        <Story />
      </AbrplusUIKitProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
