// Utils
// Library of utility functions and types for common data structs, logic, and type guards.

// Re-export domain guards so SDK source can import from local utils
export { isNil, notNil, isObject, isString, isArray, notEmptyString, isEmpty, asArray, asJsonObj, expect } from "@hyperledger/identus-domain";
export { ConsoleLogger } from "./logger";
export type { Logger, LogLevel } from "./logger";
export * from "./tasks";
export type { Arrayable, Ctor, Nil, JsonObj, Normalize } from "./types";
export { WASMModuleCache, wasmCache } from "./wasm-cache";
export type { WASMModuleDescriptor, WASMCacheConfig, WASMLoadResult, WASMCacheStats } from "./wasm-cache";
