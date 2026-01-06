/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import cleanPlugin from 'vite-plugin-clean';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const externals = [
  'react',
  'antd',
  'react-dom',
  'react-router-dom',
  'i18next',
  'react-i18next',
  'tailwind-merge',
  'starkstring',
];
export default defineConfig({
  plugins: [
    react(),
    cleanPlugin(),
    tsconfigPaths(),
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      insertTypesEntry: true,
      exclude: ['**/*.stories.*', '**/*.test.*', '**/__tests__/**'],
    }),
  ],

  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/main.ts'),
        atoms: path.resolve(__dirname, 'src/components/atoms/index.ts'),
        molecules: path.resolve(__dirname, 'src/components/molecules/index.ts'),
        antOverrides: path.resolve(__dirname, 'src/components/antOverrides/index.ts'),
        provider: path.resolve(__dirname, 'src/configs/providers/index.ts'),
        theme: path.resolve(__dirname, 'src/configs/tailwindcss/index.css'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css') && assetInfo.name.includes('theme')) {
            return 'theme.css';
          }
          if (assetInfo.name?.endsWith('.css')) {
            return 'index.css';
          }
          return '[name].[ext]';
        },
      },
      external: (id) => {
        // 1️⃣ exclude story files
        if (id.includes('.stories.') || id.includes('.test.')) return true;

        // 2️⃣ exclude deps (and subpaths)
        return externals.some((pkg) => id === pkg || id.startsWith(`${pkg}/`));
      },
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: `${__dirname}/vitest-setup.ts`, // your Vitest setup file
    include: ['src/components/**/*.test.{ts,tsx}'], // only test src/components
    exclude: ['node_modules', 'dist', 'scripts', '.storybook'],
    isolate: true, // isolate modules per test file
    watch: false, // disable watch in CI for speed
    css: false, // skip CSS transforms unless needed
    threads: true,
    coverage: {
      provider: 'v8', // fastest coverage engine
      reporter: ['text', 'html'],
      include: ['src/components/**/*.test.{ts,tsx}'],
      exclude: ['node_modules', 'dist', 'scripts', '.storybook'],
    },
    logHeapUsage: false,
  },
});
