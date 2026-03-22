import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.tsx',
  ],
  outDir: "build",
  clean: true,
  splitting: true,
  dts: false,
  sourcemap: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: false,
});
