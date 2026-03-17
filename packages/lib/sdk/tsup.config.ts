import { defineConfig } from 'tsup'

const ESM_REQUIRE_SHIM = `
import { createRequire as __$$createRequire } from 'module';
const require = __$$createRequire(import.meta.url);
`.trim();

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
  // Inject createRequire shim only in ESM output so bundled CJS deps
  // (e.g. @stablelib/random → require("crypto")) work in Node ESM.
  banner: (ctx) => ctx.format === 'esm' ? { js: ESM_REQUIRE_SHIM } : {},
  external: ['buffer', 'crypto', 'node:crypto', 'node:buffer'],
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: false,
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
