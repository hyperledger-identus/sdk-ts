import { defineConfig } from "vitest/config";
import { baseConfig } from "../../../vitest.base.config.mjs";

/**
 * Creates a vitest config for a WASM wrapper package.
 *
 * @param projectDir - The absolute path to the consuming project directory
 *   (typically `__dirname` from the calling config)
 */
export function createWasmVitestConfig(projectDir) {
  return defineConfig({
    ...baseConfig,
    test: {
      ...baseConfig.test,
      include: [projectDir + "/**/*.test.ts"],
    },
  });
}
