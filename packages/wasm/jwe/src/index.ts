import type * as JWEModule from "@hyperledger/identus-jwe-wasm";
// @ts-ignore – binary loader inlines the .wasm as a Buffer at build time
import jweWasm from "@hyperledger/identus-jwe-wasm/identus-jwe_bg.wasm";
import { initSync, JWE } from "@hyperledger/identus-jwe-wasm";

let initialized = false;

/**
 * Lazily initialise the JWE WASM module (singleton).
 * Uses `initSync` to compile the embedded WASM buffer once,
 * then caches the module for subsequent calls.
 */
export async function getJWE(): Promise<typeof JWEModule.JWE> {
  if (!initialized) {
    initSync({ module: jweWasm });
    initialized = true;
  }
  return JWE;
}

// Re-export WASM types for downstream consumers
export type {
  JWE,
  InitInput,
  InitOutput,
  SyncInitInput,
} from "@hyperledger/identus-jwe-wasm";