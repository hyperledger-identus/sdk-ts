import { defineConfig, coverageConfigDefaults } from 'vitest/config';

const isCI = process.env.CI === "true";

export default defineConfig({
  test: {
    projects: [
      "packages/lib/*",
      "packages/shared/*",
      "packages/wasm/*"
    ],
    coverage: {
      provider: 'istanbul',
      reporter: isCI ? ['json-summary', 'lcov'] : ['text', 'lcov', 'json-summary', 'html'],
      reportsDirectory: './coverage',
      thresholds: {
        "branches": 62,
        "functions": 73,
        "lines": 75,
        "statements": 74
      },
      include: ['packages/**/src/**'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        //TODO: remove these exclusion (pluto) once the store is ported
        'packages/lib/sdk/src/pluto/**',
        'packages/shared/domain/src/models/errors/**',
        'packages/lib/protos/src/**',
        'externals/**',
        'integration-tests/**',
        'packages/wasm/jwe/generated/**',
        'packages/wasm/anoncreds/generated/**',
        'packages/wasm/didcomm/generated/**'
      ]
    },
  },
});
