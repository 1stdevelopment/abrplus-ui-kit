const path = require('path');
const dotenv = require('dotenv');

// Load .env.test variables into process.env
dotenv.config({ path: path.resolve(__dirname, '../../.env.test') });

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [`${__dirname}/jest-setup.ts`],
  testEnvironmentOptions: {},
  moduleNameMapper: {
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
  transformIgnorePatterns: [path.join(__dirname, '../../node_modules/react-route-type')],
  testMatch: [`${__dirname}/src/components/**/__tests__/**/*.test.{ts,tsx}`],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  testTimeout: 60 * 1000, // Set the timeout to 60 seconds (60000 ms)
  globals: {
    __PLATFORM__: process.env.__PLATFORM__,
    __STAGE__: process.env.__STAGE__,
    __LOCALHOST__: process.env.NODE_ENV !== 'production',
    __TEST__: process.env.NODE_ENV !== 'test',
    __APP__: process.env.__APP__ || 'sandbox',
    __ROOT__: process.env.__APP__ === 'home',
    __IFRAME_CONTENT_ONLY__: process.env.__IFRAME_CONTENT_ONLY__ === 'true',
    __DEV_SERVE__: process.env.__DEV_SERVE__,
    IDENTITY_ORIGIN: process.env.ABRPLUS_IDENTITY_ORIGIN,
    APP_URL: process.env.ABRPLUS_APP_URL,
    STREAM_URL: process.env.ABRPLUS_STREAM_URL,
    CLOUD_URL: process.env.ABRPLUS_CLOUD_URL,
    ELECTRON_URL: process.env.ABRPLUS_ELECTRON_URL,
  },
};
