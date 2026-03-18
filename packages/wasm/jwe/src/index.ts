import type * as JWEModule from "@hyperledger/identus-jwe-wasm";
// @ts-ignore – binary loader inlines the .wasm as a Buffer at build time
import jweWasm from "@hyperledger/identus-jwe-wasm/identus-jwe_bg.wasm";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let jwe: typeof import("@hyperledger/identus-jwe-wasm") | undefined;

/**
 * Lazily initialise the JWE WASM module (singleton).
 * Uses `initSync` + `default` to compile the embedded WASM buffer once,
 * then caches the module for subsequent calls.
 */
export async function getJWE(): Promise<typeof JWEModule.JWE> {
  if (jwe === undefined) {
    jwe = await import("@hyperledger/identus-jwe-wasm").then(async (module) => {
      const wasmInstance = module.initSync({ module: jweWasm });
      await module.default(wasmInstance);
      return module;
    });
  }
  return jwe!.JWE;
}

// Re-export WASM types for downstream consumers
export type {
  JWE,
  InitInput,
  InitOutput,
  SyncInitInput,
} from "@hyperledger/identus-jwe-wasm";