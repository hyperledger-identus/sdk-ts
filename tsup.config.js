import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/plugins/internal/oidc/index.ts',
  ],
  outDir: "build",
  clean: true,
  splitting: true,
  sourcemap: false,
  skipNodeModulesBundle: false,
  loader: {
    '.wasm': 'binary'
  },
  external: ['buffer']
});
