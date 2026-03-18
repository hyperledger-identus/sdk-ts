import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  resolve: {
    extensions: ['.ts', '.js', '.wasm'],
    mainFields: ['module', 'main'],
  },
  test: {
    setupFiles: ['./tests/setup.ts'],
    reporters: ['verbose'],
    environment: 'jsdom',
    include: ['tests/**/*.test.ts'],
    passWithNoTests: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['json-summary', 'lcov'],
      include: ['src'],
      exclude: [
        //TODO: remove these exclusion (pluto) once the store is ported
        'src/pluto',
        'src/domain/models/errors'
      ]
    },
  },
});
