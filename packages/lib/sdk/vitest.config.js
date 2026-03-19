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
      '@hyperledger/identus-jwe-wasm': path.resolve(rootPath, './jwe/generated'),
      '@hyperledger/identus-anoncreds-wasm': path.resolve(rootPath, './anoncreds/generated'),
      '@hyperledger/identus-didcomm-wasm': path.resolve(rootPath, './didcomm/generated'),
      '@hyperledger/identus-anoncreds': path.resolve(rootPath, './anoncreds/src'),
      '@hyperledger/identus-didcomm': path.resolve(rootPath, './didcomm/src'),
      '@hyperledger/identus-jwe': path.resolve(rootPath, './jwe/src'),
      '@hyperledger/identus-protos': path.resolve(libPath, './protos'),
      '@hyperledger/identus-domain': path.resolve(libPath, '../shared/domain/src'),
    },
  },
  test: {
    testTimeout: 12_000,
    setupFiles: ['./tests/setup.ts'],
    reporters: ['verbose'],
    environment: 'jsdom',
    include: ['tests/**/*.test.ts'],

  },
})
