import { defineConfig } from 'tsup'

const debugBuild = process.env.SDK_DEBUG_BUILD === 'true'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/plugins/internal/anoncreds/index.ts',
    'src/plugins/internal/didcomm/index.ts',
    'src/plugins/internal/oidc/index.ts',
    'src/plugins/internal/dif/index.ts',
    'src/plugins/internal/oea/index.ts',
  ],
  outDir: "build",
  clean: true,
  splitting: true,
  sourcemap: debugBuild,
  skipNodeModulesBundle: false,
  loader: {
    '.wasm': 'binary'
  },
  inject: ['anoncreds-wasm/anoncreds_wasm_bg.wasm', 'didcomm-wasm/didcomm_js_bg.wasm', 'jwe-wasm/jwe_rust_bg.wasm'],
  external: ['buffer'],
  minifyWhitespace: !debugBuild,
  minifyIdentifiers: !debugBuild,
  minifySyntax: false
});
