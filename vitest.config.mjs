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

export default defineConfig({
  plugins: [
    WasmPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.wasm'],
    mainFields: ['module', 'main'],
    alias: {
      // Add path aliases to match tsconfig.json
      'jwe-wasm/jwe_rust_bg.wasm': path.resolve(__dirname, './externals/generated/jwe-wasm/jwe_rust_bg.wasm'),
      'anoncreds-wasm/anoncreds_wasm_bg.wasm': path.resolve(__dirname, './externals/generated/anoncreds-wasm/anoncreds_wasm_bg.wasm'),
      'didcomm-wasm/didcomm_js_bg.wasm': path.resolve(__dirname, './externals/generated/didcomm-wasm/didcomm_js_bg.wasm'),
      'anoncreds-wasm': path.resolve(__dirname, './externals/generated/anoncreds-wasm'),
      'didcomm-wasm': path.resolve(__dirname, './externals/generated/didcomm-wasm'),
      'jwe-wasm': path.resolve(__dirname, './externals/generated/jwe-wasm')
    },
  },
  test: {
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
        'src/castor/protos',
        'src/domain/models/errors'
      ]
    },
  },
})
