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

  },
});
