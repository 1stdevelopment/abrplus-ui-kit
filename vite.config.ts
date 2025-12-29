import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "MyLibrary",
      fileName: (format) => `my-library.${format}.js`,
      formats: ["es", "cjs"],
    },

    sourcemap: false,
    minify: "esbuild",

    rollupOptions: {
      // mark deps as external if needed
      external: [],
    },
  },

  plugins: [
    dts({
      entryRoot: "src",
      outDir: "dist/types",
      insertTypesEntry: true,
    }),
  ],
});
