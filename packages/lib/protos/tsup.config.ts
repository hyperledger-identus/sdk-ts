import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/node_models.ts", "src/common_models.ts"],
  format: ["esm"],
  target: "node22",
  outDir: "build",
  sourcemap: true,
  tsconfig: "tsconfig.lib.json",
  clean: true,
  silent: process.env.TSUP_VERBOSE !== "1",
  external: ["google-protobuf"],
});
