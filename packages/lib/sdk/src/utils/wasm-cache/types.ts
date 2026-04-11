/**
 * Types for the WASM Module IndexedDB cache.
 *
 * Stores compiled WebAssembly.Module objects in IndexedDB to avoid
 * recompilation on subsequent page loads. WebAssembly.Module is
 * structured-cloneable per the spec, making IndexedDB storage valid.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
 */

/** Identifies a specific WASM module for cache keying */
export interface WASMModuleDescriptor {
  /** Module identifier (e.g., "anoncreds", "didcomm", "jwe") */
  readonly name: string;
  /** Version or content hash — cache invalidates when this changes */
  readonly version: string;
}

/** Entry stored in IndexedDB */
export interface WASMCacheEntry {
  /** Cache key: `${name}@${version}` */
  readonly key: string;
  /** Compiled WebAssembly.Module — structured-cloneable */
  readonly module: WebAssembly.Module;
  /** Unix timestamp (ms) when cached */
  readonly cachedAt: number;
  /** Original WASM binary size in bytes */
  readonly byteSize: number;
}

/** Cache configuration */
export interface WASMCacheConfig {
  /** IndexedDB database name. Default: "identus-wasm-cache" */
  readonly dbName?: string;
  /** IndexedDB object store name. Default: "modules" */
  readonly storeName?: string;
  /** Max entry age in ms before considered stale. Default: 30 days */
  readonly maxAge?: number;
}

/** Result of a cache-aware load */
export interface WASMLoadResult {
  /** Compiled WebAssembly.Module ready for instantiation */
  readonly module: WebAssembly.Module;
  /** True if served from IndexedDB cache */
  readonly fromCache: boolean;
  /** Load time in milliseconds */
  readonly loadTimeMs: number;
}

/** Diagnostic info about a cached entry */
export interface WASMCacheStats {
  /** Module name */
  readonly name: string;
  /** Module version */
  readonly version: string;
  /** Original WASM binary size in bytes */
  readonly byteSize: number;
  /** When it was cached */
  readonly cachedAt: number;
  /** Age in milliseconds */
  readonly ageMs: number;
}
