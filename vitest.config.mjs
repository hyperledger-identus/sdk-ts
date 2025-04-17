import fs from 'fs';
import { defineConfig } from 'vitest/config'

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
        "statements": 75
      },
      include: ['src'],
      exclude: [
        'src/castor/protos',
        'src/domain/models/errors'
      ]
    },
  },
})
