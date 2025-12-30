import { dirname, join } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook-addon-faker/addon'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config: any) {
    config.plugins.push(tsconfigPaths());

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    // This Config is for ENV Parser
    config.define = {
      ...config.define,
    };

    return config;
  },
  // async viteFinal(config) {
  //   return mergeConfig(config, baseConfig as any);
  // },
};
/* -------------------------------------------------------------------------- */
export default config;
