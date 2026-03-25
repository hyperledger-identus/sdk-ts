import { defineConfig } from 'tsup'

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
  dts: false,
  sourcemap: true,
  loader: {
    '.wasm': 'binary'
  },
  external: ['buffer', 'crypto', 'node:crypto', 'node:buffer'],
  minifyWhitespace: false,
  minifyIdentifiers: false,
  minifySyntax: false,
  shims: true,
  noExternal: [
    '@hyperledger/identus-anoncreds',
    '@hyperledger/identus-didcomm',
    '@hyperledger/identus-jwe',
    '@hyperledger/identus-domain',
    '@hyperledger/identus-protos',
    // multiformats v13 only provides ESM exports — must be inlined for CJS compat
    'multiformats',
    '@stablelib/uuid',
    '@stablelib/sha256',
    '@scure/bip39',
  ]
});
