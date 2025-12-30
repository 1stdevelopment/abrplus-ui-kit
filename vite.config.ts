/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import cleanPlugin from 'vite-plugin-clean';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    cleanPlugin(),
    tsconfigPaths(),
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/main.ts'),
        atoms: path.resolve(__dirname, 'src/components/atoms/index.ts'),
        molecules: path.resolve(__dirname, 'src/components/molecules/index.ts'),
        antOverrides: path.resolve(__dirname, 'src/components/antOverrides/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        `${entryName}.${format}.js`,
    },

    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        assetFileNames: 'index.[ext]',
      },
      external: ['react', 'react-dom', 'antd', '@ant-design/icons'],
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: `${__dirname}/vitest-setup.ts`, // your Vitest setup file
    include: ['src/components/**/*.test.{ts,tsx}'], // only test src/components
    exclude: ['node_modules', 'dist', 'scripts', '.storybook'], // ignore heavy folders
    isolate: true, // isolate modules per test file
    watch: false, // disable watch in CI for speed
    css: false, // skip CSS transforms unless needed

    coverage: {
      provider: 'v8', // fastest coverage engine
      reporter: ['text', 'html'],
      include: ['src/components/**/*.{ts,tsx}'],
      exclude: ['**/*.stories.*', '**/index.ts'], // optional
    },
    logHeapUsage: false,
  },
});
