import { defineConfig } from "vitest/config";

import { baseConfig } from "../../../vitest.base.config.mjs";

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,

    include: [__dirname + "/**/*.test.ts"],
  },
});
