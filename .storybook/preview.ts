/** @type { import('@storybook/react').Preview } */
import '@abrplus/config/assets/css/styles.css';
import './storybook.css';

const preview = {
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
