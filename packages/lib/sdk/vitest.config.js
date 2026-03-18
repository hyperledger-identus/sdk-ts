import fs from 'fs';
import { defineConfig } from 'vitest/config'
import path from "path";

const getWasmJSContent = (file) => {
  const wasmBinary = fs.readFileSync(file);
  const base64 = Buffer.from(wasmBinary).toString('base64');
  return `export default Buffer.from("${base64}", "base64");`;
};

const isCI = process.env.CI === "true";

function WasmPlugin() {
  return {
    name: 'wasm-plugin',
    resolveId: (source, importer) =>
      source.endsWith('.wasm') ?
        path.resolve(path.dirname(importer), source) :
        null,
    load: (id) => id.endsWith('.wasm') ? getWasmJSContent(id) : null,
  };
}

const rootPath = path.resolve(__dirname, '../../wasm');
const libPath = path.resolve(__dirname, '../../lib');

export default defineConfig({
  plugins: [
    WasmPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.wasm'],
    mainFields: ['module', 'main'],
    alias: {
      // Add path aliases to match tsconfig.json
      '@hyperledger/identus-jwe/identus-jwe_bg.wasm': path.resolve(rootPath, './jwe/identus-jwe_bg.wasm'),
      '@hyperledger/identus-anoncreds/identus-anoncreds_bg.wasm': path.resolve(rootPath, './anoncreds/identus-anoncreds_bg.wasm'),
      '@hyperledger/identus-didcomm/identus-didcomm_bg.wasm': path.resolve(rootPath, './didcomm/identus-didcomm_bg.wasm'),
      '@hyperledger/identus-anoncreds': path.resolve(rootPath, './anoncreds'),
      '@hyperledger/identus-didcomm': path.resolve(rootPath, './didcomm'),
      '@hyperledger/identus-jwe': path.resolve(rootPath, './jwe'),
      '@hyperledger/identus-protos': path.resolve(libPath, './protos'),
    },
  },
  test: {
    testTimeout: 12_000,
    setupFiles: ['./tests/setup.ts'],
    reporters: ['verbose'],
    environment: 'jsdom',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: isCI ? ['json-summary', 'lcov'] : ['text', 'lcov'],
      thresholds: {
        "branches": 63,
        "functions": 75,
        "lines": 75,
        "statements": 74
      },
      include: ['src'],
      exclude: [
        //TODO: remove these exclusion (pluto) once the store is ported
        'src/pluto',
      ]
    },
  },
})
