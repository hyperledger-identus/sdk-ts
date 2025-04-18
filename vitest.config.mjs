import { defineConfig } from 'vitest/config'
import { getWasmJSContent } from './esbuild.base.mjs';
import { dirname, resolve } from 'node:path';

const isCI = process.env.CI === "true";

function WasmPlugin() {
  return {
    name: 'wasm-plugin',
    resolveId: (source, importer) =>
      source.endsWith('.wasm') ?
        resolve(dirname(importer), source) :
        null,
    load: (id) => id.endsWith('.wasm') ?
      getWasmJSContent(id) :
      null,
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
      provider: 'v8',
      reporter: isCI ? ['json-summary', 'lcov'] : ['text', 'html', 'lcov'],
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
