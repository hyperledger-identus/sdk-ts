import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  target: "node22",
  outDir: "build",
  sourcemap: true,
  tsconfig: "tsconfig.lib.json",
  dts: true,
  silent: process.env.TSUP_VERBOSE !== "1",
  external: ["google-protobuf"],
});
