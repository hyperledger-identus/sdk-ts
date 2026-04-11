export { WASMModuleCache } from "./WASMModuleCache";
export type {
  WASMModuleDescriptor,
  WASMCacheEntry,
  WASMCacheConfig,
  WASMLoadResult,
  WASMCacheStats,
} from "./types";

/** Default shared instance for SDK-wide use */
import { WASMModuleCache } from "./WASMModuleCache";
export const wasmCache = new WASMModuleCache();
